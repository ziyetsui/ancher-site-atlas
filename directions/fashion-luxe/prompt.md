# 生成 Prompt — Fashion Luxe（时尚大片）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。本方向是图片主导（image-led）：一张全幅时尚大片撑起整页。唯一的外部资源是同目录的 `portrait.webp` 和一条 Google Fonts `<link>`（Playfair Display + Inter）。

---

You are a senior frontend designer-developer. Generate a single, self-contained `index.html` in the **Fashion Luxe** direction — a glossy fashion-magazine cover translated to the web. Output **only** the HTML file — all CSS in one `<style>` tag, all JS inline. No build step, no frameworks.

## The person (brief)

- **Name**: Sienna Marchetti
- **Role**: Fashion stylist & creative director (Milan / New York)
- **Audience**: fashion houses, magazines, and brands deciding who styles their next editorial or campaign
- **Primary goal**: get them to book her for editorial / campaign styling — a "Book Sienna →" CTA / email
- **Thesis (the angle the whole page serves)**: *"I dress brands and people to be looked at — and remembered."* The page itself should feel like one of her covers.
- **Tone**: assured, glamorous, exact; editorial not salesy; luxury restraint, never loud-for-loud's-sake
- **Proof points (use verbatim — no filler)**:
  - 12 years styling fashion editorial & campaigns
  - 200+ published editorials
  - 2 magazine covers; 1 LVMH house campaign (lead stylist)
  - Featured: *Vogue Italia* cover + 14-page story ("Poolside Mirage", 2024)
- **Page metadata**: `<title>` "Sienna Marchetti — Fashion Stylist & Creative Director"; meta description "Sienna Marchetti dresses brands and people to be looked at — and remembered. Editorial & campaign styling. Vogue Italia, Elle, LVMH."

## Module plan (in this order)

Tag each section's opening tag with `data-module` / `data-variant` exactly as listed. All copy below is the real page copy — use it verbatim, don't invent filler.

1. **`hero` / `split_portrait`** — `<header>`, two-up: a full-bleed editorial photo panel (left) + a cream type panel (right); stacks on mobile (image above type).
   - Photo panel: magenta corner tab top-left "Poolside Mirage · Vogue Italia"; bottom-right white caption "Cover + 14-page story / Photographed in Palm Springs"; a dark top→bottom gradient scrim.
   - Type panel (cream, magenta left border on desktop / top border on mobile): eyebrow "Fashion Stylist · Creative Direction · **Milan / NYC**" (locale in magenta); masthead `<h1>` "Sienna / Marchetti" (name on two lines); italic serif lede "*"I dress brands and people to be looked at — and remembered."*" (the word "remembered" in magenta); role line "Editorial & campaign styling for fashion houses, magazines, and brands."; CTA row: filled "Book Sienna →" (mailto) + ghost-underline "See selected work".

2. **`selected_work` / `featured_case`** — section head "Selected Work" + eyebrow "200+ Editorials · Featured Spread".
   - Featured spread (2-col): photo with magenta "Featured" tab; body = meta "**Vogue Italia** · Cover Story · 2024", title "Poolside Mirage", note "A chrome-and-candy story built around a single pair of sunglasses: mirrored lenses, lacquer reds, and couture-scale earrings shot against desert water. Cover plus a fourteen-page editorial — concept, styling, and on-set direction." + ghost link "Commission a story like this →".
   - Editorial grid (1px-hairline, "lines not cards", 6 tiles each idx · title · publication·year): 01 "Chrome Bloom" — Elle · Beauty · 2024; 02 "Riviera Noir" — Harper's Bazaar · 2023; 03 "Maison Lumière" — LVMH · Campaign · 2023; 04 "Concrete Couture" — i-D · 2022; 05 "After Hours" — Numéro · 2022; 06 "Salt & Silk" — Editorial · 2021. Each tile: top magenta rule grows on hover, arrow "→" fades in.

3. **`logos_press` / `inline`** — ink-black band; eyebrow "As Seen In" (magenta); a wrapping row of serif caps wordmarks: Vogue Italia · Elle · LVMH · Harper's Bazaar · i-D · Numéro.

4. **`metrics` / `stat_row`** — section head "By the Numbers" + eyebrow "Twelve Years on Set"; 4 cells (1px-hairline grid, Playfair 900 numerals, each with a short magenta tick under the number): **12** Years styling · **200+** Published editorials · **2** Magazine covers · **1** LVMH campaign.

5. **`beliefs` / `numbered`** — section head "How I Style" + eyebrow "Four Rules · On & Off Set"; ordered list, 2-col on desktop, each item = magenta serif number + serif title + body:
   - 01 "One idea, dressed to the teeth." — "A story earns one hook — a colour, a silhouette, a single object. Everything else exists to make that one thing unforgettable."
   - 02 "The fitting room is the studio." — "The look is decided before the first frame. I over-prepare so the set can stay loose, fast, and a little dangerous."
   - 03 "Restraint is the luxury." — "Anyone can add. I subtract until only the pieces that have to be there remain — then push one of them too far on purpose."
   - 04 "Dress the person, not the trend." — "Clothes should make the subject more themselves, not more current. Trends date; presence doesn't."

6. **`services` / `list`** — section head "What I Do" + eyebrow "Concept → Final Fitting"; hairline-divided rows (serif name | desc | magenta caps price):
   - "Editorial Styling" — "Concept, mood, and styling for magazine stories — from references and sample pulls to on-set direction and final edit." — *Day & Story Rates*
   - "Campaign & Brand" — "Seasonal campaigns and lookbooks for houses and brands — wardrobe architecture across a full set of looks and channels." — *Project*
   - "Creative Direction" — "Owning the visual world end to end: casting, location, set, and styling pulled into a single, coherent image." — *Retainer*
   - "Personal & Red Carpet" — "Dressing talent for press moments and the carpet — a small, discreet client list, by referral only." — *By Referral*

7. **`testimonials` / `quote_led`** — ink-black band; eyebrow "In Their Words" (magenta); big italic serif quote "Sienna doesn't follow the moodboard — she **becomes** it. The Poolside story shot itself because every look was already a frame." ("becomes" in magenta, upright); attribution "**Giulia Ferri** — Fashion Director, Vogue Italia" (magenta left border).

8. **`credentials` / `pills`** — section head "Recognition" + eyebrow "Awards · Memberships"; pill chips (cream, hairline border, caps): **CFDA** · Emerging Stylist Nominee 2023 · British Fashion Council · Member · Central Saint Martins · BA Fashion · **Vogue Italia** · Cover, 2024 · LVMH Prize · Styling Mentor · Hyères Festival · Jury, 2022 (bold fragments in magenta).

9. **`selected_quotes` / `large_type`** — ink-black, centered; giant magenta serif quote-mark "; uppercase display "Make it **looked at** — and remembered." ("looked at" in magenta); cite "Studio motto, taped to the rack since 2014".

10. **`contact` / `cta_band`** — section head "Let's Make / Something Looked At" (two lines) + eyebrow "Booking · 2026 Season"; italic serif lede "Editorials, covers, and campaigns — concept through final fitting. Tell me the brand, the story, the date."; hairline-divided link rows (key | serif value, slide-right on hover): Email · Booking → book@siennamarchetti.com · Instagram → @sienna.styles · Portfolio → Lookbook PDF →.

11. **Sign-off** (closing `<div class="signoff">`, no data-module tag) — ink-black, centered masthead-scale "Sienna**.**" (period in magenta) + foot "Fashion Stylist & Creative Director · Milan / New York · © 2026". The contact section sets `padding-bottom:0` so it runs flush into the sign-off; the sign-off carries its own top gap (`margin-top:clamp(72px,11vw,var(--section))`, `padding:clamp(54px,9vw,96px) 0 clamp(40px,6vw,60px)`).

## Design direction — Fashion Luxe

**DNA**: The photo *is* the layout — a full-bleed editorial image carries the hero, type sits on it like a cover masthead. Oversized **Playfair Display 900, uppercase, negative tracking** is the logotype; other serif headings stay restrained (700). Cream + ink-black base, mostly grayscale, with a **single hot magenta `#e0218a`** that detonates on exactly one word, one rule, the corner tab, and the CTA — never a fill, never a second accent. Everything is **sharp-cornered (no pills, no rounded cards)** and **divided by 1px hairlines, not boxed in drop-shadow cards** ("lines not cards"): grids/lists are a hairline-colored background showing through 1px gaps between cream cells. Selected work = one big featured spread + a tight 6-up editorial grid; press logos and counts whisper credentials. Photos are desaturated (`grayscale(100%)` + slight contrast) so the one color and the one image do all the talking. Avoid: card grids with drop-shadows, multiple accent colors, rounded pill buttons, centered-everything (only the two ink-black quote bands center), purple gradients.

**Tokens** (define as CSS variables, obey exactly):
- colors: `--canvas:#f7f3ee` · `--surface:#efe9e1` · `--ink:#0d0d0f` · `--ink-muted:#4a4a52` · `--ink-subtle:#8c8a92` · `--cream:#fbf8f3` · `--accent:#e0218a` · `--accent-hover:#b71872` · `--hairline:#ddd5c9` · `--overlay:rgba(13,13,15,0.42)`
- fonts: `--serif:'Playfair Display', Georgia, 'Times New Roman', serif` · `--sans:'Inter', system-ui, -apple-system, sans-serif`
- Google Fonts `<link>` (the only stylesheet besides inline): `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@400;500;600&display=swap`
- spacing tokens: `--section:132px` · `--block:44px` · `--tight:14px`
- body: `background:var(--canvas)`, `color:var(--ink)`, Inter 17px / line-height 1.65, `overflow-x:hidden`, antialiased
- layout: `.wrap` max-width 1180px, padding 0 24px; sections `padding:clamp(72px,11vw,var(--section)) 0`
- section head (`.sec-head`): baseline-aligned flex row (h2 left, eyebrow right), `gap:18px`, wraps; `padding-bottom:26px; margin-bottom:46px; border-bottom:1px solid var(--hairline)` (on ink bands the border is `rgba(251,248,243,.18)`)
- **measure (max-width on prose blocks — set these exactly, they govern line breaks)**: hero lede `30ch` · featured note `42ch` · belief body `44ch` · service desc `46ch` · testimonial quote `22ch` · pullquote text `16ch` · contact lede `24ch`
- **type scale (use these exact `clamp()` expressions)**:
  - hero masthead: Playfair 900 uppercase, `font-size:clamp(44px,12vw,116px)`, line-height .92, letter-spacing -1px
  - hero lede: Playfair italic 400, `clamp(19px,2.4vw,23px)`, max-width 30ch
  - section `h2` (display-md): Playfair 700, `clamp(28px,4.5vw,44px)`, line-height 1.06, -.5px
  - featured title: Playfair 700, `clamp(26px,4vw,40px)`
  - tile title & belief title: Playfair 700, **fixed 23px** (not a clamp), line-height ~1.1
  - press wordmark: Playfair 700 uppercase, `clamp(17px,2.4vw,24px)`, +1px tracking, color `rgba(251,248,243,.74)` (→ full `--cream` on hover)
  - contact lede: Playfair italic 400, `clamp(22px,3.4vw,32px)`, line-height 1.4
  - contact link value (`.clink__v`): Playfair 700, `clamp(18px,2.6vw,26px)`, -.3px
  - metric number: Playfair 900, `clamp(40px,6vw,62px)`, -1px
  - belief number: Playfair 900, `clamp(30px,4vw,44px)`, magenta
  - service name: Playfair 700, `clamp(22px,3vw,30px)`
  - testimonial quote: Playfair italic 400, `clamp(24px,4.4vw,40px)`, max-width 22ch
  - pullquote text: Playfair 700 uppercase, `clamp(28px,5.4vw,56px)`, -1px, max-width 16ch; mark `clamp(60px,12vw,120px)`
  - signoff name: Playfair 900 uppercase, `clamp(40px,13vw,128px)`, line-height .9, -2px
  - eyebrow: Inter 600 uppercase, 12px, letter-spacing 3px; caption Inter 500 12px

## Signature techniques (pure CSS/SVG — load-bearing for the look)

1. **Hero clip-path reveal** — the hero `.u-photo` starts hidden and wipes down on load:
   ```css
   .hero__media .u-photo{filter:grayscale(100%) contrast(1.06);transform:scale(1.08);
     clip-path:inset(0 0 100% 0);
     animation:reveal 1.5s cubic-bezier(.16,.84,.44,1) .15s forwards}
   @keyframes reveal{to{clip-path:inset(0 0 0 0);transform:scale(1.02)}}
   ```
2. **Image scrim** — `.hero__media::after` a vertical gradient for caption legibility: `linear-gradient(180deg,rgba(13,13,15,.25) 0%,rgba(13,13,15,0) 30%,rgba(13,13,15,.55) 100%)`.
3. **Magenta corner tab** — absolutely-positioned `top:0;left:0` chip, `background:var(--accent)`, white Inter 600 11px, letter-spacing 2.5px, uppercase, `padding:9px 16px` (reused as `.featured__num`).
4. **"Lines not cards" grids** — grid/list container is `gap:1px;background:var(--hairline);border:1px solid var(--hairline)`; each cell is `background:var(--cream)` (metrics cells use `background:var(--canvas)`). The 1px hairline shows through. Used for the 6-up editorial grid (1→2→3 cols at 560/920px, `margin-top:64px` below the featured spread), metrics (2→4 at 760px), beliefs (1→2 at 760px), services/contact rows (hairline `border-bottom`). Featured spread is 1-col → 2-col at 820px (`gap:26px`→`46px`).
5. **Hover-grow accent rule** — tiles use `::before{height:3px;width:0;background:var(--accent)}` → `width:100%` on `:hover/:focus-visible` over `.35s cubic-bezier(.2,.7,.3,1)`; the tile cell **also** shifts `background:var(--cream)`→`var(--surface)` on hover (a faint warm darken), and the bottom-right arrow `→` (magenta) fades + slides in from `translateX(-4px)`. The metric tick is a static `26px×3px` magenta bar via `.metric__num::after`, `margin:14px auto 0`.
6. **Sharp CTA + ghost underline** — filled CTA: ink bg, cream text, Inter 600 uppercase 14px +1.5px, `border-radius:0`, `padding:15px 26px`; hover → `background:var(--accent);transform:translateY(-1px)`. Ghost CTA: transparent, `::after` 2px ink underline that turns magenta + text → accent-hover on hover.
7. **Grayscale-to-color on hover** — featured photo: `filter:grayscale(100%) contrast(1.05)` → `grayscale(0%)` + `scale(1.03)` on `.featured__img:hover` (filter .5s, transform .9s).
8. **Ink-black bands** — press / testimonials / pullquote / signoff invert to `background:var(--ink);color:var(--cream)`; their eyebrows go magenta and section-head borders use `rgba(251,248,243,.18)`.
9. **Quote-led inversion** — pullquote uses a giant magenta serif `"` mark (line-height .6) above uppercase display; testimonial attribution sits behind a 3px magenta left border.

## Photo + toggle contract

The page ships a real local portrait (`portrait.webp`, full-bleed hero, **reused** in the featured spread). Default = photos ON; `sample.png` is taken with photos ON.

- Photo `<img class="u-photo">` with a meaningful `alt` (hero: "Sienna Marchetti styling — Poolside Mirage editorial for Vogue Italia: model in oversized pink sunglasses and statement earrings against a poolside scene").
- Fallback (`class="u-fallback cover-fallback"`, `aria-hidden="true"`): a typographic magazine-cover treatment that reads intentionally with no photo — a radial dark ground, "VOL. XII" / "EDITORIAL · CAMPAIGN" top row, an oversized Playfair masthead ("Looked *at*." / hero, "Poolside *Mirage*" / featured) with the second word in magenta, a 3px magenta rule, and a caps bottom row. Lives behind every `.u-photo`.
- Contract CSS:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  body.no-photos .cover-fallback{display:flex !important}  /* scoped flex restore */
  ```
- Toggle (fixed bottom-right pill) — include verbatim:
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```
  ```css
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```

## Motion

- **Hero image reveal** on load: the `clip-path:inset(0 0 100% 0)` → `inset(0 0 0 0)` wipe + `scale(1.08)`→`scale(1.02)` over 1.5s `cubic-bezier(.16,.84,.44,1)` with .15s delay (recipe #1 above). This is the only entrance animation that fires without scroll.
- **Scroll fade-up**: elements with class `.fade` start `opacity:0;transform:translateY(22px)` and transition to `opacity:1;transform:none` over `.7s` (opacity `ease`, transform `cubic-bezier(.16,.84,.44,1)`) when an `IntersectionObserver` adds `.in`. Observer: `threshold:0.16`, `rootMargin:'0px 0px -8% 0px'`, `unobserve` after first reveal. If no IO support or reduced-motion, add `.in` to all immediately.
- **`prefers-reduced-motion:reduce`**: disable all animations/transitions, cancel the hero clip/scale (`clip-path:none;transform:none`), and force `.fade{opacity:1;transform:none}`. No other continuous motion (no marquee, no letterbox bars, no sunburst — don't add motion the page doesn't have). Hover transitions (CTA, tiles, photo grayscale, link slide) are CSS-only.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework, no Three.js/WebGL.
2. **Only** external resources allowed: the Google Fonts `<link>` and the one local image `portrait.webp` (sits next to `index.html`). No other remote images or assets.
3. Use the exact tokens above as CSS variables; obey them. Real content from this brief — no lorem, no "passionate about innovation".
4. Implement the photo slot with `portrait.webp` + the photo+toggle contract; default photos ON; the no-photos fallback must still read as a designed magazine cover.
5. Responsive 360–1440px, mobile-first; semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<ol>`, `<blockquote>`); accessible — sufficient contrast, visible `:focus-visible` outline (2px magenta), real `alt`, honor `prefers-reduced-motion`.
6. Tag every section with `data-module` / `data-variant` as listed in the Module plan. Looks designed by a senior fashion-magazine art director — clearly distinct from the minimal / brutalist / mono directions.

**Output: the complete `index.html` and nothing else.**
