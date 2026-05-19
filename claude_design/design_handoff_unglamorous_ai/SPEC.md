# SPEC.md — UnglamorousAI

Extra detail to complement README.md. Read this when you need exact copy or an edge case.

---

## Exact copy

### Site metadata

- **Site name:** UnglamorousAI (capital U, capital AI — never `unglamorous AI` or `Unglamorousai`)
- **Domain:** unglamorousai.com
- **Tagline (long, used in hero):** "The boring AI that is quietly invading every corporation and every piece of software you already use."
- **Tagline (short, used in `<meta description>`, OG cards, footer):** "A practitioner's notebook on purpose-built AI agents in production. Long-form tutorials, sharp notes, and live streams."
- **Hero sub-comment (above H1, mono, muted):** `// a working notebook for the AI that isn't on the keynote stage` (the `//` is in `--accent`)
- **Hero lede:** "Long-form tutorials, sharp notes, and live streams from someone who actually ships purpose-built agents into production. No demos. No leaderboards. Just the unglamorous parts that move the needle."

### Editorial voice

Three words the user chose for the tone: **irreverent, demystifying, teacher**. Reflect this when you write copy yourself:

- Sentence fragments are OK. They're punchy.
- Lowercase mono labels (`writing`, `streams`, `about`) feel deliberately under-designed. Keep them lowercase.
- The author's voice is dry, plainspoken, occasionally profane (in the design we used "no bullshit" once in the newsletter prompt — keep this kind of usage rare and intentional).
- Avoid VC-bro language: "synergies", "10x", "AI-powered", "transformative", "next-gen". This is in the about page as a fact: `least favorite phrase: "AI-powered"`.

### Footer copy

```
$ cat /etc/about

UnglamorousAI is a working notebook for the boring AI that is quietly
invading every corporation. Written by a practitioner, not a pundit.
```

```
© 2026 UnglamorousAI · CC BY-SA · no AI was harmed
built unglamorously
```

### Newsletter card

- Mono label: `$ subscribe --no-bullshit`
- H3: "One email, every other Tuesday. The agents I shipped, the ones I scrapped."
- Background comment pattern (4% opacity, mono, accent color):
  ```
  // subscribe()
  // returns: one email, every other tuesday,
  // no growth-hacked subject lines,
  // no "you won't believe what GPT did next".
  // unsubscribe is one click and i won't be weird about it.
  ```
  Repeat this block ~8 times vertically so it fills the card.

### About page

- **Whoami:** `$ whoami`
- **Lede:** "I'm a practitioner. I ship purpose-built agents into production for real companies with real budgets and real lawyers. This site is where I write down what worked, what didn't, and what was just hype."
- **Facts (2x2 grid):**
  - `what i do` → "design, build, and ship agentic systems for non-tech companies"
  - `what i don't do` → "thought leadership about AGI timelines"
  - `favorite tool` → "a 200-line while loop"
  - `least favorite phrase` → `"AI-powered"` (the quotes are part of the copy)
- **Thesis (h2 + 3 paragraphs):**
  > The AI you read about online is not the AI that will change your company.
  >
  > The AI that will change your company is being installed quietly, right now, into the unglamorous parts of your stack: the support queue, the RMA workflow, the invoice parser, the on-call rotation. It does not have a name. It does not have a launch event. It will be in production for two years before anyone outside your company writes a tweet about it.
  >
  > This site is for the people building that.

  **Get the user to approve this thesis copy before you ship. It's the editorial mission statement.**

### Author byline

- Role line: `practitioner · agent-shipper · semi-retired contrarian`

### Streams page

- Page breadcrumb: `$ ./streams --live`
- Empty state if no recordings: `// no recordings yet. follow the rss for next stream.`
- Upcoming card label: `◌ UPCOMING · {Month D, YYYY}` in `--accent-3`
- Recording card label: `▶ RECORDING · {duration}` in `--accent`

---

## Seed posts (port to `src/content/posts/`)

All 8 posts are in `design/data.jsx`. The two with full body content are the ones the user wants live first:

1. **`prompt-engineering-is-dead.md`** — type NOTE, full body in data.jsx
2. **`what-is-a-claw.mdx`** — type TUTORIAL, full body in data.jsx (use MDX so future versions can embed components)

The remaining six have realistic excerpts but stub bodies. Keep them as drafts (`draft: true` in frontmatter) until the user writes the real article. They're useful as scaffolding so the archive and filter logic have data to work against.

### Frontmatter shape

```yaml
---
title: "Prompt Engineering is dead"
type: NOTE
date: 2026-05-12
tags: [agents, tooling, opinion]
excerpt: "Stop writing 800-line system prompts. The new game is context engineering: what tools the model has, what state it sees, and when it stops talking."
draft: false
---
```

For LINK-type posts, add `href: "https://..."`. The Astro page renders the commentary in the body; the title in `PostCard` links to `href` directly.

---

## Tag taxonomy

The 10 tags currently in use, ordered by relevance (not count):

```
agents          (core)
tooling
production
patterns
fundamentals    (intro material)
glossary
evals
opinion         (use sparingly — for hot takes)
news            (only on LINK posts)
rag             (sub-topic of agents)
streams         (auto-applied to STREAM posts)
context         (sub-topic)
repos           (only on LINK posts pointing at github)
```

Don't add tags freely. Tag taxonomies rot when authors invent on the fly. Whenever a new tag is needed, deliberately add it to a `src/content/tags.ts` registry with a short description.

---

## Edge cases & decisions

### Reading time

- Calculate at build time: `Math.ceil(wordCount / 220)` for prose; for STREAM posts, this is the stream duration in minutes (since "reading time" doesn't apply).
- Cache to frontmatter (optional) or compute fresh on each build.

### Date formats

- Card / row date: `May 12, 2026` (`toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })`).
- Article header date: `May 12, 2026` long form (`{ month: 'long' }`).
- Footer / commit feed time: relative (`4h`, `1d`, `2w`).
- RSS / sitemap: ISO 8601 (built in).

### Code block language tags

The article body code blocks show the language in the top bar. Map common aliases:

- `python` → `python`
- `ts`, `tsx`, `typescript` → `typescript`
- `js`, `jsx`, `javascript` → `javascript`
- `bash`, `sh`, `shell` → `bash`
- (unspecified) → `text`

### Syntax highlighting

Astro uses Shiki by default. Suggested theme: `vesper` or `github-dark-dimmed` — both pair well with the `--bg-deep` block background.

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'vesper',
      wrap: false,
    },
  },
});
```

### LINK-type posts on the archive

The post-row title text should still be the article title (not the URL). The `→` arrow on hover should be a `↗` for LINK-type. Make the title element either:
- An `<a href={post.href}>` (links externally), and the rest of the row (card area) `<a href={post.slug}>` for the commentary — **but this creates nested anchors, don't do it**.
- Or: the whole row is `<a href={post.slug}>` (commentary), and add a small `↗` glyph next to the title that says "this references {hostname of href}". This is the recommended pattern.

### Empty filter state

When `?type=TUTORIAL&tag=fundamentals` matches nothing:

```html
<div class="font-mono text-muted-2 py-10 text-sm">
  // 0 results. try a different filter.
</div>
```

### 404

The hash router has a real 404 view in the design. In Astro:

```astro
---
// src/pages/404.astro
---
<BaseLayout title="404">
  <main class="container py-24">
    <div class="font-mono text-accent">$ cat /nope</div>
    <h1 class="text-6xl mt-4">404</h1>
    <p class="text-muted mt-3">
      That route doesn't exist.
      <a href="/" class="font-mono text-accent">go home →</a>
    </p>
  </main>
</BaseLayout>
```

### OG images

Generate one per post at build time. Suggested tool: `satori` + `@vercel/og` (or `astro-og-canvas`). Template: dark background, accent-colored type chip in top-left, post title in 64px Geist, "UnglamorousAI" wordmark in bottom-right. Keep it boring — that's the whole brand.

### Favicon

Drop a 32x32 SVG of a green `▊` (the blinking cursor) on dark bg into `public/favicon.svg`. Or just the letter `U` in mono on the accent color. The point is: it should look like a terminal artifact, not a logo.

---

## Performance budget

- LCP under 1.5s on a cold load.
- Total JS shipped on `/`: under 30kb gzipped (tweaks panel + clock + commit-feed island).
- Article pages: under 10kb gzipped JS (just the copy-code button + tweaks).
- No webfonts > 2 files loaded on first paint (Geist 500 + Geist Mono 400 is enough — preload them).

```astro
<link rel="preload" href="/_fonts/geist-500.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/_fonts/geist-mono-400.woff2" as="font" type="font/woff2" crossorigin />
```

---

## Deploy notes

- **Recommended host:** Cloudflare Pages (free tier, fast, the user is at `keithhanson.io` — they're not allergic to hands-on infra).
- **Build command:** `npm run build`
- **Output dir:** `dist/`
- **Astro adapter:** none needed for fully-static. If you want server-rendered tag pages later, swap to `@astrojs/cloudflare`.
- **DNS:** point `unglamorousai.com` apex + `www` at Cloudflare. Use HTTPS-only, no redirects (Cloudflare handles HSTS).
- **Analytics:** Cloudflare Web Analytics (free, no cookies). Plausible if self-hosting on a VPS.

---

## Future work (out of scope for v1)

These are good-but-not-required. Mention them to the user, don't build them yet.

- A `/now` page (the now.fyi convention) — what the author is working on this month.
- Webmentions / IndieWeb integration.
- A `/uses` page listing the author's tooling.
- An archive page grouped by year (`/writing/2026`).
- Cross-posting hook to Bluesky on publish.
- Comments via Bluesky reply embeds (à la Tailwind Connect).
- A "follow on github" hover card on commit-feed entries.
