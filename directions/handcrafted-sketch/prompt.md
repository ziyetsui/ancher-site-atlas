# 生成 Prompt — Handcrafted Sketch（手作速写）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。页面只允许两项外部资源：一个 Google Fonts `<link>`（Caveat + Lora）和一张本地图片 `portrait.webp`（与 HTML 同目录的"贴入式"插画）。

---

You are a senior frontend designer-developer with an illustrator's eye. Generate a complete, single-file personal website (`index.html`) for the person below, in the **Handcrafted Sketch** design direction. Output **only** the HTML file — all CSS in one `<style>` tag, all JS inline. No build step, no frameworks. The only permitted external resources are the Google Fonts `<link>` and one local image, `portrait.webp`, sitting next to the file.

## The person (brief)

- **Name**: Posy Wren (studio: "Posy Wren · picture-book studio")
- **Role**: Picture-book author & illustrator
- **Audience**: children's-book publishers and parents ("For kids — and the grown-ups who read to them, one bedtime page at a time.")
- **Primary goal**: get visitors to see her books, then commission illustration / acquire a manuscript
- **Thesis (the angle the whole page serves)**: *"Small stories, drawn by hand."* The page should feel like flipping through her sketchbook, not scanning a portfolio site.
- **Tone**: warm, playful, a little shy, deeply personal — handmade, never corporate
- **Proof points (use these, concretely — no filler)**:
  - 7 published picture books, all hand-drawn (ink, watercolour, the occasional crayon)
  - Won the 2024 "Golden Acorn" Illustration Medal for *The Moon Forgot to Set*
  - Sold-out "Draw Your Own Animal" workshops — 3 cities, 600+ kids
  - 12 years drawing by hand; stories read aloud in 9 languages
- **Links**: Email `hello@posywren.studio`, newsletter "The Doodle Post ✉", Instagram `@posy.draws`
- **Footer line**: "drawn by hand in a slightly messy studio · Posy Wren 2026"

## Module plan (in this order)

Each `<section>` (or the hero `<header>`) carries `data-module` + `data-variant` on its opening tag. Use the **real copy below verbatim**.

1. **`hero` / `split_portrait`** — Two-column on ≥860px (1.05fr / .95fr), single column below. Left: handwritten name scrawl "Posy Wren · picture-book studio"; H1 "Small stories, drawn by **hand**." (the word "hand" in coral); italic serif sub "For kids — and the grown-ups who read to them, one bedtime page at a time."; a sticky-yellow CTA "See the books →" (links to `#books`) with a doodled SVG arrow pointing at it. Right: a `figure.frame` — `portrait.webp` "taped" into the page with two washi-tape corners (coral top-left rotated −32°, mint top-right rotated +32°), figcaption "“Otters in the Post Office” — endpaper sketch". Whole frame tilts +1.6°.

2. **`selected_work` / `grid`** — Eyebrow "the bookshelf"; title "Seven books, all hand-drawn"; intro "Ink, watercolour, and the occasional crayon stolen from my niece. Tap any cover to read more about it."; a wobbly hand-drawn SVG rule under the header. Then an auto-fill grid (`minmax(220px,1fr)`) of **6 book cards**, each a taped cover-sketch at alternating tilts, with a CSS-gradient cover + doodle ring, title (`.meta`), one-line `.desc`, and `.yr`:
   - **The Moon Forgot to Set** — cover sub "a bedtime that wouldn't end"; "A sleepy town learns to share the longest night of the year."; "2024 · medal winner"; carries a gold **award sticker** "Golden Acorn '24" (aria "Winner, 2024 Golden Acorn Illustration Medal").
   - **Otters in the Post Office** — "parcels, paws & puddles"; "What happens after hours when the river creeps indoors."; "2023".
   - **The Very Patient Pine** — "a tree that waited"; "On growing slowly, and why that is its own kind of brave."; "2022".
   - **Mabel Draws a Dragon** — "colour outside the lines"; "The dragon Mabel drew got loose. Now everyone wants one."; "2021".
   - **Goodnight, Lamplighter** — "the last warm window"; "A small girl walks her city to sleep, lamp by lamp."; "2019".
   - **The Button Sea** — "everything I lost, found"; "A grandmother's sewing tin becomes an ocean of small treasures."; "2017 · debut".

3. **`story` / `magazine_longform`** — Section has a faint top-and-bottom paper-wash background gradient. Centered ≤740px column. Eyebrow "at the drawing table"; title "How I make a little book". A margin sticky-note (blue) "600+ kids drew their own animal with me — 3 cities, all sold out 🐙" (absolute on the right ≥1080px, inline below). Italic pull-quote with coral left border: "“A picture book is a tiny theatre you hold in two hands. I draw it slowly, so a child can stay a while.”" Then 3 serif paragraphs (keep verbatim):
   - "I have spent **twelve years drawing by hand** (hand-underlined) — ink first, then watercolour, then the bits of crayon and coloured pencil that sneak in. Nothing on this page was made by a machine, and I'd like to keep it that way."
   - "Every story starts as a scribble in a battered sketchbook: an otter posting a letter, a pine tree that refuses to hurry. I let the drawing tell me what the words can't. By the time a manuscript reaches a publisher, the characters already know how they walk."
   - "Between books I run **“Draw Your Own Animal”** workshops — three cities so far, every one sold out, 600-plus small illustrators and a heroic amount of glitter. Watching a six-year-old decide their creature has seven legs is the best research there is."
   Close with a doodled SVG arrow + scrawl "…so let's make something together."

4. **`metrics` / `big_numerals`** — Eyebrow "a quick tally"; title "Counted up, one mark at a time" + hand rule. Auto-fit grid (`minmax(200px,1fr)`) of 4 tally cards, big coral Caveat numerals, each with a washi tab, alternating tilts:
   - **7** — "picture books written & illustrated, start to endpaper"
   - **600+** — "small illustrators at my “Draw Your Own Animal” workshops"
   - **12** — "years drawing by hand — ink, watercolour, the odd crayon"
   - **9** — "languages my little stories have been read aloud in"

5. **`beliefs` / `numbered`** — Paper-wash background gradient. Eyebrow "pinned above the table"; title "Four things I draw by". An `<ol>` (≤760px) with sticky-note numbers (alternating yellow/blue, tilted), each item a Caveat `<h3>` + serif `<p>`:
   1. **Leave the wobble in.** — "A line that shakes a little is a line a hand actually made. I don't straighten it out — that wobble is where the warmth lives."
   2. **Draw slowly, so a child can stay.** — "A picture book is a tiny theatre held in two hands. I fill the corners, so there's always one more thing to find on the fortieth bedtime."
   3. **Let the picture say what the words can't.** — "The best page leaves room. If the drawing already shows the sadness, the sentence doesn't need to name it."
   4. **No machine on this page.** — "Every mark here was inked or painted by hand. It's slower, it's messier, and I'd like to keep it exactly that way."

6. **`currently_building` / `now_block`** — Eyebrow "at the table this month"; title "What I'm drawing right now". A wobbly-bordered `.now-card` (ink border, slight tilt) with a sticky "Now · June '26" tag, and a 3-item list each prefixed by a coral hand-drawn check tick:
   - "**Inking book eight, “The Snail Who Mailed Herself.”** Spreads 1–14 painted; the post office scene is fighting me beautifully."
   - "**Packing crayons for three autumn workshops** — Bristol, Leeds, and a tiny island library off the coast."
   - "**Open to two commissions** for spring — picture-book covers and editorial spot drawings only, please."

7. **`testimonials` / `quote_led`** — Eyebrow "notes left on my desk"; title "Kind words, mostly in crayon" + hand rule. Auto-fit grid (`minmax(280px,1fr)`) of 3 sticky-note quote cards (alternating yellow/blue, tilted, with a "tape" pseudo-element on top), italic serif blockquote + Caveat `who` name + serif `small` role:
   - "“Posy hands you the manuscript already breathing. Her sketches know how the characters walk before we've agreed on the title.”" — **Marian Holt**, Editor, Lantern & Loom Books
   - "“My daughter has asked for ‘the moon one’ 211 nights running. I have it memorised. I am not even a little bit sorry.”" — **Devon Akeyo**, Parent & reluctant nightly narrator
   - "“She let a room of six-year-olds give a dragon seven legs and treated every single one like a serious design decision.”" — **Ife Castellano**, Librarian, Greenfield Children's Library

8. **`reading_list` / `list`** — Paper-wash background gradient. Eyebrow "propped open near the kettle"; title "On the table this season". A `<ul>` (≤780px) of 4 rows divided by dashed hairlines; each = italic serif title + faint author + a tilted sticky `.tag` (status) + serif `.why`:
   - **Beginning to End** — Robert Frank — tag "re-reading" — "For how he lets a photograph stay quiet. I keep stealing his patience for my endpapers."
   - **The Lost Words** — Macfarlane & Morris — tag "favourite" (mint) — "Watercolour and word as one breath. The book I press into every young illustrator's hands."
   - **Drawn from Paradise** — David Attenborough — tag "research" (blue) — "Birds-of-paradise for a feathered character in book eight. Mostly an excuse to draw ridiculous tails."
   - **The Creative Habit** — Twyla Tharp — tag "dog-eared" — "On showing up to the table before the idea does. My most-underlined spine."

9. **`contact` / `cta_band`** — A torn-paper panel (clip-path torn top+bottom edges, slight tilt) holding: eyebrow "let's talk"; H2 "Got a story that needs a face?"; "I take a few illustration commissions a year, and I love hearing from publishers and parents alike. Say hello — I read everything myself."; then 3 scrawled links each with a coral hand-drawn underline SVG: `hello@posywren.studio` (mailto), "The Doodle Post ✉", "@posy.draws". Footer below: "drawn by hand in a slightly messy studio · Posy Wren 2026".

## Design direction — Handcrafted Sketch

**DNA**: The whole page is an open sketchbook on a warm table. Cream paper with faint grain + quiet horizontal notebook ruling; collage of hand-made primitives — taped-in art, sticky notes, doodled arrows, hand underlines, tally numerals, torn paper, a wax-seal-style award sticker. **Two type voices**: Caveat (handwriting) carries warmth on every headline, eyebrow, scrawl, sticky note, number, link and arrow; Lora (serif) does all the reading. **Everything sits at gentle 1–2° tilts** — nothing perfectly straight; cards alternate via `:nth-child` rotations. Coral (`--accent`) is the only highlight — used on underlines, circled words, arrows, ticks and big numerals; washi tape adds coral/mint pops. **Depth comes from hard-offset + soft drop-shadows on paper cards** (this is load-bearing — do NOT make it flat/shadowless) and from genuinely wobbly hand-inked borders. Avoid: straight perfect grids, flat corporate cards, neon gradients, glassmorphism, centered sterile minimalism.

**Tokens** (define as CSS variables in `:root`, obey exactly):
- colors: `--paper:#faf4e6`, `--paper-shade:#f1e7d0`, `--ink:#2b2620`, `--ink-soft:#5f574a`, `--ink-faint:#9a8f7c`, `--accent:#d2542f`, `--accent-deep:#b23c1c`, `--washi-coral:#f2a48b`, `--washi-mint:#a7c4a0`, `--sticky-yellow:#fbe89a`, `--sticky-blue:#bcd6e6`, `--line:#2b2620`, `--hairline:#e0d4ba`
- spacing/radius: `--section:104px`, `--block:36px`, `--tight:14px`, `--r-sm:4px`, `--r-md:10px`, `--r-lg:18px`
- key layout spacing: page `.wrap` `max-width:1120px`, `padding:0 24px`; every `<section>` `padding:var(--section) 0`; hero `padding:64px 0 var(--section)` (mobile) → `80px 0 var(--section)` (≥860px); `.sec-head` `margin-bottom:48px; max-width:40ch`; contact section `padding-bottom:140px`. Centered reading columns: story `max-width:740px`, beliefs `.creed` `760px`, reading `.shelf` `780px`, contact `.torn` `720px`, now-card `680px`
- fonts (Google Fonts): `Caveat` 600/700; `Lora` 400/600 + italic. Link verbatim:
  `https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap`
- body: `font-family:'Lora',Georgia,serif; font-size:18px; line-height:1.7`
- type scale (use the REAL clamp() expressions):
  - H1 (hero): Caveat 700, `clamp(54px,11vw,88px)`, line-height .96, letter-spacing −.5px, max-width 14ch; `h1 em` = coral
  - section title (`.sec-title`): Caveat 700, `clamp(40px,6vw,52px)`, line-height 1
  - story pull-quote (`.pull`): Lora italic 400, `clamp(24px,4vw,32px)`, coral left border
  - hero sub (`.hero-sub`): Lora italic, `clamp(18px,2.4vw,22px)`
  - tally numeral (`.num`): Caveat 700, `clamp(48px,7vw,64px)`, coral
  - contact H2: Caveat 700, `clamp(40px,7vw,58px)`
  - hero CTA (`a.cta`): Caveat 700, **25px**; contact links (`.links a`): Caveat 700, 26px
  - hero name scrawl (`.hero-name`): Caveat 700, 26px, coral, `rotate(-1.5deg)`
  - book title (`.meta`): Caveat 700, 24px; book `.desc`: Lora 14.5px; book `.yr`: Caveat 600, 19px, ink-faint
  - eyebrow: Caveat 700, 22px, coral, `letter-spacing:.5px`, `transform:rotate(-2deg)`; scrawl: Caveat 600, 26px
- texture: layered `body` background — two faint coral/mint `radial-gradient`s + a `repeating-linear-gradient(0deg, transparent 0 31px, rgba(188,214,230,.18) 31px 32px)` for blue ruling + an inline SVG `feTurbulence fractalNoise` (baseFrequency .9, desaturated, opacity ≈.045) data-URI for paper grain. Keep it all quiet.

## Signature techniques (pure CSS/SVG)

1. **Wobbly hand-inked border** (`.ink-border`, `.now-card`): `border:2px solid var(--ink)` + an irregular multi-value radius, e.g. `border-radius:255px 14px 225px 12px/14px 235px 12px 255px;` plus a **hard offset shadow** `box-shadow:3px 5px 0 -1px rgba(43,38,32,.18)`. The asymmetric px give the "drawn, not CAD" line.
2. **Washi-tape strip** (`.washi`): absolutely-positioned ~104×30px bar = `repeating-linear-gradient(45deg, rgba(255,255,255,.25) 0 7px, transparent 7px 14px), var(--washi-coral)` (`.mint` swaps the base to `--washi-mint`), opacity .9, soft shadow, dashed white side borders. On the framed hero photo, two of these rotate ±32° over the corners.
3. **Taped paper card** (`.frame`, `.book`, `.tally`): cream `#fffdf6` panel, `1px solid var(--hairline)`, **dual soft drop-shadow** like `box-shadow:4px 10px 26px -10px rgba(43,38,32,.5)`, then a per-card tilt. Books/tallies alternate tilt via `:nth-child(2n)`/`(2n+1)` (±1–1.8°). Book covers are `linear-gradient(160deg,…)` swatches (c1–c6) with a `::before` doodle ring (`border-radius:60% 40% 55% 45%/50% 55% 45% 50%`).
4. **Sticky note** (`.sticky`, `.note`): `--sticky-yellow`/`--sticky-blue` block, Caveat, tilted, soft shadow, plus a translucent-white "tape" via `::after` (a small bar at top-center). Margin notes and testimonials reuse this.
5. **Hand underline / squiggle rule**: inline SVG `<path>` with `stroke:currentColor` (coral), a gentle Bézier wobble, drawn under a word (`.uline{position:relative;white-space:nowrap}`, `.uline svg{position:absolute;left:-4%;right:-4%;bottom:-.5em;width:108%;height:.7em;overflow:visible}` so the stroke slightly overshoots both ends) or full-width as a section divider (`.rule`, `viewBox="0 0 600 14"`, `preserveAspectRatio="none"`, color `--hairline`). Contact links each get one (`bottom:-7px;height:9px`, coral).
6. **Doodled arrows & ticks**: hand SVG paths (`.arrow`, `.tick`, `.story-arrow`) in coral with `stroke-linecap:round` — a curved shaft plus two short strokes for the arrowhead.
7. **Wax-seal award sticker** (`.award`): radial-gradient gold disc, scalloped via a 22-point `clip-path:polygon(...)`, Caveat label, rotate 8°, pinned to a book's top-right corner.
8. **Torn-paper panel** (`.torn`, contact): cream card with a jagged `clip-path:polygon(...)` on top+bottom edges to read as torn, soft shadow, −1° tilt.
9. **Sticky-number list** (`.creed`): `counter-reset/counter-increment`; each `li::before` renders `counter()` inside a tilted sticky-note square (yellow, blue on even rows).
10. **Coral selection + dashed focus**: `::selection{background:var(--washi-coral)}`; `a/button:focus-visible{outline:3px dashed var(--accent);outline-offset:4px}` — keeps the hand-drawn language even in focus states.

**Button hover choreography**: the sticky CTA rests at `rotate(-2deg)`; on hover it lifts — `transform:rotate(-2deg) translateY(-3px)` with a slightly deeper shadow, `transition .18s ease`. (Under `prefers-reduced-motion` it stays at `rotate(-2deg)` with no lift.)

## Photo + toggle contract (must match exactly)

The page **ships a real local portrait** (`portrait.webp`) taped into the hero `.frame` — keep it. Do NOT add any "avatar = CSS/SVG/initials" or "no images" rule.

- The illustration `<img>` gets class `u-photo` and a meaningful `alt` (e.g. "A hand-drawn watercolour illustration of a couple reading a picture book together, taped into the page."). Sibling fallback gets class `u-fallback`: a dashed hand-drawn empty picture frame (SVG) + scrawl "a little drawing lives here", that reads as intentional with no photo. Default = photos ON.
- Add into `<style>`:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  body.no-photos .frame .u-fallback{display:grid !important}  /* scoped grid restore */

  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
- Before `</body>` add (verbatim):
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```
- `sample.png` is taken with photos ON.

## Motion

The **only** scripted motion is a gentle fade-up-on-scroll reveal. Tag revealing elements `.reveal` (`opacity:0; transform:translateY(18px) rotate(var(--tilt,0deg)); transition:opacity .6s ease, transform .6s ease`). The `.reveal.in` class sets **only `opacity:1`** — it does *not* reset the transform, so the element fades in while keeping its resting `translateY(18px) rotate(--tilt)` (the visible effect is a soft fade, not a slide). The `--tilt` custom property is **load-bearing**: each tilted card sets its own resting angle inline on the `.reveal` element (`style="--tilt:1.6deg"` on the hero frame; `±1.2/−1.4deg` on the four tallies; `−.8deg` on the now-card; `−1.6/1.4deg` on the three notes), so `rotate(var(--tilt,0deg))` carries that exact tilt; plain text blocks use `--tilt:0deg`. Drive it with one `IntersectionObserver`, `{threshold:.12, rootMargin:'0px 0px -8% 0px'}`, `unobserve` after firing. The CTA hover-lift (above) is the only other animation. **No** typewriter/marquee/letterbox/sunburst/parallax — do not promise motion the page doesn't ship.

`prefers-reduced-motion: reduce`: force `.reveal{opacity:1 !important;transform:none !important;transition:none}`, disable all transitions (`*{transition:none !important}`), set `scroll-behavior:auto`, and the IO branch just adds `.in` to everything immediately.

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework.
2. Only external resources: the Google Fonts `<link>` and the local `portrait.webp`. No remote images beyond that local portrait; no Three.js/WebGL/heavy canvas — all texture, tape, tilts and doodles via pure CSS/SVG.
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible (contrast on cream paper, visible dashed focus states, alt text); honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tag every section with its `data-module`/`data-variant`. Commit hard to the sketchbook aesthetic — gentle tilts, hand shadows, washi, doodles — looks intentionally hand-made, not AI-generic.

**Output: the complete `index.html` and nothing else.**
