# Handoff: UnglamorousAI.com

> **Read this first.** This bundle contains a high-fidelity HTML/React prototype of a blog called **UnglamorousAI**. The HTML in `design/` is a **design reference**, not production code to copy verbatim. Your job is to **recreate it inside the existing Astro project** the user has already scaffolded, using Astro's idioms — content collections, `.astro` components, MDX, React islands only where interactivity is needed.

---

## Target environment (already set up by the user)

The user has already run:

```bash
npm create astro@latest unglamorous-ai
# empty starter, TypeScript: strict
cd unglamorous-ai
npx astro add react mdx tailwind sitemap rss
```

So the project has:
- **Astro** (latest, TypeScript strict)
- **`@astrojs/react`** — for the few interactive islands (tweaks panel, filter UI, live commit feed refresh)
- **`@astrojs/mdx`** — for blog posts (Markdown-with-JSX)
- **`@astrojs/tailwind`** — Tailwind v3 (CSS pipeline)
- **`@astrojs/sitemap`**
- **`@astrojs/rss`**

**Use these.** Don't add a router (Astro is file-based). Don't add a state manager. Don't reach for shadcn — the design has its own visual language. Don't add framer-motion — animation here is single CSS keyframes.

---

## Fidelity

**High-fidelity.** Match the design pixel-close: colors, type, spacing, hover states, chip styles, the terminal-flavored `$ command` section headers, the blinking cursor on the wordmark, the typography mix (sans headlines + mono chrome). Tailwind utility classes are fine; if a value isn't in the Tailwind default scale, add it to `tailwind.config.mjs` rather than fighting the framework.

---

## What we're building

A 5-route blog with these views:

| Route | Purpose |
|---|---|
| `/` | Home — hero tagline + 3 most recent posts + commit feed + newsletter |
| `/writing` | Archive of all posts, filterable by type and tag |
| `/writing/[slug]` | Single article reader |
| `/streams` | Video archive (recordings + upcoming) |
| `/about` | Manifesto / who I am |
| `/rss.xml` | RSS feed (auto-generated) |
| `/sitemap-index.xml` | Sitemap (auto-generated) |

Content types: **TUTORIAL**, **NOTE**, **LINK**, **STREAM**. The `LINK` type is a Daring Fireball-style outbound link with commentary; on the archive the title links to the external URL with a small `↗` glyph; the chip + tags still link internally.

---

## How to read the prototype

Open `design/UnglamorousAI.html` in a browser. Navigate using the hash routes:

- `#/` → home
- `#/writing` → archive
- `#/article/prompt-engineering-is-dead` → article
- `#/streams` → streams page
- `#/about` → about page

There's a **Tweaks** panel in the bottom-right (toolbar toggle in the original env, but in the static HTML you may need to wire your own toggle — or just read the values out of `app.jsx` `TWEAK_DEFAULTS`). It exposes:

- **Accent palette** — 5 named options: `chartreuse` (default), `terminal`, `amber`, `cyan`, `magenta`
- **Font pairing** — Geist (default), Space Grotesk + JetBrains Mono, IBM Plex
- **Density** — compact / cozy / spacious

In the Astro port, the tweaks panel should be a small React island. It writes CSS custom properties to `document.documentElement` and persists user choice to `localStorage` (the design's persistence flow targets a separate runtime — see "Tweaks panel" section below).

---

## File map (what's in `design/`)

| File | What it is | Where it goes in the Astro port |
|---|---|---|
| `UnglamorousAI.html` | Entry HTML with all CSS in a `<style>` block | CSS → `src/styles/global.css`; markup → split into `BaseLayout.astro` |
| `app.jsx` | Hash router + tweaks panel mounting | Astro file-based routing; tweaks panel becomes a React island |
| `pages.jsx` | All 5 page views as React components | Each becomes an `.astro` file under `src/pages/` |
| `components.jsx` | Header, Footer, PostCard, Tag, TypeChip, SectionHeader | Each becomes an `.astro` component under `src/components/` |
| `data.jsx` | Sample post/stream/commit/tag data | POSTS → content collection; STREAMS → content collection; COMMITS → server endpoint; TAGS → derived |
| `tweaks-panel.jsx` | Tweaks panel scaffolding from the design tool | **Do not port** — write a simple custom React island instead (see below) |

---

## Design tokens

Drop these into `tailwind.config.mjs` (and/or `:root` in `global.css`):

```js
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        bg:           'oklch(0.16 0.005 250)',
        'bg-elev':    'oklch(0.20 0.005 250)',
        'bg-deep':    'oklch(0.13 0.005 250)',
        fg:           'oklch(0.96 0.005 250)',
        muted:        'oklch(0.72 0.005 250)',
        'muted-2':    'oklch(0.55 0.005 250)',
        border:       'oklch(0.28 0.005 250)',
        'border-strong': 'oklch(0.36 0.005 250)',
        // Accent is set via CSS variables so the tweaks panel can swap palettes at runtime.
        accent:       'var(--accent)',
        'accent-2':   'var(--accent-2)',
        'accent-3':   'var(--accent-3)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: { tightish: '-0.015em', tighter2: '-0.02em', tightest: '-0.025em' },
    },
  },
}
```

### Accent palettes (CSS variables, set by the tweaks island)

```
chartreuse  →  --accent: oklch(0.86 0.18 130)  --accent-2: oklch(0.74 0.17 165)  --accent-3: oklch(0.80 0.15 60)
terminal    →  --accent: oklch(0.82 0.16 145)  --accent-2: oklch(0.74 0.14 175)  --accent-3: oklch(0.78 0.13 90)
amber       →  --accent: oklch(0.80 0.17 75)   --accent-2: oklch(0.74 0.14 30)   --accent-3: oklch(0.78 0.13 130)
cyan        →  --accent: oklch(0.82 0.13 215)  --accent-2: oklch(0.76 0.16 305)  --accent-3: oklch(0.80 0.14 160)
magenta     →  --accent: oklch(0.78 0.18 340)  --accent-2: oklch(0.74 0.15 270)  --accent-3: oklch(0.80 0.14 60)
```

### Typography

Default pairing: **Geist** (sans) + **Geist Mono** (mono). Load via Fontsource for self-hosted builds, or `<link>` from Google Fonts. Both work.

```bash
npm i @fontsource/geist @fontsource/geist-mono
# (optional alternates so the type tweak has something to switch to)
npm i @fontsource/space-grotesk @fontsource/jetbrains-mono @fontsource/ibm-plex-sans @fontsource/ibm-plex-mono
```

Then import once in `src/layouts/BaseLayout.astro`:

```astro
---
import '@fontsource/geist/400.css';
import '@fontsource/geist/500.css';
import '@fontsource/geist/600.css';
import '@fontsource/geist/700.css';
import '@fontsource/geist-mono/400.css';
import '@fontsource/geist-mono/500.css';
import '../styles/global.css';
---
```

### Type scale

- Body: 16px / 1.5
- Article body: 18px / 1.7, color `oklch(0.90 0.005 250)`
- H1 (page titles): 56px / 0.98, weight 600, tracking `-0.02em` to `-0.025em`
- Hero H1: `clamp(40px, 7vw, 88px)`, weight 600, tracking `-0.025em`
- H2 (article): 28px, weight 600, with a mono `## ` prefix in `--accent`
- Section headers (terminal-style): 14px mono, with `$ ` in `--accent` prefix
- Post card title: 21px / 1.25, weight 600
- Post row title: 19px / 1.35, weight 600
- Excerpt / muted body: 14-15px / 1.55, color `--muted`
- Captions, dates, chip labels: 11-12px mono

### Spacing & layout

- Container max-width: `1240px` (cozy default); `1180px` compact; `1320px` spacious
- Container side padding: 32px (20px below 900px)
- Section vertical rhythm: 64-96px between major sections; 32-48px between sub-sections
- Grid gap default: 16px (`--grid-gap`)
- Borders: 1px solid `--border` for cards/rows; 1px dashed `--border` for footer dividers and "upcoming" stream cards (the dashed style means "not yet")

### Borders & radii

- **Almost no border-radius.** The aesthetic is crisp/terminal. Buttons have 2px radius — that's it. Cards, chips, rows: 0px. Don't round things.

### Shadows

- None. The hierarchy comes from borders and the radial background glow at the top of the page.

### Background

The body has a fixed radial gradient that gives the top of the page a faint accent glow:

```css
body {
  background:
    radial-gradient(ellipse 1200px 600px at 50% -10%,
      color-mix(in oklch, var(--accent) 6%, transparent), transparent 60%),
    var(--bg);
  background-attachment: fixed;
}
```

---

## Screens

### 1. Home (`src/pages/index.astro`)

**Layout (top to bottom):**

1. **Hero** (container, 80px top padding, 24px bottom)
   - Above the H1: a mono comment in `--muted-2`, fontsize 12, letter-spacing 0.04em: `// a working notebook for the AI that isn't on the keynote stage` (the `//` is in `--accent`)
   - H1: `clamp(40px, 7vw, 88px)`, weight 600, line-height 0.98, max-width 1100px. Text: `The boring AI that is quietly invading every corporation and every piece of software you already use.` The phrase "quietly invading" is wrapped in a span colored `--accent`.
   - Lede: max-width 720px, 18px, line-height 1.55, color `--muted`. Copy: `Long-form tutorials, sharp notes, and live streams from someone who actually ships purpose-built agents into production. No demos. No leaderboards. Just the unglamorous parts that move the needle.`
   - Two buttons (flex, 12px gap, 32px top margin):
     - **Primary:** `read the writing →` → `/writing` — background `--accent`, color `--bg`, mono font, 11px padding-y / 18px padding-x, 2px radius
     - **Ghost:** `who is writing this?` → `/about` — transparent, 1px solid `--border`
   - Stats strip (56px top margin, flex, 32px gap, mono, 12px): 4 stats, each with a 22px weight-500 value above an uppercase label. Use real values once you have data; for now use the strings in `design/pages.jsx` (`posts: 47`, `streams: 11`, `open-source repos: 8`, `agents in production: ∞`).

2. **Recent posts section** (`SectionHeader` with prompt `ls -lt ./writing | head -3` and the "three most recent" hint; action link `see all →` to `/writing`)
   - 3-column grid, 16px gap, of `PostCard` (see below). Sort posts by date desc, take first 3.

3. **More posts + commit feed** (grid: `1.4fr 1fr`, 48px gap, 80px top margin)
   - Left column: another `SectionHeader` (`tail ./writing`), then posts 4-6 rendered as `PostCard variant="row"`.
   - Right column: `CommitFeed` (see component spec).

4. **Newsletter** (96px top margin, see component spec).

5. **Footer** (see component spec).

### 2. Writing archive (`src/pages/writing/index.astro` + a `WritingFilters.tsx` island)

**Layout:**

1. Container, 56px top padding.
2. Mono breadcrumb at top: `$ find ./writing -sort recent` (the `$ ` in `--accent`).
3. H1: `Writing`, 56px, weight 600, `-0.02em` tracking, 0 margin.
4. Lede: 16px `--muted`, max-width 640px: `Long-form tutorials, short notes, and outbound links with commentary. Filter by type or tag below.`
5. **Type filter row** (32px top margin, flex, 8px gap, wrap):
   - Label `type:` in 11px `--muted-2` mono.
   - Buttons: `ALL`, `TUTORIAL`, `NOTE`, `LINK`, `STREAM`. Inactive: 1px `--border`, color `--muted`, transparent bg. Active: bg `--fg`, color `--bg`, border `--fg`. Count suffix `· N` after the type name when not `ALL`.
6. **Tag filter row** (12px top margin): label `tag:`, then tags as `#tagname` pills (see `Tag` component).
7. **Post list** (40px top margin): each post rendered as `PostCard variant="row"`. Empty state: mono comment `// 0 results. try a different filter.` in `--muted-2`.

**Filter state:**
- Source of truth is the URL query: `?type=TUTORIAL&tag=agents`.
- The page server-renders the initial filter. The filter buttons live in a `<WritingFilters client:load />` React island that rewrites `?type=...&tag=...` (via `history.replaceState` for snappy local filtering, and reads from URL on mount). When the URL changes, hide/show the right rows by setting a `data-hidden` attribute on each row's wrapper.
- Or simpler: render *all* rows in Astro, and let the React island toggle visibility via class. **This is preferred** — no router round-trip, no flicker.

### 3. Article (`src/pages/writing/[slug].astro`)

**Layout (max-width 760px container):**

1. Mono back-link `← cd ../writing` to `/writing`.
2. (24px below) chip row: large `TypeChip` + mono meta line `{Month D, YYYY} · {N} min read`.
3. H1: `clamp(36px, 5vw, 56px)`, weight 600, line-height 1.05.
4. Excerpt: 19px `--muted`, line-height 1.55, 20px top margin.
5. Tag pills row (24px top margin).
6. **Dashed divider** (40px y-margin).
7. **Article body** — see typography rules above. Headings get a `## ` mono prefix in `--accent`. Callouts have a left border in `--accent` and a tinted background. Code blocks have a dark `--bg-deep` background, 1px `--border`, a top bar with the language label and a "copy" affordance (wire the copy button up — `navigator.clipboard.writeText`).
8. **Author meta strip** (64px top, both border-y, padding 24px): name + role on the left, share/discuss links on the right.
9. **Related posts** (80px top): grid of 3 `PostCard`s, filtered by shared tags.

**For `LINK`-type posts:** the article reader still works the same, but the post-card and archive row title should be a hyperlink to `post.href` with a small `↗` glyph. The article page itself renders the commentary body.

**Reading time:** compute at build time from `wordCount / 220` rounded up, stored in `data.readingTime` (or read from frontmatter — see content schema).

### 4. Streams (`src/pages/streams/index.astro`)

**Layout:**

1. Container, 56px top padding, mono breadcrumb `$ ./streams --live`.
2. H1: `Streams`.
3. Lede.
4. **Featured player** (grid `1.6fr 1fr`, 32px gap):
   - Left: a 16:9.5 `.player-frame` with:
     - Background grid pattern: two perpendicular linear-gradients in `color-mix(in oklch, var(--accent), 8%, transparent)`, 32px tile, with a radial mask so it fades out.
     - Bottom-anchored overlay with: a mono `▶ RECORDING · {duration}` label in `--accent`, then a 28px weight-600 H2 title, then 14px `--muted` description, then two buttons (`▶ watch`, `show notes`).
     - A bottom-bar timecode: `00:00:00 — [progress bar at 23%] — {duration}` in mono.
   - Right: list of past recordings as `<button>` rows. Selected row gets `bg-elev` background.
5. **Upcoming** (80px top, 2-col grid, dashed borders).

The "player" is purely visual for now — when the user has real YouTube embeds, swap the `.player-frame` for an `<iframe>` with the YouTube embed URL.

### 5. About (`src/pages/about.astro`)

**Layout (max-width 800px container):**

1. Mono `$ whoami` breadcrumb.
2. H1 `About`.
3. Lede 19px `--muted`.
4. **Facts grid** (56px top, 2 cols, 12px gap): four `Fact` cards — small uppercase mono label above a 15px statement. Border 1px `--border`, background `--bg-elev`, padding 18px/20px, no radius.
5. **Thesis section** (72px top): H2 + article-body paragraphs.
6. **Contact section** (64px top, 3-col grid): email, github, bluesky as `Contact` cards (similar to Fact but with mono `--accent` value).

---

## Components

### `<TypeChip type={'TUTORIAL'|'NOTE'|'LINK'|'STREAM'} size?={'sm'|'lg'} />`

A pill-style chip, uppercase mono, with a tinted background and matching colored border.

| Type | Foreground | Background |
|---|---|---|
| `TUTORIAL` | `--accent` | `color-mix(in oklch, --accent 12%, transparent)` |
| `NOTE` | `--fg` | `color-mix(in oklch, --fg 8%, transparent)` |
| `LINK` | `--accent-2` | `color-mix(in oklch, --accent-2 12%, transparent)` |
| `STREAM` | `--accent-3` | `color-mix(in oklch, --accent-3 14%, transparent)` |

Padding: 2px/7px. Font-size: 10px (sm) or 11px (lg). Letter-spacing 0.08em. Border-radius 2px. Border 1px solid foreground color.

### `<Tag name="agents" active?={boolean} asSpan?={boolean} />`

Anchor to `/writing?tag={name}` showing `#agents`. Active state inverts: bg `--accent`, color `--bg`, border `--accent`. Padding 3px/8px, mono, 11px. **When used inside another anchor (e.g. inside a PostCard), render as a `<span>` instead — see `asSpan` prop in the design.**

### `<PostCard post variant?={'default'|'row'} />`

**Default (card):**
- 240px min-height, column flex.
- 1px `--border`, `--bg-elev` background, 20px padding.
- Top row: TypeChip + date + reading time (auto-right).
- 21px / weight 600 title.
- 14px muted excerpt (line-clamp not needed — write tight excerpts).
- Tags (first 3) along the bottom.
- Hover: border becomes `--accent`, transform translateY(-2px), 160ms.

**Row:**
- 3-col grid: `100px 1fr auto`, 24px gap, 20px y-padding, bottom 1px `--border`.
- Left: date (mono 12px `--muted-2`).
- Middle: TypeChip + reading time line, then title (19px), then excerpt (14px `--muted`), then tags row.
- Right: a `→` arrow in `--accent` that animates in on hover (opacity 0 → 1, translateX 0 → 3px).
- Row hover: `--bg-elev` background.

### `<SectionHeader prompt hint? action? />`

The terminal-style section header pattern used everywhere:

```
$ ls -lt ./writing | head -3 — three most recent          see all →
```

- Mono, 14px, weight 500.
- `$ ` is in `--accent`.
- Hint is `--muted-2`, prefixed with `— ` and weight 400.
- Optional right-aligned action (a small link or button).
- 20px bottom margin.

### `<Header />`

Sticky top, 1px bottom `--border`, `backdrop-filter: blur(8px)`, z-index 50.

Inside the container (14px y-padding, flex, 24px gap, baseline align):
- Wordmark on the left: `~/UnglamorousAI` styled as mono, where `~/` and `nglamorous` are at 50% opacity to highlight the **U** and **AI**, plus a blinking cursor `▊` after `AI` in `--accent`. Color: `--accent`. Font-size 14, weight 600. Whole thing wrapped in `<a href="/">`.
- Nav on the right (margin-left auto, flex, 4px gap, baseline):
  - `writing`, `streams`, `about`, `rss` — mono, 13px, padding 6px/12px, color `--muted` (active route: `--fg` with a 1px `--accent` underline border-bottom).
  - Live clock: HH:MM:SS, mono, 11px, `--muted-2`, updating every second. **This is a React island.** Hide via the tweaks panel by setting `--show-clock: none` on `:root`.

### `<Footer />`

Top border, 96px top margin, 48px-bottom-64px padding.

Container is a 4-col grid (`2fr 1fr 1fr 1fr`, 48px gap):
- Col 1 (wide): mono `$ cat /etc/about` then a paragraph: "UnglamorousAI is a working notebook for the boring AI that is quietly invading every corporation. Written by a practitioner, not a pundit."
- Col 2 — `site`: home / writing / streams / about
- Col 3 — `feeds`: rss / json feed / newsletter
- Col 4 — `elsewhere`: github / mastodon / bluesky

48px below, a dashed top border + 24px padding-top row: `© 2026 UnglamorousAI · CC BY-SA · no AI was harmed` on the left, `built unglamorously` on the right. Both mono 12px `--muted-2`.

### `<CommitFeed commits />`

A bordered card with a top bar (`github · unglamorous/*` on the left, a green pulsing dot + `live` on the right). List rows are a 3-col grid (`auto 1fr auto`): SHA in `--accent` mono | repo (mono `--muted-2` small) + message (`--fg` 13px) | relative time mono.

For now this is mock data. In the Astro port, expose a server endpoint that hits `api.github.com/users/<user>/events/public` or `repos/<user>/<repo>/commits` and caches for ~5min. Hydrate into the card via a React island with `client:idle`.

### `<Newsletter />`

A bordered card with a faint mono comment background pattern at `opacity: 0.04` (the comment text is `// subscribe() ...` repeated, see `design/pages.jsx`). On top: mono `$ subscribe --no-bullshit` label, then a 28px H3, then an email input + subscribe button.

In the Astro port, wire the form to Buttondown's API (or whatever the user picks). The submit handler is a tiny React island.

### Buttons

- **`.btn`** — 1px `--border`, transparent, `--fg` text, 11px/18px padding, 13px / weight 500, mono font, 2px radius, 140ms transitions. Hover: border becomes `--border-strong`.
- **`.btn-primary`** — bg `--accent`, color `--bg`, border `--accent`. Hover: bg shifts toward white by 12% via `color-mix`.
- **`.btn-ghost`** — transparent, `--fg`.

---

## Content collections

Set up `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content', // MDX/MD files
  schema: z.object({
    title: z.string(),
    type: z.enum(['TUTORIAL', 'NOTE', 'LINK', 'STREAM']),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
    readingTime: z.number().optional(), // compute if missing
    href: z.string().url().optional(),  // only for LINK-type posts
    draft: z.boolean().default(false),
  }),
});

const streams = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    duration: z.string(),
    status: z.enum(['Recording', 'Upcoming']),
    description: z.string(),
    youtubeId: z.string().optional(),
  }),
});

export const collections = { posts, streams };
```

**Seed content:** port the 8 posts and 4 streams from `design/data.jsx` into `src/content/posts/*.md(x)` and `src/content/streams/*.md`. Use the prose already written in `data.jsx` — it's intentional, not lorem.

**Reading time:** if not set in frontmatter, compute at build time from `post.body` word count divided by 220, rounded up.

**Tags page (bonus):** `src/pages/writing/tags/[tag].astro` using `getStaticPaths` over the union of all tags. Optional but cheap.

---

## Tweaks panel

The tweaks panel in the prototype uses the design tool's host protocol (`window.parent.postMessage`). **Don't port that.** In production, write a small `TweaksPanel.tsx` island that:

1. Reads from `localStorage` on mount; falls back to defaults: `{ accent: 'chartreuse', font: 'Geist', density: 'cozy', showClock: true }`.
2. Renders a floating bottom-right panel (or hide behind a small `⚙` button).
3. On change: writes the new value to `localStorage` and sets the corresponding CSS custom properties on `document.documentElement`.

Mount it once in `BaseLayout.astro` with `client:idle`.

To avoid FOUC on first paint, inline a tiny `<script is:inline>` in `<head>` that reads `localStorage` and sets `--accent` etc. **before** Astro hydrates anything. Pattern:

```astro
<script is:inline>
  (function() {
    try {
      const t = JSON.parse(localStorage.getItem('unglam-tweaks') || '{}');
      const palettes = { /* ...inline palette map... */ };
      const fonts = { /* ...inline font map... */ };
      const r = document.documentElement.style;
      const p = palettes[t.accent || 'chartreuse'];
      r.setProperty('--accent', p[0]); r.setProperty('--accent-2', p[1]); r.setProperty('--accent-3', p[2]);
      const f = fonts[t.font || 'Geist'];
      r.setProperty('--font-sans', f.sans); r.setProperty('--font-mono', f.mono);
    } catch (e) {}
  })();
</script>
```

---

## Routing & islands summary

| Page / Component | Astro/React? | Hydration |
|---|---|---|
| All page routes | `.astro` | static |
| `<Header />` | `.astro` | static markup + nested `<Clock client:idle />` for live time |
| `<Footer />` | `.astro` | static |
| `<PostCard />`, `<Tag />`, `<TypeChip />`, `<SectionHeader />` | `.astro` | static |
| `<WritingFilters />` (filter UI on archive) | `.tsx` island | `client:load` |
| `<CommitFeed />` | initial commits server-rendered in `.astro`; `<CommitFeedLive client:idle />` polls every 60s | hybrid |
| `<NewsletterForm />` | `.tsx` island | `client:visible` |
| `<TweaksPanel />` | `.tsx` island | `client:idle` (mounted once in `BaseLayout.astro`) |
| `<Clock />` (nav clock) | `.tsx` island | `client:idle` |
| Article copy-code button | `.tsx` island | `client:visible` |

---

## RSS

Use `@astrojs/rss`:

```ts
// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: 'UnglamorousAI',
    description: 'The boring AI that is quietly invading every corporation.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.excerpt,
      link: p.data.type === 'LINK' ? p.data.href : `/writing/${p.slug}/`,
      categories: p.data.tags,
    })),
  });
}
```

Add `site: 'https://unglamorousai.com'` to `astro.config.mjs` so both RSS and sitemap have an absolute URL.

---

## Responsive

Mobile breakpoint at 900px:
- Container padding 32px → 20px.
- All 3-col grids → 1-col.
- All `1.4fr 1fr`, `1.6fr 1fr`, `2fr 1fr 1fr 1fr` grids → 1-col.
- Hero H1 clamps down naturally; keep `clamp(32px, 9vw, 56px)`.
- Header nav: under 700px, collapse the nav into a small mono `[menu]` toggle that expands to a column. The clock stays hidden under 700px.

---

## Accessibility notes

- The blinking cursor on the wordmark must respect `prefers-reduced-motion` — wrap the animation in `@media (prefers-reduced-motion: no-preference)`.
- Focus styles: 2px outline in `--accent` with 2px offset on all interactive elements.
- Type chips are visual, not screen-reader-meaningful unless paired with an `aria-label="Tutorial"` on the article preview link.
- Filter buttons in the archive are `<button>` not links. They get `aria-pressed={active}`.
- Color contrast: the muted color `oklch(0.72 0.005 250)` against the bg passes WCAG AA for normal body text at 16px+. Don't use `--muted-2` for anything smaller than 11px without checking.

---

## What to ship in order

1. `BaseLayout.astro` + `global.css` + Tailwind config + fonts. Verify the radial-gradient background + a placeholder H1 renders correctly.
2. `Header`, `Footer`, `TypeChip`, `Tag`, `PostCard`, `SectionHeader` components.
3. Content collections + seed posts. Verify `getCollection('posts')` returns them.
4. `/writing` archive (server-rendered, no filter yet).
5. `/writing/[slug]` article reader. Confirm MDX renders, code blocks look right.
6. `/` home with hero + 3 recent posts + 3 row posts + (mocked) commit feed + newsletter.
7. `<WritingFilters />` island.
8. `/streams` page (use mock data initially).
9. `/about` page.
10. `<TweaksPanel />` island + inline FOUC script.
11. RSS + sitemap verification.
12. Deploy to Cloudflare Pages.

---

## Things to NOT do

- **Don't** add a UI library (shadcn, Radix, etc). The design has its own visual language. Tailwind + a handful of `.astro` components is enough.
- **Don't** make every section a React component. Most of this site is static HTML. Use islands only where you see them in the table above.
- **Don't** invent new accent colors. The five palettes are deliberate.
- **Don't** round things. The aesthetic depends on sharp corners.
- **Don't** add an image-heavy hero or stock imagery. The site is text-first.
- **Don't** add a "Categories" mega-menu or sticky search. Filter is enough.
- **Don't** wire up real auth or comments. This is a single-author blog.

---

## Questions to ask the user before starting

- The wordmark uses a blinking cursor and a `~/` prefix. Is this the final treatment, or do you want a proper logo file?
- The "build unglamorously" footer copy and `© 2026 UnglamorousAI · CC BY-SA · no AI was harmed` are placeholders the designer wrote. Approve or replace.
- The commit feed is mocked. Which GitHub user/org should it pull from? (Suggested: `unglamorous` — but confirm the real handle.)
- Newsletter provider: Buttondown is the recommendation; any preference?
- Streams: YouTube embeds OK, or do you want self-hosted (mux.com, etc)?
- Will any posts be paywalled or require auth? (If yes, this changes the stack — talk to the user first.)

---

## Files in this bundle

```
design_handoff_unglamorous_ai/
├── README.md                          ← you are here
├── SPEC.md                            ← extra detail on edge cases and copy
├── CLAUDE.md                          ← drop into the Astro project root for Claude Code
└── design/
    ├── UnglamorousAI.html             ← open this in a browser to see the design
    ├── app.jsx                        ← router + tweaks mount
    ├── pages.jsx                      ← all 5 page views as React components
    ├── components.jsx                 ← Header, Footer, PostCard, Tag, TypeChip, etc.
    ├── data.jsx                       ← sample posts, streams, commits, tags
    └── tweaks-panel.jsx               ← design-tool tweaks panel (DO NOT PORT — see notes)
```
