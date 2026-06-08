# 生成 Prompt — Athletic（运动竞技）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**（外加同目录的一张本地动作照 `portrait.webp`，作为满屏 hero 背景），并通过一条 Google Fonts `<link>` 引入 Anton + Archivo。效果与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Athletic** direction — Nike-grade kinetic energy: a launch film, not a résumé. Output **only** the HTML file — all CSS in one `<style>` tag, all JS inline. No build step, no framework.

## The person (brief)

- **Name**: Dre Coleman
- **Role**: Performance coach (page title: "Dre Coleman — Performance Coach")
- **Audience**: athletes and teams who want to get measurably better
- **Primary goal**: get visitors to book a coaching call
- **Thesis (the angle the whole page serves)**: *"I train people to do hard things on purpose."* The page should make an athlete want to train today.
- **Tone**: bold, direct, kinetic, no fluff — sounds like a coach who pushes you. Section headings are blunt ("The Programs", "The Receipts", "The Résumé", "The Rules", "Work With Me", "Right Now", "Straight Answers").
- **Proof points (use concretely — no filler)**: coached **3 Olympians**; **12 years** coaching; **ex-D1** strength & conditioning; **50K** athletes in the app.
- **Contact**: email `dre@drecoleman.com`; CTA "Book a coaching call →"; "Get the app".

## Module plan (in this order)

1. `hero` / **bold_statement** — `<header>`, `min-height:100svh`, flex column justified to the bottom. Full-bleed action photo (`.hero__media.u-photo`) with a black gradient floor; top bar with name **"Dre Coleman"** (left) + tag **"Performance Coach"** (right). Eyebrow **"Dre Coleman / Performance Coach"**; H1 **"I train people to do `<span class="volt">`hard things`</span>` on purpose."**; sub **"Athletes and teams who want to get measurably better. Twelve years on the floor, three Olympians, and a system that travels in your pocket."**; one volt button **"Book a coaching call →"** (`href="#contact"`); scroll cue **"The numbers don't lie"**. The `.u-fallback` poster shows an outlined giant word **"Train"**.
2. `metrics` / **big_numerals** — band with volt top border. 4 scoreboard cells, the numeral in volt: **`3`** "Olympians coached" · **`12`** "Years coaching" · **`D1`** "Ex strength & conditioning" · **`50`K** "Athletes in the app".
3. `selected_work` / **grid** (`id="work"`) — head `01 /` **"The Programs"**. 4 diagonal-clipped program cards with volt index `01`–`04`: **Off-Season Engine** ("12-week base & capacity build. We bank the aerobic and structural work now so you peak when it counts." — meta "12 weeks · Base + capacity"); **Game Speed** ("Sprint mechanics and reactive power. Cleaner steps, faster first move, more force into the ground." — "Sprint · Reactive power"); **Return Strong** ("Post-injury rebuild with load tracking. Progress you can see, dosed so you come back better than before." — "Rehab · Load tracking"); **Team Standard** ("Squad-wide testing and accountability. One standard, every athlete measured, nobody coasting." — "Teams · Testing").
4. `testimonials` / **cards** — surface band, head `02 /` **"The Receipts"**. 3 volt-left-border quote cards (volt keyword inside each): **Maya Okafor** (100m · Olympic finalist) — "Dre built the **last 0.1** that put me in an Olympic final."; **Tyrese Hahn** (Team captain · D1 lacrosse) — "He gave our whole squad **one standard**. No one hides anymore."; **Priya Raman** (Recreational athlete) — "40 years old, first **sub-3 marathon**. He coached me there."
5. `credentials` / **pills** — head `03 /` **"The Résumé"**. Clipped pills, each with a skewed volt dot: "CSCS · Cert. Strength & Conditioning", "USATF Level 2 Sprints", "MS · Sport & Exercise Science", "Ex-Head S&C · **D1 Track**", "FMS Level 1", "USOPC Consultant".
6. `beliefs` / **numbered** — head `04 /` **"The Rules"**. 4 rows, big volt number + heading + line: **01 Measure or it didn't happen** ("Every block has a number attached. We test, we log, we compare. Vibes don't make finals — repeatable output does."); **02 Hard, but never random** ("The work is supposed to hurt. It is never supposed to be guesswork. Every hard day is dosed for a reason you can name."); **03 Recovery is training** ("Sleep, fuel and de-load are part of the plan, not a reward for it. The athletes who last are the ones who back off on purpose."); **04 One standard for everyone** ("Olympian or weekend warrior, the bar is honest. I'd rather tell you the truth about your numbers than sell you a comfortable lie.").
7. `services` / **list** — surface band, head `05 /` **"Work With Me"**. Volt-top-border list, each row = title + volt price + desc, hover indents: **1:1 Coaching** — **$420 / mo** ("Fully custom programming, weekly check-ins, and video form review. Limited to 12 athletes at a time so nobody gets a template."); **Team Standard** — **From $2.4K** ("Squad-wide testing, a shared scoreboard, and on-site combine days. Built for programs that want every athlete held to one bar."); **The App** — **$19 / mo** ("My core systems, self-serve. Off-season, speed and return-to-play tracks that travel in your pocket. Cancel any time."); **Single Audit** — **$180** ("One 90-minute session: movement screen, sprint diagnostic, and a written plan you keep. No subscription, no upsell.").
8. `currently_building` / **now_block** — head `06 /` **"Right Now"**. 3 volt-left-border cards (volt tag + line + stamp): **On the floor** ("Prepping **three sprinters** through their indoor block ahead of trials season. Heavy on reactive power, light on volume." — "Updated June 2026"); **Building** ("Shipping the **load-tracking rebuild** inside the app — the return-to-play dashboard athletes kept asking me for." — "In progress"); **Booking** ("Open to **two new 1:1 athletes** for the off-season cohort. Team audits booking out into the fall." — "2 spots left").
9. `faq` / **accordion** — surface band, head `07 /` **"Straight Answers"**. 4 `<details>` with a volt `+` sign that rotates to `×` on open: **"Do I have to be an elite athlete?"** ("No. Half the people I coach have day jobs. The system is the same — pro or amateur, we measure where you are and build from there."); **"What gear do I need?"** ("For the app, a phone and access to a gym or open space. For 1:1 we'll scope your setup in the first call and program to what you actually have."); **"How fast will I see results?"** ("Speed and power markers move inside 4–6 weeks. Engine work takes a full block. I'll show you the numbers either way — no guessing."); **"Can I cancel?"** ("The app cancels any time, no questions. 1:1 runs month to month after the first block. I'd rather you stay because it works.").
10. `contact` / **cta_band** (`id="contact"`) — full-bleed volt band, diagonally clipped, with two skewed dark stripes. Eyebrow **"Ready when you are"**; giant H2 **"Let's go."**; lead **"Tell me the hard thing you're training for. We'll build the plan that gets you there — for you, or your whole team."**; dark button **"Book a coaching call →"** (`mailto:dre@drecoleman.com?subject=Coaching%20call`) + text links **"dre@drecoleman.com"** and **"Get the app"** (`#work`).
11. `footer` (`.foot`) — three blunt marks: **"Dre Coleman"** · **"Train hard things — on purpose"** · **"© 2026 Coleman Performance"**.

## Design direction — Athletic

**DNA**: Athletic energy à la Nike. Hierarchy comes from sheer **scale + contrast + the one volt streak**, never from soft cards or gentle gradients. Huge uppercase **Anton** condensed type, line-height crushed to ~0.86. Numbers are stadium-scoreboard big. Block edges **clip on the diagonal** (`clip-path`), with **skewed volt stripes/dots** adding sprint-direction motion. The page does use hard-edged surfaces and 1px hairline grids ("lines, not pillowy cards") — flat fills, no drop-shadows beyond the hero text-shadow. Avoid: pastels, rounded friendly cards, timid centered type, thin weights, purple gradients.

**Tokens** (define as CSS variables, obey exactly):
- colors: `--canvas:#0a0a0a` · `--surface:#141416` · `--ink:#ffffff` · `--ink-muted:#a3a3a8` · `--ink-subtle:#6c6c72` · `--accent:#c6ff00` (volt) · `--accent-hover:#d6ff3d` · `--accent-ink:#0a0a0a` · `--hairline:#2a2a2e`
- fonts: `--display:'Anton',Impact,sans-serif` (all headlines, numerals, prices) · `--body:'Archivo',system-ui,sans-serif` (body/eyebrow). Google Fonts link (the only stylesheet):
  `https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&display=swap`
- spacing: `--section:140px` · `--block:48px` · `--tight:16px`. Page wrap max-width `1240px`. Body `17px/1.6`. Hard edges (radius 0).
- **Type scale — use the real `clamp()` expressions:**
  - hero H1 `clamp(52px,12.5vw,150px)`, `line-height:.86`, `letter-spacing:-1px`, `max-width:14ch`, `text-shadow:0 4px 40px rgba(0,0,0,.5)`
  - hero sub `clamp(15px,2.2vw,19px)`, `max-width:42ch`, `margin-top:22px`; fallback word `clamp(120px,40vw,420px)`, `line-height:.8`, `letter-spacing:-4px`
  - section H2 `clamp(34px,7vw,64px)`, `line-height:.9` (not the hero's `.86`); section index `clamp(20px,4vw,34px)` (volt)
  - program card H3 fixed `30px` / `line-height:.95`, program index `pidx` fixed `34px` (volt); program/quote/now/svc/faq body copy fixed `15px`
  - metric numeral `clamp(64px,14vw,104px)`, `line-height:.85`
  - quote `clamp(22px,4.5vw,30px)`, `line-height:1.02` (crushed); belief num `clamp(38px,8vw,64px)` / belief H3 `clamp(22px,4vw,32px)`
  - service H3 `clamp(24px,5vw,40px)` / service price `clamp(22px,4vw,34px)`
  - faq summary `clamp(20px,3.6vw,30px)`; CTA H2 `clamp(64px,18vw,200px)`, `letter-spacing:-2px`, `line-height:.84`
- shared classes: `.eyebrow` (Archivo 700, 12px, `letter-spacing:3px`, uppercase, volt — **but inside the volt CTA band it is overridden to dark `rgba(10,10,10,.65)`**, since volt-on-volt would vanish) · `.display` / `.lead` (muted, `max-width:46ch`). All headings are Anton `font-weight:400`.
- layout spacing: section wrap `padding:var(--section) 20px` (→ `40px` horizontal at ≥880px); hero `padding:24px 20px 48px` (→ `24px 40px 64px` at ≥880px); section heads `margin-bottom:var(--block)` (48px), `.sec-head` gap 18px, baseline-aligned; CTA inner `padding:120px 20px 96px` (→ `150px 40px 120px` at ≥880px).

## Signature techniques (pure CSS/SVG)

1. **Volt button with cut corner**: `.btn{display:inline-flex;gap:12px;font-family:var(--display);text-transform:uppercase;font-size:20px;background:var(--accent);color:var(--accent-ink);padding:18px 28px;clip-path:polygon(0 0,100% 0,100% 100%,14px 100%);transition:background .15s,transform .15s}` Hover `background:var(--accent-hover);transform:translateX(4px)` and the inner `.arrow` slides `translateX(4px)`. Ghost variant = transparent + `2px solid var(--hairline)`, border goes volt on hover.
2. **Hero gradient floor**: photo sits in `.hero__media` (`img{object-fit:cover;object-position:50% 30%;filter:grayscale(.25) contrast(1.08) brightness(.82)}`), then a `::after` double gradient guarantees text contrast: `linear-gradient(180deg,rgba(10,10,10,.55) 0%,rgba(10,10,10,0) 28%,rgba(10,10,10,.2) 55%,rgba(10,10,10,.94) 100%), linear-gradient(90deg,rgba(10,10,10,.7),rgba(10,10,10,0) 60%)`. Hero has `border-bottom:2px solid var(--accent)`.
3. **Diagonal-clipped program cards**: `.prog{clip-path:polygon(0 0,100% 0,100% 100%,0 100%,0 26px)}` (notched top-left). A volt `::before` square (`80px`, `transform:rotate(45deg)`, anchored `left:-30px;top:-30px`) pokes the corner; on hover the card lifts (`translateY(-4px)`), border goes volt, the square nudges `translate(6px,6px)`.
4. **Skewed volt stripes** (`.stripe`): `position:absolute;height:10px;background:var(--accent);transform:skewX(-24deg)` — placed by inline `top/left/width` in the CTA band (there using `--accent-ink` at `opacity:.14`).
5. **Cut-corner pills with skewed dot**: `.cred{clip-path:polygon(0 0,100% 0,100% 100%,10px 100%)}` + `.cred .dot{width:8px;height:8px;background:var(--accent);transform:skewX(-18deg)}`.
6. **Hairline grids, not boxes**: metrics & beliefs are built from `1px solid var(--hairline)` borders between cells (`border-right`/`border-bottom` toggled per breakpoint), so the structure reads as scoreboard lines, not floating cards.
7. **Service list hover-indent**: rows separated by hairlines; `.svc:hover{padding-left:14px}` (transition `padding-left .18s`), price right-aligned in volt Anton.
8. **FAQ +/× sign**: volt `.sign` in summary; `.faq[open] summary .sign{transform:rotate(45deg)}` turns `+` into `×`. `summary{list-style:none}` + hide `::-webkit-details-marker`.
9. **CTA band slab**: `.cta{background:var(--accent);color:var(--accent-ink);clip-path:polygon(0 40px,100% 0,100% 100%,0 100%)}` — a slanted top edge makes the whole closing block lean forward. Inside it, copy flips dark: the lead is `rgba(10,10,10,.78)` + `font-weight:600`, the dark CTA button is `.btn--dark{background:var(--accent-ink);color:var(--accent)}` (hover `#222`), and `.txtlink` is Anton 18px with a `3px solid var(--accent-ink)` bottom border. Two stripes are placed inline: `top:60px;left:-40px;width:280px` and `bottom:48px;right:-40px;width:340px;height:14px`.
10. **No-photo poster fallback**: `.hero__fallback` = `repeating-linear-gradient(115deg,#0a0a0a 0 42px,#101010 42px 84px)` with two full-width (`left:-10%;width:120%`) `skewY(-8deg)` volt bands — a thick one (`::before`, `top:18%;height:90px;opacity:.92`) and a thin one (`::after`, `bottom:24%;height:18px`) — and a giant stroked word **"Train"** (`-webkit-text-stroke:2px rgba(255,255,255,.22)`, `line-height:.8`, `letter-spacing:-4px`, `rotate(-4deg)`, `white-space:nowrap`).

## Photo + toggle contract (implement exactly)

The page ships a real local portrait. The hero photo `<img src="portrait.webp">` lives in a `.hero__media.u-photo` wrapper with a meaningful alt ("Athlete sprinting at full speed down a city street"). The `.hero__fallback.u-fallback` poster (gradient + volt skew bands + outlined "Train") is the no-photo state. Default = photos ON.

```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .hero__fallback{display:flex !important}  /* scoped restore */

.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
```

Before `</body>` (verbatim):

```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
<script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
```

`sample.png` is taken with photos ON.

## Motion

One IntersectionObserver reveal — no continuous animation, no letterbox/sunburst theatrics. Reveal targets carry `class="reveal"`:

```css
.reveal{opacity:0;transform:translate(26px,30px) scale(.985)}
.reveal.in{opacity:1;transform:none;transition:opacity .6s cubic-bezier(.2,.7,.2,1),transform .7s cubic-bezier(.2,.7,.2,1)}
```

Observer `threshold:0.12, rootMargin:'0px 0px -8% 0px'`, `unobserve` after firing. Stagger via `transitionDelay = min(i%5,4)*55ms`. If `IntersectionObserver` is missing or `prefers-reduced-motion: reduce`, add `.in` to all immediately. Under reduced-motion also kill `scroll-behavior` and the button/card/faq transitions. (Tag each section's opening tag with `data-module`/`data-variant` per the module plan.)

## Hard contract

1. Single self-contained `index.html`; inline CSS/JS; no build, no npm, no framework.
2. Only external resources = the Google Fonts `<link>` + the **one local image `portrait.webp`** (same dir). No remote images, no other external assets. No Three.js/WebGL/heavy canvas — every kinetic effect is pure CSS (clip-path, skew, gradients, transforms).
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible (contrast, visible focus rings via volt/white outlines, alt text); honor `prefers-reduced-motion`.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Implement the photo + toggle contract exactly (default photos ON); the no-photos fallback still looks like an intentional athletic poster.

**Output: the complete `index.html` and nothing else.**
