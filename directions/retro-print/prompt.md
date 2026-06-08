# 生成 Prompt — Retro Print（复古印刷）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，唯一外部资源是一个 Google Fonts `<link>`（Anton + Spectral）和同目录的一张本地图 `portrait.webp`，效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Retro Print** direction — a 1970s printed-poster aesthetic — for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks. Output **only** the HTML file.

## The person (brief)

- **Name**: Margot Hale
- **Role**: Illustrator (eyebrow: "Margot Hale — Illustrator · Est. 2015")
- **Audience**: art directors & publishers
- **Primary goal**: get visitors to commission illustration or buy prints — book a project or browse the shop
- **Thesis (the angle the whole page serves)**: *"Hand-made pictures for a screen-tired world."* The site should feel like a piece of print you'd pin to a studio wall, not a portfolio template.
- **Tone**: warm, hand-made, confident, a little nostalgic — never corporate
- **Proof points (use concretely — no filler)**:
  - ~10–11 years drawing for editorial & publishing (since 2015)
  - 58 book covers for Penguin, Faber, Granta
  - 1.4k prints pulled across 19 limited editions; 12 sold-out runs
  - Works in gouache, ink, and screen-print
- **Lede**: "Editorial illustration & screen-prints for art directors and publishers — drawn by hand in gouache, ink, and print."
- **Links**: Email (hello@margothale.com), Print shop, Instagram (@margot.draws)

## Module plan (in this order)

A fixed **masthead** sits above everything: ink-rule bottom border, name "Margot Hale" set in the display face left, primary nav right (Work / Studio / Services / Now / Contact). Section heads share a pattern: a small rust serial number (01–09) beside an uppercase display `<h2>`, divided from the body by a 2px ink rule.

1. `hero` → **split_portrait**: left col = eyebrow ("Margot Hale — Illustrator · Est. 2015") + a stacked oversized condensed headline across three lines where only the **first word of lines 2 and 3** is colour-shifted, not the whole line — line 1 "Hand-made" (ink) / line 2 "**pictures**" rust + " for a" ink / line 3 "**screen-tired**" teal + " world." ink (markup: `<span class="ln1">Hand-made</span><br><span class="ln2">pictures</span> for a<br><span class="ln3">screen-tired</span> world.`, where `.ln2{color:rust}` `.ln3{color:teal}` and surrounding text stays ink) — + an italic serif lede ("Editorial illustration & screen-prints for art directors and publishers — drawn by hand in gouache, ink, and print.") + two CTAs: solid "Commission work →" and ghost "Shop prints". Right col = a large framed retro illustration (`portrait.webp`) in an ink `.frame` with a `10px 10px 0` mustard hard-offset shadow, inner hairline, and a caption row ("Gouache & Ink" / "Studio Print"). On mobile the illustration stacks under the headline.
2. `selected_work` → **grid** (head 01 "Selected Work"): a responsive 1→2→3-up grid of flat earth-tone panels with shared 1.5px ink rules (use negative margin so adjacent borders collapse, not gaps). 6 cells: "The Long Field" — Book Cover · Penguin · Gouache · 2024 (mustard tint); a framed illustration cell re-using `portrait.webp` (caption "Screen-print" / "Ed. 50") — this `.illo` cell is a `--brown` panel with **zero padding**, and its inner frame drops the hard-offset shadow and outer border (`box-shadow:none;border:0`) with the inner hairline recoloured to `--canvas` and the image `object-fit:cover`; its photos-off `.mini` fallback ("MH" mustard initials over italic "Edition of 50 · Sold out") also sits on `--brown`; "Quiet Hours" — Editorial · Series of 6 · Ink · 2023 (teal tint); "Marigold" — Print Shop · Screen-print · Ed. 75 · Sold out; "Salt & Static" — Book Cover · Penguin · Mixed media · 2022; "Almanac '25" — Commission · 12 plates · Gouache · 2025 (mustard tint). Each cell: small rust tag, display title, italic serif meta. Hover lightens the panel to canvas. No drop-shadow cards — ink rules only.
3. `story` → **magazine_longform** (head 02 "From the Studio"): a body that goes 1→2 columns on desktop, led by a full-width italic serif pull-quote with a rust left-rule: *"I want a picture to feel like it was made by a hand, not a feed."* First paragraph carries a rust display drop-cap (starts "Ten years in, I still start every job the same way…"). A halftone dot divider splits the run; two more serif paragraphs follow (the "lean into the marks" para with an emphasized *is*, and the "if you're commissioning" para).
4. `metrics` → **big_numerals** (head 03 "By the Numbers"): a 1→2→4-up grid of ink-ruled cells, each a huge display numeral in a rotating colour (rust/teal/brown/mustard), an uppercase label, and an italic serif note: **11** "Years at the board" / "Drawing for hire since 2015."; **58** "Book covers" / "Penguin, Faber, Granta & more."; **1.4k** "Prints pulled" / "Across 19 limited editions."; **12** "Sold-out runs" / "Most under 80 copies each."
5. `credentials` → **pills** (head 04 "Awards & Stockists"): a wrapping row of bordered display pills, some tinted (rust/teal/mustard): "D&AD Wood Pencil '23", "AOI Illustration Award", "3×3 Annual Merit", "RCA · MA Illustration", "V&A Shop Editions", "Magma Books, London", "Printed Matter, NYC", "It's Nice That · Feature".
6. `selected_quotes` → **large_type** (head 05 "Said of the Work"): one oversized display blockquote with teal quote marks and a rust-emphasized phrase: "Margot draws like the *ink remembers* being a hand." cited "— Eleanor Voss · Art Director, Penguin Press".
7. `services` → **list** (head 06 "What I Take On"): an ink-ruled 3-row list, each row = lettered serial (a./b./c.), display name + serif description, and a teal price on the right. "Book Covers" — "Concept to final art for jackets & paperbacks. Sketch rounds, hand-painted finals, print-ready files." — **From £2,400**; "Editorial Illustration" — "Single images or short series for magazines and supplements. Fast turnarounds welcome." — **From £650**; "Screen-print Editions" — "Commissioned limited runs, hand-pulled on cotton stock, signed and numbered." — **By project**.
8. `beliefs` → **numbered** (head 07 "How I Work"): a 1→2-up grid of ink-ruled cells, each a big display number (~38px) + uppercase head + serif body; numbers colour rust / teal / teal / rust (items 1 & 4 rust, items 2 & 3 teal), the number sitting in a left column beside the text (`.creed-item{display:flex;gap:18px}`): 1 "Paper before pixels" / "Every job starts on the board. Digital is for assembly, never for the first idea."; 2 "Draw badly first" / "The freedom to make ugly sketches is where the good ones come from."; 3 "Keep the marks" / "Pooled ink, off-register halftone — the hand should stay visible in the print."; 4 "Small runs, made well" / "I'd rather pull fifty good prints than a thousand careless ones."
9. `currently_building` → **now_block** (head 08 "What I'm On Now"): a single bordered surface panel with a `10px 10px 0` mustard hard-offset shadow; a rust header with a trailing ink rule ("Spring 2026 · From the studio") and a 1→2-col list of teal-bulleted items with emphasized fragments: "Painting a **12-plate almanac** for a 2026 release."; "Two **Penguin covers** in sketch rounds."; "Cutting screens for a **new print edition** (out April)."; "Reading **Penguin by Design** for the hundredth time."
10. `contact` → **cta_band** (eyebrow "09 — Get in touch"): an ink-ruled footer block. Display `<h2>` "Let's make something *printed.*" with a manual `<br>` after "make" ("Let's make / something printed.") and "printed." rust-emphasized (the `<em>` is set `font-style:normal`, colour rust), a serif sub ("Commissions are open for late 2026. Tell me about the project, or browse the prints currently in the shop."), three display contact links underlined in rust (mailto hello@margothale.com / "Print Shop →" / "Instagram @margot.draws"), and a colophon ("Margot Hale · Illustration & Prints · Set in Anton & Spectral · Printed warm.").

## Design direction — Retro Print

**DNA**: 1970s print / letterpress poster. Warm cream paper stock with a faint SVG paper-grain and halftone dot textures. Headlines in a high-contrast **condensed display** face (Anton), UPPERCASE, stacked tight like a vintage book jacket; multi-line heroes colour each line differently. Body in a **serif** (Spectral) with loose line-height and a bookish feel; ledes are italic. Muted, desaturated earth palette — mustard, rust, teal, brown — never neon. Thin **ink rules** divide the page like a print grid (panels share collapsed borders, not card gaps). The signature depth move is a **hard-offset shadow** (`10px 10px 0` mustard/teal, zero blur) on framed/now panels — a printed-poster offset, not a soft drop-shadow. **No** glassmorphism, **no** soft blurred drop-shadows, **no** clean SaaS grid, **no** purple gradients, **no** neon saturation. The framed illustration is the hero; type holds the layout.

**Tokens** (define as CSS variables, obey exactly):
- colors: `--canvas:#f3e9d2`, `--surface:#ece0c2`, `--ink:#2a1f16`, `--ink-muted:#5c4a35`, `--ink-subtle:#8a7456`, `--mustard:#d99a2b`, `--rust:#b5532a`, `--teal:#2f7d77`, `--brown:#6b4226`, `--accent:#b5532a`, `--accent-hover:#8f3f1f`, `--hairline:#cbb88e`
- fonts: `--display:'Anton',Impact,sans-serif`, `--serif:'Spectral',Georgia,serif`
- Google Fonts `<link>` (the only stylesheet link): `https://fonts.googleapis.com/css2?family=Anton&family=Spectral:ital,wght@0,400;0,500;1,400&display=swap`
- base: body `font-family:var(--serif)`, `font-size:18px`, `line-height:1.7`, `color:var(--ink)` on `--canvas`
- type scale (use the real `clamp()`s):
  - hero h1: `clamp(52px,11vw,104px)` / `line-height:0.92` Anton uppercase
  - hero lede: `clamp(19px,2.4vw,22px)` Spectral italic
  - section h2: `clamp(30px,5vw,44px)` / `line-height:1` Anton uppercase
  - pull-quote: `clamp(22px,3.4vw,32px)` Spectral italic
  - metric numeral: `clamp(54px,9vw,84px)` Anton, `line-height:0.85`
  - big quote: `clamp(34px,6.5vw,72px)` Anton uppercase, `line-height:0.95`
  - service name: `clamp(22px,3vw,30px)` Anton uppercase
  - contact h2: `clamp(34px,7vw,68px)` Anton uppercase
  - fallback poster mono: `clamp(90px,20vw,200px)` Anton, `line-height:0.8`
  - eyebrow: 13px Anton uppercase `letter-spacing:3px` rust
- spacing tokens: `--section:112px` (every `section`'s padding-bottom; the hero adds `padding-top:64px`, other sections have none — the masthead 2px rule and each section head supply the top edge), `--block:40px` (section-head `margin-bottom` + contact-block `padding-top`), `--tight:16px`; `.wrap{max-width:1180px;margin:0 auto;padding:0 28px}`. Section heads share a `2px solid --ink` bottom rule with `padding-bottom:14px`; the hero grid gap is `44px` (mobile) → `56px` (≥900px).
- corners hard/printed (0–2px radius only)

## Signature techniques (pure CSS/SVG)

1. **Paper grain** (on `body`): a low-opacity SVG `feTurbulence` data-URI tiled over the cream canvas —
   ```css
   background-color:var(--canvas);
   background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
   ```
2. **Hard-offset poster shadow** (the depth signature): zero-blur coloured offset on framed/now panels —
   `.frame{background:var(--surface);border:2px solid var(--ink);padding:14px;box-shadow:10px 10px 0 var(--mustard)}`. When photos are off it flips to teal: `body.no-photos .frame{box-shadow:10px 10px 0 var(--teal);background:transparent}`, and the hero frame additionally recolours its borders so the empty poster reads as a printed plate: `body.no-photos .hero .frame{border-color:var(--rust)}` and `body.no-photos .hero .frame::after{border-color:var(--mustard)}`.
3. **Inner ink hairline** via pseudo-element: `.frame::after{content:"";position:absolute;inset:7px;border:1px solid var(--ink);pointer-events:none}` — a double-rule "matted print" border inside the frame.
4. **Halftone divider**: a dot-grid band, not an image —
   `.halftone{height:22px;background-image:radial-gradient(var(--ink) 1.4px,transparent 1.5px);background-size:10px 10px;opacity:.5;column-span:all}`.
5. **"Lines not cards" grid**: panels (work / metrics / beliefs) use `border:1.5px solid var(--ink);margin:-0.75px` so adjacent borders overlap into a single shared ink rule — a letterpress grid, never gapped cards.
6. **Magazine longform**: `.story-body{columns:1}` → `columns:2` at ≥860px, `column-gap:48px`; paragraphs `break-inside:avoid`. Pull-quote and halftone span all columns (`column-span:all`); rust drop-cap via `.dropcap::first-letter{font-family:var(--display);float:left;font-size:74px;line-height:0.7;color:var(--rust)}`.
7. **Two-register buttons**: `.btn` = Anton uppercase, 2px ink border, hard corners; `.btn-solid` rust→`--accent-hover` on hover; `.btn-ghost` transparent→ink fill on hover; both `transform:translateY(-2px)` on hover (disabled under reduced-motion).
8. **Colour-cycled accents**: hero headline first-words (rust/teal), metric numerals (rust/teal/brown/mustard across the four cells via `:nth-child`), belief numbers (rust/teal/teal/rust), and the big quote's two quote marks (teal) — never a single accent.
9. **Typographic fallback poster** (`.u-fallback.poster`): rust panel, `aspect-ratio:4/5`, 3-row grid (top label / giant "MH" mono `clamp(90px,20vw,200px)` / italic thesis line) — an intentional print poster when the illustration is off.

## Photo + toggle contract

The page ships a real local portrait (`portrait.webp`, a hand-drawn pop-art illustration) used framed in the hero and re-used in the work grid. Both `<img>`s get class `u-photo` and a meaningful `alt`. Each photo slot has a `u-fallback` typographic companion (the hero's `.poster` panel; the work cell's `.mini` "MH · Edition of 50 · Sold out" panel) shown only when photos are off. Default = photos ON; `sample.png` is taken with photos on.

CSS (verbatim):
```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .u-fallback.poster{display:grid !important}
body.no-photos .u-fallback.mini{display:flex !important}

.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
```
Before `</body>` (verbatim):
```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
<script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
```

## Motion

The only motion is a **subtle fade-up on scroll**. Reveal targets carry `.reveal`:
```css
.reveal{opacity:0;transform:translateY(16px);transition:opacity .6s ease, transform .6s ease}
.reveal.in{opacity:1;transform:none}
@media(prefers-reduced-motion:reduce){.reveal{opacity:1 !important;transform:none !important;transition:none}}
```
An `IntersectionObserver` at `threshold:0.12` adds `.in` once per element then unobserves. If `IntersectionObserver` is missing **or** `prefers-reduced-motion:reduce`, add `.in` to all immediately. Paper grain and halftone are static. Button hovers lift `-2px` (also disabled under reduced-motion). `html{scroll-behavior:smooth}` (auto under reduced-motion). No letterbox bars, no sunburst, no continuous animation.

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework.
2. Only external resources allowed: the Google Fonts `<link>` and the one local image `portrait.webp`. No Three.js/WebGL/heavy canvas, no other remote assets.
3. Use the EXACT tokens above as CSS variables; obey them. Default = photos ON.
4. Tag every section on its opening tag with `data-module` / `data-variant` exactly as listed (hero, selected_work, story, metrics, credentials, selected_quotes, services, beliefs, currently_building, contact).
5. Responsive 360–1440px, mobile-first; semantic HTML; accessible (contrast, visible focus via `outline:3px solid var(--teal)`, alt text); honor `prefers-reduced-motion`.
6. Real content from the brief above — no lorem, no "passionate about innovation". Looks like a designed 1970s print piece, not AI-generic.

**Output: the complete `index.html` and nothing else.**
