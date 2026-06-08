# 生成 Prompt — Memphis Postmodern（孟菲斯 · 后现代）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。唯一的外部资源是一个 Google Fonts `<link>`（Archivo + Poppins）和一张本地肖像图 `portrait.webp`（一幅装裱的奇趣插画）。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Memphis Postmodern** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks. Output **only** the HTML file.

## The person (brief)

- **Name**: Bruno Salas
- **Role**: Graphic designer & design teacher (studio: "Studio Salas")
- **Audience**: design students and brands who want work people actually remember
- **Primary goal**: get visitors to take his course or hire him for a project
- **Thesis (the whole page is living proof of it)**: *"I make design that refuses to be boring — and teach you to do the same."* The page must be loud, playful, exact.
- **Tone**: energetic, opinionated, generous, a little cheeky — a teacher who hypes you up
- **Proof points (use concretely — no filler)**:
  - 12 years working as a graphic designer (studio + freelance, identity to packaging)
  - Taught 8,000+ students (workshops, online course & studio mentorship)
  - Work featured in design annuals (identity, poster & editorial)
  - Clients across branding, packaging, and culture
- **Contact**: email `hola@brunosalas.studio`; the course ("The Loud Design Course" / "Design That Refuses to Be Boring", $390 cohort-based); Instagram `@brunosalas`
- **Page title / meta**: title "Bruno Salas — Design That Refuses to Be Boring"; description "Bruno Salas — graphic designer & design teacher. I make design that refuses to be boring, and teach you to do the same."

## Module plan (in this order)

Tag every section's opening tag with `data-module` / `data-variant` exactly as below. Use this real copy verbatim — do not invent filler.

1. `nav` / **split** — sticky top bar, `border-bottom` fat outline. Left: brand chip "Studio Salas" (yellow pill, outlined, `rotate(-2deg)`). Right: outlined pill links — Work, Services (cyan), Rules (`#beliefs`), Students, FAQ, Hire me (magenta).
2. `hero` / **bold_statement** — `<header>`. Eyebrow chip "Bruno Salas · Graphic Designer + Teacher". Oversized all-caps headline: "I Make Design That **Refuses** To Be **Boring**." with a hard `<br>` right after "Refuses" (line 1 = "I Make Design That Refuses", line 2 = "To Be Boring.") — "Refuses" rendered magenta with black text-stroke, "Boring" on a yellow outlined chip tilted `rotate(-2deg)`. Sub: "And I teach you to do the same. Identity, posters, packaging, and the confidence to break a grid on purpose — for design students and brands who want work people actually remember." Two CTAs: "Take the course →" (magenta), "Hire me" (white). Right column: the local portrait (the quirky illustration) in a tilted outlined frame with caption "Yes, a cow in a condo." Scatter Memphis confetti around the hero (see Signature techniques).
3. `selected_work` / **grid** — tag "Selected Work" (cyan), H2 "Loud Work, On Purpose.", lead "Twelve years of identities, posters, and packaging — some of it in the design annuals, all of it allergic to dull." Six sticker tiles, each numbered 01–06, a different primary-color block, tilted, with "See it →": 01 **Mango Riot** · Brand Identity · 2024; 02 **Festival Tipográfico** · Poster Series · 2023; 03 **Soda Pop Co.** · Packaging · 2023; 04 **Editorial — NOISE** · Magazine Design · 2022; 05 **Casa Cultura** · Wayfinding + Identity · 2022; 06 **Cow Condo** · Illustration · 2021.
4. `metrics` / **big_numerals** — full-bleed ink (black) band, fat top+bottom outline. Tag "By The Numbers" (yellow), H2 "Receipts, Not Adjectives." (canvas color). Three giant-numeral color blocks: **12** Years Designing — "Studio + freelance, identity to packaging."; **8,000+** Students Taught (the trailing "+" is wrapped in a `<span style="font-size:.5em">` so it reads as a half-size superscript, not full-height) — "Workshops, online course & studio mentorship."; **∞** Work In Design Annuals — "Identity, poster & editorial features."
5. `testimonials` / **cards** — tag "Word On The Street" (magenta), H2 "Students Don't Whisper About It." Three quote cards (white, tilted, with a yellow circular “ mark badge top-left and an initials avatar): Daniela Rojas (Junior Designer · course grad, av "DR") — "Bruno made me unlearn every safe instinct I had. My portfolio went from quiet to unforgettable in eight weeks."; Marco Téllez (Founder · Soda Pop Co., av "MT") — "We hired Bruno to rebrand a tired product. He gave us something kids actually screenshot. Sales people noticed."; Priya Kapoor (Art Director · workshop alum, av "PK") — "Best money I spent on my career. He teaches taste, not templates — and somehow makes the hard stuff fun."
6. `services` / **cards** — tag "What You Can Hire" (cyan), H2 "Three Ways To Get Loud.", lead "Pick the one that fits — every option ships work that refuses to blend in." Three numbered color cards with a price pill: 01 **Brand Identity** — "Logo, type system, color, and a sticker-sheet of assets your team can actually wield. Built to be remembered, not approved-and-forgotten." (From $6k · 4 weeks); 02 **Posters & Packaging** — "One-off campaigns, festival posters, and packaging that earns a screenshot on the shelf. Big type, bigger nerve." (From $2.5k · 2 weeks); 03 **The Loud Design Course** — "Eight weeks of unlearning safe instincts. Live crits, real briefs, and a portfolio that stops scrolls by week six." ($390 · cohort-based).
7. `beliefs` / **numbered** — tag "House Rules" (yellow), H2 "Four Things I Refuse To Negotiate." Four numbered cards (big outlined circle bnum, tilted alternately odd `rotate(-1deg)` / even `rotate(1deg)`; the bnum circles cycle color by index — cyan, magenta (white text), yellow, cyan): 1 **Boring Is The Only Failure** — "A polite design nobody remembers did its job for no one. Risk a little; earn a reaction."; 2 **Break The Grid On Purpose** — "You can only break the rules well once you can keep them. We learn the grid, then we tilt it."; 3 **Taste Over Templates** — "I teach judgement, not presets. The goal is work you could not have downloaded."; 4 **Make The Hard Stuff Fun** — "Color theory, kerning, hierarchy — all of it lands faster when the room is laughing."
8. `selected_quotes` / **large_type** — one big yellow outlined block with corner ornament shapes, holding a giant all-caps blockquote with a magenta stroked “ mark: "“If it does not make someone _feel_ something, it is just decoration with a deadline." — "feel" is an `<em>` reset to `font-style:normal` (NOT italic) carrying `text-decoration:underline;text-decoration-thickness:4px`. Cite chip: "— Bruno's first studio crit, every single time".
9. `currently_building` / **now_block** — tag "Now" (magenta), H2 "What's On The Table This Month." Three "now" cards each with a status tag pill: **Building** — "Cohort #07 of the course" / "Rewriting the typography week from scratch. New briefs, louder crits."; **Designing** — "Festival Tipográfico 2026" / "A poster series and full wayfinding kit for the city's type festival."; **Reading** — "Sottsass, again" / "Re-reading the Memphis Group catalogues. It never stops being fuel."
10. `tools` / **stack_list** — tag "The Kit" (cyan), H2 "What I Actually Reach For.", lead "No magic tools — just sharp ones, used with intent." A pill cloud (tilted, color-cycled by `:nth-child(3n)`): Illustrator, InDesign, Figma, Procreate, Risograph, Glyphs, Letterpress, After Effects, A very loud Pantone book.
11. `credentials` / **list** — tag "Receipts" (yellow), H2 "Awards, Talks & Other Loud Noises." A `<ul>` with year pill + a title, separated by a fat outlined bottom border. Only the **leading institution/award name** is wrapped in `<strong>` (uppercase Archivo, its own block line); the rest of the line is regular Poppins, and **each entry ends with a period**: **2024** *Type Directors Club* Award — Festival Tipográfico poster series.; **2023** *Latin American Design Annual* — Soda Pop Co. packaging featured.; **2022** *OFFF Festival* — main-stage talk: "Break The Grid On Purpose."; **2018** *BFA, Graphic Design* — Universidad de las Artes, with honors.
12. `faq` / **two_column** — tag "Before You Ask" (magenta), H2 "Questions People Always Ask." Four cards (tilted alternately, magenta circular "?" badge): "Do I need to be 'good at art' for the course?" — "No. You need taste and nerve — both are trainable. We sharpen the eye first, the hand follows."; "Will this style work for a serious brand?" — "Loud is not the same as unserious. The boldness is dialed to fit the brief — sometimes a whisper, sometimes a shout."; "What's your turnaround for client work?" — "Posters in about two weeks, full identities in four. I take a few projects at a time so each one gets the noise it deserves."; "Is the course live or self-paced?" — "Live and cohort-based. Real crits, real deadlines, a real room. Replays exist, but the energy is in showing up."
13. `social_links` / **text_row** — tag "Find Me Being Loud" (cyan), H2 "Around The Internet." A row of outlined pill links (color-cycled by `:nth-child(4n)`): Instagram ↗, Behance ↗, Dribbble ↗, Are.na ↗, YouTube ↗.
14. `contact` / **cta_band** — one big cyan outlined card with corner ornament shapes, centered. H2 "Let's Make Something Loud.", lead "Join the course, or bring me your brand. Either way, we are not making anything boring." Buttons: "Take the course →" (magenta), "hola@brunosalas.studio" (yellow, `mailto:`), "Instagram @brunosalas" (white). Footer below: "© 2026 Bruno Salas · Design That Refuses to Be Boring".

## Design direction — Memphis Postmodern

**DNA**: 80s Memphis / postmodern. Cream paper scattered with primary-color confetti (cyan / magenta / yellow) + pure black. Everything is a sticker: fat black outlines + **hard offset shadows (`box-shadow` with zero blur — the look depends on these, do NOT use soft realistic drop-shadows)**. Layout is gleefully asymmetric — blocks tilt (`rotate(-2deg)`, `rotate(1.5deg)`…), overlap, and break the grid on purpose; cards are laid out as colored blocks, not flat lists. Geometric confetti — squiggles, dot grids, zigzags, circles, triangles, quarter-arcs — all pure CSS/SVG. Bold geometric sans (Archivo, all-caps) for headlines; giant numerals; Poppins for body. Motion: pop-in + tiny wiggle on scroll. Avoid: muted corporate palette, soft realistic shadows, centered symmetric body layout, thin hairlines, purple gradients.

**Tokens** (define as CSS variables, obey exactly):

```css
:root{
  --canvas:#fbf7ee; --surface:#ffffff; --ink:#15130f; --ink-muted:#4a463d;
  --cyan:#2ad4d4; --magenta:#ff4fa3; --yellow:#ffd23f;
  --accent:#ff4fa3; --accent-hover:#e03a8c; --outline:#15130f;
  --shadow:6px 6px 0 var(--outline);
  --shadow-sm:4px 4px 0 var(--outline);
  --shadow-lg:10px 10px 0 var(--outline);
  --border:3px solid var(--outline);
  --section:104px; --block:36px; --tight:14px;
  --r-sm:4px; --r-md:14px; --r-pill:999px;
  --maxw:1200px;
}
```

- **Fonts (Google Fonts `<link>`, exact)**: `https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Poppins:wght@400;500;600;700&display=swap`. Headlines/eyebrows/numerals = `'Archivo', system-ui, sans-serif` uppercase; body = `'Poppins', system-ui, sans-serif`. Body base 18px / line-height 1.6.
- **Fluid type scale (use these exact `clamp()` expressions)**:
  - Hero `h1`: `clamp(48px,11vw,92px)` / line-height 0.9 / letter-spacing −2px / weight 900.
  - Section H2 (`.h2`): `clamp(34px,6vw,58px)` / line-height 0.94 / −1.5px / weight 900 / `max-width:18ch`.
  - Lead: `clamp(17px,2.4vw,21px)`, ink-muted, `max-width:52ch`. Hero sub: `clamp(17px,2.4vw,20px)`, `max-width:46ch`.
  - Metric numeral (`.big`): `clamp(64px,12vw,92px)` / line-height 0.85 / −3px.
  - Big-quote blockquote: `clamp(28px,5.5vw,52px)` / line-height 1.0 / −1.5px / `max-width:18ch`. Contact H2: `clamp(36px,7vw,64px)`. Card-corner padding on big blocks: `clamp(34px,6vw,64px)`.
- **Layout**: `.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}`. `section{padding:var(--section) 0}`. The hero is a `<header class="hero wrap">` (not a `<section>`) with its own padding — `padding-top:84px;padding-bottom:80px` — so it doesn't get the full 104px band. Grids go 1col → 2col at `min-width:680px` → 3col at `min-width:960px` (work/quotes/services to 3, hero to `1.15fr .85fr`).
- Default border on all blocks/cards/buttons = `var(--border)` (3px); secondary frames use `4px solid var(--outline)`.

## Signature techniques (pure CSS/SVG)

1. **Hard offset shadow (the whole look)** — every chip/card/button uses zero-blur offset shadows: `--shadow:6px 6px 0 var(--outline)` (plus `--shadow-sm:4px 4px 0` and `--shadow-lg:10px 10px 0`). On the ink-band metric cards, the offset shadow is a *contrasting color* (`6px 6px 0 var(--yellow)` / `var(--magenta)` / `var(--cyan)`), not black.
2. **Tilt-everything** — color blocks carry small static rotations alternated by `:nth-child` (e.g. tiles `rotate(-2deg)` / `rotate(2deg)` / `rotate(-1.5deg)`…; cards `rotate(-1.5deg)` / `rotate(1.5deg)`). Hover on a tile straightens it to `rotate(0)` and lifts the shadow.
3. **Outline + stroked highlight type** — highlighted hero words use `color:var(--magenta);-webkit-text-stroke:2px var(--outline);paint-order:stroke fill`. A second highlight sits on a yellow outlined chip: `background:var(--yellow);border:var(--border);box-shadow:var(--shadow-sm);border-radius:var(--r-sm);padding:0 10px;transform:rotate(-2deg)`.
4. **Button press choreography** — `.btn{box-shadow:var(--shadow)} .btn:hover{transform:translate(-2px,-2px);box-shadow:var(--shadow-lg)} .btn:active{transform:translate(3px,3px);box-shadow:2px 2px 0 var(--outline)}` (transition `.12s ease`). Pill buttons in 4 color variants (magenta/cyan/yellow/white).
5. **Faint dotted paper texture** — `body` gets `background-image:radial-gradient(var(--ink) 1px, transparent 1.4px);background-size:28px 28px`, then a fixed `body::before{inset:0;background:var(--canvas);opacity:.93;z-index:-1}` veil so the dots are a whisper.
6. **Memphis confetti in the hero** — absolutely-positioned shapes inside an `aria-hidden` `.shapes` layer: a cyan outlined circle, a CSS triangle made from borders with `filter:drop-shadow(3px 3px 0 var(--outline))`, a tilted magenta square, a yellow quarter-arc (`border-radius:50% 50% 50% 0`), plus inline SVGs — a magenta squiggle `<path>` (stroke-width 5, round caps), a 3×4 black dot grid, and a cyan zigzag `<path>`.
7. **Corner-ornament blocks** — the big yellow quote block and the cyan contact card use `::before`/`::after` pseudo-elements as oversized outlined circles/squares poking out of the corners (e.g. `::before{position:absolute;top:-40px;left:-40px;width:140px;height:140px;border-radius:50%;background:var(--yellow);border:var(--border)}`).
8. **Sticker badges** — section tags, year pills, status tags, the quote “ mark (yellow outlined circle), and the FAQ "?" (magenta outlined circle) are all small outlined pills/circles with `--shadow-sm`. Eyebrow chip is ink-on-canvas; `.tag-cyan/.tag-yellow/.tag-magenta` recolor section tags.
9. **Float on the confetti** — only the four solid hero shapes get a gentle `floaty` keyframe (`translateY(-12px)` over 6s, staggered delays, preserving each shape's base rotation via a `--rot` var), gated behind `@media(prefers-reduced-motion:no-preference)`.

## Photo + toggle contract

The page ships a real local portrait (the quirky illustration). Honor this exactly:

- Portrait `<img src="portrait.webp">` with a meaningful `alt` ("A quirky framed illustration of a cow living in a condo — a playful piece from Bruno Salas's work"), inside a `figure.u-photo.portrait-frame` — a white, 4px-outlined, `rotate(3deg)` frame with `--shadow-lg` and a magenta caption pill "Yes, a cow in a condo."
- Non-photo fallback `div.u-fallback.monogram` (`aria-hidden`): a cyan outlined square (aspect 1/1, `rotate(3deg)`) with a giant "BS" Archivo monogram, a yellow "Studio Salas" tag, and corner-ornament `::before`/`::after` shapes. Because it's grid-displayed, add `body.no-photos .u-fallback.monogram{display:grid !important}`.
- Toggle CSS (verbatim):
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
- Toggle HTML + JS before `</body>` (verbatim):
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```

## Motion

- Scroll reveal via one `IntersectionObserver`. Elements with `.reveal` start `opacity:0;transform:translateY(24px)` and get `.in` → `opacity:1;transform:none` with `transition:.55s cubic-bezier(.2,.7,.2,1)`. Observer `{threshold:0.12, rootMargin:'0px 0px -40px 0px'}`, `unobserve` after firing; if no IO support, add `.in` to all.
- Elements also tagged `.reveal.wiggle` additionally play a `wig` keyframe on reveal (`rotate(0 → -1.4deg → 1deg → 0)`, 0.5s) — the playful pop.
- The four hero confetti shapes float continuously (6s `floaty`).
- All of reveal-transition, wiggle, and float live inside `@media(prefers-reduced-motion:no-preference)`; under `prefers-reduced-motion:reduce`, `.reveal{opacity:1;transform:none}`, `.float{animation:none}`, and `scroll-behavior:auto`. Nothing else animates — no letterbox bars, no sunburst, no continuous marquee.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework.
2. The **only** external resources are the Google Fonts `<link>` (Archivo + Poppins) and the one local image `portrait.webp`. No other remote images, no CDNs, no Three.js/WebGL/heavy canvas — every "shape" is pure CSS/SVG.
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible — sufficient contrast, visible `:focus-visible` (4px magenta outline), `alt` text, honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Commit to the aesthetic: fat outlines, hard offset shadows, tilted asymmetric blocks, scattered geometric confetti, primary palette. Tasteful playful motion only.

**Output: the complete `index.html` and nothing else.**
