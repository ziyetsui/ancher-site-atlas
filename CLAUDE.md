# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this is

**Personal Site Style Atlas** — a curated, browsable reference of personal-website
**design directions** (27) and structural **modules** (30), plus the copy-pasteable
prompts that generate them, plus a **component inspector** and a **skin lab** for
understanding how modules look across directions. It is the素材 (素材库) layer for
Ancher's AI personal-site generator: each direction ships a generation prompt,
design tokens, a **self-generated** sample page, and a screenshot — so a prompt can
be copied into any capable frontend agent and reproduce roughly the same result. It
doubles as an eval set for the real generator.

Content/data + static-site project — no framework, no build step required to view
(plain HTML/CSS/JS + a stdlib Python script). Hosted on Vercel:
**https://ancher-site-atlas.vercel.app**.

**New here? Read `docs/` first:**
- [`docs/CONTEXT.md`](docs/CONTEXT.md) — what this is, the build log, and a map of every
  related repo/folder (art_style, awesome-design-md, ancher-html-style, ancher/api, …).
- [`docs/DECISIONS.md`](docs/DECISIONS.md) — why it's built this way (the non-obvious calls).
- [`docs/COVERAGE.md`](docs/COVERAGE.md) — design-language coverage vs awesome-design-md.
- [`docs/MODULE_DIRECTION_CROSS_ATLAS_PLAN.md`](docs/MODULE_DIRECTION_CROSS_ATLAS_PLAN.md) —
  the module×direction cross-atlas plan (Skin Lab is its first cut).
- [`agents/research.md`](agents/research.md) — reusable `@research` protocol for turning
  project docs into a system model, decisions, gaps, and an execution plan.

Deeper rationale in the wiki (`~/wiki/ancher/engineering/`):
`personal_site_atlas_collection_v1.md` (exec doc), `personal_site_generation_strategy_v1.md`,
`html_js_generation_quality_v1.md`.

## Structure

```
directions/<id>/        # 27 directions, one folder each
  DESIGN.md             # structured tokens + DNA (YAML frontmatter, ~Google Stitch DESIGN.md)
  prompt.md             # ★ copy-pasteable generation prompt (the apply-able artifact)
  index.html            # the page that prompt produces; sections tagged data-module/data-variant
  sample.png            # full-page screenshot (gallery thumbnail + proof)
  portrait.{jpg,webp}   # the persona photo used by the page (optional)
modules/<category>/<id>.html   # 30 module "specimen sheets": all variants of one module, one file
                        #   (real photo slots use assets/*.webp; structure-only modules stay text)
modules/README.md       # module catalogue (5 categories → 30 modules → ~68 variants)
site/                   # the browse site
  index.html  js/atlas.js  css/atlas.css   # gallery (6 tabs: 设计方向 / 模块图鉴 / 组件实验室 / 文字动效 / 图像处理 / GSAP 动效)
  view.html   js/view.js                   # viewer shell: iframes a direction page + nav +
                                           #   the in-context COMPONENT INSPECTOR (组件 toggle)
  modules.html js/modules.js               # module gallery (live iframe preview per module)
  skins-lab.html                           # Skin Lab: same modules, live-reskinned per direction
  motion-lab.html                          # Text Motion Lab: 23 text-animation patterns (10 base + 13 extracted from direction pages)
  gsap-lab.html js/gsap-lab.js             # GSAP Motion Lab: 14 full-page GSAP demos + 54 effect cards
  gsap-cards/<family>.js                   #   catalog cards (one file per plugin family; push to window.GSAP_CARDS — see gsap-cards/CONTRACT.md)
  registry.json modules_registry.json skins.json gsap_registry.json
gsap-demos/<id>/        # 14 full-page GSAP demos (index.html + meta.json + sample.png), original styles, vendored GSAP
vendor/gsap/            # vendored GSAP 3.13 core + all bonus plugins (no CDN); root-absolute /vendor/gsap/*.min.js
scripts/build_registry.py   # scans directions/*/DESIGN.md -> registry.json (validates artifacts,
                            #   + validates modules_registry.json & skins.json + builds gsap_registry.json from gsap-demos/*/meta.json)
assets/                 # AI placeholder images (webp) + MANIFEST.md + _manifest.json
vercel.json             # static hosting: / -> /site/ redirect + .md/.json charset=utf-8
docs/                   # CONTEXT / DECISIONS / COVERAGE / cross-atlas plan
agents/                 # reusable agent protocols; @research abstracts docs into systems
```

## Core conventions

- **Stable kebab-case `id`** as the primary key (folder name = id). Never a running number.
- **Two registers of fields**: *constraint* fields (color/type/spacing tokens) are many and
  precise — they set the quality floor and don't limit creativity; *latitude* fields (the
  `description`/DNA prose, module `layout_hint`) are few and evocative. Avoid the mushy middle.
- **Self-generated proof**: a direction's `sample.png` is a screenshot of *its own* generated
  `index.html`. Screenshot wrong ⇒ spec wrong ⇒ fix the spec.
- **Modules are structure, not style**: module specimen sheets use neutral shared tokens +
  system fonts; directions carry the visual identity. The **Skin Lab** lets neutral modules
  borrow any direction's tokens live (the module×direction matrix without 648 static pages).

## Generated page contract (directions/*/index.html)

- Single self-contained HTML **except**: one Google Fonts `<link>` and one **local** image
  (`portrait.*`). No other external resources, no JS framework, no Three.js/WebGL.
- Define the direction's tokens as CSS variables; obey them exactly. Real persona content.
- Responsive 360–1440px, semantic, accessible (contrast, visible focus, alt, reduced-motion).
- **Tag each module section** on its opening tag: `data-module="<id>" data-variant="<v>"`
  (the inspector reads these to decompose the page). The hero may be a `<header>`/`<div>` —
  tag it too. Canonical module ids are in `modules/README.md`.
- **Photo + toggle contract** (pages with a photo): photo `<img>` (or its wrapper) gets class
  `u-photo`; the non-photo fallback gets `u-fallback`. Default = photos ON. Fixed bottom-right
  "照片 Photos On/Off" toggle flips `body.no-photos`:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}  /* + scoped grid/flex restores w/ !important */
  ```
  `sample.png` is taken with photos ON.

## Browse surfaces

- **Gallery** (`site/index.html`): 6 tabs — 设计方向 (cards), 模块图鉴 (→ modules.html),
  组件实验室 (→ skins-lab.html), 文字动效 (→ motion-lab.html), 图像处理 (→ image-lab.html),
  GSAP 动效 (→ gsap-lab.html). Clicking a direction card opens the viewer **in an in-page
  modal overlay** (frames `view.html?id=…&embed=1`) — you never leave the gallery; prev/next,
  the inspector, ESC/✕/backdrop-close, `?id=` deep-links and browser-back all work. cmd/ctrl-click
  still opens the viewer in a new tab.
- **Viewer shell** (`site/view.html`): iframes a pristine direction page; toolbar = back /
  prev-next / copy-prompt / **组件 (inspector)** / DESIGN.md / 原始页. The inspector is a
  toggle that **annotates the page you're looking at** — outlines + labels each `[data-module]`
  section in place and lists them in a side panel with explanations. (Direction pages stay
  pristine; the inspector lives in the shell and injects into the iframe.)
- **Skin Lab** (`site/skins-lab.html`): one set of token-pure modules + a 皮肤 picker; selecting
  a skin (a direction's tokens from `skins.json`) re-skins all modules live. `?skin=<id>` deep-link.
  Currently a prototype: 5 skins × 5 modules. Scaling = extend the token contract to all 24
  modules + extract all 27 skins (see the cross-atlas plan doc).
- **Text Motion Lab** (`site/motion-lab.html`): the **motion** layer — 23 text-animation patterns,
  in two registers: **01–10** are base text effects (typewriter / blur-in / glitch / scramble /
  flip / slice / stroke-draw / highlight-sweep / elastic / depth-shift); **11–23** are
  **extracted from the 27 direction pages' own motion** (jitter / riso-misregister / sticker-pop /
  neon-glow / underline-draw / marquee / tilt-in / reveal-stack / scanlines / blob-morph /
  clay-float / pulse-dot / button-press) — each of those credits + links its source direction(s)
  via `view.html?id=`. Each pure HTML/CSS/JS with no deps. Self-contained single file. Every card
  **auto-loops in-view** (one-shots replay after a ~1s pause via a per-effect `CYCLE`; continuous
  effects — in the `LOOP` set — run via CSS; both paused off-screen by a viewport-check on
  scroll/resize, not IO). Each card has a **复制 Prompt** button → copies a code-free natural-language
  brief (the `PROMPTS` map) you can hand to any frontend AI to reproduce that effect; 「复制整页源码」
  still copies the whole reference file (effects are comment-delimited so one can be lifted out).
  Respects `prefers-reduced-motion` (JS-driven effects render final text; CSS anims disabled; no
  loop timers). These are named patterns a generation prompt can request (e.g. "hero title uses the *blur-in* effect").
  All **27 skins** are extracted (from each direction's `:root`); the lab shows them across 5
  token-pure modules. Scaling further = extend the token contract to all 30 modules
  (see the cross-atlas plan doc).
- **GSAP Motion Lab** (`site/gsap-lab.html`): the **JS-driven motion** layer, built on **vendored
  GSAP 3.13** (`/vendor/gsap/`, all bonus plugins, no CDN). Two surfaces in one hub page:
  ① **完整演示页画廊** — 14 full-page demos (`gsap-demos/<id>/`), each an original visual style ×
  a cluster of GSAP plugins (SplitText / ScrollTrigger pin·scrub·parallax / ScrollSmoother /
  Flip / Draggable+Inertia / DrawSVG / MorphSVG / MotionPath / ScrambleText / Physics2D / Observer);
  registry-driven (`gsap_registry.json` from each demo's `meta.json`), screenshot thumbnail → click
  opens the **live** demo in an in-page iframe viewer. ② **特效图鉴** — 54 self-contained effect
  cards from `site/gsap-cards/<family>.js` (one file per plugin family, push to `window.GSAP_CARDS`;
  contract in `gsap-cards/CONTRACT.md`), grouped by plugin, **auto-play in-view / pause off-screen**
  via IntersectionObserver, each with **复制 Prompt** (code-free brief) + **复制代码** (real GSAP snippet).
  Respects `prefers-reduced-motion`. Demo pages are pristine (no atlas chrome) and load GSAP at the
  **end of `<body>`** (registering Flip in `<head>` before `<body>` exists leaves it half-initialized).
  Internal素材 / eval set — not part of the public Vercel deploy (downloaded assets ok; see
  `docs/superpowers/specs/2026-06-03-gsap-lab-design.md`).

## How to add directions / modules (the workflow pattern)

Fan out one subagent per direction/module. Each reads `directions/editorial/{DESIGN.md,prompt.md}`
for the format, copies an image from `assets/` to `directions/<id>/portrait.webp`, then writes
`DESIGN.md` + `prompt.md` + `index.html` (photo+toggle contract + `data-module` tags). After
generation, the orchestrator screenshots each page (photos ON, scroll first so
`IntersectionObserver` reveals fire), saves `sample.png`, runs `python3 scripts/build_registry.py`,
and verifies the gallery. The gallery picks up new entries automatically.

When taking sample screenshots: serve from repo root, load `/directions/<id>/index.html`, scroll
top→bottom to trigger reveals, then full-page screenshot. Full page is the proof.

## Assets

`assets/*.webp` (34) are AI placeholders (no real identities), named `<category>-<desc>.webp`
(portrait / editorial / bw / illustration / poster / landscape / fantasy / documentary). Lookup:
`assets/MANIFEST.md` (human) + `assets/_manifest.json` (machine). Prefer artistic / editorial /
illustration images for diversity. Add: drop a file, `cwebp -q 80 in.png -o out.webp`, add a
MANIFEST row. The original 5 directions (editorial, swiss-minimal, warm-personal, technical-mono,
bold-brutalist) intentionally use `thispersondoesnotexist` faces — leave them.

## Run / build / deploy

```bash
python3 -m http.server 8799          # from repo ROOT, then open /site/  (../-relative paths)
python3 scripts/build_registry.py    # regenerate registry.json + validate artifacts/registries
vercel deploy . --prod --yes         # redeploy https://ancher-site-atlas.vercel.app (steveli2026 / streamify-one)
```

Serve from the repo **root** (not `-d site`). Locally, `.md` mojibakes in-browser (http.server
sends no charset); the deployed site fixes this via `vercel.json` headers.

## Don't

- Don't commit `node_modules/`, `.claude/`, `assets/`-was-once-ignored-but-now-tracked (see `.gitignore`).
- Don't overwrite an existing direction's `sample.png`/`portrait.*` unless regenerating it.
- Don't add remote images or JS frameworks to generated pages (breaks the contract + the real
  product's single-file hosting model).
- Don't bake atlas chrome (inspector/links) into `directions/*/index.html` — that belongs in the
  viewer shell. (The photo toggle is the one in-page exception, as a content demo.)
