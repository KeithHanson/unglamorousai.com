// Shared chrome for UnglamorousAI: Header, Footer, type chips, etc.

const { useState, useEffect, useRef } = React;

// ---------- Type chip ----------
function TypeChip({ type, size = "sm" }) {
  const colors = {
    TUTORIAL: { fg: "var(--accent)", bg: "color-mix(in oklch, var(--accent) 12%, transparent)" },
    NOTE:     { fg: "var(--fg)",     bg: "color-mix(in oklch, var(--fg) 8%, transparent)" },
    LINK:     { fg: "var(--accent-2)", bg: "color-mix(in oklch, var(--accent-2) 12%, transparent)" },
    STREAM:   { fg: "var(--accent-3)", bg: "color-mix(in oklch, var(--accent-3) 14%, transparent)" },
  };
  const c = colors[type] || colors.NOTE;
  const fontSize = size === "lg" ? 11 : 10;
  return (
    <span
      className="font-mono"
      style={{
        color: c.fg,
        background: c.bg,
        border: `1px solid ${c.fg}`,
        padding: "2px 7px",
        fontSize,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 500,
        lineHeight: 1.4,
        display: "inline-block",
        borderRadius: 2,
      }}
    >
      {type}
    </span>
  );
}

// ---------- Tag ----------
function Tag({ name, onClick, active, asSpan }) {
  const sharedStyle = {
    color: active ? "var(--bg)" : "var(--muted)",
    background: active ? "var(--accent)" : "transparent",
    border: `1px solid ${active ? "var(--accent)" : "var(--border)"}`,
    padding: "3px 8px",
    fontSize: 11,
    letterSpacing: "0.02em",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 120ms",
  };
  if (asSpan) {
    return <span className="font-mono" style={sharedStyle}>#{name}</span>;
  }
  return (
    <a
      href={`#/writing?tag=${name}`}
      onClick={(e) => { if (onClick) { e.preventDefault(); onClick(name); } }}
      className="font-mono"
      style={sharedStyle}
    >
      #{name}
    </a>
  );
}

// ---------- Header ----------
function Header({ route }) {
  const [time, setTime] = useState(() => fmtClock(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(fmtClock(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  const nav = [
    { label: "writing", href: "#/writing" },
    { label: "streams", href: "#/streams" },
    { label: "about", href: "#/about" },
    { label: "rss", href: "#/feed.xml" },
  ];

  const active = (href) => {
    if (href === "#/writing" && (route === "writing" || route === "article")) return true;
    return href === `#/${route}`;
  };

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 24, padding: "14px 0" }}>
        <a href="#/" style={{ textDecoration: "none", color: "var(--fg)", display: "flex", alignItems: "center", gap: 10 }}>
          <span
            className="font-mono"
            style={{ color: "var(--accent)", fontSize: 14, fontWeight: 600 }}
          >
            <span style={{ opacity: 0.5 }}>~/</span>U<span style={{ opacity: 0.5 }}>nglamorous</span>AI
            <span className="blink" style={{ marginLeft: 4, color: "var(--accent)" }}>▊</span>
          </span>
        </a>

        <nav style={{ display: "flex", gap: 4, marginLeft: "auto", alignItems: "center" }}>
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono"
              style={{
                color: active(n.href) ? "var(--fg)" : "var(--muted)",
                textDecoration: "none",
                fontSize: 13,
                padding: "6px 12px",
                borderBottom: active(n.href) ? "1px solid var(--accent)" : "1px solid transparent",
                transition: "color 120ms",
              }}
            >
              {n.label}
            </a>
          ))}
          <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, marginLeft: 12, opacity: 0.6 }}>
            {time}
          </span>
        </nav>
      </div>
    </header>
  );
}

function fmtClock(d) {
  const h = String(d.getHours()).padStart(2, "0");
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: 96,
        padding: "48px 0 64px",
        color: "var(--muted)",
      }}
    >
      <div className="container" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div className="font-mono" style={{ color: "var(--fg)", fontSize: 14, marginBottom: 12 }}>
            <span style={{ color: "var(--accent)" }}>$</span> cat /etc/about
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 360 }}>
            UnglamorousAI is a working notebook for the boring AI that is quietly invading
            every corporation. Written by a practitioner, not a pundit.
          </p>
        </div>
        <FooterCol title="site" items={[["home","#/"],["writing","#/writing"],["streams","#/streams"],["about","#/about"]]} />
        <FooterCol title="feeds" items={[["rss","#/feed.xml"],["json feed","#/feed.json"],["newsletter","#/about"]]} />
        <FooterCol title="elsewhere" items={[["github","https://github.com"],["mastodon","https://mastodon.social"],["bluesky","https://bsky.app"]]} />
      </div>
      <div className="container font-mono" style={{ marginTop: 48, borderTop: "1px dashed var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", fontSize: 12 }}>
        <div className="font-mono" style={{ fontSize: 12, color: "var(--muted-2)" }}>
          © 2026 UnglamorousAI · CC BY-SA · no AI was harmed
        </div>
        <div className="font-mono" style={{ fontSize: 12, color: "var(--muted-2)" }}>
          built unglamorously
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
        {title}
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="font-mono" style={{ color: "var(--muted)", fontSize: 13, textDecoration: "none" }}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Post card (used in lists) ----------
function PostCard({ post, variant = "default" }) {
  const url = `#/article/${post.slug}`;
  if (variant === "row") {
    return (
      <a href={url} className="post-row" style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr auto",
        gap: 24,
        padding: "20px 0",
        borderBottom: "1px solid var(--border)",
        textDecoration: "none",
        color: "inherit",
        alignItems: "baseline",
      }}>
        <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 12 }}>
          {fmtDate(post.date)}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <TypeChip type={post.type} />
            <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11 }}>
              {post.readingTime}{post.type === "STREAM" ? "m" : " min read"}
            </span>
          </div>
          <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, lineHeight: 1.35, color: "var(--fg)" }}>
            {post.title}
          </h3>
          <p style={{ margin: "6px 0 0", color: "var(--muted)", fontSize: 14, lineHeight: 1.55 }}>
            {post.excerpt}
          </p>
          <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
            {post.tags.map((t) => <Tag key={t} name={t} asSpan />)}
          </div>
        </div>
        <span className="post-row-arrow font-mono" style={{ color: "var(--accent)", fontSize: 14 }}>→</span>
      </a>
    );
  }

  return (
    <a href={url} className="post-card" style={{
      display: "flex",
      flexDirection: "column",
      padding: 20,
      border: "1px solid var(--border)",
      background: "var(--bg-elev)",
      textDecoration: "none",
      color: "inherit",
      minHeight: 240,
      transition: "border-color 160ms, transform 160ms",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <TypeChip type={post.type} />
        <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11 }}>
          {fmtDate(post.date)}
        </span>
        <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, marginLeft: "auto" }}>
          {post.readingTime}{post.type === "STREAM" ? "m" : " min"}
        </span>
      </div>
      <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, lineHeight: 1.25, color: "var(--fg)" }}>
        {post.title}
      </h3>
      <p style={{ margin: "10px 0 0", color: "var(--muted)", fontSize: 14, lineHeight: 1.55, flex: 1 }}>
        {post.excerpt}
      </p>
      <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
        {post.tags.slice(0, 3).map((t) => <Tag key={t} name={t} asSpan />)}
      </div>
    </a>
  );
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

function fmtDateLong(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

// ---------- Section header ----------
function SectionHeader({ prompt, hint, action }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 20, gap: 24 }}>
      <h2 className="font-mono" style={{
        margin: 0, fontSize: 14, fontWeight: 500, color: "var(--fg)",
        letterSpacing: "0.02em",
      }}>
        <span style={{ color: "var(--accent)" }}>$</span> {prompt}
        {hint && <span style={{ color: "var(--muted-2)", marginLeft: 10, fontWeight: 400 }}>— {hint}</span>}
      </h2>
      {action}
    </div>
  );
}

Object.assign(window, { TypeChip, Tag, Header, Footer, PostCard, fmtDate, fmtDateLong, SectionHeader });
