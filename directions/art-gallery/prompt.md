# 生成 Prompt — Art Gallery（美术馆）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。除两个外部资源外不引用任何其它东西：一个本地图片 `portrait.webp`（与 `index.html` 同目录），以及一个 Google Fonts `<link>`（Newsreader + Inter）。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Art Gallery** direction for the person below. Output **only** the HTML file — all CSS in one `<style>`, all JS inline. No build step, no frameworks. The page should feel like walking into a quiet white-cube gallery, not browsing a website: images are *hung* on a near-white wall and labelled with tiny serif wall plates.

## The person (brief)

- **Name**: Yuki Tanaka
- **Role**: Photographer (Tokyo & Berlin)
- **Audience**: galleries, commissioning clients, and collectors
- **Primary goal**: get visitors to view the work, then inquire (exhibitions, commissions, prints)
- **Thesis (the angle the whole page serves)**: *"I photograph the quiet seconds before something changes."* The site should feel like a hung exhibition — images first, words as wall plates.
- **Tone**: restrained, quiet, exact, unhurried — curatorial, never salesy
- **Proof points (use these, concretely — no filler)**:
  - Solo exhibitions: *Before the Tide*, Galerie Nord, Berlin (2024); *Held Breath*, Gallery Koen, Tokyo (2023)
  - Group: Quiet Geographies, Kyoto Museum of Photography (2022); New Contemporaries, The Photographers' Gallery, London (2021)
  - Collections: Tokyo Photographic Art Museum (permanent, two prints); Pinakothek der Moderne, Munich (acquisition 2024)
  - Press: *Aperture* portfolio feature, Spring 2024
  - Award: Hasselblad Foundation grant, recipient 2022
  - Limited print editions available to collectors (editions of seven for *Before the Tide*)
- **Links**: Inquire (studio@yukitanaka.photo), Instagram (@yukitanaka), Journal, Print archive, Newsletter

## Module plan (in this order)

1. `hero` → **minimal_centered** (a `<header>` — tag it too): uppercase eyebrow `Yuki Tanaka — Photographer`; serif headline `I photograph the quiet seconds <em>before something changes.</em>` (max-width ~14ch; the head block sits in a `max-width:880px` wrapper). The header itself uses `padding-top:clamp(48px, 9vh, 96px)`. Then ONE full-bleed photograph filling the viewport width (`height:min(78vh,760px)`), set off from the headline by `margin-top:clamp(56px, 9vw, 110px)`, treated as the first plate in a show. A wall-plate `<figcaption>` sits under it: `Plate I` + italic caption `Before the Tide — Echizen Coast, 2024`.
2. `selected_work` → **grid** (`Selected work`, eyebrow `2021 — 2024`): 6 works hung on the wall in a 12-col asymmetric grid (NOT cards — see techniques). Each `<figure>` has a tiny italic serif caption. In order: **Threshold** — gelatin silver print · 2024 (`ar-land`, cols 1/span 7); **Held Breath** — archival pigment · 2023 (`ar-portrait`, cols 9/span 4, align-self:end); **Still, Then** — gelatin silver print · 2023 (`ar-square`, cols 1/span 4); **Last Light, Berlin** — archival pigment · 2024 (`ar-land`, cols 6/span 7); **The Long Wait** — gelatin silver print · 2022 (`ar-land`, cols 2/span 6); **Departure** — archival pigment · 2021 (`ar-tall`, cols 9/span 4, align-self:end).
3. `story` → **quote_led** (`On the work`, eyebrow `Statement`): an italic serif lede `I am drawn to the held breath — the instant a place is still, just before it turns into something else.`, then two muted body paragraphs (made slowly on the coast / waiting for light to settle; shown in Tokyo 2023 and Berlin 2024, published in *Aperture*, limited editions for collectors). Measure ~640px.
4. `selected_quotes` → **large_type** (eyebrow heading `From a conversation` — this lone eyebrow still carries the section hairline: `border-top:1px solid var(--hairline);padding-top:22px;margin-bottom:var(--block)`): a big serif pull-quote `Tanaka doesn't photograph places. He photographs the <em>moment a place is about to forget itself.</em>` (max-width ~18ch) + cite `— Aperture, Spring 2024`.
5. `metrics` → **big_numerals** (`By the numbers`, eyebrow `2018 — 2024`): four stats, huge serif numerals over italic serif labels — **14** solo & group exhibitions · **3** monographs published · **9** museum & private collections · **120+** prints in editioned circulation.
6. `beliefs` → **numbered** (`How I work`, eyebrow `Principles`): a 3-col numbered `<ol>` — **01** *Wait for the light; never chase it.* (A frame is found, not taken. I will return to a coast for weeks until the air is right.) · **02** *Leave the room to breathe.* (Emptiness is composition. What is withheld from a picture carries as much as what is shown.) · **03** *Print slow, edition small.* (Each print is made by hand and kept rare, so a single image can still hold a wall.)
7. `experience` → **timeline** (`Selected exhibitions`, eyebrow `Solo & group`): a hairline-ruled record list, year on the left — 2024 *Before the Tide* — solo, Galerie Nord, Berlin · 2023 *Held Breath* — solo, Gallery Koen, Tokyo · 2022 Quiet Geographies — group, Kyoto Museum of Photography · 2021 New Contemporaries — group, The Photographers' Gallery, London.
8. `credentials` → **list** (`Collections & press`, eyebrow `Acknowledgements`): same record list, label on the left — Coll. Tokyo Photographic Art Museum (Permanent collection · two prints) · Coll. Pinakothek der Moderne, Munich (Acquisition, 2024) · Press *Aperture* — portfolio feature (Spring 2024) · Award Hasselblad Foundation grant (Recipient, 2022).
9. `currently_building` → **now_block** (`In the studio now`, eyebrow `Now`): italic lede `A new body of work along the Sea of Japan — the same coast, photographed across a single winter.`, a body paragraph (printing the Echizen negatives by hand, editing toward a fourth monograph due late 2025, a small London show in early conversation, *Before the Tide* prints in editions of seven), and an as-of line `As of Spring 2024 · Tokyo`. Measure ~640px.
10. `social_links` → **text_row** (`Elsewhere`, eyebrow `Follow the work`): inline link row — Instagram (instagram.com/yukitanaka, rel="me") · Journal · Print archive · Newsletter, each sans `15px` with a hover underline wipe (links wrap with `gap:14px 40px`). The contact link row matches this.
11. `contact` → **conversion** (a `<footer>` — tag it too): one warm curatorial line `For exhibitions, commissions & prints — please be in touch.`; inline links — `Inquire — studio@yukitanaka.photo` (mailto), Instagram, Newsletter; meta line `Yuki Tanaka · Tokyo & Berlin · © 2024`. The footer carries the hairline + `padding-top:var(--block)`, `margin-top:var(--section)`, and a generous `padding-bottom:clamp(80px, 14vh, 160px)`; the h2 is `clamp(26px,4.4vw,40px)`, `max-width:18ch`. The contact links reuse the same underline-wipe hover as `.elsewhere`.

## Design direction — Art Gallery

**DNA**: The page is a gallery wall. Near-white room tone, ink type, an almost reverent amount of whitespace. Full-bleed / large images do the talking; work is *hung*, never boxed or carded. Labels are tiny italic serif captions set like museum wall plates. **No color accents, no rounded corners (radius 0 everywhere), no card grids, no busy navigation.** Hierarchy comes from scale, silence, and the rhythm of image against void — sections separated by `border-top:1px solid var(--hairline)` hairlines, not boxes. Motion: a single slow, long fade-in on scroll (slower than editorial). (Note: there are NO drop-shadows on content — the only shadow in the whole page is on the fixed atlas photo toggle chip.)

**Tokens** (define as CSS variables, obey exactly):
- colors: `--canvas:#fbfbf9; --surface:#f4f3ef; --ink:#1a1a18; --ink-muted:#6b6a64; --ink-subtle:#9b998f; --accent:#1a1a18; --accent-hover:#000000; --hairline:#e6e4dd;`
- fonts: `--serif:'Newsreader', Georgia, serif;` (400 + italic, optical sizing — display + captions) and `--sans:'Inter', system-ui, -apple-system, sans-serif;` (400/500 — only the tiny uppercase eyebrows + small body). Google Fonts link (verbatim):
  `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&family=Inter:wght@400;500&display=swap`
- spacing / layout tokens: `--section:160px; --block:56px; --tight:16px; --gutter:clamp(20px, 6vw, 96px); --measure:640px;` Body `font-size:16px; line-height:1.7`. `section{padding-top:var(--section)}`. Use `.wrap{padding-inline:var(--gutter)}` for the page gutter.
- type scale (real `clamp()` — use these, not fixed px):
  - hero title: serif 400, `clamp(34px, 6vw, 64px)/1.06`, `letter-spacing:-1.4px`, `em` italic
  - section h2 (`.sec-head h2`): serif 400, `clamp(24px, 3.4vw, 32px)/1.18`, `-0.6px`
  - lede (statement / now): serif italic, `clamp(19px, 2.4vw, 21px)/1.5`, `-0.1px`
  - pull-quote: serif 400, `clamp(28px, 5.4vw, 52px)/1.14`, `-1.2px`
  - big numeral (`.ledger .num`): serif 400, `clamp(44px, 6vw, 68px)/1`, `-2px`
  - belief title (`.ti`): serif italic, `clamp(18px, 2.2vw, 20px)/1.4`
  - record title: serif `19px/1.3`; record venue: serif italic `13px`; the whole `.record` list is capped at `max-width:780px` (year/label column `flex:0 0 5ch`)
  - belief body paragraph: sans `15px`, `max-width:34ch` (under the italic title); big-numeral label: serif italic `14px/1.4`, `--ink-subtle`
  - body paragraphs in the statement & now blocks: `--ink-muted`, `max-width:56ch` (sits inside the `--measure` 640px block)
  - contact h2: serif 400, `clamp(26px, 4.4vw, 40px)/1.18`, `-0.8px`
  - eyebrow: sans 500, `11px/1.3`, `letter-spacing:2.4px`, uppercase, `--ink-muted`
  - caption: serif italic, `13px/1.4`, `+0.1px`, `--ink-subtle`

## Signature techniques (pure CSS/SVG)

1. **"Lines, not cards" gallery grid** — the selected-work plates hang on a 12-col grid with huge asymmetric gutters and ZERO borders/shadows on the images:
   ```css
   .gallery{display:grid;grid-template-columns:1fr;gap:clamp(64px,8vw,120px) clamp(28px,4vw,56px)}
   @media(min-width:720px){
     .gallery{grid-template-columns:repeat(12,1fr)}
     .plate-a{grid-column:1/span 7}  .plate-b{grid-column:9/span 4;align-self:end}
     .plate-c{grid-column:1/span 4}  .plate-d{grid-column:6/span 7}
     .plate-e{grid-column:2/span 6}  .plate-f{grid-column:9/span 4;align-self:end}
   }
   ```
   The `align-self:end` on b/f is what makes plates "hang" at different heights — the asymmetry is the composition.
2. **Aspect-ratio plate shapes** — images carry their print proportion, not a uniform thumbnail crop: `.ar-portrait{aspect-ratio:4/5} .ar-land{aspect-ratio:3/2} .ar-square{aspect-ratio:1/1} .ar-tall{aspect-ratio:5/7}`, with `object-fit:cover` and `background:var(--surface)`.
3. **Hairline section heads** — every section title is a flex baseline row with a top rule, no box: `.sec-head{display:flex;align-items:baseline;justify-content:space-between;gap:24px;border-top:1px solid var(--hairline);padding-top:22px;margin-bottom:var(--block)}` (serif h2 left, uppercase eyebrow right). Records, stats, and tenets each repeat the same `border-top:1px solid var(--hairline);padding-top:20px` motif as their separator.
4. **Museum wall plate caption** — under the hero image a `figcaption.plate` is a baseline flex row: a sans uppercase `Plate I` num (`11px`, `+2px`) beside an italic serif caption, set in `--ink-subtle`. This is the whole label system — keep it tiny.
5. **Underline-wipe link hover** — elsewhere/contact links draw a 1px underline left→right on hover/focus via a pseudo-element that animates `right` from `100%` to `0`:
   ```css
   .elsewhere a{position:relative;padding-bottom:3px}
   .elsewhere a::after{content:"";position:absolute;left:0;right:100%;bottom:0;height:1px;background:var(--ink);transition:right .4s cubic-bezier(.16,.7,.2,1)}
   .elsewhere a:hover::after,.elsewhere a:focus-visible::after{right:0}
   ```
6. **Big serif numerals** — `.ledger` is a 1→2→4 col grid (`@640px` 2, `@960px` 4); each stat is `clamp(44px,6vw,68px)` serif numeral (`letter-spacing:-2px`) over an italic serif label. Numbers carry the weight; no icons.
7. **Restraint = the look** — no gradients, no blend modes, no SVG filters, no decorative pseudo-ornaments. The identity is the *absence* of UI: keep `border-radius:0` everywhere, never add a shadow to content, never wrap an image in a frame.

## Photo + toggle contract

The page ships a real portrait. Reference the local file `portrait.webp` (sits next to `index.html`); it is reused as the hero plate and all six gallery shots (each with its own meaningful `alt`).

- Every photo `<img>` gets class `u-photo` + alt. Each gets a sibling `u-fallback` that looks intentional with no photo:
  - hero fallback `.hero-fallback` — a typographic plate on `--surface` with a `1px solid var(--hairline)` frame the size of a hung print: large italic serif mark `The quiet seconds before something changes.`, a centered `48px×1px` rule, and a `Plate I` sub-label.
  - each work fallback `.work-fallback` — a `--surface` box with `aspect-ratio:var(--ar,4/5)` and a `1px solid var(--hairline)` frame, the work's title set as a tiny italic serif `wf-mark` in the bottom-left.
- Default = photos ON. Toggle CSS (verbatim):
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  /* scoped restores so the no-photos plates still read as gallery */
  body.no-photos .hero-fallback{display:flex !important}
  body.no-photos .work-fallback{display:flex !important}
  ```
- Toggle styling (verbatim):
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

One effect only — a slow, long fade-up on scroll. Elements carry `.reveal`; an `IntersectionObserver` adds `.in` once:
```css
.reveal{opacity:0;transform:translateY(18px);transition:opacity 1.4s cubic-bezier(.16,.7,.2,1),transform 1.4s cubic-bezier(.16,.7,.2,1);will-change:opacity,transform}
.reveal.in{opacity:1;transform:none}
```
Observer options: `{rootMargin:'0px 0px -8% 0px', threshold:0.08}`, `io.unobserve` after revealing. The hero head + hero figure ship with `.reveal.in` already applied (visible on load). Under `prefers-reduced-motion:reduce`, force `.reveal{opacity:1!important;transform:none!important;transition:none}` and add all `.in` immediately (also disable smooth scroll). No other animation — no parallax, no continuous motion.

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework.
2. Only external resources allowed: the one Google Fonts `<link>` and the one local image `portrait.webp`. **No** other remote assets, no Three.js/WebGL/heavy canvas.
3. Use the exact tokens above as CSS variables and obey them. Real content from the brief — no lorem, no "passionate about innovation".
4. Tag every section on its opening tag with `data-module` / `data-variant` per the module plan (including the `<header>` hero and `<footer>` contact).
5. Implement the photo slot + toggle contract (default photos ON). The no-photos state must still read as a deliberate gallery wall (typographic plates).
6. Responsive 360–1440px, mobile-first; semantic HTML; accessible (contrast, visible focus, alt text); honor `prefers-reduced-motion`.
7. Tasteful motion only — the single slow fade-in above. Looks curated by a senior designer, clearly a *gallery*, never a SaaS page.

**Output: the complete `index.html` and nothing else.**
