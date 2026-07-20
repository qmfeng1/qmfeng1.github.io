/* sections.jsx — header, hero, and all page sections (exported to window) */

function Header({ lang, onToggle }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const nav = [
    { href: "#work", en: "Projects", zh: "项目" },
    { href: "#research", en: "Research", zh: "研究" },
    { href: "#publications", en: "Publications", zh: "论文" },
    { href: "#about", en: "About", zh: "简介" },
    { href: "#contact", en: "Contact", zh: "联系" },
  ];
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#top">
        <span className="dot"></span>Qimin Feng
      </a>
      <nav className="nav">
        {nav.map((n) => (
          <a href={n.href} key={n.href}>
            <span className="en">{n.en}</span><span className="zh">{n.zh}</span>
          </a>
        ))}
      </nav>
      <button className="lang-toggle" type="button" onClick={onToggle} aria-label="Switch language">
        <span>{lang === "zh" ? "EN" : "中文"}</span>
      </button>
    </header>
  );
}

function Hero({ profile, lang, accent, motion }) {
  const FlowField = window.FlowField;
  const h = profile.headline;
  return (
    <section className="hero" id="top">
      <FlowField accent={accent} motion={motion} />
      <div className="hero-veil"></div>

      <div className="hero-inner">
        <div className="hero-lead">
          <Reveal as="p" className="kicker"><Bi value={profile.role} /></Reveal>
          <Reveal as="h1" className="display" delay={0.08}>
            <span className="en">{h.en[0]}<em>{h.en[1]}</em>{h.en[2]}</span>
            <span className="zh">{h.zh[0]}<em>{h.zh[1]}</em>{h.zh[2]}</span>
          </Reveal>
          <Reveal as="p" className="hero-text" delay={0.16}><Bi value={profile.text} /></Reveal>
          <Reveal className="hero-actions" delay={0.22}>
            <a className="btn btn-primary" href="#work">
              <span className="en">See the work</span><span className="zh">查看项目</span>
              <span className="btn-arrow">→</span>
            </a>
            <a className="btn btn-ghost" href={profile.cv[lang]} download>
              <span className="en">Download CV</span><span className="zh">下载简历</span>
            </a>
          </Reveal>
        </div>

        <Reveal className="hero-portrait" as="figure" delay={0.18}>
          <img src="assets/headshot.jpg" alt="Qimin Feng" />
          <figcaption>
            <span>Qimin Feng</span>
            <span>Zhong Lab · ISU</span>
          </figcaption>
        </Reveal>
      </div>

      <div className="hero-stats">
        <dl className="wrap">
          {profile.stats.map((s, i) => (
            <div className="hero-stat" key={i}>
              <dt><Bi value={s.k} /></dt>
              <dd>{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SideProjects({ data }) {
  const trackRef = React.useRef(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const updatePosition = () => {
    const track = trackRef.current;
    if (!track) return;
    setAtStart(track.scrollLeft < 8);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 8);
  };

  React.useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".side-card");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 24;
    const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <Reveal className="side-projects">
      <div className="side-projects-head">
        <div>
          <div className="proj-index">
            <span>06</span>
            <span className="tag-cat"><span className="en">Independent & applied</span><span className="zh">独立与应用项目</span></span>
          </div>
          <h2><Bi value={data.heading} /></h2>
          <p><Bi value={data.sub} /></p>
        </div>
        <div className="side-controls" aria-label="Side project navigation">
          <button type="button" onClick={() => move(-1)} disabled={atStart} aria-label="Previous side project">←</button>
          <button type="button" onClick={() => move(1)} disabled={atEnd} aria-label="Next side project">→</button>
        </div>
      </div>
      <div className="side-track" ref={trackRef} onScroll={updatePosition}>
        {data.items.map((p) => <SideProjectCard p={p} key={p.id} />)}
      </div>
    </Reveal>
  );
}

function Work({ data, sideProjects }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <SectionHead kicker={{ en: "Featured projects", zh: "代表项目" }} heading={data.heading} sub={data.sub} />
        <div className="proj-list">
          {data.items.map((p, i) => <Project key={p.id} p={p} index={i} />)}
        </div>
        <SideProjects data={sideProjects} />
      </div>
    </section>
  );
}

function Research({ data }) {
  return (
    <section className="section section-dark" id="research">
      <div className="wrap">
        <SectionHead kicker={{ en: "Research areas", zh: "研究主题" }} heading={data.heading} sub={data.sub} />
        <div className="theme-grid">
          {data.items.map((it, i) => (
            <Reveal className="theme" key={it.num} delay={i * 0.06}>
              <span className="theme-num">{it.num}</span>
              <h3><Bi value={it.title} /></h3>
              <p><Bi value={it.text} /></p>
              <span className="theme-foot"><Bi value={it.foot} /></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Publications({ data }) {
  return (
    <section className="section section-band" id="publications">
      <div className="wrap">
        <SectionHead kicker={{ en: "Selected publications", zh: "代表论文" }} heading={data.heading} />
        <ol className="pub-list">
          {data.items.map((pub, i) => (
            <Reveal as="li" className="pub" key={i} delay={Math.min(i, 4) * 0.04}>
              <span className="pub-num"></span>
              <div className="pub-main">
                <h3 className="pub-title"><Bi value={pub.title} /></h3>
                <p className="pub-authors">
                  {pub.authors.map((a, j) => (
                    <React.Fragment key={j}>
                      {a === "Qimin Feng" ? <b>{a}</b> : a}{j < pub.authors.length - 1 ? ", " : ""}
                    </React.Fragment>
                  ))}
                </p>
                <span className="pub-venue"><Bi value={pub.venue} /></span>
              </div>
              <div className="pub-links">
                {pub.links.map((l) => (
                  <a className="pub-link" href={l.href} key={l.label} target="_blank" rel="noopener">{l.label} ↗</a>
                ))}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About({ data }) {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <Reveal>
          <p className="kicker"><span className="en">About</span><span className="zh">简介</span></p>
          <h2 className="display" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
            <Bi value={data.heading} />
          </h2>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <Bi value={{
            en: data.p.en.map((t, i) => <p key={i}>{t}</p>),
            zh: data.p.zh.map((t, i) => <p key={i}>{t}</p>),
          }} />
          <ul className="facts">
            {data.facts.map((f, i) => (
              <li key={i}>
                <span className="k"><Bi value={f.k} /></span>
                <span className="v"><Bi value={f.v} /></span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Contact({ data, lang }) {
  return (
    <section className="section section-dark" id="contact">
      <div className="wrap contact-grid">
        <Reveal>
          <p className="kicker"><span className="en">Contact</span><span className="zh">联系</span></p>
          <h2 className="display"><Bi value={data.heading} /></h2>
        </Reveal>
        <Reveal className="contact-links" delay={0.08}>
          {data.links.map((l) => {
            const href = typeof l.href === "string" ? l.href : l.href[lang];
            return (
              <a className="contact-link" href={href} key={l.label} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener" download={l.download || undefined}>
                <span>{l.label}</span>
                <span className="meta"><Bi value={l.meta} /> <span className="arrow">↗</span></span>
              </a>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <a className="brand" href="#top"><span className="dot"></span>Qimin Feng</a>
        <span className="footer-meta">
          <span className="en">Robotics · embedded control · multisensor perception · © 2026</span>
          <span className="zh">机器人 · 嵌入式控制 · 多传感器感知 · © 2026</span>
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, Hero, SideProjects, Work, Research, Publications, About, Contact, Footer });
