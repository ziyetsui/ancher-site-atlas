# 生成 Prompt — Neo SaaS（现代产品）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。页面只用两个外部资源：一个 Google Fonts `<link>`（Inter + IBM Plex Mono）和一张本地头像 `portrait.webp`（与 `index.html` 同目录）。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Neo SaaS** direction — modern product-marketing energy applied to a personal site. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks. Output **only** the HTML file.

## The person (brief)

- **Name**: Arjun Mehta
- **Role**: Founder & product engineer
- **Audience**: users (try the product), investors, and potential hires
- **Primary goal**: get visitors to try the product or contact him
- **Thesis (the angle the whole page serves)**: *"I build small tools that do one job painfully well."* The site should feel like a confident, friendly SaaS landing page — not a résumé and not an austere Swiss grid.
- **Tone**: confident but friendly, plainspoken, product-builder energy
- **Proof points (use these, concretely — no filler)**:
  - Shipped 2 products to 30,000+ users
  - ex-Stripe (payments infrastructure)
  - YC-backed
- **Brand**: a square "A" mark (indigo gradient tile) + "Arjun Mehta" wordmark.
- **Page meta**: `<title>Arjun Mehta — Founder & Product Engineer</title>`; description "I build small tools that do one job painfully well. Shipped 2 products to 30k+ users. ex-Stripe. YC-backed."
- **Links**: Try the product (https://tabflow.app), Email (arjun@arjunmehta.dev), GitHub (https://github.com/arjunmehta), X (@arjunbuilds, https://x.com/arjunbuilds).

## Module plan (in this order)

Tag every section's opening tag with `data-module="…" data-variant="…"` exactly as below.

0. **Sticky header** (not a data-module): translucent white bar, `backdrop-filter: blur`, bottom hairline, 60px tall. Left = brand (gradient "A" tile + "Arjun Mehta"). Right nav = Work · Stack · Building · Writing · Contact, then a primary button "Try Tabflow →" linking https://tabflow.app. Plain nav links hide on narrow screens.

1. `hero` / `bold_statement` — own padding `84px 0 72px` (→ `60px 0 56px` ≤680px), not the default section padding; bottom hairline. Two-column grid (1.15fr / 0.85fr, gap 56px, vertically centered). Left copy (`max-width:38ch`): mono eyebrow `// founder · product engineer`; H1 "I build small tools that do **one job** painfully well." (margin `18px 0`; the words "one job" in indigo); lede "Two products in production, used by 30,000+ people. I care about software that's fast, focused, and finished." (`max-width:42ch`); two CTAs (row `margin-top:28px`) — primary "Try Tabflow →", ghost "Get in touch"; a pill row (`margin-top:24px`): soft-indigo "● 30k+ users", "ex-Stripe", "YC-backed". Right: rounded photo frame (300×340, `--rm` 12px corners) holding the `u-photo` portrait + a `u-fallback`, with a floating card overlapping its bottom-left (`bottom:-14px;left:-22px`) reading "**2 products** / live in production" (green dot). Faint indigo radial glow behind the frame and in the section's top-right.

2. `logos_press` / `mentioned_in` — quiet horizontal strip, white, hairline below. Muted mono label "Backed & featured by" + four pills: "Y Combinator", "Stripe", "Hacker News · #1", "Product Hunt · POTD".

3. `selected_work` / `grid` — eyebrow `// selected work`, H2 "Two products, shipped and used daily.", sub "Each one does a single thing well. No dashboards you'll never open." Two bordered feature cards:
   - **Tabflow** — green "● Live" status pill; "A keyboard-first tab manager. Close 40 tabs without losing your place."; footer "22,000 users" + "Open tabflow.app →". Links to https://tabflow.app.
   - **Inbox Zero CLI** — "● Live"; "Terminal triage for Gmail. Clear your inbox from the keyboard, in under 5 minutes."; footer "8,000 users" + "View on GitHub →".
   Cards lift on hover with an indigo edge.

4. `metrics` / `stat_row` — soft-gray band, 3 stats: **30k+** "users shipped to"; **2** "products live"; **ex-Stripe · YC** "where I learned to ship" (the "+" and "· YC" parts in indigo). Big grotesk numbers, mono captions.

5. `experience` / `timeline` — eyebrow `// where I've shipped`, H2 "A short trail of building.", sub "I optimize for roles where I can own a thing end to end and watch real people use it." Three rows (148px mono date column + body, hairline between):
   - **2023 — now** — Founder @ independent — "Designing, building, and supporting Tabflow and Inbox Zero CLI. Two products, one person, 30k+ users — every line shipped by me."
   - **2020 — 2023** — Product Engineer @ Stripe — "Worked on Checkout and the developer dashboard. Learned how to make latency-sensitive UI feel instant and how a tiny detail compounds at scale."
   - **2018 — 2020** — Frontend Engineer @ Postlight — "Shipped client products under deadline. Got fast, got opinionated, got tired of dashboards nobody opens."
   (The "@ …" company in indigo.)

6. `tools` / `stack_list` — soft-gray band, eyebrow `// the toolbelt`, H2 "What I reach for.", sub "Boring, fast, and well-documented beats clever every time." Three bordered columns, each with an indigo-dot heading and a list of name + mono note:
   - **Build**: TypeScript (daily), React + Vite (frontends), Go (CLIs), SQLite + Litestream (data)
   - **Ship**: Vercel (web), Fly.io (services), GitHub Actions (CI), Stripe (billing)
   - **Think**: Linear (planning), Figma (design), Obsidian (notes), Raycast (glue)

7. `beliefs` / `numbered` — eyebrow `// how I work`, H2 "Four rules I keep coming back to." Two-column grid (gap 24px) of four principles, each a 34×34 mono number chip (01–04, 13px/500, indigo on soft-indigo, `--rs` corners, `gap:16px` to the body) + a 17px/700 heading + 15px line:
   - 01 "Ship the smallest thing that works." — "Scope is the enemy. A tool that does one job today beats a platform that ships next quarter."
   - 02 "Speed is a feature." — "If it feels slow, it is broken. I budget milliseconds the way others budget money."
   - 03 "Talk to users before writing code." — "The feature you imagine and the one they need are rarely the same. Five conversations save five weeks."
   - 04 "Finished beats perfect." — "\"Done and live\" teaches you more than another polish pass ever will. Then iterate in public."

8. `currently_building` / `now_block` — eyebrow `// currently building`, H2 "What's next on the bench." One highlighted card (soft indigo-tinted gradient, 1fr/auto grid): a pulsing-dot status line "Private beta · ~300 on waitlist", H3 "Loops", "A tiny scheduling tool for solo founders — pick a few times, send one link, done. No calendar grid bloat, no upsells.", and a primary "Join the waitlist →" button.

9. `testimonials` / `cards` — soft-gray band, eyebrow `// kind words`, H2 "What people say after using the thing." Two-column grid of four quote cards (blockquote + a mono-initials avatar chip + name + mono meta):
   - "Tabflow is the first tab manager that didn't make me read a manual. Installed it, got it, never went back." — **Dana Kovač**, staff engineer · Figma (DK)
   - "Arjun ships like a small team of three. Clear thinking, zero fluff, and the polish is always there in the details." — **Ravi Patel**, partner · Y Combinator (RP)
   - "Inbox Zero CLI saved me an hour a week, and it's the only tool I've ever recommended in a standup." — **Mei Lin**, founder · Tideflow (ML)
   - "He cares about the boring parts — error states, empty states, keyboard focus. That's why his stuff feels finished." — **Jordan Sayer**, design lead · ex-Stripe (JS)

10. `selected_quotes` / `large_type` — soft-gray band, centered big grotesk quote (block `max-width:24ch;margin:0 auto`) "Make it work, make it **fast**, then make it disappear." ("fast" in indigo), attribution "— the note above my desk" (mono uppercase, `margin-top:22px`).

11. `writing` / `list` — eyebrow `// notes & essays`, H2 "Things I've written down.", sub "Mostly on shipping solo, performance, and the craft of small software." A flat list of four posts (title + mono "type · N min" meta + a right arrow; rows nudge right on hover):
    - "Why I delete features the week after I ship them" — essay · 7 min
    - "A budget of 100ms: how I keep Tabflow feeling instant" — engineering · 11 min
    - "Selling software when you are the entire company" — notes · 5 min
    - "The case for keyboard-first everything" — opinion · 6 min

12. `faq` / `two_column` — eyebrow `// before you ask`, H2 "A few things people email about." Two-column grid, each item a "Q." (mono indigo) heading + answer:
    - "Are you open to contract work?" — "Occasionally, for product or performance work I'd be proud of. Best to email with the shape of it."
    - "Will Tabflow stay free?" — "The core stays free forever. Power features (sync, teams) are a small paid tier that funds the rest."
    - "Do you do advising or angel checks?" — "For early solo founders building real tools, yes — usually time over money. Reach out."
    - "What's your stack for new projects?" — "TypeScript + React on the web, Go for CLIs, SQLite for data. See the toolbelt above."

13. `contact` / `cta_band` — soft-gray band, centered (inner `max-width:46ch;margin:0 auto`). Eyebrow `// say hello`, H2 "Building something, hiring, or want to talk shop?" (its own larger 34px / -1px / 700 size, not the 32px section H2), "I read every email. The fastest way to reach me is below." Primary "Email me →" (mailto:arjun@arjunmehta.dev), plus text links "GitHub ↗" and "@arjunbuilds ↗".

14. **Footer** (not a data-module): hairline top, "© 2026 Arjun Mehta" + mono "// built small, shipped fast".

## Design direction — Neo SaaS

**DNA**: Modern product-marketing on a white + soft-gray (`#f5f6f8`) field, lifted by *whisper-thin* indigo gradients. Clean grotesk (Inter) everywhere; mono (IBM Plex Mono) only for small uppercase section labels / eyebrows / dates / meta, like a product changelog tag. Bordered cards with `rounded-sm` (8px), 1px hairline borders, and **soft layered shadows** (two stacked rgba shadows, one tight + one large offset — this IS the look; do *not* go flat/shadowless like Swiss minimal). Hierarchy comes from **badges, stat rows, status pills, crisp card edges, and hover lift** — not from oversized type or pure whitespace. One indigo accent (`#5b5bd6`) on CTAs, badges, links, dots, and card-hover edge. Confident but friendly. **Distinct from austere Swiss minimal** (this has color, rounding, badges, shadows, and warmth). Avoid: oversized serif headlines, dark brutalism, generic saturated purple-blob gradients, centered-only marketing hero, lorem.

**Tokens** (define as CSS variables, obey exactly):
```css
:root{
  --canvas:#ffffff; --surface:#f5f6f8; --surface-2:#eceef2;
  --ink:#16161a; --ink-muted:#52525e; --ink-subtle:#8a8a98;
  --accent:#5b5bd6; --accent-hover:#4a4ac0; --accent-soft:#eef0fc;
  --hairline:#e3e5ea;
  --rs:8px; --rm:12px; --pill:999px;
  --sans:'Inter',system-ui,-apple-system,sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SF Mono',monospace;
  --shadow-card:0 1px 2px rgba(22,22,26,.04),0 4px 16px -8px rgba(22,22,26,.10);
  --shadow-lift:0 2px 4px rgba(22,22,26,.05),0 14px 32px -12px rgba(91,91,214,.22);
}
```
- Google Fonts `<link>` (the only font source):
  `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap`
- Body: `background:var(--canvas); color:var(--ink); font-size:17px; line-height:1.6;` antialiased. Content wrapper `.wrap{max-width:1120px;margin:0 auto;padding:0 24px}`.
- Type scale (**fixed px, no clamp() — this page sizes by media-query breakpoints, not fluid**):
  - hero H1 60px / 1.05 / -1.8px / 700  (→ 48px ≤900px, 38px / -1.2px ≤680px)
  - section H2 32px / 1.15 / -0.8px / 600  (→ 26px ≤680px); **contact H2 is its own 34px / -1px / 700**
  - stat number 38px / 1.0 / -1px / 700
  - big quote 34px / 1.18 / -1px / 700  (→ 28px ≤900px, 24px ≤680px)
  - work card name 20px / -0.5px / 700; build-card H3 26px / -0.7px / 700; timeline role 18px / -0.4px / 700; principle/faq H3 16–17px / 700; stack-col H3 14px / 700
  - lede 18px / 1.55; body 17px; card/desc/list 15px; testimonial 16px
  - label/eyebrow 12px mono 500 uppercase +0.5px; meta/notes 11px mono; badge 13px grotesk 600
- Spacing: `section{padding:96px 0}` (→ 72px ≤680px); section head `gap:12px;margin-bottom:36px`; rounding 8 / 12 / 999.

## Signature techniques (pure CSS)

1. **Layered soft shadows, not flat.** Every card/stat/column/testimonial uses `box-shadow:var(--shadow-card)`; the hero photo frame and hover state use `var(--shadow-lift)` (the second layer is tinted indigo `rgba(91,91,214,.22)`). This warm lift is the core of the look.

2. **Whisper-thin indigo gradients, never blobs.** Hero background `linear-gradient(180deg,#ffffff 0%,#f8f9fb 60%,var(--surface) 100%)`. A faint radial in the hero top-right via `::before` `radial-gradient(circle,rgba(91,91,214,.10),transparent 68%)` (520px circle, positioned `top:-160px;right:-120px` so most of it bleeds off-canvas). The headshot sits over its own `::before` `radial-gradient(120% 120% at 70% 20%,rgba(91,91,214,.16),transparent 60%)`, inset -18px. "Currently building" card = `linear-gradient(135deg,var(--surface) 0%,#f0f1fb 100%)`.

3. **Mono changelog labels.** `.label{font-family:var(--mono);font-size:12px;font-weight:500;letter-spacing:.5px;text-transform:uppercase;color:var(--accent)}` (a `.muted` variant in `--ink-subtle`). Used as every section eyebrow (`// …`), plus all dates, captions, notes, and meta.

4. **Pill / badge system.** `.pill` = inline-flex, 13px/600, `5px 11px`, `border-radius:999px`, 1px hairline border on white. Variants: `--soft` (accent-soft bg, accent-hover text, no border), `--status` (mint `#ecfdf3` bg / `#c4ead2` border / `#1c7a45` text). A 7px `currentColor` `.dot` for indicators.

5. **Button choreography.** `.btn` 15px/600, `12px 20px`, 8px radius, transitions on background/border/transform/shadow `.18s`. `--primary` = indigo bg + white, its own indigo glow shadow `0 1px 2px rgba(91,91,214,.25),0 8px 20px -10px rgba(91,91,214,.6)`, hover darkens to `--accent-hover` and `translateY(-1px)`. `--ghost` = white + hairline, hover gets accent border + accent-soft fill. An `.arr` "→" span slides `translateX(2px)` on `.btn:hover`.

6. **Hover-lift cards.** `.card` transitions transform/shadow/border `.2s`; `:hover` = `translateY(-3px)`, `box-shadow:var(--shadow-lift)`, `border-color:var(--accent)`.

7. **Pulsing "now" dot.** `.pulse` (8px indigo dot) with `::after` ring `border:2px solid var(--accent)` animated `@keyframes pulse{0%{transform:scale(.6);opacity:.6}100%{transform:scale(1.7);opacity:0}}` over 2s infinite. (Disabled under reduced-motion.)

8. **Lines-not-cards timeline & lists.** Experience rows and writing/post rows are separated by 1px hairline top borders (first row's border removed), no card chrome. Posts shift `padding-left` on hover and slide their arrow; titles turn `--accent-hover`.

9. **Brand mark.** 26px tile, `border-radius:7px`, `linear-gradient(140deg,var(--accent),#7c7cf0)`, white "A" centered.

10. **Sticky glass header.** `position:sticky;top:0;background:rgba(255,255,255,.82);backdrop-filter:saturate(160%) blur(10px);border-bottom:1px solid var(--hairline)`.

## Photo + toggle contract (implement exactly)

- The headshot `<img class="u-photo">` references the local file **`portrait.webp`** (next to `index.html`), 300×340, `object-fit:cover`, meaningful `alt` (e.g. "Portrait of Arjun Mehta, founder and product engineer"), `loading="eager"`. **This page ships a real local portrait** — do not substitute an SVG/initials avatar for the photo.
- Inside the same frame add a `u-fallback` (aria-hidden): a 300×340 indigo gradient tile `linear-gradient(150deg,var(--accent) 0%,#7c7cf0 55%,#9a8cf5 100%)`, big white grotesk initials "AM" (88px, -3px tracking, `display:grid;place-items:center`), and a bottom mono tag "Arjun Mehta · builds tools". Same footprint as the photo so the layout holds with photos off.
- Default = photos ON. Include exactly:
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  body.no-photos .u-fallback{display:grid !important}
  ```
- Fixed bottom-right toggle, verbatim:
  ```css
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```

## Motion

- Gentle rise + fade only. Elements tagged `.reveal` start `opacity:0;transform:translateY(14px)` and transition to `opacity:1;transform:none` over `.6s cubic-bezier(.2,.7,.3,1)` when `.in` is added.
- One `IntersectionObserver` (`threshold:.12`, `rootMargin:'0px 0px -8% 0px'`) adds `.in` and unobserves. If IO is unavailable or `prefers-reduced-motion`, reveal everything immediately.
- The only continuous animation is the "now" pulse ring. `@media (prefers-reduced-motion:reduce)`: kill all animation, set `.reveal` to final state, hide the pulse ring, `scroll-behavior:auto`.
- No letterbox bars, sunburst, parallax, or other motion the page doesn't implement.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no npm, no JS framework.
2. The **only** external resources are the Google Fonts `<link>` and the local `portrait.webp`. No other remote assets, no Three.js/WebGL/heavy canvas.
3. Responsive 360–1440px (breakpoints at 900px and 680px as above); semantic HTML; accessible — contrast, visible `:focus-visible` outlines (2px accent), alt text, `aria-label`/`aria-labelledby` on sections.
4. Real content from the brief — no lorem, no "passionate about innovation".
5. Looks designed by a senior designer for a real SaaS founder — clearly distinct from austere Swiss minimal (color, rounding, badges, layered shadows, warmth).

**Output: the complete `index.html` and nothing else.**
