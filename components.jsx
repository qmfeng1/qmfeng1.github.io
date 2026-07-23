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

function FlowSensingDiagram() {
  return (
    <div className="flow-diagram" role="img" aria-label="Five pressure sensors and a PIV system synchronized by a Teensy trigger, feeding a flow reconstruction model">
      <div className="flow-diagram-top">
        <div className="flow-node flow-node-accent">
          <span className="flow-node-kicker">Real-time controller</span>
          <strong>Teensy</strong>
          <small>shared μs clock</small>
        </div>
        <span className="flow-connector">→</span>
        <div className="flow-node">
          <span className="flow-node-kicker">Pressure array</span>
          <strong>5 × MS5803</strong>
          <small>80 Hz · I²C mux</small>
        </div>
        <span className="flow-connector flow-connector-split">↘</span>
        <div className="flow-node">
          <span className="flow-node-kicker">Optical field</span>
          <strong>PIV / PTU-X</strong>
          <small>1 ms TTL trigger</small>
        </div>
      </div>
      <div className="flow-sync-line"><span>hardware synchronized</span></div>
      <div className="flow-output">
        <span className="flow-output-input">sparse pressure + PIV patches</span>
        <span className="flow-connector">→</span>
        <div className="flow-node flow-node-output">
          <span className="flow-node-kicker">Sensor fusion</span>
          <strong>Full-field reconstruction</strong>
          <small>velocity · vorticity · uncertainty</small>
        </div>
      </div>
    </div>
  );
}

function MediaItem({ item }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        aria-label={item.alt || "Project video"}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      ></video>
    );
  }
  return <img src={item.src} alt={item.alt || ""} loading="lazy" />;
}

function CarouselMediaItem({ item, active }) {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      const playPromise = video.play();
      if (playPromise) playPromise.catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  if (item.type === "video-duo") {
    return (
      <div className="media-carousel-duo">
        {item.sources.map((source, i) => (
          <div className="media-carousel-duo-item" key={`${source.src}-${i}`}>
            <CarouselMediaItem item={source} active={active} />
          </div>
        ))}
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        src={item.src}
        aria-label={item.alt || "Project video"}
        autoPlay={active}
        muted
        loop
        playsInline
        preload={active ? "auto" : "metadata"}
      ></video>
    );
  }
  return <img src={item.src} alt={item.alt || ""} loading={active ? "eager" : "lazy"} />;
}

function MediaCarousel({ items, fallbackLabel }) {
  const [index, setIndex] = React.useState(0);
  const touchStartX = React.useRef(null);

  const goTo = (nextIndex) => {
    const bounded = Math.max(0, Math.min(items.length - 1, nextIndex));
    setIndex(bounded);
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current == null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchStartX.current - endX;
    touchStartX.current = null;
    if (Math.abs(distance) < 42) return;
    goTo(index + (distance > 0 ? 1 : -1));
  };

  const item = items[index];

  return (
    <div
      className="media-carousel"
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex="0"
      aria-label="MARIS project video gallery"
    >
      <div className="media-carousel-slide" key={item.src}>
        <CarouselMediaItem item={item} active />
        <div className="media-caption media-carousel-caption">
          <Bi value={item.label || fallbackLabel} />
        </div>
      </div>

      <div className="media-carousel-controls">
        <button type="button" onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous MARIS video">←</button>
        <span aria-live="polite">{index + 1} / {items.length}</span>
        <button type="button" onClick={() => goTo(index + 1)} disabled={index === items.length - 1} aria-label="Next MARIS video">→</button>
      </div>

      {index < items.length - 1 && (
        <div className="media-swipe-hint">
          <span className="en">More videos to the right · swipe horizontally</span>
          <span className="zh">右侧还有视频 · 手机端左右滑动查看</span>
        </div>
      )}
    </div>
  );
}

/* Project media supports a single asset, a two-up gallery, a carousel, or the sensing diagram. */
function MediaSlot({ media, src }) {
  const ratio = (media && media.ratio) || "4 / 3";
  const sources = (media && media.sources) || (src ? [{ type: media.type, src }] : []);
  const isDiagram = media && media.type === "diagram";
  const isCarousel = sources.length > 2;
  return (
    <div className={`media-slot ${sources.length === 2 ? "media-slot-duo" : ""} ${isCarousel ? "media-slot-carousel" : ""} ${isDiagram ? "media-slot-diagram" : ""}`} style={{ "--slot-ratio": ratio }}>
      {isDiagram ? (
        <FlowSensingDiagram />
      ) : isCarousel ? (
        <MediaCarousel items={sources} fallbackLabel={media.label} />
      ) : sources.length ? (
        <div className="media-grid">
          {sources.map((item, i) => (
            <div className="media-item" key={`${item.src}-${i}`}>
              <MediaItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="media-label">
          <span className="mt"><Bi value={media.label} /></span>
        </div>
      )}
      {!isCarousel && media && media.label && (sources.length || isDiagram) && (
        <div className="media-caption"><Bi value={media.label} /></div>
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

        {p.links && p.links.length > 0 && (
          <div className="proj-links">
            {p.links.map((link) => (
              <a href={link.href} key={link.href} target="_blank" rel="noopener">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}

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

function SideProjectCard({ p }) {
  const Tag = p.href ? "a" : "article";
  const linkProps = p.href ? { href: p.href, target: "_blank", rel: "noopener" } : {};
  return (
    <Tag className={`side-card ${p.blurb ? "" : "side-card-quiet"}`} {...linkProps}>
      <div className="side-card-media">
        {p.type === "video" ? (
          <video src={p.src} aria-label={p.alt} autoPlay muted loop playsInline preload="metadata"></video>
        ) : (
          <img src={p.src} alt={p.alt || ""} loading="lazy" />
        )}
      </div>
      <div className="side-card-body">
        <p className="side-card-cat"><Bi value={p.cat} /></p>
        <h3><Bi value={p.title} /></h3>
        {p.blurb && <p className="side-card-blurb"><Bi value={p.blurb} /></p>}
        {(p.meta || p.cta) && (
          <div className="side-card-foot">
            <span><Bi value={p.meta} /></span>
            {p.cta && <strong><Bi value={p.cta} /> ↗</strong>}
          </div>
        )}
      </div>
    </Tag>
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

Object.assign(window, { Bi, Reveal, MediaSlot, Project, SideProjectCard, SectionHead });
