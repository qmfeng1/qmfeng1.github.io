/* components.jsx — shared building blocks (exported to window) */

/* Bilingual value: string → as-is; {en,zh} → two spans toggled by CSS */
function Bi({ value }) {
  if (value == null) return null;
  if (typeof value === "string") return value;
  return (
    <React.Fragment>
      <span className="en">{value.en}</span>
      <span className="zh">{value.zh}</span>
    </React.Fragment>
  );
}

/* Scroll-reveal wrapper.
   IntersectionObserver does not fire reliably inside the preview iframe, so this
   uses a scroll-position check (rect against viewport) with an initial pass. */
/* Scroll-reveal wrapper.
   The preview iframe freezes rAF/timers/CSS-animation when unfocused, so anything in
   the initial viewport is revealed SYNCHRONOUSLY at mount (always visible, everywhere).
   Below-the-fold elements get an rAF entrance when scrolled into view, with a timer
   safety that forces them visible regardless. */
function Reveal({ children, className = "", delay = 0, as = "div", ...rest }) {
  const ref = React.useRef(null);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shift =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--reveal-shift")) || 0;

    const setFinal = () => { el.style.opacity = "1"; el.style.transform = "none"; };
    const setHidden = () => { el.style.opacity = "0"; el.style.transform = `translateY(${shift}px)`; };

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const r0 = el.getBoundingClientRect();
    const inView0 = r0.top < vh * 0.92 && r0.bottom > 0;

    // Above the fold (or reduced motion / no shift): show immediately.
    if (reduce || shift === 0 || inView0) { setFinal(); return; }

    setHidden();
    const dur = 720;
    let raf = 0, started = false, done = false, startAt = 0;
    const tick = (now) => {
      if (!startAt) startAt = now + delay * 1000;
      let p = (now - startAt) / dur;
      if (p < 0) { raf = requestAnimationFrame(tick); return; }
      if (p >= 1) { setFinal(); done = true; return; }
      const e = 1 - Math.pow(1 - p, 3);
      el.style.opacity = String(e);
      el.style.transform = `translateY(${(shift * (1 - e)).toFixed(2)}px)`;
      raf = requestAnimationFrame(tick);
    };
    const removeListeners = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
    const check = () => {
      if (started || done) return;
      const r = el.getBoundingClientRect();
      const v = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < v * 0.9 && r.bottom > 0) {
        started = true;
        removeListeners();
        raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const safety = setTimeout(() => { if (!started && !done) setFinal(); }, 1400);

    return () => {
      cancelAnimationFrame(raf);
      removeListeners();
      clearTimeout(safety);
    };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* Media slot — reserved space the user fills with image/video later.
   If `src` is provided it renders the media; otherwise a labelled placeholder. */
function MediaSlot({ media, src }) {
  const ratio = (media && media.ratio) || "4 / 3";
  const isVideo = media && media.type === "video";
  return (
    <div className="media-slot" style={{ "--slot-ratio": ratio }}>
      {src ? (
        isVideo ? (
          <video src={src} autoPlay muted loop playsInline></video>
        ) : (
          <img src={src} alt="" />
        )
      ) : (
        <div className="media-label">
          <span className="glyph" aria-hidden="true">
            {isVideo ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2.5"></rect>
                <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"></path>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="4" width="18" height="16" rx="2.5"></rect>
                <circle cx="8.5" cy="9.5" r="1.6"></circle>
                <path d="M21 16l-5-5-7 7"></path>
              </svg>
            )}
          </span>
          <span className="mt"><Bi value={media.label} /></span>
          <span className="ms">{isVideo ? "video" : "image"} · {media.note}</span>
        </div>
      )}
    </div>
  );
}

/* A single project entry */
function Project({ p, index }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Reveal className={`proj ${open ? "open" : ""}`} delay={Math.min(index, 2) * 0.05}>
      <div className="proj-body">
        <div className="proj-index">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="tag-cat"><Bi value={p.cat} /></span>
        </div>
        <h3><Bi value={p.title} /></h3>
        <p className="proj-blurb"><Bi value={p.blurb} /></p>
        {p.metrics && (
          <div className="proj-metrics">
            {p.metrics.map((m, i) => (
              <div className="proj-metric" key={i}>
                <strong>{m.v}</strong>
                <span><Bi value={m.k} /></span>
              </div>
            ))}
          </div>
        )}
        <div className="tag-row">
          {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>

        <div className="proj-more" aria-hidden={!open}>
          <div>
            <div className="proj-more-inner">
              <ul>
                <Bi value={{
                  en: p.more.en.map((x, i) => <li key={i}>{x}</li>),
                  zh: p.more.zh.map((x, i) => <li key={i}>{x}</li>),
                }} />
              </ul>
            </div>
          </div>
        </div>

        <button className="proj-toggle" onClick={() => setOpen((o) => !o)} type="button">
          <span className="en">{open ? "Show less" : "What I did"}</span>
          <span className="zh">{open ? "收起" : "我做了什么"}</span>
          <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
        </button>
      </div>

      <div className="proj-media">
        <MediaSlot media={p.media} src={p.src} />
      </div>
    </Reveal>
  );
}

/* Section header */
function SectionHead({ kicker, heading, sub }) {
  return (
    <Reveal className="section-head">
      <p className="kicker"><Bi value={kicker} /></p>
      <h2 className="display"><Bi value={heading} /></h2>
      {sub && <p className="sub"><Bi value={sub} /></p>}
    </Reveal>
  );
}

Object.assign(window, { Bi, Reveal, MediaSlot, Project, SectionHead });
