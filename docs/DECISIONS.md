# DECISIONS — why it's built this way

Short decision records. Each: the decision, why, and what it rules out. If you're
about to change one of these, read the "why" first — most were deliberate.

## D1 — Layered hybrid, not one template
**Decision:** diversity comes from `visual direction × module/structure × content angle`,
each layer curated but combinable — not from one big template, and not from "let the AI
freestyle."
**Why:** a single template → everything looks the same; pure freestyle → the model falls
back to default taste (the "AI purple gradient") and converges anyway. Structure is the
*source* of diversity with a quality floor, not its enemy.
**Rules out:** a single master template; relying on prompt-only free generation.

## D2 — Single-file self-contained HTML (not a React component tree)
**Decision:** every generated page is one self-contained `index.html` (inline CSS/JS),
external only = Google Fonts + one local image.
**Why:** the real product hosts artifacts as **single-file HTML at `<slug>.ancher.app`**
(see `ancher/api` `public_share.py`). A React/Tailwind component tree (what one early
proposal assumed) needs a build step and can't be served that way. The atlas must match
the real hosting model or it's not a faithful eval.
**Rules out:** frameworks, build steps, multi-file pages, remote images (except the one
local photo we explicitly allow for the photo demo).

## D3 — DESIGN.md format borrowed from awesome-design-md (two registers of fields)
**Decision:** direction tokens live in a `DESIGN.md` (YAML frontmatter, ~Google Stitch
DESIGN.md) — many precise token fields **plus** one evocative prose `description`.
**Why:** the worry "too many fields kills creativity" is answered by splitting fields into
two registers: **constraint** fields (color/type/spacing) are many and precise — they set
the quality floor and are mostly injected as CSS vars, so they don't spend the model's
creative budget; **latitude** fields (the prose DNA, module `layout_hint`) are few and
evocative — that's where creativity lives. Avoid the mushy middle (long *prescriptive*
prose).
**Rules out:** stripping tokens to "free" the model; and over-specifying layout/copy.

## D4 — Self-generated screenshots (not screenshots of real sites)
**Decision:** a direction's `sample.png` is a screenshot of *its own* generated
`index.html`.
**Why:** it's self-validating (ugly screenshot ⇒ the spec is wrong ⇒ fix the spec), it
doubles as a regression **eval set** for the real generator, and it's IP-clean (we own it).
Screenshots of real sites would be clone targets (vision-to-code is unstable and converges)
and a licensing problem.
**Rules out:** "copy this site" as a generation mode. Reference sites inform the DNA; they
are not cloned.

## D5 — Photo + toggle, default ON
**Decision:** pages with a photo wire it as `.u-photo` with a `.u-fallback`, plus a fixed
"照片 Photos On/Off" toggle (default On) that flips `body.no-photos`.
**Why:** lets us evaluate, per direction, whether the design *needs* a photo or works as a
typographic layout — a real product question (users may not upload one). Default On because
that's the richer default.
**Note:** the seed 5 directions use `thispersondoesnotexist` faces; new directions use the
artistic images in `assets/` (more diverse, per user preference). In the real product the
slot = the user's uploaded image URL.

## D6 — Modules are structure (neutral), directions carry style
**Decision:** module specimen sheets use neutral shared tokens + system fonts; directions
own the visual identity.
**Why:** modules answer "what sections, in what order, which variant" — that's orthogonal to
visual style. Showing a module in a neutral skin keeps the focus on structure. Keep the
module schema **thin** (purpose + a few evocative variant `layout_hint`s), not pixel specs.
**Rules out:** baking a visual brand into modules; an exhaustive heavy module schema.

## D7 — Subagents/workflows as the generator (for now)
**Decision:** we generate pages with fan-out subagents/workflows, treating "an agent that
can write frontend" as a stand-in for the real backend `html_generator`.
**Why:** decouples building the素材/eval from finishing the backend (don't block each other).
Problems the agents hit (e.g. a missed reduced-motion case) are exactly the eval feedback
to fold into the real generator's contract later.
**Rules out:** waiting on the backend to start curating the atlas.

## D8 — Gallery architecture reused from ancher-html-style; build from frontmatter
**Decision:** registry-as-single-source-of-truth + per-item folder + static gallery, copied
from `ancher-html-style`; `registry.json` is generated from `DESIGN.md` frontmatter (with
artifact validation), not hand-maintained.
**Why:** proven pattern; auto-generation prevents broken cards (validation fails the build if
a direction is missing one of its 4 artifacts). New repo (not folded into ancher-html-style)
to keep this lightweight catalogue separate from that repo's heavy WebGL effects.
**Rules out:** hand-maintained registries; mixing concerns into the effects repo.

## D9 — Stable kebab `id` as primary key; never a running number
**Decision:** folder name = stable `id`; ordering is a separate curated list.
**Why:** art_style's lesson — a global running number shifts every downstream reference when
you insert an entry. (See `scripts/build_registry.py` `order`.)

## D10 — The module×direction matrix is LIVE (skin switcher), not 648 static pages
**Decision:** to show a module across directions, modules use a shared CSS-variable **token
contract** and the Skin Lab swaps in a direction's tokens (`skins.json`) at runtime — not a
generated `direction × module` page per cell.
**Why:** 27×24 = 648 (or ×52 = 1404) static pages is huge to generate AND brittle to maintain
(change one token → regen many). A token swap gives the whole matrix from one page, for free,
and stays in sync. Many cells are also nonsensical, so a complete static grid wastes effort.
**Caveat / rules out:** a token swap captures palette/type/spacing/radius but NOT a direction's
*signature structure* (brutalist hard shadow, glass blur, memphis squiggles). The fully
in-character version lives on the real direction page — which is what the reverse links point to.
Per-direction "signature" CSS hooks can deepen the skin later.

## D11 — Atlas chrome lives in the viewer shell; the inspector decomposes the REAL page
**Decision:** the "组件" feature is an in-context **inspector** in the viewer shell: it reads the
framed page's `[data-module]` sections and annotates *that page* in place (outline + label +
side panel), rather than linking to a generic demo. Direction pages stay pristine; the shell
injects the overlay into the iframe.
**Why:** the user is looking at a specific page — "show me THIS page's components" is the useful
question; jumping to unrelated demo content was the wrong interpretation. Keeping the chrome in
the shell preserves the pristine-artifact rule (D2-adjacent). Requires every section tagged with
`data-module`/`data-variant` (the substrate; 124 sections across 27 pages).
**Rules out:** baking inspector UI into `directions/*/index.html`; heading-text-only detection
(less precise than canonical module tags).

## D12 — Deploy as a standalone static site (this repo is hostable; the wiki is not)
**Decision:** deploy the whole repo to Vercel (`vercel.json`: `/`→`/site/` redirect + `.md`/`.json`
charset headers) at `ancher-site-atlas.vercel.app`.
**Why:** unlike the private `wiki` KB (never deploy whole), this repo *is* a standalone static
site meant to be browsable; confidential banners were intentionally removed. The charset header
fixes raw-`.md` mojibake in browsers (files are valid UTF-8; http.server just sends no charset).
**Rules out:** GitHub-auto-deploy coupling (manual `vercel deploy` snapshots, like the other repos).

## D13 — GSAP Motion Lab: vendor GSAP, data-driven cards, body-end load
**Decision:** the GSAP lab (`site/gsap-lab.html` + `gsap-demos/` + `vendor/gsap/`) **vendors** GSAP
3.13 into the repo (`vendor/gsap/`, root-absolute `/vendor/gsap/*.min.js`) rather than a CDN;
the 54 effect cards are **data-driven** (one JS file per plugin family pushing to
`window.GSAP_CARDS`, contract in `site/gsap-cards/CONTRACT.md`), not 54 static HTML pages; and
both the hub and every demo load the GSAP `<script>`s at the **end of `<body>`**, not in `<head>`.
**Why:**
- *Vendored, not CDN* — GSAP 3.13 is 100% free (Webflow); vendoring keeps the lab self-contained,
  offline-able, and version-pinned, consistent with the repo's no-build / single-host model. (Labs
  may use external scripts; *direction* pages still may not — see the generated-page contract.)
- *Data-driven cards* — same anti-explosion logic as D10: one `init(stage,ctx)` per card, lazily
  run + IO-gated, beats 54 hand-maintained static pages and lets the hub auto-number/group them.
- *Load at end of `<body>`* — **Flip's `_initCore` is body-dependent**: `gsap.registerPlugin(Flip)`
  while `document.body` is still null (i.e. from `<head>`) leaves Flip half-initialized and every
  `Flip.getState` later throws `"I is not a function"`. Registering after `<body>` exists fixes it
  (and is harmless for the other plugins). This bit us once; it's why the demos put GSAP at body-end.
**Also:** demo pages stay **pristine** (no atlas chrome; the in-page iframe viewer provides it),
mirroring D11; screenshot thumbnail → live iframe (a static PNG is a weak proof for motion, so it's
only the gallery cover). The lab is positioned as **internal素材 / eval set**.
**Rules out:** CDN-loaded GSAP; 648-style static card pages; registering body-dependent plugins in `<head>`.
