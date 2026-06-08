# 生成 Prompt — Mono Zine（单色杂志）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。页面只引用两个外部资源：一个 Google Fonts `<link>`（JetBrains Mono）和一张本地图片 `portrait.webp`（装裱插图，含无图回退）。

---

You are a senior frontend designer-developer. Generate a complete, single-file personal website (`index.html`) for the person below, in the **Mono Zine** design direction. Output **only** the HTML file — all CSS in one `<style>` tag, all JS inline. No build step, no frameworks.

## The person (brief)

- **Name**: Sam Rourke
- **Role**: Indie maker & writer (`SAM ROURKE / indie maker & writer`)
- **Audience**: readers and fellow makers who'd rather see the wiring than the pitch
- **Primary goal**: get visitors to read the writing and subscribe to the newsletter
- **Thesis (the angle the whole page serves)**: *"Shipping small things in public, and writing down what breaks."* The page reads like a printed README from someone who actually ships.
- **Tone**: plain, dry, specific, builds-in-public; no hype, no "passionate about innovation"
- **Meta line**: `est. 2018 · builds in public`; `[ 6 products ]` `[ 8k subscribers ]` `[ weekly notes ]`
- **Proof points (use these, concretely — no filler)**:
  - 6 small products shipped (a few earning revenue, a few honest failures)
  - Newsletter with ~8,000 subscribers; 210+ weekly logs sent; $11k monthly recurring
  - Builds in public — weekly notes on what shipped and what broke
- **Page description (meta)**: "Sam Rourke ships small things in public and writes down what breaks. 6 products, an 8k-subscriber newsletter, builds in public."
- **Links**: Email `sam@samrourke.dev`, GitHub `@samrourke`, X `@samrourke`
- **Footer**: `© 2026 Sam Rourke — printed in monospace.` / `[ built & broken in public ]`

## Module plan (in this order)

Each `<section>` carries `data-module` / `data-variant` on its opening tag. Sections are separated by a full-width `<hr class="rule">` (solid black hairline). A top bar (`SAM ROURKE / indie maker & writer` + nav: Work · Stats · Now · Writing · About · Subscribe) sits above the hero, inside a bordered "sheet" frame.

1. **`hero` / `bold_statement`** — meta line `[ readme ] · est. 2018 · builds in public`; oversized mono `<h1>`: *"Shipping small things in public, and writing down what breaks"* with a blinking red block cursor at the end; lede: *"I make tiny products and write the honest notes — what shipped, what flopped, what I'd do differently. For readers and fellow makers who'd rather see the wiring than the pitch."*; a second meta row of bracketed chips `[ 6 products ]` `[ 8k subscribers ]` `[ weekly notes ]`. Beside it (right column ≥720px): a framed graphic **plate** — bordered `portrait.webp` with caption `[ fig.01 ]  plate / poster`.
2. **`selected_work` / `list`** — label `[ selected work ]`, heading **"Six shipped. A few earn. A few died."**, right-aligned count `04 listed`. Ruled numbered `<ol>` of 4 rows (`01`–`04`), each: red name · one-line desc · a boxed meta tag:
   - `01 Tally` — "A tiny analytics widget — one script tag, no cookie banner, no dashboard sprawl." → tag `1.2k paying users`
   - `02 Deploybot` — "A one-file CI helper that does the boring 80% of a deploy and gets out of the way." → tag `4k GitHub stars`
   - `03 Coldbrew` — "A static-site newsletter starter kit — write in Markdown, send from your repo." → tag `open source`
   - `04 Readwise-for-RSS` — "A side project that flamed out. I wrote the post-mortem instead of deleting the repo." → tag `post-mortem` (red `.fail` variant)
3. **`metrics` / `stat_row`** — label `[ by the numbers ]`, heading **"Eight years, counted plainly."**, then a 4-cell hairline grid (1→2→4 cols): `6` products shipped · `8k` newsletter readers · `210+` weekly logs sent · `$11k` monthly recurring (the `k` / `+` / `k` rendered red).
4. **`currently_building` / `now_block`** — a red-outlined box with a red header bar reading `[ now ]` ↔ `updated 2026-05 · jun`. Body heading **"Building Stitch — a self-host-first feedback inbox."** (Stitch in red). Para: *"One repo, one binary, your own database. The bet: makers want feedback without renting another SaaS to read it. I'm dogfooding it on my own products this season and writing each rough edge down as I hit it."* Footer line w/ red square dot: *"Cadence: ship one visible thing every **Friday**, broken or not."* (Friday red).
5. **`beliefs` / `numbered`** — label `[ how i work ]`, heading **"Four rules I keep coming back to."**, ruled numbered list (red `01`–`04`), each a bold title + muted desc:
   - 01 **Ship the smallest thing that's real.** — "A v0.1 that one person uses beats a v1.0 nobody sees. Scope down until it's embarrassing, then ship it."
   - 02 **Write the post-mortem before the launch.** — "If I can't say plainly what could break, I don't understand it yet. The breakage notes are the most-read thing I make."
   - 03 **Own the database.** — "Self-host-first, one binary where I can. I'd rather carry a little ops weight than rent my own data back from someone."
   - 04 **No funnel, no course.** — "The writing isn't a marketing layer on top of the work — it is the work. Sell the product, not the dream of the product."
6. **`writing` / `list`** — label `[ from the log ]`, heading **"Recent notes worth reading."**, count `04 of 210`. Ruled list, each row: bold title · right meta `YYYY-MM · N min` (date red) · muted desc spanning full width:
   - "The Readwise-for-RSS post-mortem" — `2026-04 · 9 min` — "Why a tool I loved building never found a second user — and what the write-up taught me about distribution."
   - "One binary, your own database" — `2026-03 · 7 min` — "The case for self-host-first products, and the ops tax it actually costs in practice."
   - "Pricing Tally the boring way" — `2026-02 · 6 min` — "How a flat $9 plan beat three tiers, and the churn numbers that convinced me to simplify."
   - "Shipping every Friday for a year" — `2026-01 · 5 min` — "52 visible things, broken or not — what a forced cadence does to the quality of the work."
7. **`tools` / `stack_list`** — label `[ the stack ]`, heading **"What I build and write with."**, three labeled rows (label col ≥720px), each a flex-wrap of bordered chips:
   - `[ build ]` → Go · SQLite · TypeScript · Svelte · Litestream
   - `[ ship ]` → Fly.io · Caddy · GitHub Actions · Docker
   - `[ write ]` → Neovim · Markdown · Obsidian · Buttondown
8. **`selected_quotes` / `large_type`** — a top-ruled block: a red `[ " ]` mark, then an oversized pull-quote: *"Most build-in-public is a highlight reel. Sam logs the **breakage** — and that's why I actually read it."* (breakage red), cite `— a fellow maker, on the build log` (dash red).
9. **`story` / `short`** — label `[ about ]`, heading **"Why I write it all down"**; a large pull line *"Most "build in public" is a highlight reel. I'd rather log the **breakage**."* (breakage red); then 3 plain paras:
   - "I've shipped six small products over eight years. Two of them pay rent. Two of them never found a second user. I write the newsletter the way I keep a build log — plain, dated, specific about what went wrong before I say what worked."
   - "It turns out the post-mortems travel further than the launches. The Readwise-for-RSS write-up got more readers than the thing ever had users. So now the writing isn't a marketing layer on top of the work — it *is* the work, and the products are just where the notes come from."
   - "If you make things and you're tired of the polished version, the newsletter is for you. No funnel, no course. Just what shipped this week and what broke."
10. **`subscribe` / `inline_form`** — label `[ subscribe ]`, a bordered box: heading **"Get the build log in your inbox."**, sub *"Weekly notes on what I shipped and what broke. Joined by **~8,000** readers and fellow makers. One email a week, unsubscribe in one click."* (~8,000 red); a single-border inline form (email input + red `Subscribe →` button), status note `No spam. Just the weekly log.` (JS validates `@`, on success shows `✓ subscribed — check your inbox to confirm.` in red). Below: links row `email sam@samrourke.dev` · `github @samrourke` · `x @samrourke` (the label word faint).

## Design direction — Mono Zine

**DNA**: A LIGHT paper zine printed in monospace — like a risograph README, NOT a dark terminal. Warm paper `#f4f3ee`, ink black `#1a1a1a`, **all monospace** (JetBrains Mono), ruled with solid black hairlines between every section like a self-published booklet. Everything aligns to a fixed character grid; structure is built from **lines, not cards** — `1.5px` borders and hairline-divided grids, never box shadows on content or rounded corners. Bracketed labels (`[ selected work ]`), row numbers (`01 / 02`), a framed graphic plate. One hot red accent `#d83a2a` ONLY on pull-words, names, the `[ now ]` block, stat suffixes, dates, and the subscribe button — never as a fill. Zero rounded corners, zero content shadows, zero gradients except the faint ruled-paper hairline, zero sans-serif. Raw, hand-assembled, indie. Motion: a blinking hero cursor only; honor `prefers-reduced-motion`. Avoid: dark-terminal / neon-on-black, card shadows, rounded corners, decorative color fills, any sans-serif.

**Tokens** (define as CSS variables, obey exactly):
- colors: `--paper:#f4f3ee` · `--paper-sunk:#ecebe4` · `--ink:#1a1a1a` · `--ink-muted:#56544e` · `--ink-faint:#8b887f` · `--accent:#d83a2a` · `--accent-ink:#a82a1d` · `--rule:#1a1a1a` · `--rule-soft:#d6d4ca`
- font (Google Fonts, the ONLY font everywhere): `--mono:'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace`. Link: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap`
- spacing: `--sp-section:64px` · `--sp-block:28px` · `--sp-tight:12px`; layout `--maxw:880px` (centered sheet, `0 20px` padding → `0 28px` ≥920px)
- section padding: `section{padding:var(--sp-section) 24px}` → horizontal grows to `48px` ≥920px (the top bar & footer match this `24px → 48px` inset). The **hero** overrides to `padding-top:56px; padding-bottom:56px` (NOT 64px). `.sec-head` (label + h2 + count) has `margin-bottom:30px` before its content; the hero h1 has `margin:0 0 22px`.
- base body: `15px / line-height 1.7 / weight 400`, color `--ink` on `--paper`
- type scale (use these REAL clamp() exprs, not fixed px):
  - hero h1: `clamp(34px, 8vw, 56px)` / 1.06 / `-1.5px` / 800, `max-width:14ch`
  - section h2: `26px` / 700 / `-.5px`
  - lede: `18px` / 1.55 / 500, muted, `max-width:52ch`
  - stat figure: `clamp(30px, 6vw, 40px)` / 800 / `-1.5px`
  - pull-quote blockquote: `clamp(22px, 5vw, 30px)` / 700 / `-.8px` / 1.28, `max-width:22ch`
  - story pull line: `22px` / 700 / `-.6px`, `max-width:24ch`
  - label: `12px` / 600 / `+1px` / uppercase, color muted
- borders are the design: hairlines are `1.5px solid var(--rule)` (hard) or `1.5px solid var(--rule-soft)` (between list rows / inside grids).

## Signature techniques (pure CSS/SVG)

1. **Ruled-paper background** — behind everything on `<body>`: `background-image:linear-gradient(var(--rule-soft) 1px, transparent 1px); background-size:100% 2.04em; background-position:0 -1px; background-attachment:local;` Faint horizontal rules every line, like a notebook. This is the only gradient on the page.
2. **The sheet + frame** — a centered column (`--maxw:880px`) wrapped in `.frame{border-left:1.5px solid var(--rule);border-right:1.5px solid var(--rule);background:var(--paper)}` so the whole page reads like a bound booklet with margins. Sections separated by full-bleed `<hr class="rule">{border:0;border-top:1.5px solid var(--rule)}`.
3. **Lines, not cards** — lists and the stat grid are constructed from hairlines: lists get `border-top:1.5px solid var(--rule)` and each row `border-bottom:1.5px solid var(--rule-soft)`. The stat grid uses `border-top/left` on the container + `border-bottom/right` on each cell so internal hairlines render once (`grid-template-columns` 1→`repeat(2,1fr)`@560→`repeat(4,1fr)`@720). No backgrounds, no shadows.
4. **Bracketed labels** — every section opens with `[ label ]` where the brackets are red (`.bracket{color:var(--accent);font-weight:700}`) and the word is muted uppercase mono. Reused for stat chips, stack-group keys, the `[ now ]` bar, the `[ " ]` quote mark.
5. **The framed plate** — `portrait.webp` sits in `.platebox{border:1.5px solid var(--rule);padding:8px}` with `img{filter:grayscale(.15) contrast(1.02)}` and a two-column `figcaption` (`[ fig.01 ]` red ↔ `plate / poster` muted uppercase). Reads as a printed plate, not a full-bleed photo.
6. **`[ now ]` block** — the one red-outlined region: `.now{border:1.5px solid var(--accent)}` with a solid red header bar (`background:var(--accent);color:var(--paper)`, `padding:8px 14px`, `letter-spacing:2px` uppercase) and a `.now-body{padding:22px 18px}` and a small red square `.dot` (8×8px, no radius) on the cadence line. The whole region is vertically inset by `--sp-section` top & bottom (`.now-wrap`).
7. **Blinking hero cursor** — an `inline-block` red block after the h1: `width:.55ch;height:.92em;background:var(--accent);vertical-align:-0.08em;margin-left:2px;` `animation:blink 1.05s steps(1) infinite` where `@keyframes blink{50%{opacity:0}}` (the `vertical-align`/`margin-left` seat it on the baseline beside the last word). The only continuous motion.
8. **Hover choreography** — list rows tint on hover (`background:var(--paper-sunk)`), names go to `--accent-ink` with `text-decoration:underline; text-underline-offset:3px`; top-bar nav links grow a red `border-bottom` on hover; chips/tags are bordered boxes (`border:1.5px solid var(--rule);padding:2px 8px`). Focus: `outline:2.5px solid var(--accent); outline-offset:2px`.
9. **Inline form as one ruled box** — the whole subscribe panel is a bordered `.sub-box{border:1.5px solid var(--rule);padding:26px 22px}` (and the subscribe section adds `padding-bottom:80px`). Inside it, `form` has a single `1.5px` outer border (`max-width:520px`); the input is borderless (focus → `background:var(--paper-sunk)`); the submit button is the red fill (`background:var(--accent)` → `--accent-ink` on hover) divided from the input by a `border-left:1.5px solid var(--rule)`. No gaps, no radius.

## Photo + toggle contract

The page ships a real local portrait. There is one local image `portrait.webp` next to `index.html`, used as the framed hero plate.

- The `<figure>` (or its `<img>`) gets `class="u-photo"`; the `<img>` has a meaningful `alt` (e.g. "Risograph-style poster plate from Sam Rourke's build-in-public log"), `loading="lazy"`, explicit `width`/`height`.
- A `class="u-fallback"` typographic fallback shows when photos are OFF: a bordered box with a 45° hatch (`repeating-linear-gradient(45deg, var(--paper-sunk) 0 9px, var(--paper) 9px 18px)`) containing a boxed monospace mark `S` + red `R`, plus a `[ fig.01 ]  mark / no-photo` caption. It must look intentional, not like a broken image.
- Default = photos ON. Include verbatim:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  ```
  (If the fallback needs grid/flex, add a scoped `body.no-photos <sel> .u-fallback{display:grid !important}` with `!important`.)
- Photo-toggle widget CSS (verbatim — this is the one place a radius/shadow is allowed, it's atlas chrome, not content):
  ```css
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
- Before `</body>` add (verbatim):
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```

## Motion

Deliberately minimal. The ONLY continuous animation is the blinking hero cursor (`@keyframes blink{50%{opacity:0}}`, `1.05s steps(1) infinite`). No scroll reveals, no IntersectionObserver, no letterbox/sunburst/parallax — do not add any. Under `@media (prefers-reduced-motion: reduce)` disable the cursor blink (`.hero h1 .cursor{animation:none}`) and set `*{scroll-behavior:auto}`. The subscribe form's submit handler is the only other JS (preventDefault + simple `@` validation + status message).

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework, no Three.js/WebGL.
2. Only external resources allowed: the Google Fonts `<link>` and the one local `portrait.webp`. Nothing else remote.
3. Use the exact tokens above as CSS variables; obey them.
4. Responsive 360–1440px, mobile-first (breakpoints at 560 / 720 / 920px as above); semantic HTML; accessible (contrast, visible focus states, alt text, `sr-only` form label); honor `prefers-reduced-motion`.
5. Real content from the brief — no lorem, no hype filler. Every section above must be present, in order, tagged with its `data-module`/`data-variant`.
6. Looks designed by a senior designer for THIS direction: a light printed mono zine ruled with hairlines, clearly distinct from dark-terminal / editorial / swiss / brutalist directions.

**Output: the complete `index.html` and nothing else.**
