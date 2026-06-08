# 生成 Prompt — Art Deco（装饰艺术）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，唯一外部资源是一张本地 `portrait.webp` 和一个 Google Fonts `<link>`，效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer with a love of 1920s graphic design. Generate a single, self-contained `index.html` in the **Art Deco** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no framework, no WebGL. Every decorative element (sunbursts, fans, frames, linework) is pure CSS/SVG. The only external resources are the Google Fonts `<link>` and a local `portrait.webp`.

## The person (brief)

- **Name**: Evariste Laurent
- **Role**: Keynote speaker & author — "Narrative Leadership"
- **Audience**: conference programmers and Fortune-500 executive teams
- **Primary goal**: get a visitor to book him for a talk (a single, prominent "Book a Keynote →" action)
- **Thesis (the line the whole page serves)**: *"I help leaders tell the one story their company is actually about."*
- **Tone**: ceremonial, assured, theatrical but precise — a man who has commanded large rooms
- **Proof points (use concretely — no filler)**:
  - 200+ keynotes in 30 countries
  - 2 books on narrative leadership
  - TEDx ("The One-Sentence Company")
  - Advises Fortune-500 comms teams ("500")
- **Email**: book@evaristelaurent.com · **Links**: Speaking Reel, LinkedIn
- **Closing motto**: *"Say the one thing, and say it once."* — the line that opens every keynote
- **Footer**: `Evariste Laurent · MCMXXV`

## Module plan (in this order)

Tag each section's opening tag with `data-module` / `data-variant` exactly as below. Use the verbatim copy.

1. `hero` / `bold_statement` — centered. Eyebrow "Keynote Speaker · Author"; name **Evariste / Laurent** (line-broken) in tall wide-tracked Deco caps; role "Narrative Leadership"; a diamond deco-rule; italic thesis *"I help leaders tell the one story their company is actually about."*; the framed portrait (gold geometry + crowning sunburst); CTA `Book a Keynote →` → `#contact`.
2. `credentials` / `big_numerals` — eyebrow "On the Record", title **Credentials**. 4-cell hairline grid: `200+` / Keynotes in 30 Countries · `2` / Books on Narrative Leadership · `TEDx` / The One-Sentence Company · `500` / Advises Fortune-500 Comms Teams.
3. `selected_work` / `list` — eyebrow "From the Stage", title **Selected Talks**. Hairline-ruled list, title (Deco caps) left, venue · year right (the **year** flips to gold `--accent` and `font-style:normal` with `letter-spacing:1px`, breaking out of the italic meta):
   - The One-Sentence Company — TEDx · 2023
   - When the Stage Goes Quiet — World Economic Forum · 2024
   - Narrative as Strategy — SXSW Keynote · 2022
   - The Story Beneath the Numbers — Fortune CEO Summit · 2024
4. `testimonials` / `quote_led` — eyebrow "In Their Words", title **Testimonials**. 2 centered italic pull-quotes in gold corner-bracket frames:
   - "Evariste rewired how our entire leadership team talks about who we are." — VP Communications · Fortune-100 Enterprise
   - "The only keynote our delegates were still quoting on day three." — Conference Director
5. `metrics` / `stat_row` — eyebrow "By the Figures", title **In Numbers**. 3 hairline-divided stats: `94%` of organisers re-book within two years · `1.2M` copies sold across two editions · `38 min` average standing ovation to follow.
6. `beliefs` / `numbered` — eyebrow "What I Hold To", title **The Creed**. Roman-numeral (upper-roman) ordered list, bolded italic gold keywords:
   - A company has **one** true story; strategy is the work of finding it.
   - If the room can't **repeat** it by morning, it was never the message.
   - Numbers persuade the head; **narrative** moves the feet.
   - Edit until a single sentence carries the **whole** weight.
7. `selected_quotes` / `large_type` — diamond deco-rule, large Deco-caps blockquote **Say the one thing,<br>and say it once.** (no surrounding quote marks; line-broken on the comma), cite "— the line that opens every keynote", closing diamond deco-rule.
8. `speaking` / `list` — eyebrow "On the Circuit", title **Upcoming & Recent**. List rows: e-name (Deco caps) + italic e-kind sub-line, place · MONTH-YEAR right:
   - The One-Sentence Company / Davos Leadership Forum · Mainstage — Geneva · JAN 2026
   - Narrative as Strategy / The Long Story · Podcast, ep. 112 — Remote · NOV 2025
   - Founding the Message / Workshop for Series-B Founders — London · SEP 2025
8b. `currently_building` / `now_block` — eyebrow "As of This Season", title **Now**. Roman-numeral list (reuses the creed style, restarting at I via `counter-reset:creed`, bolded gold keywords):
   - Writing the **third** book — on the sentences companies are afraid to say.
   - Touring a new keynote, **"When the Stage Goes Quiet."**
   - Coaching five executive teams toward their **one true line.**
9. `writing` / `list` — eyebrow "From the Desk", title **Essays**. Hairline list, italic title left, source right:
   - The Sentence a Company Is Afraid to Say — Harvard Business Review
   - Why Your Strategy Deck Has No Hero — The Atlantic
   - Editing for the Standing Ovation — Journal · 2025
10. `services` / `list` — eyebrow "Ways to Work Together", title **Engagements**. 3-cell hairline grid, gold Deco-caps `h3` + serif `p`:
    - The Keynote — A 45-minute mainstage address, tailored to your moment and rehearsed against your story.
    - The Intensive — A half-day with your leadership team to find and sharpen the one sentence you're really about.
    - The Advisory — A standing seat at your comms table through a launch, a pivot, or an inflection.
11. `faq` / `two_column` — eyebrow "Before You Ask", title **Questions**. Two-column hairline Q&A:
    - How early should we book? — Three to six months is ideal; tailoring a keynote to your story takes time, and the calendar fills.
    - Will you customise the talk? — Always. Every keynote is rebuilt around your industry, your moment, and the sentence you suspect you're about.
    - Do you travel internationally? — Gladly. Two hundred keynotes across thirty countries; the stage is wherever the room is.
    - Can you work virtually? — Yes — broadcast keynotes and remote intensives are designed to carry the same charge as the room.
12. `logos_press` / `mentioned_in` — eyebrow "Seen & Heard", title **As Featured In**. Horizontal hairline-separated Deco-caps list: The Times · Forbes · Monocle · HBR · BBC.
13. `contact` / `cta_band` (`id="contact"`) — closing sunburst behind. Eyebrow "Take the Stage", title **Book a Keynote**, diamond rule, italic invite *"Tell me the room, the moment, and the story you suspect your company is really about. I'll do the rest."*, the email as a gold underlined link `book@evaristelaurent.com`, then links: Speaking Reel · LinkedIn.

(Then the `<footer>`: `Evariste Laurent · MCMXXV`.)

## Design direction — Art Deco

**DNA**: a theatrical 1920s stage in deep emerald + brass gold. Strict bilateral symmetry — everything centered and framed, like a proscenium / theatre-programme cover. Gold is **line and inlay only** (hairline borders, inset linework, sunburst rays) — never a flat gold fill. Ornament is **geometric** (sunburst, fan, stepped/ziggurat corners, diamond), never floral. Two-font duet: tall airy Deco capitals announce; an elegant italic serif speaks. Square corners (radius 0–2px); buttons are thin gold-outlined rectangles, not pills. The structural device throughout is **hairline rules and dividers, not cards** — rows separated by `1px` gold hairlines, grids built from `border-left`/`border-top` cell dividers. Depth uses **hard, blur-free inset `box-shadow`** (double-frame inlays), not soft drop-shadows. Avoid: asymmetric layouts, card grids, soft drop-shadows/blur, floral ornament, flat gold blocks, purple gradients.

**Tokens** (define as CSS variables, obey exactly):

```css
--canvas:#0c1c17; --surface:#102a22; --surface-raised:#15362b;
--ink:#f4ecd8; --ink-muted:#c4bfa8; --ink-subtle:#8a967f;
--accent:#c8a253; --accent-bright:#e6c878; --accent-deep:#8a6a2e;
--emerald-line:#2a5142; --hairline:rgba(200,162,83,0.28);
--f-display:'Poiret One','Cinzel',serif;        /* Deco caps: display, eyebrow, numeral, buttons */
--f-body:'Cormorant Garamond',Georgia,serif;    /* serif body + italic lede */
--section:132px; --block:44px; --tight:18px;
```
- Page max width `.wrap{max-width:1040px;padding:0 28px}`. Body `font-size:20px; line-height:1.62; overflow-x:hidden`.
- Google Fonts `<link>` (the only font resource):
  `https://fonts.googleapis.com/css2?family=Poiret+One&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&display=swap`
- Type scale (use these REAL clamp() expressions, all Poiret caps unless noted):
  - name `clamp(40px,9vw,88px)`, letter-spacing 14px, line-height .98, `padding-left:14px` (optically recenter tracking)
  - hero role (Poiret caps, gold `--accent`) `clamp(11px,2.4vw,15px)`, ls 7px
  - sec-title `clamp(24px,4.6vw,40px)`, ls 8px, `padding-left:8px` (optically recenter tracking)
  - thesis/lede (Cormorant italic 500) `clamp(20px,3.6vw,27px)`, line-height 1.45
  - eyebrow 13px, ls 6px
  - cred numeral `clamp(38px,6vw,56px)`; stat numeral `clamp(34px,5.4vw,52px)`
  - quote (Cormorant italic) `clamp(21px,3.4vw,28px)`; large-type motto (Deco caps, ls 6px) `clamp(24px,5vw,46px)`
  - creed roman numeral `clamp(20px,3vw,28px)`; creed text (Cormorant) `clamp(18px,2.6vw,22px)`
  - section padding `var(--section) 0`; sec-head margin-bottom `var(--block)`.

## Signature techniques (pure CSS/SVG)

1. **Page gold frame** — fixed full-page inlay: `body::before{position:fixed;inset:14px;border:1px solid var(--hairline);box-shadow:inset 0 0 0 4px transparent, inset 0 0 0 5px rgba(200,162,83,0.10);pointer-events:none;z-index:50}`.
2. **Sunburst (no SVG)** — radial gold rays via masked conic gradient:
   ```css
   .sunburst{position:absolute;border-radius:50%;opacity:.5;pointer-events:none;
     background:repeating-conic-gradient(from 0deg, var(--accent) 0deg 1.4deg, transparent 1.4deg 9deg);
     -webkit-mask:radial-gradient(circle, transparent 18%, #000 19%, #000 49%, transparent 50%);
             mask:radial-gradient(circle, transparent 18%, #000 19%, #000 49%, transparent 50%);}
   ```
   Used at three sizes: hero-sun (780px, top:-340px, opacity .32), portrait-sun (300px, crowning the frame, opacity .6), contact-sun (560px, opacity .22). Hero background also: `radial-gradient(120% 80% at 50% -10%, var(--surface) 0%, var(--canvas) 70%)`.
3. **Diamond deco-rule** — centered divider: a flex row, `::before/::after` are `1px` lines `linear-gradient(90deg,transparent,var(--accent),transparent)`, center `.diamond{width:9px;height:9px;background:var(--accent);transform:rotate(45deg);box-shadow:0 0 0 4px var(--canvas),0 0 0 5px var(--hairline)}`.
4. **Double gold portrait frame** — hard blur-free inlay shadows:
   `.portrait-frame{padding:14px;background:var(--surface-raised);border:1px solid var(--accent);box-shadow:inset 0 0 0 6px var(--canvas), inset 0 0 0 7px var(--hairline), 0 0 0 7px var(--canvas), 0 0 0 8px var(--hairline)}`. Image `aspect-ratio:3/4;object-fit:cover;object-position:center 30%;filter:sepia(.18) saturate(.92) contrast(1.02)`.
5. **Stepped deco corners** — L-shaped brackets via pseudo-elements: `width:26px;height:26px;border:1px solid var(--accent)`, then top-left `{border-right:0;border-bottom:0}` and bottom-right `{border-left:0;border-top:0}` (offset ±9px). Same trick frames each testimonial figure (34px).
6. **"Lines, not cards" grids** — credentials/services/metrics are CSS grids with `gap:0`, top+bottom `1px var(--hairline)` and `.cell + .cell{border-left:1px solid var(--hairline)}`; list rows separated by `border-top:1px solid var(--hairline)` (+ last child `border-bottom`). In the talk/speaking right-hand meta the venue text is italic `--ink-subtle`, but the trailing **year** (`.yr`) flips to gold `--accent`, `font-style:normal`, `letter-spacing:1px` — the one accent pop per row.
7. **Roman-numeral creed** — `counter-reset:creed` on the `<ol>`, `li::before{content:counter(creed,upper-roman)}` in Deco caps gold, two-col grid `auto 1fr`.
8. **Gold-outline button choreography** — `.btn-deco{border:1px solid var(--accent);background:transparent;box-shadow:inset 0 0 0 4px var(--canvas), inset 0 0 0 5px var(--hairline);letter-spacing:5px;transition:background .35s, color .35s, letter-spacing .35s}` → `:hover{background:var(--accent);color:var(--canvas);letter-spacing:7px}` (fills + widens tracking).

## Photo + toggle contract

The page ships a real local portrait. Do NOT replace it with CSS/SVG/initials, and do NOT remove the Google Fonts link.

- Portrait `<img src="portrait.webp" alt="Portrait of Evariste Laurent, keynote speaker and author, in vintage styling" width="600" height="800">` inside `.portrait-frame.u-photo`, placed in the hero gold geometry. Default = photos ON.
- Typographic fallback `.portrait-frame.u-fallback` (aria-hidden): a `.monogram` medallion — Deco-caps **EL** (Poiret 84px gold-bright) over `Evariste Laurent` small-caps, on a faint conic sunburst over `--surface`.
- Verbatim toggle CSS:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  body.no-photos .u-fallback.portrait-frame{display:grid !important}
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
- Verbatim toggle HTML/JS before `</body>`:
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```

## Motion

One effect only — a gentle scroll reveal. There is **no** "sunburst unfurl" or "letterbox" animation; the sunbursts are static.

- `.reveal{opacity:0;transform:translateY(26px);transition:opacity .9s ease, transform .9s ease}` → `.reveal.in{opacity:1;transform:none}`.
- IntersectionObserver adds `.in` once visible, then `unobserve`s: `{threshold:0.16, rootMargin:'0px 0px -8% 0px'}`. Apply `.reveal` to each section's `.sec-head` and content block.
- `html{scroll-behavior:smooth}`. Under `prefers-reduced-motion:reduce`: scroll-behavior auto, `.reveal` shown with no transition, button transition off; the JS short-circuits and reveals everything immediately (also when no IntersectionObserver).

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework. Only external resources allowed: the Google Fonts `<link>` and the local `portrait.webp`.
2. **No** Three.js/WebGL/heavy canvas — all Deco geometry via CSS gradients, masks, box-shadow, transforms (and inline SVG if needed).
3. Responsive 360–1440px (the `@media (max-width:760px)` collapses the 4/3-col grids to 2/1-col and stacks list rows); semantic HTML; accessible (contrast, visible focus rings `outline:2px solid var(--accent-bright)`, alt text); honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tag every section with its `data-module`/`data-variant`. Commit hard to the Art Deco aesthetic — bold, symmetric, theatrical.

**Output: the complete `index.html` and nothing else.**
