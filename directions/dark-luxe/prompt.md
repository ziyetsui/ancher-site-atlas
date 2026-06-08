# 生成 Prompt — Dark Luxe（暗夜质感 · 黑金）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，仅可外链一个 Google Fonts `<link>` 与同目录一张本地肖像 `portrait.webp`，效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Dark Luxe** direction — black + warm gold, high-contrast elegant serif, expensive spacing — for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks. The page should read like the cover of a private memorandum: authority through restraint, not noise.

## The person (brief)

- **Name**: Adaeze Okonkwo
- **Role**: Board Advisor & Former Operator
- **Audience**: boards and founders considering an advisory or board relationship
- **Primary goal**: get the right people to send an advisory inquiry (by introduction, not a form)
- **Thesis (the angle the whole page serves)**: *"I sit on the hard side of the table so founders do not have to."*
- **Tone**: composed, exact, expensive, quietly decisive
- **Proof points (use concretely — no filler)**:
  - 20 years as operator and advisor across scale-up and public-company stages
  - Took 3 companies through IPO (operator and board roles)
  - Currently holds 2 board seats at scale-ups; chairs one audit committee through its first post-IPO cycle
  - Known for governance, the hard boardroom conversation, and CEO succession
  - Based in London
- **Links**: inquiry email `advisory@adaezeokonkwo.com`; a "Board Availability" mailto (`?subject=Board%20availability`); LinkedIn
- **Page title**: "Adaeze Okonkwo — Board Advisor & Former Operator"
- **Meta description**: "Adaeze Okonkwo — board advisor and former operator. I sit on the hard side of the table so founders do not have to."

## Module plan (in this order)

Tag each section's opening tag with `data-module`/`data-variant`. All sections live inside one centered `.wrap` (max-width 1200px, 0 32px padding). Each section (after hero) opens with a draw-in gold `.rule`, then a `.sec-head` = a Roman-numeral serif italic gold number + an uppercase gold eyebrow. The `.sec-head` sits `margin-top:var(--block)` below its rule (so: rule, then a `--block` gap, then the head).

1. **`hero` / `split_portrait`** — a `<header>` with `padding:96px 0 var(--section)`. Topbar (`margin-bottom:84px`, items baseline-aligned, `justify-content:space-between`): brand "Adaeze Okonkwo." (the period in gold) + a 7-link uppercase nav (Standing · Record · Path · Principles · Engagement · Voices · Inquire). Hero grid (`grid-template-columns:1.15fr .85fr; gap:72px; align-items:center`): **left** = eyebrow "Board Advisor & Former Operator" beside a short gold hairline (the eyebrow row is a flex with a `flex:1; max-width:64px` gold hairline after it), oversized serif H1 "I sit on the *hard side* of the table so founders do not have to." (the italic "hard side" in gold), sub "Governance, succession, and the conversations boards postpone — for scale-up leadership teams and the founders who answer to them." (`max-width:30em`), and one gold text-link CTA "Request an introduction →"; **right** = the B&W portrait in a thin gold frame.
2. **`credentials` / `list`** — eyebrow "Standing" (num I). Serif statement: "Twenty years inside the operating room and the boardroom — three of them carried **all the way through IPO**. Today I hold board seats at two scale-ups, where my job is to ask the question everyone in the room is avoiding, and to make the hard call survivable for the people who have to live with it." (the IPO clause in italic gold strong). Right: a hairline-ruled "Where I'm useful" list — **Governance** (building a board that sharpens decisions instead of slowing them) · **CEO succession** (planning it before it becomes a crisis) · **The hard conversation** (naming the thing, on the record, in the room) · **Scale-up operating** (translating ambition into a structure that holds). Each row led by a gold ◆.
3. **`metrics` / `stat_row`** — eyebrow "The Record" (num II). 4 oversized serif figures, hairline-separated columns (not boxes), each with a gold italic unit + uppercase subtle label: **20** yrs / Operator & Advisor · **3** IPOs / Taken Public · **2** seats / Current Boards · **1** side / The Hard One.
4. **`experience` / `timeline`** — eyebrow "The Path Here" (num III). Hairline-separated rows, each = a gold italic year span + small uppercase place, then serif H3 + body:
   - **2019–now** · Independent Advisory — "Board Advisor & Non-Executive Director": "Two current board seats at venture-backed scale-ups, plus a small roster of founder-CEOs I sit across from in the moments that decide whether a company survives its own growth."
   - **2012–2019** · Meridian Logistics — "Chief Operating Officer": "Took a regional operator from 400 to 3,100 people and through a public listing. Built the operating cadence that let a founder-led culture survive becoming a quarterly-reporting one."
   - **2005–2012** · Halford & Vane — "Partner, Operations Practice": "Led restructuring and succession engagements for boards in crisis. Learned that the hard call is almost never about the numbers, and almost always about who will say it out loud."
5. **`beliefs` / `numbered`** — eyebrow "How I Work" (num IV). 2-col grid of 4 principles separated by 1px hairline gaps (gold italic number, serif H3, body):
   - 01 **Name it in the room.** — "The conversation a board avoids compounds quietly until it is the only conversation. My job is to say the thing first, on the record, while it is still cheap."
   - 02 **Govern for decisions, not minutes.** — "A board exists to sharpen the few calls that matter, not to ratify what already happened. If the meeting could have been a memo, the governance has already failed."
   - 03 **Plan the exit before the crisis.** — "CEO succession is a process, not an obituary. The healthiest companies rehearse it years early, calmly, while everyone still has the luxury of disagreeing."
   - 04 **Make the hard call survivable.** — "I am not there to soften the decision. I am there so the people who must live with it walk out of the room stronger than they walked in."
6. **`services` / `list`** — eyebrow "Forms of Engagement" (num V). Hairline-separated rows, each = gold italic lowercase-roman index (i/ii/iii), serif H3 + body, and right-aligned uppercase meta:
   - i **Board Seat** — "A standing non-executive role on a scale-up board, with the governance, audit, and succession work that comes with it. One or two new relationships a year." · *Ongoing · By introduction*
   - ii **Founder Counsel** — "A private line for the CEO between meetings — the unstructured conversation about the decision you cannot yet say out loud to your own board." · *Retainer · Confidential*
   - iii **Succession Engagement** — "A defined six-to-nine-month mandate to design and de-risk a CEO or chair transition before it becomes a headline." · *Fixed term · Scoped*
7. **`testimonials` / `quote_led`** — eyebrow "Voices" (num VI). Hairline-separated, each `<figure>` led by an oversized gold serif quote mark, italic serif blockquote + attribution:
   - "Adaeze said the thing the rest of us had been circling for three meetings. The company is still standing because of it." — **Chair**, public-company board, post-IPO
   - "She does not soften the hard call. She makes you strong enough to make it. That is a different kind of advisor." — **Founder & CEO**, Series C scale-up
8. **`selected_quotes` / `large_type`** — eyebrow "A Working Belief" (num VII). One huge italic serif pull-quote: "Authority is not the right to give the order. It is the willingness to *name the cost* before anyone has to pay it." (the "name the cost" in upright gold), attr "A line I keep over my desk".
9. **`now_page` / `list`** — eyebrow "Now" (num VIII). 2-col grid: left = hairline-ruled list with gold uppercase keys — **Boards**: "Holding two seats; chairing one audit committee through its first post-IPO cycle." · **Reading**: "*The Founder's Dilemmas* — again, with margins for the CEOs I work with." · **Writing**: "A short essay on why succession plans fail in calm weather." · **Based**: "London — in the room wherever the hard call is." Right = serif italic note "Deliberately keeping the roster small this year. The work only does what it should when there is room to answer the phone the day the call gets hard." with stamp "Updated · Spring 2026".
10. **`faq` / `two_column`** — eyebrow "Before You Write" (num IX). 2-col grid of 4 Q&A (gold italic "Q." prefix, serif H3 question, body answer):
    - "Do you take operating or interim roles?" — "No. I left the operating room on purpose. I am most useful on the other side of the table, where the job is to govern and to counsel, not to run."
    - "What stage of company fits best?" — "Series B through public — the years when ambition outpaces structure and the board stops being a formality. Earlier than that, I am usually the wrong tool."
    - "How do engagements usually begin?" — "By introduction, with a single unhurried conversation and no deck. If we are a fit, the shape of the work becomes obvious within the hour."
    - "Will you sit on competing boards?" — "Never knowingly. I hold a hard line on conflicts and will tell you the moment one appears — including when it costs me the engagement."
11. **`contact` / `card`** — a single restrained `.surface` card (no preceding sec-head) with a gold gradient hairline along its top edge. Eyebrow "An Invitation", serif H2 "If your board is approaching the conversation it keeps postponing, *let us talk before it does.*" (clause in italic gold), then the gold serif mail link `advisory@adaezeokonkwo.com`, the two alt links ("Board Availability" mailto, LinkedIn), and an availability line with a gold pip: "Taking a limited number of new advisory and board relationships this year."
12. **`footer`** (untagged) — top hairline; left serif italic sig "— **Adaeze Okonkwo**, on the hard side of the table." (name in gold), right uppercase small "© 2026 · Board Advisory · By Introduction".

## Design direction — Dark Luxe

**DNA**: Black-and-gold editorial. Pure ink ground; warm gold used like brass *detailing* (hairline rules, links, numbers, small ornament) — never a fill or area gradient. Ivory type for body. Oversized high-contrast serif (Cormorant Garamond) carries the voice; Inter handles body + eyebrows. Generous, expensive spacing; a split portrait hero. **Hairline gold rules are the primary structural device** — they separate sections and table rows and "draw in" left→right on scroll. The only "shadows" are a soft toggle-pill shadow and a faint gold ring on the availability pip — there are no card drop-shadows. Avoid: purple gradients, neon/glowing gold, card-grid clutter, gold fills everywhere, drop shadows on content, screenshot-copying.

**Tokens** (define as CSS variables, obey exactly):
- **Colors**: `--canvas:#0a0a0a` · `--surface:#121110` · `--surface-raised:#181613` · `--ink:#efe9dd` · `--ink-muted:#b6ae9e` · `--ink-subtle:#7e776a` · `--accent:#c8a24a` · `--accent-hover:#dcb863` · `--hairline:#2a2620` · `--hairline-gold:#5a4a24`
- **Fonts**: `--serif:'Cormorant Garamond', Georgia, 'Times New Roman', serif` · `--sans:'Inter', system-ui, -apple-system, sans-serif`. Google Fonts `<link>` (the only stylesheet allowed):
  `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap`
- **Type scale (use these real `clamp()` expressions)**:
  - hero H1: `font-size:clamp(44px,7.2vw,88px)` serif 600, line-height 1.02, letter-spacing -1.5px
  - credentials statement: `clamp(26px,3.4vw,40px)` serif 500, line-height 1.28
  - metric figure: `clamp(48px,6vw,64px)` serif 600, line-height 1, letter-spacing -1px (unit = `.55em` gold italic)
  - testimonial quote: `clamp(24px,3vw,34px)` serif italic 500
  - pull-quote (selected): `clamp(30px,5vw,58px)` serif italic 500, line-height 1.16, max-width 18em
  - timeline/service/principle/faq H3: roughly `clamp(20–22px, 2.4–2.8vw, 26–32px)` serif 600
  - contact H2: `clamp(32px,5vw,56px)` serif 600, line-height 1.08; mono fallback glyph `clamp(72px,12vw,128px)`
  - body 17px/1.7 sans; hero-sub 18px; eyebrow 12px sans 600 uppercase letter-spacing 3px
- **Spacing / secondary tokens**: `--section:132px` (→96px ≤880, ↓ via media) · `--block:44px` (→36px) · `--tight:18px` · `--maxw:1200px`. `section{padding:var(--section) 0}`. Body bg `--canvas`, base font 17px/1.7. `::selection{background:var(--accent);color:#0a0a0a}`.
- **Section grid ratios / gaps** (the load-bearing column structures):
  - credentials `.cred-grid`: `grid-template-columns:1.2fr .8fr; gap:64px; align-items:start`
  - timeline `.tl-row`: `grid-template-columns:160px 1fr; gap:40px; align-items:start`
  - now `.now-grid`: `grid-template-columns:1fr 1fr; gap:64px; align-items:start` (and each `.now-list li` is `grid-template-columns:120px 1fr; gap:20px`)
  - faq `.faq-grid`: `grid-template-columns:1fr 1fr; gap:0 64px`
  - services `.service`: `grid-template-columns:auto 1fr auto; gap:32px` (index / body / right-meta)
  - testimonials `.quote`: `grid-template-columns:auto 1fr; gap:28px` (quote-mark / body)
  - All collapse to single column at ≤880px.
- **Secondary type sizes** (the smaller registers): list/now/timeline/service/faq/principle body = 16px (not the 17px base); eyebrow inside `.focus-list` has `margin-bottom:22px`; the focus-list `◆` mark is an 18px serif gold glyph; metric label + service meta = 11–12px sans 600 uppercase letter-spacing 2px; timeline `.place` and now `.stamp` = 11px sans 600 uppercase letter-spacing 2px subtle.

## Signature techniques (pure CSS/SVG)

1. **Draw-in gold hairline** — the core structural rule. `.rule{height:1px;background:linear-gradient(90deg,var(--hairline-gold),var(--accent) 40%,var(--hairline-gold));transform-origin:left center;transform:scaleX(0);transition:transform 1.1s cubic-bezier(.2,.7,.2,1)}` → `.rule.shown{transform:scaleX(1)}`. Each section starts with one.
2. **Thin gold portrait frame with inner line + corner ticks** — `.portrait-frame{padding:14px;border:1px solid var(--hairline-gold);position:relative}` plus a `::before{inset:5px;border:1px solid var(--hairline)}` inner frame, plus two absolutely-positioned 18×18 `border:1px solid var(--accent)` corner brackets (top-left has only top+left borders; bottom-right only bottom+right). The portrait `<img>` is `filter:grayscale(100%) contrast(1.04)`, `aspect-ratio:4/5`, `object-fit:cover`.
3. **Hairline rows, not cards** — lists/timeline/services/faq/now use `border-top:1px solid var(--hairline)` per row (last child also `border-bottom`), CSS grid for column structure. Beliefs is the one grid with visible cell gaps: `display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--hairline)` with each `.principle{background:var(--canvas)}` so the hairline shows through the 1px gaps.
4. **Roman-numeral section heads** — `.sec-head` = serif italic gold number (I…IX, 20px) + uppercase gold eyebrow, baseline-aligned, 18px gap.
5. **Oversized serif metric figures with gold italic units** — figure in serif 600; the unit (`yrs/IPOs/seats/side`) is a `.55em` gold italic span.
6. **Gold text-link CTA with widening gap** — `.hero-cta{border-bottom:1px solid var(--hairline-gold);gap:10px;transition:border-color .25s,gap .25s}` → on hover `border-color:var(--accent);gap:16px` (the arrow slides out). Inline links: `color:var(--accent)` → hover `--accent-hover`.
7. **Contact card with gold top hairline** — `.contact-card{background:var(--surface);border:1px solid var(--hairline);padding:64px clamp(28px,6vw,80px);overflow:hidden}` + `::before{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--accent),transparent)}`. H2 `max-width:14em`; the gold serif mail link is `clamp(22px,3vw,30px)` serif 500 with a `--hairline-gold` bottom border (→`--accent` on hover). Availability pip = 7px gold dot with `box-shadow:0 0 0 3px rgba(200,162,74,.18)` ring.
8. **Monogram fallback** — `.u-fallback.mono` is a `radial-gradient(120% 90% at 50% 0%, #1a1712 0%, var(--surface) 60%, #0d0c0a 100%)` panel, `aspect-ratio:4/5`, `display:grid;place-items:center`, with a big gold serif "AO" glyph + uppercase "Board Advisor" sub.
9. **Focus rings** — `a:focus-visible,button:focus-visible{outline:2px solid var(--accent);outline-offset:4px;border-radius:2px}`.

## Photo + toggle contract (implement verbatim)

The page ships a real local portrait. The portrait `<img class="u-photo" src="portrait.webp" alt="...">` carries a meaningful alt; the typographic monogram is `class="u-fallback mono"` (gold "AO" on the radial panel). Default = photos ON. Add into `<style>`:

```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .u-fallback.mono{display:grid !important}

.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
```

Before `</body>` add (verbatim):

```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
<script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
```

## Motion

Two effects only, both honoring `prefers-reduced-motion`:

- **Slow fade-up reveal** — `.reveal{opacity:0;transform:translateY(22px);transition:opacity .9s ease,transform .9s cubic-bezier(.2,.7,.2,1)}` → `.reveal.shown{opacity:1;transform:none}`. Applied to hero copy/portrait and every section head + content block.
- **Hairline draw-in** — the `.rule` scaleX(0→1) above, also gated on reveal.

One `IntersectionObserver` (`{threshold:0.16, rootMargin:'0px 0px -8% 0px'}`) adds `.shown` to every `.reveal` and `[data-rule]`, then `unobserve`s. If reduced-motion or no IO support, add `.shown` to all immediately (final state, no transitions). In the reduced-motion media query, force `.reveal`/`.rule` to final state with `transition:none`. No other animation — no parallax, no looping, no letterbox/sunburst.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no npm, no JS framework, no Three.js/WebGL.
2. Only external resources allowed: the one Google Fonts `<link>` and the one local image `portrait.webp` (sits next to `index.html`). Nothing else remote.
3. Use the exact tokens above as CSS variables and obey them. Real content from the brief — no lorem, no "passionate about innovation".
4. Responsive 360–1440px; collapse to single-column at ≤880px (hero portrait moves above copy; metrics → 2×2; principles/timeline/services/faq/now → 1 col) and tighten padding at ≤560px. Semantic HTML; accessible (contrast, visible gold focus rings, alt text, reduced-motion).
5. Implement the photo + toggle contract above (default photos ON). The no-photos state must still look intentional (gold-framed "AO" monogram, not a broken box).
6. Tasteful motion only (hairline draw + slow fade-up). Looks designed by a senior designer for *this* black-and-gold direction — distinct from editorial, swiss-minimal, warm-personal, technical-mono, bold-brutalist.

**Output: the complete `index.html` and nothing else.**
