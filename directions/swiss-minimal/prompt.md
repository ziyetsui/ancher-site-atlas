# 生成 Prompt — Swiss Minimal（瑞士极简）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。唯二的外部资源：一个本地肖像图 `portrait.jpg`（方形、硬边、发丝线描边）和一个 Google Fonts `<link>`（Inter + IBM Plex Mono）。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Swiss Minimal** direction for the person below. All CSS in one `<style>`, all JS inline. No build step, no framework. The only external resources are one Google Fonts `<link>` and one local image, `portrait.jpg`.

## The person (brief)

- **Name**: Daniel Roth
- **Role**: Independent Product Strategy Consultant — *"Est. 2014 — Remote / EU"*
- **Audience**: heads of product and founders deciding whether to hire him
- **Primary goal**: book a 30-minute intro call (`https://cal.com/danielroth/intro`)
- **Thesis / hero headline**: *"I help product teams cut scope until what's left is the thing that actually **moves the metric.**"* (last clause is the accent-colored span)
- **Hero sub**: *"Twelve years shipping product, plus 30+ teams advised. I run a focused six-week scope-and-sequence sprint: we decide what to build, in what order, and what to deliberately leave out."*
- **CTA note under the button**: *"30 min · no deck · no obligation"*
- **Tone**: clear, exact, credible, low-ego
- **Proof points (concrete)**:
  - 12 years in product; ex-Head of Product at Series-C fintech "Ledgerline" (scaled it 40k→1.2M users)
  - Advised 30+ teams; flagship engagement is a 6-week scope-and-sequence sprint
  - 2 YC clients reached Series A within 9 months
  - Writes a short essay series, *"Less, but load-bearing"*
- **Links**: Calendar `https://cal.com/danielroth/intro` · Email `daniel@danielroth.co` · LinkedIn `/in/danielroth`

## Module plan (in this order)

A sticky-feel `topbar` (not a module) precedes everything: brand = portrait thumbnail (26px square) + initials fallback "DR" + name "Daniel Roth"; right nav = Work · Services · Track record · FAQ · **Book a call**.

1. `hero` → **minimal_centered-left**: meta row (name "Daniel Roth" · role "Independent Product Strategy Consultant" · right-aligned mono "Est. 2014 — Remote / EU"); the thesis as the headline (accent span on *"moves the metric."*); a portrait `figure` top-right (3 cols); below a hairline: hero sub (left) + CTA button "Book an intro call →" with note *"30 min · no deck · no obligation"*.
2. `metrics` → **stat_row**: head index `01` · "The numbers" · note "Track record, plainly stated." Four bordered cells: **12 yrs** "In product" · **30+** "Teams advised" · **40k→1.2M** "Users scaled · Series-C fintech" · **6 wk** "Typical engagement". Figures in mono; the unit/`+`/`→` glyphs in `--ink-subtle`.
3. `currently_building` → **cards** (services): index `02` · "How we work together" · note "Three ways in. Pick by where you're stuck." Three bordered cards, each: mono no. + title + paragraph + a `→`-bulleted list.
   - **S—01 Scope & Sequence Sprint** — "Six weeks. We strip the roadmap to the one outcome that moves your metric, then sequence the smallest path to it. The flagship engagement." → A ruthless, ranked build order / The "leave it out" list, defended / One metric, one bet, written down.
   - **S—02 Strategy Teardown** — "A two-week read of where your product strategy leaks. For teams that suspect they're building the wrong thing well." → Findings memo, no slideware / Three decisions to make this quarter / A 60-minute working session.
   - **S—03 Standing Advisor** — "A monthly seat at the table for founders mid-build. Fewer meetings, sharper decisions, on call when the stakes are real." → Monthly strategy review / Async access between sessions / Roadmap & hiring gut-checks.
4. `selected_work` → **list**: index `03` · "Selected work" · note "Outcomes, not logos." A 4-column table (No. · Client type · What changed · Result), header labels then 5 hairline rows (row hover → `--surface`):
   - 01 · YC seed-stage SaaS · "Cut the roadmap from 9 bets to 2; shipped the activation flow first." · **Series A** in 9 mo
   - 02 · YC marketplace · "Killed the supply-side app; rebuilt around a single liquidity metric." · **Series A** in 9 mo
   - 03 · Series-C fintech (in-house) · "Re-sequenced onboarding; deferred everything that didn't lift week-1 retention." · 40k **→** 1.2M
   - 04 · Series-B dev tool · "Replaced a 40-item backlog with one load-bearing bet for the quarter." · +34% act.
   - 05 · Pre-seed YC company · "Said no to the enterprise tier; doubled down on the wedge that worked." · 3.1× MRR
   - then an `essays` row: label "Writing" + "I write a short essay series, *"Less, but load-bearing"* — field notes on cutting scope without losing the thing that mattered."
5. `beliefs` → **numbered**: index `04` · "How I think about scope" · note "Four rules I bring to every engagement." Four hairline rows, mono accent number + title + paragraph:
   - 01 **Cutting is a decision, not a failure** — "The 'leave it out' list is the deliverable. Anything you keep should survive the question: what breaks if we don't build it this quarter?"
   - 02 **One metric, written down** — "A roadmap that serves three metrics serves none. We name the one number that decides whether the bet worked, before we sequence anything."
   - 03 **Sequence beats scope** — "What you build second is usually worth more than what you build first. Order is strategy. Most teams treat it as logistics."
   - 04 **No deck survives contact with the team** — "I leave a one-page memo, not slideware. If a decision can't be stated in a sentence, it isn't a decision yet."
6. `experience` → **compact_list**: index `05` · "Track record" · note "Twelve years, in order." Four hairline rows (period · role + muted org · note):
   - 2018 — now · Independent Strategy Consultant · self — "Scope-and-sequence sprints for 30+ seed-to-Series-C product teams."
   - 2016 — 2018 · Head of Product · Ledgerline (fintech) — "Re-sequenced onboarding; took the core product from 40k to 1.2M users."
   - 2014 — 2016 · Senior PM · Mapfield (marketplace) — "Killed the supply-side app; rebuilt the roadmap around one liquidity metric."
   - 2012 — 2014 · Product Manager · Northbeam (dev tools) — "First PM hire. Learned the cost of shipping nine things at once."
7. `testimonials` → **quote_led**: index `06` · "What founders say" · note "From people who shipped less and grew more." Four bordered cells, each a blockquote (accent curly quotes) + mono no. + bold name + muted role:
   - 01 "Daniel deleted half our roadmap in week one. It was the best thing that happened to the company that year." — **Priya N.**, Co-founder & CEO, YC SaaS
   - 02 "We stopped arguing about priorities because there was finally one metric on the wall. Meetings got shorter overnight." — **Marcus L.**, VP Product, Series-B dev tool
   - 03 "No deck, no fluff. A one-page memo and three decisions we could actually make that quarter. Rare." — **Sofia R.**, Founder, pre-seed marketplace
   - 04 "He's the only advisor who told us what not to build. That sentence saved us two quarters." — **Tom A.**, CPO, Series-C fintech
8. `tools` → **stack_list**: index `07` · "How the work gets done" · note "The toolkit behind a sprint." Four hairline rows (uppercase category · wrapped mono pills):
   - Discovery — Opportunity solution trees / Jobs-to-be-done interviews / Assumption mapping
   - Prioritization — One-metric framing / Cost-of-delay ranking / The "leave it out" list
   - Sequencing — Bet-sized roadmaps / Dependency mapping / Smallest-path slicing
   - Working tools — Linear / Figma / Notion / Amplitude / One-page memos
9. `faq` → **two_column**: index `08` · "Before you book" · note "The questions I get most." Four Q/A items in a 2-col grid (`column-gap:calc(var(--gutter)*2)` — a double gutter; collapses to 1 col at ≤900px); each item `padding:22px 0; border-bottom:1px solid var(--hairline)`, the question an h3 at 15px/600:
   - "What does an engagement cost?" — "The flagship six-week sprint is a fixed fee, scoped on the intro call. Teardowns and advisory are smaller. No hourly billing — you pay for the decision, not the hours."
   - "Do you work async or on-site?" — "Remote-first, EU hours, with a handful of live working sessions. I can travel for a kickoff if it matters, but most of the work happens in shared docs."
   - "What stage suits you best?" — "Seed through Series C, when there's a real product and too many directions to chase. If you're pre-product, you don't need me yet — keep talking to users."
   - "What do I get at the end?" — "A ranked build order, a defended 'leave it out' list, and one metric written down. A one-page memo, not a slide deck. Decisions your team can act on Monday."
10. `contact` → **cta_band**: index `09` · "Start a conversation" · note "If the metric isn't moving, let's talk." Lead line "Tell me the metric that isn't moving. [Book a 30-minute intro call] and we'll find the thing to cut." + a channel list (Calendar "Book a call →" · Email "daniel@danielroth.co" · LinkedIn "/in/danielroth ↗") in cols 9–12. The lead is cols 1–7 at `clamp(24px,3.4vw,32px)/600/-0.02em/max-width:18ch`. Each channel is a `mono ch-label · right-aligned value` row on hairlines (top rule per row, plus a bottom rule on the last) — and unlike body links these channel links are **`--ink` with no underline**, only turning `--accent` on hover.

Footer: mono "Daniel Roth — Product Strategy" (left) · "© 2026 · Less, but load-bearing" (right).

## Design direction — Swiss Minimal

**DNA**: A precise, grid-driven canvas in the International Typographic tradition. **Hairline rules + a strict 12-column grid are the only structure — "lines, not cards."** White space is the material. Neutral grotesque sans (Inter), small and tight; mono (IBM Plex Mono) for all figures, indices, dates, and pills. One electric-blue accent reserved for links, the CTA hover, list arrows, quote marks, and the single accent word in the headline. **Zero rounded corners, zero drop-shadows, zero gradients, zero decorative color.** Section heads use a top *strong* (ink) hairline; rows/cells use thin (`--hairline`) rules. Numbers, labels, and dates align to the grid. Reads calm, exact, credible.

**Tokens** (CSS variables on `:root`, obey exactly):

- **Colors**: `--canvas:#ffffff` · `--surface:#f6f6f4` · `--ink:#0d0d0d` · `--ink-muted:#525252` · `--ink-subtle:#909090` · `--accent:#1452ff` · `--accent-hover:#0a3fd1` · `--hairline:#e2e2dd` · `--hairline-strong:#0d0d0d`
- **Fonts**: `--font-sans:'Inter', -apple-system, BlinkMacSystemFont, sans-serif` · `--font-mono:'IBM Plex Mono', ui-monospace, monospace`
- **Google Fonts `<link>`** (the only font source): `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap`
- **Spacing**: `--section:96px` · `--block:32px` · `--gutter:24px` · `--pad:24px`. Each `.section` is `padding:var(--section) 0`, but **adjacent sections collapse the gap**: `.section + .section{padding-top:0}` so the rhythm between stacked sections is one `--section`, not two. The hero uses `padding-top:80px; padding-bottom:var(--section)`. Section heads end with `padding-bottom:var(--block)`. At ≤900px `--section:72px / --block:28px`; at ≤600px `--section:56px / --pad:18px`.
- **Layout**: `--maxw:1200px` (the `.shell` wrapper: `max-width:var(--maxw);margin:0 auto;padding:0 var(--pad)`). The reusable `.grid` = `grid-template-columns:repeat(12,1fr);column-gap:var(--gutter)`.
- **Type scale** (real values, fluid where the page is fluid):
  - body: 16px / 1.55 / weight 400
  - hero headline: `clamp(34px, 6vw, 56px)` / line 1.05 / letter-spacing -1.6px / 600 / `max-width:16ch`
  - section h2: 28px / 1.1 / -0.02em / 600
  - metric figure: `clamp(24px, 3.4vw, 34px)` / line 1 (mono)
  - service h3: 20px 600; belief h3: 19px 600; quote blockquote: 17px 500; contact lead: `clamp(24px, 3.4vw, 32px)` / 600 / -0.02em / `max-width:18ch`
  - `.label`: 12px / 500 / 0.08em / uppercase / `--ink-subtle`
  - `.mono` / `.index` / figures: IBM Plex Mono 13px
- **Radius / shadow**: `border-radius:0` everywhere; **no `box-shadow` anywhere** in the page content.

## Signature techniques (pure CSS, load-bearing for the look)

1. **Grid panels built from borders, not boxes.** For `metrics` (4 col), `services` (3 col), `quotes` (2 col): put `border-top:1px solid var(--hairline-strong); border-left:1px solid var(--hairline)` on the container, then `border-right` + `border-bottom:1px solid var(--hairline)` on each cell. The shared hairlines read as one ruled lattice — no card backgrounds, no gaps. Cells set a `min-height` so the lattice stays even: metric cells `min-height:132px` (`padding:24px 20px 22px`), service cells `min-height:320px` (`padding:24px`), quote cells `min-height:220px` (`padding:28px 24px`); each is `display:flex;flex-direction:column` so the metric label / service list / quote figcaption can `margin-top:auto` to the bottom rule. Collapse: metrics 4→2 col at ≤900px and →1 at ≤380px; services 3→1 and quotes 2→1 at ≤900px (drop the `min-height` when collapsed).
2. **Strong-then-thin section heads.** `.section-head` is a 12-col grid with `border-top:1px solid var(--hairline-strong); padding-top:16px`: mono index in cols 1–2, h2 in cols 3–10, a right-aligned muted note in cols 11–12 (the note `display:none` under 900px).
3. **Tabular list rows.** Every list module is a `border-top:1px solid var(--hairline-strong)` container of grid rows, each `align-items:baseline; border-bottom:1px solid var(--hairline)`. The column ratios differ per module and are load-bearing: `selected_work` `0.6fr 2.4fr 2.4fr 1.2fr` (`padding:22px 0`, plus a `worktable-head` label row at `padding:12px 0`), `beliefs` `0.6fr 3fr 3fr` (`padding:26px 0`), `experience` `1.4fr 2.2fr 3fr` (`padding:20px 0`), `tools` `1.4fr 4fr` (`padding:18px 0`). `selected_work` has the header label row, mono no./result, and `.work-row:hover{background:var(--surface)}` (transition `background-color .12s linear`). Result figures right-aligned; the "→/Series A" glyph in `--accent`. At ≤900px these list grids collapse to a single column (beliefs keeps its number column: `0.6fr 11fr`).
4. **Mono pills (outlined, square).** `tools` items are `<li>` with `border:1px solid var(--hairline); padding:4px 10px; border-radius:0` in mono — flex-wrapped, no fill.
5. **Arrow bullets.** Service-list items use `li::before{content:"→"; color:var(--accent)}` and each item gets a `border-top:1px solid var(--hairline)`.
6. **Accent curly quotes.** `blockquote::before{content:"\201C"}` / `::after{content:"\201D"}` colored `var(--accent)`; quote figcaption sits on a hairline (`margin-top:auto; border-top; padding-top:14px`).
7. **Hard-edged square portrait.** The hero portrait `img` is `width:clamp(150px,15vw,190px)` square, `object-fit:cover`, `border:1px solid var(--hairline-strong)`, radius 0, no shadow. The 26px brand thumbnail uses the same treatment.
8. **The CTA button is the only filled element.** `.btn`: `background:var(--ink); color:var(--canvas); border:1px solid var(--ink); border-radius:0; padding:14px 20px` with a mono `→`; on hover it flips to `background/border:var(--accent); color:#fff` (transition `.15s linear`). Links are accent text with a 1px `currentColor` underline (the inline link inside the `contact` lead bumps to a **2px** underline); `a:hover{color:var(--accent-hover)}`; `::selection{background:var(--accent);color:#fff}`.

## Photo + toggle contract

The page ships a real local portrait, `portrait.jpg` (square, hard-edged, hairline border — Swiss treatment), used in two places: the 26px brand thumbnail and the hero `figure`. Default = photos ON; `sample.png` is taken with photos ON.

- Each `<img class="u-photo" src="portrait.jpg" alt="Portrait of Daniel Roth, product strategy consultant">`.
- Typographic fallback alongside it: the brand initials `<span class="avatar u-fallback" aria-hidden="true">DR</span>` (a 26px bordered square). The hero portrait simply hides when photos are off (`body.no-photos .hero-portrait{display:none}`).
- Fixed bottom-right toggle (verbatim):
```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos">
  <span>照片 Photos</span>
  <button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button>
</div>
<script>
(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();
</script>
```
```css
.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .brand .u-fallback{display:grid !important}  /* restore the initials block's grid centering */
```
(The toggle is the one in-page exception that uses a pill + shadow — it is demo chrome, not part of the Swiss style.)

## Motion

Restrained. Elements that carry class `.reveal` start `opacity:0; transform:translateY(10px)` and transition to `opacity:1; transform:none` over **0.5s ease (both opacity and transform)** when revealed. JS: an `IntersectionObserver` with `threshold:0.1` adds `.in` once and unobserves; hero reveals get a **staggered `transition-delay` of `i*80ms`**. In-page anchor clicks `scrollIntoView({behavior:'smooth'})`. Under `prefers-reduced-motion: reduce` (or no IO support) every `.reveal` is set to `.in` immediately, no transitions, and anchor scroll falls back to `auto`. No continuous animation, no parallax, no letterbox/sunburst effects.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no npm, no JS framework.
2. The **only** external resources are the Google Fonts `<link>` and the local `portrait.jpg`. No other remote images, no Three.js/WebGL/heavy canvas.
3. Responsive 360–1440px on a real 12-column CSS grid (breakpoints at 900 / 600 / 380px collapse the multi-col panels to 2→1 col). Semantic HTML; accessible: AA contrast, visible focus rings (`:focus-visible{outline:2px solid var(--accent);outline-offset:3px}`), alt text, `aria-labelledby` per section, honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no filler clichés. Match the page section-for-section.
5. Restraint over decoration. Looks like a precise Swiss poster (lines, not cards), not a generic SaaS template.

**Output: the complete `index.html` and nothing else.**
