# 生成 Prompt — Maximalist Collage（极繁拼贴）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，唯一的外部资源是一个 Google Fonts `<link>` 与一张同目录本地图片 `portrait.webp`，效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer with a punk-zine, paste-up sensibility. Generate a single self-contained `index.html` in the **Maximalist Collage** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no framework, no WebGL/Three.js. The only external resources allowed are the Google Fonts `<link>` and one local image `portrait.webp` next to the HTML.

## The person (brief)

- **Name**: Juno Castellano
- **Role / kicker**: Multidisciplinary artist · zine maker ("Loud work · made by hand · since the basement days")
- **Audience**: galleries, brands, and collaborators
- **Primary goal**: get visitors to *see the work* and reach out to collaborate
- **Thesis (the angle the whole page serves)**: *"More is more. I make loud work for people who are tired of quiet."* The page itself should be the loudest piece in the portfolio.
- **Tone**: brash, warm, hand-made, unapologetic, funny
- **Proof points (use these concretely — no filler)**:
  - Self-published riso zines incl. *WE THE PEOPLE* (32pp, edition of 150, sold out in a weekend), *Loudmouth*, *Saint Trash*
  - Solo + group gallery shows (Saint Trash solo, Greenpoint NY; Basement/Lisbon group show)
  - Indie-label collabs: cover art, merch/patches, a 9-city *Make Noise* tour poster run
  - Risograph runs sold out twice; collabs/commissions open for 2026
- **Links**: Email `hi@junocastellano.studio` · Instagram `@juno.makes.noise` · "Shop zines & prints"
- **Sign-off**: "— more is more, always —" · footer "© 2026 Juno Castellano · Cut & pasted by hand"

## Module plan (in this order)

A non-tagged decorative **top strip** (dark `--ink` bar, `border-bottom:3px solid var(--accent)`, Archivo Black uppercase 13px `letter-spacing:1px`, `padding:9px 0`; words alternate yellow / lime via `:nth-child(even)`) marquee-reads: `MORE IS MORE ★ ZINES · POSTERS · COVER ART ✶ COLLABS OPEN ★ RISO SOLD OUT TWICE ✶ …` (repeat). `aria-hidden`.

Then 10 tagged sections (`data-module` / `data-variant`), each a numbered `sec-head` (italic serif number + Archivo Black H2 with a hard-offset text-shadow):

1. **`hero` / `collage_statement`** — two-col grid (`1.1fr .9fr`). Left: blue rotated kicker pill "Multidisciplinary artist · zine maker"; name "**Juno**" in giant Archivo Black with pink+accent layered text-shadow, "*Castellano*" in DM Serif italic rotated below; a yellow rotated `role` chip; the thesis "**More is more.**" (Archivo Black, ink bg, lime text, `box-decoration-break:clone`) + "*I make loud work for people who are <b>tired of quiet.</b>*" (DM Serif italic, "tired of quiet" in a `<b>` with pink bg **and** its text recolored to `--accent` + de-italicized — `color:var(--accent);font-style:normal;font-weight:400;background:var(--scrap-pink);padding:0 6px`); CTA row = sticker buttons "See the work ↓" (accent) + "Let's collab →" (blue) + a jiggling lime "Collabs / open / 2026" badge. Right: **portrait centerpiece** — `portrait-card` (cream, ripped right edge via clip-path, rotated 3deg, taped TL+BR) holding the `u-photo` img, caption "**WE THE PEOPLE** — riso poster · 2025"; behind it two rotated clip-path color scraps (orange, blue); two floating round stickers "New / zine" (blue) and "Hand / made" (yellow).
2. **`selected_work` / `grid`** — head `01 Selected work`, label "Pick something. Take it home." CSS-`columns:3` masonry of 6 taped torn-paper cards, each rotated, hover un-rotates + lifts; per card a colored chip, Archivo Black H3, a CSS-pattern `swatch`, a `meta` line, a sentence:
   - **We The People** · chip "Zine · 32pp" · Riso, 2-color · 2025 — "A shouting, fold-out manifesto on protest and noise. Edition of 150, sold out in a weekend."
   - **Loudmouth** · "Cover art" · Indie label LP sleeve · 2024 — "Full sleeve + insert collage for a debut record. Sticker pack went with the first pressing."
   - **Saint Trash** · "Gallery show" · Solo · Greenpoint, NY · 2024 — "Wall-sized paste-ups built from a year of street flyers. Featured in a city-arts roundup."
   - **Make Noise Tour** · "Tour posters" · 9-city run · 2023 — "A poster a night, each one different, all torn from the same screaming alphabet."
   - **Basement / Lisbon** · "Zine · group" · Group show + zine · Lisbon · 2023 — "Co-made a 5-artist riso anthology, hung it in a basement, threw the launch the same night."
   - **Worn Loud** · "Merch" · Tees + patches · 2025 — "Wearable collage for two indie labels. Patches sold out before the photos went up."
   - chip color classes: pink, blue, yellow, orange, lime, pink (each has a matching CSS swatch pattern).
3. **`selected_quotes` / `large_type`** — dark section (ink bg, accent top border + blue bottom border), head `02 What they yell` (yellow H2, `text-shadow:4px 4px 0 var(--accent)`). 3 rotated cream pull-quotes in `qwall` (`gap:54px`), alternately left/right-aligned (`align-self:flex-start` / `flex-end`); the two non-big quotes prepend a big accent opening quote mark via `q::before{content:"“";color:var(--accent);font-size:1.2em;line-height:0}` (the **big** quote suppresses it with `content:""`):
   - "*Castellano makes you look twice, then keeps shouting after you've left the room.*" — City Arts Weekly
   - **big** Archivo Black quote (typed sentence-case "If quiet is a brand, I'm the opposite of a brand."; rendered all-caps via `text-transform:uppercase`) — Juno, in her own words
   - "*The rare maker whose process — tear, tape, repeat — is the whole point.*" — Riso Heads zine
4. **`metrics` / `big_numerals`** — head `03 By the numbers`, label "Loud, but counted." 4-col `stat-wall` of rotated colored cards (yellow/pink/lime/cream by nth-child), each a giant Archivo Black numeral + caption:
   - **340+** Posters cut & pasted by hand
   - **11** Cities the Make Noise tour hit
   - **2×** Riso runs sold out in a weekend
   - **9yr** Making mess since the basement days
5. **`beliefs` / `numbered`** — blue section (yellow top border, accent bottom border), head `04 House rules` (yellow H2, lime number). `<ol>` of 4 cream cards, each a rotated accent number badge + bold title + line:
   1. **More is more** — "White space is a choice and I keep choosing against it. If a corner is empty, paste something on it."
   2. **Make it by hand** — "Tear, tape, repeat. The wobble and the shadow are the point — clean is somebody else's job."
   3. **Loud is a service** — "I don't soften the work to fit a brand book. If you wanted quiet you'd have called someone else."
   4. **Print, then post** — "It exists on paper first. The internet gets the photo after the ink is dry and the edition's gone."
6. **`experience` / `timeline`** — head `05 How I got loud`. 3 rotated cream cards, each a blue year tag + Archivo Black role + serif-italic accent "where" + line:
   - **2017 — now** · Independent artist · zine maker · *Castellano Studio — Brooklyn, NY* — "Self-published riso zines, cover art and paste-up posters for indie labels, venues and anyone tired of quiet."
   - **2020 — 2022** · Art director, contract · *Loudmouth Records* — "Built the visual world for a small label — sleeves, inserts, sticker packs and tour merch, all hand-collaged."
   - **2016 — 2017** · Print shop apprentice · *Greenpoint Risograph Co-op* — "Learned the machines two colors at a time. Jammed a lot of paper. Fell hard for misregistration."
7. **`currently_building` / `now_block`** — head `06 Right now`, label "Wet ink, not dry yet." One rotated lime `now-card` with an accent "Now · 2026" flag, an arrow (`→`) bullet list:
   - **Saint Trash, vol. 2** — a fold-out riso zine on city flyers, edition of 200, printing this spring.
   - **A 24-poster alphabet** — one screaming letter a day, taped up as I go.
   - **Teaching collage** — a hands-on paste-up workshop at the Greenpoint co-op once a month.
   - footer line "*Updated June 2026 — Brooklyn, between two glue sticks.*"
8. **`tools` / `stack_list`** — head `07 The kit`, label "Mostly sticky." `flex-wrap` of 8 rotated colored tool chips (name + uppercase use): Risograph (2-color printing) · Scissors + glue (Cut & paste) · Masking tape (Holds it all down) · Photocopier (Texture & grain) · Found paper (Flyers & scraps) · Wide markers (Ransom-note type) · Scanner (Digitize the mess) · Spray mount (Big paste-ups).
9. **`credentials` / `pills`** — dark section (lime top border, yellow bottom border), head `08 Stamps & stickers` (lime H2). `flex-wrap` of rotated cream pills, each label + serif-italic accent year: Saint Trash · solo show **'24** · City Arts roundup pick **'24** · Basement/Lisbon group show **'23** · Riso Heads feature **'23** · Make Noise tour, 11 cities **'23** · BFA, Printmaking **'16** · Greenpoint co-op resident **'16**.
10. **`contact` / `cta_band`** — one big rotated accent `contact-card` (dotted-radial texture, taped yellow+lime top corners, hard ink shadow): H2 "Let's make<br>noise" (Archivo Black, ink text-shadow); lead "*Got a record, a show, a brand that needs to get loud? Bring me the project nobody else will touch.*"; 3 sticker link buttons (cream/yellow/lime) `hi@junocastellano.studio` · `@juno.makes.noise` · "Shop zines & prints"; serif-italic yellow sign-off "— more is more, always —"; centered footer "© 2026 Juno Castellano · Cut & pasted by hand".

## Design direction — Maximalist Collage

**DNA**: A hand-built scrapbook that refuses white space. A *busy patterned ground* (dots + faint grid + warm corner washes via stacked CSS gradients) under torn-paper scraps in clashing brights, overlapping at crooked angles, pinned with masking-tape strips and crusty circular stickers. Headlines pasted in two fighting display faces — Archivo Black grotesque vs DM Serif Display italic — rotated, layered, sometimes bleeding off the edge. **Every layer casts a hard-offset (un-blurred) shadow on the one below** — that drop-shadow is load-bearing, not optional. Nothing centered, nothing tidy. Cards are tilted by `nth-child` rotation. More is more.

**Tokens** (define as CSS variables, obey exactly):

```css
:root{
  --ground:#f4ead5;        --scrap-cream:#fff7e6;
  --scrap-pink:#ffd6e0;    --scrap-blue:#1b3bff;
  --scrap-yellow:#ffe14d;  --scrap-lime:#b6ff3c;
  --scrap-orange:#ff7a1a;
  --ink:#16140f;           --ink-inverse:#fff7e6;
  --accent:#ff2e63;        --accent-2:#1b3bff;
  --tape:rgba(214,196,140,0.72);  --sticker-edge:#ffffff;
  --shadow:6px 7px 0 rgba(22,20,15,.9);        /* hard-offset card shadow */
  --shadow-soft:3px 4px 0 rgba(22,20,15,.55);
  --r-sm:1px; --r-md:3px;
}
```

- **Fonts** — one Google Fonts `<link>` (with the two `preconnect`s):
  `https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@400;700&display=swap`
  Archivo Black = display grotesque (names/H2/H3/badges/buttons); DM Serif Display italic = secondary display (serif names, "where", years, sign-offs); Space Grotesk 400/700 = body + uppercase labels.
- **Type scale (use these real `clamp()` expressions)**:
  - hero name L1: `clamp(54px,12vw,118px)` Archivo Black, `letter-spacing:-3px`, `line-height:.82`, text-shadow `5px 5px 0 var(--scrap-pink),9px 9px 0 var(--accent)`
  - hero name L2: `clamp(44px,9vw,92px)` DM Serif italic, rotated −3deg
  - thesis "more": `clamp(30px,7vw,58px)` Archivo Black; thesis "quiet": `clamp(22px,4.4vw,34px)` DM Serif italic
  - section H2: `clamp(34px,7vw,72px)` Archivo Black, `letter-spacing:-2px`, `line-height:.9`
  - big quote: `clamp(30px,6.4vw,72px)`; normal quote: `clamp(26px,4.6vw,46px)` DM Serif italic
  - stat numeral: `clamp(44px,8vw,72px)` Archivo Black, `letter-spacing:-3px`
  - contact H2: `clamp(38px,9vw,96px)`; contact lead: `clamp(20px,3.4vw,30px)`
  - body 18px/1.5; label 12px/700 uppercase `+2px`
- **Layout / spacing**: `.wrap{max-width:1160px;margin:0 auto;padding:0 18px}`; section padding `84px 0` (dark feature sections `96px 0`); **hero** padding `54px 0 92px`, **contact** padding `96px 0 60px`; `.sec-head` `margin-bottom:46px` (flex, baseline-aligned, `gap:18px`, eyebrow `.label` pushed right with `margin-left:auto`); the constrained text blocks set their own `max-width` (`.thesis` 560px; `.qwall` 980px; `.creed` 960px; `.timeline` 880px; `.now-card` 780px; `.pillwrap` 1000px; `.contact-card` 900px; `.contact-card .lead` 620px); reveal cards keep their per-card rotation via a `--rot` custom prop.

## Signature techniques (pure CSS/SVG — all load-bearing)

1. **Busy patterned ground** (on `body`, stacked backgrounds):
   ```css
   background-color:var(--ground);
   background-image:
     radial-gradient(circle at 1px 1px, rgba(22,20,15,.14) 1.4px, transparent 1.6px),
     repeating-linear-gradient(0deg, rgba(22,20,15,.045) 0 1px, transparent 1px 34px),
     repeating-linear-gradient(90deg, rgba(22,20,15,.045) 0 1px, transparent 1px 34px),
     radial-gradient(120% 90% at 0% 0%, rgba(255,46,99,.10), transparent 55%),
     radial-gradient(120% 90% at 100% 100%, rgba(27,59,255,.10), transparent 55%);
   background-size:17px 17px,34px 34px,34px 34px,100% 100%,100% 100%;
   ```
2. **Hard-offset shadow** = the whole look. Cards use `box-shadow:var(--shadow)` (`6px 7px 0`, no blur); hover grows it (e.g. `9px 12px 0`). Big text uses layered `text-shadow` with 0 blur (e.g. name L1 pink+accent; stat numeral `3px 3px 0 var(--scrap-cream),5px 5px 0 var(--ink)`). The section H2 shadow is `4px 4px 0` in a per-section scrap color: default **lime**, metrics **blue** (`--scrap-blue`), experience **orange** (`--scrap-orange`), tools **pink** (`--scrap-pink`); the dark/blue band heads recolor both the H2 (quotes & beliefs yellow, credentials lime) and its shadow (quotes `--accent`, beliefs `--ink`, credentials `--accent-2`).
3. **Tilted-card stack** — no even grid; every repeated item is rotated by `nth-child`:
   ```css
   .work:nth-child(3n+1){transform:rotate(-2.2deg)} .work:nth-child(3n+2){transform:rotate(1.6deg)} .work:nth-child(3n+3){transform:rotate(-.8deg)}
   ```
   stats/tools/pills/creed/timeline each have their own `nth-child` rotation + per-nth background color. Hover un-rotates: `.work:hover{transform:rotate(0) translateY(-3px)}`.
4. **Torn / ripped edges via clip-path** — portrait card right edge and the orange scrap use jagged polygons, e.g. portrait:
   ```css
   clip-path:polygon(0 0,98% 1%,100% 6%,97% 12%,100% 19%,96% 26%,100% 33%,97% 41%,100% 49%,96% 57%,100% 65%,97% 73%,100% 81%,96% 89%,100% 96%,98% 100%,0 100%);
   ```
   `.scrap.torn::after` adds a jagged bottom edge with a sawtooth `clip-path` repeating the parent background.
5. **Masking tape** = rotated semi-transparent rectangle:
   ```css
   .tape{position:absolute;width:96px;height:30px;background:var(--tape);
     border-left:1px dashed rgba(22,20,15,.18);border-right:1px dashed rgba(22,20,15,.18);
     box-shadow:0 1px 2px rgba(0,0,0,.12);backdrop-filter:saturate(1.2)}
   .tape.tl{top:-13px;left:-14px;transform:rotate(-32deg)} /* .tr .bl .br vary corner+angle */
   ```
6. **Crusty round sticker** = radial highlight + flat color + white ring:
   ```css
   .sticker{width:104px;height:104px;border-radius:50%;border:4px solid var(--sticker-edge);
     background:radial-gradient(circle at 38% 32%,#fff5,transparent 42%),var(--accent);
     box-shadow:var(--shadow-soft);font-family:'Archivo Black';text-transform:uppercase;font-size:13px}
   ```
7. **Highlighted inline text** via `box-decoration-break:clone` (thesis "More is more." on ink bg) and `<b>` swatches (pink bg behind "tired of quiet").
8. **CSS swatch patterns** for work cards (no images): stripes via `repeating-linear-gradient(45deg,var(--scrap-pink) 0 12px,#ffbcce 12px 24px)`, blobs via `radial-gradient(circle at 30% 30%,#5e73ff,transparent 40%),var(--scrap-blue)`, etc., framed by `box-shadow:inset 0 0 0 6px rgba(255,247,230,.5)`.
9. **Sticker buttons / pill links** — Archivo Black uppercase, ink border, `box-shadow:var(--shadow)`, slight rotation; hover nudges `translate(-2px,-2px)` and grows the shadow (`.btn-sticker:hover{box-shadow:9px 11px 0 rgba(22,20,15,.9)}`).
10. **Feature-section bands** — dark/blue full-bleed sections (`quotes`, `beliefs`, `credentials`) carry contrasting thick top/bottom borders in scrap colors (e.g. `border-top:4px solid var(--accent);border-bottom:4px solid var(--accent-2)`).

## Photo + toggle contract (implement exactly)

The page **ships a real portrait** (`portrait.webp`). Do **not** replace it with CSS/SVG/initials.

- The portrait `<img>` gets class `u-photo`, real `alt` (e.g. "Juno Castellano's poster artwork 'WE THE PEOPLE' — a loud, layered collage piece"), `width/height`, `loading="eager"`; it sits inside the rotated, ripped, taped `portrait-card` as the hero centerpiece. Photo filter `contrast(1.05) saturate(1.08)`.
- A `u-fallback portrait-fallback` (`role="img"`, `aria-label`) is a torn-paper striped color scrap + big Archivo Black name-plate ("Juno / makes / noise" + a yellow "Artist · zine maker" tag) that looks intentional with no photo — same rotation/clip-path/shadow as the card.
- Default = photos ON. Required CSS:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  /* scoped flex restore so the fallback lays out right when shown */
  body.no-photos .portrait-stage .u-fallback.portrait-fallback{display:flex !important;flex-direction:column;justify-content:flex-end}
  ```
- Fixed bottom-right toggle widget + script, verbatim:
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```
  (`.atlas-photo-toggle` = fixed pill bottom-right, dark bg, white inner button.)

## Motion

- **Scroll reveal**: cards get class `reveal`; an `IntersectionObserver` (`threshold:.14`, `rootMargin:'0px 0px -8% 0px'`) adds `.in` once and unobserves.
  ```css
  .reveal{opacity:0;transform:translateY(22px) rotate(var(--rot,0deg))}
  .reveal.in{opacity:1;transform:translateY(0) rotate(var(--rot,0deg));transition:opacity .5s ease,transform .5s cubic-bezier(.2,.8,.25,1)}
  ```
  Each reveal element carries its resting tilt via inline `style="--rot:…deg"` so it settles back to its angle, not flat.
- **Continuous**: the "Collabs open" badge gently jiggles — `@keyframes jig{0%,100%{rotate:-1deg}50%{rotate:1deg}}`, `animation:jig 3.4s ease-in-out infinite`.
- **Hover**: work cards un-rotate + lift + bigger shadow; sticker buttons / contact links nudge + grow shadow.
- `@media(prefers-reduced-motion:reduce)`: `.reveal{opacity:1!important;transform:none!important;transition:none!important}`, kill the jig animation and hover transitions, `scroll-behavior:auto`. If no `IntersectionObserver` (or reduced-motion), add `.in` to all reveals up front.
- Do **not** add motion the page doesn't have (no letterbox/sunburst/typewriter intros).

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework, no Three.js/WebGL.
2. The only external resources are the Google Fonts `<link>` (+ preconnects) and the local `portrait.webp`. No other remote images or assets.
3. Use the exact tokens as CSS variables and the real content above — no lorem, no "passionate about innovation".
4. Responsive 360–1440px: hero grid collapses to one column ~820px (portrait centers, scraps reflow); masonry `columns:3 → 2 → 1`; stat-wall `4 → 2 → 1`. Scraps stack but keep the taped/torn/tilted character.
5. Semantic, accessible: `<header>/<main>/<section>`, a skip link, visible focus (`outline:4px solid var(--accent-2)`), alt text, AA contrast, honor reduced-motion.
6. Add the photo toggle widget + script before `</body>` (verbatim above). Default state On. `sample.png` is taken with photos ON.

**Output: the complete `index.html` and nothing else.**
