# 生成 Prompt — Playful Rounded（圆趣俏皮）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。页面只允许两项外部资源：一个 Google Fonts `<link>`（Fredoka + Nunito）和一张本地肖像图 `portrait.webp`。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Playful Rounded** direction for the person below. All CSS in one `<style>`, all JS inline. No build step, no frameworks. The only external resources are one Google Fonts `<link>` and one local image `portrait.webp` beside the file.

## The person (brief)

- **Name**: Lola Benitez
- **Role**: Community builder & educator
- **Audience**: learners and sponsors
- **Primary goal**: get visitors to join the community / subscribe
- **Thesis (the angle the whole page serves)**: *"I make learning feel like hanging out with friends."* Warm, welcoming, fun — invited in, not sold to.
- **Tone**: friendly, bouncy, encouraging, a little cheeky — never corporate or stiff
- **Brand**: brand mark "Lola Benitez" with a tilted mint chip holding a 🫶 emoji. Nav links: Courses, Reviews, Now, FAQ + a dark "Join the community" CTA pill.
- **Proof points (use verbatim — no filler)**:
  - 40,000-member community ("40k members & growing")
  - 2 bestselling courses
  - 4.9/5 rating from 1,000+ reviews ("4.9/5 from 1,000+ happy learners")
  - 52 live "hangouts" / year; weekly live sessions; a free starter pack for new members
- **Links**: Join the community (primary), Subscribe to the newsletter, Instagram `@lolateaches` (`https://instagram.com/lolateaches`).

## Module plan (in this order)

Tag each section's opening tag with `data-module` / `data-variant`. A sticky blurred nav precedes all modules (not tagged).

1. **`hero` / `split_portrait`** — left column: eyebrow "Community builder · educator"; H1 "I make learning feel like *hanging out* with friends." (the words "hanging out" are highlighted — lavender ink over a mint pill swash); lede "No stiff lectures, no gatekeeping — just a warm room full of people figuring it out together, with you."; two CTAs — primary "Join the community →", secondary "Watch a hangout ▷"; trust row "★★★★★ · 4.9/5 from 1,000+ happy learners". Right column: `portrait.webp` in a chunky rounded card (lavender→peach gradient backing, rotated 2deg) with three sticker badges peeling off it — "🎉 40k members", "📚 2 bestsellers", "🔴 live weekly".
2. **`metrics` / `pills`** — 4 fat color pills, big number + label: "40k / members & growing" (lavender), "2 / bestselling courses" (peach), "4.9★ / from 1,000+ reviews" (mint), "52 / live hangouts / year" (warm surface, peach inset ring).
3. **`selected_work` / `grid`** (id `courses`) — eyebrow "Learn with me"; H2 "Courses that feel like a group chat with snacks."; sub "Bite-sized, friendly, and made for people who learn best out loud. Start free, stay because it's fun." Then 3 chunky cards, each = a top gradient bar + a tilted sticker tag + title + one-liner + soft "→" CTA:
   - tag "Bestseller" — "Show Your Work, Find Your People" — "Build a community around what you make — without burning out or being weird about it." — CTA "See the syllabus →".
   - tag "Bestseller" — "Teach Anything to Anyone" — "Turn what you know into a course people actually finish — and tell their friends about." — CTA "See the syllabus →".
   - tag "Free mini-course" (mint) — "Your First 100 True Fans" — "A free starter pack to find your first real audience this month. No catch, just a head start." — CTA "Grab it free →".
4. **`testimonials` / `cards`** (id `love`) — eyebrow "Real people, real warm fuzzies"; H2 "What it's like inside the community."; 3 candy-tinted cards, each a *different* pale tint (card1 `--surface-warm` peach, card2 `#f3efff` lavender, card3 `#ecfbf3` mint), each with a big lavender-deep open-quote (`“`, Fredoka 42px, sits above the quote with `line-height:0`), the quote, then a tilted rounded-square sticker avatar of initials whose fill cycles peach-deep / lavender-deep / mint-deep by position + name + role:
   - "I switched careers at 34 and felt completely lost. Three weeks in here and I had a portfolio, a study buddy, and actual momentum." — **Priya R.** · Career-switcher, now junior designer (avatar PR).
   - "Lola makes you feel like posting your messy first draft is the coolest thing you could do. I shipped my first course because of this room." — **Marcus T.** · First-time creator (avatar MT).
   - "We've sponsored a lot of communities. This is the only one where the audience genuinely shows up and remembers us warmly. That's rare." — **Jess K.** · Partnerships lead, sponsor (avatar JK).
5. **`beliefs` / `numbered`** — eyebrow "How I run the room"; H2 "Three things I promise every learner."; sub "These aren't rules on a wall — they're how every hangout, course and DM actually works around here." Then 3 white cards, each with a tilted colored rounded-square number chip:
   - 1 "Messy first drafts win." — "Nobody learns by lurking. We celebrate the rough version, then make it better together — out loud, on purpose."
   - 2 "No gatekeeping, ever." — "Every question is a good question. If you feel dumb asking it, that's a sign ten other people are too shy to."
   - 3 "Warm beats clever." — "Encouragement isn't fluff — it's the thing that keeps people showing up long enough to actually get good."
6. **`currently_building` / `now_block`** (id `now`) — eyebrow "Now"; H2 "What I'm up to this month." One warm-surface card (peach 2.5px border) with a pulsing mint dot + "Updated June 2026", an emoji list, and a meta line:
   - 🛠️ **Building cohort #3** of "Teach Anything to Anyone" — 120 spots, kicking off in July.
   - 🎙️ **Recording a tiny podcast** where members interview each other about their first 100 fans.
   - 🌱 **Learning watercolor** on Sunday mornings — badly, happily, in public on Instagram.
   - meta: "Inspired by Derek Sivers' /now movement."
7. **`credentials` / `pills`** — eyebrow "Receipts"; H2 "A few things that built this room." A wrapping flex of pill chips, each = a colored year badge + label (year-badge color cycles lavender/peach/mint by position):
   - 2018 "Started the Creators & Snacks Discord"; 2021 "Maker Educator of the Year, IndieEdu"; 2022 "2 bestselling courses on Teachable"; 2023 "TEDxAustin — 'Learning out loud'"; 2024 "40,000-member community milestone 🎉"; 2025 "Featured guide, Headspace for Learning".
8. **`selected_quotes` / `large_type`** — one full-bleed gradient card (mint→lavender) with a giant ghost open-quote, centered blockquote "The fastest way to learn anything is to do it badly, in good company, until it stops being scary." and cite "— my whole teaching philosophy, on a sticky note".
9. **`faq` / `accordion`** (id `faq`) — eyebrow "Before you ask"; H2 "The questions everyone DMs me."; 4 `<details>` items (first one `open`), each with a "+" chip that rotates 45° to "×" when open:
   - "Do I need any experience to join?" — "Nope — most people arrive feeling a little lost and that's exactly the point. Start with the free mini-course, lurk for a week, then jump into a hangout when you're ready."
   - "How much time does it actually take?" — "As little as 20 minutes a week. Lessons are bite-sized, hangouts are weekly and optional, and nobody's tracking your streak but you."
   - "Is it just videos, or do real people show up?" — "Real people, every week. There's a live hangout, a buzzy chat, study buddies, and me popping in to cheer on your messy first drafts."
   - "What if it's not for me?" — "Then you leave with the free starter pack and no hard feelings. The first room's on me — there's nothing to lose by hanging out once."
10. **`subscribe` / `inline`** (id `join`) — full-bleed gradient card (lavender→peach) with a soft ghost circle bottom-right; H2 "Come hang out. The first room's on me."; "Drop your email and I'll send the free starter pack plus an invite to this week's live hangout. No spam, just good company."; inline email field + dark "Join the fun 🫶" button (on submit, clears the field and swaps the button to "You're in! 🎉"); note "40,000 learners already inside. · @lolateaches on Instagram →".

Footer (centered): "Made with snacks & good company · © 2026 Lola Benitez".

## Design direction — Playful Rounded

**DNA**: Candy-bright, bouncy canvas for someone who makes learning feel like hanging out. EVERYTHING is round — cards, buttons, badges use big radii (16–40px) and pills are fully rounded; zero sharp corners. Lavender / peach / mint talk boldly on a warm-white canvas; saturated, not timid. Fredoka for round oversized headlines; Nunito (semibold/bold) for warm body. **The look leans on soft, colored, hard-ish offset shadows** (long blurred drops in violet, plus inset-ring "borders") — not flat, not hairline-only. Sticker badges sit slightly rotated with soft drop shadows, like peel-and-stick. Metrics live in fat color pills. Motion: gentle spring/bounce on load, soft hover-lift on cards — never cold slide-ins. Avoid: sharp corners, corporate blue, thin hairline type, dense data tables, muted desaturated palettes.

**Tokens** (define as CSS variables, obey exactly):

```css
:root{
  --canvas:#fffaf5; --surface:#ffffff; --surface-warm:#fff2e9;
  --ink:#2b2440; --ink-muted:#6b6480; --ink-subtle:#9b94ad;
  --lavender:#b8a6ff; --lavender-deep:#8b73f0;
  --peach:#ffb38a; --peach-deep:#f58a52;
  --mint:#9fe6c4; --mint-deep:#4fc795;
  --hairline:#f0e7df;
  --r-sm:16px; --r-md:28px; --r-lg:40px; --r-pill:999px;
  --sec:104px; --blk:36px;                 /* vertical section + block rhythm */
  --shadow-soft:0 18px 40px -18px rgba(99,71,180,.35);
  --shadow-card:0 22px 50px -24px rgba(99,71,180,.30);
  --font-d:'Fredoka',system-ui,sans-serif; --font-b:'Nunito',system-ui,sans-serif;
}
```

- **Fonts** — one `<link>`: `https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@500;600;700;800&display=swap`. Body = Nunito 500, 17px/1.65.
- **Type scale (real clamp() — use these):**
  - H1 display: Fredoka 600, `clamp(40px,6.4vw,68px)`, line-height 1.02, letter-spacing -1px
  - section H2: Fredoka 600, `clamp(28px,4vw,36px)`, -0.4px
  - metric number: Fredoka 700, `clamp(34px,4.4vw,46px)`, -1px
  - big-quote blockquote: Fredoka 600, `clamp(26px,4.4vw,42px)`, -0.5px
  - subscribe H2: Fredoka 700, `clamp(30px,5vw,46px)`, -1px
  - hero fallback "big": Fredoka 700, `clamp(64px,12vw,110px)`
  - lede 21px Nunito 600; eyebrow 13px Fredoka 600 uppercase +1.5px; pill/tag 13–15px Fredoka 600
  - section-head sub `<p>` 18px Nunito 600 (`max-width:54ch`); card body (course/belief) 15.5px Nunito 600; testimonial quote 18px Nunito 700 line-height 1.5; metric label / cred / nowmeta 14–15.5px Nunito 700
  - container: `.wrap{width:min(1120px,92vw);margin-inline:auto}`
  - **vertical rhythm**: hero `padding:72px 0 var(--sec)`; every following `<section>` `padding-bottom:var(--sec)` (104px); `.sec-head{margin-bottom:var(--blk)}` (36px)

## Signature techniques (pure CSS/SVG)

1. **Tri-radial candy wash on body** (fixed background): `background-image: radial-gradient(circle at 12% 8%, rgba(184,166,255,.18), transparent 42%), radial-gradient(circle at 88% 4%, rgba(255,179,138,.16), transparent 38%), radial-gradient(circle at 78% 92%, rgba(159,230,196,.18), transparent 40%); background-attachment:fixed;` over `--canvas`.
2. **Spring-easing buttons & cards**: transitions use `cubic-bezier(.34,1.56,.64,1)` (overshoot). `.btn{border-radius:var(--r-pill);box-shadow:0 10px 22px -10px rgba(139,115,240,.6)}`; primary = lavender-deep fill; secondary = white with `box-shadow:inset 0 0 0 2.5px var(--peach)` (an inset-ring "border" that deepens to peach-deep on hover). Hover lifts `translateY(-3px) scale(1.02)`.
3. **Highlighted headline word**: wrap word in `.hl{color:var(--lavender-deep);position:relative;white-space:nowrap}` and draw a mint swash behind it via `.hl::after{content:"";position:absolute;left:-2%;right:-2%;bottom:6%;height:34%;background:var(--mint);z-index:-1;border-radius:var(--r-pill);opacity:.85}`.
4. **Sticker badges**: white (or mint/peach) rounded-pill chips, absolutely positioned around the hero card, each rotated (`rotate:-9deg / 7deg / -4deg`) with soft drops `0 12px 26px -12px rgba(43,36,64,.5)`; an emoji leads each.
5. **Gradient art card + tilt**: `.art-card{border-radius:var(--r-lg);background:linear-gradient(150deg,var(--lavender),var(--peach));box-shadow:var(--shadow-card);rotate:2deg;aspect-ratio:4/5}` holds the cover-fit portrait.
6. **Fat metric pills**: `repeat(4,1fr)` grid; solid lavender/peach/mint fills + one warm pill with `box-shadow:inset 0 0 0 2.5px var(--peach), var(--shadow-soft)`; Fredoka 700 number over a 70%-ink label.
7. **Tilted rounded-square chips** for testimonial avatars (initials) and numbered beliefs: `width:46–48px;border-radius:14–16px;display:grid;place-items:center;rotate:-6deg;color:#fff`, fill cycling per position (peach-deep / lavender-deep / mint-deep).
8. **Course / belief cards**: `--surface` on `--r-md`, `1px solid var(--hairline)` + `var(--shadow-card)`; course cards carry an 8px gradient "thumb" bar on top (rendered first, above the tag) whose gradient differs per `:nth-child` (lavender / peach / mint). The sticker tag sits `rotate:-3deg`, `align-self:flex-start` (Bestseller = peach fill on `#5a2e10`; Free = mint fill on `#0f4d33`). Cards are `display:flex;flex-direction:column` with `p{flex:1}` so the "→" CTA bottom-aligns. Hover `translateY(-8px)`; course "→" CTA grows its gap on hover.
9. **FAQ accordion**: `<details>`/`<summary>` with marker hidden; a 34px warm rounded ("+") chip (`background:var(--surface-warm);color:var(--lavender-deep)`, Fredoka 700 20px) that on `[open]` rotates 45° (becomes ×) **and** swaps to `background:var(--lavender);color:#fff` — both transitions use the spring cubic-bezier.
10. **Big-type & subscribe panels**: full-bleed gradient cards (`linear-gradient(150deg,var(--mint),var(--lavender))` and `linear-gradient(135deg,var(--lavender),var(--peach))`), `overflow:hidden`, with a giant 200px ghost `“` pseudo-element / a 260px translucent circle as ornament.
11. **Pulsing "now" dot**: `.blink{background:var(--mint-deep);box-shadow:0 0 0 5px rgba(79,199,149,.25);animation:pulse 1.8s ease-in-out infinite}` where `@keyframes pulse{0%,100%{opacity:1}50%{opacity:.45}}`.

## Photo + toggle contract

The page ships a real portrait. The hero `<img src="portrait.webp">` (cover-fit inside `.art-card`) gets class `u-photo` and meaningful `alt` ("Lola Benitez illustrated as a friendly 3D character waving hello"). Provide a designed typographic fallback `.art-fallback.u-fallback` — a lavender radial-gradient rounded card (same 2deg tilt) reading "Hi, I'm Lola" / "come hang out 🫶" in white Fredoka. Default = photos ON. Include:

```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .art-fallback{display:grid !important}   /* scoped grid restore */
.atlas-photo-toggle{position:fixed;right:16px;bottom:16px;z-index:99999;display:flex;align-items:center;gap:8px;background:rgba(20,20,22,.88);color:#fff;border-radius:999px;padding:6px 6px 6px 14px;font:600 12px/1 -apple-system,system-ui,sans-serif;box-shadow:0 8px 28px -10px rgba(0,0,0,.55)}
.atlas-photo-toggle button{appearance:none;border:0;cursor:pointer;font:inherit;color:#16161a;background:#fff;border-radius:999px;padding:6px 14px;min-width:46px}
.atlas-photo-toggle button[aria-pressed="false"]{background:#3a3a42;color:#fff}
```

```html
<div class="atlas-photo-toggle" role="group" aria-label="示例照片 / Demo photos"><span>照片 Photos</span><button id="atlasPhotoBtn" type="button" aria-pressed="true">On</button></div>
<script>(function(){var b=document.getElementById('atlasPhotoBtn');if(!b)return;function set(on){document.body.classList.toggle('no-photos',!on);b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'On':'Off';}b.addEventListener('click',function(){set(document.body.classList.contains('no-photos'));});set(true);})();</script>
```

(`sample.png` is taken with photos ON.)

## Motion

- **Spring reveal on scroll**: every `<header>`/`<section>` is observed by one `IntersectionObserver` at `threshold:.12`; on intersect add `.in` and `unobserve`. Reveal elements carry `.rise{opacity:0;transform:translateY(22px) scale(.97)}` → `.in .rise{opacity:1;transform:none;transition:opacity .6s ease,transform .7s cubic-bezier(.34,1.56,.64,1)}`. Stagger children with `.d1…d5` delays (.06 / .14 / .22 / .3 / .38s).
- **Continuous**: only the "now" dot pulse (1.8s). Buttons/cards spring-lift on hover. No marquees, no autoplay, no parallax.
- **`prefers-reduced-motion: reduce`**: add `.in` to all sections immediately (skip the observer), force `.rise` visible, kill hover transitions, drop the card tilt and the dot pulse.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no frameworks.
2. Only external resources = the Google Fonts `<link>` and the local `portrait.webp` beside the file. No other remote assets, no Three.js/WebGL/heavy canvas.
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible (contrast, visible focus rings, alt text, screen-reader label on the email field).
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tag every section with `data-module` / `data-variant` exactly as listed. Honor `prefers-reduced-motion`. The look should read intentionally designed and playful, never AI-generic.

**Output: the complete `index.html` and nothing else.**
