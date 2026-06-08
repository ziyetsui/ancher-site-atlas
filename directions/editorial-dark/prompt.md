# 生成 Prompt — Editorial Dark（暗色编辑）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**；唯一允许的外部资源是 Google Fonts 的一个 `<link>`（Newsreader + Inter）和同目录的一张本地肖像 `portrait.webp`。效果应与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Editorial Dark** direction for the person below. Output **only** the HTML file — all CSS in one `<style>`, all JS inline. No build step, no framework. The only external resources are the Google Fonts `<link>` and one local image, `portrait.webp` (next to the HTML).

## The person (brief)

- **Name**: Theodore Vance
- **Role**: Film & culture critic
- **Audience**: publications and editors who commission criticism, and readers who follow his work ("readers who stay for the second paragraph")
- **Primary goal**: get visitors to read a piece, then email him to commission
- **Thesis (the angle the whole page serves)**: *"I write about what films are really doing when we think we are just watching."* The site should feel like reading him, not browsing a résumé.
- **Tone**: literary, exact, unhurried, quietly authoritative — a midnight essay, not a press kit
- **Proof points (use these, concretely — no filler)**:
  - 15+ years writing criticism; 400+ essays & dispatches in print; bylines in *The New York Times* and *The Criterion Collection*
  - Author of *The Attention We Pay* (Graywolf Press, 2020) — a book on how movies train the way we look; a New York Times Notable Book of the Year; a second book underway
  - National Magazine Award finalist (Reviews & Criticism, 2024); Critic-in-Residence, Telluride Film Festival (2022); M.A. Cinema Studies, NYU Tisch (2009)
  - Long-form essays that read a single film against the moment it arrived in; available for commissions, festival dispatches, and essay assignments
- **Links**: Email (theo@theodorevance.com), Newsletter (*Marginalia*), Letterboxd (@theodorevance)

## Module plan (in this order)

A sticky top header precedes the modules: serif name `Theodore Vance.` (the period in amber) on the left; right-side uppercase 12px nav linking Selected Work / On Writing / Tenets / Now / Commission (nav hidden below 620px). Each module below is a `<section class="block">` separated by a top hairline, with a `.sec-head` (amber italic lowercase roman numeral `i.`–`ix.` + a 12px uppercase label). Tag each section on its opening tag with the listed `data-module`/`data-variant`.

1. `hero` → **bold_statement**: section padding `clamp(56px,11vw,116px) 0 var(--section)` (asymmetric — small top, full `--section` bottom). A two-column grid (text `minmax(0,1fr)` + portrait `clamp(220px,30vw,360px)`, `gap:clamp(32px,6vw,72px)`, `align-items:end`). Left: eyebrow `Theodore Vance / Film & Culture Critic` (the `/` in amber); oversized light-serif H1 `I write about what films are *really* doing when we think we are just watching.` (the word *really* in italic — italic only, color stays `--ink`, NOT amber); a serif-italic sub-line (`max-width:46ch`, `--ink-muted`) `Criticism, festival dispatches, and long-form essays for editors who commission and readers who stay for the second paragraph.`; a single text-link CTA `Commission a piece →`. Right: the portrait frontispiece (see Photo contract) with caption `— Theodore Vance, by the window light`. Below 760px the grid collapses to one column (`align-items:start`) and the portrait moves above the text (`order:-1;max-width:280px`).
2. `selected_work` → **featured_case**: section `i. Selected Work`. One featured essay block (`margin-bottom:56px`, capped at `--measure`) — meta `Featured Essay · The New York Times · 2024`, serif H3 link **The Long Take Is a Promise We Stopped Keeping**, then an amber-rule pull-quote (`max-width:54ch`, `--ink-muted`, `padding-left:20px`, `border-left:2px solid var(--accent)`, `margin-top:20px`): *"A cut is a mercy. To hold the shot is to ask the audience to keep looking after the point has supposedly been made — which is exactly when a film starts telling the truth."* Then a hairline-separated `ul.worklist` of 5 essays, each a link with title + right-aligned source·year:
   - What the Camera Knows Before We Do — The Criterion Collection · 2024
   - On Faces: The Close-Up as an Argument — The New York Times · 2023
   - The Festival as a Machine for Forgetting — The Criterion Collection · 2022
   - Slowness, and the Films That Refuse to Hurry — The New York Times · 2021
   - Attention, the Last Special Effect — From *The Attention We Pay* · 2020
3. `story` → **quote_led**: section `ii. On Writing`. A serif lede: *"A film tells you what it wants you to feel.* **My job is to notice what it is doing to get there** *— and to say it plainly enough that you can't un-see it."* (the middle clause amber). Then two sans body paragraphs: one on reading a film like a persuasive paragraph ("Where does it slow down? What does it cut away from? **Which face does it trust you to remember?** Fifteen years in… more interested in what it's training us to want."), one on the book ("That became a book — ***The Attention We Pay*** — … one film, one moment, held up to the light of the week it arrived in. If that's the kind of writing your pages need, I'd like to hear what you're thinking about.").
4. `beliefs` → **numbered**: section `iii. How I Read a Film`. An `ol.tenets` of 4, each with a serif zero-padded amber number (`01`…`04`) + serif H3 + sans note:
   - **The cut is the argument.** — Where a film chooses to look away tells you more than what it shows. I follow the edit before I follow the plot.
   - **Describe before you judge.** — Good or bad is the least interesting thing a sentence can say. First make the reader see the shot; the verdict can take care of itself.
   - **Take the audience seriously.** — People notice more than they can name. Criticism is the work of naming it — plainly, without flattering the writer or the reader.
   - **The film arrived in a week.** — No movie exists in a vacuum. I hold each one up to the light of the moment it was released into, and ask what it was for.
5. `metrics` → **stat_row**: section `iv. The Ledger`. Three hairline-topped stats in a 3-col grid (1-col below 620px): **15+** Years writing criticism · **400+** Essays & dispatches in print · **1** Book, and a second underway (the `+` marks in amber).
6. `credentials` → **list**: section `v. Recognition`. A `ul.deflist` of 4 — each row a `grid-template-columns:clamp(72px,12vw,128px) 1fr` (uppercase `--ink-subtle` year column + body: serif `.t` title line `clamp(18px,2.4vw,21px)` over a `15px` `--ink-muted` `.sub`); collapses to one column below 520px:
   - 2024 — National Magazine Award — Finalist, Reviews & Criticism · for *The Long Take Is a Promise We Stopped Keeping* · The New York Times
   - 2022 — Critic-in-Residence · Telluride Film Festival
   - 2020 — *The Attention We Pay* — published by Graywolf Press · A New York Times Notable Book of the Year
   - 2009 — M.A., Cinema Studies · New York University, Tisch School of the Arts
7. `speaking` → **list**: section `vi. Lecterns & Microphones`. Same `ul.deflist`, 3 rows:
   - 2025 — On Slowness — keynote · Berlinale Talents · Berlin
   - 2024 — The Close-Up as an Argument — Criterion lecture series · Metrograph · New York
   - Ongoing — The Second Paragraph — monthly podcast · Conversations with directors and editors about looking
8. `selected_quotes` → **large_type**: section `vii. What Editors Say`. Two large serif-italic amber-rule blockquotes (56px apart):
   - *"Theo files the piece you didn't know the film was asking for. He sees the cut you missed and makes you grateful he caught it."* — Maren Holloway, Culture Editor, The New York Times
   - *"The rare critic readers actually finish. He writes about attention because he has it, and he hands it to you for the length of the essay."* — David Quan, Editorial Director, The Criterion Collection
9. `currently_building` → **now_block**: section `viii. Now`. A serif lede: *"A standing note of what has my attention this season — updated when the work shifts, not when the calendar turns."* Then a `ul.nowlist` (amber uppercase label + body):
   - Writing — **A second book** on the films that taught a generation how to wait — early chapters, slow going, the good kind.
   - Watching — A retrospective of long-take cinema for a Criterion essay due in the autumn.
   - Reading — Berger's *Ways of Seeing* again, and a stack of festival programmes for next year's dispatches.
   - Open to — Commissions on a single film, a director, or a season worth a few thousand words.
10. `contact` → **cta_band**: section `ix. Commission`. A big serif line *"Have a film, a season, or a question worth a few thousand words?* **Tell me what you're after."** (second clause amber). Then a `.links` row of three text links, each with a tiny uppercase amber-on-hover label: Email theo@theodorevance.com · Newsletter Marginalia · Letterboxd @theodorevance.

A footer closes the page (top hairline): left `© 2026 Theodore Vance · Film & Culture Criticism`, right `Set in Newsreader & Inter` (the `&`/`·` marks amber).

## Design direction — Editorial Dark

**DNA**: A near-black magazine spread that reads like a midnight essay. Typography *is* the design — hierarchy comes from type scale, whitespace, and hairlines; never cards/boxes/fills. Light serif display set large with tight tracking carries the page; sans body, loose line-height (1.7). Single asymmetric column (content ≤920px in a 1180px shell, generous right margin); lists are "lines not cards" — rows separated by 1px hairlines, never bordered boxes. One warm **amber** accent only on links, the lede, numbers, and small rule-marks — never as a fill, never glowing/neon. Keep contrast high (light ink on charcoal); avoid gray-on-gray low-contrast dark mode. The portrait sits in the dark like a frontispiece (grayscaled, thin-framed). Motion: very subtle fade-up on scroll, nothing more. Avoid: centered-everything, card grids for prose, purple gradients, neon glow, drop-shadows on content (the only shadow is the photo-toggle pill).

**Tokens** (define as CSS variables, obey exactly):
- colors: `--canvas:#0c0c0e` · `--surface:#141417` · `--ink:#ededec` · `--ink-muted:#a3a29c` · `--ink-subtle:#6c6b66` · `--accent:#e0a64d` · `--accent-hover:#f0bd6a` · `--hairline:#26262b`
- fonts: `--serif:'Newsreader',Georgia,'Times New Roman',serif` · `--sans:'Inter',system-ui,-apple-system,sans-serif`. Font `<link>`:
  `https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;600&display=swap`
- type scale (use the real `clamp()` for fluid sizes):
  - body: `17px`/`1.7` sans (set on `body`)
  - eyebrow / labels: `12px` sans 600, `letter-spacing:2px`, uppercase, color `--ink-subtle`
  - hero H1: serif 500, `clamp(40px,8vw,80px)`/`1.02`, `letter-spacing:-1.8px`, `text-wrap:balance`
  - hero sub & section ledes / pull-quotes: serif italic 400, `clamp(19px,2.6vw,23px)`/`1.5`
  - story lede: serif italic, `clamp(24px,3.6vw,32px)`/`1.4`, `-0.4px`
  - featured H3: serif 500, `clamp(28px,4.6vw,38px)`/`1.14`, `-0.6px`
  - tenet H3: serif 500, `clamp(20px,2.8vw,26px)`; tenet number: serif italic 500, `clamp(22px,3vw,30px)`
  - stat figure: serif 500, `clamp(40px,6vw,60px)`/`1`, `-2px`
  - quote / large_type: serif italic, `clamp(22px,3.4vw,30px)`/`1.45`, `-0.4px`
  - contact line: serif 500, `clamp(28px,5vw,44px)`/`1.1`, `-1px`
  - fallback monogram: serif italic 500, `clamp(52px,8vw,88px)`/`.9`, `-3px`
- spacing & layout vars: `--section:128px` (section padding) · `--block:40px` · `--tight:16px` · `--rounded-sm:2px` · `--measure:62ch` (prose/list max-width) · `--pad:clamp(20px,5vw,72px)` (shell horizontal padding). Shell `.wrap{max-width:1180px;margin:0 auto;padding:0 var(--pad)}`, inner `.col{max-width:920px}`.

## Signature techniques (pure CSS)

1. **Lines, not cards.** Every list (`worklist`, `nowlist`, `tenets`, `deflist`, `stats`) is rows joined by `border-top:1px solid var(--hairline)` with `:last-child{border-bottom:...}`. No backgrounds, no rounding, no shadows. Sections themselves are separated by `section.block{border-top:1px solid var(--hairline)}`.
2. **Amber "marks" only.** Wrap small ornaments (`/`, `·`, `—`, `&`, `+`) in `<span class="mark">` colored `--accent`. The accent never fills a shape — it's punctuation, links, the lede clause, list numbers, and the stat `+`.
3. **Hover underline grows (no neon).** Featured H3 links draw an underline via a 1px linear-gradient background sized `0% 1px`→`100% 1px` on hover (`background-position:0 100%;background-repeat:no-repeat;transition:background-size .3s ease`), and the link color shifts to amber. Worklist rows nudge right on hover (`padding-left:10px`) with a 9%-amber→transparent `linear-gradient(90deg,…)` wash and the title turns `--accent-hover`.
4. **CTA choreography.** `.cta` is a text link with a faint amber bottom-border (`color-mix(in srgb,var(--accent) 45%,transparent)`); on hover the color→`--accent-hover`, border→accent-hover, `gap` opens `.5em→.75em`, and the `→` arrow `translateX(3px)`.
5. **Sticky frosted header.** `header.site{position:sticky;top:0;background:color-mix(in srgb,var(--canvas) 88%,transparent);backdrop-filter:saturate(120%) blur(8px);border-bottom:1px solid var(--hairline)}`.
6. **Numbered tenets via counters.** `ol.tenets{counter-reset:tenet}`; `li{counter-increment:tenet}`; `li::before{content:counter(tenet,decimal-leading-zero)}` rendered as the amber serif-italic number in a `auto 1fr` grid.
7. **Amber rule-quotes.** Pull-quote and `large_type` blockquotes are flush text with `border-left:2px solid var(--accent);padding-left:20–24px` — no quote glyphs, no box.
8. **Frontispiece portrait.** A thin `--surface` frame (`border:1px solid var(--hairline);padding:8px`) around an `aspect-ratio:4/5` `object-fit:cover` image with `object-position:50% 30%` (crop favors the upper face, not center), desaturated via `filter:grayscale(100%) contrast(1.04)`, with an uppercase amber-marked caption beneath (`11px`, `letter-spacing:1.5px`, uppercase, `--ink-subtle`, `margin-top:12px`).
9. **Amber selection + focus.** `::selection{background:var(--accent);color:#16130b}`; `:focus-visible{outline:2px solid var(--accent);outline-offset:3px}`.

## Photo + toggle contract

The page ships a real local portrait — implement verbatim (default photos ON; `sample.png` is taken with photos ON):

- Hero portrait is a `<figure class="portrait">` containing a `.frame` with:
  - `<img class="u-photo" src="portrait.webp" width="640" height="800" alt="Black-and-white close-up portrait of Theodore Vance, film and culture critic.">`
  - a typographic fallback `<div class="u-fallback" role="img" aria-label="Theodore Vance — monogram">` holding a serif-italic monogram `T<span class="amp">&amp;</span>V` (the `&` amber) over a small uppercase foot label `Theodore Vance · Critic`, styled as an `aspect-ratio:4/5` framed block (`display:grid;grid-template-rows:1fr auto;align-content:space-between`) so it reads as an intentional frontispiece, not a gap.
- Toggle CSS (add to `<style>`):
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  body.no-photos .portrait .u-fallback{display:grid !important} /* scoped restore for the grid fallback */
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

Subtle fade-up only. Give revealable elements `class="reveal"` styled `opacity:0;transform:translateY(14px);transition:opacity .7s ease,transform .7s ease`; add `.in` (`opacity:1;transform:none`) when they enter the viewport. Use one `IntersectionObserver` (`rootMargin:'0px 0px -8% 0px'`, `threshold:0.08`, `unobserve` after firing). `html{scroll-behavior:smooth}`. Under `prefers-reduced-motion:reduce`: force `.reveal{opacity:1;transform:none;transition:none}`, disable the CTA/worklist/H3 link transitions, set `scroll-behavior:auto`, and have the JS just add `.in` to all `.reveal` (no observer). No other animation — do not add letterbox bars, sunbursts, or any continuous motion.

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework.
2. Only external resources = the Google Fonts `<link>` and the one local image `portrait.webp` (next to the HTML). No other external assets; no Three.js/WebGL/heavy canvas.
3. Use the EXACT tokens above as CSS variables and obey them. Real content from the brief — no lorem, no "passionate about innovation".
4. Tag every section with its `data-module`/`data-variant` (the hero `<section>` too).
5. Responsive 360–1440px, mobile-first; semantic HTML; accessible (high contrast, visible focus states, alt text); honor `prefers-reduced-motion`.
6. Looks intentionally *edited* and distinct from light editorial, swiss-minimal, technical-mono, warm-personal, bold-brutalist.

**Output: the complete `index.html` and nothing else.**
