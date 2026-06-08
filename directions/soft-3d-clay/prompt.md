# 生成 Prompt — Soft 3D Clay（软陶 3D · 黏土质感）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**（唯一的外部资源是 Google Fonts `<link>` 和同目录下的本地图片 `portrait.webp`），效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer with a strong point of view. Generate a complete, single-file personal website (`index.html`) for the person below, in the **Soft 3D Clay** design direction. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks. The ONLY external resources allowed are the Google Fonts `<link>` and one local image `portrait.webp` sitting next to the HTML.

## The person (brief)

- **Name**: Milo Park
- **Role**: Toy designer & 3D artist
- **Audience**: streetwear brands and toy collectors
- **Primary goal**: get visitors to see his drops and reach out for collabs
- **Thesis (the angle the whole page serves)**: *"I make squishy little characters that make people smile."* The page itself should feel like a vinyl-toy shelf you want to poke.
- **Tone**: warm, playful, confident, a little cheeky — never corporate
- **Proof points (use these, concretely — no filler)**:
  - 3 vinyl-toy drops, all sold out (100% sold out)
  - 5+ label collabs
  - 80k followers across socials
  - Designer Toy Awards finalist; solo booth at Pop Art Toy Show, Tokyo
- **Page title / meta**: title "Milo Park — Toy designer & 3D artist"; meta description "Milo Park makes squishy little vinyl characters that make people smile. Drops, collabs and 80k followers."
- **Brand**: "Milo Park" with a small rounded clay blob mark beside it.
- **Links**: Email (hi@milopark.studio), Instagram, TikTok, Shop drops.
- **Footer**: "Made with soft clay & good vibes — Milo Park Studio © 2026"

## Module plan (in this order)

The page is `.wrap{max-width:1120px}` centered. Build EVERY section below, in order, and tag each section's opening tag with `data-module` / `data-variant` exactly as shown. Use the real copy verbatim.

1. **Nav (inside `<header>`)** — brand "Milo Park" (clay blob + name) on the left; one pink pill link "Let's collab →" → `#contact`.

2. `hero` / `bold_statement` — eyebrow "Toy designer & 3D artist"; H1 "I make squishy little *characters* that make people smile." (the word **characters** is an `<em>` in accent pink); lede "Vinyl toys, blind boxes and soft 3D worlds — designed for the brands and collectors who get the joke."; two CTA pills: "See the drops →" (pink) → `#work`, "Say hi" (plain) → `#contact`. On the right, a floating soft-3D **display case**: a clay-card frame with an inset window holding `portrait.webp`, 3 small floating clay dots, and a butter pill tag "★ shelf no.1" hanging off the bottom.

3. `selected_work` / `grid` — sec-head: eyebrow "Selected work", H2 "Three drops. All sold out.", sub "Small-batch vinyl figures, made to be poked, hugged and lined up on a shelf." Then a 3-col grid of drop cards (pink / sky / mint), each with: a "DROP 0n" label, a clay toy blob, a name, an edition line, a description, and a dark "● SOLD OUT" status pill:
   - DROP 01 · **Squish Bun** · Edition of 300 · "The original bun-shaped buddy that started it all — cheeks you can almost press."
   - DROP 02 · **Tide Pool Pals** · Edition of 500 · "A seaside set of tiny tide-pool critters in glossy pastel resin. Gone in a day."
   - DROP 03 · **Cloud Cadets** · Edition of 400 · "Blind-box marshmallow astronauts — chase figure included, naturally."

4. `metrics` / `pills` — centered sec-head: eyebrow "By the numbers", H2 "A little studio with a big shelf." One clay tray holding 4 colored stat pills: **3** vinyl drops · **100%** sold out · **5+** label collabs · **80k** followers.

5. `beliefs` / `numbered` — sec-head: eyebrow "How I work", H2 "Three rules I squish everything through.", sub "A tiny studio runs on taste, not headcount — so the principles have to do the heavy lifting." 3-col grid, each card a colored numbered clay chip (1 pink / 2 sky / 3 butter) + title + body:
   - 1 · **Squishy first** — "If a character doesn't make you want to poke it, it's not finished. Personality beats polish, every time."
   - 2 · **Small batches, real love** — "Editions stay under 500 on purpose. I'd rather sell out a great drop than warehouse a mediocre one."
   - 3 · **Make the joke land** — "Every figure carries one small gag. Collectors get it in a glance — that shared wink is the whole point."

6. `currently_building` / `now_block` — sec-head: eyebrow "Now", H2 "What's on the workbench.", sub "Updated whenever the resin sets. Last poke: May 2026." One clay card with a list; each row = a mint status chip + bold title + description:
   - **Sculpting** · "Drop 04 — Garden Goblins" — "A blind-box set of mossy little plant-pals. Master sculpts done; resin tests this month."
   - **Collab** · "Capsule with a streetwear label" — "Two co-designed vinyl keychains landing this autumn. Sworn to secrecy on the brand (for now)."
   - **Learning** · "Soft-touch silicone casting" — "Chasing that squeezable, actually-squishy finish at home so the next drop feels like the renders."

7. `testimonials` / `cards` — centered sec-head: eyebrow "Kind words", H2 "People who lined up at the drop." 3-col grid of quote cards (pink / sky / mint), each with a big open-quote mark (`&ldquo;`, 42px Fredoka 700, `line-height:.6`, **tinted to match the card**: pink → accent pink, sky → `var(--accent-2)`, mint → `#6fdcb4`), the quote, a rounded clay avatar with initials, name + role:
   - "Milo's figures sold out of our shop in under an hour. The cheeks alone are worth the wait." — **Jules Cho** (JC), Buyer, Kawaii Corner
   - "Working with Milo on our capsule was pure joy — fast, funny, and the renders matched the toy exactly." — **Remy Dalca** (RD), Founder, Driftwear
   - "I have all three drops on my desk. Squish Bun is the first thing visitors pick up — every single time." — **Priya Tan** (PT), Collector & super-fan

8. `tools` / `grid` — sec-head: eyebrow "The studio kit", H2 "What clay gets made of.", sub "From first doodle to a figure on your shelf — these are the tools doing the work." 4-col grid (2-col on mobile) of 8 small clay tiles, each a rounded blob icon + name + small label:
   Blender (sculpting & render) · ZBrush (fine detailing) · Procreate (concept doodles) · Resin & silicone (small-batch casting) · Airbrush (pastel finishing) · Figma (packaging design) · Shopify (drop store) · 3D resin printer (masters & tests).

9. `credentials` / `pills` — sec-head: eyebrow "A few badges", H2 "Shows, features & a little plastic glory." A wrap of clay pills, each with a butter year-chip + text:
   - 2026 · Designer Toy Awards — finalist
   - 2025 · Pop Art Toy Show, Tokyo — solo booth
   - 2025 · Featured in It's Nice That
   - 2024 · Vinyl Fair London — guest artist
   - 2023 · BFA Industrial Design, RISD

10. `faq` / `two_column` — centered sec-head: eyebrow "Good questions", H2 "Before you slide into the inbox." 2-col grid of clay cards; each question heading is prefixed with an accent-pink "Q":
    - "Do you take custom character commissions?" — "Yes — one-off vinyl figures and mascot designs for brands and collectors. Lead time is usually 8–12 weeks from sketch to shelf."
    - "Will the sold-out drops ever restock?" — "Almost never — that's the deal with small editions. Occasionally a tiny artist-proof batch surfaces in the newsletter, so subscribe if you're chasing one."
    - "What's a realistic budget for a collab?" — "Capsule collabs typically start around the cost of a 500-piece run plus design. Tell me the idea and I'll send a friendly, no-pressure quote."
    - "Do you ship worldwide?" — "I do. Everything ships padded in recycled, fully recyclable packaging — your buddy arrives un-dented and ready to be poked."

11. `contact` / `cta_band` — one centered clay card (`border-radius:var(--r-lg); padding:clamp(34px,5vw,58px); text-align:center`) on a pink-to-lilac radial gradient `radial-gradient(120% 100% at 50% 0%, #fff3fa 0%, #ffe1f0 45%, #e6d6ff 100%)`: eyebrow "Let's make something", H2 "Got a brand, a shelf, or a silly idea?" (`clamp(30px,5vw,44px)` / 700), line "I love streetwear collabs and one-off character commissions. Slide into the inbox." (19px, `max-width:30ch`, centered), then a row of pills: "✉ hi@milopark.studio" (pink, `mailto:`), "Instagram" (sky), "TikTok" (butter), "Shop drops" (mint).

12. **Footer** — centered, subtle: "Made with soft clay & good vibes — Milo Park Studio © 2026".

## Design direction — Soft 3D Clay

**DNA**: A claymation playground rendered entirely in CSS. Every surface looks pressed from soft pastel clay — fat rounded corners (16–40px; buttons/tags fully pill), doughy extruded shapes, and a layered shadow that fakes real depth without a line of WebGL. The signature is a **multi-layer `box-shadow`** combining an OUTSET drop shadow (blurred, muted purple — lifts the piece off a milky pastel floor) **plus** INSET highlight (white, top) + INSET soft-shadow (bottom) so the surface looks squeezable. Hard-offset / soft-light depth is the whole point — do NOT flatten it to a single flat material-design shadow. Pastel gradients on EVERY fill (lighter at top = fake top-light); flat color is banned. Bubblegum pink is the lead accent, with sky blue / butter yellow / mint as supporting surfaces. Chunky rounded type like molded plastic. Motion = squish-and-settle: on hover, cards press down (translateY + tiny scale-down + tightened shadow) then bounce back; plus a very slow gentle float + bob on the hero scene. Honor `prefers-reduced-motion`. **Avoid**: sharp corners, flat material-design shadows, WebGL/Three.js, dark neon mode, hard glossy glass, photoreal gloss/glass.

**Tokens** (define as CSS variables, obey exactly):
- colors: `--canvas:#f4ecff`, `--canvas-2:#ffe9f3`, `--surface:#fef6ff`, `--surface-sky:#dcefff`, `--surface-mint:#dcfbef`, `--surface-butter:#fff4d6`, `--ink:#4a3b63`, `--ink-muted:#8a7aa8`, `--ink-subtle:#b3a6cc`, `--accent:#ff7eb3`, `--accent-2:#7cc7ff`, `--accent-3:#ffd166`, `--highlight:#ffffff`, `--shadow-soft:#cdb8ea`, `--shadow-deep:#a98fd6`
- fonts (Google Fonts): `Fredoka` (display / headings / pills / eyebrows / numerals, 500/600/700), `Baloo 2` (body / lede, 400/500/600/700). Body font `'Baloo 2', system-ui, sans-serif`, `font-size:17px; line-height:1.6; color:var(--ink)`; headings `'Fredoka', system-ui, sans-serif; letter-spacing:-.6px`. Font `<link>`:
  `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Baloo+2:wght@400;500;600;700&display=swap`
- type scale (use the real fluid clamps): hero H1 `clamp(40px,7.4vw,72px)` / 700 / line-height .98 / letter-spacing -1.5px (mono fallback caps to 40px under 420px); section H2 `clamp(28px,4.6vw,40px)` / 600; contact H2 `clamp(30px,5vw,44px)` / 700; lede 21px Baloo 2 500; body 17px; pill 15px Fredoka 600; eyebrow 13px Fredoka 600 uppercase +1.5px (in accent pink); stat number 34px Fredoka 700; mono fallback letter `clamp(56px,12vw,104px)`.
- radii: `--r-sm:16px; --r-md:28px; --r-lg:40px; --r-pill:999px`
- spacing: `--sec:96px` (section padding top/bottom; → 72px under 860px), `--block:32px`, `--tight:14px`; `.wrap` max-width 1120px, padding 0 22px.
- key layout values (use exactly): `header` padding `54px 0 0`; hero grid `grid-template-columns:1.05fr .95fr; gap:46px; align-items:center; padding:46px 0 var(--sec)` (collapses to 1 col, centered, `gap:40px` under 860px); hero lede `max-width:34ch`, `margin:22px 0 30px`; `.sec-head` `margin-bottom:42px; max-width:40ch` with H2 `line-height:1.06`; sec-head sub `p` 18px; `footer` padding `40px 0 64px`. Grid gaps: drops 26px, beliefs/quotes 24px, tools/metrics-tray 18px, faq 24px.
- **shadow tokens** (the core of the look — define and reuse):
  ```css
  --clay: 0 18px 40px -16px var(--shadow-deep),
          inset 0 2px 3px var(--highlight),
          inset 0 -9px 16px -6px var(--shadow-soft);
  --clay-press: 0 8px 18px -12px var(--shadow-deep),
          inset 0 2px 4px var(--highlight),
          inset 0 -5px 12px -4px var(--shadow-soft);
  --clay-inset: inset 0 6px 14px -4px var(--shadow-soft),
          inset 0 -3px 6px var(--highlight),
          0 1px 0 var(--highlight);
  ```
- page background (fixed): two soft radial glows + a diagonal pastel wash:
  ```css
  background:
    radial-gradient(1200px 700px at 12% -10%, var(--canvas-2), transparent 60%),
    radial-gradient(1000px 800px at 100% 0%, #e7f3ff, transparent 55%),
    linear-gradient(165deg, var(--canvas) 0%, #efe6ff 55%, #ffeaf4 100%);
  background-attachment:fixed;
  ```

## Signature techniques (pure CSS/SVG)

1. **Clay shadow (the identity)** — apply `box-shadow:var(--clay)` to every raised surface (cards, pills, tray, toy blobs). The triple-layer (outset purple drop + inset white top highlight + inset bottom soft-shadow) is what makes it read as pressed clay. `--clay-inset` carves a recessed "window"; `--clay-press` is the pressed-down state.

2. **Gradient fills, never flat** — every surface uses a top-light gradient, e.g. cards `linear-gradient(180deg,var(--surface),#f3e8ff)`; colored cards `linear-gradient(180deg,#fff,#ffe2ee)` (pink) / `…#dcefff` (sky) / `…#dcfbef` (mint); pills `linear-gradient(180deg,#fff,#f1e6ff)`; stat pills `linear-gradient(180deg,#ffd2e6,#ffb3d6)` etc.

3. **Squish-and-settle hover** — pills & cards: `transition:transform .18s cubic-bezier(.34,1.56,.64,1), box-shadow .18s ease;` and on hover `transform:translateY(2px) scale(.985); box-shadow:var(--clay-press)` (drops use translateY(4px)). Reads as pressing a soft button that bounces.

4. **Doughy blob shapes** — toy/icon blobs use lopsided radii like `border-radius:26px` or `18px 20px 17px 19px`, plus a tiny specular highlight via a layered radial: `radial-gradient(circle at 34% 26%,#fff 0 12%,transparent 14%), linear-gradient(155deg,#ffb3d6,var(--accent))`. The brand blob, drop toys, tool icons and avatars all share this trick (different gradients per color).

5. **The display-case window** — hero scene = a clay frame (`border-radius:var(--r-lg); padding:18px; background:linear-gradient(180deg,#fff7ff,#efdcff); box-shadow:var(--clay)`) wrapping an inset window (`border-radius:30px; overflow:hidden; aspect-ratio:1/1; box-shadow:var(--clay-inset)`) with a soft inner radial floor `radial-gradient(120% 90% at 50% 0%, #fff7e6 0%, #ffe0ef 42%, #d9ecff 100%)`. The portrait fills it with `width:100%; height:100%; object-fit:cover; border-radius:30px` (the img repeats the window's radius so its corners stay rounded).

6. **Floating clay dots** — 3 absolutely-positioned circles (`box-shadow:var(--clay)`, color gradients) bob independently around the case; a butter "★ shelf no.1" pill hangs centered off the bottom edge.

7. **Dark status pill on light** — only the "SOLD OUT" drop status pill inverts: `linear-gradient(180deg,#5e4b7e,#4a3b63); color:#fff; box-shadow:var(--clay-press)` with a glowing butter dot (`background:var(--accent-3); box-shadow:0 0 0 3px rgba(255,209,102,.3)`), for contrast against pastel cards. The Now-block status chips are NOT dark — they're mint pills (`linear-gradient(180deg,#bff2dd,#7fe0bb); color:#0f513a; box-shadow:var(--clay-press)`).

8. **Lines-free, cards-everywhere grid** — no rules or borders anywhere; structure comes purely from spaced rounded clay surfaces on the pastel floor. Drops/beliefs/testimonials are 3-col; tools 4-col; FAQ 2-col; all collapse to 1–2 col under 860px.

9. **FAQ "Q" ornament** — each FAQ heading gets a pseudo-element badge: `h3::before{content:"Q"; font-family:'Fredoka'; font-weight:700; color:var(--accent)}`.

## Photo + toggle contract (must follow exactly — the page ships a real portrait)

- The portrait `portrait.webp` (local image) goes inside the hero display-case window, class `u-photo`, `object-fit:cover`, with a meaningful `alt` (e.g. "Milo Park's signature squishy seaside kitten toy character, posed in a soft pastel display case").
- Provide a `u-fallback` typographic fallback that looks intentional with NO photo: a molded clay **monogram** centered on a soft inner floor (`radial-gradient(120% 100% at 50% 0%, #ffe7f3, #cfeaff 100%)`, filling the window with `border-radius:30px; place-items:center`). The "M" sits on a **60%-width** rounded clay tile (`aspect-ratio:1/1; border-radius:32px; display:grid; place-items:center; background:linear-gradient(160deg,#ffb3d6,var(--accent) 60%,#ff5fa0); box-shadow:var(--clay), 0 0 0 10px rgba(255,255,255,.55)` — note the extra white halo ring), with the letter `font-family:'Fredoka'; font-weight:700; font-size:clamp(56px,12vw,104px); color:#fff; letter-spacing:-2px; text-shadow:0 3px 0 rgba(143,40,90,.35)`. Default = photos ON.
- Verbatim base rules:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  ```
- Because the fallback is a centered grid, add the scoped restore:
  ```css
  .u-fallback.case-fallback{display:grid;place-items:center}  /* but kept hidden by .u-fallback above until... */
  body.no-photos .scene-window .case-fallback{display:grid !important}
  ```
- Add the fixed toggle widget + script verbatim before `</body>`:
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```
  with CSS:
  ```css
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
- `sample.png` is taken with photos ON.

## Motion

- **Reveal on scroll**: tag content blocks (sec-heads, cards, the metrics tray, now-card, creds row) with class `reveal` → start `opacity:0; transform:translateY(22px)`. An `IntersectionObserver` (`threshold:.14`) adds class `in` on enter (unobserve after), which sets `opacity:1; transform:none` via `transition:opacity .6s ease, transform .6s cubic-bezier(.34,1.4,.64,1)`. No `IntersectionObserver` → reveal everything immediately.
- **Gentle float**: the hero scene `animation:float 7s ease-in-out infinite` (translateY 0 → -14px → 0); the 3 dots `bob` (translateY 0 → -9px) at staggered 4.4–6s durations/delays.
- **Hover squish**: pills & cards press + tighten shadow as in technique 3.
- `prefers-reduced-motion:reduce` → disable scroll-behavior; `.scene` and `.dot` animations off; `.reveal` shown with no transition; pill/drop transitions off.

## Hard contract

1. Single self-contained `index.html`; inline CSS in one `<style>`, inline JS; no build, no npm, no JS framework, no Three.js/WebGL. Clay depth must be pure CSS (gradients, box-shadow, transforms).
2. The ONLY external resources are the Google Fonts `<link>` and the local `portrait.webp` — no other remote images, no CDN scripts.
3. Responsive 360–1440px, mobile-first; semantic HTML (`header`/`main`/`section`/`article`/`figure`/`footer`); accessible: text/background contrast, visible focus (`:focus-visible` 3px sky outline), `alt` text, `aria-label`/`aria-labelledby` on sections; honor `prefers-reduced-motion`.
4. Tag every section's opening tag with the exact `data-module` / `data-variant` listed in the Module plan.
5. Real content from the brief above — no lorem, no "passionate about innovation".
6. Commit hard to the clay aesthetic (multi-layer soft shadows, pastel gradients, fully rounded everything, squish-and-settle motion); clearly distinct from flat / glass / dark directions.

**Output: the complete `index.html` and nothing else.**
