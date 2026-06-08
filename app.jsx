/* app.jsx — composition, language state, Tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "art": "editorial",
  "accent": "#1690b5",
  "motion": "alive",
  "defaultLang": "en"
}/*EDITMODE-END*/;

const ACCENTS = [
  "#1690b5", // ocean cyan
  "#0e8f8f", // teal
  "#2477a8", // ocean blue
  "#13a3c0", // bright aqua
  "#3a6ea5", // deep blue
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // language (separate from tweaks; controlled by header toggle + persisted)
  const [lang, setLang] = React.useState(
    () => localStorage.getItem("qimin-lang") || t.defaultLang || "en"
  );

  // apply art direction / motion / accent to <html>
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-art", t.art);
    root.setAttribute("data-motion", t.motion);
    root.style.setProperty("--accent", t.accent);
    root.style.setProperty("--accent-ink", "#ffffff");
  }, [t.art, t.motion, t.accent]);

  // apply language
  React.useEffect(() => {
    document.body.classList.toggle("zh-mode", lang === "zh");
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    localStorage.setItem("qimin-lang", lang);
  }, [lang]);

  const S = window.SITE;

  return (
    <React.Fragment>
      <Header lang={lang} onToggle={() => setLang((l) => (l === "zh" ? "en" : "zh"))} />
      <main>
        <Hero profile={S.profile} accent={t.accent} motion={t.motion} />
        <Work data={S.projects} />
        <Research data={S.research} />
        <Publications data={S.publications} />
        <About data={S.about} />
        <Contact data={S.contact} />
      </main>
      <Footer />

      <TweaksPanel>
        <TweakSection label="Art direction" />
        <TweakRadio
          label="Style"
          value={t.art}
          options={["editorial", "minimal", "mono"]}
          onChange={(v) => setTweak("art", v)}
        />
        <TweakSection label="Color" />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Motion" />
        <TweakRadio
          label="Level"
          value={t.motion}
          options={["minimal", "subtle", "alive"]}
          onChange={(v) => setTweak("motion", v)}
        />
        <TweakSection label="Language" />
        <TweakRadio
          label="Default"
          value={lang}
          options={["en", "zh"]}
          onChange={(v) => setLang(v)}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
