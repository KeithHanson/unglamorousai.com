// All page views for UnglamorousAI.

const { useMemo: pageUseMemo, useState: pageUseState } = React;

// =========================================================================
// HOME
// =========================================================================
function HomePage({ data }) {
  const recent = data.POSTS.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0, 3);
  const more = data.POSTS.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(3, 6);
  return (
    <main>
      <Hero />
      <section className="container" style={{ marginTop: 64 }}>
        <SectionHeader prompt="ls -lt ./writing | head -3" hint="three most recent" action={
          <a href="#/writing" className="font-mono" style={{ color: "var(--accent)", textDecoration: "none", fontSize: 13 }}>
            see all →
          </a>
        }/>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {recent.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>

      <section className="container" style={{ marginTop: 80, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48 }}>
        <div>
          <SectionHeader prompt="tail ./writing" hint="also recent" />
          <div>
            {more.map((p) => <PostCard key={p.slug} post={p} variant="row" />)}
          </div>
        </div>
        <CommitFeed commits={data.COMMITS} />
      </section>

      <section className="container" style={{ marginTop: 96 }}>
        <Newsletter />
      </section>
    </main>
  );
}

function Hero() {
  return (
    <section className="container" style={{ paddingTop: 80, paddingBottom: 24 }}>
      <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 12, marginBottom: 24, letterSpacing: "0.04em" }}>
        <span style={{ color: "var(--accent)" }}>// </span>
        a working notebook for the AI that isn't on the keynote stage
      </div>
      <h1 style={{
        margin: 0,
        fontSize: "clamp(40px, 7vw, 88px)",
        lineHeight: 0.98,
        letterSpacing: "-0.025em",
        fontWeight: 600,
        maxWidth: 1100,
      }}>
        The boring AI that is{" "}
        <span style={{ color: "var(--accent)" }}>quietly invading</span>{" "}
        every corporation and every piece of software you already use.
      </h1>
      <p style={{
        margin: "28px 0 0",
        maxWidth: 720,
        fontSize: 18,
        lineHeight: 1.55,
        color: "var(--muted)",
      }}>
        Long-form tutorials, sharp notes, and live streams from someone who actually ships
        purpose-built agents into production. No demos. No leaderboards. Just the unglamorous
        parts that move the needle.
      </p>
      <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
        <a href="#/writing" className="btn btn-primary font-mono">read the writing →</a>
        <a href="#/about" className="btn btn-ghost font-mono">who is writing this?</a>
      </div>

      <div className="font-mono" style={{
        marginTop: 56,
        display: "flex",
        gap: 32,
        flexWrap: "wrap",
        fontSize: 12,
        color: "var(--muted-2)",
        letterSpacing: "0.04em",
      }}>
        <Stat label="posts" value="47" />
        <Stat label="streams" value="11" />
        <Stat label="open-source repos" value="8" />
        <Stat label="agents in production" value="∞" />
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div>
      <div style={{ color: "var(--fg)", fontSize: 22, fontWeight: 500 }}>{value}</div>
      <div style={{ marginTop: 4, textTransform: "uppercase" }}>{label}</div>
    </div>
  );
}

function CommitFeed({ commits }) {
  return (
    <aside>
      <SectionHeader prompt="git log --all" hint="from the repos" />
      <div style={{ border: "1px solid var(--border)", background: "var(--bg-elev)" }}>
        <div className="font-mono" style={{
          borderBottom: "1px solid var(--border)",
          padding: "10px 14px",
          fontSize: 11,
          color: "var(--muted-2)",
          display: "flex",
          justifyContent: "space-between",
        }}>
          <span>github · unglamorous/*</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent-3)", display: "inline-block" }}></span>
            live
          </span>
        </div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {commits.map((c, i) => (
            <li key={c.sha} style={{
              padding: "12px 14px",
              borderBottom: i === commits.length - 1 ? "none" : "1px dashed var(--border)",
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: 12,
              alignItems: "baseline",
            }}>
              <span className="font-mono" style={{ color: "var(--accent)", fontSize: 11 }}>{c.sha}</span>
              <div>
                <div className="font-mono" style={{ fontSize: 12, color: "var(--muted-2)" }}>{c.repo}</div>
                <div style={{ fontSize: 13, color: "var(--fg)", marginTop: 2, lineHeight: 1.4 }}>{c.msg}</div>
              </div>
              <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11 }}>{c.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Newsletter() {
  const [email, setEmail] = pageUseState("");
  const [done, setDone] = pageUseState(false);
  return (
    <div style={{
      border: "1px solid var(--border)",
      padding: "40px 40px",
      background: "var(--bg-elev)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="font-mono" style={{
        position: "absolute", inset: 0,
        opacity: 0.04, color: "var(--accent)",
        fontSize: 11, lineHeight: 1.6, padding: 16,
        pointerEvents: "none", whiteSpace: "pre", overflow: "hidden",
      }}>
        {`// subscribe()\n// returns: one email, every other tuesday,\n// no growth-hacked subject lines,\n// no "you won't believe what GPT did next".\n// unsubscribe is one click and i won't be weird about it.\n`.repeat(8)}
      </div>
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
        <div>
          <div className="font-mono" style={{ color: "var(--accent)", fontSize: 12, marginBottom: 8 }}>$ subscribe --no-bullshit</div>
          <h3 style={{ margin: 0, fontSize: 28, fontWeight: 600, lineHeight: 1.15, maxWidth: 540 }}>
            One email, every other Tuesday. The agents I shipped, the ones I scrapped.
          </h3>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
          style={{ display: "flex", gap: 8, minWidth: 320 }}
        >
          {!done ? (
            <>
              <input
                type="email"
                placeholder="you@yourcompany.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-mono"
                style={{
                  flex: 1,
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  color: "var(--fg)",
                  padding: "12px 14px",
                  fontSize: 13,
                  outline: "none",
                }}
              />
              <button className="btn btn-primary font-mono" type="submit">subscribe</button>
            </>
          ) : (
            <div className="font-mono" style={{ color: "var(--accent)", fontSize: 13, padding: "12px 0" }}>
              ✓ ok — check your inbox.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

// =========================================================================
// WRITING (archive)
// =========================================================================
function WritingPage({ data, query }) {
  const [type, setType] = pageUseState(query.type || "ALL");
  const [tag, setTag] = pageUseState(query.tag || null);

  const filtered = pageUseMemo(() => {
    return data.POSTS
      .filter((p) => type === "ALL" || p.type === type)
      .filter((p) => !tag || p.tags.includes(tag))
      .sort((a, b) => b.date.localeCompare(a.date));
  }, [type, tag]);

  const types = ["ALL", "TUTORIAL", "NOTE", "LINK", "STREAM"];
  const counts = data.POSTS.reduce((m, p) => ((m[p.type] = (m[p.type] || 0) + 1), m), {});

  return (
    <main className="container" style={{ paddingTop: 56, paddingBottom: 32 }}>
      <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 12, marginBottom: 12 }}>
        <span style={{ color: "var(--accent)" }}>$ </span> find ./writing -sort recent
      </div>
      <h1 style={{ fontSize: 56, margin: 0, fontWeight: 600, letterSpacing: "-0.02em" }}>Writing</h1>
      <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 640, marginTop: 12 }}>
        Long-form tutorials, short notes, and outbound links with commentary.
        Filter by type or tag below.
      </p>

      <div style={{ display: "flex", gap: 8, marginTop: 32, flexWrap: "wrap", alignItems: "center" }}>
        <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, marginRight: 6 }}>type:</span>
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className="font-mono"
            style={{
              background: type === t ? "var(--fg)" : "transparent",
              color: type === t ? "var(--bg)" : "var(--muted)",
              border: `1px solid ${type === t ? "var(--fg)" : "var(--border)"}`,
              padding: "5px 10px",
              fontSize: 11,
              letterSpacing: "0.08em",
              cursor: "pointer",
            }}
          >
            {t}{t !== "ALL" && counts[t] ? ` · ${counts[t]}` : ""}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap", alignItems: "center" }}>
        <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, marginRight: 6 }}>tag:</span>
        <Tag name="all" onClick={() => setTag(null)} active={!tag} />
        {data.TAGS.map((t) => (
          <Tag key={t.name} name={t.name} onClick={(n) => setTag(n === tag ? null : n)} active={tag === t.name} />
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        {filtered.length === 0 && (
          <div className="font-mono" style={{ color: "var(--muted-2)", padding: "40px 0", fontSize: 13 }}>
            // 0 results. try a different filter.
          </div>
        )}
        {filtered.map((p) => <PostCard key={p.slug} post={p} variant="row" />)}
      </div>
    </main>
  );
}

// =========================================================================
// ARTICLE
// =========================================================================
function ArticlePage({ data, slug }) {
  const post = data.POSTS.find((p) => p.slug === slug);
  if (!post) return (
    <main className="container" style={{ padding: "80px 0" }}>
      <h1 style={{ fontSize: 32 }}>404 — that file does not exist on disk.</h1>
      <p><a href="#/writing" className="font-mono" style={{ color: "var(--accent)" }}>← back to writing</a></p>
    </main>
  );

  const related = data.POSTS
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <main>
      <div className="container" style={{ paddingTop: 56, maxWidth: 760 }}>
        <a href="#/writing" className="font-mono" style={{ color: "var(--muted)", fontSize: 12, textDecoration: "none" }}>
          ← cd ../writing
        </a>
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 24, flexWrap: "wrap" }}>
          <TypeChip type={post.type} size="lg" />
          <span className="font-mono" style={{ color: "var(--muted-2)", fontSize: 12 }}>
            {fmtDateLong(post.date)} · {post.readingTime} min read
          </span>
        </div>
        <h1 style={{
          fontSize: "clamp(36px, 5vw, 56px)",
          margin: "20px 0 0",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}>
          {post.title}
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 19, marginTop: 20, lineHeight: 1.55 }}>
          {post.excerpt}
        </p>
        <div style={{ display: "flex", gap: 6, marginTop: 24, flexWrap: "wrap" }}>
          {post.tags.map((t) => <Tag key={t} name={t} />)}
        </div>

        <hr style={{ border: "none", borderTop: "1px dashed var(--border)", margin: "40px 0" }} />

        <ArticleBody body={post.body} />

        <div style={{
          marginTop: 64, padding: "24px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <div>
            <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, marginBottom: 4 }}>written by</div>
            <div style={{ fontSize: 16, fontWeight: 500 }}>The author</div>
            <div className="font-mono" style={{ color: "var(--muted)", fontSize: 12 }}>practitioner · agent-shipper · semi-retired contrarian</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <a href="#" className="btn btn-ghost font-mono">share</a>
            <a href="#" className="btn btn-ghost font-mono">discuss</a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="container" style={{ marginTop: 80 }}>
          <SectionHeader prompt="grep -l --shared-tags" hint="you might also like" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {related.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        </section>
      )}
    </main>
  );
}

function ArticleBody({ body }) {
  return (
    <div className="article-body">
      {body.map((b, i) => {
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
        if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
        if (b.type === "callout") return (
          <blockquote key={i} className="callout">
            <span className="font-mono" style={{ color: "var(--accent)", marginRight: 8 }}>›</span>
            {b.text}
          </blockquote>
        );
        if (b.type === "code") return (
          <pre key={i} className="code-block">
            <div className="code-bar font-mono">
              <span>{b.lang || "text"}</span>
              <span style={{ color: "var(--muted-2)" }}>copy</span>
            </div>
            <code className="font-mono">{b.text}</code>
          </pre>
        );
        return null;
      })}
    </div>
  );
}

// =========================================================================
// STREAMS
// =========================================================================
function StreamsPage({ data }) {
  const upcoming = data.STREAMS.filter((s) => s.status === "Upcoming");
  const past = data.STREAMS.filter((s) => s.status !== "Upcoming");
  const [selected, setSelected] = pageUseState(past[0]);

  return (
    <main className="container" style={{ paddingTop: 56, paddingBottom: 32 }}>
      <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 12, marginBottom: 12 }}>
        <span style={{ color: "var(--accent)" }}>$ </span> ./streams --live
      </div>
      <h1 style={{ fontSize: 56, margin: 0, fontWeight: 600, letterSpacing: "-0.02em" }}>Streams</h1>
      <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 640, marginTop: 12 }}>
        Two-hour, unedited sessions where I build real agents on a real keyboard.
        Recordings live here. Upcoming streams below — bring snacks.
      </p>

      <section style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32 }}>
        <div>
          <SectionHeader prompt={`play ${selected.id}`} hint="now showing" />
          <div className="player-frame">
            <div className="player-grid"></div>
            <div className="player-overlay">
              <div className="font-mono" style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.1em" }}>
                ▶ RECORDING · {selected.duration}
              </div>
              <h2 style={{ margin: "10px 0 0", fontSize: 28, fontWeight: 600, lineHeight: 1.15, maxWidth: 480 }}>
                {selected.title}
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 12, maxWidth: 480 }}>
                {selected.description}
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
                <button className="btn btn-primary font-mono">▶ watch</button>
                <button className="btn btn-ghost font-mono">show notes</button>
              </div>
            </div>
            <div className="player-bottom font-mono">
              <span style={{ color: "var(--muted-2)" }}>00:00:00</span>
              <span style={{ flex: 1, height: 2, background: "var(--border)", margin: "0 12px", position: "relative" }}>
                <span style={{ position: "absolute", inset: 0, width: "23%", background: "var(--accent)" }}></span>
              </span>
              <span style={{ color: "var(--muted-2)" }}>{selected.duration}</span>
            </div>
          </div>
        </div>

        <aside>
          <SectionHeader prompt="ls ./recordings" />
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" }}>
            {past.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => setSelected(s)}
                  className="stream-row"
                  style={{
                    width: "100%", textAlign: "left", background: selected.id === s.id ? "var(--bg-elev)" : "transparent",
                    border: "1px solid var(--border)", borderTop: "none", color: "inherit", padding: "14px",
                    cursor: "pointer", display: "block",
                  }}
                >
                  <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11 }}>
                    {fmtDate(s.date)} · {s.duration}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginTop: 4, lineHeight: 1.35 }}>
                    {s.title}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section style={{ marginTop: 80 }}>
        <SectionHeader prompt="cat ./streams/upcoming" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
          {upcoming.map((s) => (
            <div key={s.id} style={{ border: "1px dashed var(--border)", padding: 20, background: "var(--bg-elev)" }}>
              <div className="font-mono" style={{ color: "var(--accent-3)", fontSize: 11, letterSpacing: "0.1em" }}>
                ◌ UPCOMING · {fmtDateLong(s.date)}
              </div>
              <h3 style={{ margin: "10px 0 0", fontSize: 20, fontWeight: 600, lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 8 }}>{s.description}</p>
              <button className="btn btn-ghost font-mono" style={{ marginTop: 12 }}>add to calendar</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// =========================================================================
// ABOUT
// =========================================================================
function AboutPage() {
  return (
    <main className="container" style={{ paddingTop: 56, paddingBottom: 32, maxWidth: 800 }}>
      <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 12, marginBottom: 12 }}>
        <span style={{ color: "var(--accent)" }}>$ </span> whoami
      </div>
      <h1 style={{ fontSize: 56, margin: 0, fontWeight: 600, letterSpacing: "-0.02em" }}>About</h1>
      <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.5, marginTop: 20, maxWidth: 640 }}>
        I'm a practitioner. I ship purpose-built agents into production for real companies
        with real budgets and real lawyers. This site is where I write down what worked,
        what didn't, and what was just hype.
      </p>

      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Fact label="what i do" value="design, build, and ship agentic systems for non-tech companies" />
        <Fact label="what i don't do" value="thought leadership about AGI timelines" />
        <Fact label="favorite tool" value="a 200-line while loop" />
        <Fact label="least favorite phrase" value='"AI-powered"' />
      </div>

      <h2 style={{ marginTop: 72, fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em" }}>The thesis</h2>
      <div className="article-body" style={{ marginTop: 16 }}>
        <p>The AI you read about online is not the AI that will change your company.</p>
        <p>
          The AI that will change your company is being installed quietly, right now, into the
          unglamorous parts of your stack: the support queue, the RMA workflow, the invoice
          parser, the on-call rotation. It does not have a name. It does not have a launch event.
          It will be in production for two years before anyone outside your company writes a
          tweet about it.
        </p>
        <p>This site is for the people building that.</p>
      </div>

      <h2 style={{ marginTop: 64, fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em" }}>Get in touch</h2>
      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
        <Contact label="email" value="hello@unglamorousai.com" href="mailto:hello@unglamorousai.com" />
        <Contact label="github" value="@unglamorous" href="https://github.com" />
        <Contact label="bluesky" value="@unglamorous.ai" href="https://bsky.app" />
      </div>
    </main>
  );
}

function Fact({ label, value }) {
  return (
    <div style={{ border: "1px solid var(--border)", padding: "18px 20px", background: "var(--bg-elev)" }}>
      <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 15, color: "var(--fg)", lineHeight: 1.4 }}>{value}</div>
    </div>
  );
}

function Contact({ label, value, href }) {
  return (
    <a href={href} style={{
      border: "1px solid var(--border)", padding: "16px 18px", background: "var(--bg-elev)",
      textDecoration: "none", color: "inherit", display: "block", transition: "border-color 160ms",
    }} className="contact-card">
      <div className="font-mono" style={{ color: "var(--muted-2)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
        {label}
      </div>
      <div className="font-mono" style={{ fontSize: 14, color: "var(--accent)" }}>{value}</div>
    </a>
  );
}

Object.assign(window, { HomePage, WritingPage, ArticlePage, StreamsPage, AboutPage });
