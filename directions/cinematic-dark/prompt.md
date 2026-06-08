# 生成 Prompt — Cinematic Dark（电影感）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，唯一外部资源是一个 Google Fonts `<link>`（Inter）和一张本地图片 `portrait.webp`，效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a complete, single-file personal website (`index.html`) for the person below, in the **Cinematic Dark** design direction. Output **only** the HTML file — all CSS in one `<style>` tag, all JS inline. No build step, no frameworks.

## The person (brief)

- **Name**: Marcus Holt
- **Role**: Director & cinematographer (Director & DP — writes with light, shoots his own camera)
- **Audience**: film studios and brands commissioning narrative and commercial work
- **Primary goal**: get visitors to watch the reel, then contact him for a project
- **Thesis (the angle the whole page serves)**: *"I make films that feel like a held breath."* The site should feel like sitting in a dark theater, not reading a résumé.
- **Tone**: cinematic, restrained, expensive, quietly confident — every line lands like a title card.
- **Proof points (use these, concretely — no filler)**:
  - 2 features directed; Official Selection, Cannes Film Festival; brand films for Nike.
  - Hero meta line: `Narrative / Commercial / Director & DP`.
- **Links**: Email `marcus@marcusholt.film` · Watch `The reel` (→ `#reel`) · Follow `@marcusholt` (`https://instagram.com/marcusholt`).
- **Colophon**: `Marcus Holt — Director & Cinematographer · Shot on location, lit by hand`.

## Module plan (in this order)

Each top-level section is tagged on its opening tag with `data-module` / `data-variant`. Use the real copy below verbatim — do not invent filler.

1. `hero` / `full_bleed_still` — `<header>`. Full-bleed cinematic still (`portrait.webp`, `u-photo`) edge-to-edge behind two black letterbox bars (top & bottom); a dark scrim gradient for legibility. Bottom-anchored content: eyebrow `Marcus Holt — Director & Cinematographer`; oversized thesis `h1` `I make films that feel like a held breath.`; meta row `Narrative / Commercial / Director & DP` (slash dots between); CTA `View reel →` (link to `#reel`). The image *is* the hero. `u-fallback` (shown only with photos off): centered mark `MH` + sub `Marcus Holt — Director of Photography` on a radial-dark background.
2. `selected_work` / `grid` — `#reel`, head `01 · Selected work`. Four films as hairline-ruled rows (no cards), each row = `Fnn` no. + title + logline + role/year tag:
   - `F01` **The Long Quiet** — "A feature about a widow walking the coast at the edge of winter, shot entirely in natural light." — `Director · DP` / `Feature · 2024`
   - `F02` **Smoke Season** — "Official Selection, Cannes Film Festival — two brothers, one fire, and the summer that ended them." — `Director · Writer` / `Feature · 2022`
   - `F03` **Nike — Run Until Dark** — "A 90-second brand film: a single runner, a city emptying out, the last light of the day chasing her home." — `Director · DP` / `Brand · 2023`
   - `F04` **Held Breath** — "A short — three minutes, no dialogue, one room, and the moment before a phone rings." — `Director · DP` / `Short · 2021`
3. `metrics` / `stat_row` — full-bleed `surface` band, 3 credit cells split by vertical hairlines: `02` / `Features directed`; `Cannes` (accent) / `Official Selection`; `Nike` / `Brand films`.
4. `experience` / `timeline` — `#path`, head `03 · The path`. Four `when / role / note` rows (hairline-ruled), the org after a `/` in accent:
   - `2020 — Now` · **Director & DP** `/ Independent` — "Two features and a slate of brand films, shot on location and lit by hand. Building a body of work around natural light and patient framing."
   - `2016 — 2020` · **Cinematographer** `/ Stillwater Pictures` — "Lead DP across narrative shorts and documentary work. Shaped the house look that took two films to festival."
   - `2013 — 2016` · **Camera & Lighting** `/ Various` — "Gaffer and second unit on commercial sets — learned the grammar of a frame one twelve-hour day at a time."
   - `2009 — 2013` · **BFA, Film Production** `/ CalArts` — "Thesis short selected for the school's annual showcase; first time a room went quiet for something I shot."
5. `beliefs` / `numbered` — `#craft`, head `04 · How I work`. Four numbered creeds in a 2×2 hairline grid:
   - `01` "Light first, then everything else. If the light is wrong, no lens or grade will save the frame."
   - `02` "Hold the shot a beat longer than is comfortable. The truth tends to arrive late."
   - `03` "Find the location's own weather before you fight it. The room already knows the mood."
   - `04` "Cut to the breath, not the action. A film is paced by what the body does between lines."
6. `selected_quotes` / `large_type` — full-bleed `surface` band, centered oversized blockquote: `Holt shoots the dark like he's [afraid of waking it].` (bracketed words in accent) — figcaption `Sight & Sound — on Smoke Season`.
7. `tools` / `stack_list` — `#kit`, head `05 · On set`. Four `category / items` rows (200px label col + wrap items):
   - `Camera` — ARRI Alexa Mini LF · Sony VENICE 2 · 16mm Bolex
   - `Glass` — Cooke S4 Primes · Zeiss Super Speeds · Vintage Canon K35
   - `Light` — Available & practical · Aputure 600x · Bounce & negative fill
   - `Finish` — DaVinci Resolve · Film emulation LUTs · Hand-graded passes
8. `credentials` / `list` — `#honors`, head `06 · Selections & awards`. Four `what (+ who sub-line) / year-org` rows:
   - **Official Selection** — "Smoke Season — Un Certain Regard" — `Cannes · 2022`
   - **Best Cinematography** — "The Long Quiet — Jury Prize" — `Camerimage · 2024`
   - **Grand Jury Nominee** — "Held Breath — Short Film Competition" — `Sundance · 2021`
   - **Member, American Society of Cinematographers** — "Associate member since 2023" — `ASC · 2023`
9. `currently_building` / `now_block` — `#now`, head `07 · Now`. A pulsing accent dot + status line `Currently — North Coast, off the grid`, then three `→`-marked items (bold key phrases):
   - "In prep on **third feature** — a winter chamber piece, shooting first light only."
   - "Color-finishing a **two-night brand film** shot entirely by firelight."
   - "Reading the rushes light meter by hand again — testing a **16mm stock** for the next short."
10. `contact` / `cta_band` — `#contact`, `letterbox`-black with its own top & bottom bars. Head `08 · Let's make something`; line `If you've got a story that needs to feel like a held breath — let's talk.`; links `Email marcus@marcusholt.film` · `Watch The reel` · `Follow @marcusholt`; colophon line (above).

## Design direction — Cinematic Dark

**DNA**: A theater goes dark and the screen takes over. The hero still bleeds edge to edge behind black letterbox bars (2.35:1 feel); the rest of the page is **lines, not cards** — every section is built from full-width hairline rules and generous black space, never boxes. Type is thin, uppercase, tracked very wide (3–6px) like a title card; body is regular-weight and quiet. Pure near-black canvas, lit by a single warm sand accent that behaves like the one practical light left on set — used only on numbers, links, hairlines on hover, the `/` org names, the pulse dot. **No rounded corners** (everything is hard right angles), **no drop shadows on content** (the only `box-shadow` is the photo-toggle chip and the now-dot pulse ring). Reference vocabulary: A24, film title cards, Criterion, director-reel sites, Letterboxd. Avoid: rounded corners, card grids, bright saturated color, centered body text, purple gradients, busy motion.

**Tokens** (define as CSS variables on `:root`, obey exactly):
- colors: `--canvas:#0a0a0b` · `--surface:#111113` · `--letterbox:#000000` · `--ink:#f4f1ea` · `--ink-muted:#9a968d` · `--ink-subtle:#605d57` · `--accent:#c4b59a` · `--accent-hover:#d8cab1` · `--hairline:#26262a`
- spacing tokens: `--section:140px` · `--block:44px` · `--tight:16px`. Container: `.wrap{max-width:1200px;margin:0 auto;padding:0 32px}` (22px gutter ≤720px). Every list section uses `.sec{padding:var(--section) 0}` (= 140px top/bottom); the surface bands (`.metrics`,`.bigquote`) and the contact band also pad `var(--section)` internally.
- section heading: `.sec__head{display:flex;align-items:baseline;gap:16px;margin-bottom:64px}` — an `.idx` number (`13px; 300; +2px; color:var(--accent)`) sits to the left of the `.display-md` h2 (the `·` in the Module plan heads is just shorthand; render them as two separate inline elements, **not** a literal middle-dot). At ≤720px `.sec__head` becomes `flex-direction:column;gap:8px;margin-bottom:44px`.
- key measures (max-width on prose blocks — load-bearing): hero thesis `.hero__thesis{max-width:18ch}`; contact line `.contact__line{max-width:20ch}`; `.film__logline{max-width:46ch}`; `.stop__note{max-width:54ch}`; `.now__list{max-width:60ch}`; blockquote `max-width:20ch` (see below).
- fonts: Google Fonts `Inter` weights 200/300/400/500. Link: `https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap`. Body `font-family:'Inter',system-ui,sans-serif; font-size:16px; line-height:1.7; letter-spacing:.2px; font-weight:400; -webkit-font-smoothing:antialiased`.
- type scale (real `clamp()` from the page):
  - `.display-xl` (hero thesis): `font-size:clamp(34px,7.5vw,64px); font-weight:200; line-height:1.02; letter-spacing:clamp(2px,1vw,6px); text-transform:uppercase`
  - `.display-md` (section h2 / contact line): `clamp(22px,4vw,30px); 300; line-height:1.1; +3px; uppercase`
  - `.title-card`: `15px; 300; line-height:1.6; +4px; uppercase; color:var(--ink-muted)`
  - `.eyebrow`: `11px; 500; +4px; uppercase; color:var(--accent)`
  - `.film__title`: `clamp(22px,3.4vw,30px); 300; +2px; uppercase; line-height:1.12`
  - `.stop__role`: `clamp(18px,2.6vw,22px); 300; +2px; uppercase; line-height:1.18`
  - `.honor__what`: `clamp(15px,1.8vw,17px); 300; +1px; uppercase` (its `.honor__who` sub-line: `13px; ink-muted; text-transform:none`)
  - `.credit__big`: `clamp(40px,6vw,68px); 200; line-height:1; +2px`
  - `.creed__txt`: `clamp(17px,2vw,20px); 300; line-height:1.45`
  - `.bigquote blockquote`: `clamp(26px,4.6vw,46px); 200; line-height:1.18; letter-spacing:clamp(1px,.6vw,3px); uppercase; max-width:20ch; centered`
  - `.fb-mark` (fallback): `clamp(60px,18vw,160px); 200; letter-spacing:clamp(6px,2vw,18px); uppercase`
- `::selection{background:var(--accent);color:#000}`. `:focus-visible{outline:1px solid var(--accent);outline-offset:4px}`.

## Signature techniques (pure CSS — copy these recipes with their values)

1. **Letterbox bars** — pure black absolute bars top & bottom of the hero (and the contact band), pointer-events off:
   ```css
   .bar{position:absolute;left:0;right:0;height:7vh;min-height:34px;background:var(--letterbox);z-index:3;pointer-events:none}
   .bar--top{top:0}.bar--bottom{bottom:0}
   .contact .bar{height:5vh;min-height:26px}
   ```
2. **Hero is a full-bleed still + scrim** — image fills, desaturated & dimmed; a layered gradient scrim keeps the title legible:
   ```css
   .hero{min-height:100svh;display:flex;flex-direction:column;justify-content:flex-end;background:var(--letterbox);overflow:hidden}
   .hero__media{position:absolute;inset:0;z-index:0}
   .hero__media .u-photo{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.05) brightness(.82)}
   .hero__scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.55) 0%,rgba(0,0,0,0) 28%,rgba(0,0,0,0) 50%,rgba(10,10,11,.55) 78%,rgba(10,10,11,.95) 100%)}
   .hero__inner{position:relative;z-index:2;padding-bottom:calc(7vh + 56px)}
   ```
3. **Lines, not cards** — list-style sections are full-width `grid` rows divided by hairlines; the section gets `border-top:1px solid var(--hairline)`, each row `border-bottom:1px`. e.g. films `grid-template-columns:54px 1fr auto`; timeline `130px 1fr`; tools `200px 1fr`; credentials `1fr auto`.
4. **Film hover choreography** — row tints to `--surface` and nudges right; its number warms to accent:
   ```css
   .film{transition:background .4s ease,padding-left .4s ease}
   .film:hover{background:var(--surface);padding-left:20px}
   .film__no{transition:color .4s ease}.film:hover .film__no{color:var(--accent)}
   ```
5. **Metrics & quote bands** — break the rhythm with full-bleed `--surface` bands fenced by top+bottom hairlines (`.metrics`,`.bigquote`); credits split by `border-left:1px solid var(--hairline)` (first cell `border-left:0`).
6. **2×2 belief grid** — `.creeds{display:grid;grid-template-columns:repeat(2,1fr)}`; odd cells get `border-right` + extra right pad, even cells extra left pad; all share `border-bottom` — a true ruled matrix, no boxes.
7. **Accent as the one practical light** — apply `var(--accent)` *only* to: eyebrow, section `idx` numbers, `.credit__big .accent`, `.creed__no`, the `/ org` (`.at`), reel/contact link `.pre`/arrow, hairlines on hover, and the now-dot. Never fill large areas with it.
8. **Underline CTA** — `.reel-link` is an inline-flex with a bottom hairline; on hover the border becomes accent, gap widens, the `→` slides:
   ```css
   .reel-link{display:inline-flex;gap:14px;border-bottom:1px solid var(--hairline);transition:border-color .35s,color .35s,gap .35s}
   .reel-link:hover{color:var(--accent-hover);border-color:var(--accent);gap:20px}
   .reel-link:hover .arrow{transform:translateX(4px)}
   ```
9. **Now pulse dot** — a small accent dot with an expanding box-shadow ring (the only decorative animation besides reveals):
   ```css
   .now__dot{width:8px;height:8px;border-radius:50%;background:var(--accent);flex:none;animation:nowPulse 2.6s ease-out infinite}
   @keyframes nowPulse{0%{box-shadow:0 0 0 0 rgba(196,181,154,.5)}70%{box-shadow:0 0 0 10px rgba(196,181,154,0)}100%{box-shadow:0 0 0 0 rgba(196,181,154,0)}}
   ```

## Photo + toggle contract (must implement verbatim)

The page ships a real local portrait. The hero `<img class="u-photo" src="portrait.webp" alt="...">` is the cinematic still; its no-photo counterpart is an intentional all-typographic title-card hero on black (`u-fallback`, the `MH` mark). Default = photos ON; `sample.png` is taken with photos ON.

Add into `<style>`:
```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .hero .u-fallback{display:flex !important}   /* fallback needs flex when shown */
.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
```
Before `</body>` add (verbatim):
```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
<script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
```

## Motion

Honor `prefers-reduced-motion` everywhere (disable smooth scroll, render all reveals/animations final, no timers).

- **Hero intro**: `.hero__inner > *` start `opacity:0;transform:translateY(24px)` and `animation:fadeUp 1.1s cubic-bezier(.22,.61,.36,1) forwards` with staggered delays — name `.45s`, thesis `.65s`, meta `.85s`, CTA `1.05s` (`@keyframes fadeUp{to{opacity:1;transform:none}}`). Note: the bars are static (they do **not** animate open).
- **Scroll reveal**: every `.reveal` starts `opacity:0;transform:translateY(28px)` with `transition:opacity 1s ease,transform 1s cubic-bezier(.22,.61,.36,1)`; an `IntersectionObserver` (`threshold:.16`, `rootMargin:'0px 0px -8% 0px'`) adds `.in` (→ `opacity:1;transform:none`) once, then unobserves. No-IO / reduced-motion fallback: add `.in` to all immediately.
- **Continuous**: only the now-dot `nowPulse` ring (2.6s infinite). No other ambient motion.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no npm, no JS framework.
2. The only external resources are the Google Fonts `<link>` (Inter) and the one local image `portrait.webp` (referenced relatively). **No** Three.js/WebGL/heavy canvas, no other remote assets or remote images.
3. Responsive 360–1440px, mobile-first; at ≤720px collapse the multi-column grids to single column (films/timeline/tools/credentials stack; creeds become one column; credit cells stack with top hairlines). Semantic HTML; accessible (contrast, visible focus, alt text); honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tag every top-level section with its `data-module`/`data-variant` (per the Module plan). The no-photos fallback must still look intentional (a typographic title-card hero on black). Looks cinematic and senior-designed, not AI-generic.

**Output: the complete `index.html` and nothing else.**
