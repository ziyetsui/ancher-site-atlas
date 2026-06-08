# 生成 Prompt — Y2K Vapor（千禧赛博）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**（外加同目录一张 `portrait.webp` 真人肖像，以及一条 Google Fonts `<link>`），效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer with a strong point of view on Y2K / vaporwave aesthetics. Generate a single self-contained `index.html` in the **Y2K Vapor** direction — a dark, chrome-and-neon DJ press kit that feels like an early-2000s media player left running until 3am. Output **only** the HTML file — all CSS in one `<style>` tag, all JS inline. No build step, no frameworks, no WebGL/Three.js/canvas.

## The person (brief)

- **Name**: Vex Romero
- **Role**: DJ & electronic music producer
- **Audience**: record labels, club bookers, and fans
- **Primary goal**: get visitors to listen, then book or follow
- **Thesis (the angle the whole page serves)**: *"Sound for 3am rooms and neon highways."* The page should feel like a late-night media player — chrome, neon, motion — not a résumé.
- **Tone**: nocturnal, confident, cinematic, a little retro-futurist
- **Genre line**: Electronic · House · After-hours techno
- **Proof points (use these, concretely — no filler)**:
  - 3 EPs released — *Chrome Mirage* (2022, 6 tracks), *Neon Arterial* (2023, 5 tracks), *3AM Protocol* (2024, 7 tracks)
  - 2M+ cumulative streams · 2 residency cities · 06+ years on the decks
  - Residencies: Tresor, Berlin · Contact, Tokyo
  - Tracks supported on late-night radio and club rotation
- **Links / contact**: booking email `booking@vexromero.com`; Spotify / SoundCloud; `@vexromero`
- **Brand mark**: `VEX·ROMERO` (the `·` is magenta and glows). Footer: `© 2026 Vex Romero — Built for the after-hours.`

## Module plan (in this order)

Tag each section's opening tag with `data-module` / `data-variant` exactly as below. Each section is a centered `.wrap` (max-width 1180px). Numbered sections lead with a `.section-label`: mono `num` + chrome `<h2>` + a fading hairline `rule`. **Section anchor `id`s** (some differ from the nav targets): hero `#top`, work `#work`, metrics `#metrics`, story `#story`, beliefs `#ethos`, experience `#live`, tools `#rig`, testimonials `#press`, selected_quotes `#motto`, contact `#contact`.

1. **Top nav** (not a tagged module): brand `VEX·ROMERO` left; mono uppercase links right — `Releases / Numbers / Story / Live / Book` (`#work #metrics #story #live #contact`). Nav links hide < 880px.
2. `hero` · `data-variant="split_portrait"` — two-column grid (`1.05fr .95fr`, `gap:48px`, `align-items:center`); the hero section itself is `padding-top:48px;padding-bottom:var(--section)` (not the default `--section` top). **Left:** mono eyebrow `DJ · Producer · Berlin ⇄ Tokyo`; oversized chrome glitch `<h1>` on two lines `VEX` / `ROMERO`; lede `Sound for 3am rooms and neon highways.` (in a cyan→magenta gradient); mono line `Electronic · House · After-hours techno`; CTA row `▶ Listen now` (primary, → `#work`) + `Book a set` (ghost, → `#contact`). **Right:** the portrait stage (see Photo contract) with a mono tag pill `LIVE · 3AM SET` (the `LIVE` in cyan) anchored bottom-left, slightly overhanging the frame (`left:-10px;bottom:18px`).
3. `selected_work` · `data-variant="grid"` — label `01 / Selected Releases`. 3-col grid of glass release cards. Each card: a square `cover` (CSS gradient bg, a glowing neon `ring` with a dark center disc, a big chrome ordinal `01/02/03`, a circular ▶ `play` button bottom-right) + meta (`<h3>` title, mono sub, `Listen →`). Whole card is a focusable link → `#contact`. Titles/subs: **Chrome Mirage** — `EP · 2022 · 6 tracks`; **Neon Arterial** — `EP · 2023 · 5 tracks`; **3AM Protocol** — `EP · 2024 · 7 tracks`.
4. `metrics` · `data-variant="stat_row"` — label `02 / By the Numbers`. 4 glass stat blocks, big chrome numbers + mono labels: **2M+** Cumulative streams · **3** EPs released · **2** Residency cities · **06+** Years on the decks. Below, centered mono caption: `Residencies — Tresor, Berlin · Contact, Tokyo`.
5. `story` · `data-variant="quote_led"` — label `03 / The Origin Mix`. Two-col grid (`.85fr 1.15fr`). Left = big chrome display quote: `I learned the city by ear — every overpass had a frequency.` (`by ear` in a cyan→magenta gradient). Right = 3 body paragraphs (body in `--ink-muted`, `max-width:54ch`; `strong` = brighter `--ink` at `font-weight:500`, *not* bold):
   1. "Vex started on a cracked controller and a stolen copy of a tracker, looping basement field recordings against four-on-the-floor until 6am. The bedroom became a **lab for the after-hours** — chrome pads, tape hiss, and a refusal to let a record resolve too soon."
   2. "The first residency came from a flyer pinned to a Berlin laundromat wall. The second came from a recording that leaked off a USB stick in Tokyo. Somewhere between the two cities a sound settled: **neon-lit, nocturnal, and built to be played loud at the wrong hour.**"
   3. "Today the project is one person, three EPs, and a standing invitation to keep the room moving until the lights come up."
6. `beliefs` · `data-variant="numbered"` — label `04 / Booth Doctrine`. 2-col grid of 4 glass cards, each with a chrome ordinal `01–04`, an uppercase `<h3>`, a line of body:
   - 01 **Read the room, not the rider** — "The crowd writes the set list. The plan is a starting key, never a cage."
   - 02 **Tension before release** — "A drop only lands if the floor has been made to wait for it. Patience is the bassline."
   - 03 **Loud is a craft, not a crutch** — "Volume earns its level. Every frequency has to justify the space it takes."
   - 04 **The night owns the records** — "Tracks are made for 3am rooms first. If it works at noon, that's a bonus."
7. `experience` · `data-variant="timeline"` — label `05 / Live & Residencies`. A vertical timeline (cyan→magenta gradient spine, glowing dot nodes). 4 items, each: mono cyan `when` + uppercase `<h3>` + mono `org` + body:
   - `2024 — Present` · **3AM Protocol Tour** · `Europe · Asia · 22 cities` · "Headline all-night sets supporting the third EP, from warehouse rooms to rooftop closing slots."
   - `2023 — Present` · **Monthly Resident** · `Contact · Tokyo` · "Last-Friday after-hours residency. Open-to-close on the back room rig, no support, no setlist."
   - `2022 — 2023` · **Resident DJ** · `Tresor · Berlin` · "Held down the 4am slot for fourteen months and learned how a room breathes at sunrise."
   - `2020 — 2022` · **Basement Sets** · `Underground · Berlin` · "Unlicensed parties and laundromat-flyer gigs. The lab years that defined the sound."
8. `tools` · `data-variant="stack_list"` — label `06 / The Rig`. 2-col grid of 4 chip groups (mono uppercase group headings + neon chip pills):
   - **Booth**: `CDJ-3000 ×4`, `DJM-A9`, `Rotary V10`, `RMX-1000`
   - **Studio**: `Ableton Live`, `TR-8S`, `Juno-106`, `Moog Sub 37`, `Eurorack`
   - **Color**: `Tape saturation`, `Spring reverb`, `Field recordings`
   - **Distribution**: `Spotify`, `SoundCloud`, `Bandcamp`
9. `testimonials` · `data-variant="quote_led"` — label `07 / From the Floor`. 2-col grid of 4 glass quote cards (the opening `“` is a glowing magenta display glyph). Cite = mono cyan name + ink-subtle role line:
   - "Vex doesn't play tracks, they play the room — by 4am nobody remembered the door, the coats, or what day it was." — **Mara Voss**, Booker · Contact, Tokyo
   - "One of the few residents who can hold a closing set for three hours and never let the tension drop. Chrome and patience." — **D. Keller**, Floor Manager · Tresor, Berlin
   - "3AM Protocol is the rare after-hours record that sounds like the city at the hour it was named for. Essential." — **Night Frequencies**, Editorial · electronic press
   - "Booked once on a whim from a leaked USB stick. Rebooked every quarter since. The floor asks for the date." — **Lukas R.**, Promoter · Warehouse series
10. `selected_quotes` · `data-variant="large_type"` — no label. One centered oversized chrome display quote (max ~24ch): `Make them wait for the drop, then make them forget the clock.` (`wait` and `forget` in a cyan→magenta gradient). Cite below: `— Vex Romero`.
11. `contact` · `data-variant="cta_band"` — a single glass `contact-card` (neon-edged, magenta inner glow). Eyebrow `Bookings open`; chrome `<h2>` `Let's light up` / `a 3am room.`; body "Labels, clubs, festivals — send the date and the city. Sets run 90 minutes to all-night. Press kit and rider on request."; centered CTA row `Email bookings` (→ `mailto:booking@vexromero.com`) + `Hear the records` (→ `#work`); mono socials line (`--ink-subtle`) `booking@vexromero.com · Spotify / SoundCloud · @vexromero` — `Spotify / SoundCloud` and `@vexromero` are `--ink-muted` links (placeholder `href="#top"`, hover → cyan), `booking@vexromero.com` is plain text.

## Design direction — Y2K Vapor

**DNA**: Dark base + chrome/metallic gradient text + neon (cyan/magenta) + a receding perspective grid + drifting liquid blobs + subtle glitch + scanline shimmer + faint SVG noise. Early-2000s media-player / vaporwave nostalgia. **Hierarchy comes from glow, contrast and depth — never from plain boxes.** Panels are dark translucent glass (`backdrop-filter:blur`), edged with hairlines and lifted by **soft neon glows and inset glows** (box-shadow does heavy lifting — this style *relies* on shadow, do not strip it). All soft-3D / glass / chrome effects are **pure CSS** (gradients, box-shadow, backdrop-filter, transforms, text-shadow, masks, blend modes). NO WebGL/Three.js/canvas. Avoid: light mode, flat corporate SaaS, generic centered purple hero.

**Tokens** (define as CSS variables, obey exactly):

```css
:root{
  --base:#06060c; --base-2:#0c0a18;
  --panel:rgba(18,16,34,0.55);
  --chrome-hi:#f4f7ff; --chrome-lo:#7e87a8;
  --ink:#e8ecff; --ink-muted:#9aa0c7; --ink-subtle:#5b5f86;
  --cyan:#00e5ff; --magenta:#ff2bd6;
  --grid:rgba(0,229,255,0.22);
  --hairline:rgba(120,130,200,0.18);
  --section:128px; --block:44px; --tight:16px;
  --r-sm:6px; --r-md:16px; --r-lg:28px;
  --font-display:'Orbitron','Space Grotesk',sans-serif;
  --font-body:'Space Grotesk',system-ui,sans-serif;
  --font-mono:'Space Mono',ui-monospace,monospace;
}
```

- **Fonts** — one Google Fonts `<link>` (the only stylesheet dependency):
  `https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800;900&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap`
- **Body**: `--font-body`, `17px/1.6`, `--ink` on `--base`, antialiased, `overflow-x:hidden`.
- **Type scale (use these exact `clamp()` expressions for fluid sizing):**
  - hero `h1`: `--font-display` 800 uppercase, `clamp(48px,9vw,92px)`, `line-height:.9`, `letter-spacing:2px`
  - section `h2` (in label): `--font-display` 700 uppercase, `clamp(20px,3.4vw,30px)`
  - lede: `clamp(19px,2.3vw,22px)`, `--ink-muted`, `max-width:30ch`
  - story quote: `--font-display` 800 uppercase, `clamp(24px,3.4vw,38px)`, `line-height:1.08`
  - stat number: `--font-display` 800, `clamp(34px,5vw,46px)`
  - big quote: `--font-display` 800 uppercase, `clamp(28px,5.4vw,56px)`, `line-height:1.02`
  - contact `h2`: `--font-display` 800 uppercase, `clamp(28px,5vw,52px)`; contact-card padding `clamp(34px,6vw,64px)`
  - fallback monogram: `clamp(90px,16vw,150px)`
  - eyebrow: `--font-mono` 700, `12px`, `letter-spacing:4px`, uppercase, `--cyan` + `text-shadow:0 0 12px rgba(0,229,255,.5)`
- **Spacing**: `section{padding-block:var(--section)}` (88px < 880px). Section labels sit `--block` above content (`.section-label{margin-bottom:var(--block)}`, gap `14px`).
- **Grid gaps** (load-bearing — set these exactly): release grid `gap:22px`; metrics `gap:18px`; story grid `gap:48px` (`28px` < 880px); beliefs `gap:18px`; tools `.stack` `gap:14px 40px`; testimonials `gap:22px`; hero grid `gap:48px` (`40px` < 880px). The metrics caption sits `margin-top:28px;text-align:center`.

## Signature techniques (pure CSS/SVG)

1. **Chrome text** (`.chrome`, clipped gradient + drop-shadow):
   ```css
   .chrome{background:linear-gradient(180deg,#fff 0%,#cdd6f5 38%,#7e87a8 52%,#eef3ff 70%,#9fb6ff 100%);
     -webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;
     filter:drop-shadow(0 1px 0 rgba(0,0,0,.4));}
   ```
   Secondary chrome variants (stat number, ordinals, contact h2): `linear-gradient(180deg,#fff,#9fb6ff)` clipped, with a soft cyan text-shadow. Gradient-em accents (lede `em`, quote `.em`): `linear-gradient(90deg,var(--cyan),var(--magenta))` clipped to text.
2. **Glitch hero title** (`.glitch` with `data-text`): two `::before`/`::after` copies cloned via `content:attr(data-text)`, color-filled cyan / magenta, `mix-blend-mode:screen`, `opacity:.55`, each clip-path-sliced on its own keyframe (`glitchA` / `glitchB`, `3.6s steps(2,end) infinite`) that fires only in the 72–82% window — a brief stutter, then rest.
3. **Perspective grid floor** (fixed layer, `z-index:-2`):
   ```css
   .grid-floor{position:fixed;left:-20%;right:-20%;bottom:-12%;height:62vh;
     background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);
     background-size:46px 46px;transform:perspective(420px) rotateX(70deg);transform-origin:50% 100%;
     -webkit-mask-image:linear-gradient(to top,#000 0%,rgba(0,0,0,.5) 36%,transparent 78%);
     mask-image:linear-gradient(to top,#000 0%,rgba(0,0,0,.5) 36%,transparent 78%);opacity:.9;}
   ```
   Plus a `::after` horizon glow: a 2px blurred `linear-gradient(90deg,transparent,var(--cyan),var(--magenta),transparent)` line.
4. **Background gradient** (fixed `.bg`, `z-index:-3`): `radial-gradient(120% 80% at 50% -10%, #14102e 0%, var(--base-2) 42%, var(--base) 78%)`.
5. **Drifting liquid blobs** (3 fixed radial-gradient divs, `filter:blur(70px)`, `opacity:.35–.5`): magenta top-left, cyan top-right, violet `#6a2bff` bottom — each animated with slow `drift1`/`drift2` keyframes (`22–30s ease-in-out infinite`, translate + scale).
6. **Scanlines + noise overlays** (fixed, `z-index:-1`, `pointer-events:none`): scanlines = `repeating-linear-gradient(to bottom,rgba(255,255,255,.05) 0 1px,transparent 1px 3px)`, `mix-blend-mode:overlay`, `opacity:.5`, slow `scan` background-position animation (`7s linear`, `0 0` → `0 120px`); noise = an inline `feTurbulence` (`type='fractalNoise' baseFrequency='0.9' numOctaves='2'`) SVG data-URI, `opacity:.04`.
7. **Glass panels** (cards, stats, beliefs, testimonials, contact): `background:var(--panel);backdrop-filter:blur(6px);border:1px solid var(--hairline);border-radius:var(--r-md)`, with an **inset neon glow** (`box-shadow:inset 0 0 40px -28px var(--cyan)` / `... var(--magenta)`). Hover lifts the card (`translateY(-4–6px)`), warms the border to cyan/magenta, and adds an outer neon glow.
8. **Neon button choreography**: pill buttons (`border-radius:999px`, mono uppercase). Primary = chrome gradient fill `linear-gradient(180deg,#fff,#cdd6f5 45%,#9fb6ff)`, dark text, layered cyan glow shadows; hover `translateY(-2px)` + stronger glow. Ghost = magenta hairline border on faint magenta tint; hover brightens border + `box-shadow:0 0 26px -8px var(--magenta)`.
9. **Release cover ring**: a 62%-wide circle with `box-shadow:0 0 30px -8px var(--cyan),inset 0 0 40px -16px var(--magenta)`, a dark inset disc via `::after`, and a chrome ordinal centered on top — a faux vinyl/CD label.

## Photo + toggle contract

The page **ships a real local portrait** (`portrait.webp`, a high-contrast black-and-white mosaic face). Default = photos ON; `sample.png` is taken with photos ON.

- Hero portrait stage (4/5 aspect): a glass `portrait-frame` (class includes `u-photo`) holding `<img class="u-photo" src="portrait.webp" alt="Vex Romero — high-contrast black-and-white mosaic portrait" loading="eager">`. The image is treated: `filter:grayscale(1) contrast(1.15) brightness(.95);mix-blend-mode:luminosity`. The frame carries layered neon edge glow (`box-shadow:0 0 0 1px rgba(0,229,255,.25),0 30px 80px -30px #000,0 0 60px -12px var(--magenta),inset 0 0 60px -20px rgba(0,229,255,.4)`), a `::after` duotone+scanline overlay, and a `::before` sweeping glitch slice animation (`sweep 5.5s linear infinite`).
- Fallback (shown when photos OFF): a `u-fallback mono-portrait` chrome monogram **VR** + caption `Vex Romero` on a cyan/magenta radial-gradient glass card, same frame glow. Scope its restore so it lays out as a grid:
  ```css
  body.no-photos .portrait-stage .u-fallback.mono-portrait{display:grid !important}
  ```
- Standard toggle CSS:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
- Verbatim markup + script before `</body>` (default On):
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```

## Motion

- **Reveal on scroll**: section labels, cards, list items, etc. get `.reveal{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}` → `.reveal.in{opacity:1;transform:none}`. An `IntersectionObserver` (`threshold:.16`) adds `.in` once then unobserves; if `IntersectionObserver` is unsupported, reveal everything immediately.
- **Continuous (CSS-only)**: blob drift (`22–30s`), scanline scroll (`scan 7s linear`), hero title glitch (`3.6s`, brief stutter window), portrait sweep slice (`5.5s`).
- **`prefers-reduced-motion: reduce`**: kill blob / scanline / glitch / sweep animations (`animation:none`), set glitch `::before`/`::after` to `opacity:0`, and disable reveal transitions (`.reveal{opacity:1;transform:none;transition:none}`). No promised motion the page doesn't ship — no letterbox bars, no sunburst, no parallax scroll-jacking.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework.
2. The **only** external resources are the one Google Fonts `<link>` and the local `portrait.webp` next to the file. No remote images, no Three.js/WebGL/heavy canvas. All chrome/glass/3D = pure CSS.
3. Responsive 360–1440px (stacks to 1-col < 880px; metrics → 2-col then 1-col < 420px; nav links hide < 880px). Semantic HTML; accessible — sufficient contrast, visible focus rings (`outline:2px solid var(--cyan)`), real `alt`, `aria-hidden` on decorative layers; honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tasteful, committed motion. Bold and unmistakably vaporwave — not AI-generic.

**Output: the complete `index.html` and nothing else.**
