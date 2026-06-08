# 生成 Prompt — Newsprint（报纸版式）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。唯二的外部资源：一个 Google Fonts `<link>`（Playfair Display + Spectral）和一张本地肖像 `portrait.webp`。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Newsprint** design direction — a broadsheet newspaper front page rendered for the screen. All CSS in one `<style>`, all JS inline. No build step, no frameworks, no CDN except the one Google Fonts `<link>`.

## The person (brief)

- **Name**: Hannah Cole
- **Role**: Investigative journalist
- **Audience**: editors, readers, and tipsters
- **Primary goal**: get visitors to read a story, then send a tip
- **Thesis (the angle the whole page serves)**: *"I follow the money until it names a person."* The page reads like the front page of a serious newspaper — her byline IS the masthead nameplate.
- **Tone**: rigorous, plain-spoken, unflinching, public-interest
- **Proof points (use these, concretely — no filler)**:
  - 12 years on the investigations beat (FOIA, court filings, corporate registries)
  - 2023 Pulitzer Prize **finalist** (National Reporting)
  - Bylines in *The Washington Post*
  - Records-driven, follow-the-money method
- **Contact**: `tips@hannahcole.press` (Signal on request), Newsletter "The Paper Trail", X / @hannahcole, "Editors welcome"
- **Masthead furniture**: topline reads `Vol. XII · No. 207` / `The Investigations Desk` (in red) / `Tuesday, June 3, 2026 · Late Edition`. Sub-nameplate: *Investigative Journalist — "I follow the money until it names a person."*

## Module plan (in this order)

Tag every section's opening element with `data-module` / `data-variant`. Use the page's verbatim copy below.

1. `hero` / `bold_statement` — **Masthead + lead.** A `<header>` outside the main wrap holds: a `.topline` (the three-part dateline above), a centered `.masthead` nameplate **Hannah Cole** (heavy Playfair; use a non-breaking space — `Hannah&nbsp;Cole` — so the name never wraps) with the italic sub-nameplate, closed by a 3px red rule (`.redrule`). Then the lead section (`.lead`, a 2-col grid on ≥820px): left column = red kicker **"The Lead"**, headline **"I follow the money *until it names a person.*"** (the last clause in `<em>` italic), italic deck *"Twelve years on the investigations beat, reporting that starts with a document and ends with someone accountable. For editors who need it nailed down, and for readers who deserve to know."*, a byline **"By Hannah Cole · Investigative Reporter · The Washington Post"** (over a hairline top border), and a refer link **"Read the latest →"** (red, underlined). Right column = an `<aside class="creds">` "front-page index" titled **"On the Record"**, a ruled list: `12 yr` — On the investigations beat — FOIA, court filings, corporate registries · `2023` — **Pulitzer Prize finalist**, National Reporting · `P.` — Bylines in **The Washington Post** · `↗` — Method: follow the money until it names a person.
2. `selected_work` / `list` — **"Selected Investigations"** (tag: "Four Stories"). 4 stacked stories divided by hairlines; each: red meta `<outlet> · <year>` (outlet in subtle grey) — **all four use the same outlet, "The Washington Post"**; serif headline as a link with a trailing `↗`, one-line dek:
   - **The Shell Game** · The Washington Post · 2024 — "How a string of anonymous LLCs quietly moved $40 million out of a county pension fund — and the three signatures that finally connected them to one man."
   - **Permits for Sale** · The Washington Post · 2023 — "A zoning board, a developer, and the envelopes in between. Eighteen months of meeting minutes, bank records, and one resignation."
   - **The Quiet Vendor** · The Washington Post · 2022 — "A no-bid contractor billing three agencies for the same work — uncovered by cross-referencing invoices nobody thought to read side by side."
   - **Off the Books** · The Washington Post · 2021 — "Overtime that never happened, on payrolls that did. A records request, a spreadsheet, and a year of denied timesheets."
3. `story` / `columns` — **"About the Reporter"** (tag: "How I Report") in TRUE multi-column body copy (`columns:2` ≥760px, `columns:3` ≥1080px, justified, hyphenated, hairline column rules). First paragraph opens with a red **drop cap** (first-letter). Inside the column flow sits the documentary `figure.cut` (see photo contract). A mid-flow subhead **"Follow the money"** (red, uppercase, inline `.subhead` on a left-aligned paragraph). Use the page's 5 paragraphs verbatim (opening "The story is almost never in the press release…"; second-source discipline; "Follow the money"; "I write for editors who need it nailed down…"; closing "Tips matter…").
4. `metrics` / `big_numerals` — **"By the Numbers"** (tag: "The Record"). A ruled 4-cell grid (1 → 2 → 4 cols). Giant Playfair numerals with a small red superscript unit; each over a hairline-topped caption with a red uppercase label:
   - **12** — *Years on the beat* — "FOIA requests, court dockets, and corporate registries, full time."
   - **$210<small>M</small>** — *Traced & reported* — "Public money my reporting followed from a ledger to a name."
   - **9** — *Officials resigned* — "Or were indicted in the months after a story ran."
   - **600<small>+</small>** — *Records requests filed* — "Sent to county clerks, agencies, and registered agents."
5. `beliefs` / `numbered` — **"The Rules of the Desk"** (tag: "Standards"). 4 numbered items (big red Playfair numeral + serif headline + grey body), hairline-divided:
   1. **One document is a lead, not a finding.** — "Nothing runs on a single source. Every claim gets a second filing, a cleared check, or a person who was in the room — or it stays in the notebook."
   2. **If a lawyer can't read it, the reader can't either.** — "Every line has to survive a hostile read before it survives an edit. Insinuation is not reporting; the records have to carry the weight."
   3. **The subject hears the worst of it first.** — "No one is named in a story before they've had every allegation, in detail, with time to answer. Surprises belong in the lede, not in the right-of-reply."
   4. **Protect the source above the scoop.** — "A tip is a trust. I'd kill a story before I'd burn the person who brought it. Signal, encrypted mail, and a clear record of what was promised."
6. `logos_press` / `mentioned_in` — **"As Cited & Reported"** (tag: "Picked Up"). A wrapping flex list (`border-top:2px` rule) of italic serif outlet names, each with a small uppercase grey `.src` label *above* (`.src{font-style:normal;font-weight:600;font-size:.62em;letter-spacing:1.5px;text-transform:uppercase;display:block;margin-bottom:6px;color:var(--ink-subtle)}`); each `li` carries `border-right`+`border-bottom:1px solid var(--hairline)` with `padding:18px 26px 18px 0;margin-right:26px;line-height:1`:
   - Front page — The Washington Post · Followed up — ProPublica · On air — NPR — Morning Edition · Entered as evidence — U.S. Senate Subcommittee · Reprinted — Columbia Journalism Review · Cited — The Marshall Project
7. `writing` / `list` — **"From the Newsletter"** (tag: "The Paper Trail"). Ruled index list (date · title-link · read-time, 3-col ≥720px):
   - May 2026 — **How to Read a Procurement Log** — "A field guide to no-bid contracts, sole-source justifications, and the line items that always lie first." — 8 min read
   - Apr 2026 — **The FOIA Letter I Send Every Time** — "The exact language that gets records offices to answer — and what to do with the denial when they don't." — 6 min read
   - Mar 2026 — **Anatomy of a Shell Company** — "Registered agents, nominee directors, and the three filings that connect an anonymous LLC to a person." — 11 min read
8. `speaking` / `list` — **"Talks & Panels"** (tag: "In Person"). Same ruled index list (year · title · dek · venue):
   - 2026 — **Following the Money After the Paywall** — "Keynote on funding investigative work that doesn't pay for itself." — IRE Conference
   - 2025 — **Source Protection in the Age of Metadata** — "Workshop on secure tip lines, Signal hygiene, and what to promise." — Columbia Journalism School
   - 2024 — **The Records Nobody Reads Side by Side** — "Panel on cross-referencing invoices, payrolls, and meeting minutes." — SXSW EDU
9. `faq` / `two_column` — **"Questions from the Desk"** (tag: "Before You Write"). 4 Q&A in a 2-col grid ≥760px; each headline prefixed by a red **"Q. "** via `::before`:
   - **How do you protect a source?** — "Signal or encrypted mail, no notes that name you, and nothing promised I can't keep. I've gone to the mat to protect tippers before, and I will again."
   - **Do I need proof to send a tip?** — "No. A hunch, a document, or a number that looks wrong is enough to start. The reporting is my job — your job is to point."
   - **Will my name be in the story?** — "Only if you want it there, on the record, with your consent. Most sources are never named, and that is by design."
   - **Can editors commission a piece?** — "Yes — I take select freelance investigations on contract. Reach the desk below and I'll tell you honestly what's reportable."
10. `contact` / `cta_band` — **"Send a Tip"** front-page box (`.tipbox`: 2px ink border, surface fill, NO shadow). 2-col grid ≥760px: left = red kicker "Public Interest", big serif headline **"Send a Tip"**, italic lead-p "Saw something that doesn't add up? A document, a contract, a number that's wrong? I read everything, I protect sources, and I follow it as far as it goes.", and the red tip email `tips@hannahcole.press`. Right = a ruled `.tip-meta` list: Secure → Signal on request · Newsletter → The Paper Trail · Social → X / @hannahcole · Desk → Editors welcome. Footer colophon: "© 2026 Hannah Cole · Investigative Journalist" / "Set in Playfair Display & Spectral · Printed for the screen".

## Design direction — Newsprint

**DNA**: A real broadsheet front page rendered for the screen. Newsprint off-white stock, jet-black ink, a single arterial **red** used only for kickers, numerals, and the masthead rule. Old-style serif headlines (Playfair Display) over serif body (Spectral); TRUE multi-column justified body with a **drop cap**; the masthead nameplate sits over a 3px-double-then-red rule. Hierarchy comes from **hairline rules, column width, and type scale** — built as "lines, not cards": sections are separated by 2px rules, list rows by 1px hairlines, metric/cite cells by hairline grid borders. **Square corners everywhere (radius 0); no boxes-with-fills as cards.** Documentary photo runs inside a column with an italic cutline and grayscale. The one boxed element is the tip box (2px border, no shadow). Avoid: rounded cards, sans-serif body, centered hero, purple gradients. (NOTE: the page does NOT use drop shadows on content — the only `box-shadow` is on the fixed atlas photo toggle pill.)

**Tokens** (define as CSS variables, obey exactly):
- **colors**: `--canvas:#f5f2ea` · `--surface:#efe9dd` · `--ink:#1a1714` · `--ink-muted:#4d4740` · `--ink-subtle:#857d70` · `--accent:#c0241f` · `--accent-hover:#97160f` · `--hairline:#cdc4b3` · `--rule:#1a1714`
- **fonts**: `--serif:'Playfair Display', Georgia, 'Times New Roman', serif` (700/800/900 + 700 italic — masthead/headlines/numerals/drop cap) · `--body:'Spectral', Georgia, 'Times New Roman', serif` (400/500/600 + 400 italic — body/deck/kicker/byline). Base `body` = 17px/1.6.
- **Google Fonts `<link>`** (only external stylesheet): `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap`
- **type scale (real `clamp()` from the page)**:
  - masthead nameplate `clamp(40px,11vw,86px)`, weight 900, line-height .92, letter-spacing -1px
  - sub-nameplate `clamp(13px,2.6vw,17px)` italic
  - lead headline `clamp(34px,7vw,58px)`, weight 800, line-height 1.02, -.5px
  - deck `clamp(18px,2.6vw,21px)` italic, `max-width:40ch` (tip lead-p `18px` italic, `max-width:46ch`)
  - section `h2` `clamp(22px,4vw,30px)`, weight 800
  - story/index/cite headline `clamp(22px,3.4vw,30px)` (stories), `clamp(19px,2.8vw,24px)` (index)
  - metric numeral `clamp(40px,7vw,58px)`, weight 900, line-height .95, -1px (`small` unit = .42em, red, super)
  - belief numeral `clamp(30px,5vw,44px)`, weight 900, red; belief headline `clamp(19px,3vw,24px)`
  - cited item `clamp(17px,2.4vw,22px)` italic; faq headline `clamp(17px,2.4vw,21px)`
  - tip headline `clamp(28px,5vw,44px)`; tip email `clamp(20px,4vw,26px)`; tipbox padding `clamp(24px,5vw,44px)`
- **spacing tokens**: `--section:72px` (vertical section padding) · `--block:32px` (header→body gap) · `--tight:14px`. Wrap: `max-width:1180px`, `padding:0 20px`. Asymmetric pads: `.lead` = `var(--section) 0 56px`; `.tip` = `var(--section) 0 84px`; `.colophon` = `26px 0 60px`. The lead becomes a `1.55fr 1fr` grid (`gap:48px`) only ≥820px; tip-grid `1.3fr 1fr` (`gap:48px;align-items:center`) ≥760px.
- **rules**: hairlines `1px solid var(--hairline)`; section/masthead rules `2px`/`3px solid var(--rule)`; the masthead bottom rule is `3px double var(--ink)` and the `.redrule` is `3px` of `var(--accent)`.

## Signature techniques (pure CSS/SVG)

1. **Paper grain** — on `body`: `background-image:radial-gradient(rgba(26,23,20,.018) 1px, transparent 1.4px); background-size:4px 4px;` over `--canvas`. A whisper-faint dot screen; do not make it visible at a glance.
2. **Masthead stack** — centered nameplate (`.masthead`, `padding:22px 0 16px`) closed by `border-bottom:3px double var(--ink)`, immediately followed by a separate `.redrule{height:3px;background:var(--accent)}`. The topline above has `border-bottom:1px solid var(--ink)`, 11px uppercase `letter-spacing:1.5px`, with the edition in red.
3. **Drop cap** — `.report-body p:first-of-type::first-letter{font-family:var(--serif);font-weight:900;float:left;font-size:4.6em;line-height:.74;padding:6px 10px 0 0;color:var(--accent)}`.
4. **True newspaper columns** — `.report-body{columns:2;column-gap:42px;column-rule:1px solid var(--hairline)}` (3 cols ≥1080px); paragraphs `text-align:justify;hyphens:auto`. Figure uses `break-inside:avoid`.
5. **Underline-grow link** — story/index headline links draw a red underline via a sized background image: `background-image:linear-gradient(var(--accent),var(--accent));background-size:0% 2px;background-repeat:no-repeat;background-position:0 100%;transition:background-size .25s ease;padding-bottom:2px`. The grow is triggered by **hovering the whole row**, not just the link — selector is `.story-item:hover h3 a, .story-item h3 a:focus-visible` (and `.index-item:hover h3 a, .index-item h3 a:focus-visible`), which sets `background-size:100% 2px` and `color:var(--accent)`.
6. **Ruled grids, not cards** — metrics (`.figures`) and cites (`.cited`) are CSS grids/flex where each cell carries `border-top`/`border-right`/`border-bottom:1px solid var(--hairline)`, with `:nth-child`/`:last-child` rules stripping the outer edges so the result reads as a printed table, never a card deck.
7. **Metric superscript unit** — `.num small{font-size:.42em;color:var(--accent);font-weight:800;vertical-align:.55em;margin-left:2px}` for the `M` / `+` on `$210M`, `600+`.
8. **FAQ "Q." marker** — `.qa-item h3::before{content:"Q. ";color:var(--accent);font-weight:900}`.
9. **Documentary cut** — `figure.cut .u-photo{filter:grayscale(1) contrast(1.06)}` with `border-top:2px solid var(--rule)` and an italic `figcaption` whose `b` lead-in is red uppercase 11px ("FROM THE FILE —").
10. **Red selection / focus** — `::selection{background:var(--accent);color:#fff}` and `:focus-visible{outline:2px solid var(--accent);outline-offset:3px}`.

## Photo + toggle contract

The page **ships a real local portrait** (`portrait.webp`) — do NOT substitute a CSS/SVG avatar or claim "no external assets".

- The documentary photo is `<img class="u-photo" src="portrait.webp" width="1200" height="800" alt="...documentary street photograph...">` inside `figure.cut` in the `story` columns (grayscale via CSS).
- Its fallback is a `u-fallback` typographic block in the same figure: a ruled `.fig-fallback` with a small "Figure — From the file" label and a serif pull-quote *"The paper trail does not care whose name is on the door."* (so the column doesn't collapse when photos are off).
- Default = photos ON. Include verbatim:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  ```
- Fixed bottom-right toggle, markup + script verbatim before `</body>`:
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

One effect only: a subtle fade-up on scroll. Elements get class `reveal` (`opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease`); a `.reveal.in` state resets to `opacity:1;transform:none`. An `IntersectionObserver` (`threshold:.12`, `rootMargin:'0px 0px -8% 0px'`) adds `.in` once per element then unobserves. Under `prefers-reduced-motion:reduce` (or no IO support), reveal elements are shown immediately and the transition is disabled. No other animation — no marquees, letterbox bars, or unfurls.

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no JS framework, no Three.js/WebGL.
2. The **only** external resources are the Google Fonts `<link>` and the local `portrait.webp` next to the file. No other remote images or stylesheets.
3. Responsive 360–1440px, mobile-first: multi-column copy and all grids collapse to single column on narrow screens; the masthead nameplate stays legible at 360px (clamp handles it).
4. Semantic HTML; accessible — contrast, visible focus, alt text, honor `prefers-reduced-motion`.
5. Real content from the brief above — no lorem, no "passionate about innovation".
6. Implement every module in order with its `data-module`/`data-variant` tags and the photo + toggle contract (default photos ON).
7. It must look intentionally *printed* — a real front page built from rules and type — not AI-generic.

**Output: the complete `index.html` and nothing else.**
