# 生成 Prompt — Technical Mono（技术等宽 / 终端）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。页面使用一个 Google Fonts `<link>`（JetBrains Mono + Inter）和一张本地肖像图 `portrait.jpg`（hero 头像），除此之外无任何外部资源。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Technical Mono** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no framework. Only external resources allowed: the one Google Fonts `<link>` and one local image `portrait.jpg`.

## The person (brief)

- **Name**: Kenji Watanabe
- **Role**: Distributed-systems engineer · 11 yrs backend/infra
- **Audience**: engineering managers and founders hiring for hard backend/infra work
- **Primary goal**: get them to read his work and email him about staff/principal roles or consulting
- **Thesis**: *"I make systems that stay correct under load — the boring kind of reliable that lets a product team move fast."*
- **Tone**: precise, low-ornament, quietly confident — reads like a great engineer's README, not a neon cyberpunk poster
- **Proof points (concrete)**:
  - 11 years backend/infra; ex-Staff Engineer on a payments platform doing 30k req/s — comfortable from the kernel to the API
  - Cut p99 latency 480ms→90ms by redesigning the payments write path; wrote it up (3-part series)
  - Maintains an open-source consistent-hashing library, `kwatanabe/conhash` (4.2k★) — bounded-load balancing, virtual nodes, used in production routing
  - Speaks Go, Rust, Postgres internals, Kafka delivery semantics, Linux
- **Identity / contact**: handle `kenji@kwatanabe.dev`; email, GitHub, write-ups, RSS

## Module plan (in this order)

A sticky **top nav** (not a module): mono 13px, 56px tall (`gap:22px` between links), `kenji@kwatanabe.dev` on the left (mono 600, ink; the `@` is teal), section links on the right (muted, hover→teal) each prefixed with a dim two-digit number — `01 work · 02 metrics · 03 stack · 04 exp · 05 principles · 06 writing · 10 contact`. Hidden below 560px. `rgba(11,13,16,.82)` + `backdrop-filter:blur(8px)` + bottom hairline.

Then the modules. Every section opens with a **`.marker`**: `<idx> label — subtitle` in mono uppercase, idx in teal, followed by a hairline rule that fills the rest of the row.

1. **`hero` / `bold_statement`** — section gets an extra `padding-top:72px`. Eyebrow `~/whoami` (mono 13px; `~/` teal, `whoami` ink; a JS clock rewrites it to `whoami · HH:MM:SS local`), `margin-bottom:28px`. Then `.hero-id` (gap 18px, `margin-bottom:28px`): portrait avatar (54px) + name **Kenji Watanabe** (mono 600, 18px) / role **Distributed-systems engineer · 11 yrs backend/infra** (mono 13px, muted). Thesis `<h1>`: "I make systems that stay **correct under load**" ("correct under load" teal) followed by a blinking block **cursor**. Sub (sans 16px, muted, `max-width:54ch`, `margin-bottom:36px`): "The boring kind of reliable that lets a product team move fast. Ex-Staff Engineer on a payments platform at 30k req/s — comfortable from the kernel to the API." Two text CTAs (mono 500, 15px; `.hero-ctas` gap `24px 32px`): `→ email me` (teal, mailto) and `→ read the work` (muted, #work).
2. **`selected_work` / `list`** — marker `01 selected_work — deep dives & open source`. A hairline-ruled `<ol>` of 4, each a link with mono number, title, desc, a bordered tag chip, and a teal right-aligned meta:
   - `01` **Rewriting the write path** — "How I redesigned a payments write path to drop tail latency without weakening guarantees." tag `postgres · concurrency · 3-part series` · meta **p99 480→90ms**
   - `02` **Consistent hashing, done carefully** — "Design notes behind the OSS library — bounded loads, virtual nodes, and the failure modes nobody documents." tag `go · library · 4.2k★` · meta **OSS**
   - `03` **Exactly-once is a lie — and what to ship instead** — "Idempotency keys, Kafka delivery semantics, and reconciling money flows you can actually reason about." tag `kafka · semantics · write-up` · meta **deep dive**
   - `04` **Load-testing the boring way** — "Building a steady-state harness that catches p99 regressions in CI before they reach 30k req/s in prod." tag `rust · tooling · methodology` · meta **write-up**
3. **`metrics` / `stat_row`** — marker `02 metrics — the receipts`. A single bordered box, hairline-divided into 4 cells (2-col mobile → 4-col ≥680px), each a big mono number (the unit in teal at .62em) over an uppercase caption: **30k** req/s "payments throughput" · **480→90** ms "p99 latency cut" · **4.2k** ★ "OSS hashing lib" · **11** yrs "backend / infra".
4. **`tools` / `now_block`** — marker `03 stack & currently_building`. Two panels (1-col mobile → 2-col ≥680px):
   - Panel `$ cat stack.txt` — 5 rows `key … value`, key with teal `›`: Go "services · the OSS lib" / Rust "hot paths · tooling" / Postgres "internals · the write path" / Kafka "delivery semantics · reconciliation" / Linux "kernel → syscalls → API".
   - Panel `$ git log --currently-building` — paragraph: "Maintaining an open-source consistent-hashing library — bounded-load balancing with virtual nodes, used in production routing layers. Now extending it with a zero-allocation lookup path and a property-test suite for partition correctness." + a bordered repo chip `kwatanabe/conhash  ★ 4.2k`.
5. **`experience` / `timeline`** — marker `04 experience — git log --author=kenji`. An `<ol>` with a left hairline rail; each item has a teal-ringed glowing dot, a head row (role / teal org / right-aligned dates) and a desc:
   - **Staff Engineer, Payments Platform** @ Lumen Pay · 2021 — 2025 — "Owned the money-movement write path at 30k req/s. Cut p99 from 480ms to 90ms, led the idempotency & reconciliation model, and mentored four engineers into senior."
   - **Senior Backend Engineer** @ Northwind Data · 2017 — 2021 — "Built the ingestion and routing tier for a multi-tenant analytics product. Shipped the first version of the consistent-hashing library that later went open source."
   - **Backend Engineer** @ Harbor Logistics · 2014 — 2017 — "Kept a fleet-tracking platform correct under spiky load. First exposure to Postgres internals, queue semantics, and the cost of getting delivery guarantees wrong."
6. **`beliefs` / `numbered`** — marker `05 principles — how I build`. 4 numbered items (1-col → 2-col ≥680px), teal mono number + title + body:
   - `01` **Correct before fast** — "A wrong answer returned quickly is still wrong. Nail the invariants first, then optimize the hot path with numbers, not vibes."
   - `02` **Measure the tail, not the mean** — "Averages hide the outages. I design for p99 and the failure modes nobody documents, because that's where users actually feel pain."
   - `03` **Boring is a feature** — "Reliable systems are mostly unremarkable. I'd rather ship something a teammate can reason about at 3am than something clever."
   - `04` **Write it down** — "If a design decision isn't written, it didn't happen. Docs, ADRs, and post-mortems are the real source of truth — and the work."
7. **`credentials` / `list`** — marker `06 credentials — education & recognition`. Hairline-ruled `key … right-meta` rows, key with teal `›`:
   - **B.Eng, Computer Science — Kyoto University** · 2010 — 2014
   - **USENIX SREcon — invited speaker, "Latency under load"** · 2023
   - **CNCF maintainer — consistent-hashing toolkit** · since 2020
   - **Internal "Reliability Award" — Lumen Pay** · 2024
8. **`testimonials` / `quote_led`** — marker `07 testimonials — peer review`. Two bordered cards (1-col → 2-col ≥680px), each with a teal `$ cat review_0N.txt` mark, a quote (15px ink), and a `who` caption row (mono 12px, `gap:8px`, **no literal `·`**): a muted **`— Name`** span followed by a subtle role span:
   - `review_01.txt` — "Kenji is the engineer you put on the problem that scares everyone else. He turned our worst latency incident into a calm, documented runbook in a week." — **Priya N.** · VP Engineering, Lumen Pay
   - `review_02.txt` — "Rare combination: reads kernel source for fun, but explains tradeoffs so clearly that PMs make better decisions. Our reconciliation model is his." — **Marcus L.** · Staff Engineer, Northwind Data
9. **`writing` / `list`** — marker `08 writing — recent posts`. Hairline-ruled `date · title · tag` rows:
   - `2026.04` **What "exactly once" actually costs you** · distributed-systems
   - `2026.02` **Reading a flamegraph without lying to yourself** · performance
   - `2025.11` **Postgres write amplification, measured end to end** · postgres
   - `2025.09` **Bounded-load consistent hashing, in plain Go** · go · oss
10. **`selected_quotes` / `large_type`** — marker `09 selected_quotes — the one-liner I keep`. A surface card with a 2px teal left border, big mono quote: *"The system is only as **correct** as the assumption you forgot to write down."* ("correct" teal); source line `# a post-mortem I keep re-reading` (the `#` teal).
11. **`contact` / `cta_band`** — marker `10 contact — let's talk`. A terminal window (bar with 3 dots + title `— bash — kenji@kwatanabe.dev`, then a body): line `$ echo "hiring for hard backend / infra?"` → output "I'm open to **staff / principal roles** and selective consulting on reliability, latency, and data-correctness work." → line `$ cat contact.txt` → links `→ kenji@kwatanabe.dev · GitHub · Write-ups · RSS`.

Footer (not a module): mono, top hairline — left "© 2026 Kenji Watanabe — built like a README.", right "kenji@kwatanabe.dev · v3.0.0".

## Design direction — Technical Mono

**DNA**: Dark, engineered, terminal sensibility. Monospaced display type, hard edges, hairline borders on near-black surfaces, a single teal accent that **glows** like a cursor. Layout like a well-kept README: section markers, mono labels, aligned right-side metadata, "lines not cards" lists. Faint dotted-grid texture on the canvas. The teal glow IS the ornament — it lives on the cursor, the timeline dots, CTA hover text-shadow, the photo frame; the terminal panel carries a soft dark drop-shadow. Avoid: light mode, rounded pills, gradients beyond the subtle radial glow, decorative shadows on body content (the glow is teal and tight, not gray and soft).

**Tokens** (CSS variables, obey exactly):

```css
:root{
  /* color */
  --canvas:#0b0d10; --surface:#14171c; --surface-2:#1b1f26;
  --ink:#e8eaed; --ink-muted:#9aa3ad; --ink-subtle:#5f6873;
  --accent:#5eead4; --accent-hover:#99f6e4; --hairline:#272d36;
  /* fonts */
  --mono:'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
  --sans:'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  /* type */
  --display-xl:52px; --display-md:24px; --body:16px; --label:12px;
  /* spacing */
  --section:96px; --block:32px; --r-sm:4px; --r-md:6px;
  /* glow */
  --accent-glow:rgba(94,234,212,.45);
}
```

- Google Fonts `<link>`: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500&display=swap`
- Fluid type via `clamp()` (use the real expressions): thesis `clamp(28px, 6.2vw, var(--display-xl))` mono 700 / line-height 1.12 / letter-spacing -1px / max-width 18ch; metric number `clamp(24px,4.4vw,32px)` mono 700; big-quote `clamp(20px,3.6vw,28px)` mono 600 / max-width 24ch.
- `.wrap`: max-width **880px**, centered, 24px inline padding. Section padding-block 64px → `var(--section)` (96px) ≥760px.
- Body = sans 16px / line-height 1.6 on `--canvas`; mono is for display, labels, markers, lists, metrics, terminals. `::selection{background:var(--accent);color:var(--canvas)}`.

## Signature techniques (pure CSS/SVG)

1. **Dotted-grid canvas** (fixed, layered): `background-image: radial-gradient(circle at 18% 0%, rgba(94,234,212,.06), transparent 42%), radial-gradient(var(--hairline) 1px, transparent 1px); background-size:auto, 24px 24px; background-attachment:fixed;` — a faint corner glow over a 24px dot grid.
2. **Section marker rule**: `.marker` is a flex row, mono uppercase 12px, `.idx` teal; `.marker::after{content:"";flex:1;height:1px;background:var(--hairline)}` draws the rule that fills the line. This header pattern repeats across every section.
3. **Blinking block cursor**: `.cursor{display:inline-block;width:.58ch;height:1.02em;margin-left:2px;transform:translateY(.12em);background:var(--accent);box-shadow:0 0 12px var(--accent-glow);animation:blink 1.1s steps(1) infinite}` with `@keyframes blink{50%{opacity:0}}`.
4. **Lines, not cards** — `selected_work` / `credentials` / `writing` are `border-top` + per-row `border-bottom` hairline lists (no boxes). Row hover: `background:var(--surface)` + `padding-left:16px` (a slide-in nudge) + title turns teal. Use a `grid-template-columns:auto 1fr auto` row so number / body / right-meta align.
5. **Metrics as a divided box** — one outer bordered box, cells separated only by `border-top`/`border-left` hairlines toggled by `:nth-child` (2-col → 4-col). Number unit is teal at `.62em`.
6. **git-log timeline** — `<ol>` with `border-left:1px solid var(--hairline)`; each item `padding-left:28px` and `::before` a 9px dot: `background:var(--canvas);border:1px solid var(--accent);box-shadow:0 0 10px var(--accent-glow)` — a glowing commit node. Dates pushed right with `margin-left:auto`.
7. **Terminal panel** — bordered `--surface` box, `box-shadow:0 0 40px rgba(0,0,0,.35)`; a `--surface-2` bar with three 11px hairline dots + a mono title; body is mono 14px / line-height 1.9, lines `$` in teal, command echo in `--ink-muted`, output in `--ink`. The echoed answer (`.out`) steps **up to 18px / line-height 1.4** (bigger than the surrounding body) so the offer reads as the panel's headline.
8. **Glow-on-hover text CTA** — `.cta` is a mono baseline-inline link with a transparent `border-bottom`; hover → `color:var(--accent-hover);border-color:var(--accent-hover);text-shadow:0 0 14px var(--accent-glow)` and the leading `→` shifts `translateX(4px)`. No buttons, no pills.
9. **Sticky blurred topbar** — `position:sticky;top:0` with `rgba(11,13,16,.82)` + `backdrop-filter:blur(8px)` + bottom hairline.

## Photo + toggle contract

The page **ships a real local portrait** (`portrait.jpg`) as the hero avatar. Do NOT replace it with CSS/SVG/initials — the initials are only the photos-off fallback.

- Avatar frame (54px, `--r-md`, hairline border). The photo `<img class="avatar u-photo" src="portrait.jpg" width="54" height="54" alt="Kenji Watanabe, distributed-systems engineer">` is styled hard-edged + desaturated with a teal hairline: `object-fit:cover;border-color:var(--accent);filter:grayscale(.55) contrast(1.02);box-shadow:inset 0 0 0 1px rgba(94,234,212,.08), 0 0 0 1px rgba(94,234,212,.12)`.
- Fallback initials beside it: `<span class="avatar u-fallback" aria-hidden="true">KW</span>` (a `display:grid;place-items:center` mono teal monogram on a `linear-gradient(135deg,var(--surface-2),var(--surface))` tile). Default = photos ON, so the fallback is hidden.
- Fixed bottom-right demo toggle — paste verbatim:

```css
.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .u-fallback.avatar{display:grid !important}
```

```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos">
  <span>照片 Photos</span>
  <button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button>
</div>
<script>
(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();
</script>
```

## Motion

Restrained, terminal-flavored — three things, all gated by `prefers-reduced-motion`:

- **Cursor blink** (`@keyframes blink`, see technique 3) — the only continuous decoration.
- **On-load reveal** — elements with `.reveal` start `opacity:0;transform:translateY(10px)` and run `animation:rise .6s ease forwards` (`@keyframes rise{to{opacity:1;transform:none}}`), staggered with inline `animation-delay` (e.g. `.02s`→`.26s` down the hero; `.04s`/`.08s`/`.12s` on timeline & cards). This is a load animation, not a scroll IntersectionObserver.
- **Live clock** — a tiny inline script rewrites the eyebrow command to `whoami · HH:MM:SS local` once per second:

```js
(function(){var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;var cmd=document.querySelector('.eyebrow .cmd');if(!cmd||reduce)return;function tick(){var d=new Date();var t=d.toTimeString().slice(0,8);cmd.textContent='whoami · '+t+' local';}tick();setInterval(tick,1000);})();
```

- Under reduced-motion: `*{animation:none!important;transition:none!important}`, `scroll-behavior:auto`, the cursor stays solid (`.cursor{opacity:1}`), reveals show final state, and the clock script returns early.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework.
2. Only external resources: the one Google Fonts `<link>` **and** the local `portrait.jpg`. No remote images, no Three.js/WebGL/heavy canvas. Any texture = pure CSS (dotted background + subtle radial glow).
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible — contrast on the dark bg, visible `:focus-visible` (2px teal outline), `alt` text on the portrait, honor `prefers-reduced-motion`.
4. Tag every section's opening tag with `data-module` / `data-variant` exactly as in the Module plan.
5. Real content from the brief — no lorem, no filler. Precise and low-ornament: it should read like a great engineer's README, not a neon cyberpunk poster.

**Output: the complete `index.html` and nothing else.**
