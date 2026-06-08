# 生成 Prompt — Glassmorphism（玻璃拟态）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，只额外依赖：一个 Google Fonts `<link>`（Inter）和一张同目录本地图片 `portrait.webp`（被大幅虚化当作背景）。效果应与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Glassmorphism** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks, no WebGL. Only external resources: the Inter Google Fonts `<link>` and the local `portrait.webp`.

## The person (brief)

- **Name**: Kai Anders
- **Role**: AI Product Designer
- **Audience**: startups and product teams shipping AI features that people actually trust
- **Primary goal**: get visitors to start a conversation and work with him
- **Thesis (the angle the whole page serves)**: *"I design AI tools that feel calm, not magic-tricky."* The page itself should embody that thesis — composed, legible, quietly confident, never gimmicky.
- **Tone**: calm, precise, human, low-ego
- **Proof points (use these concretely — no filler)**:
  - Shipped AI features at 2 venture-backed startups (0→1 product surfaces)
  - Ex-design lead — set the bar for a product team
  - 10 years designing software end-to-end
- **Location / timezone**: Berlin (CET)
- **Contact**: email `kai@kaianders.design`; primary CTA "Let's work together"

## Module plan (in this order)

Tag every section's opening tag with `data-module` / `data-variant` exactly as below.

1. **`hero` / `glass_card_over_backdrop`** — full-viewport blurred photographic backdrop; one frosted glass hero card floats over it. Eyebrow `Kai Anders · AI Product Designer`; headline **"I design AI tools that feel `calm`, not magic-tricky."** (the word *calm* gets the violet-pink gradient text); supporting lede "For startups and product teams shipping AI features that people actually trust — interfaces that explain themselves, stay quiet, and earn their place."; CTA row: primary glass button "Let's work together →" (`#contact`) + ghost link "See selected work" (`#work`).
2. **`selected_work` / `grid`** — eyebrow `Selected work`, h2 "Calm surfaces for hard AI problems." Then a 3-column grid of frosted work cards (links to `#contact`), each: a `01/02/03` number, title, outcome paragraph, a pill tag:
   - `01` **Inbox triage, without the panic** — "An AI triage surface for a support team — ranked, explainable, reversible. Agents see why a message was flagged, not just that it was. Cut time-to-first-reply by a third." · tag `0→1 · AI UX`
   - `02` **Handoff that humans trust** — "Designed the agent-to-human handoff for a support product: clear seams, full context carried over, no silent automation. People stopped fighting the bot and started leaning on it." · tag `Agent flows`
   - `03` **Confidence you can read** — "A model-confidence pattern that shows uncertainty honestly — when to trust the suggestion, when to check. Turned 'spooky black box' feedback into measured adoption." · tag `Design system`
3. **`metrics` / `stat_row`** — one glass band holding 3 stat tiles (gradient numbers): **2** "venture-backed startups shipped" · **10** "years designing software end-to-end" · **0→1** "AI surfaces led as design lead".
4. **`beliefs` / `numbered`** — eyebrow `How I work`, h2 "Principles I keep coming back to." Then a 2-col grid of 4 numbered glass cards:
   - `01` **Calm beats clever** — "A feature that explains itself quietly beats one that dazzles and disappears. I design for the second use, not the demo."
   - `02` **Show the seams** — "People trust what they can inspect. When the model is unsure, the interface should say so — not paper over it with confidence it hasn't earned."
   - `03` **Reversible by default** — "Automation should never be a one-way door. Every AI action ships with an obvious undo and a path back to the human."
   - `04` **Ship the boring 80%** — "The magic lives in the unglamorous flows — empty states, errors, the second screen. I'd rather get those right than chase a flashy hero."
5. **`testimonials` / `quote_led`** — single big glass quote card. Eyebrow `In their words`. Blockquote: "Kai took our scariest AI feature and made it feel `trustworthy` overnight. Support adoption went from grudging to default — and our team finally stopped second-guessing the model." (word *trustworthy* uses gradient text). Cite: **Dana Reyes** · VP Product, Loop Support.
6. **`experience` / `timeline`** — eyebrow `Track record`, h2 "Where I've been designing." Then one glass timeline panel, rows of `when | (role / org / blurb)`, hairline divider between rows:
   - **2022 — Now** · Lead Product Designer, AI · *Loop Support · Remote* — "Owned the design of agent-assist and human-in-the-loop surfaces for a support platform used by 400+ teams. Built the confidence and handoff patterns the rest of the product now leans on."
   - **2019 — 2022** · Senior Product Designer · *Northpine (acquired) · Berlin* — "First design hire. Took an analytics tool from 0→1, shaped the design system, and stayed through acquisition to keep the experience coherent as the team scaled."
   - **2015 — 2019** · Product Designer · *Studio Halcyon · Berlin* — "Agency years — shipped interfaces for fintech, health, and developer tools. Learned to design fast, defend decisions, and make calm things under pressure."
7. **`tools` / `stack_list`** — eyebrow `The stack`, h2 "What I build with." Then a 2-col grid of 4 glass groups, each an uppercase label + a row of pills:
   - **Design** — Figma · FigJam · Origami Studio · Rive · Spline
   - **Prototyping** — React · Tailwind · Framer Motion · v0
   - **AI & eval** — OpenAI API · LangSmith · Braintrust · Cursor
   - **Research** — Dovetail · Maze · Notion · Linear
8. **`currently_building` / `now_block`** — single glass card. Eyebrow `Now`, h2 "What I'm focused on this season." Then a list of 3 items, each a glowing dot + title + line:
   - **Writing a small pattern library for AI confidence UI** — "Honest ways to show uncertainty without scaring people off. Aiming to open-source the first set this summer."
   - **Advising two early-stage AI teams** — "Fractional design help, one day a week each — mostly on first-run experiences and trust."
   - **Learning to draw, badly and happily** — "Ten minutes of life drawing a day. It's quietly making me a better designer."
   - footer stamp: "Updated May 2026 · Berlin".
9. **`faq` / `two_column`** — eyebrow `Before you reach out`, h2 "A few honest answers." Then a 2-col grid of 4 glass Q&A cards:
   - **What kind of work do you take on?** — "Mostly AI product surfaces for startups — anything where a model meets a real user and trust is on the line. Full engagements or focused sprints both work."
   - **Do you work fractionally?** — "Yes. I keep one or two advisory slots open for early teams — usually a day a week, enough to shape direction without slowing you down."
   - **Can you prototype, not just design?** — "I build working React prototypes when it helps a decision. Real interaction beats a flat mockup for anything AI-driven."
   - **What's your timezone?** — "Berlin (CET). I overlap comfortably with European mornings and US East Coast afternoons, and I'm flexible for kickoffs."
10. **`contact` / `contact_form`** — single centered glass card. Eyebrow `Work with me`, h2 "Tell me what you're building.", lede "If you've got an AI feature that feels too clever and not calm enough, that's exactly my kind of problem. Drop a line — I read every one." Then a glass form: Name, Email, "What you're working on" (textarea), glass submit button "Send message" (on submit, swap label to "Thanks — I'll be in touch"). Fallback line: "Prefer email? kai@kaianders.design".

Then a centered **footer**: "Kai Anders — AI product designer. Designed to feel calm."

## Design direction — Glassmorphism

**DNA**: Frosted translucent glass panels floating over a colorful, blurred photographic backdrop. Depth comes from layered `backdrop-filter: blur()`, hairline translucent-white borders (`1px`), a faint **inset top highlight line**, and a soft diffuse drop shadow underneath — never solid flat cards. (Note: the look *relies on* layered box-shadows — a deep diffuse outer shadow plus inset highlight/glow — so do not say "no drop shadows"; the rule is no *hard/opaque* shadows.) Light text on color; violet/pink as accent + glow. Big rounded corners (14–30px), generous air, tight-tracked Inter 800 headlines. Gentle float-on-hover; soft fade-up on scroll. Modern, calm, slightly dreamlike — the opposite of flat SaaS. Avoid: opaque flat cards, hard drop shadows, neon cyberpunk, heavy borders, a busy backdrop that fights the text, generic white-bg SaaS.

**Tokens** (define as CSS variables, obey exactly):

```css
:root{
  --backdrop:#1c1033;          --backdrop-2:#3a1d6e;
  --glass-fill:rgba(255,255,255,0.10);
  --glass-fill-strong:rgba(255,255,255,0.16);
  --glass-border:rgba(255,255,255,0.28);
  --glass-highlight:rgba(255,255,255,0.55);
  --ink:#ffffff;
  --ink-muted:rgba(255,255,255,0.74);
  --ink-subtle:rgba(255,255,255,0.52);
  --accent:#a78bfa;            --accent-2:#f0abfc;
  --accent-glow:rgba(167,139,250,0.45);
  --section:104px; --block:32px; --tight:14px;     /* @max-width:600px → section 72px, block 24px */
  --r-sm:14px; --r-md:22px; --r-lg:30px;
  --maxw:1080px;
}
```

- **Font**: Inter (weights 400/500/600/700/800), via
  `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">`
  Body `'Inter',system-ui,-apple-system,sans-serif`, `line-height:1.62`, `-webkit-font-smoothing:antialiased`.
- **Type scale (use these exact clamps):**
  - display h1: `clamp(40px,8vw,68px)`, 800, line-height 1.04, letter-spacing -2.4px
  - h2: `clamp(26px,4.5vw,30px)`, 700, line-height 1.14, -0.8px
  - lede: `clamp(18px,2.6vw,21px)`, 400, line-height 1.5, -0.2px, color `--ink-muted`
  - body p: 17px, `--ink-muted`
  - eyebrow: 12px, 600, uppercase, letter-spacing 2.2px, color `--accent-2`
  - metric num: `clamp(38px,6vw,46px)`, 800, line-height 1, -1.6px
  - quote blockquote: `clamp(20px,3vw,26px)`, 500, line-height 1.4, -0.5px
- **Layout**: `.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}`; `section{padding-block:var(--section)}`.
- **Per-block measure caps** (single-card sections don't fill the 1080px wrap — cap them): hero card `max-width:760px`; hero lede `max-width:50ch`; quote card `max-width:780px`; now card `max-width:760px`; contact card `max-width:640px; margin:0 auto` (the only centered one). All others fill the wrap. **Grid gaps**: work grid `20px`; beliefs / stack / faq grids `18px`; metrics band `14px`.
- **Hero spacing**: `.hero{min-height:100svh;display:flex;align-items:center;padding-block:120px 88px}`; hero card padding `clamp(28px,5vw,52px)`; h1 `margin:18px 0 0`; lede `margin-top:22px`; `.cta-row{margin-top:34px;gap:16px}`.
- **Section header**: `.sec-head{margin-bottom:var(--block)}` with its `h2{margin-top:14px}` (eyebrow→h2 gap). The now-card and contact-card headers instead use inline h2 margins: now `margin:14px 0 22px`, contact `margin-top:14px` (with its lede `margin:14px 0 28px` before the form); the quote blockquote sits `margin-top:18px` below its eyebrow.
- **Secondary type sizes** (per block, all weight 700 unless noted): work-card h3 `19px`/-0.4px + body `15px`; belief h3 `18px`/-0.4px + body `15px`; timeline h3 `18px`/-0.3px, org line `14px` `--ink-subtle`, blurb `15px`; now h3 `17px`/600/-0.2px + body `15px`; faq h3 `16px`/-0.2px + body `15px` (line-height 1.58); stack-group label `12px`/600/2px-tracked uppercase `--accent-2`; pill `13px`/500; tag `11px`/600/.8px uppercase. `--ink-muted` body, line-height ~1.55.

## Signature techniques (pure CSS/SVG)

1. **The glass recipe** (every panel/card uses `.glass`):
   ```css
   .glass{
     background:var(--glass-fill);
     -webkit-backdrop-filter:blur(22px) saturate(140%);
     backdrop-filter:blur(22px) saturate(140%);
     border:1px solid var(--glass-border);
     border-radius:var(--r-lg);
     box-shadow:
       0 20px 50px -20px rgba(0,0,0,.55),   /* diffuse drop */
       inset 0 1px 0 var(--glass-highlight), /* top rim highlight */
       inset 0 0 40px rgba(255,255,255,0.04);/* faint interior glow */
   }
   ```
2. **Blurred photo backdrop + overlay** (three fixed layers behind content). The photo is pushed to `inset:-8%; width/height:116%`, then `filter:blur(34px) saturate(135%) brightness(0.82); transform:scale(1.06)`. Over it, a fixed `.backdrop-overlay` (z-index -1) darkens/tints for legibility:
   ```css
   .backdrop-overlay{position:fixed;inset:0;z-index:-1;pointer-events:none;background:
     radial-gradient(120% 90% at 50% -10%, transparent 40%, rgba(16,8,33,0.55) 100%),
     linear-gradient(180deg, rgba(20,11,40,0.30) 0%, rgba(20,11,40,0.62) 100%);}
   ```
3. **Pure-CSS fallback backdrop** (shown when photos off): two-tone gradient + soft light blobs, still intentional:
   ```css
   background:
     radial-gradient(60% 55% at 22% 18%, rgba(240,171,252,0.55), transparent 60%),
     radial-gradient(55% 50% at 82% 28%, rgba(167,139,250,0.55), transparent 60%),
     radial-gradient(70% 60% at 60% 92%, rgba(99,102,241,0.45), transparent 65%),
     linear-gradient(150deg, var(--backdrop) 0%, var(--backdrop-2) 100%);
   ```
4. **Gradient accent text** (the `.glow` span on the headline word and the testimonial word):
   `background:linear-gradient(100deg,var(--accent-2),var(--accent) 55%,#c4b5fd);-webkit-background-clip:text;background-clip:text;color:transparent;` — metric numbers use `linear-gradient(110deg,#fff,var(--accent-2))`.
5. **Eyebrow with leading rule**: inline-flex, `::before` content `""` = a 22px×1px bar in `--accent-2` at .7 opacity, gap 9px.
6. **Glass pill buttons**: primary CTA / submit are pill (`border-radius:999px`) with `background:linear-gradient(120deg,#fff,#e9e3ff)`, `1px solid rgba(255,255,255,0.6)` border, dark ink `#1a1030`, `font-size:15px`/600, padding `14px 26px` (CTA) / `14px 30px` (submit), `box-shadow:0 12px 30px -10px var(--accent-glow), inset 0 1px 0 #fff`. **Hover choreography** (transition `.25s ease`): button lifts `translateY(-3px)` + deeper glow (`0 18px 40px -10px var(--accent-glow)`); the `→` arrow slides `translateX(4px)`. The ghost "See selected work" link is a plain underline-on-bottom (`border-bottom:1px solid rgba(255,255,255,0.35)`), not a pill.
7. **Float-on-hover cards**: work cards lift `translateY(-8px)`, swap to `--glass-fill-strong`, deepen shadow to `0 32px 60px -22px rgba(0,0,0,.6), inset 0 1px 0 var(--glass-highlight)` (keep the top rim) — transition `.3s cubic-bezier(.2,.7,.2,1)`. Ghost link underline shifts to `--accent-2` on hover. **Card radius override**: work / belief / stack / faq cards use the medium radius `--r-md` (22px), not the panel default `--r-lg`; the hero, metrics band, timeline, quote, now, and contact panels keep `--r-lg` (30px).
8. **Glass form fields**: translucent inputs `rgba(255,255,255,0.07)` + 1px `rgba(255,255,255,0.20)` border + `backdrop-filter:blur(8px)`; focus → border `--accent-2`, brighter fill, `box-shadow:0 0 0 3px var(--accent-glow)`.
9. **"Now" glowing dot**: 9px dot in `--accent-2` with `box-shadow:0 0 0 4px var(--accent-glow)` halo. Pill tags / stack pills: `rgba(255,255,255,0.07–0.08)` fill + faint border.
10. **Inner tiles & timeline seams**: the metrics band is a thin glass frame (`padding:14px`, the `--tight` token, gap `14px`) holding 3 inset tiles — metric tiles and inner blocks sit on `rgba(255,255,255,0.05)` with `1px rgba(255,255,255,0.12)` border, tile padding `30px 24px`, label `13px` `--ink-muted` `margin-top:12px`. Timeline rows are a `140px 1fr` grid (gap 24px, row padding `22px 0`), separated by `border-top:1px solid rgba(255,255,255,0.14)`; first row no border + `padding-top:0`, last row `padding-bottom:0`. The timeline panel pads `clamp(26px,4vw,40px)`.

## Photo + toggle contract (must implement exactly)

This page **ships a real local backdrop image** `portrait.webp` (a vivid photo used purely as ambient blurred color behind the glass — not a face portrait).

- The backdrop `<img>` gets class `u-photo` + meaningful `alt` (e.g. "Soft blurred photographic backdrop in pink and violet tones, used as ambient color behind frosted glass panels"). The pure-CSS gradient fallback element gets class `u-fallback backdrop-fallback`.
- Default = photos ON. `sample.png` is taken with photos ON.
- Include this CSS verbatim (note the scoped restore so the fallback re-displays as a block):
  ```css
  .u-fallback{display:none !important}
  body.no-photos .u-photo{display:none !important}
  body.no-photos .u-fallback{display:revert !important}
  body.no-photos .u-fallback.backdrop-fallback{display:block !important}
  ```
- Fixed bottom-right toggle markup + script, verbatim, default On:
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

- **Reveal**: elements with `.reveal` start `opacity:0; transform:translateY(22px)` and transition to `opacity:1; transform:none` over `opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1)` when they enter view. An `IntersectionObserver` (`threshold:0.12`, `rootMargin:'0px 0px -8% 0px'`) adds `.in` once, then unobserves.
- **Hover**: float-on-hover for cards/buttons + arrow slide, as above. `html{scroll-behavior:smooth}`.
- **`prefers-reduced-motion: reduce`**: force `.reveal{opacity:1;transform:none;transition:none}`, disable hover transitions, and have the IO script just add `.in` to everything immediately. No other continuous animation exists — do not add any.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework.
2. Only external resources: the Inter Google Fonts `<link>` **and** the local `portrait.webp`. No other remote images, no Three.js/WebGL/heavy canvas — all glass/blur/glow/gradient done in pure CSS (gradients, box-shadow, backdrop-filter, transforms).
3. Responsive 360–1440px, mobile-first; semantic HTML; accessible (contrast, visible focus rings, alt text); honor `prefers-reduced-motion`. Responsive collapses: work grid → 2-up at ≤860px → 1-up at ≤600px; beliefs/stack/faq grids → 1-up at ≤860px; metrics band → 1-up at ≤600px; timeline rows stack at ≤600px.
4. Real content from the brief above — no lorem, no "passionate about innovation".
5. Tag every section with `data-module`/`data-variant` per the module plan. Keep the glass aesthetic committed, not AI-generic.

**Output: the complete `index.html` and nothing else.**
