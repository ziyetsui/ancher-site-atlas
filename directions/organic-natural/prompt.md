# 生成 Prompt — Organic Natural（自然有机）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，外部资源仅两项：同目录的本地肖像 `portrait.webp`，以及一条 Google Fonts `<link>`（Fraunces + Nunito Sans）。效果应与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Organic Natural** direction — a personal site for the person below. All CSS in one `<style>`, all JS inline. No build step, no frameworks. The only external resources are the Google Fonts `<link>` and one local image `portrait.webp` sitting next to the HTML. Botanical accents are inline SVG.

## The person (brief)

- **Name**: Elena Vasquez
- **Role**: Writer & retreat host
- **Audience**: readers and makers building things meant to last — people who want a slower, more deliberate relationship with their work
- **Primary goal**: get visitors to subscribe to her newsletter (*Rooted*) or apply to join a retreat
- **Thesis (the angle the whole page serves)**: *"Slower work, deeper roots — for people building things meant to last."* The page should feel like a quiet morning at a retreat, not a sales funnel.
- **Tone**: calm, grounded, warm, unhurried, quietly assured — never hustle-y or loud
- **Proof points (use these, concretely — no filler)**:
  - Author of *The Long Season* (Cedar & Field Press, 2023), a book on slow work and sustainable craft, four years in the drafting
  - *Rooted*, a weekly newsletter on slow/sustainable craft, read by ~9,000 (page also says 9,200) readers every Sunday
  - 11 years writing on slow, sustainable craft
  - 26 retreats hosted in rural quiet; 3–4 a year, cohorts capped at 12, six years running
  - Former creative director (Meridian Studio, 2014–2020) who left "wide and shallow" for "slow and deep"
- **Contact / links**: Subscribe (newsletter), Apply for a retreat cohort, Email `hello@elenavasquez.com`
- **Brand marks**: wordmark "Elena **Vasquez**" (surname in clay). Footer line: "Writer & retreat host · *The Long Season* · *Rooted*" and "© 2026 Elena Vasquez. Grown slowly."
- **Top nav** (anchors): The work · Now · Path · Writing · Voices · Subscribe.

## Module plan (in this order)

Every section carries `data-module="…" data-variant="…"` on its opening tag (the inspector reads these). Inline the real copy below — do not invent filler.

1. `hero` → **split_portrait**. Left: eyebrow "Writer & retreat host"; H1 "Slower work, *deeper roots*." (second line italic sage); sub "For readers and makers building things meant to last — a slower, more deliberate way to work, and a place to come root."; two CTAs — primary "Subscribe to *Rooted* →", ghost "Join a retreat". Right: portrait on an organic blob (see techniques), with a botanical-sprig SVG in the top-right corner. Honors the photo+toggle contract (default ON; typographic "EV" fallback when OFF).
2. `story` → **magazine_longform**. Section on a tinted band. Eyebrow "The work"; H2 "I make a case for working slowly — on purpose, and out loud." Lead italic pull-quote: "The things I most admire weren't rushed into being. They were tended, season after season, until they were deep enough to hold weight." Then 3 body paragraphs (first paragraph gets a drop-cap): para 1 about moving fast → "wide but shallow … didn't hold … started over with a slower premise"; para 2 names *The Long Season* (sustainable craft) + *Rooted* (weekly, nine thousand readers) + the retreats (small cohorts, rural quiet); para 3 "None of it is about doing less. It's about doing the right things deeply enough that they take root — in your work, and in you." A botanical sprig SVG in the margin.
3. `metrics` → **stat_row**. Eyebrow "Grown slowly"; H2 "What a slower decade adds up to." Four stats (serif numerals, italic units in clay): **9,200** "readers of *Rooted*, every Sunday" · **11*yrs*** (numeral and italic unit abut, no space) "writing on slow, sustainable craft" · **26** "retreats hosted in rural quiet" · **1** "book, *The Long Season*, tended for years".
4. `beliefs` → **principles_list**. Eyebrow "What I hold"; H2 "A few things I keep returning to." 2×2 list, each row a small leaf SVG + title + line: "Depth over speed" / "The work worth doing rarely rewards rushing. I'd build one thing deeply before ten things widely." — "Seasons, not sprints" / "A practice has lean years and fruitful ones. The point is to stay rooted long enough to see both." — "Quiet is a resource" / "The best thinking I've done was unhurried and offline. I protect attention the way I'd protect soil." — "Write it in the open" / "Thinking out loud, in public, keeps me honest. The newsletter is a decade of working in daylight."
5. `currently_building` → **now_block**. Eyebrow "Now"; H2 "What I'm tending this season." Three rounded cards (tag + title + line): **Newsletter** "*Rooted*" — "A weekly letter on slow work and sustainable craft, read by 9,000 people. One idea at a time, written the way I'd say it on a porch." · **Retreats** "The 2026 season" — "Three to four retreats a year, cohorts capped at twelve. Six years in, and still the most honest work I do. Applications open for the next cohort." · **Book** "The next chapters" — "Drafting a companion to *The Long Season* — on what it actually takes to keep a practice alive across the lean years."
6. `experience` → **timeline**. Eyebrow "The path"; H2 "How the slow road actually went." Vertical timeline, 4 items (when · title · where · line): **2020 — now** "Writer & retreat host" · Independent · *Rooted* — "Left the agency world to write full-time on sustainable craft and host small rural retreats for makers building things meant to last." | **2023** "Published *The Long Season*" · Cedar & Field Press — "A book on keeping a practice alive across the lean years — four years of drafting, no advance, no rush." | **2014 — 2020** "Creative director" · Meridian Studio — "Built brands fast and wide. Learned the hard way that wide and shallow doesn't hold — the lesson the rest of this is about." | **2011** "First essays" · Self-published — "Started writing in the open, one idea at a time. The habit that quietly became the whole practice."
7. `writing` → **list**. On a tinted band. Eyebrow "From the letter"; H2 "Recent dispatches from *Rooted*." Hairline-divided list, 4 items (title link + meta + dek): "The case for finishing slowly" · Essay · May 2026 — "Why the last 10% takes the longest — and why that's exactly where the thing becomes worth keeping." | "What a fallow season is for" · Letter · Apr 2026 — "On rest as part of the work, not a pause from it. Borrowing a farmer's calendar for a creative practice." | "Building things that outlast the hype" · Essay · Mar 2026 — "The quiet projects that compounded while the loud ones evaporated — a decade of receipts." | "Notes from a quiet week" · Field note · Feb 2026 — "What twelve makers in a farmhouse, offline for seven days, taught me about attention." All links point to #subscribe.
8. `testimonials` → **cards**. On a sage-tinted band. Eyebrow "Voices"; H2 "From readers & past guests." Three soft cards (italic-serif quote + blob avatar initial + name + role): **Maya Okonkwo** · Ceramicist · 2024 cohort — "I came in burned out and convinced I had to move faster. I left with a slower plan I actually believed in — and a year later, it's the one that held." | **Daniel Reyes** · Founder · Reader since 2021 — "Rooted is the only newsletter I read top to bottom. It doesn't sell urgency. It gives me permission to do the deep thing." | **Hana Lindqvist** · Writer · 2023 cohort — "Elena's retreat reset how I think about my whole practice. Quiet, rural, unhurried — and somehow the most productive week of my year."
9. `selected_quotes` → **large_type**. Eyebrow "A line I live by"; oversized italic blockquote (`max-width:18ch`) "You don't *build* a practice. You plant one, and then you keep showing up while it roots." — the emphasized word *build* shifts to `var(--sage-deep)` (the same em-recolor as the hero's second line, not just italics); source "— from *The Long Season*". A botanical sprig SVG in the corner.
10. `subscribe` → **cta_band**. A sage-deep filled card (rounded, with two blurred organic ornaments). Eyebrow "Come root"; H2 "Slower work, in your inbox each week."; body "Join 9,000 readers of *Rooted*. No hustle, no noise — one deep idea at a time about building things that last."; pill email input + "Subscribe →" button (form inert, `onsubmit="return false"`); below: "Thinking about a retreat? Apply for the next cohort · or just say hello: hello@elenavasquez.com".

Then a centered `footer` with the wordmark + the two footer lines above.

## Design direction — Organic Natural

**DNA**: Earthy and grown, not built. Cream/sand fields, sage-green and warm-clay accents. Soft humanist serif headlines (Fraunces, optical sizing) + rounded sans body (Nunito Sans) with loose line-height (1.7) and big air. Organic blob shapes behind the portrait; hand-drawn botanical line accents (inline SVG, thin 2px strokes) in margins. Generous rounding (12–24px) and blob radii — **never** hard-edged cards, sterile grids, or neon SaaS chrome. Identity comes from warmth, soft shapes, and air. The look DOES rely on soft layered shadows and tinted gradient bands (not flat) — quiet, never harsh. Sage = links/tags; clay = CTAs + accents. Avoid: centered-everything sameness, sharp borders, purple gradients, drop-cap-free walls of grey text.

**Tokens** (define as CSS variables, obey exactly):
```css
:root{
  --canvas:#f3ede0; --surface:#ece3d2;
  --ink:#33312a; --ink-muted:#5f5a4d; --ink-subtle:#8a8270;
  --sage:#6b7a5e; --sage-deep:#55624a;
  --clay:#b08364; --clay-deep:#9a6e50;
  --hairline:#ddd2bd;
  --section:112px; --block:40px; --tight:16px;       /* --section drops to 84px ≤880px */
  --r-sm:12px; --r-md:24px;
  --blob:48% 52% 60% 40% / 55% 45% 55% 45%;
  --serif:'Fraunces',Georgia,serif;
  --sans:'Nunito Sans',system-ui,-apple-system,sans-serif;
  --maxw:1180px;
}
```
- **Fonts** — one Google Fonts link: `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=Nunito+Sans:wght@400;600;700&display=swap`. Fraunces with `font-optical-sizing:auto` for all H1/H2/H3 + lede/quotes; Nunito Sans for body/eyebrow/meta.
- **Type scale (real, fluid)**: body 18px/1.7. H1 `clamp(44px,7vw,68px)`/1.06/-1.5px serif 500. Section H2 `clamp(30px,4.4vw,38px)`/1.14/-.6px. lede 23px serif italic. pull-quote `clamp(26px,3.6vw,33px)`/1.34. stat numeral `clamp(40px,5vw,52px)`/1/-1.5px. big-quote `clamp(28px,5vw,46px)`/1.22/-.8px. fallback initials `clamp(80px,16vw,128px)`. eyebrow 13px sans 700 uppercase +2px. CTA-card padding `clamp(36px,6vw,68px)`.
- Body: `background:var(--canvas); color:var(--ink); font-family:var(--sans); overflow-x:hidden`. `.wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}`.
- **Measures (load-bearing line-lengths)**: hero sub `max-width:30ch`; section head (`.sec-head`) `max-width:48ch`; story body column (`.longform`) `max-width:62ch`; timeline `max-width:760px`; cta card body `max-width:46ch`, its inner column `max-width:560px`; big-quote `max-width:18ch`. Sections are `padding:var(--section) 0`; hero is `padding:64px 0 var(--section)` (`64px`→`40px` ≤880px); content blocks below a sec-head start at `margin-top:var(--block)`.

## Signature techniques (pure CSS/SVG)

1. **Blob portrait stack** (hero identity). A `.portrait-stage` holding two absolute blob layers behind a photo frame: main blob `background:linear-gradient(150deg,var(--sage),var(--sage-deep))` with `border-radius:var(--blob)`, inset `-6% -8% -8% -6%`; a smaller clay accent blob (`.b2`, `46%×46%`, `border-radius:60% 40% 45% 55% / 50% 60% 40% 50%`, `color-mix(in srgb,var(--clay) 88%,#fff)`) at bottom-right. Both **drift**: `@keyframes blobdrift{0%,100%{border-radius:48% 52% 60% 40% / 55% 45% 55% 45%}50%{border-radius:55% 45% 42% 58% / 45% 55% 50% 50%}}`, 16s/13s, the second `animation-direction:reverse`. The photo frame: `border-radius:var(--blob); overflow:hidden; aspect-ratio:4/5; box-shadow:0 26px 60px -28px rgba(51,49,42,.55)`; the `<img.u-photo>` gets `object-fit:cover; filter:saturate(.94) contrast(1.02)`.
2. **Eyebrow with leading dash**: inline-flex (`gap:10px`, `font-size:13px` sans 700, `line-height:1.3`), `letter-spacing:2px; text-transform:uppercase; color:var(--sage-deep)`, and `::before{content:"";width:26px;height:2px;background:var(--clay);border-radius:2px}` — a small clay tick before every eyebrow.
3. **Tinted gradient bands** (not flat sections): alternate sections get a faint diagonal wash via `color-mix`, e.g. metrics `linear-gradient(160deg,color-mix(in srgb,var(--clay) 10%,var(--canvas)),var(--canvas))`, testimonials/writing use `var(--sage)` at 12%/9%. The story band is a vertical strip with a *plateau* (not a midpoint peak): `linear-gradient(180deg,transparent, color-mix(in srgb,var(--surface) 55%,transparent) 14%, color-mix(in srgb,var(--surface) 55%,transparent) 86%, transparent)`.
4. **Soft-corner ornaments**: stat/now cards are `var(--surface)` + `1px solid var(--hairline)` + `border-radius:var(--r-md)`, with an `::after` blurred-soft circle (`color-mix(...,16%)`) bleeding off a corner (`overflow:hidden`) — organic texture, not a hard card.
5. **Drop cap**: story's first paragraph `::first-letter{font-family:var(--serif);font-weight:500;float:left;font-size:62px;line-height:.78;padding:6px 12px 0 0;color:var(--sage-deep)}` (the `padding` separates the cap from the body text — without it the float crowds the lines).
6. **Pull-quote rule + big-quote glyph**: pull-quote has a clay left bar (`::before` 4px rounded). The large_type quote opens with a giant `“` (`::before{content:"\201C";position:absolute;left:-.42em;top:-.18em;font-size:1.5em;line-height:1;color:color-mix(in srgb,var(--clay) 60%,transparent)}`) hung up-and-out into the left margin.
7. **Organic timeline**: a `.timeline` with a 2px sage spine (`::before`, `color-mix(...,45%)`), each item a slightly-irregular clay node `border-radius:50% 42% 55% 45%` ringed by `box-shadow:0 0 0 5px var(--canvas)`.
8. **Botanical sprig SVG**: thin 2px `currentColor` stroke leaf-on-stem paths, `color:var(--sage); opacity:.5`, absolutely placed in hero / story / quote margins (hidden on narrow screens). Same vocabulary at small scale = the belief "leaf" icons and the fallback "leaf" mark.
9. **Pill buttons + lift hover**: `.btn` is fully rounded (`border-radius:999px`). Primary = clay fill, `#fff7ee` text, soft drop `box-shadow:0 10px 22px -12px rgba(154,110,80,.7)`; hover → `clay-deep` + `translateY(-2px)`. Ghost = transparent, `1.5px solid var(--sage)`, hover fills `color-mix(...,14%)`. Disable the lift under reduced-motion.
10. **Writing-list hover slide**: hairline-divided rows that on hover gain `padding-left:14px` + a faint surface wash (`transition:padding-left .25s, background .25s`) — a gentle nudge, not a card. Reduced-motion clamps padding back to 4px.
11. **CTA band ornaments**: the sage-deep subscribe card has two large blurred organic shapes via `::before` (clay 60%, `border-radius:var(--blob)`) and `::after` (white 12%, irregular radius) bleeding off opposite corners under `overflow:hidden`.

## Photo + toggle contract (implement exactly)

The page ships a real local portrait. The `<img class="u-photo">` (`src="portrait.webp"`, meaningful `alt`) lives in the blob frame; a designed typographic fallback `.u-fallback` (giant serif "EV" initials on a radial-gradient blob + name + a small leaf SVG) sits in the same stage. Default = photos ON.

```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
/* fallback needs grid layout: scoped restore */
body.no-photos .portrait-stage .u-fallback{display:grid !important}
```
Add the fixed toggle widget + inline script before `</body>` (verbatim):
```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
<script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
```
```css
.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
```
`sample.png` is taken with photos ON.

## Motion

One effect: **soft-grow reveal on scroll**. Elements with `.reveal` start `opacity:0; transform:translateY(18px) scale(.985)` and transition to `opacity:1; transform:none` over `.7s` (opacity `ease`, transform `cubic-bezier(.2,.7,.2,1)`) when an `IntersectionObserver` (`threshold:.14, rootMargin:'0px 0px -8% 0px'`) adds `.in`, then unobserves. Continuous: only the two hero blobs drift (16s/13s). `prefers-reduced-motion`: skip the observer (reveal everything immediately), disable blob drift and button/row hover lifts, `scroll-behavior:auto`. No other motion — no parallax, no letterbox, no sunburst.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework, no Three.js/WebGL.
2. Only external resources: the Google Fonts `<link>` and the one local image `portrait.webp` (next to the HTML). Botanical accents and the fallback mark are inline SVG.
3. Responsive 360–1440px; hero grid collapses to one column ≤880px (portrait first); semantic HTML; accessible (color contrast, visible `:focus-visible` rings, alt text, sr-only form label); honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tag every section with its `data-module`/`data-variant`. The look should feel intentionally *grown* and calm, not AI-generic.

**Output: the complete `index.html` and nothing else.**
