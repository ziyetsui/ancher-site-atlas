# 生成 Prompt — Editorial（编辑排版）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。除一个 Google Fonts `<link>`（Spectral + Inter）和一张本地肖像图（`portrait.jpg`，类名 `u-photo`）外，不引用任何外部资源。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Editorial** design direction for the person below. All CSS in one `<style>`, all JS inline. No build step, no frameworks.

## The person (brief)

- **Name**: Mara Lindqvist
- **Role**: Independent essayist & journalist
- **Audience**: editors, publications, and readers commissioning long-form work
- **Primary goal**: get visitors to read a piece, then email her to commission writing
- **Thesis (the angle the whole page serves)**: *"Technology's real story isn't the machines — it's what they're doing to our attention."* The site should feel like reading her, not browsing a résumé.
- **Tone**: literary, exact, unhurried, quietly opinionated
- **Proof points (use these, concretely — no filler)**:
  - 8 years covering tech & culture; bylines in *The Atlantic*, *Wired*, *The Guardian*
  - 2023 essay "The Quiet Surrender" — 400k reads, cited in a 2023 Senate hearing on attention markets
  - Author of the newsletter *Margins* (12k subscribers)
  - Finalist, 2024 National Magazine Award (Essays); 140+ essays/features published since 2018
- **Links**: Email (hello@maralindqvist.com), Newsletter (*Margins*), X/@maralindqvist
- **Wordmark**: "Mara Lindqvist" with a rust-colored period; **page title**: "Mara Lindqvist — Essayist & Journalist".
- **Top nav** (in-page anchors): Work · Approach · Creed · Awards · Now · Contact (hidden under 600px).
- **Footer**: "© 2026 Mara Lindqvist. Set in *Spectral* & Inter." and "Words on technology, culture & attention."

## Module plan (in this order)

1. `hero` → **bold_statement**: two-column grid (`minmax(0,1fr) clamp(220px,26vw,320px)`, `gap:clamp(2rem,6vw,5rem)`, `align-items:end`; collapses to one column under 760px). Eyebrow "Mara Lindqvist — Essayist & Journalist" (`margin-bottom:1.6rem`); display-xl thesis headline (`max-width:16ch`) "Technology's real story isn't the machines — it's what they're doing to our *attention*." (the word *attention* in `<em>` italic **weight 400** rust); sub-paragraph (`max-width:46ch`, 19px, line-height 1.6, `--ink-muted`) "I write long-form essays and reporting on technology and culture for editors, publications, and readers who want the slower, more exact version of the story."; text CTA "Commission a piece →" (→ `#contact`) — sans 600 17px rust, with a **persistent** 1px rust underline under the label only (static `background-size:100% 1px`, NOT a hover-draw) and a "→" arrow that slides `translateX(6px)` on hover. Right column = the portrait figure (see Photo contract) with italic serif caption "Mara Lindqvist, photographed in 2026."
2. `selected_work` → **featured_case**: section eyebrow "Selected Work" + hairline rule. **Featured article**: meta row = rust pill "Most read" + "The Atlantic" · 2023 · 400k reads; display-md title "The Quiet Surrender"; a rust-left-border pull-quote "We didn't lose our attention in a war. We handed it over, a few minutes at a time, in exchange for nothing we can name."; one line "An essay on the economics of distraction — later cited in a 2023 Senate hearing on attention markets."; "Read the essay →". Then an **essay list** (hairline rows, serif titles · publication, year right-aligned): "The Machine Has Your Eyes" · Wired · 2024; "Notes on a Quieter Internet" · The Guardian · 2024; "The Feed Is Not Your Friend" · The Atlantic · 2023; "What We Talk About When We Talk About Focus" · Wired · 2022; "The Last Slow Hour" · The Guardian · 2022.
3. `story` → **quote_led**: eyebrow "How I Work". Italic lede (narrow `max-width:22ch`) with a hanging rust open-quote ornament: "I'd rather be right and late than fast and loud." Two body paragraphs (sans, `max-width:56ch`, color `--ink-muted`): the "eight years… habit rewrites a person… slow because the interesting part is what's left six months later" paragraph, then the bylines paragraph naming **The Atlantic**, **Wired**, **The Guardian** in bold, the 2024 National Magazine Award finalist line, ending on "the byline I care about most is the one in a reader's inbox at seven in the morning, read all the way to the end."
4. `currently_building` → **now_block**: eyebrow "Currently". A `--surface` panel (1px hairline border, 2px radius) titled "Now — Summer 2026" with italic stamp "What's on the desk this season." and a numbered list (serif rust "01"/"02" markers): **01** "*Margins* — the newsletter" — "A weekly letter on attention, technology, and the texture of ordinary life, read by 12,000 subscribers. This is where the essays start as questions." **02** "A book, in progress" — "Expanding *The Quiet Surrender* into a longer argument about the economics of distraction — how attention became a market, and what it costs to opt out. Drafting through the year."
5. `metrics` → **big_numerals**: eyebrow "By the Numbers". 3-column grid of oversized serif numerals with rust suffixes: **8**yrs "Reporting on technology, attention, and the texture of ordinary life."; **140**+ "Essays and features published across national outlets since 2018."; **12**k "Readers of *Margins*, the weekly letter where the essays begin." (collapses to one column under 680px.)
6. `beliefs` → **principles_list**: eyebrow "A Writing Creed". Numbered list (CSS `decimal-leading-zero` rust counters, hairline dividers), four items — heading + sub:
   - "The story is in the aftermath, not the announcement." — "A launch is a press release. The piece worth writing is what's left six months later — the habit that stayed after the novelty wore off."
   - "No metaphor I can't defend to the person it describes." — "If a sentence wouldn't survive being read aloud to its subject, it's decoration, not reporting. I cut it."
   - "Slow is a method, not an apology." — "I'd rather be right and late than fast and loud. The deadline I keep is the one the truth sets."
   - "The reader at seven in the morning is the only editor that matters." — "Every paragraph earns the next one, or it gets deleted. Attention is the thing I write about; I refuse to waste it."
7. `selected_quotes` → **large_type**: eyebrow "In the Margins". One huge serif blockquote (narrow `max-width:24ch`, line-height 1.18) with a hanging rust open-quote: "We didn't lose our attention in a war. We *handed it over*, a few minutes at a time, in exchange for nothing we can name." (*handed it over* italic rust); caption "The Quiet Surrender" in small uppercase rust-subtle sans + an italic serif `.src` "— The Atlantic, 2023" (non-uppercase, `--ink-muted`).
8. `credentials` → **list**: eyebrow "Awards & Fellowships". Hairline-row list (serif name · org, year right): National Magazine Award — Essays · Finalist · 2024; Knight Visiting Fellowship · Nieman Foundation, Harvard · 2023; Mirror Award for Technology Reporting · Shortlist · 2022; Logan Nonfiction Fellowship · Carey Institute · 2021.
9. `contact` → **inline**: eyebrow "Get in touch"; display-md "Have a story that deserves the slow version?"; sub "I take a small number of commissions each season. Tell me what you're working on — I read every note."; large serif email link hello@maralindqvist.com (rust underline); link row: Email → · Newsletter · *Margins* (→ `#now`) · X · @maralindqvist (→ x.com/maralindqvist).

Tag each section on its opening tag with `data-module`/`data-variant` exactly as above. Also include: a skip link ("Skip to selected work" → `#work`), a `role="banner"` topbar, and `<main id="top">`.

## Design direction — Editorial

**DNA**: Typography *is* the design — hierarchy comes from type scale + whitespace and hairline rules, never from filled cards. Oversized serif headlines with tight negative tracking; sans body, loose line-height (1.65). Single asymmetric column held in a max-1180px shell with an **asymmetric gutter** (smaller left, larger right) so text hangs left with generous right air. One restrained rust accent, used only on links, ledes, numerals, ornaments. The page carries a faint paper grain and uses **hard-offset (no-blur) shadows** as the one structural flourish — this is intentional, not a contradiction of "no drop-shadow". Avoid: centered-everything, card grids for prose, purple gradients, blurred soft shadows.

**Tokens** (define as CSS variables, obey exactly):
- colors: `--canvas:#faf8f4` `--surface:#f3efe7` `--ink:#1a1815` `--ink-muted:#5c574e` `--ink-subtle:#8a8377` `--accent:#9a3412` `--accent-hover:#7c2d12` `--hairline:#e3ddd0`
- fonts: `--serif:'Spectral', Georgia, 'Times New Roman', serif` `--sans:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Google Fonts `<link>`** (the only external CSS): `https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;600&display=swap`
- type scale (use the real `clamp()` expressions):
  - body 18px / line-height 1.65 / weight 400 (sans)
  - `.eyebrow` 13px sans 600 uppercase, letter-spacing 1.5px, color `--ink-subtle`
  - `.display-xl` serif 500, `clamp(2.85rem, 8.4vw, 76px)`, line-height 1.04, letter-spacing -2px
  - `.display-md` serif 500, `clamp(1.9rem, 4.6vw, 40px)`, line-height 1.12, letter-spacing -0.8px
  - `.lede` serif italic 400, `clamp(1.25rem, 3.2vw, 24px)`, line-height 1.5, color `--ink-muted`
  - metric numeral serif 500, `clamp(2.6rem, 7vw, 4.4rem)`, letter-spacing -2px
  - large blockquote serif 500, `clamp(1.9rem, 5.2vw, 3.2rem)`, letter-spacing -1.2px
- spacing/layout: `--section:120px` `--block:40px` `--radius-sm:2px` `--measure:62ch` `--col-max:1180px` `--gutter-r:clamp(1.5rem,8vw,12rem)` `--gutter-l:clamp(1.5rem,6vw,7rem)`. Sections `padding-top:var(--section)`; first section `padding-top:clamp(3.5rem,9vw,7rem)`.

## Signature techniques (pure CSS/SVG)

1. **Faint paper grain on `body`** — layered backgrounds: a barely-there rust radial top-left plus an inline-SVG `feTurbulence` fractal-noise tile:
   ```css
   background-image:
     radial-gradient(circle at 18% 12%, rgba(154,52,18,0.025), transparent 40%),
     url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.018'/%3E%3C/svg%3E");
   ```
2. **Hard-offset portrait shadow (no blur)** — the magazine look: a double box-shadow that fakes a paper stack, plus a hairline frame, on a `4/5` crop:
   ```css
   .hero-portrait .u-photo{ aspect-ratio:4/5; object-fit:cover; background:var(--surface); border:1px solid var(--hairline); border-radius:var(--radius-sm);
     box-shadow:-14px 14px 0 -1px var(--surface), -14px 14px 0 0 var(--hairline); }
   ```
3. **Animated underline links** — links draw a 1px rust underline from 0→100% width on hover via `background-image` + `background-size` transition (not `text-decoration`):
   ```css
   .link{ background-image:linear-gradient(var(--accent),var(--accent)); background-repeat:no-repeat; background-position:0 92%; background-size:0% 1px;
     transition:background-size .4s cubic-bezier(.2,.7,.2,1), color .25s ease; }
   .link:hover,.link:focus-visible{ color:var(--accent-hover); background-size:100% 1px; }
   ```
4. **Section heading = eyebrow + flex hairline rule** — never a boxed header: `.sec-head{display:flex;align-items:baseline;gap:1rem}` with a `flex:1;height:1px;background:var(--hairline)` filler nudged up 3px.
5. **Hanging quote ornament** — ledes/blockquotes get an oversized rust open-quote via `::before{content:"“"}` absolutely positioned into the left margin at ~0.5–0.55 negative em, opacity ~0.5. **Force `font-style:normal` on the ornament** even when its container is italic (the lede is italic — the quote mark must stay upright, not slanted). The story-lede ornament is ~2.4em (`left:-0.62em;top:-0.18em;opacity:0.55`); the large-blockquote ornament is `clamp(3rem,8vw,5rem)` (`left:-0.55em;top:-0.32em;opacity:0.5`, dropping to `left:-0.1em` under 600px).
6. **Lines, not cards** — work list, awards list, creed all use hairline `border-bottom` rows (first row gets `border-top`), `grid-template-columns:1fr auto` so the year/date hangs right; collapse to one column under 540px.
7. **decimal-leading-zero counters** — the creed numbers its principles with CSS counters: `counter-reset:creed` + `::before{counter-increment:creed;content:counter(creed,decimal-leading-zero)}` in small rust sans.
8. **Essay-row hover choreography** — on hover a row nudges `padding-left` and reveals a rust "→" via an absolutely-positioned `::before` (opacity 0→1, translateX -6px→0); the hero/read arrows slide `translateX(5–6px)` on `cubic-bezier(.2,.7,.2,1)`.
9. **Rust suffixes / inline accents** — metric `<span class="suffix">` (yrs/+/k) and headline `<em>`s are the rust; the body stays ink. Headline `<em>`s render `font-style:italic;font-weight:400` (lighter than the 500 display weight) — both the hero *attention* and the large-blockquote *handed it over*. Pull-quote uses a 2px rust left border, not a box (`padding-left:1.3rem`, `max-width:50ch`, color `--ink-muted`).

## Photo + toggle contract

The page **ships a real local portrait** (`portrait.jpg`). Use a portrait `<img class="u-photo">` with `alt="Portrait of essayist and journalist Mara Lindqvist"` inside the hero `<figure class="hero-portrait">` with its italic `<figcaption>`. There is **no** `u-fallback` element; instead, when photos are off the hero grid collapses cleanly:
```css
.hero-grid{ display:grid; grid-template-columns:minmax(0,1fr) clamp(220px,26vw,320px); gap:clamp(2rem,6vw,5rem); align-items:end; }
body.no-photos .hero-grid{ grid-template-columns:minmax(0,1fr); }
body.no-photos .hero-portrait{ display:none; }
@media (max-width:760px){ .hero-grid{ grid-template-columns:minmax(0,1fr); align-items:start; } }
```
Ship the fixed bottom-right demo toggle verbatim (default = photos ON; `sample.png` is taken ON):
```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos">
  <span>照片 Photos</span>
  <button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button>
</div>
```
```css
.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
body.no-photos .u-photo{display:none !important}
```
```html
<script>
(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();
</script>
```

## Motion

One effect only: **subtle fade-up on scroll**. Reveal elements carry `.reveal` (and optional `data-delay="1..4"` → `transition-delay` 0.08/0.16/0.24/0.32s):
```css
.reveal{ opacity:0; transform:translateY(22px);
  transition:opacity .85s cubic-bezier(.22,.61,.36,1), transform .85s cubic-bezier(.22,.61,.36,1); will-change:opacity,transform; }
.reveal.in{ opacity:1; transform:none; }
```
An `IntersectionObserver` (`rootMargin:'0px 0px -8% 0px'`, `threshold:0.08`) adds `.in` once then unobserves. Plus link/arrow hover transitions above. Under `prefers-reduced-motion: reduce`: reveals render visible immediately (JS adds `.in` to all and bails if no IO; CSS forces `opacity:1;transform:none;transition:none`), hover transitions disabled, `scroll-behavior:auto`. Do **not** add letterbox bars, sunbursts, parallax, or any motion the page doesn't implement.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no npm, no JS framework.
2. The **only** external resources are the Google Fonts `<link>` above and the local `portrait.jpg` (`u-photo`). No other remote images, no Three.js/WebGL/heavy canvas.
3. Responsive 360–1440px, mobile-first; semantic HTML (`header`/`main`/`section`/`footer`, real headings, `aria-labelledby` per section); accessible — color contrast, visible `:focus-visible` (2px rust outline), alt text, skip link; honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tasteful motion only (subtle fade-up on scroll). The page should read as intentionally *edited*, not AI-generic.

**Output: the complete `index.html` and nothing else.**
