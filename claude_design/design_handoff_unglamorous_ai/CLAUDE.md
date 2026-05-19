# CLAUDE.md

> Drop this file into the **root of your Astro project** (alongside `astro.config.mjs`). Claude Code reads it automatically.

You are helping implement **UnglamorousAI.com**, a blog for a practitioner who ships purpose-built AI agents into production. The full design + spec is at `./design_handoff_unglamorous_ai/` (or wherever the human placed the handoff bundle).

## Required reading before you start

1. `design_handoff_unglamorous_ai/README.md` — the master implementation guide
2. `design_handoff_unglamorous_ai/SPEC.md` — exact copy and edge cases
3. `design_handoff_unglamorous_ai/design/UnglamorousAI.html` — open in a browser to see the design behaving

## Stack (already installed)

Astro + `@astrojs/react` + `@astrojs/mdx` + `@astrojs/tailwind` + `@astrojs/sitemap` + `@astrojs/rss`. TypeScript strict.

**Do not add:** UI libraries (shadcn, Radix, headlessui), routing libraries, state managers, animation libraries (framer-motion), or icon libraries. The design is bespoke; libraries will fight you.

**Do add (with the user's OK):** `@fontsource/geist`, `@fontsource/geist-mono` (and the alternate font families if you're wiring up the tweaks panel), `astro-og-canvas` or similar for OG images.

## Editorial voice (do not lose this)

Three tone words: **irreverent, demystifying, teacher**. The site is anti-hype, plainspoken, occasionally dry-funny. Lowercase nav labels. Sentence fragments are OK. Avoid all VC-bro language ("synergy", "10x", "AI-powered", "transformative", "next-gen"). The author dislikes the phrase "AI-powered" enough that it's a fact card on the about page.

## How to ship this

Follow the order in README.md, "What to ship in order". After each step, run the dev server and check the route against the prototype in your browser. Pause for human review after step 3, step 6, and step 11.

## What to ask before you start

- Confirm the wordmark treatment (currently `~/UnglamorousAI` with a blinking cursor — is this final?)
- Confirm the GitHub handle to pull commits from
- Confirm the newsletter provider (recommendation: Buttondown)
- Confirm any unique deploy requirements (the recommendation is Cloudflare Pages)

## Conventions

- **File layout:**
  ```
  src/
    components/      # .astro components, lowercase-file-names match component name
    islands/         # React .tsx islands only — TweaksPanel, WritingFilters, Clock, CommitFeedLive, NewsletterForm
    content/
      posts/         # md / mdx
      streams/       # md
      config.ts      # collection schemas
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      writing/
        index.astro
        [slug].astro
      streams/
        index.astro
      about.astro
      404.astro
      rss.xml.ts
    styles/
      global.css     # all CSS that's hard to express as Tailwind utilities (article-body, code blocks, player frame, blinking cursor)
  public/
    favicon.svg
    _fonts/
  ```
- **CSS strategy:** Tailwind for layout and one-off utility. `global.css` for: typography rules on `.article-body`, the radial gradient on `body`, scrollbar styling, keyframe animations, the chip and player-frame patterns. Don't fight Tailwind by overriding it; just write plain CSS for the parts that aren't utility-shaped.
- **Components are mostly `.astro`.** React is only used where there's interactive state. See the "Routing & islands summary" table in README.md.
- **Don't round corners.** The design uses 0–2px radii. Setting `border-radius: 9999px` (pill chip) anywhere will break the aesthetic.

## Acceptance check (before you say "done")

- [ ] `npm run dev` shows all 5 routes rendering with no console errors
- [ ] `/writing` filters work and update the URL
- [ ] Article page renders code blocks with the language bar and a working copy button
- [ ] Tweaks panel persists across reloads (no FOUC on accent change)
- [ ] `npm run build` succeeds with no warnings
- [ ] `dist/rss.xml` validates at `https://validator.w3.org/feed/`
- [ ] Lighthouse perf score on `/` is 95+ on mobile

## When to push back

If the user asks you to add a feature that conflicts with the spec (e.g., "add comments", "make the headlines centered", "use a serif for body"), tell them you're going to deviate and ask if that's intentional. The design is opinionated on purpose; defending it is part of your job.
