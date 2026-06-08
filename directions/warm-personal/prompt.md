# 生成 Prompt — Warm Personal（暖意亲和）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，效果与本目录 `index.html` 基本一致。除一处 Google Fonts `<link>`（Fraunces + Nunito Sans）和一张本地肖像 `portrait.jpg`（外加三张 `avatar-{1,2,3}.jpg` 头像）外，**不得**引用任何其他外部资源。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Warm Personal** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no framework. The only external resources allowed are one Google Fonts `<link>` and local images (`portrait.jpg` + `avatar-1/2/3.jpg`). Reproduce the page **section-for-section** — match the copy, tokens, and signature techniques below.

## The person (brief)

- **Name**: Priya Nair — Executive & Leadership Coach
- **Audience**: senior leaders and founders considering 1:1 coaching
- **Primary goal**: book a free chemistry call (free, 30 min, no pitch)
- **Thesis / hero headline**: *"The hardest leadership work isn't strategy — it's **staying steady** when everything is uncertain."* ("staying steady" is the accent-underlined phrase.) Sub-lede: *"That's the room I hold. A calm, honest space for senior leaders and founders to think clearly and lead like themselves."*
- **Tone**: warm, grounded, trustworthy, calm — "a personal welcome."
- **Proof points (concrete, use verbatim)**:
  - ICF-certified (PCC); 9 years coaching practice; 200+ leaders coached
  - Former VP of People at a 600-person scale-up
  - Works with founders, C-suite, and first-time VPs; 6-month engagements
  - 4.9/5 across 80+ post-engagement reviews
  - Representative clients: Stripe, Figma, Notion (+ founders & C-suite)
- **Contact**: `priya@priyanair.coach` · Calendar `https://cal.com/priyanair/chemistry-call` · LinkedIn `https://www.linkedin.com/in/priyanair`
- **Meta**: title "Priya Nair — Executive & Leadership Coach"; description "Priya Nair is an ICF-certified (PCC) executive and leadership coach for senior leaders and founders. Book a free chemistry call — no pitch, just a conversation."

**Sticky header** (`PN` brand-mark + "Priya Nair"; nav: Why I coach / How we work / Clients / FAQ; primary "Book a call" pill). Header gains a hairline border + soft shadow once `scrollY > 12` (toggle `.scrolled`).

## Module plan (in this order)

Tag each section's opening tag with `data-module` / `data-variant` as listed. Use the real copy inline — do not invent filler.

1. `hero` / **split_portrait** — eyebrow "Hello, I'm Priya — come in"; serif headline (thesis, with "staying steady" wrapped in `.underline`); serif lede (sub-lede above); CTA row: primary "Book a chemistry call" (with up-right arrow SVG) + ghost "Why I do this"; reassurance line with check SVG: "Free, 30 minutes, no pitch — just a conversation." Right column = portrait card (see Photo contract) with a dashed offset ring and two floating pill badges: top-right "★★★★★ 4.9 · 80+ reviews", bottom-left "● 9 years · 200+ leaders".
2. `logos_press` / **mentioned_in** — full-bleed strip, top+bottom hairline, `--surface` band. Label "Trusted by leaders building thoughtful companies"; serif logo-words: Stripe · Figma · Notion · "+ founders & C-suite".
3. `story` / **split_image_text** — left: figure card with big serif quote-glyph and blockquote *"I spent years in the rooms where leaders are supposed to have the answers. What I learned is that steadiness is the answer — and it can be practiced."* + a rotated serif signature "Priya". Right: eyebrow "Why I do this", h2 "I've sat in the seat. I know how lonely steady can feel.", three paras (VP of People at a 600-person scale-up; retrained 9 years ago, 200+ leaders, 6-month engagements; "stay grounded, decide cleanly, and lead like yourself") with `<strong>` on the bolded phrases.
4. `testimonials` / **cards** — `--surface` band. Head: eyebrow "In their words", h2 "The work shows up quietly — in steadier decisions.", p "A few notes from leaders I've had the privilege of walking alongside." Three 5-star quote cards (each with avatar photo + initials fallback):
   - "Priya didn't hand me answers. She helped me hear my own — and trust them. I make harder calls now with far less noise in my head." — **Founder & CEO**, Series-B SaaS (init F)
   - "Six months with Priya rewired how I lead under pressure. My team noticed before I did — I'm calmer, clearer, and far more present." — **Chief Product Officer**, Growth-stage fintech (init C)
   - "Stepping into my first VP role felt like a free fall. Priya gave me a place to think out loud and find my footing. Steadiest I've ever felt at work." — **First-time VP of Engineering**, Enterprise software (init V)
5. `credentials` / **pills** — two columns. Left: eyebrow "Credentials & track record", h2 "Certified, experienced, and genuinely in your corner.", a paragraph, then accent-soft pills: "ICF-certified · PCC" (with star SVG) / "Former VP of People · 600-person scale-up" / "Founders · C-suite · first-time VPs" / "6-month 1:1 engagements". Right: 2×2 metric tiles (serif accent num `clamp(34px,5vw,42px)` + sans 700 14px muted caption) — **200+** Leaders coached · **9 yrs** Coaching practice · **4.9/5** Across 80+ post-engagement reviews · **PCC** ICF professional certification. (In the 4.9 tile the "/5" is a smaller, subtle suffix: `<span style="font-size:0.5em;color:var(--ink-subtle)">/5</span>`.)
6. `services` / **cards** — head: eyebrow "How we work together", h2 "A few ways to begin — all built around steadiness.", p "Every engagement starts with a free chemistry call…". Three cards (icon + h3 + p + accent svc-meta line):
   - **1:1 Leadership Coaching** — "The heart of my practice. Six months of fortnightly 1:1 sessions…" — meta "6 months · twice monthly · most popular"
   - **Founder Intensive** — "A focused container for a hard season — a raise, a reorg, a pivot…" — meta "8 weeks · weekly · async between"
   - **Team Offsites** — "Half- and full-day sessions to help leadership teams think clearly together…" — meta "½–1 day · 4–10 leaders · on request"
7. `beliefs` / **numbered** — `--surface` band. Head: eyebrow "What I believe", h2 "The few things I hold to in every room.", p. 2-col grid of 4 beliefs, each with a CSS-counter `01–04` chip (decimal-leading-zero):
   - "You already have most of the answer." / "Steadiness can be practiced." / "Honesty, held kindly." / "Lead like yourself." (each with its supporting sentence — keep the page's wording).
8. `currently_building` / **now_block** — single `.now-card`: "Now · Updated May 2026" label, eyebrow "What I'm focused on", h2 "A season of fewer clients, deeper work.", a 4-item dot list (cohort of founders navigating first 100-person scale, capped at six; writing a field guide on staying steady; monthly quiet hour for first-time VPs; re-reading Parker Palmer and Edgar Schein, walking more) — `<strong>` on the key phrases.
9. `writing` / **list** — head: eyebrow "From the journal", h2 "Notes on leading steadily.", p. Four hairline-separated rows (serif title · meta · arrow, hover indents left): "The quiet cost of always having the answer" (Essay · 6 min) / "What I learned holding 600 people through a reorg" (9 min) / "Steadiness is a muscle, not a mood" (5 min) / "Why your first VP year feels like free fall" (7 min).
10. `selected_quotes` / **large_type** — centered big serif pull-quote: *"I came in looking for answers. I left able to **trust my own** — and that changed everything about how I lead."* ("trust my own" in accent italic `<em>`), cite "— A founder, after six months together".
11. `faq` / **accordion** — reuses the `.testimonials` band class. Head: eyebrow "Before you book", h2 "A few honest answers.", p. Four `<details>` items (serif summary + accent "+" chip rotating to ×):
    - "What actually happens on a chemistry call?" — "Thirty unhurried minutes…"
    - "How is coaching different from mentoring or therapy?" — "Mentors give advice…"
    - "How much time will this take from my week?" — "A fortnightly engagement is about one hour every two weeks…"
    - "Do you work with leaders outside your timezone?" — "Yes. Sessions are over video…"
12. `book_a_call` / **cta_band** — centered `.book-card` with a soft radial glow + a `::before` blurred circle ornament. Eyebrow "Let's talk", h2 "Book a free chemistry call.", serif p ("Thirty unhurried minutes to see if we click…"), actions: primary "Find a time that works" → cal.com link + ghost "Email me instead" → mailto; reassurance "No pitch, just a conversation."
13. Footer — `PN` brand, links (email, "Chemistry call", LinkedIn), note "Executive & leadership coaching · ICF PCC".

## Design direction — Warm Personal

**DNA**: Cream + clay, soft generous rounding, paper-not-glass surfaces. Humanist serif headlines (Fraunces) + friendly sans body (Nunito Sans), loose 1.62 line-height. Terracotta accent used warmly and often (pills, underlines, soft CTA, numbered chips) but never loud. Surfaces lean on **soft layered paper shadows and hairline borders** (not hard offsets, not glassmorphism). Round-cornered and intimate. Motion = soft fade + rise. Avoid: harsh edges, cold grays, neon, purple gradients, glassy blur.

**Tokens** (CSS variables, obey exactly):
- colors: `--canvas:#fbf6ee` · `--surface:#f4ebdd` · `--ink:#2b2520` · `--ink-muted:#6b6155` · `--ink-subtle:#9a8e7e` · `--accent:#c2683f` · `--accent-hover:#a8542e` · `--accent-soft:#f0d9c8` · `--hairline:#e8dccb`
- fonts: `--serif:"Fraunces",Georgia,"Times New Roman",serif` · `--sans:"Nunito Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif`. h1–h3 are serif 500, letter-spacing −0.01em.
- Google Fonts `<link>`: `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Nunito+Sans:wght@400;700&display=swap`
- type scale (fluid — use these exact `clamp()`):
  - `--display-xl: clamp(40px, 8vw, 64px)` (hero, line-height 1.08)
  - `--display-md: clamp(28px, 4.6vw, 34px)` (section h2, line-height 1.16)
  - `--lede: clamp(19px, 2.4vw, 22px)` (serif lede)
  - `--body: 18px` (line-height 1.62) · `--label: 13px` (sans 700, uppercase, 0.14em tracking)
  - one-off displays: metric num `clamp(34px,5vw,42px)`; book h2 `clamp(30px,5.4vw,48px)`; bigquote `clamp(26px,4.4vw,40px)`. Section padding (`padding-block`) `clamp(64px,11vw,var(--section))`; the hero overrides its **top** padding to `clamp(40px,7vw,72px)`.
  - buttons: `.btn` is `padding:16px 28px; font-size:16px`; the header nav `.btn` shrinks to `padding:11px 20px; font-size:14px`.
- spacing: `--section:104px` · `--block:36px`. rounding: `--r-sm:10px` · `--r-md:18px` · `--r-lg:28px` · `--r-pill:9999px`.
- shadow tokens: `--shadow-soft: 0 2px 4px rgba(43,37,32,.04), 0 14px 34px rgba(122,78,48,.08)` · `--shadow-lift: 0 4px 8px rgba(43,37,32,.06), 0 22px 54px rgba(122,78,48,.13)`.
- layout: `.wrap{max-width:1120px;margin-inline:auto;padding-inline:24px}`.

## Signature techniques (pure CSS/SVG)

1. **Paper-grain canvas**: on `body`, two soft fixed terracotta radial dots over cream — `background-image: radial-gradient(circle at 18% 12%, rgba(194,104,63,.05), transparent 38%), radial-gradient(circle at 86% 78%, rgba(194,104,63,.045), transparent 40%); background-attachment: fixed;`. Plus `::selection{background:var(--accent-soft)}`.
2. **Accent highlighter underline** (`.underline` in hero): the span itself turns **`color:var(--accent)`** and is `white-space:nowrap` (so the phrase + its bar never break across lines) — the text goes terracotta, *not* dark. Then a pseudo-element bar sits behind it: `position:relative` on the span, `::after{content:"";position:absolute;left:-2%;right:-2%;bottom:0.06em;height:0.28em;background:var(--accent-soft);border-radius:var(--r-pill);z-index:-1}`. Reads like a highlighter swipe under accent-colored words.
3. **Eyebrow tick**: `.eyebrow` is uppercase sans 700 accent with a leading 26×2px accent bar via `::before` (rounded, opacity .75) and 10px gap.
4. **Blob-morph portrait** (fallback): organic `border-radius: 42% 58% 56% 44% / 50% 46% 54% 50%` on the SVG portrait, animated by `@keyframes blobMorph` (16s ease-in-out, swaps to `54% 46% 44% 56% / 44% 54% 46% 56%` at 50%). A dashed accent-soft **offset ring** sits at `inset:-16px` behind it. (The real photo uses a calmer `--r-lg` rounded square — see Photo contract.)
5. **Floating pill badges**: `.badge-float` = canvas pill, hairline border, `--shadow-soft`, absolutely positioned off the portrait's corners (rating top-right, years bottom-left; pushed further out ≥920px). Stars in accent; a small accent `.dot`.
6. **Brand-mark gradient chip**: 34px pill, `background: radial-gradient(circle at 32% 28%, var(--accent-soft), var(--accent))`, warm off-white "PN" (`color:#fff7ef`, sans 700, 13px, letter-spacing .02em — the same `#fff7ef` used for `.btn-primary` text, never pure `#fff`), inset white hairline `box-shadow: inset 0 0 0 1px rgba(255,255,255,.25)`.
7. **Numbered beliefs via CSS counters**: `.beliefs-list{counter-reset:belief}`, each `.bnum{counter-increment:belief}` renders `::before{content:counter(belief, decimal-leading-zero)}` → 01–04, inside an accent-soft circle.
8. **Card lift on hover**: quote/service cards `transform: translateY(-5px)` + `--shadow-soft`→`--shadow-lift` over `0.3s cubic-bezier(.2,.7,.3,1)`.
9. **Writing-row hover indent**: `.write-row` transitions `padding-left` to 16px + `background:var(--surface)` on hover; title turns accent; arrow nudges `translate(3px,-3px)`.
10. **Button choreography**: `.btn-primary` accent pill with `box-shadow:0 8px 22px rgba(194,104,63,.32)`; hover → `--accent-hover`, `translateY(-2px)`, deeper shadow, and its inner `.arrow` SVG slides `translate(3px,-3px)`. `.btn-ghost` is hairline-bordered, hover borders+texts accent and rises 2px.
11. **Radial-glow CTA / now cards**: `.book-card` & `.now-card` layer a soft top-right radial-gradient over `--surface` — now: `radial-gradient(circle at 88% 14%, rgba(240,217,200,.5), transparent 52%)`, book: `radial-gradient(circle at 85% 12%, rgba(240,217,200,.6), transparent 50%)`. The book card adds a blurred 240px `::before` circle (`radial-gradient(circle, var(--accent-soft), transparent 70%)`, opacity .6) bleeding off the top-left corner (`top:-90px;left:-70px`). The now-block's bullet dots get a signature soft halo: `.now-dot{width:10px;height:10px;background:var(--accent);box-shadow:0 0 0 4px var(--accent-soft)}`. FAQ "+" chip rotates 45° to "×" when `[open]`.

## Photo + toggle contract

The page **ships a real portrait** (`portrait.jpg`) and three testimonial avatars (`avatar-1.jpg` … `avatar-3.jpg`). Default = photos ON; `sample.png` is taken with photos on.

- Hero portrait: `<img class="portrait-photo u-photo" src="portrait.jpg" width="320" height="320" alt="Priya Nair, executive and leadership coach, smiling warmly">` — `border-radius:var(--r-lg)`, `object-fit:cover`, `--shadow-lift`, width `clamp(230px,60vw,320px)` square. Its `u-fallback` twin is the blob-morph SVG self-portrait described above (warm clay tones), `role="img"` with an `aria-label`.
- Each testimonial avatar: `<img class="av-photo u-photo" src="avatar-N.jpg" width="40" height="40" alt="" aria-hidden="true">` (40px round, inset white ring + soft shadow); the `u-fallback` twin is a gradient initials chip (`.av .av-a/.av-b/.av-c`).
- **Toggle** — fixed bottom-right group; clicking flips `body.no-photos`:
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
  /* restore original layout displays for fallbacks when photos OFF */
  body.no-photos .portrait-card .u-fallback.portrait{display:grid !important}
  body.no-photos .quote-card .who .u-fallback.av{display:grid !important}
  ```

## Motion

- **Scroll reveal**: elements with `.reveal` start `opacity:0; transform:translateY(22px)` and transition both over `0.8s cubic-bezier(.2,.7,.3,1)`; stagger classes `.d1/.d2/.d3/.d4` add `transition-delay: 0.08 / 0.16 / 0.24 / 0.32s`. An `IntersectionObserver` (`threshold: 0.12`, `rootMargin: '0px 0px -8% 0px'`) adds `.in` once and unobserves. If no IO support or reduced-motion, add `.in` to all immediately.
- **Sticky-header shadow**: on scroll, add/remove `.scrolled` when `scrollY > 12` (passive listener, run once on load).
- **Continuous**: only the hero portrait `blobMorph` (16s). No marquee, no letterbox, no auto-scroll.
- **`prefers-reduced-motion: reduce`**: disable all animations/transitions + smooth scroll (`* { animation:none!important; transition:none!important; scroll-behavior:auto!important }`), force `.reveal` visible, stop the blob animation.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline; no build, no npm, no framework.
2. Only external resources = the Google Fonts `<link>` (Fraunces + Nunito Sans) and the local images `portrait.jpg` + `avatar-1/2/3.jpg`. No other remote assets, no Three.js/WebGL/heavy canvas.
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible — color contrast, visible `:focus-visible` outlines (3px accent), `alt` text, reduced-motion support.
4. Tag every section with its `data-module` / `data-variant` (list above).
5. Real content from the brief — no lorem, no "passionate about" filler. Soft, warm, intentional — feels like a personal welcome, not a template.

**Output: the complete `index.html` and nothing else.**
