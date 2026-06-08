# 生成 Prompt — Illustration Brand（插画品牌）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**（同目录附一张本地图片 `portrait.webp`，并引一条 Google Fonts `<link>`），效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Illustration Brand** direction — a warm, product-y personal brand site for the person below. All CSS in one `<style>`, all JS inline. No build step, no framework. The only external resources are one Google Fonts `<link>` and one local image (`portrait.webp`).

## The person (brief)

- **Name**: Tara Nguyen
- **Role / eyebrow**: Productivity coach & template maker
- **Audience**: scattered knowledge workers and teams who want systems that stick
- **Primary goal**: get visitors to grab the Notion templates, then book a team workshop
- **Thesis (the page's spine)**: *"I turn messy brains into systems you actually keep."* The page should feel warm, friendly, and product-y — a loved brand's marketing site, not a résumé.
- **Tone**: warm, encouraging, plain-spoken, a little playful; zero corporate jargon.
- **Subhead (verbatim)**: "Calm, friendly Notion systems and live workshops that make your week run itself — for scattered knowledge workers and teams."
- **Hero social proof**: avatar stack (initials JM / AK / RD / +) then "Loved by 120k followers & 6,200 buyers". Two floating stickers on the art: "30k sold" (green dot), "4.9★ rated" (coral dot).
- **Proof points (use concretely — no filler)**:
  - 120k followers across YouTube and the newsletter
  - 30k Notion templates sold
  - 4.9★ avg rating from 6,200 buyers
  - Ran productivity workshops for the teams at Figma and Loom
- **Links / contact**: Email `hi@taranguyen.co`; newsletter "The Tidy Brain"; YouTube `@taramakes`. Brand mark = a coral rounded square with "T". "Now" location = "a sunny corner in Lisbon, between two workshop trips".
- **Nav links**: Templates (#work) · Work with me (#services) · Reviews (#love) · Now (#now) · primary button "Book a workshop" (#subscribe).

## Module plan (in this order)

Tag every section's opening tag with `data-module="…" data-variant="…"`. Use the exact copy below.

0. **Nav** (inside a `.wrap`, not a tagged module): brand "T · Tara Nguyen" left; links + coral "Book a workshop" pill right. On ≤760px hide the text links, keep brand + button.

1. `hero` / `split` — two columns (1.05fr / .95fr). **Left**: eyebrow "Productivity coach & template maker"; h1 "I turn **messy brains** into systems you actually keep." (the phrase *messy brains* is coral with a soft-pill highlight swash behind it); the subhead lede; two CTAs — coral "Get the templates →" + ghost "Book a workshop"; the avatar-stack proof line. **Right** (`.hero-art`): the `portrait.webp` in a white-bordered rounded photo card sitting on a soft pastel **blob**, plus two pill **stickers** ("30k sold", "4.9★ rated") and three floating inline-SVG ornaments (star, squiggle, ring).

2. `selected_work` / `grid` — eyebrow "The template shelf"; h2 "Systems you can set up this weekend."; sub "Plug-and-play Notion templates — opinionated defaults, so you stop fiddling and start finishing." 3-col card grid of **6** template cards, each = pastel emoji thumb tile + title + one-line promise + price + "View →":
   - 🧠 **Second Brain in a Weekend** — "One trusted home for notes, tasks, and ideas — built in two sittings, not two months." · $48 · with a coral "Flagship · 4.9★" badge flag.
   - 🔄 **Weekly Reset OS** — "A 20-minute Sunday ritual that clears the deck and plans the week for you." · $24
   - 🏁 **Team Sprint Board** — "The board I install in Figma & Loom workshops — shared focus without the standup fatigue." · $64
   - 📥 **No-Inbox-Zero System** — "Stop chasing zero. A triage flow that keeps email calm without the guilt." · $18
   - 🧱 **Habit Stacker** — "Tiny routines that snap onto things you already do — built to actually stick." · **Free** (green price)
   - ✨ **The whole bundle** — "Every template above, plus future drops — one tidy purchase, lifetime updates." · $120

3. `metrics` / `pills` — warm-tinted section. Centered eyebrow "By the numbers"; h2 "Small habits, real receipts." A centered row of 4 white **pill capsules**, each = soft icon tile + big number + label:
   - 👥 **120k** "followers on YouTube & newsletter"
   - 📦 **30k** "Notion templates sold"
   - ⭐ **4.9** "avg rating from 6,200 buyers"
   - 🎓 **2** "workshops for Figma & Loom teams"

4. `testimonials` / `cards` — eyebrow "Kind words"; h2 "People stop dreading their week."; sub "From workshop rooms and template buyers who finally feel on top of it." 3 pastel quote cards (mint / lilac / warm), each = big coral `"` mark, quote, initials avatar + name + role:
   - "Our team ran Tara's Sprint Board workshop and our standups got 15 minutes shorter — and actually useful. Rare." — **Jordan Mehta**, Design lead, Figma (JM, green)
   - "I've bought a hundred templates. This is the first Second Brain I still open six months later. It just stuck." — **Amara Koffi**, Indie founder (AK, violet)
   - "The Weekly Reset turned my Sundays from dread to a 20-minute ritual. My whole team adopted it after the session." — **Ravi Desai**, Ops manager, Loom (RD, coral)

5. `services` / `list` — mint-tinted section. Eyebrow "Work with me"; h2 "When a template isn't enough."; sub "Live, hands-on help to install a system in your week or your team — calm, opinionated, done in one session." A vertical list of 3 white rows, each = icon tile + title/desc + right-aligned price + tag:
   - 🎓 **Team Workshop · Sprint Reset** — "A 90-minute live session where I install the Sprint Board with your team and trim your standups. Done together, on your tools." · **$1,800** · "Up to 12 people"
   - 🧭 **1:1 System Audit** — "We meet over Loom and live calls, untangle your current setup, and rebuild one trusted system you'll actually keep." · **$420** · "2 sessions"
   - 💌 **Office Hours · Tidy Brain** — "A monthly group call for buyers — bring your stuck spot, leave with a fix. Recorded, so you can rewatch the tweak." · **Free for buyers** (green) · "Monthly"

6. `beliefs` / `principles_list` — eyebrow "How I build"; h2 "Four rules behind every system."; sub "Opinionated on purpose. These are the calls I make so you don't have to." A 2×2 grid of numbered belief cards (coral "01–04" with a soft chip), each with a faint corner spot-SVG:
   - **01 — A system you keep beats a perfect one.** "If it takes effort to maintain, it dies by Wednesday. I design for the laziest version of you."
   - **02 — Fewer fields, fewer decisions.** "Every property you add is a tax you pay forever. I cut to the smallest set that still answers your questions."
   - **03 — Calm over clever.** "No streak shaming, no red overdue badges. The goal is a tool you open without dread, not a guilt machine."
   - **04 — Show the ritual, not just the tool.** "A template is half the answer. I always pair it with the 20-minute habit that makes it actually run."

7. `tools` / `stack_list` — eyebrow "The toolkit"; h2 "What I build (and shoot) with."; sub "Nothing fancy — a small kit I know cold, so the work goes into the system, not the software." 4 rows, each = a category label (170px column) + a row of pill chips, separated by dashed hairlines:
   - **Build systems in** — Notion · Notion Formulas 2.0 · Make · Zapier
   - **Teach & record with** — Loom · Figma · Descript · ScreenFlow
   - **Write & ship with** — Beehiiv · Gumroad · Obsidian
   - **Stay calm with** — Things 3 · Cal.com · A paper notebook

8. `currently_building` / `now_block` — a pastel gradient **panel** (2-col on desktop, stacks on mobile). Left: a "Now · Updated May 2026" tag with a pulsing green live dot, h2 "What I'm building this season.", "Working from a sunny corner in Lisbon, between two workshop trips." Right: 3 white list items (colored dot + bold + desc):
   - 🔴 **Tidy Brain v3** — "Rebuilding my flagship Second Brain around the new Notion formulas — simpler, half the fields."
   - 🟢 **A 5-day email course** — "Free 'Reset Your Week' series — one tiny system a day, no overwhelm."
   - 🟣 **Workshop tour** — "Two more team sessions booked with product studios in June."

9. `faq` / `accordion` — centered eyebrow "Good questions"; h2 "Before you buy or book." A list of 4 native `<details>` accordions (first one `open`), each summary has a coral "+" chevron chip that rotates 45° when open:
   - **Do I need to be a Notion pro to use the templates?** — "Not at all. Every template ships with a 5-minute setup Loom and opinionated defaults, so you can start using it before you understand it. If you can make a checklist, you're ready."
   - **What if it doesn't click for me?** — "Email me within 30 days and I'll refund you, no questions and no awkward forms. A system you don't keep isn't worth your money."
   - **Can you customize a system for my team?** — "Yes — that's what the Team Workshop and 1:1 Audit are for. We rebuild on your real tools and workflows, live, so it fits the way you already work."
   - **Do buyers get future updates?** — "The bundle includes lifetime updates and access to monthly Office Hours. When I rebuild a template, you get the new version automatically."

10. `subscribe` / `inline` — a centered pastel gradient panel with corner star + squiggle ornaments. Eyebrow "The Tidy Brain"; h2 "One small system in your inbox, every Sunday."; lede "Join the newsletter for a fresh template tip and a tiny win you can set up before Monday. No noise, ever."; rounded email input (`you@workmail.com`) + coral "Join free →" button; below: "Prefer to talk? hi@taranguyen.co · Watch on @taramakes".

11. **Footer** (not a tagged module): "© 2026 Tara Nguyen — systems you actually keep." · "Made with care, coffee, and a tidy Notion."

## Design direction — Illustration Brand

**DNA**: Illustration-rich brand marketing in the lineage of Notion / Miro / Clay. Warm off-white ground, **one** confident coral brand color, soft pastel illustration fills (warm/mint/lilac/coral tiles) everywhere. Friendly rounded cards (12–32px radius), pill-shaped metrics and buttons, spot illustrations (inline SVG stars / squiggles / rings) sprinkled through every section. Approachable, optimistic, hand-crafted but systematic. Hierarchy from big friendly geometric-sans headlines (800 weight, negative tracking) + generous rounding + pools of pastel color — never hard edges, dark backgrounds, or a second main color. **The look relies on soft offset shadows** (coral-tinted button glows, `--shadow-card` / `--shadow-soft` under cards and pills) — not a flat, shadowless treatment. Avoid: purple/multicolor gradients as the main device, hard-edged corporate cards, austere dark UI, more than one brand color.

**Tokens** (define as CSS variables, obey exactly):

```css
:root{
  --canvas:#fffdf9; --surface:#ffffff;
  --surface-warm:#fff4ec; --surface-mint:#ecfbf3; --surface-lilac:#f2effd;
  --ink:#1f1b24; --ink-muted:#5b5660; --ink-subtle:#928d98;
  --accent:#ff5a5f; --accent-hover:#e8474c; --accent-soft:#ffe3e0;
  --hairline:#efe9e2;
  --r-sm:12px; --r-md:20px; --r-lg:32px; --pill:999px;
  --section:104px; --block:36px; --tight:14px;
  --shadow-card:0 18px 40px -22px rgba(40,30,30,.32);
  --shadow-soft:0 10px 30px -16px rgba(40,30,30,.22);
  --font:'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
}
```

- Google Fonts `<link>` (the one allowed font request):
  `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`
- Layout: `.wrap{max-width:1120px;margin:0 auto;padding:0 24px}`; `section{padding:var(--section) 0}`; body `font-size:17px; line-height:1.6; background:var(--canvas); color:var(--ink); overflow-x:hidden`.
- Load-bearing spacing (use exactly):
  - Hero is tighter at the top: `.hero{padding-top:36px}` (overriding the section padding); `.hero-grid{gap:56px}`; `.hero h1{margin-top:18px}`; `.hero .lede{margin:22px 0 30px; max-width:30ch}`; `.proof-line{margin-top:26px}`.
  - Section headings: `.sec-head{max-width:46ch; margin-bottom:46px}`; `.sec-head h2{margin-top:14px}`; `.sec-head p{margin-top:14px; font-size:18px}` (the section sub-line). Centered heads (metrics, faq) get `text-align:center; margin:0 auto 46px` and a centered eyebrow.
  - Card grids: `.grid` and `.quotes` use `gap:22px`; `.beliefs-grid` uses `gap:22px`; the metrics pill row uses `gap:16px`; service / now / tool / faq lists use `gap:14–18px`.
  - Constrained blocks: services `max-width:840px`, tools `max-width:880px`, faq `max-width:780px`, subscribe `.lede` `max-width:42ch` + `h2` `max-width:18ch`, now items list — all centered with `margin:0 auto`.
- Type scale (use the real `clamp()`s):
  - `h1` `clamp(38px,7vw,64px)` / line 1.05 / `-1.6px` / 800
  - `h2` `clamp(28px,4.4vw,36px)` / line 1.12 / 800
  - `h3` (card titles) 19–20px / 700 / `-.4px`
  - `.lede` 21px / 1.5 / 500 / `-.2px` / muted
  - `.eyebrow` 13px / 700 / `+.4px` / uppercase / coral, with a coral-dot chip before it
- Decoration palette beyond `--accent`: violet `#7c6cf0`, green `#19b87a`, sky `#eaf3ff` (used in dots, avatars, ornaments, thumb tiles only — never a second *brand* color).

## Signature techniques (pure CSS/SVG)

1. **Headline highlight swash** — the coral phrase in the h1 is itself coral (`color:var(--accent)`) **and** gets a soft `--accent-soft` swash hugging its baseline — a low marker-pill (`bottom:.04em; height:.34em`, ~bottom third of the cap height), not a full block behind the whole phrase. Both halves are load-bearing: drop the `color` and the text stays dark; drop the `::after` and the marker disappears:
   ```css
   .hl{position:relative; white-space:nowrap; color:var(--accent)}
   .hl::after{content:""; position:absolute; left:-2%; right:-2%; bottom:.04em; height:.34em;
     background:var(--accent-soft); border-radius:var(--pill); z-index:-1}
   ```

2. **Hero pastel blob** — an organic gradient blob behind the photo card:
   ```css
   .blob{position:absolute; inset:6% -4% -6% 4%; z-index:-1;
     border-radius:46% 54% 58% 42%/52% 44% 56% 48%;
     background:linear-gradient(150deg,var(--surface-warm),var(--accent-soft) 55%,var(--surface-lilac));
     filter:saturate(1.05)}
   ```
   Photo card: `border-radius:var(--r-lg); overflow:hidden; border:6px solid #fff; box-shadow:var(--shadow-card)`; the `<img>` is `aspect-ratio:4/4.6; object-fit:cover; object-position:50% 18%`.

3. **Floating sticker pills + spot ornaments** — small white pills and inline SVGs absolutely-positioned around the hero art, gently floating:
   ```css
   .sticker{position:absolute; background:#fff; border-radius:var(--pill); box-shadow:var(--shadow-soft);
     font-weight:800; font-size:13px; padding:9px 14px; display:flex; align-items:center; gap:7px}
   @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
   .float-svg,.sticker{animation:float 5.5s ease-in-out infinite}
   .st-2{animation-delay:-2.7s} .fs-star{animation-delay:-1.2s} .fs-ring{animation-delay:-3.4s}
   ```
   Ornaments are inline SVG: a 5-point star (fill), an open squiggle (`stroke-linecap:round`, violet), a ring (stroke, green).

4. **Coral-glow buttons** — pill buttons with a colored offset shadow and a 2px lift on hover:
   ```css
   .btn{border-radius:var(--pill); padding:15px 26px; font-weight:700; transition:transform .18s, box-shadow .18s, background .18s}
   .btn-primary{background:var(--accent); color:#fff; box-shadow:0 12px 26px -12px rgba(255,90,95,.85)}
   .btn-primary:hover{background:var(--accent-hover); transform:translateY(-2px)}
   .btn-ghost{background:var(--surface); border:2px solid var(--hairline)}
   .btn-ghost:hover{border-color:var(--ink); transform:translateY(-2px)}
   ```

5. **Lift-on-hover cards** — work cards & service rows rise and gain `--shadow-card`; the "View →" arrow gap widens on hover:
   ```css
   .card{border:1.5px solid var(--hairline); border-radius:var(--r-md); transition:transform .2s, box-shadow .2s}
   .card:hover{transform:translateY(-5px); box-shadow:var(--shadow-card); border-color:transparent}
   .card:hover .view{gap:9px}
   ```

6. **Eyebrow dot chip** — `.eyebrow::before` is a 22px soft-coral rounded square with a radial coral dot, giving each section label a hand-placed sticker feel.

7. **Pastel thumb / pill / avatar tiles** — emoji thumbs sit on `--surface-warm/mint/lilac/coral/#eaf3ff` rounded tiles (`aspect-ratio:16/10`); metric icon tiles & service icons are 14–18px-radius colored squares; testimonial avatars are coral/green/violet initials circles.

8. **Dashed-hairline tool rows** — the toolkit list uses `grid-template-columns:170px 1fr` rows divided by `border-bottom:1.5px dashed var(--hairline)` (last row none) — "lines, not cards".

9. **Accordion chevron rotate** — FAQ `<details>` hide the native marker; a soft-coral "+" chevron chip rotates 45° into an "×" when `[open]` (`transition:transform .2s`, disabled under reduced-motion).

10. **Pulsing live dot** — the Now tag's green dot uses `box-shadow:0 0 0 4px rgba(25,184,122,.18)` for a soft halo (static glow, no animation required).

## Photo + toggle contract

The page **ships the local `portrait.webp`** as the hero spot-illustration. Default = photos ON; `sample.png` is taken photos-ON.

- Photo: `<img class="u-photo" src="portrait.webp" alt="Illustration of Tara Nguyen, a productivity coach, traveling light with her organized essentials">` inside a `.hero-photo-card` (also `u-photo`) so the white frame hides too when off.
- Fallback (`u-fallback`, `aria-hidden`): a pastel-gradient panel with a coral "TN" rounded-square mark, the name "Tara Nguyen", and tagline "Systems you actually keep" — intentional with no photo. It needs `display:grid`, so add a scoped restore.
- Toggle CSS (verbatim):
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  body.no-photos .hero-fallback{display:grid !important}
  .atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
  .atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
  .atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
  ```
- Toggle HTML/JS before `</body>` (verbatim):
  ```html
  <div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
  <script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
  ```

## Motion

- **Scroll reveal**: elements get class `reveal`, start `opacity:0; transform:translateY(22px) scale(.97)`, transition to `none` via `.reveal.in` (`opacity .55s ease, transform .55s cubic-bezier(.2,.7,.3,1)`). An `IntersectionObserver` (`threshold:.12, rootMargin:'0px 0px -8% 0px'`) adds `.in` once, then unobserves; if no IO support, add `.in` to all. Apply `reveal` to hero copy & art, each section head, every card / pill / quote / service / belief / tool row / now panel / faq item / subscribe panel.
- **Continuous float**: `@keyframes float{0%,100%{translateY(0)}50%{translateY(-9px)}}` on `.float-svg, .sticker` (5.5s, staggered delays).
- **Reduced motion**: `@media (prefers-reduced-motion:reduce)` → reveals show immediately (no transition), float/animations off, `scroll-behavior:auto`, chevron transition off.
- Do **not** add anything the page doesn't do (no letterbox bars, no sunburst, no parallax, no JS scroll-jacking).

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no npm, no JS framework.
2. Only external resources allowed: the one Google Fonts `<link>` and the one local image `portrait.webp`. No other remote assets; **no** Three.js / WebGL / heavy canvas. Soft/rounded looks via pure CSS (gradients, box-shadow, transforms); decorative spot illustrations are inline SVG.
3. Responsive 360–1440px (≤900px: grids → 2-col; ≤760px: `--section:72px`, hero stacks, grids → 1-col, nav text links hide); semantic HTML; accessible (contrast, visible focus rings, alt text, `aria-hidden` on decoration); honor `prefers-reduced-motion`.
4. Real content from the brief above — every name, number, price, quote, and FAQ verbatim. No lorem, no "passionate about innovation".
5. Implement the photo slot + toggle contract (default photos ON); the no-photos fallback must still look intentional and on-brand.
6. One brand color (coral), lots of pastel fills, everything rounded, soft offset shadows — committed to the Notion / Miro / Clay aesthetic, not AI-generic.

**Output: the complete `index.html` and nothing else.**
