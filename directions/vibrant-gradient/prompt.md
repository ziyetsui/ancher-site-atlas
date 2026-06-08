# 生成 Prompt — Vibrant Gradient（活力渐变）

> 复制本文件全文，发给任意「能写前端的 agent」。它应输出**单个自包含 `index.html`**，唯一的外部资源是一条 Google Fonts `<link>`（Sora + Plus Jakarta Sans）和同目录的一张本地图片 `portrait.webp`（hero 照片）。效果应与本目录 `index.html` 基本一致。

---

You are a senior frontend designer-developer. Generate a single self-contained `index.html` in the **Vibrant Gradient** direction for the person below. All CSS in one `<style>` tag, all JS inline. No build step, no frameworks. Output **only** the HTML file.

## The person (brief)

- **Name**: Nia Okafor (brand mark renders as `Nia Okafor.` with a magenta period).
- **Role**: Brand & content creator
- **Audience**: brands & founders who want to grow
- **Primary goal**: get the visitor to *work with her* (start a project / collab) and subscribe to her newsletter.
- **Thesis**: *"I help brands sound like humans and grow like crazy."* The page should feel like momentum — energetic, warm, confident.
- **Tone**: bold, friendly, high-energy, plainspoken; zero corporate filler. Signature line repeated across the page: *"screenshotted, not scrolled past."*
- **Proof points (use verbatim, no filler)**:
  - **3 brands** grown past **1M followers**
  - **50M+ views** generated across launches
  - **1M+ followers** on the biggest account
  - Ex-**Head of Social** at a DTC brand (in-house)
- **Contact**: Work with me → `hello@niaokafor.com`; Newsletter *The Brandwagon*; Instagram `@niaokafor`.

## Module plan (in this order)

Tag every section's opening tag with `data-module` / `data-variant` exactly as below. The hero is a `<header>`; tag it too.

1. **`hero` · `bold_statement`** — eyebrow "Brand & content creator"; headline *"I help brands sound like `humans` & grow like `crazy`."* (the words "humans" and "crazy" gradient-filled); lede *"Voice, content, and growth for brands and founders who'd rather be screenshotted than scrolled past."*; two CTAs: primary "Work with me →" (mailto) + ghost "See the work" (#work). Right column: a `portrait.webp` photo in a rounded glass frame with a `::before` gradient ring, plus a glass badge bar pinned across the bottom of the frame (insets `bottom:26px;left:26px;right:26px`) captioned **Nia Okafor / Ex-Head of Social, DTC** (avatar initials "NO").
2. **`metrics` · `big_numerals`** — 4 glass cards, oversized gradient numerals + label: **3** "brands grown past 1M followers" / **50M+** "views generated across launches" / **1M+** "followers on the biggest account" / **DTC** "ex-Head of Social, in-house". (This section has `padding-top:0`.)
3. **`selected_work` · `grid`** — eyebrow "Selected work", head "Brand voices people actually share." 4 glass cards, each: kicker · `<h3>` · description · gradient result line:
   - `DTC · Beauty` — **Hue Lab** — "Rebuilt the social voice from 'salesy' to 'best-friend-with-great-taste,' then ran the launch calendar end to end." → **0 → 1.2M followers in 14 months**
   - `Wellness · App` — **Stillwell** — "Turned a meditation app into a personality. Scripted, filmed, and edited the short-form engine." → **28M views, 4.1% CTR to install**
   - `Food · CPG` — **Crumb & Co.** — "Built a snackable content system the in-house team could keep running after handoff." → **1M+ followers, 3× UGC volume**
   - `B2B · Founder` — **Founder voice — Ravel** — "Ghost-built a founder's POV across launches: hooks, threads, and a voice that didn't sound like a press release." → **9M views, inbound from 40+ brands**
4. **`testimonials` · `cards`** — eyebrow "In their words", head "What founders say after." 3 glass quote cards (gradient `"` mark, blockquote, avatar initials + name + role):
   - **Jordan Mensah**, Founder, Hue Lab (JM): "Nia found our voice in week one. Comments went from crickets to people tagging their friends. It actually felt like us — just braver."
   - **Priya Raman**, Head of Growth, Stillwell (PR): "We'd burned through two agencies. Nia shipped more in a month than both did in a quarter — and the numbers backed it up."
   - **Devon Kerr**, Founder, Ravel (DK): "She made me sound like the best version of myself online. People DM me about posts she wrote like I wrote them at 2am."
5. **`logos_press` · `mentioned_in`** — eyebrow "Mentioned in", head "Where the work showed up." A flex row of glass pill chips (gradient dot + name + small grey kind): Modern Retail (Feature) · The Goods (Profile) · Later Blog (Guest essay) · Creator Science (Podcast) · DTC Newsletter (Top voice) · Glossy (Quoted).
6. **`services` · `cards`** — eyebrow "How we work together", head "Three ways to grow like crazy." 3 glass cards, each with a gradient step badge, `<h3>`, description, gradient price:
   - **1 · Voice Sprint** — "A focused two weeks to find your brand voice, build a tone guide, and ship a starter content engine your team can run." → from **$6k** · 2 weeks
   - **2 · Growth Retainer** — "I run the whole short-form engine — strategy, scripts, hooks, and the launch calendar — as an embedded part of your team." → from **$9k** / mo
   - **3 · Founder Ghost** — "Your POV, in your voice, without the 2am drafting. Hooks, threads, and posts that sound like you on your best day." → from **$4k** / mo
7. **`beliefs` · `numbered`** — eyebrow "How I think", head "What I believe about growth." 2-col grid of 4 glass rows, gradient numeral 01–04 + `<h3>` + body:
   - **01 Sound human or get scrolled past.** "Brands don't have followers — people do. The fastest growth comes from sounding like a person worth following, not a press release."
   - **02 Hooks are 80% of the job.** "The best post nobody sees does nothing. I obsess over the first three seconds because that's where attention is won or lost."
   - **03 Build the engine, not one viral post.** "Luck isn't a strategy. I build repeatable systems your in-house team can keep running long after I hand it off."
   - **04 Numbers without taste age badly.** "Chasing the algorithm gets you views you regret. Brave, on-brand content compounds — it's the stuff people still share next year."
8. **`selected_quotes` · `large_type`** — one full-width glass card (gradient wash via `::before` at 8% opacity), big Sora 800 blockquote: *"If your brand wouldn't get screenshotted, it's getting scrolled past. The whole game is being worth the share."* — cite: "— my one rule, taped above the desk". (`padding-top:0`.)
9. **`currently_building` · `now_block`** — a glass "now" card: a coral **pulsing dot** + stamp "Now · Updated May 2026"; gradient `<h2>` "What I'm building right now."; a 4-item list, each with a gradient tag pill + sentence:
   - **Client** — Launching **Hue Lab's** first creator collab series — scripting and running the whole rollout.
   - **Writing** — Drafting **The Brandwagon** weekly — teardowns of brands doing social right (and wrong).
   - **Learning** — Going deep on **vertical video editing** and AI-assisted scripting workflows.
   - **Open to** — One more **Growth Retainer** slot for Q3 — DTC or founder-led brands preferred.
10. **`faq` · `accordion`** — eyebrow "Before you ask", head "Questions I get a lot." Native `<details>` glass cards with a rotating `+` button (rotates to × when open):
    - **Do you work with brands outside DTC?** — "Mostly DTC, wellness, and founder-led brands — that's where my playbooks hit hardest. If you're B2B with a real personality, I'm open to it. If you want corporate-safe and beige, I'm probably not your person."
    - **What does a typical engagement look like?** — "Most start with a Voice Sprint to lock the foundation, then roll into a Growth Retainer where I run the short-form engine. Founders often add a Ghost track on top. We figure out the right shape on a quick intro call."
    - **Will my team be able to keep this going?** — "That's the whole point. Every engagement ships a tone guide, hook library, and a content system documented well enough for an in-house team to run it without me. I'd rather make myself optional than indispensable."
    - **Can you guarantee a follower number?** — "No honest person can. What I guarantee is a sharper voice, a repeatable engine, and content people actually want to share. The numbers — like 3 brands past 1M — follow from doing the work right."
11. **`subscribe` · `cta_band`** — a centered glass card (gradient wash via `::before` at 10%): eyebrow "The Brandwagon", head "Grow like crazy, `in your inbox.`" (last phrase gradient-filled), copy "Weekly teardowns of brands doing social right (and the ones fumbling it). Hooks, voice notes, and the playbooks I use with clients."; email input (`you@brand.com`, non-functional `onsubmit="return false"`) + primary "Subscribe" button; footer links: "Work with me → **hello@niaokafor.com**" and "Instagram **@niaokafor**".

Plus a sticky pill **nav** at top (glass bar: brand "Nia Okafor." + links Work / Services / Words / FAQ / Newsletter + primary "Work with me →"), and a centered **footer**: "Nia Okafor. — brand & content creator · helping brands sound like humans & grow like crazy."

## Design direction — Vibrant Gradient

**DNA**: White field punctuated by soft aurora/mesh gradient blobs (indigo → magenta → coral) drifting behind everything. Bold rounded sans does the talking — big confident statements, oversized numerals, lots of air. Content sits in **glassy frosted cards** (`backdrop-filter:blur`) floating over the gradient haze, with large corner radii (24–36px), a soft layered shadow, and a thin white highlight border. Gradient **text fill** on key words, numerals, and result lines. Energetic, human, optimistic — never flat-corporate, never dark. Color *is* the personality; restraint lives in the white space. Note: this direction **relies on soft layered shadows and the gradient ring/glow** — do not strip shadows or flatten cards. Avoid: hard-edged low-radius boxes, dark backgrounds, muddy/generic purple gradients, stock-SaaS hero.

**Tokens** (define as CSS variables, obey exactly):
```css
--canvas:#ffffff; --surface:#fbfaff;
--glass:rgba(255,255,255,0.62); --glass-border:rgba(255,255,255,0.7);
--ink:#16121f; --ink-muted:#5a5470; --ink-subtle:#8e88a6;
--indigo:#5b5bff; --magenta:#d633ff; --coral:#ff6b5b;
--accent:#d633ff; --accent-hover:#b81fe0;
--hairline:rgba(91,91,255,0.12);
--grad:linear-gradient(120deg,#5b5bff,#d633ff,#ff6b5b);
--rs:14px; --rm:24px; --rl:36px; --rp:999px;          /* radii: sm/md/lg/pill */
--section:112px; --block:36px; --tight:14px;          /* spacing */
--shadow:0 24px 60px -24px rgba(91,91,255,0.30), 0 8px 24px -16px rgba(214,51,255,0.22);
--font-d:'Sora',system-ui,sans-serif;                 /* display + numerals */
--font-b:'Plus Jakarta Sans',system-ui,sans-serif;    /* body + eyebrow */
```
- Google Fonts `<link>` (the only font source): `https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap`
- Layout: `.wrap{max-width:1160px;margin:0 auto;padding:0 24px}`. Body 17px/1.65 Jakarta on `--canvas`, `overflow-x:hidden`.
- **Section rhythm**: every `<section>` is `padding:var(--section) 0`; `.metrics` and `selected_quotes` sections override `padding-top:0`. Hero is `padding:64px 0 var(--section)` (→ `40px 0 80px` under 840px). Section heads: `.sec-head{margin-bottom:48px;max-width:42ch}`, with the `<h2>` getting `margin-top:12px` above it. Hero grid `1.05fr .95fr` with `gap:48px` (collapses to one column with `gap:32px` under 840px).
- **Type scale (use these exact `clamp()`s)**:
  - hero h1: `clamp(44px,7vw,80px)` / line 1.02 / `-2.5px`, Sora 800
  - section h2: `clamp(30px,4.4vw,40px)` / 1.1 / `-1px`, Sora 700
  - metric numeral: `clamp(40px,5vw,64px)` / 1 / `-2px`, Sora 800, gradient-filled
  - big quote (selected_quotes): `clamp(26px,4.2vw,44px)` / 1.12 / `-1.4px`, Sora 800, `max-width:24ch` (card padding `clamp(30px,5vw,56px)`)
  - subscribe h2: `clamp(30px,5vw,48px)` / 1.05 / `-1.4px`, Sora 800
  - now-card h2: `clamp(26px,4vw,38px)` / `-1px`; now-card padding `clamp(30px,5vw,48px)`
  - lede 22px / 1.5 Jakarta 500, color `--ink-muted` (max 30ch); eyebrow 13px Jakarta 700 uppercase `+1.4px`, magenta.

## Signature techniques (pure CSS/SVG)

1. **Aurora blobs (fixed bg)** — three absolutely-positioned `.blob` circles, `border-radius:50%`, `filter:blur(70px)`, `opacity:.4–.55`, each a `radial-gradient` of one brand color, inside a `.aurora{position:fixed;inset:0;z-index:-2}`. Sizes ~40–48vw; they slowly drift+scale via three keyframes (`drift1` 22s / `drift2` 26s / `drift3` 30s, `ease-in-out infinite`, translate a few vw + `scale(1.08–1.15)`). A `.grain` layer (`z-index:-1`) lays a top radial-gradient fade-to-white so content stays legible.
2. **Glass card** — `.glass{background:var(--glass);backdrop-filter:blur(18px) saturate(140%);border:1px solid var(--glass-border);border-radius:var(--rl);box-shadow:var(--shadow)}`. The white highlight border + double-layered colored shadow is the look; keep both.
3. **Gradient text fill** — `.grad-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}` on hero keywords, numerals, result lines, prices, belief numbers.
4. **Primary button** — `.btn-primary{color:#fff;background:var(--grad);background-size:160% 160%;box-shadow:0 12px 30px -10px rgba(214,51,255,.55)}`; hover lifts `translateY(-2px)` + deeper shadow. Ghost button = glass + hairline border, hover lifts and border turns magenta. Pill radius, Sora 700.
5. **Hero photo ring** — `.photo-frame` padding 14px; `::before{inset:-2px;background:var(--grad);z-index:-1;opacity:.9;border-radius:calc(var(--rl)+2px)}` paints a gradient frame behind the image; `.u-photo` is `width:100%;height:clamp(360px,46vw,520px);object-fit:cover;border-radius:calc(var(--rl) - 4px)` (the inner radius nested inside the 14px frame padding is what makes the gradient ring read evenly). A full-width glass badge bar floats across the bottom over it.
6. **Card corner glow** — work/service cards get a `::after` blurred gradient orb (`width/height ~150–160px`, `filter:blur(36–40px)`, `opacity ~.22–.28`) in a corner that **brightens on hover** (opacity → .45–.5) while the card lifts `translateY(-4px)`.
7. **Pulsing "now" dot** — `.pulse` coral circle with `@keyframes pulse` expanding `box-shadow:0 0 0 0 → 14px rgba(255,107,91,…)` over 2.4s infinite.
8. **FAQ accordion** — native `<details>/<summary>`, marker hidden; a round glass `+` button (`.pm`) `transform:rotate(45deg)` when `[open]` to read as ×.
9. **Tint washes** — large quote / subscribe cards use a `::before{inset:0;background:var(--grad);opacity:.08–.10;z-index:-1}` to tint the glass without overpowering text.

## Photo + toggle contract

The page ships a real local portrait. Default = photos ON; `sample.png` is taken ON.

- Hero photo: `<img class="u-photo" src="portrait.webp" alt="Bright editorial arrangement of blooming flowers, representing Nia Okafor's vivid, growth-focused brand work" />` inside `.photo-frame` (also class `u-photo`) with the glass badge.
- Typographic fallback (shown when photos OFF): a `.u-fallback.hero-fallback` gradient panel — big Sora 800 "grow / like / crazy." + tag pills "1M+ followers ×3", "50M+ views", "Brand voice"; `min-height:clamp(360px,46vw,520px)`; a soft white radial `::after` highlight. `aria-hidden="true"`.
- Toggle CSS (verbatim):
```css
.u-fallback{display:none !important}
body.no-photos .u-photo{display:none !important}
body.no-photos .u-fallback{display:revert !important}
body.no-photos .u-fallback.hero-fallback{display:flex !important}
```
- Toggle button (fixed bottom-right) + script (verbatim):
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

- **Reveal**: elements get class `.rise{opacity:0;transform:translateY(24px);transition:opacity .7s ease, transform .7s cubic-bezier(.22,1,.36,1)}`; an IntersectionObserver adds `.in` (→ `opacity:1;transform:none`) with `{threshold:.14, rootMargin:'0px 0px -8% 0px'}`, unobserving after firing. Apply `.rise` to metric cards, section heads, work/quote/press/service/belief cards, the big quote, now card, faq block, subscribe card.
- **Continuous**: the three aurora blobs drift (above); the coral "now" dot pulses.
- **Reduced motion**: under `@media(prefers-reduced-motion:reduce)` disable all animations + smooth scroll, and force `.rise{opacity:1;transform:none;transition:none}`. The reveal script also early-returns and adds `.in` to everything when reduced motion is set.

## Hard contract

1. Single self-contained `index.html`; all CSS in one `<style>`, all JS inline. No build, no npm, no JS framework, no Three.js/WebGL.
2. Only external resources: the Google Fonts `<link>` above + the local `portrait.webp`. No other remote images or assets.
3. Use the PHOTO + TOGGLE contract exactly (photo ON by default).
4. Responsive 360–1440px; semantic HTML (`<header>/<nav>/<section>/<footer>`, `<details>`); accessible — contrast on white, visible focus rings (`outline:3px solid var(--indigo)`), real `alt`, honor `prefers-reduced-motion`.
5. Real content from the brief — no lorem, no "passionate about innovation".
6. Tag every section with `data-module`/`data-variant` as listed.

**Output: the complete `index.html` and nothing else.**
