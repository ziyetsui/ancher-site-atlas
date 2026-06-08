# 生成 Prompt — Risograph（油印拼色）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**：所有 CSS 在一个 `<style>` 标签内、所有 JS 内联；唯一允许的外部资源是一个 Google Fonts `<link>` 和同目录的一张本地图片 `portrait.webp`。效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer with a strong print-design eye. Generate a single self-contained `index.html` in the **Risograph** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks. The only external resources allowed are one Google Fonts `<link>` and one local image (`portrait.webp`) sitting next to the HTML. All riso effects must come from pure CSS + inline SVG.

## The person (brief)

- **Name**: Saoirse Quinn
- **Role**: Illustrator & indie publisher (mono eyebrow: "Illustrator · Indie Publisher")
- **Audience**: publishers, brands, and shops looking for distinctive printed work
- **Primary goal**: get visitors to commission an illustration or stock her prints
- **Thesis (the angle the whole page serves)**: *"Ink on paper, slightly off-register — on purpose."* The site should feel like a freshly pulled riso print, not a clean digital portfolio.
- **Tone**: warm, hand-made, confident, a little scrappy — proud of the imperfection
- **Proof points (use concretely — no filler)**:
  - 10 years illustrating; runs her own two-colour riso studio; pulls every print by hand
  - Prints stocked in 30+ independent shops across Europe
  - Client work for music & arts festivals (posters, programmes, merch)
  - Self-published zines and limited-run print editions
  - 240 editions pulled to date · 31 stockists · 4 riso drums (pink, blue, yellow, green) · ~5k sheets/year
- **Links**: Email (hello@saoirsequinn.studio), Shop / Stockists (Prints & editions), Instagram (@saoirse.prints)
- **Studio signature line / colophon**: "Printed off-register, on purpose · Studio QN · Fluoro pink + Process blue + Yellow"

## Module plan (in this order)

Tag each section's opening tag with `data-module` / `data-variant` exactly as below. Use the verbatim copy.

1. **Top bar** (not a tagged module): brand `SAOIRSE QUINN` with a small registration-mark glyph; mono nav `Work · Studio · Services · Press · Commission` (hidden ≤640px).

2. `hero` / `bold_statement` — two-column grid (≥900px: `1.05fr .95fr`). Left: mono eyebrow "Illustrator · Indie Publisher"; huge misregistered headline on three lines **"INK ON" / "PAPER," / "OFF-REG"**; thesis line *"Ink on paper, slightly off-register — on purpose."* (the words "slightly off-register" highlighted on a yellow marker); sub-line "Posters, zines and limited print editions for publishers, brands and shops that want something pulled by hand."; one CTA **"Commission a print →"** (ink block with offset pink shadow). Right: a riso print panel (`aspect-ratio:4/5`, `max-width:460px`) — `portrait.webp` with a blue frame (`transform:translate(10px,12px)`) + yellow frame (`transform:translate(-10px,-10px)`) offset behind it (both `mix-blend-mode:multiply`), a pink screen wash on top, and a mono tag **"FIG. 01 — HALFTONE EDITION"** (positioned `left:0;bottom:-14px`, on a paper chip).

3. `selected_work` / `grid` — heading **"01 / Selected Prints"**. 6 print cards (1/2/3 cols), each a printed swatch (halftone dot layers + a big screen-blend letter glyph A–F) over a body. Cards in order:
   - **Night Market** — Poster · A2 — 2024
   - **Salt & Static** — Zine · 28pp — 2024
   - **Festival of Tides** — Programme — 2023
   - **Wild Hares** — Edition / 50 — 2023
   - **Low Light Hours** — Poster · A2 — 2022
   - **Paper Birds** — Zine · 16pp — 2022

4. `story` / `quote_led` — heading **"02 / The Studio"**. Two columns (≥860px: `1.2fr .8fr`). Bold display line (`max-width:18ch`): "I run a **two-colour riso studio** and pull every print by hand." — only the inner phrase "two-colour riso studio" is wrapped in `<b>` and shifts to `--pink`; the rest stays `--ink`. Paragraph: "Ten years in, the imperfection is the point — a pink that doesn't quite meet the blue, a halftone that breathes, edges that show the press did the work. I draw it, separate the colours, and run the drum until it sings. The misregister is mine; nobody else's will land the same." Right: stat stack (coloured left-borders) — **10 yrs** / Illustrating & printing · **30+ shops** / Stockists across Europe · **Festivals** / Posters · programmes · merch.

5. `metrics` / `big_numerals` — heading **"03 / By The Numbers"**. A 4-cell bordered grid of big numerals (pink/blue/overprint/ink): **240** Editions pulled to date · **31** Stockists across Europe · **4** Riso drums in rotation — pink, blue, yellow, green · **~5k** Sheets run through the press each year. (240 is misregistered.)

6. `services` / `list` — heading **"04 / What I Print"**. A list of 4 rows (mono code · title · description · yellow price tag):
   - **S—01 · Posters & Prints** — "Original two- or three-colour riso posters for gigs, festivals and shops. Drawn, separated and pulled by hand in editions of 25–100." — **from €280**
   - **S—02 · Zines & Books** — "Short-run riso zines and artist books — from 16-page staple-bound to perfect-bound editions. Layout, separations and bindery included." — **from €640**
   - **S—03 · Commissioned Illustration** — "Covers, programmes and identity art for publishers and brands who want the texture of real overprint, not a flat vector fake." — **day rate**
   - **S—04 · Studio Workshops** — "Half-day intro to riso: colour separation, registration and pulling your own two-colour print on the drum." — **€95 / seat**

7. `beliefs` / `numbered` — heading **"05 / House Rules"**. Numbered list (2 cols ≥760px), big coloured numerals:
   - **01 Off-register on purpose** — "The ghost edge where pink misses blue is the signature, not a defect. I lean into it."
   - **02 Pull it by hand** — "Every sheet goes through the drum myself. No outsourcing the part that makes it mine."
   - **03 Spot colour, never CMYK** — "Fluoro pink and process blue do what four-colour can't. I design within the inks I own."
   - **04 Paper does half the work** — "Warm off-white stock, visible grain. The substrate is part of the picture, not a backdrop."

8. `testimonials` / `quote_led` — heading **"06 / Kind Words"**. One bordered quote card (`max-width:880px`, `--paper-deep` ground) with a huge pink quote-mark ornament (`::before` content `"\201C"`, Archivo 900, `font-size:120px`, `left:14px;top:-6px`, **`mix-blend-mode:multiply`**). Blockquote `max-width:26ch`; the phrase **misregister gives them a soul** is wrapped in `<b>` and shifts to `--blue`. Blockquote: "Saoirse's prints sell out before the ink is dry. The **misregister gives them a soul** a clean digital poster will never have." Cite: **Marek Doležal** — Buyer, Smør & Stationery, Copenhagen.

9. `logos_press` / `mentioned_in` — heading **"07 / Seen In"**. Press chips (each with an offset pink/blue/yellow shadow): It's Nice That · Eye on Design · Pressing Matters · Creative Review · Riso Quarterly · Zine Fest Dublin.

10. `credentials` / `pills` — heading **"08 / Background"**. Rounded pills: BA Illustration *· NCAD* · Risotto Studio *residency* · Hato Press *print fellow* · D&AD New Blood *'19* · London Centre for Book Arts *alum* · Member *· Print Collective IE*.

11. `contact` / `cta_band` — dark ink band. Colophon eyebrow "— Colophon · Get in touch —"; heading **"Let's PRINT something."** (PRINT misregistered, white on ink with pink/blue ghosts); line "Commission a piece, stock the prints, or just say hello to the studio."; link list (label · detail · arrow): Email → hello@saoirsequinn.studio · Shop / Stockists → Prints & editions · Instagram → @saoirse.prints. Footnote: "Printed off-register, on purpose · Studio QN · Fluoro pink + Process blue + Yellow".

## Design direction — Risograph

**DNA**: A real riso print — 2–3 spot colours printed one pass at a time, never landing perfectly on top of each other. Fluoro pink, process blue and yellow on warm off-white stock. Every coloured block/headline is nudged a few pixels out of register so a coloured ghost shows at the edges. Halftone dots and paper grain wash over the whole page; overlapping inks `multiply` into muddy greens/purples like true overprint. Bold uppercase Archivo headlines with tight tracking; Space Mono labels stamped like registration marks. Right angles, essentially no rounded corners (pills are the lone exception). **Depth comes from misregistration + overprint + hard-offset solid-colour shadows (no soft/blurred drop-shadows).** Section dividers are 2px ink rules ("lines, not cards"). Motion: blocks "settle" slightly into register on scroll. Avoid: clean flat vector, glossy gradients, a single solid brand colour, pixel-perfect alignment, blurred shadows.

**Tokens** (define as CSS variables, obey exactly):

```css
:root{
  --paper:#f6f1e3; --paper-deep:#efe7d2;
  --ink:#1b1a17;   --ink-soft:#4a463c;
  --pink:#ff48b0;  --blue:#0078bf; --yellow:#ffd400;
  --overprint:#7a2a8c; --hairline:#d8cfb6;
  --section:104px; --block:36px; --tight:14px; --maxw:1180px;
}
```

- **Fonts** (one Google Fonts link):
  `<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">`
  — `'Archivo', system-ui, sans-serif` for display + body; `'Space Mono', ui-monospace, monospace` for labels / mono.
- **Type scale (use the real fluid values):**
  - body 18px / line-height 1.6
  - lede 22px / 500 / 1.4 / max-width 34ch; paragraphs max-width 56ch
  - label: Space Mono 12px / 700 / +2px / uppercase / `--ink-soft`
  - hero headline: `font-size:clamp(54px,11vw,92px)` Archivo 800 uppercase, `letter-spacing:-2.5px`, line-height .92
  - hero thesis: `clamp(20px,3.4vw,28px)` / 500 / line-height 1.32 / `max-width:24ch` (forces the three-line wrap); hero sub-line `.serves` `max-width:40ch` / `--ink-soft`
  - section h2: `clamp(30px,6vw,48px)` / 800 uppercase / `letter-spacing:-1.4px`
  - story big-line: `clamp(26px,4.6vw,40px)` / 800; metrics numerals: `clamp(46px,8vw,72px)` / 900 / `-3px`
  - services h3: `clamp(22px,3.4vw,30px)` / 800; beliefs numerals: `clamp(34px,5vw,52px)` / 900
  - testimonial blockquote: `clamp(22px,3.6vw,32px)` / 700; contact h2: `clamp(40px,9vw,84px)` / 900 / `-2px`
  - fallback type panel: `clamp(46px,12vw,84px)` / 900
- **Secondary tokens**: `--section` 104px (vertical section padding), `--block` 36px, `--tight` 14px, `--maxw` 1180px (wrapper, `padding:0 24px`). Hard-offset shadow recipe (reused on yellow chips/highlights): `box-shadow:3px 3px 0 rgba(255,72,176,.5)`.

## Signature techniques (pure CSS/SVG)

1. **Misregistered headline (`.miss`)** — duplicate the text via `::before`/`::after` reading `content:attr(data-t)`, behind the real ink layer with `z-index:-1`:
   ```css
   .miss{position:relative;display:inline-block;font-weight:800;text-transform:uppercase;letter-spacing:-2.5px;line-height:.92;color:var(--ink)}
   .miss::before,.miss::after{content:attr(data-t);position:absolute;left:0;top:0;z-index:-1;pointer-events:none}
   .miss::before{color:var(--pink);transform:translate(-4px,3px);mix-blend-mode:multiply}
   .miss::after{color:var(--blue);transform:translate(4px,-3px);mix-blend-mode:multiply}
   ```
   Markup: `<span class="miss" data-t="INK ON">INK ON</span>`.

2. **Paper grain + halftone overlays** — two `position:fixed;inset:0;pointer-events:none;z-index:9000` layers, both `mix-blend-mode:multiply`:
   ```css
   .grain{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");opacity:.07}
   .halftone{background-image:radial-gradient(var(--ink) 0.7px,transparent 0.8px);background-size:4px 4px;opacity:.10}
   ```

3. **Overprint** — anywhere spot colours stack (the print panel's blue/yellow offset frames, swatch dot layers, photo tint), use `mix-blend-mode:multiply` so overlaps darken toward `--overprint`. The print-panel photo: `filter:grayscale(1) contrast(1.15) brightness(1.05);mix-blend-mode:multiply`, with a `background:var(--pink);mix-blend-mode:screen;opacity:.34` wash on top.

4. **Hard-offset shadow (no blur)** — the riso "second pass" look. CTA: an `::after` solid pink rectangle `transform:translate(5px,5px);mix-blend-mode:multiply` behind the ink button. Yellow highlights/price tags: `box-shadow:3px 3px 0 rgba(255,72,176,.5)`. Press chips: `::after{background:var(--blue);transform:translate(4px,4px);mix-blend-mode:multiply}` cycling pink/blue/yellow via `:nth-child`.

5. **Halftone swatch (work cards)** — two stacked `radial-gradient(currentColor 2px,transparent 2.4px)` dot layers in different spot colours, offset from each other (`translate(-3px,0)` / `translate(4px,3px)` + larger `background-size`), `mix-blend-mode:multiply`, with a big `mix-blend-mode:screen` letter glyph `transform:translate(2px,-2px)` over a solid spot-colour ground.

6. **Registration-mark glyph** — a crosshair + circle built from pseudo-elements: vertical + horizontal 2px ink bars (`::before`/`::after`) plus an inner `span{inset:3px;border:2px solid var(--pink);border-radius:50%}`. Used in the brand and the photo fallback.

7. **Lines, not cards** — sections separated by `border-top:2px solid var(--ink)`; metrics / services / press use hard 2px ink internal borders rather than soft cards. Stat stack uses thick coloured left-borders (`border-left:6px solid var(--blue)`, cycling pink/yellow).

8. **Button hover choreography** — CTA nudges `translate(-1px,-1px)` while its shadow `::after` jumps to `translate(7px,7px)` (`transition:transform .18s ease`). Cards lift `translate(-2px,-2px)` (`.16s`).

## Photo + toggle contract

The page ships a real local portrait. The print-panel `<img src="portrait.webp">` lives inside a `.u-photo` wrapper with a descriptive `alt` ("A halftone risograph illustration of a masked figure, printed in spot colours and slightly out of register."). Provide a typographic `.u-fallback` (a misregistered 2-COLOUR / RISO / PRESS spot-colour panel with a registration mark) for the photos-off state.

Default = photos ON. Verbatim contract CSS:

```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .print-panel .u-fallback{display:flex !important}  /* scoped flex restore */

.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
```

Verbatim toggle markup + script before `</body>` (default pressed = On):

```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
<script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
```

## Motion

One IntersectionObserver, no libraries. Elements with `.reveal` start `opacity:0;transform:translateY(16px)` and transition to `opacity:1;transform:none` over `.6s ease` when they intersect. Observer params: `threshold:0.15, rootMargin:'0px 0px -8% 0px'`, `unobserve` after firing once. If `IntersectionObserver` is missing, add `.in` to all reveals immediately.

**Ink-settle**: `.settle` blocks start with their `.miss` ghosts pushed further out (`::before translate(-9px,7px)`, `::after translate(9px,-7px)`) and ease back to the resting `±(4px,3px)` registration when `.in` is added — `transition:transform .7s cubic-bezier(.2,.8,.2,1)`. (Used on the hero and the metrics grid.)

`@media (prefers-reduced-motion: reduce)`: reveals render final (`opacity:1;transform:none;transition:none`), ghosts snap to their resting offset with no transition, and `scroll-behavior:auto`.

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework, no Three.js/WebGL.
2. Only external resources = the Google Fonts `<link>` and the local `portrait.webp`. All riso effects via pure CSS + inline SVG.
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible (contrast, visible focus via `outline:3px solid var(--pink)`, alt text); honour `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tag every section with its `data-module` / `data-variant`. Looks like a hand-pulled print, not AI-generic.

**Output: the complete `index.html` and nothing else.**
