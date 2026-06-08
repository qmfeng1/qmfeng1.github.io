/* flowfield.jsx — animated OCEAN scene for the hero.
   Layered sine "waves" (depth bands) drifting at parallax speeds, plus rising bubbles.
   rAF-driven (CSS animation is frozen in preview; rAF is not). Exports window.FlowField */

function FlowField({ accent = "#178fb8", motion = "alive" }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cfg = {
      minimal: { speed: 0, bubbles: 0 },
      subtle:  { speed: 0.45, bubbles: 26 },
      alive:   { speed: 1, bubbles: 54 },
    }[motion] || { speed: 1, bubbles: 54 };

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0, t = 0;
    let bubbles = [];
    const animating = !reduce && cfg.speed > 0;

    function hexToRgb(hex) {
      const m = hex.replace("#", "");
      const n = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
      const i = parseInt(n, 16);
      return [(i >> 16) & 255, (i >> 8) & 255, i & 255];
    }
    const [ar, ag, ab] = hexToRgb(accent);
    const rgba = (r, g, b, a) => `rgba(${r|0},${g|0},${b|0},${a})`;

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seedBubbles() {
      bubbles = new Array(cfg.bubbles).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 2.4,
        sp: 0.2 + Math.random() * 0.7,
        sway: Math.random() * Math.PI * 2,
        swayAmp: 6 + Math.random() * 18,
      }));
    }

    // wave layers: back (top, lighter/surface) → front (bottom, deep).
    // baseline as fraction of height, amplitude px, wavelength px, speed, color rgba.
    const layers = [
      { base: 0.16, amp: 26, len: 520, sp: 0.55, col: [110, 205, 226], a: 0.10 },
      { base: 0.34, amp: 34, len: 680, sp: -0.4, col: [60, 160, 200], a: 0.12 },
      { base: 0.54, amp: 42, len: 820, sp: 0.32, col: [26, 110, 162], a: 0.16 },
      { base: 0.74, amp: 52, len: 980, sp: -0.24, col: [10, 64, 104], a: 0.22 },
    ];

    function drawBackground() {
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#0a4a66");   // sunlit surface
      g.addColorStop(0.45, "#063a55");
      g.addColorStop(1, "#03202f");   // deep
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      // faint light shafts from top-left
      const lg = ctx.createLinearGradient(0, 0, w * 0.6, h);
      lg.addColorStop(0, rgba(150, 220, 235, 0.10));
      lg.addColorStop(0.5, rgba(150, 220, 235, 0));
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, w, h);
    }

    function drawWave(L, time) {
      const baseY = h * L.base;
      const phase = time * L.sp * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      const step = 14;
      for (let x = 0; x <= w; x += step) {
        const y =
          baseY +
          Math.sin(x / L.len * Math.PI * 2 + phase) * L.amp +
          Math.sin(x / (L.len * 0.4) * Math.PI * 2 - phase * 1.3) * (L.amp * 0.28);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      const [cr, cg, cb] = L.col;
      ctx.fillStyle = rgba(cr, cg, cb, L.a);
      ctx.fill();
      // crest highlight stroke
      ctx.beginPath();
      for (let x = 0; x <= w; x += step) {
        const y =
          baseY +
          Math.sin(x / L.len * Math.PI * 2 + phase) * L.amp +
          Math.sin(x / (L.len * 0.4) * Math.PI * 2 - phase * 1.3) * (L.amp * 0.28);
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = rgba(cr + 60, cg + 50, cb + 40, L.a * 1.6);
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    function drawBubbles() {
      for (const b of bubbles) {
        b.y -= b.sp * cfg.speed;
        b.sway += 0.02 * cfg.speed;
        const x = b.x + Math.sin(b.sway) * b.swayAmp;
        if (b.y < -10) { b.y = h + 10; b.x = Math.random() * w; }
        const depth = b.y / h; // 1 deep, 0 surface
        const op = 0.05 + (1 - depth) * 0.22;
        ctx.beginPath();
        ctx.arc(x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = rgba(ar + 120, ag + 90, ab + 70, op * 0.5);
        ctx.fill();
        ctx.strokeStyle = rgba(190, 235, 245, op);
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    }

    function render(time) {
      drawBackground();
      for (const L of layers) drawWave(L, time);
      drawBubbles();
    }

    function frame() {
      t += 0.01 * cfg.speed;
      render(t);
      raf = requestAnimationFrame(frame);
    }

    function start() {
      resize();
      seedBubbles();
      render(0);
      if (animating) { cancelAnimationFrame(raf); frame(); }
    }
    start();

    const onResize = () => { resize(); seedBubbles(); render(t); };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [accent, motion]);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true"></canvas>;
}

window.FlowField = FlowField;
