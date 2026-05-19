// Main app: router + tweaks panel mount.

const { useState: appUseState, useEffect: appUseEffect } = React;

const ACCENT_OPTIONS = {
  "chartreuse":   ["oklch(0.86 0.18 130)", "oklch(0.74 0.17 165)", "oklch(0.80 0.15 60)"],
  "terminal":     ["oklch(0.82 0.16 145)", "oklch(0.74 0.14 175)", "oklch(0.78 0.13 90)"],
  "amber":        ["oklch(0.80 0.17 75)",  "oklch(0.74 0.14 30)",  "oklch(0.78 0.13 130)"],
  "cyan":         ["oklch(0.82 0.13 215)", "oklch(0.76 0.16 305)", "oklch(0.80 0.14 160)"],
  "magenta":      ["oklch(0.78 0.18 340)", "oklch(0.74 0.15 270)", "oklch(0.80 0.14 60)"],
};

const FONT_OPTIONS = {
  "Geist":          { sans: '"Geist", system-ui, sans-serif', mono: '"Geist Mono", ui-monospace, monospace' },
  "Space + JetBrains": { sans: '"Space Grotesk", system-ui, sans-serif', mono: '"JetBrains Mono", ui-monospace, monospace' },
  "IBM Plex":       { sans: '"IBM Plex Sans", system-ui, sans-serif', mono: '"IBM Plex Mono", ui-monospace, monospace' },
};

const DENSITY_OPTIONS = {
  compact:  { containerW: 1180, baseFs: 15, gridGap: 12 },
  cozy:     { containerW: 1240, baseFs: 16, gridGap: 16 },
  spacious: { containerW: 1320, baseFs: 17, gridGap: 24 },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "chartreuse",
  "font": "Geist",
  "density": "cozy",
  "showCommitFeed": true,
  "showClock": true
}/*EDITMODE-END*/;

function applyTweaks(t) {
  const root = document.documentElement;
  const accents = ACCENT_OPTIONS[t.accent] || ACCENT_OPTIONS.chartreuse;
  root.style.setProperty("--accent", accents[0]);
  root.style.setProperty("--accent-2", accents[1]);
  root.style.setProperty("--accent-3", accents[2]);
  const fonts = FONT_OPTIONS[t.font] || FONT_OPTIONS.Geist;
  root.style.setProperty("--font-sans", fonts.sans);
  root.style.setProperty("--font-mono", fonts.mono);
  const d = DENSITY_OPTIONS[t.density] || DENSITY_OPTIONS.cozy;
  root.style.setProperty("--container-w", d.containerW + "px");
  root.style.setProperty("--base-fs", d.baseFs + "px");
  root.style.setProperty("--grid-gap", d.gridGap + "px");
  root.style.setProperty("--show-clock", t.showClock ? "inline" : "none");
}

function parseHash() {
  const h = window.location.hash || "#/";
  const [, path = "", queryStr = ""] = h.match(/^#\/([^?]*)(?:\?(.*))?$/) || [];
  const query = {};
  queryStr.split("&").filter(Boolean).forEach((p) => {
    const [k, v] = p.split("=");
    query[k] = decodeURIComponent(v || "");
  });
  const parts = path.split("/").filter(Boolean);
  return { path, parts, query };
}

function useRoute() {
  const [route, setRoute] = appUseState(parseHash());
  appUseEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return route;
}

function App() {
  const data = window.UNGLAM_DATA;
  const route = useRoute();
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  appUseEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  const top = route.parts[0] || "home";

  let view, routeKey;
  if (!top || top === "home" || route.path === "") {
    view = <HomePage data={data} />;
    routeKey = "home";
  } else if (top === "writing") {
    view = <WritingPage data={data} query={route.query} />;
    routeKey = "writing";
  } else if (top === "article") {
    view = <ArticlePage data={data} slug={route.parts[1]} />;
    routeKey = "article";
  } else if (top === "streams") {
    view = <StreamsPage data={data} />;
    routeKey = "streams";
  } else if (top === "about") {
    view = <AboutPage />;
    routeKey = "about";
  } else {
    view = <NotFound />;
    routeKey = "404";
  }

  return (
    <>
      <Header route={routeKey} />
      <div key={routeKey} className="route-fade">
        {view}
      </div>
      <Footer />
      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent">
          <SwatchPicker
            options={ACCENT_OPTIONS}
            value={tweaks.accent}
            onChange={(v) => setTweak("accent", v)}
          />
        </TweakSection>
        <TweakSection label="Type">
          <TweakRadio
            value={tweaks.font}
            options={Object.keys(FONT_OPTIONS)}
            onChange={(v) => setTweak("font", v)}
          />
        </TweakSection>
        <TweakSection label="Density">
          <TweakRadio
            value={tweaks.density}
            options={Object.keys(DENSITY_OPTIONS)}
            onChange={(v) => setTweak("density", v)}
          />
        </TweakSection>
        <TweakSection label="Chrome">
          <TweakToggle
            label="Live clock in nav"
            value={tweaks.showClock}
            onChange={(v) => setTweak("showClock", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

// Custom swatch picker that shows named accent options
function SwatchPicker({ options, value, onChange }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginTop: 8 }}>
      {Object.entries(options).map(([name, palette]) => (
        <button
          key={name}
          onClick={() => onChange(name)}
          title={name}
          style={{
            display: "flex", flexDirection: "column", gap: 4, padding: 6,
            background: value === name ? "rgba(255,255,255,0.08)" : "transparent",
            border: `1px solid ${value === name ? palette[0] : "rgba(255,255,255,0.12)"}`,
            cursor: "pointer", borderRadius: 4,
          }}
        >
          <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
            <span style={{ width: 14, height: 14, background: palette[0], borderRadius: "50%" }}></span>
            <span style={{ width: 8, height: 8, background: palette[1], borderRadius: "50%" }}></span>
            <span style={{ width: 6, height: 6, background: palette[2], borderRadius: "50%" }}></span>
          </div>
          <span style={{ fontSize: 10, color: "#999", fontFamily: "monospace" }}>{name}</span>
        </button>
      ))}
    </div>
  );
}

function NotFound() {
  return (
    <main className="container" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="font-mono" style={{ color: "var(--accent)", fontSize: 13 }}>$ cat /nope</div>
      <h1 style={{ fontSize: 56, margin: "16px 0 0", fontWeight: 600 }}>404</h1>
      <p style={{ color: "var(--muted)", fontSize: 16, marginTop: 12 }}>
        That route doesn't exist. <a href="#/" className="font-mono" style={{ color: "var(--accent)" }}>go home →</a>
      </p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
