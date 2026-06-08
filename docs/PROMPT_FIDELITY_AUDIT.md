# Prompt 保真度审计报告

> 由 33-agent workflow 生成（2026-06-03）。每个 direction 比对 prompt.md ⇄ index.html ⇄ DESIGN.md ⇄ sample.png。

## 总览

- 27 direction prompt 全部 high-severity、全部 needs_update
- 平均 fidelity 52.4 / quality 65
- photo 契约矛盾: bold-brutalist, editorial, memphis-postmodern, swiss-minimal, technical-mono, warm-personal

Numbers confirmed. Writing the report.

---

# Personal Site Style Atlas — Prompt 审计复盘

## 总体结论

**两个问题的答案都是"是，但程度不同"。** (1) **需要 update：27 个 direction prompt 全部需要更新，且全部为 high severity** —— 平均 fidelity 仅 **52.4/100**，平均 quality **65/100**，没有一个能让陌生 agent 复刻出与 `sample.png` 接近的页面。(2) **写得"够好"吗？不够** —— 它们在 token 层（颜色/字体/字号）写得非常扎实（这部分普遍接近满分），但作为"可复刻的生成契约"系统性失败：几乎每个 prompt 只记录了页面一半左右的模块，省略了定义视觉身份的 CSS"秘方"，6 个还在 photo 契约上**直接自相矛盾**。用户反馈的"粘贴后不一致"是结构性必然，不是个例。最差的是 **warm-personal (38/52)** 和 **technical-mono (48/58)**。组件类（Motion Lab + GSAP cards）则相反：质量高、基本无需大改。

---

## 系统性问题（按"导致不匹配"的程度排序）

### 1. 页面模块数远多于 prompt 记录的模块 —— 头号原因（27/27 全中）

这是**所有 27 个 direction 共有**的缺陷，也是"粘贴后结果短了一半"的直接来源。Prompt 的 "Module plan" 普遍只列 4–6 个模块，而 `index.html` 实际有 9–14 个 `data-module` 区块。

- **典型**：`memphis-postmodern` prompt 记 5 个模块，页面实际 14 个（覆盖率 36%）；`art-deco` 5/14；`neo-saas` 6/13；`maximalist-collage` 4/11；`vibrant-gradient` 5/11。被省略的几乎都是页面**中下部的"佐证"区**（metrics / beliefs / services / testimonials / faq / now-block / credentials）。
- **连带后果**：这些被省略的模块**承载了大量具体文案**（价格、证书、推荐语姓名、FAQ 答案、统计数字），prompt 里完全没有，agent 只能编造或省略 —— 双重发散。
- **修复**：每个 prompt 的 Module plan 必须按页面真实顺序列全所有 `data-module`/`data-variant`，并内联每个区块的真实文案。这是**可脚本化的机械活**（页面是 ground truth，直接抽 `data-module` 标签 + 文本即可生成）。

### 2. "Secret sauce" CSS/SVG 技术在 index.html 里有、在 prompt 里没有（27/27）

Prompt 用形容词描述视觉（"soft fade-up""hard shadow""drifting blobs""glass cards"），但省略了那些**真正让风格成立的载荷参数**，于是输出"看起来很 generic"。

- **art-deco**：招牌的"sunburst 光环"其实是 `repeating-conic-gradient` + `-webkit-mask:radial-gradient` 碾成环的 mask 技巧；prompt 只说"conic-gradient 或 inline SVG"。还有全页 `body::before` 的金色"节目单边框"完全没提。
- **maximalist-collage / risograph / retro-print**：定义"拼贴/印刷"感的**零模糊硬偏移阴影**（`6px 7px 0`）从未作为 token 写出；retro-print 甚至 DNA 写了"no drop-shadow"，与页面赖以成立的硬偏移色块阴影**正面冲突**。
- **organic-natural / playful-rounded / soft-3d-clay**：双层 morph blob 关键帧、`--clay-press/--clay-inset` 凹陷阴影、紫调柔阴影 token、`cubic-bezier(.34,1.56,.64,1)` 弹性曲线 —— 全部只用 vibe 词带过。
- **滚动揭示动画**：几乎每个页面都有 IntersectionObserver reveal（精确的 translateY/duration/easing/threshold），但 prompt 普遍只写"subtle fade-up"，甚至有 prompt（cinematic-dark）**承诺了页面根本没实现的动效**（"letterbox bars slowly open"，实际 bar 是静态的）。
- **修复**：每个 prompt 增加一节 "Signature techniques"，把 5–10 个载荷 CSS recipe 写成可复制的精确值。这是**较深的人工活**，需逐页从 `index.html` 提炼。

### 3. Photo / portrait + toggle 契约缺失或自相矛盾（6/27，但杀伤力最大）

这是单页面**最刺眼**的不匹配，因为 `sample.png` 是开着照片截的。涉及 **bold-brutalist, editorial, swiss-minimal, technical-mono, warm-personal, memphis-postmordern** 共 6 个。

- **technical-mono**：页面 ships 真实 `portrait.jpg`（`u-photo` + 灰度 teal 框 + toggle），但 prompt 的 Hard contract #2 写 **"Avatar = CSS/SVG/initials"** —— 直接命令 agent **不要放照片**。
- **warm-personal**（最差页，38/52）：prompt 写"Avatar = CSS/SVG/initials only""no other external assets"，而页面有 1 张 portrait + 3 张 testimonial 头像 + 完整 toggle。agent 会产出一个**无照片**的 coach 页。
- **editorial / bold-brutalist** 同型：prompt 禁止 remote image 且只描述"name in a block"，页面却围绕一张 portrait 构建。
- 这是 CLAUDE.md 早期约定（"the original 5 use faces"）的**陈旧约束未随真实 portrait 加入而更新**。
- **修复**：删掉所有"Avatar = CSS/SVG/initials / no remote images"行，统一替换为标准 photo+toggle 契约（`u-photo`/`u-fallback` + 固定右下角 toggle + `body.no-photos` 规则）。**可脚本化**：grep 这两句、按 photo 页面统一替换。

### 4. Token drift：固定 px vs 页面的 clamp() 流式排版（~24/27）

Prompt 把字号写成固定 px（"display-xl 88px"）并要求"obey exactly"，但页面几乎全用 `clamp()`（如 `clamp(40px,9vw,88px)`）。Agent 硬编码 88px 会**在移动端断版**。还普遍漏掉次级 token：阴影 token（neo-saas 的双层靛蓝 `--shadow-lift`、playful-rounded 的紫调柔阴影）、`--maxw`、`--measure`、`--tight`。**修复可脚本化**：把字号 token 替换为页面真实的 clamp() 区间。

### 5. 顺序与 variant 名漂移（多数页）

Prompt 常把 contact 排在 metrics 之后（暗示页面就此结束），而真实页面在中间插了 5+ 个模块；hero variant 也常没 pin（实际是 `bold_statement`/`split_portrait`）。属于问题 1 的副产物，随 Module plan 重写一并解决。

---

## 优先级表（最差页）

| id | fidelity | quality | severity | 两个最大缺口 |
|---|---|---|---|---|
| **warm-personal** | 38 | 52 | high | photo 契约**反向矛盾**（禁照片但页面有 portrait+3 头像）；12 模块只记 5 |
| **technical-mono** | 48 | 58 | high | Hard contract 写"Avatar=initials"但页面有真实 portrait.jpg；11 模块只记 5 |
| **swiss-minimal** | 52 | 58 | high | photo 契约矛盾（禁外部资源但页面 brand+hero 双用 portrait.jpg）；10 模块只记 5，缺 hairline 网格/section-index 秘方 |
| **maximalist-collage** | 52 | 62 | high | 4/11 模块；硬零模糊偏移阴影+多色文字阴影+5层 busy ground 全未写 |
| **newsprint** | 55 | 62 | high | 4/9 模块（缺 metrics/beliefs/press/writing/speaking/faq）；缺 radial 纸纹+灰度照片+clamp |
| **bold-brutalist** | 52 | 63 | high | photo 契约矛盾（禁 remote img 但 ships portrait.jpg+toggle）；5/13 模块；反向 snap-hover 物理未写 |
| **art-gallery** | 52 | 63 | high | 4/11 模块且 story variant 标错；12 列非对称 gallery 网格+1.4s reveal 未写 |
| **glassmorphism** | 52 | 63 | high | 4/10 模块；CTA 误标"glass"（实为实心亮药丸）；portrait 误称"人物照"（实为模糊背景） |
| **cinematic-dark** | 52 | 63 | high | 4/10 模块；**承诺了不存在的动效**（letterbox bars open）；缺灰度调色+scrim 渐变 |
| **vibrant-gradient** | 52 | 63 | high | 5/11 模块；3-blob aurora 布局+glass recipe+gradient clip-text 仅形容词级 |

（其余 17 个 direction 同为 high severity，集中在模块缺失 + 秘方欠规范，程度略轻。）

---

## 组件 prompt 评估（Motion Lab + GSAP cards）

**结论：质量高，整体无需大改 —— 与 direction 形成鲜明对比。**

- **Text Motion Lab**（23 个 brief）：**fidelity 9/10, quality 9/10**。覆盖完整，timing/stagger/easing/blur 等参数准确，模板一致，~21/23 可凭 brief 直接复刻。只需**小一致性 pass**：`press(23)` 漏了其余 22 个都有的 `prefers-reduced-motion` 一句；`depth(10)` 把视差误述为"不同速度"（实为同时长、不同方向/振幅）；`underline(15)`、`scan(19)` 微瑕。
- **GSAP cards**（5 个 family 文件审计）：多数 **4/4 满分**（flip+draggable+physics+motionpath、drawsvg+morphsvg+utils、scrolltrigger+split+scramble 均 `needs_update=false`）。仅 **core+stagger+timeline+easing** 这组需修：① 代码片段里的"漂亮数字"（`x:220`、`y:130`）与实际 init 值（`x:210`、`y:86`）对不上；② loop 类卡片代码只显示单条 tween 但实际跑在 yoyo timeline 里；③ Easing/Timeline 的 prompt 缺 duration/ease/plugin 名。这些是 code-display 与 init 的内部对齐问题，不影响 prompt 本身的可用性。

组件 prompt 之所以好，正因为它们**只描述一个自包含效果、参数即载荷**；direction prompt 之所以差，是因为它们要描述**整页的结构+内容+秘方**却只写了 token。

---

## 建议的改进方案

### 每个 direction prompt 必须包含的复刻清单（可复用模板）

当前 prompt 写好了第 1–2 项，系统性缺第 3–6 项：

1. **Tokens**（已达标）：颜色/字体 —— 但字号改为页面真实的 **clamp() 区间**，并补齐阴影/`--maxw`/`--measure`/`--tight` 等次级 token。
2. **Photo + toggle 契约**（6 页需修）：照片页统一写 `u-photo`/`u-fallback` + 固定 toggle + `body.no-photos` 规则；**删除所有"Avatar=initials / no remote images"**。
3. **完整 Module plan**（27 页全需）：按页面顺序列全 **每个 `data-module` + `data-variant`**，并内联**真实文案**（数字、价格、姓名、FAQ）。
4. **Signature techniques 节**（27 页全需）：5–10 条载荷 CSS/SVG recipe（mask 环、硬偏移阴影、blob morph、纸纹 feTurbulence、网格构造、highlight-marker 等）写成可复制精确值。
5. **Motion 规格**（27 页全需）：reveal 的 translateY/duration/easing/IO threshold 精确值；**删除页面未实现的动效承诺**（如 cinematic-dark 的 letterbox open）。
6. **结构 chrome**：topbar nav + footer（多数 prompt 完全没提）。

### Quick wins（机械、可脚本化，建议先做）

- **重建所有 Module plan**：脚本扫 `index.html` 的 `data-module`/`data-variant` + 抽取每区块文本，自动生成模块清单 + 文案种子。一次性覆盖 27 页的头号缺陷。
- **批量修 photo 契约**：grep `"CSS/SVG/initials"`、`"no remote image"`、`"no other external assets"`，在 photo 页统一替换为标准契约（6 页）。
- **token 字号 → clamp()**：从 `:root` 抽真实 clamp() 值回填 prompt；补阴影/maxw token。
- **组件小修**：给 motion-lab `press` 补 reduced-motion 句；修 GSAP core/easing 组的代码片段数字与 loop wrapper。

### 较深 rewrite（需逐页人工）

- **Signature techniques 节** + **精确 motion 规格**：必须逐页从 `index.html` 提炼，无法纯脚本化。优先处理上表 10 页（尤其 warm-personal / technical-mono / swiss-minimal 这 3 个既缺模块又有 photo 矛盾的）。

### 关于"原始 5 个精简 prompt"是否自动重生成

**建议：原始 5 个（editorial, swiss-minimal, warm-personal, technical-mono, bold-brutalist）优先整体重生成，而非补丁。** 它们恰好命中两个最严重模式 —— 这 5 个里有 **4 个**（editorial, swiss-minimal, technical-mono, warm-personal, + bold-brutalist 共 5 个全部）出现 photo 契约**反向矛盾**，且 quality 分集中在最低区（warm-personal 52、technical-mono/swiss-minimal 58、editorial/bold-brutalist 63）。它们是"先写 prompt 后让页面长出更多模块"的历史产物，prompt 与页面已严重脱节，逐条打补丁不如用上面的 6 项模板从 `index.html`+`DESIGN.md` 反向重生成一遍 prompt（页面是 ground truth，可半自动）。

**净结论**：先跑 quick wins 脚本（Module plan 重建 + photo 契约批改 + clamp token），单这三项就能把平均 fidelity 从 52 拉到一个能让 agent 复刻出"长度和结构对得上"的页面的水平；再对上表 10 页 + 原始 5 页做 Signature-techniques 人工 pass，解决"看起来 generic"的剩余发散。组件 prompt 只需一次小一致性 pass。


---

# 附录：逐 direction 缺口明细


## warm-personal  — fid 38 / qual 52 / high

**Module diff:** The prompt's Module plan lists 5 sections (hero/split_portrait, story/split_image_text, testimonials, credentials+metrics, book_a_call). The actual page ships 12 data-module sections. So the prompt documents fewer than half the page. The prompt also collapses credentials+metrics into one bullet (the page has a credentials/pills section that itself contains BOTH a pills column and a 4-cell metrics grid — fine), but omits 7 whole sections: logos_press (clients strip), services (3 cards), beliefs (numbered), currently_building (now_block), writing (essay list), selected_quotes (large_type), faq (accordion). An agent given only the prompt would build a 5-section page and miss the entire middle and lower two-thirds of the real page — including the sticky nav, clients strip, services, beliefs, now block, writing list, big quote, and FAQ.

**Prompt 缺失的模块:**
- logos_press / mentioned_in (clients strip: Stripe/Figma/Notion + founders, bordered surface band)
- services / cards (3 service cards: 1:1 Coaching, Founder Intensive, Team Offsites, each with SVG icon + meta line)
- beliefs / numbered (4 numbered belief cards using counter() with decimal-leading-zero in an accent-soft pill)
- currently_building / now_block (Now/Currently card, dated 'Updated May 2026', bulleted list with glowing accent dots)
- writing / list (4 essay rows with title + meta + arrow, padding-left hover slide)
- selected_quotes / large_type (centered big-type pull quote with accent em + giant quote mark)
- faq / accordion (4 <details> items with rotating + plus button)
- site-header sticky nav with brand mark, nav links, Book a call button, and scroll-shadow JS
- footer with email/calendar/LinkedIn links

**Photo 契约 OK:** False — CONTRADICTION (see photo_contract_note field). Prompt forbids the very portrait the page ships and omits the toggle entirely.

**Token:** Color tokens, fonts, and base type scale match index.html :root and DESIGN.md exactly (canvas #fbf6ee, surface #f4ebdd, ink #2b2520, accent #c2683f, accent-hover #a8542e, accent-soft #f0d9c8, hairline #e8dccb; Fraunces opsz + Nunito Sans; same Google Fonts link; section 104 / block 36; r-sm10/md18/lg28/pill). Gaps: the prompt gives static px (display-xl 64) but the page uses clamp() fluid type (clamp(40px,8vw,64px) etc.) — not stated. The prompt never mentions the two soft paper shadows (--shadow-soft / --shadow-lift with warm rgba(122,78,48,...) tints) which are load-bearing for the 'paper not glass' feel. ink-subtle, the serif/sans fallback stacks, and the tight:16 spacing token are present in DESIGN but thin/absent in the prompt body.

**缺失的 Signature 技术:**
- Body paper-grain: two layered radial-gradient warm dots (rgba(194,104,63,0.05/0.045) at 18%/12% and 86%/78%) with background-attachment:fixed — the page's signature 'paper' texture, not in prompt
- Organic blob portrait: border-radius 42% 58% 56% 44% / 50% 46% 54% 50% with a @keyframes blobMorph 16s ease-in-out that morphs the radius, plus a dashed accent-soft 'portrait-ring' offset behind — the hero's whole identity
- Hero highlighted phrase: .underline span with accent text + ::after accent-soft 'highlighter' bar (height .28em, z-index -1) behind the word
- Two floating pill badges over the portrait (rating ★★★★★ 4.9 / years 9yrs·200+) with soft shadow, repositioned at >=920px
- Two soft warm shadows (--shadow-soft / --shadow-lift) used on every card to read as paper
- Numbered beliefs via CSS counter(belief, decimal-leading-zero) rendered in an accent-soft round pill
- Now-block accent dots with box-shadow 0 0 0 4px accent-soft 'halo'
- Story signature: serif 'Priya' in accent rotated -3deg
- FAQ accordion plus-sign that rotates 45deg on [open]
- Service/quote card hover translateY(-5px) + shadow-lift; writing-row padding-left slide + arrow translate on hover
- Sticky header that gains border + shadow on scroll via JS 'scrolled' class
- IntersectionObserver soft-fade-and-rise reveal with staggered .d1-.d4 transition-delays (the page's named 'soft fade + rise' motion, only vaguely gestured at in prompt)
- brand-mark and avatar gradients (radial/linear clay gradients) for the initials marks

**矛盾:**
- Hard contract #2 'Avatar = CSS/SVG/initials only' and 'no other external assets' directly contradicts the page, which ships portrait.jpg + avatar-1/2/3.jpg local images and the photo toggle.
- Module plan promises only 5 sections in a stated order; the page is a 12-section long-scroll — the prompt understates the page's scope and length.
- Prompt says hero avatar is 'round'; the page's photo uses r-lg rounded-rectangle and the fallback is an organic morphing blob, not a circle.

**建议修复:**
- Fix the photo contract: REMOVE 'Avatar = CSS/SVG/initials only' and 'no other external assets'. Replace with: page uses a local portrait.jpg (img.portrait-photo.u-photo, r-lg rounded) + 3 testimonial avatar photos (avatar-N.jpg, .av-photo.u-photo), EACH with a u-fallback (the SVG blob portrait / initials) and the fixed bottom-right '照片 Photos On/Off' toggle flipping body.no-photos (per CLAUDE.md photo+toggle contract). sample.png is photos ON.
- Document all 12 modules in the Module plan in order: hero/split_portrait, logos_press/mentioned_in (clients strip), story/split_image_text, testimonials/cards, credentials/pills (+4-cell metrics), services/cards (3), beliefs/numbered (4), currently_building/now_block, writing/list (4 essays), selected_quotes/large_type, faq/accordion (4), book_a_call/cta_band — plus sticky header nav and footer.
- Add the secret-sauce techniques explicitly: body paper-grain via two layered radial-gradient warm dots (rgba(194,104,63,~0.05)) with background-attachment:fixed; organic blob portrait with @keyframes blobMorph 16s morphing border-radius + dashed accent-soft offset ring; hero .underline accent-soft highlighter ::after bar; two floating badges over the portrait; numbered beliefs via counter(...,decimal-leading-zero) in accent-soft pills; now-dot halos via box-shadow 0 0 0 4px accent-soft.
- State the two warm paper shadows as tokens: --shadow-soft and --shadow-lift (warm rgba(122,78,48,...) tints) and require them on every card; this delivers 'paper not glass'.
- Specify fluid type: display-xl clamp(40px,8vw,64px), display-md clamp(28px,4.6vw,34px), lede clamp(19px,2.4vw,22px); section padding clamp(64px,11vw,104px).
- Spell out the reveal motion precisely: IntersectionObserver adds .in for opacity+translateY(22px)->0 over 0.8s cubic-bezier(.2,.7,.3,1), staggered via .d1-.d4 delays; sticky header gains .scrolled border+shadow on scroll; honor prefers-reduced-motion (render final, disable blob anim).


## technical-mono  — fid 48 / qual 58 / high

**Module diff:** Prompt documents 5 modules (hero/bold_statement, selected_work/list, metrics, tools/currently_building, contact). The page actually ships 11 tagged modules plus a sticky top nav, footer, and a live-clock JS effect. The prompt covers fewer than half the page. The prompt names metrics/tools/contact loosely without the data-variant values the page uses (stat_row, now_block, cta_band), and 6 sections that appear between tools and contact in the page are entirely undocumented.

**Prompt 缺失的模块:**
- experience / timeline (data-module="experience" data-variant="timeline" — 3-entry git-log career timeline with teal-dot nodes)
- beliefs / numbered — the 'principles — how I build' 4-item numbered grid
- credentials / list — education & recognition (Kyoto Univ, USENIX SREcon, CNCF maintainer, Reliability Award)
- testimonials / quote_led — two '$ cat review_NN.txt' peer-review quote cards
- writing / list — 4 dated recent posts
- selected_quotes / large_type — the big one-liner blockquote
- sticky topbar nav (kenji@kwatanabe.dev + numbered 01..10 section links, blur backdrop)
- footer (© line + email + v3.0.0, 'built like a README.')
- live-clock JS in the hero eyebrow (whoami · HH:MM:SS local, updates every second, skipped under reduced-motion)

**Photo 契约 OK:** False — CONTRADICTION. The page ships a real local portrait: img.avatar.u-photo src=\"portrait.jpg\" (a 137KB JPG that exists in the folder), with a u-fallback initials chip (\"KW\") and the fixed bottom-right '照片 Photos On/Off' toggle that flips body.no-photos. But Hard contract #2 explicitly says 'Avatar = CSS/SVG/initials.' — which tells the agent NOT to use a photo. An agent following the prompt would emit initials-only and never produce portrait.jpg, u-photo/u-fallback classes, or the toggle. The prompt never mentions portrait.jpg or the toggle. Single worst fidelity break.

**Token:** The 9 color hexes, fonts (JetBrains Mono 400-700 / Inter 400-500), the Google Fonts link, and spacing (section 96 / block 32 / r-sm 4 / r-md 6) all match index.html :root and DESIGN.md exactly — token fidelity is the prompt's strength. Gaps: prompt states fixed-px type scale but the page uses clamp() for the thesis (clamp(28px,6.2vw,52px)) and metric numbers (clamp(24px,4.4vw,32px)); prompt omits the --accent-glow:rgba(94,234,212,.45) variable that drives every glow, and the tight:12px token.

**缺失的 Signature 技术:**
- Dotted-grid texture: body background radial-gradient(var(--hairline) 1px, transparent 1px) at background-size:24px 24px, plus a corner glow radial-gradient(circle at 18% 0%, rgba(94,234,212,.06),transparent 42%) and background-attachment:fixed — prompt says 'dotted background/subtle glow' but never the exact two-layer recipe or 24px cell
- Blinking cursor block: teal box (width:.58ch,height:1.02em) with box-shadow:0 0 12px var(--accent-glow), animation:blink 1.1s steps(1) infinite — prompt says 'blinking cursor' but not the glow, hard steps(1) blink, or sizing
- Section markers: each section opens with a mono uppercase .marker whose ::after is a flex:1 1px hairline rule + teal .idx number, repeated 10x as the layout rhythm — prompt only says 'section markers' abstractly
- Live terminal clock JS rewriting the hero 'whoami' eyebrow every second (disabled under reduced-motion) — absent from prompt
- Reveal-on-load: .reveal opacity/translateY via @keyframes rise with staggered inline animation-delay (load animation, not IntersectionObserver) — DNA says only 'cursor blink + fade'
- Contact terminal chrome: .term card with .term-bar 3 hairline traffic-light dots + '— bash —' title, $-prefixed command lines, teal prompt glyphs, box-shadow:0 0 40px rgba(0,0,0,.35) — prompt says 'terminal-styled' only
- Hover micro-interactions: list rows shift padding-left 6→16px + surface bg + title turns teal; CTA arrow translateX(4px)+text-shadow glow
- Photo treatment: img.avatar.u-photo filter:grayscale(.55) contrast(1.02), teal border, inset+outer teal hairline shadows
- Metric grid: hairline-divided 4-up cells with nth-child border logic (overflow:hidden + per-cell border-top/left) giving the spec-sheet table look
- git-log timeline: border-left rail with absolute ::before teal-ring dots (box-shadow:0 0 10px glow) — 'experience as git log' device
- ::selection{background:var(--accent);color:var(--canvas)} teal text selection

**矛盾:**
- Hard contract #2 'Avatar = CSS/SVG/initials.' vs page ships real portrait.jpg as img.avatar.u-photo (grayscale + teal frame) with a photo toggle — prompt instructs the opposite of the page
- DNA 'Motion: cursor blink + light fade' implies only those effects, but the page also runs a per-second live clock and staggered reveal-on-load animations
- 'no other external assets' framing reads as 'no image at all', conflicting with the local portrait.jpg the page actually uses

**建议修复:**
- FIX THE PHOTO CONTRACT: delete 'Avatar = CSS/SVG/initials.' and replace with the atlas photo+toggle contract — hero uses <img class="avatar u-photo" src="portrait.jpg"> (object-fit:cover, filter:grayscale(.55) contrast(1.02), teal border + inset/outer teal hairline shadow) plus a u-fallback 'KW' chip and the fixed bottom-right '照片 Photos On/Off' toggle flipping body.no-photos; note sample.png is photos-ON
- DOCUMENT THE 6 MISSING MODULES with data-variant ids and concrete copy: experience/timeline (3 jobs as a git-log rail with teal dots), beliefs/numbered (4 principles), credentials/list (Kyoto B.Eng / USENIX SREcon / CNCF maintainer / Reliability Award), testimonials/quote_led (2 '$ cat review.txt' cards), writing/list (4 dated posts), selected_quotes/large_type (the one-liner); plus the sticky numbered topbar nav, footer, and live-clock eyebrow JS
- ADD THE DOTTED-GRID RECIPE: body background-image: radial-gradient(circle at 18% 0%, rgba(94,234,212,.06), transparent 42%), radial-gradient(var(--hairline) 1px, transparent 1px); background-size:auto, 24px 24px; background-attachment:fixed
- SPECIFY THE SECTION MARKER PATTERN: each section opens with a mono uppercase label whose ::after is a flex:1 1px hairline rule and whose index number is teal — repeated every section as the layout rhythm
- ADD CURSOR + GLOW DETAIL: teal block cursor (~.58ch), box-shadow:0 0 12px rgba(94,234,212,.45), animation:blink 1.1s steps(1) infinite, stopped under reduced-motion; add --accent-glow token
- DESCRIBE THE TERMINAL CONTACT CARD + METRIC GRID precisely: window chrome with 3 hairline traffic-light dots + '— bash —' title, $-prefixed lines, teal glyphs, outer black box-shadow; hairline-divided 4-up metric spec-grid; hover micro-interactions (rows shift padding-left, title→teal); switch type scale to clamp() values


## art-deco  — fid 52 / qual 68 / high

**Module diff:** Prompt lists 5 modules in order: hero, credentials, selected_work, testimonials, contact. index.html ships 14 data-module sections: hero(bold_statement), credentials(big_numerals), selected_work(list), testimonials(quote_led), metrics(stat_row), beliefs(numbered), selected_quotes(large_type), speaking(list), currently_building(now_block), writing(list), services(list), faq(two_column), logos_press(mentioned_in), contact(cta_band). So 9 of the page's modules are completely undocumented in the prompt's plan — an agent given only prompt.md would produce a 5-section page roughly 1/3 the length of the real one. The 5 modules the prompt does list all exist in the page (good), and order matches for those, but the prompt also omits the data-variant names it should pin (e.g. hero variant is bold_statement, contact variant is cta_band, not just "conversion").

**Prompt 缺失的模块:**
- metrics (stat_row): 94% re-book / 1.2M copies / 38 min ovation, 3-col stat row
- beliefs (numbered): 'The Creed' upper-roman numbered list of 4 manifesto lines
- selected_quotes (large_type): centered Poiret-caps pull-quote 'Say the one thing, and say it once.' between diamond deco-rules
- speaking (list): 'Upcoming & Recent' event list with name/kind/location/MONTH-YEAR
- currently_building (now_block): 'Now' — second upper-roman creed list of 3 current-activity lines
- writing (list): 'Essays' — italic titles linked, with publication on the right (HBR, The Atlantic)
- services (list): 'Engagements' — 3-col offers (The Keynote / The Intensive / The Advisory) with descriptions
- faq (two_column): 'Questions' — 4 Q&A pairs in a 2-column grid
- logos_press (mentioned_in): 'As Featured In' — pipe-separated press names (The Times, Forbes, Monocle, HBR, BBC)

**Photo 契约 OK:** True — Accurate. Prompt correctly specifies local portrait.webp with class u-photo, a u-fallback monogram medallion (gold 'EL' sunburst), the exact toggle CSS/HTML/JS verbatim, and the body.no-photos rules including the scoped grid restore. This matches index.html (.portrait-frame u-photo img + .u-fallback .monogram + body.no-photos .u-fallback.portrait-frame{display:grid}). One minor drift: prompt says portrait.webp; the page references portrait.webp too, so consistent. No contradiction — prompt does NOT say 'no remote image / CSS-only avatar'; it correctly ships a real img.

**Token:** Colors match exactly (all 11 hexes and the hairline rgba identical to :root and DESIGN.md). Fonts match (Poiret One + Cormorant Garamond, same Google Fonts URL incl. Cinzel fallback in DESIGN/CSS though prompt only names Poiret One). Type scale matches the named display-xl 88 / display-md 40 / eyebrow 13 / lede 27 / body 20 / numeral 56, though the page actually uses clamp() responsive sizing (clamp(40px,9vw,88px) etc.) which the prompt never states as fixed numbers only. Spacing section 132 / block 44 matches; prompt omits tight:18px which DESIGN.md and :root both define. Prompt omits the body::before fixed outer gold frame inset:14px and the radial-gradient hero background — both are token-level identity not captured in the token list.

**缺失的 Signature 技术:**
- Sunburst is repeating-conic-gradient(from 0deg, accent 0deg 1.4deg, transparent 1.4deg 9deg) MASKED into a ring via -webkit-mask:radial-gradient(circle, transparent 18%, #000 19% 49%, transparent 50%) — the mask-to-ring trick is the whole look and is not specified (prompt just says 'conic-gradient or inline SVG sunburst')
- Fixed full-page outer gold frame: body::before{position:fixed;inset:14px;border:1px solid hairline;box-shadow:inset 0 0 0 5px rgba(200,162,83,.10)} — the 'theatre programme border' framing every viewport, entirely absent from prompt
- Hero radial-gradient background: radial-gradient(120% 80% at 50% -10%, surface, canvas 70%) giving the top glow — not mentioned
- Portrait double-frame via stacked box-shadows (inset 0 0 0 6px canvas, inset 0 0 0 7px hairline, 0 0 0 7px canvas, 0 0 0 8px hairline) PLUS ::before/::after L-shaped stepped corner brackets (border-right:0;border-bottom:0) — prompt says 'stepped/fan frame' but not the layered-box-shadow + corner-bracket recipe
- Portrait img treatment: aspect-ratio 3/4, object-position center 30%, filter:sepia(.18) saturate(.92) contrast(1.02) — the vintage tint that sells the 1920s look, unspecified
- deco-rule divider: flex with ::before/::after linear-gradient(90deg,transparent,accent,transparent) hairlines flanking a rotated 45deg .diamond with box-shadow halo — the recurring section ornament, not described concretely
- Button: not just 'gold-outlined rectangle' but inset box-shadow double-line (inset 0 0 0 4px canvas, inset 0 0 0 5px hairline) + hover letter-spacing expansion 5px->7px + fill invert — the hover choreography is missing
- Hairline-grid construction of credentials/metrics/services: border-top/border-bottom on container + border-left on +sibling for column dividers (no card boxes) — the 'lines not cards' Deco grid technique not spelled out
- Roman-numeral lists via counter(creed, upper-roman) for beliefs/now — but those modules aren't in the prompt at all
- Reveal motion: opacity 0 + translateY(26px), .9s ease, IntersectionObserver threshold 0.16 rootMargin -8%, unobserve-once — prompt says 'subtle rise + sunburst unfurl' but there is NO sunburst-unfurl animation in the page (sunbursts are static); the prompt overpromises a motion that doesn't exist

**矛盾:**
- Prompt promises motion 'subtle rise + sunburst unfurl on scroll' (stated twice, incl. Hard contract #5 and motion token sunburst-rise-on-scroll), but index.html only does a rise/fade reveal — sunbursts are static decorations with no unfurl animation. An agent will build a sunburst-unfurl effect the source page lacks, diverging from sample.png.
- Prompt frames the page as a tight 5-section conversion piece ('a single, prominent Book a keynote action'); the actual page is a long 14-section editorial scroll. The altitude/length contract contradicts the artifact.

**建议修复:**
- Expand the Module plan to all 14 sections with their data-variant names and concrete copy: add metrics(stat_row: 94% re-book / 1.2M copies / 38 min ovation), beliefs(numbered 'The Creed', 4 roman-numeral lines), selected_quotes(large_type 'Say the one thing, and say it once.'), speaking(list 'Upcoming & Recent'), currently_building(now_block 'Now'), writing(list 'Essays' w/ HBR + The Atlantic), services(list 'Engagements' Keynote/Intensive/Advisory + descriptions), faq(two_column 4 Q&A), logos_press(mentioned_in 'As Featured In': The Times/Forbes/Monocle/HBR/BBC).
- Add the full-page outer gold frame technique: body::before{position:fixed;inset:14px;border:1px solid var(--hairline);box-shadow:inset 0 0 0 5px rgba(200,162,83,.10);pointer-events:none} — this 'programme border' is core identity.
- Specify the sunburst-ring recipe exactly: repeating-conic-gradient(from 0deg, accent 0deg 1.4deg, transparent 1.4deg 9deg) + -webkit-mask:radial-gradient(circle, transparent 18%, #000 19% 49%, transparent 50%) to carve a ray ring; note it is a static decoration (opacity .22-.6), not animated.
- Fix the motion claim: the page does a rise+fade reveal via IntersectionObserver (translateY 26px, .9s, threshold .16) — there is NO sunburst unfurl. Either remove 'sunburst unfurl' or implement it; don't promise both.
- Add the portrait recipe: aspect-ratio 3/4, object-position center 30%, filter:sepia(.18) saturate(.92) contrast(1.02), framed by layered box-shadows (inset 6px canvas / 7px hairline / outset 7px canvas / 8px hairline) plus ::before/::after L-shaped stepped corner brackets.
- State that all type uses clamp() fluid scaling (e.g. name clamp(40px,9vw,88px), sec-title clamp(24px,4.6vw,40px)) and build hairline-line grids (border-top/bottom + border-left on siblings, no cards) for credentials/metrics/services; add the button hover (letter-spacing 5px->7px, fill invert) and the deco-rule diamond divider.


## art-gallery  — fid 52 / qual 63 / high

**Module diff:** Prompt's Module plan lists only 4 modules (hero/minimal_centered, selected_work/grid, story/short, contact/conversion). index.html ships 11 tagged sections. The prompt documents 4 of the 11 and gets one variant wrong (story is data-variant="quote_led" in the page, prompt says "short"). 7 modules in the page are entirely undocumented in the prompt: selected_quotes/large_type, metrics/big_numerals, beliefs/numbered, experience/timeline, credentials/list, currently_building/now_block, social_links/text_row. An agent fed only the prompt would build a 4-section page and miss more than half the actual page's body, including all the "proof" sections (numbers, exhibition timeline, collections/press, principles, pull quote, now-block, elsewhere links).

**Prompt 缺失的模块:**
- selected_quotes / large_type (pull quote from Aperture)
- metrics / big_numerals (the 14 / 3 / 9 / 120+ ledger)
- beliefs / numbered (01-03 working principles 'How I work')
- experience / timeline (Selected exhibitions list 2021-2024)
- credentials / list (Collections & press: museums, Aperture, Hasselblad)
- currently_building / now_block (In the studio now)
- social_links / text_row (Elsewhere nav)

**Photo 契约 OK:** True — see photo_contract_note field

**Token:** see token_fidelity_note field

**缺失的 Signature 技术:**
- 12-column asymmetric grid for selected_work with hardcoded spans (plate-a 1/span7, plate-b 9/span4 align-self:end, plate-c 1/span4, plate-d 6/span7, plate-e 2/span6, plate-f 9/span4) — this off-axis hanging rhythm IS the gallery-wall look; prompt only says 'asymmetric, generous gutters'
- Huge asymmetric gallery gutters gap:clamp(64px,8vw,120px) clamp(28px,4vw,56px) — the 'breathing wall' between rows
- Section dividers: every .sec-head has a 1px var(--hairline) border-top + 22px padding, with h2 (serif) baseline-aligned against a right-aligned uppercase eyebrow — the consistent 'wall-plate header' rhythm across all sections
- Hero image sized height:min(78vh,760px) object-fit:cover (a fixed cinematic band, not natural aspect) — prompt says 'full-bleed fills viewport width' which an agent would render very differently
- Reveal motion exact spec: opacity+translateY(18px), transition 1.4s cubic-bezier(.16,.7,.2,1), IntersectionObserver rootMargin '0px 0px -8% 0px' threshold 0.08, unobserve-once. Prompt only says 'slow long fade' — the 1.4s duration and easing curve are the identity and are unstated
- Link underline-draw hover: a::after grows left:0 from right:100% to right:0 over .4s cubic-bezier(.16,.7,.2,1) on .elsewhere/.contact-links — the only 'motion' interaction, undocumented
- figcaption.plate uses a 'Plate I' .num (uppercase sans 11px +2px) + italic serif caption laid out flex baseline gap 18px — the museum wall-plate composition, prompt says only 'tiny serif caption'
- aspect-ratio variant classes (ar-portrait 4/5, ar-land 3/2, ar-square 1/1, ar-tall 5/7) controlling each plate's shape — undocumented, drives the asymmetry
- Per-plate work-fallback (surface bg, hairline border, italic serif title aligned bottom-left) for the no-photos state of the grid — undocumented

**矛盾:**
- Prompt story module: data-variant 'short' with 'a 2-3 sentence statement led by an italic serif line'; page tags story as data-variant='quote_led' and includes a 3rd paragraph carrying the proof points (Tokyo/Berlin/Aperture/editions).
- Prompt frames the whole page as just hero + grid + short statement + contact ('images first, words as wall plates'), but the actual page is text-heavy below the fold (7 word-driven sections, only the hero + grid carry images) — the prompt's mental model of the page is wrong.
- Prompt: hero photo is 'ONE full-bleed photograph that fills the viewport width', 'fills the viewport'; page hero is a contained figure inside .wrap padding (--gutter) at fixed height min(78vh,760px), i.e. NOT full-bleed edge-to-edge.

**建议修复:**
- Rewrite the Module plan to all 11 sections in page order with correct variants: hero/minimal_centered, selected_work/grid, story/quote_led (not 'short'), selected_quotes/large_type (Aperture pull quote), metrics/big_numerals (14/3/9/120+ ledger), beliefs/numbered (3 working principles), experience/timeline (Selected exhibitions), credentials/list (Collections & press), currently_building/now_block (In the studio now), social_links/text_row (Elsewhere), contact/conversion.
- Supply the concrete content the page uses so the agent doesn't fabricate: the four metrics + labels, the four exhibitions with venues, the collections/awards (Tokyo Photographic Art Museum, Pinakothek der Moderne, Hasselblad grant), the Aperture quote, the six work titles with media/years, and the now-block copy.
- Specify the selected_work grid precisely: a 12-column grid (>=720px) with asymmetric hardcoded spans and per-plate aspect ratios (4/5, 3/2, 1/1, 5/7), gap clamp(64px,8vw,120px) vertical, and note all plates reuse the single portrait.webp with their own u-fallback placeholders.
- Pin the motion: reveal = opacity 0 + translateY(18px) -> transition 1.4s cubic-bezier(.16,.7,.2,1), IntersectionObserver rootMargin '0px 0px -8% 0px' threshold 0.08 unobserve-once; plus the .4s underline-draw link hover (::after right:100%->0).
- Add the missing layout tokens --gutter:clamp(20px,6vw,96px) and --measure:640px, and document the section-header pattern (1px hairline border-top + 22px padding, serif h2 baseline-aligned with right-side uppercase eyebrow) since it repeats on every section.
- Fix the hero description: contained figure inside the gutter at fixed height min(78vh,760px) object-fit:cover, with a museum 'Plate I' figcaption (uppercase num + italic serif caption) — not edge-to-edge 'full-bleed fills the viewport'.


## athletic-sport  — fid 52 / qual 66 / high

**Module diff:** Prompt documents a 5-module plan: hero, metrics(big_numerals), selected_work(grid), testimonials(cards), contact(cta_band). The actual page ships 10 modules in this order: hero(bold_statement), metrics(big_numerals), selected_work(grid), testimonials(cards), credentials(pills), beliefs(numbered), services(list), currently_building(now_block), faq(accordion), contact(cta_band). So the prompt is missing 5 entire sections (credentials, beliefs, services, currently_building, faq) — exactly half the page — and even the documented ones differ: prompt never names the hero variant (page = bold_statement), and the prompt's section labels ("metrics") don't convey the page's editorialized index+title pattern ("01 / The Programs", "02 / The Receipts", "03 / The Résumé", "04 / The Rules", "05 / Work With Me", "06 / Right Now", "07 / Straight Answers"). An agent following the prompt would produce a page roughly half as long and would invent its own section names rather than these.

**Prompt 缺失的模块:**
- credentials (pills) — '03 / The Résumé': 6 clip-notched cred pills with skewed volt dot, e.g. CSCS, USATF Level 2 Sprints, MS Sport Science, Ex-Head S&C D1 Track, FMS Level 1, USOPC Consultant
- beliefs (numbered) — '04 / The Rules': 4 volt-numbered belief rows (Measure or it didn't happen / Hard but never random / Recovery is training / One standard for everyone)
- services (list) — '05 / Work With Me': 4-row pricing list with volt prices (1:1 Coaching $420/mo, Team Standard From $2.4K, The App $19/mo, Single Audit $180), hover padding-left shift
- currently_building (now_block) — '06 / Right Now': 3 status cards (On the floor / Building / Booking) with volt tags and stamps (Updated June 2026 / In progress / 2 spots left)
- faq (accordion) — '07 / Straight Answers': 4 <details> items with a volt + sign that rotates 45deg to × on open

**Photo 契约 OK:** True — Accurate and strong. Prompt correctly mandates portrait.webp as a full-bleed hero u-photo, the u-fallback as volt diagonal stripes + a giant outlined 'TRAIN' word, default photos ON, and supplies the verbatim toggle CSS/JS. The page matches: .hero__media img u-photo + .hero__fallback u-fallback with .hero__fallword 'Train'. One small omission: the prompt's fallback rule block doesn't include the page's extra scoped restore (body.no-photos .hero__fallback{display:flex !important}) — the prompt only gestures at it parenthetically ('If the fallback needs a specific display... add an explicit ... display:grid'). The page uses display:flex, so an agent following the generic note might pick grid and slightly mis-center the fallback word. Minor, not a contradiction.

**Token:** Token fidelity is excellent. All 9 colors (canvas #0a0a0a, surface #141416, ink #fff, ink-muted #a3a3a8, ink-subtle #6c6c72, accent volt #c6ff00, accent-hover #d6ff3d, accent-ink #0a0a0a, hairline #2a2a2e) match :root and DESIGN.md exactly. Fonts (Anton + Archivo 400-900) and the exact Google Fonts link match. Type scale matches DESIGN.md nominal values (display-xl 132, display-md 64, numeral 96, body 17/1.6, eyebrow 12/700/+3px). Note: the page actually drives display sizes with clamp() (hero h1 clamp(52px,12.5vw,150px); sec-head h2 clamp(34px,7vw,64px); metric num clamp(64px,14vw,104px); cta h2 clamp(64px,18vw,200px)) rather than the fixed px the prompt/DESIGN state — the prompt gives static peak values but never the clamp() responsive ramp, so an agent may hardcode 132px and lose the fluid scaling. Spacing section 140 / block 48 / tight 16 and rounded ~0 match.

**缺失的 Signature 技术:**
- Scroll reveal exact recipe: .reveal starts opacity:0 transform:translate(26px,30px) scale(.985); .in transitions opacity .6s + transform .7s cubic-bezier(.2,.7,.2,1); JS staggers transition-delay = min(i%5,4)*55ms via IntersectionObserver(threshold .12, rootMargin '0 0 -8% 0', unobserve after). Prompt only says 'slide in diagonally + slightly scale' — no values, no easing, no stagger.
- Notched clip-path on interactive blocks: .btn and .cred use clip-path:polygon(0 0,100% 0,100% 100%,14px 100%) (bottom-left chamfer); .prog uses polygon(...,0 26px) (top-left chamfer). This angular notch is core to the look and is never specified (prompt only says 'diagonal-clipped' programs).
- Program-card corner ornament: .prog::before is an 80x80 volt square rotated 45deg bleeding out of the top-left corner, that nudges 6px on hover; prog hover lifts translateY(-4px) + border→volt. Not described.
- Hero photo treatment: img filter grayscale(.25) contrast(1.08) brightness(.82) + object-position 50% 30%, plus a DUAL gradient overlay via ::after (vertical 4-stop black floor + horizontal left-dark wash). Prompt says only 'black gradient floor' — misses grayscale/contrast/brightness and the second horizontal gradient.
- CTA band geometry: .cta clip-path:polygon(0 40px,100% 0,100% 100%,0 100%) gives the angled top edge; two skewX(-24deg) .stripe bars in accent-ink at 14% opacity. Prompt says 'full-width volt band' but not the diagonal clip or the skewed ink stripes.
- Volt keyword highlighting: headline + quotes wrap key words in <span class=volt> (e.g. 'hard things', 'last 0.1', 'one standard', 'sub-3 marathon'); metric numerals wrap digits in <em> colored volt. This selective-volt mechanic is the whole 'one electric streak' identity and isn't called out as a markup pattern.
- FAQ marker: summary .sign is a volt '+' that rotates 45deg (→ ×) on [open]; list-style/marker hidden. Not specified.
- Section header pattern: every section opens with .sec-head = volt 'NN /' index inline-baseline with an Anton uppercase h2; this consistent eyebrow-index is what makes the page read as a numbered launch reel. Not specified.
- Hero scrollcue: small tracked-uppercase line with a 34px volt dash ::before ('The numbers don't lie'). Minor but on-brand; absent.
- Services row hover: .svc hover adds padding-left:14px (slides text right) — kinetic micro-interaction; absent.
- Accent hairline borders as structure: metrics/services/quotes sections separated by 2px volt top borders + 1px hairline grids (border-bottom:2px solid accent on hero, border-top:2px accent on metrics/svc). The volt edge-lines are a recurring device the prompt never names.

**矛盾:**
- Module count: prompt's 'Module plan (in this order)' presents 5 modules as the full page, contradicting the 10-module reality — an agent will treat 5 as complete and stop.
- Prompt CTA says links include 'the app' and an 'app' link; page's app link is actually href='#work' (a placeholder anchor, not a real app URL) — minor, but the prompt implies a distinct app destination.

**建议修复:**
- Add the 5 missing modules to the Module plan with content: credentials(pills/'The Résumé', 6 certs), beliefs(numbered/'The Rules', 4 rules), services(list/'Work With Me', 4 priced tiers $420/$2.4K/$19/$180), currently_building(now_block/'Right Now', 3 status cards), faq(accordion/'Straight Answers', 4 Q&As). Set hero variant=bold_statement.
- Document the exact reveal recipe: '.reveal{opacity:0;transform:translate(26px,30px) scale(.985)} reveal-in transitions opacity .6s, transform .7s cubic-bezier(.2,.7,.2,1); IntersectionObserver threshold .12 rootMargin 0 0 -8% 0, unobserve once; stagger transition-delay = (i%5)*55ms'.
- Specify the notched clip-path chamfer: btn & cred use clip-path:polygon(0 0,100% 0,100% 100%,14px 100%); program cards use polygon(0 0,100% 0,100% 100%,0 100%,0 26px); CTA band uses polygon(0 40px,100% 0,100% 100%,0 100%).
- Add the program-card corner ornament: ::before = 80x80 volt square rotate(45deg) bleeding off top-left, nudge 6px on hover; card hover translateY(-4px)+border volt.
- State the giant-type as clamp(): hero h1 clamp(52px,12.5vw,150px), section h2 clamp(34px,7vw,64px), metric num clamp(64px,14vw,104px), cta h2 clamp(64px,18vw,200px).
- Make volt a keyword-highlight content rule: wrap single key words in <span class=volt> in the hero headline and each testimonial, and digits in metric numerals in <em> volt — never volt a whole headline. Add the recurring 'NN /' section-index header pattern and the hero photo treatment (grayscale .25 / contrast 1.08 / brightness .82 + dual gradient overlay).
- Provide concrete persona content for testimonials (named athletes + quotes), prices, certs, FAQ answers, now-block stamps, and section titles so agents don't fall back to filler.


## bold-brutalist  — fid 52 / qual 63 / high

**Module diff:** The prompt's Module plan lists 5 modules (hero, selected_work, metrics, story/quote_led, contact). The actual index.html ships 13 tagged sections plus a sticky topbar and footer. So the prompt documents roughly 5 of 13 modules — under half. The 5 it names do exist in the page (with detail drift: e.g. work grid is a 3-col offset grid of 6 tiles, not "4-6 bordered blocks with hard offset shadows" framing; metrics are 4 big-numeral blocks, matching). But the page also has 8 modules the prompt never mentions at all: beliefs (House Rules, numbered, 6 cards), testimonials (Word On The Street, cards, 4), selected_quotes (large_type band), services (list, 3 priced tiers), credentials (pills, 6), faq (accordion, 5), plus the sticky top nav bar and the footer. An agent given only the prompt would produce a 5-section page roughly one-third the length of the real one.

**Prompt 缺失的模块:**
- beliefs (data-variant=numbered) — 'House Rules', 6 numbered principle cards
- testimonials (data-variant=cards) — 'Word On The Street', 4 quote cards with avatar initials + name/role
- selected_quotes (data-variant=large_type) — pink 'bigquote' band, 'If they don't remember it tomorrow…'
- services (data-variant=list) — 'What You Hire Me For', 3 priced service rows (From £12k / From £6k / £3.5k/week)
- credentials (data-variant=pills) — 'Receipts, Part Two', 6 award/feature pills (D&AD, It's Nice That, OFFF, TDC, Central Saint Martins)
- faq (data-variant=accordion) — 'Before You Ask', 5 native <details>/<summary> items with +/– sign toggle
- sticky top bar (header.topbar) with dot brandmark 'AM STUDIO' + section nav + Contact CTA
- footer with copyright, tagline, and 'Back to top' link

**Photo 契约 OK:** False — The page DOES ship a real local portrait: hero has <img class="u-photo" src="portrait.jpg"> (rotated 1.6deg, hard border + offset shadow, grayscale/contrast duotone filter) with a .name-block u-fallback swapped in when photos are off, plus the full fixed bottom-right '照片 Photos On/Off' toggle flipping body.no-photos. The prompt describes NONE of this. Worse, the prompt actively CONTRADICTS the page: Hard contract item 2 says 'no other external assets; no remote images' and frames the hero only as 'name in a colored block' — an agent following the prompt would never add a portrait img, never write the .u-photo/.u-fallback contract, and never build the photo toggle. The duotone filter (grayscale(1) contrast(1.18) brightness(1.02)) and the rotate(1.6deg) framing are completely absent.

**Token:** Core tokens match well: all colors (canvas #f4f1e8, surface #fff, ink #0a0a0a, ink-muted #3d3d3d, acid #e9ff3d, blue #2b4cff, pink #ff5da2), the 3px border / 6px offset, Archivo + Space Grotesk, and the type scale (display-xl 104px/0.92/-3px, display-md 40px, body 18px, label 13px) all agree between prompt, DESIGN.md and :root. Gaps: the prompt gives the px ceiling but not the clamp() ranges the page actually uses (display-xl is clamp(2.6rem,12.2vw,104px); contact h2 reaches 116px; metric/quote numerals clamp to 5rem/52px/58px) — an agent would have to guess the responsive curve. The prompt never states the hover-shadow physics (translate by --off, collapse shadow to 0), the --bw/--off variable names, or font fallback 'Arial Black'. The label letter-spacing differs (.14em in page vs 0.5px in DESIGN.md), minor.

**缺失的 Signature 技术:**
- The hero headline strike-through: .hl-strike::after is an acid bar at top:54% height:.13em rotate(-1.5deg) behind the word 'whisper.' — a signature touch the prompt never names
- name-block / portrait rotation: name-block rotate(-1.4deg), portrait rotate(1.6deg) — the deliberate tilt that sells 'off-grid'; prompt only says 'name in a colored block'
- work thumb decorative overlap: ::before is a 96px rotate(45deg) bordered square poking out top-right of each tile, with per-variant color swaps (acid↔pink↔blue); prompt says only 'bordered color blocks'
- work thumb glyph uses mix-blend-mode:multiply and giant initials as the 'image' — no images, blend mode is the trick; prompt says 'CSS color blocks + type' but not the blend mode
- snap-hover physics is precise and unstated: btn hover translate(--off,--off) + box-shadow→0 (button presses INTO its shadow); work hover translate(-3px,-3px) + shadow GROWS by 3px (lifts out). Two opposite directions, both load-bearing, prompt just says 'snap shift'
- colored offset shadows used as accents: story card shadow is PINK not ink; contact mail shadow is white(surface); prompt says shadows are always ink
- off-grid stagger via nth-child margin-top (26-34px) on alternating work tiles — the literal 'off-grid' the DNA promises; not specified
- marquee construction: duplicated item set + translateX(-50%) loop over 26s, diamond rotate(45deg) acid separators via ::after, pause on hover; prompt says 'thin auto-scrolling marquee' with no build detail
- contact headline letter-coloring trick: 'n<span class=o>oi</span>se' with pink inner letters, and bigquote inline .a span (ink bg / acid text inline highlight); these inline color hacks define the brand voice
- entrance reveal: .reveal opacity/translateY(18px) → IntersectionObserver with capped 55ms stagger (max 330ms) and cubic-bezier(.2,.7,.2,1); prompt mentions no scroll reveal at all
- faq +/- sign via summary .sign::after content swap and box color flip on [open]; services priced rows with acid price pill; credentials nth-child(3n) color cycling — all unstated

**矛盾:**
- Prompt Hard contract #2: 'no other external assets; no remote images' AND hero framed as name-in-block only — but the page ships portrait.jpg (a local image) + the full photo toggle. Following the prompt literally, an agent OMITS the portrait the page is built around.
- Prompt says shadows are uniformly the ink color ('hard 3px borders with offset 6px hard shadows' using shadow #0a0a0a) — but the page uses a PINK shadow on the story card and a WHITE shadow on the contact mail/big block as deliberate accents.
- Module plan implies a ~5-section page; the real page is 13 modules + topbar + footer. The prompt's 'reproduce roughly the same result' promise can't hold at this length gap.

**建议修复:**
- Add the 8 missing modules to the Module plan with their data-variant ids and concrete content: beliefs/numbered (6 House Rules), testimonials/cards (4 named quotes), selected_quotes/large_type (the manifesto band), services/list (3 priced tiers), credentials/pills (6 awards), faq/accordion (5 Q&A), plus the sticky topbar and footer.
- Fix the portrait contradiction: replace 'no remote images / name in a colored block' with the real photo+toggle contract — hero ships <img class=u-photo src=portrait.jpg> with rotate(1.6deg), hard border, offset shadow, and grayscale(1) contrast(1.18) duotone filter; .name-block.u-fallback swaps in under body.no-photos; include the fixed bottom-right '照片 Photos On/Off' toggle. Keep 'no remote images' but allow the one LOCAL portrait.
- Document the snap-hover physics precisely: buttons translate(+6px,+6px) and collapse their shadow to 0 (press-in); work tiles translate(-3px,-3px) and grow their shadow +3px (lift-out). These opposite motions are the brand's signature.
- Name the off-grid + ornament techniques: nth-child margin-top stagger on work tiles (26-34px); the rotate(45deg) 96px bordered square ::before poking out of each thumb with per-color swaps; glyph mix-blend-mode:multiply; the acid strike-through bar (::after, top 54%, rotate -1.5deg) behind 'whisper.'; name-block rotate(-1.4deg).
- Add colored-shadow accents to the token spec: shadows are usually ink, but story card uses a PINK offset shadow and contact uses a WHITE one — call these out as intentional.
- Specify the entrance reveal (.reveal opacity+translateY(18px) → IntersectionObserver, ~55ms capped stagger, cubic-bezier(.2,.7,.2,1)) and the marquee build (duplicated track, translateX(-50%) over 26s, diamond acid separators, pause-on-hover, reduced-motion off).
- Give the exact clamp() curves for display-xl (clamp(2.6rem,12.2vw,104px)), contact h2 (→116px) and the big numerals, and the inline letter-coloring hacks ('n<span>oi</span>se', the inline .a ink/acid highlight).


## cinematic-dark  — fid 52 / qual 63 / high

**Module diff:** Prompt lists 4 modules (hero, selected_work, metrics, contact). index.html ships 10 in this order: hero/full_bleed_still, selected_work/grid, metrics/stat_row, experience/timeline, beliefs/numbered, selected_quotes/large_type, tools/stack_list, credentials/list, currently_building/now_block, contact/cta_band. So 6 whole sections — more than half the page — are completely undocumented in the prompt. An agent given only prompt.md would produce a 4-section page roughly 40% the length of the real one, missing the entire middle (path/how-I-work/pull-quote/on-set/awards/now). The prompt's metrics example ("02 Features · Cannes Selection · Nike") matches the page, and contact matches, but the prompt's ordering note implies metrics then contact are adjacent, while the page interleaves 5 sections between them.

**Prompt 缺失的模块:**
- experience / timeline (The path — 4 career stops with year ranges, role @ company, note)
- beliefs / numbered (How I work — 2x2 grid of 4 numbered creeds)
- selected_quotes / large_type (centered pull-quote on surface band, accent span, Sight & Sound attribution)
- tools / stack_list (On set — 4 category rows: Camera/Glass/Light/Finish with item lists)
- credentials / list (Selections & awards — 4 honor rows: what / who / festival·year)
- currently_building / now_block (Now — pulsing accent dot, location line, 3 arrow-marked items)
- colophon footer line inside contact section

**Photo 契约 OK:** True — Photo + toggle contract is described accurately and nearly verbatim. Prompt references portrait.webp with u-photo, the u-fallback typographic title-card hero (MH mark + sub), the fixed toggle CSS/HTML/JS, and the body.no-photos rules including the hero flex restore. This matches index.html exactly. One nuance the prompt omits: the page wraps the img in .hero__media plus a separate .hero__scrim gradient overlay; the prompt mentions a scrim conceptually ("scrim so title is legible") only in spirit, not as required markup.

**Token:** Color tokens, fonts, and the named type-scale values all match :root and DESIGN.md exactly (canvas #0a0a0b, accent #c4b59a, hairline #26262a, Inter 200/300/400/500, display-xl 64/200/+6px etc.). However the prompt states the type scale as fixed px values, while index.html actually uses clamp() everywhere for fluid type (display-xl clamp(34px,7.5vw,64px), letter-spacing clamp(2px,1vw,6px), display-md clamp(22px,4vw,30px)). An agent reading the prompt would hardcode 64px/30px and lose the responsive fluidity that keeps the title card from breaking at 360px. Prompt also omits spacing token 'tight:16px' (DESIGN.md has it; prompt only lists section 140 / block 44).

**缺失的 Signature 技术:**
- Hero image treatment: filter:grayscale(1) contrast(1.05) brightness(.82) on the still — this monochrome/dimmed grade is central to the cinematic look and the prompt never states it (prompt implies a color still).
- Hero scrim: a precise 5-stop linear-gradient(180deg, rgba(0,0,0,.55) 0%, transparent 28-50%, rgba(10,10,11,.55) 78%, .95 100%) overlay for legibility — prompt doesn't give the gradient.
- Letterbox bars are absolutely-positioned 7vh/min-34px black bars (.bar--top/.bar--bottom), and the contact section repeats them at 5vh — prompt says 'letterbox bars' but never the height/implementation, and never that contact also gets bars.
- Letterbox 'reveal' motion is actually NOT animated bars — the hero content does a staggered fadeUp with animation-delay .45/.65/.85/1.05s on each child; bars are static. Prompt claims 'letterbox bars slowly open' which the page does NOT do — misleading.
- Scroll reveal: .reveal class + IntersectionObserver (threshold .16, rootMargin -8%) translateY(28px)->none over 1s — the load-bearing scroll behavior, undocumented.
- Hover affordances: .film:hover{background:surface;padding-left:20px} + film__no turns accent; .reel-link:hover widens gap + accent underline; arrow translateX. None specified.
- now__dot pulsing keyframe (box-shadow ring expand, nowPulse 2.6s) — the one bit of ambient motion, undocumented.
- Layout grammar: hairline-rule rows with grid-template-columns (54px/1fr/auto for films, 130px/1fr for timeline, 200px/1fr for tools) and numbered indices (F01, 01, idx) — the 'credits list' structure that defines the style is undocumented for 6 sections.
- ::selection{background:accent;color:#000} and :focus-visible accent outline.
- Section index labels (01..08 in accent) in .sec__head — a title-card device repeated across sections.

**矛盾:**
- Prompt DNA + Module plan say 'Motion: letterbox bars slowly open' and 'letterbox bars slowly open + content slow fade-up'. The page does NOT animate the bars at all — they are static black bars. Actual motion is staggered content fadeUp + scroll reveals. An agent following the prompt would build an animated bar-open that the source page lacks (and might drop the real reveal stagger).
- Prompt frames hero image as a cinematic still shown as-is; index.html forces grayscale+dimmed grade, so a faithful prompt-follower's color still would look noticeably different from sample.png.

**建议修复:**
- Add the 6 missing modules to the Module plan with concrete content seeds: experience/timeline (4 stops: 2020-Now Independent, 2016-2020 Stillwater Pictures, 2013-2016 camera/lighting, 2009-2013 CalArts BFA), beliefs/numbered (4 creeds, light-first / hold-the-shot / location-weather / cut-to-the-breath), selected_quotes/large_type (Sight & Sound pull-quote), tools/stack_list (Camera/Glass/Light/Finish with ARRI, Cooke, Aputure, DaVinci), credentials/list (Cannes/Camerimage/Sundance/ASC), currently_building/now_block (3 'Now' items + pulsing dot), and the colophon line.
- Specify the hero image grade verbatim: filter:grayscale(1) contrast(1.05) brightness(.82), plus the .hero__scrim 5-stop linear-gradient for legibility.
- Fix the motion description: bars are STATIC; the real motion is per-child staggered fadeUp (delays .45/.65/.85/1.05s) plus IntersectionObserver scroll reveals (.reveal, translateY(28px)->none, 1s, threshold .16). Remove 'letterbox bars slowly open'.
- Document the layout grammar: hairline-ruled rows with fixed first columns and numbered indices (F01.. for films, accent 01-08 section indices, credits as bordered 3-col grid), and the hover affordances (.film:hover background+padding-left, accent film__no, reel-link gap widen).
- State that the type scale uses clamp() for fluid sizing (give the display-xl/display-md/letter-spacing clamps) rather than fixed px, and add the tight:16px spacing token.
- Add the now__dot pulse keyframe and ::selection/focus-visible accent details so the small cinematic touches survive.


## dark-luxe  — fid 52 / qual 68 / high

**Module diff:** Prompt's Module plan lists 5 modules in this order: hero/split_portrait, credentials, metrics, testimonials/quote_led, contact/card. The actual index.html ships 11 data-module sections: hero/split_portrait, credentials/list, metrics/stat_row, experience/timeline, beliefs/numbered, services/list, testimonials/quote_led, selected_quotes/large_type, now_page/list, faq/two_column, contact/card. So the prompt documents fewer than half the page. The order also differs: in the page testimonials comes AFTER experience/beliefs/services (section VI), and contact is the LAST module after selected_quotes/now/faq — the prompt's 5-step order collapses everything between metrics and contact. An agent given only the prompt would produce a ~5-section page; the real page is a ~9-section memorandum with roman-numeral section heads (I–IX), a topbar nav, and a signed footer. This is the single biggest fidelity gap.

**Prompt 缺失的模块:**
- experience / timeline (section III — 3 dated rows: 2019–now Independent Advisory, 2012–2019 Meridian Logistics COO, 2005–2012 Halford & Vane Partner)
- beliefs / numbered (section IV — 4 numbered principles in a 2-col hairline grid: 'Name it in the room', 'Govern for decisions not minutes', 'Plan the exit before the crisis', 'Make the hard call survivable')
- services / list (section V — 3 engagement forms: Board Seat, Founder Counsel, Succession Engagement, each with right-aligned smeta)
- selected_quotes / large_type (section VII — single oversized italic pull-quote 'Authority is not the right to give the order...')
- now_page / list (section VIII — Now grid: Boards/Reading/Writing/Based + a now-note with 'Updated · Spring 2026' stamp)
- faq / two_column (section IX — 4 Q. items in 2-col grid)
- topbar (brand 'Adaeze Okonkwo.' with gold dot + 7-item uppercase nav — present in hero header but undocumented)
- footer (signed italic 'on the hard side of the table' + copyright line — undocumented)

**Photo 契约 OK:** True — Accurate. index.html uses a local portrait.webp (present, 50KB) with class u-photo, a meaningful alt, and the u-fallback monogram. The prompt describes the portrait, the gold-framed monogram fallback, the fixed toggle, and supplies the exact CSS + toggle markup/script verbatim, including the body.no-photos .u-fallback.mono{display:grid} scoped restore. It does NOT contradict by saying 'no remote image'. Only omission: the page applies filter:grayscale(100%) contrast(1.04) to the img — prompt says 'black-and-white' (implies grayscale) but not the contrast bump or CSS-filter approach.

**Token:** Strong match. All 10 colors, both fonts, full type scale (display-xl 88/1.02/-1.5, display-md 44, quote 34 italic, metric 64, body 17/1.7, eyebrow 12 +3px), spacing (section 132/block 44), rounded sm2/md4, and the font link carry over exactly from :root and DESIGN.md. Minor gaps: prompt omits the tight:18px token and --maxw:1200px, and the responsive token overrides (section->96, block->36 under 880px).

**缺失的 Signature 技术:**
- The hairline gold RULE is a gradient, not a flat line: background:linear-gradient(90deg,var(--hairline-gold),var(--accent) 40%,var(--hairline-gold)) — it glows brighter gold in the middle. Prompt says 'gold hairline draw' but never specifies the gradient fill; an agent would likely ship a flat #5a4a24 line.
- Rule draw-in is transform:scaleX(0)->scaleX(1) with transform-origin:left, transition 1.1s cubic-bezier(.2,.7,.2,1), triggered by IntersectionObserver adding .shown. Prompt says 'draws in on scroll' but gives no transform/timing/easing/observer threshold — reproducibility of the signature motion is low.
- Roman-numeral section headers: every section opens with a serif-italic gold numeral (I–IX) + uppercase eyebrow label in a .sec-head. This memorandum-numbering device is a core identity element and is entirely absent from the prompt.
- Portrait frame is a DOUBLE frame + corner ticks: outer 1px hairline-gold border, ::before inset:5px inner 1px hairline border, plus two absolutely-positioned 18px L-shaped gold corner brackets (.pc-tl top-left, .pc-br bottom-right). Prompt only says 'thin gold frame'.
- Metrics are borderless columns separated by left-border hairlines (border-left:1px var(--hairline); first-child border:0), with the unit as an italic gold .55em superscript-style suffix. Prompt says 'separated by hairline gold rules — not boxes' but the actual separators are neutral --hairline (#2a2620), not gold, and the unit styling is unspecified.
- Contact card top edge: ::before is a 1px linear-gradient(90deg,transparent,accent,transparent) glowing seam across the top of the surface card. Undocumented.
- Reveal animation: opacity 0 + translateY(22px) -> none, 0.9s, same cubic-bezier, IO threshold 0.16 / rootMargin -8%. Prompt says 'slow fade-up' but no distance/duration/easing.
- ::selection sets gold background + black text; availability 'pip' is a gold dot with a soft rgba glow ring (box-shadow:0 0 0 3px rgba(200,162,74,.18)). Small but on-brand details absent from prompt.
- hero-title uses an inline <em> in gold italic ('hard side') to color a phrase of the headline — the prompt says 'oversized serif headline' but doesn't call out the gold-italic phrase-highlight pattern used repeatedly (hero, contact h2, cred-statement strong, pull em).

**矛盾:**
- Prompt metrics module: 'separated by hairline GOLD rules — not boxes.' The page actually separates metric columns with neutral --hairline (#2a2620 border-left), not gold. Minor but a literal contradiction.
- Prompt Module plan implies contact is step 5 (immediately after testimonials), but in the page contact is the final module preceded by selected_quotes, now_page, and faq — the documented sequence does not match the page.

**建议修复:**
- Expand the Module plan to all 11 sections in page order: hero/split_portrait, credentials/list, metrics/stat_row, experience/timeline (3 dated roles), beliefs/numbered (4 principles), services/list (3 engagements), testimonials/quote_led, selected_quotes/large_type (one oversized pull-quote), now_page/list, faq/two_column (4 Q&As), contact/card — plus a topbar (brand + uppercase nav) and a signed footer. Seed the concrete content for each (company names, dates, principle titles, FAQ questions) so the agent doesn't omit or invent them.
- Document the roman-numeral section-head device: each section after the hero opens with a serif-italic gold numeral (I–IX) + an uppercase eyebrow label.
- Specify the hairline gold rule precisely: a 1px line filled with linear-gradient(90deg, var(--hairline-gold), var(--accent) 40%, var(--hairline-gold)) that draws in via transform:scaleX(0)->1 from the left, 1.1s cubic-bezier(.2,.7,.2,1), fired by IntersectionObserver on scroll.
- Specify the reveal: opacity 0 + translateY(22px) -> 0 over ~0.9s cubic-bezier(.2,.7,.2,1), IO threshold ~0.16, reduced-motion shows final state.
- Describe the portrait frame fully: outer hairline-gold border + inner inset hairline border (::before) + two 18px L-shaped gold corner brackets (top-left, bottom-right); apply filter:grayscale(100%) contrast(1.04) to the img.
- Fix the metrics contradiction: separators are neutral --hairline vertical rules (border-left), borderless columns, with the unit as an italic gold ~.55em suffix; and add the contact-card top ::before gradient seam + gold 'pip' glow as small signature details. Also add the missing tokens (tight:18px, maxw:1200px) and the gold-italic <em> phrase-highlight pattern used in the hero/contact headlines.


## editorial  — fid 52 / qual 68 / high

**Module diff:** Prompt lists 5 modules (hero/bold_statement, selected_work/featured_case+list, story/quote_led, currently_building, contact). index.html ships 9 tagged data-module sections plus a topbar nav and a footer. The prompt covers only 5 of the 9 page modules — it is missing the entire back half of the page (metrics, beliefs, selected_quotes, credentials), which is roughly 4 full sections and a large fraction of the page's vertical length and visual identity. An agent given only the prompt would produce a noticeably shorter page that stops after the Now block.

**Prompt 缺失的模块:**
- metrics / big_numerals — "By the Numbers" section: 3-up grid of oversized serif numerals (8yrs / 140+ / 12k) with rust-colored suffix span and a one-line label each
- beliefs / principles_list — "A Writing Creed": ordered list of 4 principles, each prefixed with a counter (decimal-leading-zero, rust) generated via CSS counters, serif headline + muted body, hairline dividers
- selected_quotes / large_type — "In the Margins": a single giant pull-quote blockquote (clamp up to 3.2rem) with a large rust opening-quote glyph as a ::before, italic rust emphasis, attribution figcaption
- credentials / list — "Awards & Fellowships": 1fr/auto grid list of 4 awards (name · org / year), hairline top+between, identical pattern to the essay list
- topbar — a sticky-feel header with serif wordmark + rust dot and an uppercase letter-spaced nav (Work/Approach/Creed/Awards/Now/Contact), hidden under 600px
- footer — hairline-topped flex footer with a colophon ("Set in Spectral & Inter") in italic serif

**Photo 契约 OK:** False — Direct contradiction. index.html ships a real local portrait: <img class=\"u-photo\" src=\"portrait.jpg\"> inside a two-column hero-grid (text + tall 4:5 magazine crop with a hairline frame and an offset rust/surface box-shadow), a serif italic figcaption, the fixed bottom-right \"照片 Photos On/Off\" toggle, and the body.no-photos rules that collapse the hero to a single column. The prompt mentions NONE of this — no portrait, no u-photo, no toggle, no two-column hero — and worse, Hard-contract item 2 explicitly says \"Avatar (if any) = CSS/SVG/initials, not a remote image.\" An agent following the prompt would build a text-only hero and never produce the portrait that dominates the top of sample.png. This is the single biggest fidelity break.

**Token:** Color tokens, fonts, and the headline type scale match DESIGN.md and :root exactly (canvas/surface/ink/accent hexes, Spectral+Inter, display-xl 76/1.04/-2px, lede 24 italic, body 18/1.65, eyebrow 13/600/+1.5px). Drift: the prompt's type scale is given as fixed px, but the page uses clamp() for every display size (e.g. display-xl clamp(2.85rem,8.4vw,76px), display-md clamp(1.9rem,4.6vw,40px), lede clamp). The prompt never states the responsive/fluid behavior. Several real layout tokens are absent from the prompt entirely: --measure 62ch, --col-max 1180px, --gutter-r clamp(1.5rem,8vw,12rem), --gutter-l clamp(1.5rem,6vw,7rem) (these create the signature asymmetric column + huge right margin), spacing.tight 16px and rounded.md 4px from DESIGN.md, and the per-section measure caps (max-width:16ch on the hero h1, 18ch/22ch/24ch on headings/quotes) that drive the editorial line breaks.

**缺失的 Signature 技术:**
- Paper-grain body texture: layered background-image of a faint rust radial-gradient (circle at 18% 12%, rgba(154,52,18,0.025)) PLUS an inline SVG feTurbulence fractalNoise (baseFrequency 0.9, opacity ~0.018) data-URI. This is the core 'printed paper' identity and the prompt never names noise/grain at all.
- Asymmetric single column via --col-max 1180px + asymmetric gutters (left clamp ...7rem, right clamp ...12rem) — the prompt says 'content left, generous right margin' but gives no mechanism, so agents will center or use symmetric padding.
- Animated underline links: background-image linear-gradient sized 0%->100% 1px, positioned at 92% baseline, cubic-bezier reveal on hover (not text-decoration). Used on .link, hero CTA, contact email.
- Section-head pattern: eyebrow label + a flex-1 hairline rule (.sec-rule) translated up 3px — the repeating structural motif on every section, unmentioned.
- Hover micro-motion on the essay/credentials lists: padding-left shift + an absolutely-positioned rust → arrow that fades/slides in via ::before.
- Hero h1 mixed style: italic rust <em> on the keyword ('attention') inside the otherwise-ink serif headline — the accent-on-one-word trick. Prompt says accent 'on links and the lede' only, which omits this.
- Oversized rust opening-quote glyph as ::before on .story .lede and .quote-feature (left negative offset, ~2.4em–5em, opacity ~0.5).
- Featured essay 'pull' as a left-rust-border blockquote; 'Most read' pill tag with pill border + rust text.
- Now block surface card: --surface bg, hairline border, 01/02 serif rust markers — the one boxed element on an otherwise box-free page.
- Portrait frame: aspect-ratio 4/5, hairline border, offset double box-shadow (-14px 14px surface + hairline) producing a magazine print-edge.
- Scroll reveal specifics: .reveal opacity 0 + translateY(22px), 0.85s cubic-bezier(0.22,0.61,0.36,1), staggered via data-delay 1-4 (0.08s steps), IntersectionObserver rootMargin -8% threshold 0.08. Prompt only says 'subtle fade-up'.
- Big-numeral metrics: serif clamp up to 4.4rem, letter-spacing -2px, with a rust .suffix span (yrs/+/k).

**矛盾:**
- Hard contract #2: 'Avatar (if any) = CSS/SVG/initials, not a remote image' directly contradicts the page, which ships a real local portrait.jpg as the hero's dominant visual.
- DNA line 'One rust accent only on links and the lede' contradicts the page, which also uses rust on: the hero <em> keyword, metric suffixes, creed counters, the giant quote glyphs, the featured pull-quote border, the 'Most read' tag, the now-block markers, and the wordmark dot.
- DNA 'never cards/boxes' is mostly true but the page's Now block is in fact a bordered surface card — a deliberate single exception the prompt would forbid.

**建议修复:**
- Add the 4 missing modules to the Module plan with concrete content: metrics/big_numerals (8yrs / 140+ / 12k with rust suffix), beliefs/principles_list (the 4 creed lines), selected_quotes/large_type (the giant 'We didn't lose our attention…' pull-quote), credentials/list (4 named awards 2021-2024). Also add the topbar nav (serif wordmark + rust dot) and the colophon footer.
- Replace Hard-contract item 2's 'Avatar = CSS/SVG/initials, not a remote image' with the real photo+toggle contract: a local portrait.jpg as img.u-photo in a two-column hero-grid (4:5 crop, hairline border, offset rust/surface box-shadow, italic serif caption), the fixed 照片 Photos On/Off toggle, and body.no-photos collapsing the hero to one column.
- Document the paper-grain texture explicitly: body background = faint rust radial-gradient at 18% 12% (rgba(154,52,18,0.025)) + an inline SVG feTurbulence fractalNoise data-URI at ~0.018 opacity.
- Specify the layout system: --col-max ~1180px, asymmetric gutters (left clamp 1.5rem-7rem, right clamp 1.5rem-12rem), --measure 62ch, and per-element measure caps (hero h1 16ch, headings 18-24ch) — this is what makes the single asymmetric column with big right margin.
- State the type scale as the actual clamp() ranges, not fixed px, so the page is fluid 360-1440 the way the source is.
- Pin the motion precisely: reveal = opacity 0 + translateY(22px), 0.85s cubic-bezier(0.22,0.61,0.36,1), staggered 0.08s via data-delay, IntersectionObserver (rootMargin -8%, threshold 0.08); and the animated underline links (linear-gradient 0%->100% 1px on hover, not text-decoration).
- Fix the accent rule: rust is used not only on links/lede but on the hero <em> keyword, metric suffixes, creed counters, quote glyphs, the pull-quote border, the 'Most read' pill, now-block markers, and the wordmark dot — list these so the agent doesn't under-color the page. Note the one boxed exception (the Now surface card).


## editorial-dark  — fid 52 / qual 68 / high

**Module diff:** Prompt lists a 4-step Module plan (hero/bold_statement, selected_work/featured_case+list, story/quote_led, contact). The actual page ships 10 data-module sections plus a sticky header+nav and a footer. The prompt accounts for hero, selected_work, story, and contact, but is MISSING 6 full sections: beliefs/numbered ("How I Read a Film", 4 tenets), metrics/stat_row ("The Ledger", 3 figures), credentials/list ("Recognition", 4 entries), speaking/list ("Lecterns & Microphones", 3 entries), selected_quotes/large_type ("What Editors Say", 2 blockquotes), currently_building/now_block ("Now", 4 items). It also omits the sticky blurred header with roman-numeral nav and the footer. The prompt's "selected_work featured_case + list" is correct in spirit (the page does combine a featured essay + a hairline-separated worklist), but the page tags it only featured_case. The prompt's "contact → conversion" maps to contact/cta_band. So roughly 60% of the page's structure is undocumented — an agent following the prompt would produce a 4-section page about half the length of the real one.

**Prompt 缺失的模块:**
- beliefs/numbered (How I Read a Film — 4 numbered tenets with decimal-leading-zero amber counters)
- metrics/stat_row (The Ledger — 3 large serif figures: 15+, 400+, 1)
- credentials/list (Recognition — 4 year-keyed deflist entries)
- speaking/list (Lecterns & Microphones — 3 year-keyed deflist entries)
- selected_quotes/large_type (What Editors Say — 2 amber-rule blockquotes with cites)
- currently_building/now_block (Now — lede + 4 when/what nowlist rows)
- sticky header.site with blurred backdrop + roman-numeral section nav
- footer.site with colophon (Set in Newsreader & Inter)
- per-section sec-head pattern: italic amber roman numeral (i.–ix.) + uppercase 12px label

**Photo 契约 OK:** True — Photo contract is accurate. Page uses local portrait (src="portrait.webp", class u-photo) with a typographic u-fallback monogram (T&V) and the verbatim fixed bottom-right toggle + script; prompt describes all of this correctly and supplies the verbatim CSS/HTML/JS. One small drift: prompt says output ships "portrait.webp" while the page references portrait.webp but the repo folder may store a .jpg/.webp — prompt is internally consistent. The prompt does NOT mention the specific portrait styling that gives it identity: filter:grayscale(100%) contrast(1.04), aspect-ratio:4/5, object-position:50% 30%, the 8px inset frame border on surface bg, and the italic figcaption "— Theodore Vance, by the window light". The prompt says "black-and-white portrait... frontispiece" but never states grayscale filter, the framed/matted treatment, or the caption — so reproductions will likely use a color image in a bare img.

**Token:** Color tokens match exactly (canvas #0c0c0e, surface #141417, ink #ededec, ink-muted #a3a29c, ink-subtle #6c6b66, accent #e0a64d, accent-hover #f0bd6a, hairline #26262b) across prompt, DESIGN.md, and index.html :root. Fonts match (Newsreader 400/500+italic, Inter 400/600) and the font link is identical. Type scale mostly matches but prompt states display-md as "38px serif 500" with no line-height; DESIGN.md gives 38px/1.14/-0.6px. Prompt omits several real tokens the page relies on: --tight:16px, --measure:62ch (the body measure that governs every prose block), --pad:clamp(20px,5vw,72px) (the responsive page gutter), --rounded-sm:2px is given but the layout shell .wrap max-width:1180px / .col max-width:920px is absent. The prompt's "display-xl 80px" is rendered as clamp(40px,8vw,80px) — fluid scaling not stated. Net: color/font fidelity is high; spacing/measure/layout-width tokens are under-specified.

**缺失的 Signature 技术:**
- Per-section sec-head ornament: an italic amber roman numeral (i. ii. iii. … ix.) beside a 12px uppercase ink-subtle label — this repeating editorial rhythm is the page's strongest identity cue and is entirely absent from the prompt
- beliefs counters: ol counter-reset/counter-increment with content:counter(tenet,decimal-leading-zero) rendered in italic amber serif (01,02,03) — not mentioned
- Sticky header: background:color-mix(in srgb,var(--canvas) 88%,transparent) + backdrop-filter:saturate(120%) blur(8px) + hairline bottom border — not mentioned
- Animated underline on links: background-image linear-gradient sized 0%->100% on hover (featured h3 a) and the worklist hover that shifts padding-left + paints a 9% amber left-to-transparent gradient sweep — not mentioned
- amber left-rule pull-quotes: border-left:2px solid var(--accent) with 20-24px padding on .pull and blockquotes — prompt says 'amber on the lede/rule-marks' but never the 2px left border technique
- ::selection{background:var(--accent);color:#16130b} — branded text selection, not mentioned
- Reveal motion specifics: .reveal{opacity:0;translateY(14px);transition .7s} toggled via IntersectionObserver with rootMargin '0px 0px -8% 0px', threshold 0.08, unobserve-once — prompt only says 'subtle fade-up', no distance/duration/threshold
- stat figures use serif 500 clamp(40-60px) with -2px tracking and an amber superscript mark (the + in 15+) — under-specified
- measure-constrained columns (max-width:62ch) keeping prose narrow against a generous right margin — the asymmetric-column feel; prompt says 'generous right margin' but gives no measure
- CTA micro-interaction: gap and arrow translateX shift on hover (gap .2s, arr translateX 3px) — not mentioned

**矛盾:**
- Prompt's photo+toggle contract boilerplate says the fallback should be 'a typographic/initials treatment' — this matches the page, so no contradiction there. However the Module plan promises a 4-section page while the page is 10 sections + header + footer: an agent that follows the plan literally will under-build, contradicting the goal 'eff.. 基本一致 (roughly identical)'.
- Prompt DNA says 'Single asymmetric column, content left, generous right margin' but the page actually uses centered max-width wraps (.wrap margin:0 auto, max-width:1180px) with measure-capped prose — the 'asymmetric/generous right margin' framing is loose vs the real centered-shell-with-narrow-measure implementation, which could mislead an agent into a hard left-aligned full-bleed layout.

**建议修复:**
- Expand the Module plan to all 10 sections in page order: hero/bold_statement, selected_work/featured_case(+hairline list), story/quote_led, beliefs/numbered, metrics/stat_row, credentials/list, speaking/list, selected_quotes/large_type, currently_building/now_block, contact/cta_band — plus a sticky blurred header with roman-numeral nav and a colophon footer.
- Add the signature sec-head pattern to the DNA: 'every section opens with an italic amber roman numeral (i.–ix.) beside a 12px uppercase ink-subtle label.' Specify the beliefs counters as content:counter(...,decimal-leading-zero) in italic amber serif (01/02/03).
- Supply the real content for the 6 missing sections (4 tenets, 3 ledger stats 15+/400+/1, 4 Recognition rows, 3 Speaking rows, 2 editor quotes with attributions, 4 Now items) plus the 5 worklist essay titles and the 'A cut is a mercy...' pull-quote, so the agent never falls back to filler.
- Pin the motion: '.reveal starts opacity:0 translateY(14px), transitions opacity+transform .7s ease; IntersectionObserver (threshold ~0.08, rootMargin 0 0 -8% 0) adds .in once; honor prefers-reduced-motion by rendering final state.'
- Name the under-specified style techniques: 2px amber left-border on pull-quotes/blockquotes; animated 0%->100% gradient underline on essay links; worklist hover that shifts padding-left and paints a 9% amber gradient sweep; ::selection amber; sticky header backdrop-filter blur(8px)+color-mix bg; portrait grayscale(100%) contrast(1.04) in an 8px-matted frame with italic figcaption.
- Add the missing layout/spacing tokens: --measure:62ch (cap all prose columns), --tight:16px, --pad:clamp(20px,5vw,72px) gutter, .wrap max-width 1180px / .col max-width 920px — and correct the layout description from 'asymmetric column / generous right margin' to 'centered max-width shell with narrow measure-capped prose.'


## glassmorphism  — fid 52 / qual 63 / high

**Module diff:** Prompt documents 4 modules (hero/glass_card_over_backdrop, selected_work/grid, metrics/stat_row, contact/contact_form), all of which exist in the page and match their variants. The page actually contains 10 tagged modules plus a footer. The prompt omits 6 entire sections (beliefs/numbered, testimonials/quote_led, experience/timeline, tools/stack_list, currently_building/now_block, faq/two_column) and the footer — i.e. more than half the page, including all of the 'proof/credentials/personality' long-form content. The 4 documented modules are correct; the omission is purely additive on the page side.

**Prompt 缺失的模块:**
- beliefs (variant numbered, 4 tiles)
- testimonials (variant quote_led)
- experience (variant timeline, 3 rows)
- tools (variant stack_list, 4 groups of pills)
- currently_building (variant now_block)
- faq (variant two_column, 4 items)
- footer (centered one-liner)

**Photo 契约 OK:** True — handled in photo_contract_note field

**Token:** Token fidelity is high. All :root colors, ink levels, accents, accent-glow, spacing (section 104 / block 32 / tight 14), radii (14/22/30), fonts (Inter 400-800 + identical Google Fonts link), and the type scale (display-xl 68/1.04/-2.4, display-md 30, lede 21, body 17/1.62, eyebrow 12 +2.2, metric 46) match prompt and DESIGN.md exactly. Gaps: (1) the glass recipe in the prompt omits the third inner shadow `inset 0 0 40px rgba(255,255,255,0.04)` present in .glass; (2) the prompt's glass blur is 22px but the BACKDROP photo uses a much heavier filter `blur(34px) saturate(135%) brightness(0.82)` — that specific backdrop filter is never given; (3) --maxw:1080px content width is never stated; (4) headings/metrics are rendered with clamp() fluid sizes (e.g. clamp(40px,8vw,68px)) which the prompt's fixed px scale doesn't convey."

**缺失的 Signature 技术:**
- Gradient-clip glow text: `.glow{background:linear-gradient(100deg,var(--accent-2),var(--accent) 55%,#c4b5fd);-webkit-background-clip:text;color:transparent}` applied to one word in the hero headline AND the testimonial quote — the signature accent move; prompt never describes it
- Metric numbers use a SEPARATE white→pink clip gradient `linear-gradient(110deg,#fff,var(--accent-2))` — not mentioned
- Primary CTA is NOT glass: it's a solid light pill `linear-gradient(120deg,#fff,#e9e3ff)` with dark ink #1a1030 text, accent-glow shadow + inset white highlight, and an arrow that translateX on hover — prompt says 'glass CTA' which would produce the wrong button
- backdrop-overlay: a fixed double-layer darken/tint `radial-gradient(...transparent 40%, rgba(16,8,33,.55))` + `linear-gradient(180deg, rgba(20,11,40,.30), .62)` that keeps glass legible — prompt says 'darkened with an overlay' but gives no recipe
- Backdrop photo blow-up trick: img at inset:-8%, width/height 116%, transform:scale(1.06), filter blur(34px) saturate(135%) brightness(0.82) — none specified
- Fallback gradient exact recipe (3 radial blobs at 22%/82%/60% in pink/violet/indigo + 150deg base linear) — prompt says 'two-tone radial gradient with soft light blobs' but gives no positions/colors
- Eyebrow ornament: `::before` 22px hairline rule in accent-2 before uppercase tracked label — recurring section-label motif, not in prompt
- now-dot glow ring: `box-shadow:0 0 0 4px var(--accent-glow)` around a 9px accent-2 dot
- Focus glow on inputs: `box-shadow:0 0 0 3px var(--accent-glow)` + accent-2 border — the calm glass focus treatment
- Scroll reveal exact behavior: `.reveal{opacity:0;translateY(22px)}` → IntersectionObserver threshold 0.12, rootMargin -8%, unobserve-once, with reduced-motion bailout — prompt only says 'soft fade-up on scroll'
- work-card hover lift specifics: translateY(-8px) + swap to glass-fill-strong + deeper shadow on cubic-bezier(.2,.7,.2,1) — prompt only says 'cards float on hover'
- Inner tiles within glass bands are SEMI-glass not full glass: metric-tile / pill / tag use rgba(255,255,255,0.05-0.08) fills with thin 0.12-0.18 borders, no backdrop-filter — this layering hierarchy isn't conveyed

**矛盾:**
- Prompt's Module plan implies a 4-section page; the actual page is a 10-section long-form page (hero, work, metrics, beliefs, testimonials, experience, tools, currently_building, faq, contact + footer). An agent following the prompt would build a page roughly half the length and miss the page's structural identity.
- Prompt repeatedly calls portrait.webp 'a vivid photo (the person's photo)' / 'persona photo'; index.html uses it strictly as a blurred ambient backdrop (alt text: 'Soft blurred photographic backdrop in pink and violet tones') — there is NO visible portrait of Kai anywhere on the page. Calling it a persona/portrait photo could mislead an agent into rendering a face somewhere.

**建议修复:**
- Expand the Module plan to all 10 sections with the page's variants and real copy: add beliefs(numbered, 4 principles: Calm beats clever / Show the seams / Reversible by default / Ship the boring 80%), testimonials(quote_led — Dana Reyes, VP Product, Loop Support), experience(timeline — 3 roles w/ dates+orgs), tools(stack_list — Design/Prototyping/AI&eval/Research with the named tools), currently_building(now_block — 3 items + 'Updated May 2026 · Berlin'), faq(two_column — 4 Q&A), and a centered footer.
- Fix the CTA spec: it is NOT glass — document the solid light pill `linear-gradient(120deg,#fff,#e9e3ff)`, dark #1a1030 text, accent-glow shadow + inset white highlight, translateY(-3px) hover and arrow translateX. Same pill is the form submit button.
- Add the signature gradient-clip glow text technique: `background:linear-gradient(100deg,var(--accent-2),var(--accent) 55%,#c4b5fd);-webkit-background-clip:text;color:transparent` on one hero headline word + the testimonial word; and the metric-number gradient `linear-gradient(110deg,#fff,var(--accent-2))`.
- Re-frame portrait.webp as a *blurred ambient backdrop* (no visible portrait of the person) and give the exact backdrop recipe: img inset:-8% / 116% / scale(1.06) / filter blur(34px) saturate(135%) brightness(0.82), plus the fixed backdrop-overlay double gradient, plus the fallback's 3 blob positions/colors. Remove any 'persona photo' wording.
- Complete the glass recipe (add `inset 0 0 40px rgba(255,255,255,0.04)`) and state the inner-tile hierarchy: metric tiles/pills/tags are semi-opaque white (0.05–0.08) with thin borders and NO backdrop-filter, nested inside the real glass panels.
- Specify motion precisely: `.reveal` starts opacity:0 translateY(22px); IntersectionObserver threshold 0.12 / rootMargin -8% / reveal-once; work-card hover = translateY(-8px) + glass-fill-strong + deeper shadow; eyebrow `::before` 22px hairline; also note clamp() fluid type and --maxw 1080px.


## handcrafted-sketch  — fid 52 / qual 68 / high

**Module diff:** Prompt lists 4 modules (hero, selected_work, story, contact). The page ships 9: hero(split_portrait), selected_work(grid), story(magazine_longform), metrics(big_numerals), beliefs(numbered), currently_building(now_block), testimonials(quote_led), reading_list(list), contact(cta_band). So the prompt documents under half the page — 5 entire sections (metrics, beliefs, currently_building, testimonials, reading_list) are completely undocumented, including their content. An agent following the prompt would produce a 4-section page roughly half the length, missing the whole middle of the site. Also the prompt's hero variant is described loosely ("split: headline + taped illustration") while the page tags it split_portrait; selected_work matches; story matches; contact maps to cta_band but the prompt never names the variant.

**Prompt 缺失的模块:**
- metrics (big_numerals) — 4 tally cards: 7 books / 600+ kids / 12 years / 9 languages, coral numerals with washi tape
- beliefs (numbered) — 'Four things I draw by', sticky-note numbered counter list (yellow/blue alternating)
- currently_building (now_block) — wobbly ink-border 'Now · June 26' card with 3 checkmarked items (book eight, autumn workshops, open to 2 commissions)
- testimonials (quote_led) — 3 sticky-note quote cards (editor / parent / librarian) taped to desk
- reading_list (list) — 'On the table this season', 4 books with dashed-rule rows + colored status tags

**Photo 契约 OK:** True — Accurate and strong. Prompt mandates portrait.webp as a taped illustration with u-photo class + meaningful alt, a u-fallback hand-drawn empty-frame placeholder, default photos ON, the exact toggle CSS/HTML/JS verbatim, and even the scoped grid restore note (body.no-photos .frame .u-fallback{display:grid}). Page implements all of this exactly (the .frame .u-fallback uses display:grid via the scoped rule). No contradiction — it does not falsely claim CSS/SVG-only avatar.

**Token:** Excellent. All 13 color hexes, both fonts (Caveat 600/700, Lora ital+400/600), the exact Google Fonts link, the full type scale (display-xl 88/0.96, display-md 52, scrawl 26, lede 22 italic, body 18/1.7, eyebrow 22), spacing (section 104, block 36) and rounded (4/10/18) all match :root and DESIGN.md verbatim. Minor: prompt omits the --tight:14px spacing token present in :root/DESIGN. Otherwise token-perfect.

**缺失的 Signature 技术:**
- The body paper texture is a precise 4-layer background-image stack: two faint radial-gradients (coral .04, mint .05) + a repeating-linear-gradient at 31/32px making the blue notebook rule lines + an inline SVG feTurbulence fractalNoise grain at opacity .045 saturate 0. Prompt only says 'layered CSS radial/linear gradients OR an inline SVG noise filter' — agent would likely pick one and miss the notebook-rule line and the exact noise recipe.
- Wobbly hand-drawn ink borders use an asymmetric multi-value border-radius (border-radius:255px 14px 225px 12px/14px 235px 12px 255px) plus a hard offset box-shadow (3px 5px 0 -1px) — this 'drawn rectangle' trick is the signature and is not specified; prompt just says 'SVG strokes or irregular border treatments'.
- Washi tape = repeating-linear-gradient(45deg, rgba(255,255,255,.25) 0 7px, transparent 7px 14px) over the washi color + dashed white side borders, rotated -32deg/+32deg at frame corners. Prompt names washi tape conceptually but not the diagonal-stripe gradient recipe or the corner rotations.
- Hand underlines / dividers / arrows are inline SVG bezier paths (e.g. M2 9 C 120 2, 240 12... wobbly rule; arrow head as two short strokes) in coral, absolutely positioned under words via .uline svg{bottom:-.5em;width:108%}. Prompt says 'doodled arrows and hand underlines' but gives no SVG-path approach; agents tend to fake these with CSS borders and lose the hand-drawn wobble.
- Sticky notes: yellow/blue bg, Caveat, rotate(-2.5deg), with a ::after pseudo tape strip (rgba white .55) centered on top. Prompt mentions sticky notes but not the ::after tape pseudo-element.
- Book covers are pure-CSS: 6 named linear-gradient swatches (c1..c6) at 160deg + a ::before doodle ring with organic border-radius (60% 40% 55% 45%/...). No real cover images. Prompt says 'taped-in cover sketches' which could mislead an agent into expecting/needing images.
- Award sticker is a clip-path starburst polygon (24-point) with a radial-gradient gold fill, rotate(8deg). Prompt says 'award sticker' but not the clip-path starburst technique.
- Contact panel torn-paper edge is a clip-path:polygon(...) with ~30 jagged points top and bottom. Prompt says 'torn-paper / sticky-note panel' but not the clip-path jagged-edge method.
- Tilt system: per-element transform:rotate() at 1-2deg, and reveal motion stores intended tilt in --tilt CSS var; .reveal animates translateY(18px)+rotate(var(--tilt)) -> straighten+fade on '.in'. The clever part (the reveal restores each element's resting tilt, not 0) is under-specified — prompt says 'gentle straighten + fade-up' but not the --tilt-per-element mechanism.
- ::selection uses washi-coral; focus-visible is a 3px DASHED coral outline (on-theme) — small identity details absent from prompt.

**矛盾:**
- Prompt's 'Module plan (in this order)' implies the page is exactly those 4 sections in that order, but the real page interleaves 5 more sections — so following the plan literally produces a structurally different, much shorter page. This is the core reproducibility failure.
- Prompt step 2 says book cards 'look like taped-in cover sketches' implying imagery/tape per card; the page uses pure CSS gradient swatches with only a washi strip on some — an agent may add tape/images to every card or seek cover art that doesn't exist.

**建议修复:**
- Document the 5 missing modules in the Module plan with their concrete content: metrics/big_numerals (7 / 600+ / 12 / 9-languages tally cards), beliefs/numbered ('Four things I draw by' — the 4 sticky-numbered tenets), currently_building/now_block ('Now · June 26' ink-border card, 3 checkmarked items), testimonials/quote_led (3 named sticky-note quotes), reading_list/list ('On the table this season', 4 books + status tags). Restore the real ordering: hero, selected_work, story, metrics, beliefs, currently_building, testimonials, reading_list, contact.
- Add the exact paper-texture recipe: body background-image = two faint radial-gradients (coral .04 + mint .05) + repeating-linear-gradient(0deg ...31px/32px, blue .18) for notebook rules + inline SVG feTurbulence fractalNoise baseFrequency 0.9 saturate 0 at opacity .045 — and say to layer ALL of them, not either/or.
- Specify the wobbly ink border as an asymmetric border-radius (e.g. 255px 14px 225px 12px/14px 235px 12px 255px) + hard offset box-shadow (3px 5px 0 -1px), and washi tape as a 45deg repeating-linear-gradient stripe over the washi color rotated +/-32deg at corners.
- Tell the agent to draw underlines/arrows/dividers as inline SVG bezier paths in coral (give the .uline pattern: absolutely-positioned svg under the word, width 108%, wobbly cubic path), not CSS borders; and the award sticker as a clip-path starburst polygon, the contact panel as a clip-path torn-paper polygon.
- Name the 6 book titles + years (or all that should appear) and the exact hero eyebrow/H1/sub copy so content matches; add the --tight:14px token.
- Clarify book covers are pure-CSS gradient swatches (c1..c6 at 160deg) + a ::before organic-radius doodle ring — no cover images needed — and that the reveal restores each element's resting tilt via a per-element --tilt var (straighten-to-tilt, not straighten-to-0).


## illustration-brand  — fid 52 / qual 66 / high

**Module diff:** Prompt "Module plan" lists 5 modules: hero(split), selected_work(grid), metrics(pills), testimonials(cards), subscribe. index.html actually ships 10 data-module sections PLUS an untagged nav header. The 5 documented modules are all present, but the page adds 5 entire undocumented sections between testimonials and subscribe: services(list), beliefs(principles_list), tools(stack_list), currently_building(now_block), faq(accordion). An agent with only the prompt would build a page roughly HALF the length of the real one — missing the entire product-marketing middle. Within documented modules there is drift too: selected_work renders 6 cards (5 named templates + a "whole bundle" card) not 5; metrics shows 4 pills (prompt says "3-4"); subscribe is tagged variant="inline" (prompt unstated); nav header with brand mark + links + CTA is undocumented.

**Prompt 缺失的模块:**
- services (variant=list): 3 service rows — Team Workshop $1,800 / 1:1 System Audit $420 / Office Hours free-for-buyers, each emoji icon tile + title + blurb + price + tag
- beliefs (variant=principles_list): 2x2 grid of 4 numbered 'rules' cards (01-04) with faint corner spot-SVG ornament
- tools (variant=stack_list): 4 dashed-divider rows of pill chips grouped by category (Build/Teach/Write/Stay calm)
- currently_building (variant=now_block): two-column pastel panel with a live green pulsing dot 'Now · Updated May 2026' tag, location line, and 3 status items
- faq (variant=accordion): centered <details> accordion, 4 Q&As, rotating +->x chevron in an accent-soft tile, first item open
- nav header (untagged): brand lockup (rounded coral 'T' mark + name) + nav links + a primary CTA button

**Photo 契约 OK:** True — Accurate. Page uses local portrait.webp with class u-photo inside a white-framed hero-photo-card, a u-fallback (TN initials blob with name+tagline), the exact CSS toggle rules (incl the scoped body.no-photos .hero-fallback{display:grid !important}), and the fixed bottom-right 照片 Photos toggle + script — all matching the prompt verbatim. Prompt correctly frames the portrait as a hero spot-illustration, not a face photo.

**Token:** Colors, fonts, type scale and spacing in prompt match index.html :root and DESIGN.md almost exactly (canvas #fffdf9; accent #ff5a5f/#e8474c/#ffe3e0; all surface/ink tokens; Plus Jakarta Sans 400-800; display-xl 64/1.05/-1.6px 800; section 104 / block 36; radii 12/20/32/999). Drift: (1) prompt omits the two shadow tokens the page leans on heavily — --shadow-card:0 18px 40px -22px rgba(40,30,30,.32) and --shadow-soft:0 10px 30px -16px rgba(40,30,30,.22) (warm-tinted, core to the look). (2) Three non-token decoration colors recur — #7c6cf0 (purple), #19b87a (mint-green), #eaf3ff (sky for t-blue tiles) — on squiggles/rings/avatars/dots/free states; prompt never names them and the one-color rule forbids them, so a literal reading would omit them. (3) eyebrow is uppercase coral with a rounded accent-soft swatch ::before; prompt gives eyebrow tokens but not that treatment.

**缺失的 Signature 技术:**
- Hero headline highlight: .hl span is accent-colored with a pill-shaped accent-soft 'marker' swept behind via ::after (height .34em, bottom .04em, z-index -1) — the signature 'messy brains' highlighter. Prompt never describes it.
- Organic blob behind hero art: absolutely-positioned div with asymmetric border-radius 46% 54% 58% 42%/52% 44% 56% 48% filled by 3-stop linear-gradient(surface-warm->accent-soft->surface-lilac)+saturate(1.05). Prompt only says 'soft pastel blob'.
- Photo framing: hero-photo-card has 6px solid white border + r-lg + shadow-card + mint backing; img aspect-ratio 4/4.6, object-position 50% 18%. Unspecified.
- Floating sticker pills + inline-SVG ornaments (star/squiggle/ring) absolutely placed around hero, animated by @keyframes float (translateY -9px, 5.5s) with negative animation-delays to desync. Prompt says 'subtle float' but gives no keyframe, amplitude, timing, or SVG path vocabulary.
- Scroll reveal: .reveal{opacity0; translateY(22px) scale(.97)} -> .in via IntersectionObserver (threshold .12, rootMargin -8% bottom), transition .55s cubic-bezier(.2,.7,.3,1). Prompt says 'gentle pop (scale+fade)' but not the exact transform/curve/observer config.
- Per-section ornament system: every section heading carries an absolutely-positioned line-art .head-spot SVG top-right (hidden <760px); beliefs cards carry a faint opacity .18 corner spot-SVG. This sprinkling is THE identity and is only gestured at as 'sprinkle one small spot illustration'.
- Rotating-pastel rhythm: thumbnail tiles t-warm/t-mint/t-lilac/t-coral/t-blue with 40px emoji thumbs; metric .ic tiles + testimonial avatars each a different pastel/solid bg.
- now_block 'live' indicator: green dot with box-shadow ring 0 0 0 4px rgba(25,184,122,.18) reading as a pulse. Undocumented.
- faq chevron: accent-soft rounded tile with '+' rotating 45deg to 'x' on [open]. Undocumented.
- Warm-tinted shadows (rgba(40,30,30,…)) not neutral grey — gives the friendly depth; unspecified.

**矛盾:**
- DNA/Tokens say 'one brand color, never a second main color' and avoid-list includes more_than_one_brand_color — but the page uses #7c6cf0 (purple), #19b87a (green) and #eaf3ff (sky) as recurring decorative accents (squiggles, rings, avatars, dots, green live/free states, t-blue thumbnail). An agent obeying the one-color rule literally would produce a more monochrome coral page than index.html.
- Prompt Module plan implies the page ends at subscribe right after testimonials (5 modules), but index.html has 5 more full sections in between — the documented structure contradicts the page's actual shape/length.
- Prompt says selected_work = grid of 'the 5 templates'; page renders 6 cards.
- DNA avoid-list says avoid 'purple gradients' yet purple #7c6cf0 squiggles appear (not gradients, but tonally near the warned-against thing) — mild tension.

**建议修复:**
- Add the 5 missing modules to the Module plan WITH content: services(list)=3 offers (Team Workshop $1,800 'Up to 12 people', 1:1 System Audit $420 '2 sessions', Office Hours 'Free for buyers' Monthly); beliefs(principles_list)=2x2 of 4 numbered rules (give the four one-liners); tools(stack_list)=4 dashed rows grouping Notion/Make/Zapier · Loom/Figma/Descript · Beehiiv/Gumroad/Obsidian · Things3/Cal.com/paper; currently_building(now_block)=two-col panel, live green dot 'Now · Updated May 2026', Lisbon, 3 items; faq(accordion)=4 Q&As incl 30-day refund, first open. Also add the nav header (brand mark + links + Book-a-workshop CTA).
- Document the hero highlight technique: '.hl span colored accent with a pill-shaped accent-soft marker swept behind via ::after (height ~.34em, bottom .04em, z-index -1)'.
- Specify the organic blob: absolutely-positioned, asymmetric border-radius 46% 54% 58% 42% / 52% 44% 56% 48%, 3-stop linear-gradient surface-warm->accent-soft->surface-lilac, slight saturate; plus the 6px white photo frame with shadow-card.
- Add the two shadow tokens (--shadow-card:0 18px 40px -22px rgba(40,30,30,.32); --shadow-soft:0 10px 30px -16px rgba(40,30,30,.22)) and note shadows are warm-tinted, not grey.
- Reconcile the one-color rule: state the page uses ONE brand color (coral) for emphasis but permits a small fixed palette of decorative-only accents — purple #7c6cf0, green #19b87a, sky #eaf3ff — for squiggles/rings/avatars/dots/free states; or remove them from the page.
- Pin the motion: '.reveal opacity0 + translateY(22px) scale(.97) -> revealed via IntersectionObserver (threshold .12, rootMargin -8% bottom), .55s cubic-bezier(.2,.7,.3,1); decorative SVG/sticker float keyframe translateY -9px over 5.5s with desynced negative delays'. Also note 6 template cards (with prices + 'Flagship·4.9★' badge) and 4 metric pills.


## maximalist-collage  — fid 52 / qual 62 / high

**Module diff:** Prompt's Module plan lists only 4 modules (hero, selected_work, selected_quotes, contact). The page actually ships 10 tagged modules plus a decorative top marquee strip. The 6 entirely undocumented modules — metrics/big_numerals, beliefs/numbered, experience/timeline, currently_building/now_block, tools/stack_list, credentials/pills — are roughly 60% of the page's vertical height. An agent given only the prompt would produce a ~4-section page and miss more than half the content. Additionally, the prompt's selected_work entry calls for a "masonry collage" (CSS columns masonry) but the page tags it data-variant="grid" (it does use CSS columns:3, so the visual matches but the variant label disagrees), and the prompt's selected_quotes/large_type description (huge rotated display type on torn scraps) under-describes the actual dark full-bleed inverted band with a special .big quote treatment.

**Prompt 缺失的模块:**
- metrics / big_numerals (4 rotated stat tiles: 340+, 11, 2x, 9yr with double-offset text-shadow on big numerals)
- beliefs / numbered (House rules: 4-item numbered manifesto on a full-bleed blue band with rotated number badges)
- experience / timeline (How I got loud: 3 rotated timeline cards with year pill + italic 'where' line)
- currently_building / now_block (Right now: single lime now-card with arrow bullets + corner Now flag)
- tools / stack_list (The kit: ~8 rotated tool chips cycling through scrap colors)
- credentials / pills (Stamps & stickers: 7 rotated pills with italic year on a dark band)
- topstrip decorative marquee (MORE IS MORE / ZINES·POSTERS·COVER ART scrolling-style ink bar with alternating yellow/lime spans + accent bottom border)

**Photo 契约 OK:** True — Accurate. Prompt correctly specifies portrait.webp on a u-photo img treated as the ripped/taped collage centerpiece, a u-fallback (color scrap + typographic name-plate) for photos-off, the exact .u-fallback/body.no-photos CSS, and the verbatim fixed toggle widget+script. Matches index.html (which adds a scoped body.no-photos .portrait-stage .u-fallback{display:flex} restore — the prompt does mention adding scoped grid/flex restores, so this is covered). One nit: the file uses portrait.webp as in the prompt, but the img alt frames it as poster artwork ('WE THE PEOPLE' riso poster) rather than a face — the prompt says 'meaningful alt' but doesn't note the portrait is treated as artwork, not a headshot.

**Token:** Color tokens match exactly between prompt, index.html :root, and DESIGN.md (ground #f4ead5, accent #ff2e63, accent-2/scrap-blue #1b3bff, tape rgba(214,196,140,0.72), all scrap colors). Fonts and the Google Fonts link match. Gaps: the prompt omits the load-bearing shadow tokens that define the whole 'pasted' look — --shadow:6px 7px 0 rgba(22,20,15,.9), --shadow-soft:3px 4px 0 rgba(22,20,15,.55) (hard offset, zero-blur drop shadows). It also omits --sticker-edge:#ffffff and --r-md:3px. Type scale is given as fixed px (display-xl 86px etc.) but the page uses responsive clamp() everywhere (clamp(54px,12vw,118px) for the name, clamp(34px,7vw,72px) for h2s) — an agent following the px figures would build a non-fluid, differently-sized hero.

**缺失的 Signature 技术:**
- Hard zero-blur offset shadows on every layer (6px 7px 0 / 8px 10px 0 rgba(22,20,15,.9)) — this is THE signature 'pasted paper' look; prompt only says 'casts a hard shadow' without the offset/blur-0 recipe or token values
- Layered colored text-shadows for stacked-type: name uses text-shadow:5px 5px 0 var(--scrap-pink),9px 9px 0 var(--accent); section h2s use 4px 4px 0 var(--scrap-lime) (and per-section the offset color changes: blue/orange/pink). Prompt never specifies this multi-color drop-letter technique
- The busy patterned ground recipe: 5 stacked background-images (radial dot grid + two repeating-linear-gradient 34px grids + two corner radial color washes) with specific background-size 17px/34px. Prompt says 'dots/grid/stripes via CSS gradients' but gives no recipe — agents will improvise a weaker ground
- Torn-edge clip-path polygons: the scrap .torn::after uses a ~20-point sawtooth polygon; the portrait-card uses a specific ragged right-edge clip-path polygon. Prompt says 'clip-path polygons' generically with no example polygon, so reproductions will look smooth/uniform
- Tape strip styling: semi-transparent var(--tape) rect with dashed left/right borders + backdrop-filter:saturate(1.2) + corner-positioned rotations (.tl/.tr/.bl/.br at -32/28/14/-18deg). Prompt says 'semi-transparent rotated rectangles' but omits dashed edges, backdrop-filter, and corner placement
- Sticker recipe: radial-gradient(circle at 38% 32%,#fff5,transparent 42%) highlight over solid color + 4px white ring border. Prompt says 'radial gradients + white ring' but not the off-center highlight coords that make it read as a glossy crusty sticker
- Per-child nth-child rotation system: nearly every repeated element (.work, .stat, .creed li, .tool, .pill, .tl, .links a) gets alternating rotations via :nth-child rules (e.g. -2.2/1.6/-0.8deg). Prompt says 'crooked angles' but doesn't prescribe the systematic per-item alternation that creates the consistent scrapbook rhythm
- Reveal motion is rotation-preserving: .reveal uses --rot per element so settle-in animates translateY+opacity while keeping each scrap's resting tilt (transform:translateY(0) rotate(var(--rot))). Prompt says 'scraps settle-in' but not the --rot custom-property mechanism, so naive reveals will snap items to 0deg and kill the tilt
- box-decoration-break:clone on the highlighted thesis line so the ink highlight wraps cleanly across lines — a specific detail that makes the 'More is more.' block read as a marker swipe
- Full-bleed inverted bands: quotes/beliefs/credentials sections invert to dark ink or blue grounds with accent top/bottom borders (border-top:4px solid var(--accent)) — a structural rhythm device the prompt never mentions

**矛盾:**
- Prompt Module plan labels selected_work as 'masonry collage'; page tags it data-variant="grid" (visual is CSS columns, but the documented variant name disagrees with the page).
- Prompt's selected_quotes is described as light torn scraps with 'huge rotated display type'; the page actually renders this on a full-bleed DARK ink band with accent borders and inverted color — the prompt's description would lead an agent to build a light section, changing the page's structural rhythm.
- Type tokens are stated as fixed pixel sizes (display-xl 86px, display-serif 64px, scrap-head 28px) but every headline in the page is fluid clamp() — following the prompt literally yields non-responsive type that doesn't match the page at any width.

**建议修复:**
- Expand the Module plan from 4 to the full 11 sections in page order — add a decorative topstrip marquee, plus metrics/big_numerals, beliefs/numbered, experience/timeline, currently_building/now_block, tools/stack_list, credentials/pills between selected_quotes and contact — each with one line of layout intent AND the actual copy (the 4 stats, 4 house rules, 3 timeline stops, 3 now-items, 8 kit tools, 7 credential pills) so agents don't invent filler.
- Add a 'Section header pattern' note: italic DM Serif number (01–08, rotated -6deg) + Archivo Black uppercase clamp(34px,7vw,72px) h2 with a colored hard text-shadow whose color rotates per section (lime/blue/orange/pink) + an optional right-aligned label.
- Add the hard-shadow tokens to the Tokens list and call them load-bearing: --shadow:6px 7px 0 rgba(22,20,15,.9), --shadow-soft:3px 4px 0 rgba(22,20,15,.55) (offset, zero-blur) — state that EVERY scrap/card/sticker uses these and headlines get layered colored text-shadows (e.g. 5px 5px 0 pink, 9px 9px 0 accent).
- Give the busy-ground recipe verbatim: stacked radial dot grid (background-size 17px) + two repeating-linear-gradient 34px line grids + two corner radial color washes (pink top-left, blue bottom-right). And give one concrete torn-edge clip-path polygon example so torn edges look ragged, not smooth.
- State that type sizes are fluid clamp() not fixed px (give the hero name clamp(54px,12vw,118px) and h2 clamp(34px,7vw,72px) as anchors), and add the per-item :nth-child alternating-rotation rule and the --rot-preserving reveal mechanism (reveal animates translateY/opacity while keeping each item's resting tilt).
- Fix the two contradictions: relabel selected_work to variant 'grid' (or note masonry==CSS columns) and describe selected_quotes as a full-bleed DARK inverted band with accent top/bottom borders and a .big uppercase-Archivo quote variant; note the portrait is treated as poster artwork, not a headshot, in its alt.


## memphis-postmodern  — fid 52 / qual 66 / high

**Module diff:** Prompt documents a 5-module plan (hero, selected_work, metrics, testimonials, contact). The actual page ships 14 data-module sections plus a footer. The prompt covers only 5 of 14 modules (~36%). An agent given only prompt.md would build a short 5-section page; the real page is roughly 3x longer with a sticky nav, services, beliefs, big quote, now-block, tools, credentials, and FAQ. This is the single biggest reproducibility gap: the page reads as a full long-form site, the prompt as a short landing page.

**Prompt 缺失的模块:**
- nav (split) — sticky top bar: yellow rotated brand chip 'Studio Salas' + 6 pill nav links (cyan/magenta accents), border-bottom 3px
- services (cards) — 'Three Ways To Get Loud': 3 colored cards with rotated square number badge, body copy, and an ink price pill (From $6k / From $2.5k / $390)
- beliefs (numbered) — 'Four Things I Refuse To Negotiate': 4 rows with circular colored number badge + heading + body, alternating tilt
- selected_quotes (large_type) — yellow rounded bigquote panel with Archivo all-caps blockquote, magenta stroked quote-mark, ink cite pill, decorative ::before/::after circle+square
- currently_building (now_block) — 'What's On The Table This Month': 3 now-cards with colored status tags (Building/Designing/Reading)
- tools (stack_list) — 'What I Actually Reach For': pill-cloud of 9 rotated colored pills (Illustrator … 'A very loud Pantone book')
- credentials (list) — 'Awards, Talks & Other Loud Noises': 4 li rows with ink year pill + bold title + description, border-bottom dividers
- faq (two_column) — 4 faq-items, each with magenta circular '?' badge, alternating tilt
- social_links (text_row) — 5 colored rot-on-hover link pills (Instagram/Behance/Dribbble/Are.na/YouTube)
- footer — border-top, centered copyright in Archivo uppercase
- contact variant is cta_band (prompt just says 'contact', and the page wraps it in a cyan rounded contact-card with decorative ::before/::after shapes — not documented)

**Photo 契约 OK:** False — See photo_contract_note above.

**Token:** Color tokens match exactly (canvas #fbf7ee, surface #ffffff, ink #15130f, ink-muted #4a463d, cyan #2ad4d4, magenta #ff4fa3, yellow #ffd23f, accent/accent-hover, outline). Fonts match (Archivo + Poppins, same weights, same Google Fonts link). Spacing/rounded tokens match. Type scale is mostly right but stated as fixed px (display-xl 84px, display-md 40px, numeral 92px) whereas the page uses clamp() everywhere (hero h1 clamp(48px,11vw,92px), h2 clamp(34px,6vw,58px), numeral clamp(64px,12vw,92px)) — the prompt never tells the agent these are fluid/clamped, so an agent may hardcode and lose responsive scaling. Missing token-level details: --shadow-sm (4px) and --shadow-lg (10px) variants (prompt only gives the 6px shadow), --maxw:1200px, and the eyebrow letter-spacing/numeral letter-spacing nuances.

**缺失的 Signature 技术:**
- Dotted paper texture: body background radial-gradient(var(--ink) 1px, transparent 1.4px) at 28px tile, then a fixed body::before with canvas color at opacity .93 to 'whisper' the dots down — prompt says 'cream paper' but never specifies this dot-grid texture trick
- Two-tone hard shadows on metrics: each metric block has box-shadow offset in a CONTRASTING palette color (cyan block → yellow shadow, yellow → magenta, magenta → cyan), not the default ink shadow — a key Memphis move the prompt doesn't mention
- Outlined/stroked headline highlight: .hl uses -webkit-text-stroke:2px outline + paint-order:stroke fill on the magenta word 'Refuses'; .hl2 is a yellow boxed/rotated inline chip around 'Boring' — prompt says 'oversized all-caps headline' but not these two inline treatments
- Three SVG confetti pieces are hand-drawn paths: a magenta squiggle (multi-bezier wave), a 3x4 black dots-grid, a cyan zigzag — plus CSS-only shapes (cyan circle, CSS-triangle yellow with drop-shadow(3px 3px 0) outline, rotated magenta square, yellow quarter-arc via border-radius:50% 50% 50% 0). Prompt lists the shape vocabulary but not that the triangle uses a CSS border-triangle with a drop-shadow outline, nor the quarter-arc border-radius trick
- Floaty animation: .float elements animate translateY -12px over 6s with staggered animation-delays, preserving each shape's base rotation via a --rot CSS var — prompt says 'pop-in + tiny wiggle' but not the continuous floaty bob on the hero shapes
- Scroll reveal system: .reveal opacity:0/translateY(24px) → .in via IntersectionObserver (threshold .12, rootMargin -40px), and .reveal.in.wiggle fires a one-shot @keyframes wig rotate(-1.4deg→1deg→0). Prompt mentions wiggle-on-scroll but not the exact reveal+wiggle mechanism or that nearly every card carries class 'reveal wiggle'
- Button micro-interactions: .btn:hover translate(-2px,-2px) + grows shadow to 10px; :active 'press' translate(3px,3px) + collapses shadow to 2px — the tactile sticker-press feel is absent from the prompt
- Per-tile/-card tilt values: tiles alternate rotate(-2deg)/2deg/-1.5deg/1.5deg/1deg/-2.5deg and straighten to rotate(0) on hover with !important; metrics/quotes/svc/beliefs/now/faq all carry small alternating rotations — prompt says 'tilt slightly' but gives no system
- Decorative ::before/::after ornaments on big panels: contact-card, bigquote, and the fallback monogram each spawn an off-edge circle + rotated square in accent colors via pseudo-elements — a signature framing device not described
- Section-tag system: every section opens with a colored rounded 'section-tag' pill (cyan/yellow/magenta) — a consistent labeling device the prompt never mentions

**矛盾:**
- Prompt 'Module plan' explicitly orders 5 modules ending at contact; the page interposes 9 more modules (services, beliefs, quote, now, tools, credentials, faq, social, plus nav/footer) — an agent obeying the plan literally would produce a materially shorter, different-IA page.
- Prompt type scale states fixed px (84/40/92) while the page is fully clamp()-based fluid type — following the prompt literally yields non-fluid headings.
- Prompt describes the image only as 'the assigned quirky illustration' with no concept, but the page commits to a specific cow-in-a-condo illustration + caption gag woven through the copy.

**建议修复:**
- Expand the Module plan from 5 to the full 14 modules with their exact variants and real copy: add nav(split), services(cards, with the 3 priced offers), beliefs(numbered, the 4 house rules), selected_quotes(large_type, the crit quote), currently_building(now_block, 3 cards), tools(stack_list, the 9 pills), credentials(list, the 4 dated awards), faq(two_column, the 4 Qs), social_links(text_row, 5 links), contact(cta_band), and footer — including the actual headings and item text so the agent doesn't invent filler.
- Document the contrasting two-tone hard shadows: 'metric/quote blocks use a hard offset shadow in a DIFFERENT palette color than the block (cyan block → yellow shadow, yellow → magenta, magenta → cyan)', not the default ink shadow.
- Specify the dotted-paper texture: body background:radial-gradient(var(--ink) 1px, transparent 1.4px); background-size:28px 28px; then a fixed body::before of canvas at opacity .93 to soften it.
- State that the type scale is clamp()-based fluid type (give the hero h1 clamp(48px,11vw,92px), h2 clamp(34px,6vw,58px), numeral clamp(64px,12vw,92px)) rather than fixed px; add the missing --shadow-sm 4px / --shadow-lg 10px / --maxw 1200px tokens.
- Replace the generic 'assigned quirky illustration' with the concrete concept used: a framed 'cow in a condo' illustration, rotate(3deg) frame, with an absolutely-positioned rotated magenta caption chip 'Yes, a cow in a condo.', and note the matching 'Cow Condo' work tile so the running gag survives.
- Pin the headline inline treatments and shape construction: .hl = magenta word with -webkit-text-stroke:2px + paint-order:stroke fill; .hl2 = yellow boxed rotated inline chip; triangle via CSS borders + drop-shadow(3px 3px 0 outline); quarter-arc via border-radius:50% 50% 50% 0; plus the 3 hand-drawn SVG confetti paths (squiggle/dots-grid/zigzag).
- Describe the full motion stack: continuous floaty bob (translateY -12px, 6s, staggered delays, preserve base rotation via --rot) on hero shapes; IntersectionObserver reveal (opacity/translateY → .in); one-shot wiggle keyframe on .reveal.wiggle cards; and button hover/active press (translate + shadow grow/collapse).


## neo-saas  — fid 52 / qual 68 / high

**Module diff:** Prompt documents 6 modules (hero, logos_press, selected_work, metrics, currently_building, contact). The page actually ships 13 data-module sections. 7 entire modules are undocumented: experience/timeline, tools/stack_list, beliefs/numbered, testimonials/cards, selected_quotes/large_type, writing/list, faq/two_column. The prompt's order also stops at currently_building→contact, but the real page interleaves experience+tools+beliefs BEFORE currently_building, then testimonials, quote, writing, faq, contact. Variant names also drift: prompt says hero "bold_statement + CTA" (page = bold_statement), logos_press is "mentioned_in" in page (prompt unnamed), contact is "cta_band" centered (prompt frames as a left-aligned conversion block). An agent following the prompt would produce a ~6-section page roughly 45% the length of the real one.

**Prompt 缺失的模块:**
- experience / timeline (3-item career trail: Founder, Stripe, Postlight)
- tools / stack_list (3-column Build/Ship/Think toolbelt with mono notes)
- beliefs / numbered (4 numbered principles with accent-soft number chips)
- testimonials / cards (4 quote cards with mono-initial avatars)
- selected_quotes / large_type (centered 34px display quote band)
- writing / list (4-row essay list with hover slide + arrow)
- faq / two_column (4 Q. items, mono accent Q marker)
- site-head sticky nav header + brand mark (not a data-module but a load-bearing structural element)
- footer with mono tagline

**Photo 契约 OK:** True — Accurate. Page uses local portrait.webp with class u-photo, a u-fallback indigo-gradient tile with "AM" initials, the fixed atlas toggle (#atlasPhotoBtn, default On), and the exact display/!important CSS. The prompt describes all of this correctly, including the gradient+initials fallback — no contradiction (it does NOT say "no remote image / use SVG avatar"). One small gap: the page also overlays a floating "2 products · live in production" stat card (.float-card) on the photo frame, which the prompt never mentions.

**Token:** Colors, fonts, type scale, spacing and radii in prompt match index.html :root and DESIGN.md exactly (canvas/surface/surface-2/ink trio/accent/accent-hover/accent-soft/hairline; Inter+IBM Plex Mono; display-xl 60/1.05/-1.8, display-md 32, stat 38, body 17/1.6, label 12 mono, badge 13; section 96 / block 32 / tight 14; rs 8 / rm 12 / pill 999). Missing from prompt: the two named shadow tokens --shadow-card (0 1px 2px + 0 4px 16px -8px) and --shadow-lift (0 2px 4px + 0 14px 32px -12px rgba(91,91,214,.22)) — the indigo-tinted lift shadow is a big part of the look. Also the secondary gradient stop colors (#7c7cf0, #9a8cf5, #f0f1fb, #f8f9fb) used in the brand mark, fallback, build-card and hero bg are never given.

**缺失的 Signature 技术:**
- Sticky frosted header: position:sticky + background:rgba(255,255,255,.82) + backdrop-filter:saturate(160%) blur(10px) + hairline border — never mentioned
- Gradient brand mark: 26px rounded tile, linear-gradient(140deg,accent,#7c7cf0), white 'A' — not in prompt
- Hero ::before radial glow: 520px circle radial-gradient(rgba(91,91,214,.10),transparent 68%) bleeding off top-right corner — the prompt says 'faint indigo wash behind headshot' but not this corner-bleed hero glow
- Headshot ::before wash: inset:-18px radial-gradient at 70% 20% behind the photo frame
- Floating overlay stat card (.float-card) pinned bottom-left of the photo with green status dot — a signature SaaS-hero detail, absent
- Indigo-tinted lift shadow on card/photo hover (--shadow-lift with rgba(91,91,214,.22)) giving the 'indigo edge' — prompt says 'indigo edge' but not the colored shadow
- Pulsing status ring: .pulse::after expanding-ring keyframe (scale .6→1.7, opacity fade) on currently_building — prompt says 'pulsing dot' but not the ring technique
- Card hover = translateY(-3px) + border-color:accent + shadow-lift swap
- Mono-everywhere micro-labels: section eyebrows use '// label' slash prefix (e.g. '// selected work') — prompt only hints '// founder' once
- Reveal animation specifics: translateY(14px)+opacity .6s cubic-bezier(.2,.7,.3,1), IO threshold .12 rootMargin -8% — prompt says '≤14px rise+fade' but not the easing/observer config
- build-card gradient linear-gradient(135deg,surface,#f0f1fb) and hero bg 3-stop gradient (#fff→#f8f9fb→surface)
- List/post hover: padding-left slide + arrow translateX (writing module); FAQ mono 'Q.' accent marker

**矛盾:**
- Prompt Module plan ends at 6 sections and orders contact right after currently_building; the page has 7 more modules and a different order (experience/tools/beliefs come before currently_building). An agent obeying the prompt's explicit ordered list would build a materially different, much shorter page.
- Prompt says metrics third stat is 'ex-Stripe · YC' with caption pattern; page caption is 'where I learned to ship' — minor but the prompt's stated caption ('mono captions' generic) under-specifies.

**建议修复:**
- Expand the Module plan to all 13 sections in actual page order (hero, logos_press, selected_work, metrics, experience/timeline, tools/stack_list, beliefs/numbered, currently_building, testimonials/cards, selected_quotes/large_type, writing/list, faq/two_column, contact/cta_band) and supply the concrete copy for each (timeline roles, 12 tools, 4 principles, 4 named testimonials, quote, 4 essay titles, 4 FAQs).
- Add the sticky frosted header + gradient brand mark: 'sticky top nav, rgba(255,255,255,.82) + backdrop-filter blur(10px), 26px brand tile linear-gradient(140deg,#5b5bd6,#7c7cf0).'
- Add the two shadow tokens verbatim: --shadow-card:0 1px 2px rgba(22,22,26,.04),0 4px 16px -8px rgba(22,22,26,.10); --shadow-lift:0 2px 4px rgba(22,22,26,.05),0 14px 32px -12px rgba(91,91,214,.22); and state card hover = translateY(-3px)+border-color:accent+shadow-lift.
- Specify the exact gradients (remove the hedging 'e.g.'): hero bg linear-gradient(180deg,#fff,#f8f9fb,#f5f6f8); hero ::before 520px radial glow rgba(91,91,214,.10) bleeding off top-right; headshot ::before wash; build-card linear-gradient(135deg,#f5f6f8,#f0f1fb); fallback linear-gradient(150deg,#5b5bd6,#7c7cf0,#9a8cf5).
- Document the floating overlay stat card on the photo ('.float-card pinned bottom-left, white, hairline border, green dot + "2 products / live in production"') and the pulse ring technique (::after expanding-ring keyframe) for the currently_building status dot.
- Pin the reveal motion precisely: translateY(14px)+opacity, .6s cubic-bezier(.2,.7,.3,1), IntersectionObserver threshold .12, and the mono '// label' slash-prefix convention for every section eyebrow.


## playful-rounded  — fid 52 / qual 68 / high

**Module diff:** The prompt's "Module plan" lists 5 modules in order: hero/split_portrait, metrics/pills, selected_work/grid, testimonials/cards, subscribe (conversion). The actual index.html ships 10 tagged data-module sections plus an untagged sticky nav and footer. So the page has 5 modules the prompt never mentions, and they account for roughly half the page's vertical length (the entire mid-section the agent would never know to build). The 5 documented modules DO appear in the page and in the right relative order, but four extra modules are interleaved between testimonials and subscribe, and the subscribe variant name differs (prompt implies a generic conversion block; page is data-variant=\"inline\"). An agent fed only the prompt would produce a much shorter page (hero → pills → 3 course cards → 3 testimonials → subscribe) — missing the beliefs creed, the /now block, the credentials timeline, the big-quote band, and the FAQ accordion entirely. That alone makes the output visibly not match.

**Prompt 缺失的模块:**
- beliefs / numbered — 3-card 'Three things I promise every learner' creed with rotated rounded number chips (1/2/3 in lavender-deep/peach-deep/mint-deep)
- currently_building / now_block — 'What I'm up to this month' surface-warm card with 2.5px peach border, a pulsing mint blink dot, emoji bullet list, and a Derek Sivers /now credit
- credentials / pills — 'A few things that built this room' horizontal flex-wrap of pill chips each with a colored year badge (2018–2025)
- selected_quotes / large_type — full-width mint→lavender gradient band with a giant decorative open-quote and a centered Fredoka blockquote
- faq / accordion — native <details>/<summary> accordion (4 Qs) with a rounded +/× icon chip that rotates 45deg on open
- the sticky blurred nav bar (brand with rotated mint dot + pill nav links + dark 'Join the community' CTA) is also undocumented

**Photo 契约 OK:** True — The prompt correctly describes the photo+toggle contract: u-photo on the image, u-fallback as a designed sticker/typographic block, default photos ON, and the three core display rules. It even matches the page's reality that the local file is portrait.webp (the page's <img src=\"portrait.webp\">), and notes the no-photos fallback must stay intentional. One small drift: the prompt says 'Use the toggle CSS + the .atlas-photo-toggle markup and script exactly as specified by the atlas contract' without inlining that markup/script, so an agent without the external 'atlas contract' must invent the fixed bottom-right toggle button — the page hard-codes specific .atlas-photo-toggle styling and a small IIFE the prompt never shows. The fallback's specific look (radial lavender→lavender-deep card, 'Hi, I'm Lola / come hang out' giant Fredoka) is also not described. No contradiction though — no 'CSS/SVG/initials, no remote image' error here.

**Token:** Color tokens, radii, spacing, and fonts match the page's :root and DESIGN.md exactly (all 13 hexes, r-sm/md/lg/pill, section 104 / block 36, Fredoka 500/600/700 + Nunito 500/600/700/800, the exact Google Fonts link). Type scale matches (display-xl 68 / display-md 36 / lede 21 / body 17 / eyebrow 13 / pill 15). Gaps: the prompt never states the two signature shadow tokens the page relies on for the 'pillowy' look (--shadow-soft 0 18px 40px -18px rgba(99,71,180,.35) and --shadow-card 0 22px 50px -24px rgba(99,71,180,.30)) — these violet-tinted soft shadows are core to the candy depth and an agent would default to flat gray box-shadows. The page's body background also layers three radial-gradient color blooms (lavender/peach/mint at low opacity, background-attachment:fixed) that the prompt does not mention. The spring easing curve cubic-bezier(.34,1.56,.64,1) used on buttons/cards/reveals is also unstated.

**缺失的 Signature 技术:**
- Soft violet-tinted shadow tokens (--shadow-soft / --shadow-card with rgba(99,71,180,...) and large negative spread) — the source of the pillowy candy depth; prompt only says 'soft drop shadows' generically
- Three fixed radial-gradient color blooms on body background (lavender 12%/8%, peach 88%/4%, mint 78%/92%, ~.16-.18 opacity, background-attachment:fixed) — creates the warm ambient candy wash; entirely absent from prompt
- Headline highlight technique: the .hl word gets a mint pill-radius bar drawn behind it via ::after (height:34%, bottom:6%, z-index:-1, opacity:.85) — the marker-highlight look on 'hanging out'; prompt only says 'oversized rounded headline'
- Spring/bounce easing is a specific curve cubic-bezier(.34,1.56,.64,1) reused on .btn, .course hover, and .rise reveals; prompt says 'spring/bounce' but never gives the curve so agents use ease-out and lose the overshoot
- Scroll-reveal mechanism: IntersectionObserver adds .in to each header/section, children carry .rise + staggered .d1–.d5 delays (translateY(22px) scale(.97) → none); prompt says 'spring on load' which implies a one-shot load animation, not staggered in-view reveals
- Sticker badges are absolute-positioned, individually rotated (-9deg/7deg/-4deg) white/mint/peach pills with emoji that peel off the hero card corners; prompt says 'sticker badges peeling off' but not the rotation values, white-pill style, or emoji
- Hero art card is itself rotated 2deg with a lavender→peach gradient backing and aspect-ratio 4/5; prompt says 'chunky rounded card' without the tilt or gradient
- Rotated rounded 'chip' motif (nav dot rotate -8deg, course tags rotate -3deg, avatar/number chips rotate -6deg, year badges) — the consistent slightly-off-axis sticker geometry that unifies the style; prompt mentions rotation only for hero stickers
- FAQ +/× icon chip rotates 45deg and recolors to lavender on [open]; large_type band's 200px ghost quotation mark; pulsing /now blink dot (animation:pulse) — all signature ornaments tied to undocumented modules
- Gradient bands for big-quote (mint→lavender) and subscribe (lavender→peach) with a large translucent white circle bleeding off the corner (::after) — the 'candy gradient card' finale; absent from prompt

**矛盾:**
- Minor: prompt's subscribe is described as a generic 'conversion' block; page tags it data-variant="inline" — naming mismatch but not a visual contradiction.
- Prompt 'Motion: gentle spring/bounce on load' implies an on-load animation, whereas the page uses scroll-driven IntersectionObserver in-view reveals with staggered delays — an agent following the prompt literally would animate everything once at load and the mid/lower page would not reveal on scroll the way the source does.
- No hard look-vs-page contradiction (no 'no-image' line conflicting with a real portrait — that trap is avoided here).

**建议修复:**
- Add the 5 missing modules to the Module plan with their copy: beliefs/numbered (3 promises), currently_building/now_block (3 /now bullets + Sivers credit), credentials/pills (6 year chips), selected_quotes/large_type (the philosophy quote), faq/accordion (4 Q&As) — plus the sticky nav and footer.
- Specify the shadow tokens verbatim: --shadow-soft:0 18px 40px -18px rgba(99,71,180,.35); --shadow-card:0 22px 50px -24px rgba(99,71,180,.30); and state that all cards/pills use violet-tinted soft shadows (not gray).
- Add the body background wash: three low-opacity radial-gradient blooms (lavender top-left, peach top-right, mint bottom-right, ~.16–.18, background-attachment:fixed) over --canvas.
- Name the spring easing curve cubic-bezier(.34,1.56,.64,1) and state it's reused on button hover-lift, card hover (translateY -8px), and the .rise reveals.
- Replace 'spring on load' with the real reveal mechanism: IntersectionObserver adds .in to each section; children use .rise (translateY(22px) scale(.97)→none) with staggered .d1–.d5 delays; respect prefers-reduced-motion by skipping.
- Specify the headline highlight technique (mint pill-radius bar behind the highlighted word via ::after, height ~34%, z-index:-1, opacity .85), the hero art-card tilt (rotate 2deg, lavender→peach gradient, aspect 4/5), and the rotated-chip motif (tags -3deg, number/avatar chips -6deg, nav dot -8deg).
- Inline the .atlas-photo-toggle markup + IIFE and describe the specific fallback card (radial lavender→lavender-deep, giant 'Hi, I'm Lola / come hang out 🫶') instead of deferring to an unshipped 'atlas contract'.


## soft-3d-clay  — fid 52 / qual 68 / high

**Module diff:** Prompt lists a 4-module plan (hero, selected_work, metrics, contact). The actual page ships 10 modules in this order: hero(bold_statement), selected_work(grid), metrics(pills), beliefs(numbered), currently_building(now_block), testimonials(cards), tools(grid), credentials(pills), faq(two_column), contact(cta_band). So the prompt under-documents the page by 6 entire sections — more than half the page. An agent fed only the prompt would produce a short 4-section page, missing the middle bulk (beliefs, now-block, testimonials, tools grid, credential pills, FAQ). Variant names also drift: prompt hero is described generically while page uses data-variant="bold_statement"; contact is "cta_band" in the page but the prompt just says "conversion".

**Prompt 缺失的模块:**
- beliefs (numbered) — three rules in numbered clay blocks with colored .bnum chips
- currently_building (now_block) — 'What's on the workbench' card with Sculpting/Collab/Learning chips + descriptions
- testimonials (cards) — 3 quote cards with big quote mark, monogram avatar (JC/RD/PT), name + role
- tools (grid) — 4-col studio-kit grid (8 tools) with rotating-color clay blob icons
- credentials (pills) — shows/awards as clay pills with a colored year badge (.yr)
- faq (two_column) — 4 Q&A items in a 2-col grid with a 'Q' pseudo-element marker

**Photo 契约 OK:** True — Prompt describes the photo+toggle contract accurately and matches the page: portrait.webp gets class u-photo with a meaningful alt, wrapped in the scene-window; u-fallback is a molded monogram ('M' in .mono) shown when photos are off; default photos ON; the three display:none/revert rules and the scoped body.no-photos .case-fallback{display:grid} restore are present. The prompt correctly tells the agent to add the fixed .atlas-photo-toggle widget + script verbatim, which the page has. No contradiction here — this is the strongest part of the prompt.

**Token:** Color tokens, fonts, rounded and spacing scales match :root and DESIGN.md exactly. Drift: prompt clay-shadow recipe shows 'inset 0 -8px 14px -6px' vs page's 'inset 0 -9px 16px -6px' (minor); and the prompt names only --clay while the page defines --clay, --clay-press, and --clay-inset — the latter two carry the squeeze and recessed-window identity and have no values in the prompt. Body background gradient and the 180deg top-light fill pattern are token-derived but never given concretely.

**缺失的 Signature 技术:**
- The recessed display-case window: scene-window uses --clay-inset (inset top soft-shadow + inset bottom highlight + 1px highlight) over a radial pastel gradient to fake a recessed shelf cavity — prompt says 'recessed look' but never gives the inset-shadow recipe
- --clay-press as a distinct named state (0 8px 18px -12px + tighter insets) used on hover to read as 'pressed into clay' — prompt only says 'tightened shadow'
- Body background = 2 radial-gradients (canvas-2 top-left, #e7f3ff top-right) layered over a 165deg linear canvas→#efe6ff→#ffeaf4, with background-attachment:fixed — the milky pastel floor; prompt says 'milky pastel floor' but gives no gradient
- Top-light fake = every fill is linear-gradient(180deg, lighter→token) e.g. pills #fff→#f1e6ff, drops #fff→pastel; prompt says 'lighter at top' but agents need the 180deg white-to-tint pattern stated
- Glossy clay-blob specular dot: radial-gradient(circle at 32% 28%, #fff 0 12-16%, transparent) layered under the color gradient on toy/blob/blob-i — the white hotspot that makes blobs read as 3D plastic; not in prompt
- Irregular organic border-radius on the brand/tool blobs (14px 16px 15px 17px) for a hand-pressed look — not mentioned
- Springy easing: transitions use cubic-bezier(.34,1.56,.64,1) (overshoot/bounce) on pills and the reveal cubic-bezier(.34,1.4,.64,1) — prompt says 'bounce back' but never gives a bouncy timing function
- Scroll reveal: .reveal opacity/translateY(22px) → .in via IntersectionObserver threshold .14 — prompt doesn't mention scroll-reveal at all
- Multi-layer float/bob keyframes: hero .scene floats 7s, decorative .dot dots bob at staggered 4.4/5/6s — prompt mentions 'gentle float on hero scene' but not the floating decorative dots or per-dot bob
- Dark status pill on light card (SOLD OUT uses #5e4b7e→#4a3b63 ink gradient) and dark monogram text-shadow 0 3px 0 rgba(143,40,90,.35) for molded depth — not specified

**矛盾:**
- Prompt fallback guidance says 'a big clay emoji-free character built from rounded CSS shapes, OR a molded monogram' — the page uses the monogram, so not a hard contradiction, but the prompt offers an alternative the page didn't take, leaving the fallback under-pinned.
- No direct content contradictions; the main issue is omission, not contradiction. Prompt metrics says '3–4 squishy stat pills (3 drops · all sold out · collabs · 80k followers)' which matches the page's 4 stats (3 / 100% / 5+ / 80k) closely.

**建议修复:**
- Expand the Module plan to all 10 sections in order with one concrete-content line each: hero, selected_work (3 named drops + editions), metrics (4 stats), beliefs (3 numbered rules), currently_building (3 now-items), testimonials (3 named quotes), tools (8-item grid), credentials (5 awards/year pills), faq (4 Q&As), contact (cta_band).
- Add all three shadow recipes verbatim: --clay (with the actual inset 0 -9px 16px -6px), --clay-press (0 8px 18px -12px ... for the pressed hover state), and --clay-inset (inset 0 6px 14px -4px shadow + inset bottom highlight + 0 1px 0 highlight) for the recessed display-case window.
- Specify the body background as concrete values: two radial-gradients (canvas-2 at top-left, #e7f3ff at top-right) over linear-gradient(165deg, canvas→#efe6ff→#ffeaf4), background-attachment:fixed.
- State the top-light fill rule explicitly: 'every surface = linear-gradient(180deg, white/near-white → its token tint)', and the glossy clay-blob hotspot: 'radial-gradient(circle at ~32% 28%, #fff 0 12-16%, transparent) layered under the color gradient' for toy/blob icons.
- Document the scroll-reveal: '.reveal elements start opacity:0 translateY(22px), IntersectionObserver (threshold .14) adds .in to fade+rise in with cubic-bezier(.34,1.4,.64,1); disabled under reduced-motion', plus the bouncy hover easing cubic-bezier(.34,1.56,.64,1).
- Add the decorative floating clay dots (3 dots, bob keyframe at staggered 4.4/5/6s) and the scene-tag '★ shelf no.1' pill to the hero spec, plus the dark SOLD OUT status pill (ink gradient) detail.


## swiss-minimal  — fid 52 / qual 58 / high

**Module diff:** Prompt documents a 5-module plan (hero, metrics, services, selected_work, contact). The page actually ships 10 tagged sections in this order: hero(minimal_centered-left), metrics(stat_row), currently_building/services(cards), selected_work(list), beliefs(numbered), experience(compact_list), testimonials(quote_led), tools(stack_list), faq(two_column), contact(cta_band). So 5 of the page's sections are entirely undocumented by the prompt (beliefs, experience, testimonials, tools, faq) — half the page. The prompt also omits the top bar/nav (header with brand + 5 nav links) and the footer. An agent given only the prompt would produce a much shorter page (~5 sections vs ~10 + chrome). Variant names also drift: prompt calls services 'services'/'currently_building', page tags it data-module="currently_building" data-variant="cards"; prompt calls metrics generic, page tags data-variant="stat_row".

**Prompt 缺失的模块:**
- beliefs (numbered) — 4 rules, accent-numbered grid rows
- experience (compact_list) — 4-row period/role/note track record
- testimonials (quote_led) — 2x2 bordered quote grid with accent quotation marks
- tools (stack_list) — category + mono chip lists (Discovery/Prioritization/Sequencing/Working tools)
- faq (two_column) — 4 Q&A in a two-column grid
- topbar header (brand avatar + 5-link primary nav, hairline-bottom)
- footer (mono name + © line, 12-col)
- essays sub-block inside selected_work (Writing label + 'Less, but load-bearing')

**Photo 契约 OK:** False — Direct contradiction. prompt.md Hard contract #2 says 'Avatar = CSS/SVG/initials only' and 'no other external assets'. But index.html ships a real local portrait.jpg used TWICE: in the topbar brand (26x26 square, hairline-strong border) and as the hero-portrait (clamp 150-190px square, hairline-strong border, positioned grid-column 10/span 3 in the hero). It also implements the full atlas photo toggle: img.u-photo + span.u-fallback (initials 'DR'), the fixed bottom-right '照片 Photos On/Off' button, body.no-photos rules, and the no-photos grid-restore for the brand initials. The prompt mentions none of this — no portrait, no u-photo/u-fallback contract, no toggle — and actively forbids the portrait. An agent following the prompt would build an initials-only page with no photo and no toggle, missing a visible identity element of the rendered sample.

**Token:** Color tokens, accent (#1452ff/#0a3fd1), hairlines, fonts (Inter 400/500/600 + IBM Plex Mono 400), and the Google Fonts link all match index.html :root and DESIGN.md exactly. Type scale mostly matches (display-xl 56/1.05/-1.6px 600; display-md 28; body 16/1.55; mono 13) but the prompt states fixed px where the page uses fluid clamp() for the hero headline (clamp(34px,6vw,56px)), metric figures (clamp(24px,3.4vw,34px)), contact-lead (clamp(24px,3.4vw,32px)) and section-head h2 (28px). Prompt omits several real tokens the page relies on: --maxw:1200px container, --pad:24px gutter, the 12-column .grid system, label letter-spacing 0.08em + uppercase, and the responsive breakpoints (900/600/380px) that down-step --section to 72/56px. Spacing 96/32/24 matches.

**缺失的 Signature 技术:**
- 12-column CSS grid with explicit column spans for EVERY section-head (index at col 1/span 2, h2 at 3/span 8, note at 11/span 2) — this grid-alignment is the core Swiss identity and the prompt only says 'grid-aligned' without the column math
- Hairline box grids: metrics/services/testimonials use border-left+border-top on the container and border-right+border-bottom on each cell to fake a 1px ruled table (avoids double borders) — under-specified
- Section-head pattern: each section opens with a hairline-STRONG (#0d0d0d) top rule + mono running index number (01..09) + right-aligned section-note — a signature device used 9x, not described in the prompt
- Tabular work list with grid-template-columns: 0.6fr 2.4fr 2.4fr 1.2fr and mono right-aligned results with accent .up spans — prompt says 'tabular list' but not the column ratios or accent figure treatment
- Accent-word span: hero headline ends with the thesis phrase wrapped in .accent-word (electric blue) — the single most prominent accent use, not specified
- Reveal-on-scroll: .reveal opacity0/translateY(10px) → IntersectionObserver adds .in with 80ms stagger and 0.5s ease, gated behind prefers-reduced-motion; smooth in-page anchor scroll — prompt only says 'almost no motion'
- Square hard-edged portrait with hairline-strong border, object-fit:cover, justify-self:end in the hero — the photo treatment
- Solid black (--ink) CTA button that flips to accent-blue background on hover (not a blue button by default); mono → arrow glyph; mono btn-note beneath — prompt just says 'a single CTA button'
- ::selection set to accent blue; links get a 1px currentColor bottom border (not underline) — small identity details
- service-list li::before '→' in accent; belief b-no in accent; quote blockquote ::before/::after curly quotes in accent — the disciplined places accent is allowed to appear

**矛盾:**
- prompt Hard contract #2: 'Avatar = CSS/SVG/initials only' — page ships portrait.jpg in brand AND hero
- prompt Hard contract #2: 'no other external assets' — page loads a local portrait.jpg image asset
- prompt implies a short 5-section page; page is a full 10-section site with topbar nav + footer
- prompt 'Almost no motion / motion: none-or-instant' vs page's actual IntersectionObserver reveal with 80ms stagger + 0.5s transitions + smooth-scroll anchors (motion-gated but present)
- prompt gives fixed px type sizes; page uses fluid clamp() for the four largest type roles

**建议修复:**
- Document all 10 modules in the Module plan in page order with exact variant ids: hero(minimal_centered-left), metrics(stat_row), currently_building(cards), selected_work(list), beliefs(numbered), experience(compact_list), testimonials(quote_led), tools(stack_list), faq(two_column), contact(cta_band) — plus topbar nav and footer.
- Remove/replace the 'Avatar = CSS/SVG/initials only' line: the page uses a local portrait.jpg in both the topbar brand and the hero. State the photo+toggle contract — img.u-photo (square, hairline-strong border, object-fit:cover) with span.u-fallback initials, default photos ON, and the fixed bottom-right '照片 Photos On/Off' toggle flipping body.no-photos.
- Add the secret-sauce techniques: (a) section-head device = hairline-STRONG top rule + mono running index (01..09) + right-aligned section-note, used on every section; (b) hairline box grids via border-left/top on container + border-right/bottom on cells; (c) explicit 12-col spans for section-head (1/2, 3/8, 11/2) and hero.
- Specify the CTA precisely: solid black (--ink) button, white text, mono → arrow, mono note beneath ('30 min · no deck · no obligation'); hover flips background to accent blue. And the hero .accent-word: wrap the closing thesis phrase in the electric-blue accent span.
- Add the missing concrete content blocks so the agent doesn't lorem: the 4 beliefs, the 4-row experience timeline (Ledgerline/Mapfield/Northbeam), 4 testimonials with named attributions, the method-stack chip groups, the 4 FAQ Q&As, and the 5 selected-work rows with exact results.
- Replace 'almost no motion' with the real spec: .reveal opacity0/translateY(10px) → IntersectionObserver .in, 80ms stagger, 0.5s ease, all gated behind prefers-reduced-motion; smooth in-page anchor scroll. Note hero type uses clamp() (e.g. clamp(34px,6vw,56px)), and add --maxw:1200px / --pad:24px and the 900/600/380px breakpoints.


## vibrant-gradient  — fid 52 / qual 63 / high

**Module diff:** Prompt's "Module plan" lists 5 modules: hero(bold_statement), metrics(big_numerals), selected_work(grid), testimonials(cards), subscribe. The actual index.html ships 11 tagged sections PLUS an untagged sticky glass nav: hero → metrics → selected_work → testimonials → logos_press(mentioned_in) → services(cards) → beliefs(numbered) → selected_quotes(large_type) → currently_building(now_block) → faq(accordion) → subscribe(cta_band). So 6 whole modules + the nav are completely undocumented, and the page is roughly twice as long as the prompt implies. An agent given only the prompt would build a short 5-section page and miss the entire mid-page substance (press chips, 3 priced service cards, 4 numbered beliefs, the big tinted quote, the pulsing "Now" block, the 4-item FAQ accordion).

**Prompt 缺失的模块:**
- logos_press / mentioned_in (6 glass press chips with gradient dot + role label)
- services / cards (3 numbered service cards with step badge, price 'from $Xk', corner-glow ::after)
- beliefs / numbered (4 numbered belief cards, gradient 01–04 numerals)
- selected_quotes / large_type (full-width tinted glass bigquote, gradient ::before overlay at .08 opacity)
- currently_building / now_block (glass now-card with pulsing coral dot, 'Now · Updated …' stamp, tagged now-list)
- faq / accordion (4 <details> with rotate(45deg) plus-to-x toggle)
- sticky glass top nav (nav.top with brand+dot, link pills, inline 'Work with me' primary button)

**Photo 契约 OK:** True — Prompt accurately describes the PHOTO+TOGGLE contract: local image is portrait.webp (matches the file on disk and the index.html src), u-photo img + u-fallback typographic/gradient hero, floating .atlas-photo-toggle, default photos ON, prefers-reduced-motion handling. Good. Two minor gaps: (a) the prompt does not give the literal toggle markup/script ("see contract block" is referenced but the actual fixed button + IIFE isn't pasted), and (b) the prompt describes the hero photo as "editorial bloom flowers" while the rendered sample.png clearly shows a person standing in/over a floral-framed scene — the alt text and prompt copy under-describe what the portrait actually depicts. Not a contradiction of the contract, but a content-fidelity wrinkle.

**Token:** Token fidelity is excellent and the strongest part of the prompt. Every :root color hex (canvas #ffffff, surface #fbfaff, glass rgba(255,255,255,0.62), glass-border 0.7, ink #16121f, ink-muted #5a5470, ink-subtle #8e88a6, indigo #5b5bff, magenta #d633ff, coral #ff6b5b, accent/hover, hairline) matches index.html and DESIGN.md exactly. Signature gradient linear-gradient(120deg,#5b5bff,#d633ff,#ff6b5b) matches. Fonts (Sora 600/700/800, Plus Jakarta 400/500/700) and the Google Fonts link match. Type scale (display-xl 80/1.02/-2.5, display-md 40, numeral 64, lede 22, body 17/1.65, eyebrow 13/+1.4) matches. Spacing/radii match. Tokens the page uses but the prompt never states: the --shadow value (0 24px 60px -24px rgba(91,91,255,.30), 0 8px 24px -16px rgba(214,51,255,.22)), the blob blur radius (70px) and opacities (.55/.4), backdrop-filter blur(18px) saturate(140%) on .glass.

**缺失的 Signature 技术:**
- Aurora is THREE separate fixed radial-gradient blobs (b1 indigo top-left, b2 magenta top-right, b3 coral bottom), each filter:blur(70px), opacity .55/.4, each with its own drift keyframe (translate 4–7vw + scale 1.08–1.15 over 22/26/30s) — prompt only says 'slowly drifting gradient blobs', not the count, per-color placement, blur radius, or scale-drift
- Glass recipe is specific: backdrop-filter:blur(18px) saturate(140%) + 1px glass-border + --shadow (dual indigo/magenta tinted shadow) — prompt says 'backdrop-blur … gentle shadows … thin highlight border' but never gives blur(18px)/saturate(140%) or the tinted shadow values
- Card corner-glow: work-card and svc use a ::after blurred gradient blob (150–160px, blur 36–40px, opacity .22–.28, rising to .45–.5 on hover) positioned in a corner — prompt mentions 'subtle gradient corner glow' for work but not the pseudo-element technique, blur, opacity, or the hover intensify
- Hero photo gradient RING: .photo-frame::before inset:-2px with var(--grad) behind the image creates a gradient border halo — not mentioned at all
- Gradient-text fill technique (background:var(--grad); -webkit-background-clip:text; text-fill-color:transparent) applied to keywords, numerals, results, belief numbers, quote marks — prompt says 'gradient text fill on key words' but doesn't give the clip-text recipe
- The .grain layer is actually a top white radial vignette (radial-gradient 120% 60% at 50% -10%, fading to white) that fades blobs near the top — misleadingly named, and absent from prompt; there is NO real grain/noise texture
- Now-block pulse: coral dot with expanding box-shadow keyframe (0 0 0 0 → 14px → 0) — undocumented
- FAQ accordion: details[open] rotates the +(.pm) badge to 45deg into an x — undocumented
- Button primary fill uses the gradient with background-size:160% and translateY(-2px) hover lift + magenta-tinted shadow — under-specified
- Scroll reveal is a .rise class (opacity0/translateY(24px) → .in) driven by IntersectionObserver threshold .14, rootMargin -8%, with reduced-motion fallback that adds .in immediately — prompt says 'gentle rise-on-scroll' but not the 24px distance, the cubic-bezier(.22,1,.36,1), or the IO config

**矛盾:**
- Prompt's Module plan jumps straight from testimonials (#4) to subscribe (#5), implying a ~5-section page; the actual page inserts 5 more full sections (press, services, beliefs, quote, now) between them — an agent following the plan literally would produce a structurally different, much shorter page
- Prompt frames subscribe as the closer with 'email capture + work-with-me link + social'; page matches but also relies on a sticky nav CTA and a now-block 'Open to one slot' that the prompt never mentions — the conversion surface is richer than described

**建议修复:**
- Expand the Module plan to all 11 sections in page order, each with its variant and 1-line content spec: add logos_press(mentioned_in, 6 chips), services(cards, 3 priced cards), beliefs(numbered, 4), selected_quotes(large_type, 1 tinted quote), currently_building(now_block, pulsing dot + 4-item list), faq(accordion, 4 Q&As), plus the sticky glass nav with brand+dot and inline CTA
- Paste the concrete copy: the 4 metric pairs (3/50M+/1M+/DTC + labels), the 4 work projects with their exact result lines, the 3 named testimonials, the 3 services + prices, the 4 beliefs, the desk-rule quote, the Now list, and the 4 FAQ entries — so the agent can't fall back to invented content
- Specify the aurora precisely: 'three fixed radial-gradient blobs — indigo top-left, magenta top-right, coral bottom — each filter:blur(70px), opacity ~.5, each drifting on its own 22–30s keyframe (translate ~5vw + scale 1.08–1.15)'. Add the top white vignette overlay (rename away from 'grain').
- Give the glass recipe and shadow tokens explicitly: backdrop-filter:blur(18px) saturate(140%), 1px glass-border, dual tinted --shadow (0 24px 60px -24px rgba(91,91,255,.30), 0 8px 24px -16px rgba(214,51,255,.22)).
- Document the card corner-glow technique (::after blurred gradient blob ~150px, blur ~38px, opacity .22–.28 → .5 on hover) and the hero photo gradient ring (.photo-frame::before inset:-2px var(--grad)).
- Specify scroll reveal mechanics (.rise: opacity 0 + translateY(24px) → .in via IntersectionObserver, threshold .14, ease cubic-bezier(.22,1,.36,1)) and the now-block pulse + faq plus→45deg toggle; and inline the actual photo-toggle markup/script instead of 'see contract block'.


## y2k-vapor  — fid 52 / qual 68 / high

**Module diff:** Prompt documents a 4-module plan (hero → selected_work → metrics → contact). index.html actually ships 10 sections: hero/split_portrait, selected_work/grid, metrics/stat_row, story/quote_led, beliefs/numbered, experience/timeline, tools/stack_list, testimonials/quote_led, selected_quotes/large_type, contact/cta_band. So 6 entire modules (story, beliefs, experience, tools, testimonials, selected_quotes) — the whole middle of the page, sections 03–07 plus the big-quote band — are absent from the prompt. An agent following the prompt would produce a 4-section stub roughly 40% the length of the real page. The prompt also mislabels the hero variant ('glitch_title + portrait' vs actual data-variant='split_portrait') and doesn't mention the top nav bar (header.nav with brand + 5 anchor links) or the footer.

**Prompt 缺失的模块:**
- story / quote_led (section 03 'The Origin Mix': .story-grid with chrome pull-quote + 3 body paragraphs)
- beliefs / numbered (section 04 'Booth Doctrine': 2x2 grid of numbered .belief cards)
- experience / timeline (section 05 'Live & Residencies': vertical .timeline with cyan→magenta gradient spine and 4 glowing dots)
- tools / stack_list (section 06 'The Rig': 4 .stack-group columns of .chip pills)
- testimonials / quote_led (section 07 'From the Floor': 2x2 .tpost blockquote cards)
- selected_quotes / large_type (.bigquote centered display-type pull quote)
- top nav header.nav (brand VEX·ROMERO + 5 anchor nav links) — not a tagged module but a visible structural element
- footer (mono copyright line)

**Photo 契约 OK:** True — The prompt describes the photo/toggle contract accurately and does NOT contradict the page. index.html ships a real local portrait.webp (img.u-photo, grayscale+luminosity behind a glass frame with scanline/duotone ::after and a sweeping ::before glitch slice) plus a u-fallback chrome 'VR' monogram and the fixed .atlas-photo-toggle. The prompt correctly states portrait.webp + u-photo + glitchy mosaic behind glass + scanlines, the VR chrome-monogram fallback, the three toggle CSS rules, and the scoped grid restore. Minor under-spec: in the page the outer .portrait-frame wrapper ALSO carries u-photo (whole glass frame hides when off) and the real fallback restore is body.no-photos .portrait-stage .u-fallback.mono-portrait{display:grid !important} — the prompt's generic example works but doesn't show this exact scoping.

**Token:** Color tokens match exactly between prompt, DESIGN.md and index.html :root (base #06060c, base-2 #0c0a18, panel rgba(18,16,34,.55), chrome-hi #f4f7ff, chrome-lo #7e87a8, ink #e8ecff, ink-muted #9aa0c7, ink-subtle #5b5f86, cyan #00e5ff, magenta #ff2bd6, grid, hairline). Fonts and font-link match. Type scale matches (display-xl 84/Orbitron 800, display-md 30, eyebrow 12 mono, lede 21, body 17, mono 13) — though page uses clamp() for responsive headline (clamp(48px,9vw,92px)) which the prompt's fixed '84px' doesn't convey. Spacing/radii match. Tokens the prompt never states: the third blob color #6a2bff (purple, .b3), the chrome gradient exact stops (180deg #fff→#cdd6f5→#7e87a8→#eef3ff→#9fb6ff), the primary-button gradient (#fff→#cdd6f5→#9fb6ff), the cover gradient pairs (c1/c2/c3), and the noise-overlay opacity .04. Token fidelity is high; the drift is in derived/secondary colors, not the core palette.

**缺失的 Signature 技术:**
- Perspective grid FLOOR specifics: it's a fixed bottom layer 62vh tall, two linear-gradients at 46px, transform:perspective(420px) rotateX(70deg) with transform-origin 50% 100%, AND a mask-image fading to horizon, plus a ::after horizon glow line (cyan→magenta blurred 2px bar). Prompt only says 'repeating-linear-gradient + perspective() rotateX() fading to horizon' — omits the mask-fade and the glowing horizon bar that sell the depth.
- Scanline shimmer: a fixed overlay with mix-blend-mode:overlay, repeating-linear-gradient 1px/3px, and a 7s scan keyframe scrolling background-position. Prompt names 'scanline shimmer' but never gives the blend mode or the animated position — easy to render as static or wrong.
- SVG fractalNoise grain layer (.noise, feTurbulence baseFrequency 0.9, opacity .04) as a data-URI — completely absent from the prompt; this film-grain is part of the Y2K texture.
- Glitch title is RGB-split via ::before (cyan) + ::after (magenta) pseudo-elements using content:attr(data-text), mix-blend-mode:screen, opacity .55, and two separate keyframes (glitchA/glitchB) that animate clip-path inset slices + small translates at 74/78/82% of a 3.6s cycle. Prompt says 'subtle glitch' with no mechanism — an agent will not reproduce the data-text dual-pseudo clip-path technique and will produce a generic shake.
- Chrome text gradient EXACT stops (linear-gradient 180deg #fff/#cdd6f5/#7e87a8/#eef3ff/#9fb6ff + drop-shadow) — prompt says 'silver→white→cyan/magenta' which is the wrong palette (real chrome is silver/blue, the cyan/magenta lives in glow and the lede em).
- Portrait treatment: img is grayscale(1) contrast(1.15) + mix-blend-mode:luminosity, frame has layered box-shadow (cyan ring + magenta glow + inset cyan), a ::after duotone+scanline overlay (mix-blend screen, 150deg cyan→magenta), and a ::before sweeping glitch slice animated top:-14%→114% over 5.5s. Prompt says 'behind glass with neon edge glow + scanlines' — omits luminosity blend, the duotone diagonal, and the animated sweep.
- Drifting blobs: 3 fixed radial-gradient divs (magenta/cyan/purple #6a2bff), filter:blur(70px), opacity .5/.35, two drift keyframes translate+scale over 22/26/30s (one reversed). Prompt says 'large radial-gradient divs with blur(), slow keyframes, low opacity' — close but omits the third purple blob and the specific scale-pulse.
- EP cover art is generated, not images: a .cover gradient + a .ring (62% circle with cyan/magenta box-shadows) + a vinyl-hole ::after + a giant chrome number — this 'vinyl record' CSS motif is the identity of the release grid and the prompt only says 'cover treatment via CSS gradient/chrome'.
- Reveal-on-scroll: .reveal opacity0/translateY(18px) → .in via IntersectionObserver(threshold .16, unobserve after). Prompt never mentions scroll reveal at all, yet every section below the fold uses it.
- Timeline spine gradient (cyan→magenta→transparent) + glowing dot markers, and metrics .stat inset cyan glow — direction-defining glow details absent because the modules themselves are absent.

**矛盾:**
- Prompt 'Module plan' (4 modules ending at contact) tells the agent the page is hero→work→metrics→contact, but the actual page interposes 6 sections — following the prompt produces a structurally different, much shorter page.
- Hero variant: prompt labels it 'glitch_title + portrait'; index.html tags data-variant='split_portrait'. An agent matching variant ids to the module catalogue would mismatch.
- Chrome text description: prompt says gradient 'silver→white→cyan/magenta'; the actual chrome gradient is silver/blue/white only (#fff/#cdd6f5/#7e87a8/#eef3ff/#9fb6ff) with NO cyan/magenta in the fill — cyan/magenta appear only in the glow and the lede em-gradient. The prompt would steer an agent to mis-tint the headline.
- Prompt says metrics = 'streams, EPs, residency cities, years' with 'Big Orbitron numbers' — close, but the prompt frames it as the final-before-contact block, whereas the page has metrics as section 02 of 7 numbered sections.

**建议修复:**
- Document the 6 missing modules with their copy: add Module-plan entries 4–9 for story/quote_led ('The Origin Mix' narrative), beliefs/numbered ('Booth Doctrine' 4 tenets), experience/timeline ('Live & Residencies' 4 stops with the gradient spine + glow dots), tools/stack_list ('The Rig' gear chips grouped Booth/Studio/Color/Distribution), testimonials/quote_led ('From the Floor' 4 named quotes), selected_quotes/large_type (the 'wait for the drop / forget the clock' band). Include the full persona copy so the agent doesn't fall back to filler.
- Spell out the glitch title technique: 'Glitch = duplicate the headline via ::before (cyan) and ::after (magenta) using content:attr(data-text), mix-blend-mode:screen opacity .55, and two keyframes animating clip-path inset() horizontal slices + small translateX at ~74-82% of a 3.6s loop.'
- Add the grid-floor mask + horizon glow: 'fixed 62vh floor, perspective(420px) rotateX(70deg), mask-image fading to transparent at top, plus a ::after horizon bar = blurred cyan→magenta gradient line.'
- Add the scanline + SVG-grain overlays: 'fixed scanline layer, mix-blend-mode:overlay, repeating-linear-gradient 1px/3px, animated background-position (7s); plus a feTurbulence fractalNoise data-URI grain at opacity .04.'
- Fix the chrome gradient spec to the real stops (silver/blue: #fff→#cdd6f5→#7e87a8→#eef3ff→#9fb6ff + drop-shadow) and clarify cyan/magenta live in GLOW + the lede em-gradient, not the headline fill.
- Add the section-label pattern and scroll-reveal: 'each section opens with mono index number + chrome uppercase Orbitron H2 + gradient hairline rule; sections fade/translateY-in via IntersectionObserver (.reveal→.in, threshold .16).' Also note the top nav + footer and make display-xl fluid (clamp 48–92px).


## newsprint  — fid 55 / qual 62 / high

**Module diff:** Prompt's Module plan lists only 4 modules in order: hero, selected_work, story, contact. The actual index.html ships 9 data-module sections: hero (bold_statement), selected_work (list), story (columns), metrics (big_numerals), beliefs (numbered), logos_press (mentioned_in), writing (list), speaking (list), faq (two_column), contact (cta_band). So 5 entire modules are undocumented: metrics, beliefs, logos_press, writing, speaking, faq — that is 6 sections plus a colophon footer the prompt never mentions. An agent following only prompt.md would produce a 4-section page roughly half the length of the real one. This is the single biggest fidelity gap. Also note the prompt's data-variant names don't match the page: prompt implies hero is generic; page uses bold_statement; contact in page is cta_band (prompt just says "conversion").

**Prompt 缺失的模块:**
- metrics (data-variant=big_numerals) — 'By the Numbers' 4-cell figures grid (12 yr / $210M / 9 / 600+) with ruled cells and red superscript units
- beliefs (data-variant=numbered) — 'The Rules of the Desk' 4 numbered editorial standards with large red numerals
- logos_press (data-variant=mentioned_in) — 'As Cited & Reported' inline italic-serif list of outlets with red src labels (WaPo/ProPublica/NPR/Senate/CJR/Marshall Project)
- writing (data-variant=list) — 'From the Newsletter' 3-item index list (when / title / read-time)
- speaking (data-variant=list) — 'Talks & Panels' 3-item index list (year / title / venue)
- faq (data-variant=two_column) — 'Questions from the Desk' 4 Q&A in two columns with red 'Q.' prefix
- colophon footer — '© 2026 Hannah Cole … Set in Playfair Display & Spectral · Printed for the screen'
- topline / dateline bar — 'Vol. XII · No. 207 · The Investigations Desk · Tuesday … Late Edition' (prompt mentions dateline inside hero but the page renders it as a separate header bar above the masthead)

**Photo 契约 OK:** True — Accurate. Prompt correctly describes the u-photo column figure with italic cutline, the u-fallback ruled FIGURE/pull-quote block, default photos ON, the exact toggle CSS/markup/script verbatim, and references portrait.webp locally — all matching index.html. One detail under-specified: the page applies filter:grayscale(1) contrast(1.06) to the photo for the documentary B&W look (DESIGN.md says '黑白质感'), and the prompt does not state this grayscale filter, so an agent would likely ship a color photo.

**Token:** Colors match exactly (canvas #f5f2ea, surface #efe9dd, ink #1a1714, ink-muted #4d4740, ink-subtle #857d70, accent #c0241f, accent-hover #97160f, hairline #cdc4b3, rule #1a1714). Fonts and the Google Fonts link match. Type scale mostly matches but prompt states nominal fixed sizes (masthead 64px, headline-xl 58px) while the page uses clamp() responsive ranges everywhere (masthead clamp(40px,11vw,86px) — note the page caps at 86px not 64px; headline clamp(34px,7vw,58px)). Prompt never tells the agent to use clamp() for fluid type, a real source of visual drift. Minor: DESIGN.md byline weight 500 vs prompt 'Spectral italic' (page uses 13px italic, fine). Masthead in page is 3px DOUBLE border-bottom (border-bottom:3px double) + a separate redrule, which prompt under-describes.

**缺失的 Signature 技术:**
- Paper grain via radial-gradient: body background-image: radial-gradient(rgba(26,23,20,.018) 1px, transparent 1.4px) with background-size:4px 4px — gives the newsprint texture; prompt never mentions any grain/texture
- Documentary photo treatment: filter:grayscale(1) contrast(1.06) on .u-photo for B&W stock look — absent from prompt
- Fluid type via clamp() on every heading (masthead, lead-headline, section h2, metric numerals) — prompt gives only fixed px, so agent ships non-responsive type that won't match
- Animated underline on story/index links: background-image linear-gradient(accent), background-size 0%→100% 2px on hover/focus, transition .25s — a signature interaction the prompt omits
- Masthead 3px DOUBLE rule (border-bottom:3px double) + separate full-bleed red rule strip (.redrule height:3px accent) — prompt says 'thin red rule' but not the double-rule masthead detail
- Drop cap uses ::first-letter float left, font-size 4.6em, line-height .74, colored accent red — prompt says 'drop cap' but not that it is red or the exact sizing
- True column figure that flows inside CSS columns with break-inside:avoid and column-rule:1px solid hairline (column dividers) — prompt says multi-column but omits the column-rule divider line and break-inside
- Big-numeral metric cells with red superscript units (small font-size .42em, vertical-align .55em) e.g. $210M, 600+ — entirely undocumented since the metrics module is missing
- Numbered-beliefs giant red numerals (clamp 30–44px, weight 900, accent) — undocumented
- Justified body with hyphens:auto in the report columns — prompt says 'justified' but not hyphens:auto
- ::selection background red / focus-visible 2px accent outline — small identity touches absent

**矛盾:**
- Prompt DNA says hierarchy comes from rules/column-width/type-scale and 'never boxes, cards' — but the page's contact tipbox uses border:2px solid ink as a box, and the hero creds sidebar is bordered top/bottom. Not a hard contradiction (these are ruled, not shadowed cards) but the absolute 'never boxes' wording slightly overstates vs the page.
- Prompt type scale states masthead 64px / headline-xl 58px as if fixed; the page caps masthead at 86px via clamp and scales the lead headline up to 58px only at the top — an agent obeying 'exactly' the px values would render a smaller, non-fluid masthead than the page.

**建议修复:**
- Expand the Module plan to all 9 sections in page order with their data-variant names and concrete copy: add metrics (big_numerals: 12 / $210M / 9 / 600+), beliefs (numbered: the 4 Rules of the Desk), logos_press (mentioned_in: WaPo/ProPublica/NPR/Senate/CJR/Marshall Project), writing (list: 3 newsletter pieces), speaking (list: 3 talks), faq (two_column: 4 Q&As), plus the topline dateline bar and the colophon footer.
- Document the newsprint grain: body background-image:radial-gradient(rgba(26,23,20,.018) 1px, transparent 1.4px); background-size:4px 4px.
- Specify the documentary photo filter: .u-photo{filter:grayscale(1) contrast(1.06)} for the B&W stock look.
- Replace fixed-px type tokens with the fluid clamp() values the page uses (masthead clamp(40px,11vw,86px), lead-headline clamp(34px,7vw,58px), section h2 clamp(22px,4vw,30px), metric numerals clamp(40px,7vw,58px)) and stop saying 'obey exactly' on the fixed numbers.
- Name the signature interactions: animated red underline on story/index links (background-size 0%→100% 2px on hover/focus), red ::first-letter drop cap (4.6em, line-height .74), column-rule:1px solid hairline + break-inside:avoid figure, and the masthead 3px double rule + full-bleed red rule strip.
- Pin the motion: IntersectionObserver fade-up, translateY(16px)→none, .7s, threshold ~.12, with prefers-reduced-motion short-circuit.


## retro-print  — fid 55 / qual 68 / high

**Module diff:** Prompt lists 4 modules (hero/split_portrait, selected_work/grid, story/magazine_longform, contact). The page actually ships 10 data-module sections. So the prompt covers only 40% of the page. The 6 undocumented sections (metrics, credentials, selected_quotes, services, beliefs, currently_building) are roughly HALF the page's vertical height in sample.png. Also: prompt says contact is an "ink-ruled footer block / conversion" but the page tags it data-variant="cta_band" and renders a huge clamp(34-68px) Anton headline "Let's make something printed." with em accent — far more prominent than a footer block. And the prompt's work grid says "3-up grid of works" but the page renders a 6-cell grid (2-up at 680px, 3-up at 980px). The masthead/nameplate (border-bottom name + nav) is also undocumented.

**Prompt 缺失的模块:**
- metrics / big_numerals — 4 big Anton numerals (11 / 58 / 1.4k / 12) per-cell colored rust/teal/brown/mustard with label + italic note
- credentials / pills — 8 bordered Anton pills, some filled rust/teal/mustard (awards & stockists)
- selected_quotes / large_type — oversized Anton uppercase pull-quote with teal quote-marks + rust em + cite
- services / list — 3-row ruled service list with a./b./c. numerals, name, serif desc, teal 'From £…' price
- beliefs / numbered — 4 bordered creed cells with big rust/teal numerals + head + serif body
- currently_building / now_block — bordered 'Now' card with mustard offset box-shadow, rust head with rule, 2-col bulleted list with teal dots
- masthead / nameplate — top bar: name + 5-item uppercase Anton nav, 2px ink bottom rule

**Photo 契约 OK:** True — Accurate. Prompt correctly describes the local portrait.webp as u-photo, the framed hero illustration re-used smaller in the work grid, the typographic u-fallback poster ("MH" initials + thesis), and ships the verbatim toggle CSS+HTML+JS (default photos ON). Matches index.html exactly, including the .frame ink-hairline frame and the no-photos shadow recolor. One small gap: the page also defines a SECOND fallback (.u-fallback.mini in the work grid, MH + "Edition of 50 · Sold out") which the prompt's photo section only implies ("re-used smaller"); the toggle CSS block in the prompt omits the body.no-photos .u-fallback.mini{display:flex} line that index.html needs.

**Token:** Colors, fonts, type scale and spacing all match exactly between prompt, DESIGN.md and index.html :root (canvas #f3e9d2, ink #2a1f16, rust #b5532a, mustard #d99a2b, teal #2f7d77, brown #6b4226, hairline #cbb88e; Anton + Spectral; display-xl 104/0.92, body 18/1.7, eyebrow 13/+3px; section 112 block 40; rounded 0-2px). No token drift. Note the page implements display-xl as clamp(52px,11vw,104px) and uses many clamp() sizes the prompt states only as fixed px — minor, but an agent fed only fixed px may not make headlines fluid/responsive.

**缺失的 Signature 技术:**
- The hero/frame signature look: 2px ink border + 14px padding + a HARD OFFSET drop-shadow box-shadow:10px 10px 0 var(--mustard) (the colored '70s print offset block) — this is the single most identity-defining device and the prompt never mentions the offset-shadow technique (it even says 'no drop-shadow cards', which an agent could read as forbidding it)
- .frame::after inner ink hairline (position:absolute;inset:7px;border:1px solid ink) creating the double-rule print frame — not described
- Per-line hero headline coloring: .ln2 rust, .ln3 teal (multi-color stacked book-jacket headline) — prompt says 'stacked oversized condensed headline' but not the per-line color swaps that give it the poster pop
- Work-grid borderless-collage trick: cells use border:1.5px solid ink with margin:-0.75px so rules collapse into a continuous letterpress grid (no gap), plus per-cell tint classes (tint-mustard/tint-teal/illo brown) — prompt says 'thin ink rule' but not the negative-margin collapsing grid or the tinted flat panels
- Halftone divider as radial-gradient dots: background-image:radial-gradient(var(--ink) 1.4px,transparent 1.5px);background-size:10px 10px;opacity:.5 — prompt mentions 'halftone via repeating radial-gradient dots' but never gives the dot-size/spacing recipe, and the page uses a plain radial-gradient (not repeating)
- Paper grain via specific SVG feTurbulence data-URI (fractalNoise baseFrequency 0.9 numOctaves 2, opacity 0.05) — prompt says 'e.g. SVG turbulence at low opacity' but leaves the exact filter to the agent, so grain will vary
- Drop-cap via ::first-letter float, 74px Anton, rust — prompt says 'drop-cap' but not Anton/rust/size
- Section heads pattern: rust 2-digit .num (01..09) + Anton h2 + 2px ink bottom rule — a repeated structural motif across every section, undocumented
- Scroll reveal: .reveal opacity:0 translateY(16px) -> .in via IntersectionObserver threshold 0.12, 0.6s ease; prompt says 'subtle fade-up on scroll' but not the 16px/0.6s/threshold specifics
- no-photos recoloring: frame shadow flips mustard->teal, hero frame border->rust, inner hairline->mustard — a deliberate fallback aesthetic the prompt omits

**矛盾:**
- Prompt DNA says 'no drop-shadow cards' and Hard-contract avoids drop-shadows, but the page's defining device IS a hard offset box-shadow (10px 10px 0 mustard/teal) on the frame and now-block. An agent obeying 'no drop-shadows' would strip the exact thing that makes this style read as 1970s print. Needs disambiguation: forbid soft blurred shadows, explicitly REQUIRE the hard offset color-block shadow.
- Prompt's Module plan says selected_work is a '3-up grid' but the page is a 6-cell grid.
- Prompt frames contact as an 'ink-ruled footer block' (small), but the page renders it as a large cta_band with a 68px display headline.

**建议修复:**
- Document all 6 missing modules in the Module plan (metrics/big_numerals, credentials/pills, selected_quotes/large_type, services/list, beliefs/numbered, currently_building/now_block) plus the masthead nameplate+nav and the rust-num + 2px-rule section-head motif — and include their concrete copy (the 6 works, 4 metrics, 8 credentials, testimonial, 3 services, 4 beliefs, 4 now-items, colophon) so the page regenerates at full length with real content.
- Add the signature offset-shadow technique explicitly: 'framed elements use a hard 1970s print offset block — box-shadow:10px 10px 0 var(--mustard) (no blur), recolored to teal when photos off' — and REWORD the 'no drop-shadows' rule to 'no soft/blurred shadows; the hard offset color-block shadow is required.'
- Specify the double-rule frame: 2px ink border + 14px pad + .frame::after inset:7px 1px ink hairline; and the per-line hero headline color swap (line 2 rust, line 3 teal).
- Pin the texture recipes verbatim: paper grain = the feTurbulence data-URI (fractalNoise baseFrequency 0.9, numOctaves 2, opacity 0.05); halftone divider = radial-gradient(ink 1.4px, transparent 1.5px) background-size 10px 10px opacity .5; drop-cap = 74px Anton rust ::first-letter float.
- Describe the work grid as a 6-cell collapsing letterpress grid (border 1.5px ink + margin:-0.75px, tinted mustard/teal/brown panels, one illo cell re-using portrait.webp), not a 3-up drop-shadow-free grid; correct contact to a large cta_band with a 68px Anton headline.
- Fix the toggle CSS block to include 'body.no-photos .u-fallback.mini{display:flex !important}' and mention the second mini fallback in the work grid; state the reveal spec (opacity0+translateY16px -> IntersectionObserver threshold 0.12, 0.6s ease) and make headline sizes fluid via clamp().


## fashion-luxe  — fid 58 / qual 68 / high

**Module diff:** Prompt's Module plan documents 5 modules in order: 1) hero/split_portrait, 2) selected_work/featured_case, 3) logos_press, 4) metrics, 5) contact. The actual page ships 10 data-module sections in this order: hero/split_portrait, selected_work/featured_case, logos_press/inline, metrics/stat_row, beliefs/numbered, services/list, testimonials/quote_led, credentials/pills, selected_quotes/large_type, contact/cta_band. So 5 of 10 modules (half the page body) are entirely undocumented, AND the prompt's order is wrong — it places metrics directly before contact, whereas the page interposes beliefs, services, testimonials, credentials, and selected_quotes between metrics and contact. An agent following the prompt would produce a page roughly half the length with a different rhythm.

**Prompt 缺失的模块:**
- beliefs/numbered — 'How I Style', 4 numbered styling rules (01-04) with magenta serif numerals, 2-col bordered grid
- services/list — 'What I Do', 4 service rows (Editorial Styling / Campaign & Brand / Creative Direction / Personal & Red Carpet) with name + desc + magenta price tag, hairline-divided rows
- testimonials/quote_led — 'In Their Words', large italic Playfair pull-quote on ink-black ground with one magenta word, attributed to Giulia Ferri, Fashion Director, Vogue Italia, magenta left-border attribution
- credentials/pills — 'Recognition', 6 bordered text pills (CFDA nominee, BFC member, Central Saint Martins, Vogue Italia cover, LVMH Prize mentor, Hyères jury)
- selected_quotes/large_type — full-bleed ink-black centered pullquote with giant magenta open-quote mark, 'Make it looked at — and remembered.' uppercase Playfair, cited as studio motto
- signoff (closing masthead) — giant 'Sienna.' with magenta period on ink-black, footer line; the prompt mentions a closing sign-off only as part of the contact module, but it is a distinct full-bleed ink band after contact

**Photo 契约 OK:** True — Accurate. Prompt correctly specifies a local portrait.webp full-bleed hero with class u-photo + meaningful alt, a u-fallback typographic cover treatment, default photos ON, the three-line photo/fallback CSS, and the fixed bottom-right toggle. The page implements exactly this. One small under-spec: the page actually uses the u-photo/u-fallback pair TWICE — once in the hero and again in the featured spread (the Poolside Mirage image reuses portrait.webp with its own cover-fallback). The prompt only describes the hero photo slot, so an agent might give the featured spread no photo/fallback pair. Also the fallback needs body.no-photos .cover-fallback{display:flex !important} (the page adds this scoped rule); the prompt mentions scoped grid/flex restores generically but does not name the cover-fallback flex case.

**Token:** Colors, fonts, spacing tokens, and the font <link> match the page :root and DESIGN.md exactly (canvas #f7f3ee, accent #e0218a, accent-hover #b71872, hairline #ddd5c9, etc.). Minor drift in type metrics: prompt states masthead letter-spacing -2px, but index.html .hero__masthead uses -1px (only the fallback __big and signoff use -2px); DESIGN.md says -2px. Prompt's masthead 116px is implemented as clamp(44px,12vw,116px) — fine. Lede line-height 1.5 matches. Overall token fidelity is high; the gap is not in tokens but in undocumented per-component styling.

**缺失的 Signature 技术:**
- Hero image desaturation: filter:grayscale(100%) contrast(1.06) on the hero photo — the B&W look is a CSS filter, not stated. Prompt says 'B&W / monochrome' for tiles but never says the HERO photo is grayscaled via filter.
- Hero reveal animation specifics: clip-path:inset(0 0 100% 0) animating to inset(0 0 0 0) plus transform:scale(1.08)->scale(1.02) over 1.5s cubic-bezier(.16,.84,.44,1). Prompt says 'reveals slowly (clip/scale)' but not the exact clip-path wipe + scale settle, which is the signature entrance.
- Hero gradient scrim: ::after linear-gradient(180deg, rgba(13,13,15,.25), transparent 30%, rgba(13,13,15,.55)) for legibility over the photo — unstated.
- Magenta corner tab on the image (.hero__tag 'Poolside Mirage · Vogue Italia') and a white bottom-right photo caption with text-shadow — these magazine cover-line ornaments are not in the prompt.
- Featured image color-on-hover: grayscale(100%)->grayscale(0%) + scale(1.03) reveal on hover — the 'photo blooms to color' interaction is a key luxury detail, unstated.
- Tile hover: top magenta rule animating width 0->100% (.tile::before) + a magenta arrow sliding in (.tile__arrow opacity/translateX). Prompt says 'magenta hover rule' but not the width-grow animation or arrow.
- Grid construction trick: 1px gap over a hairline background-color to fake hairline dividers between cream tiles (gap:1px;background:var(--hairline)) — used for tiles, metrics, beliefs. This bordered-grid look is the editorial-table identity, unstated.
- Metric numeral underscore: .metric__num::after a 26px x 3px magenta tick under each Playfair number — prompt says 'one magenta tick' but underspecifies it as per-number.
- Ink-black full-bleed bands: press, testimonials, selected_quotes, and signoff invert to ink ground with cream text + magenta accent — this dark/light alternation rhythm is central to the cover feel and is undocumented (prompt implies an all-cream page).
- Section scaffold: .sec-head with baseline-aligned h2 + right-aligned eyebrow, hairline bottom-border — the consistent editorial section header pattern is unstated.
- Giant pullquote open-quote mark in Playfair 900 magenta at clamp(60px,12vw,120px) with line-height .6 — distinctive ornament, unstated.
- Scroll reveal mechanics: .fade -> .fade.in via IntersectionObserver (threshold .16, rootMargin -8% bottom), translateY(22px)+opacity over .7s — prompt says 'fade up on scroll' but not the trigger/threshold/distance.

**矛盾:**
- Prompt Module plan step 5 frames contact as the final section with the sign-off folded in, implying metrics is the last content block before contact. The page instead runs five more full modules (beliefs/services/testimonials/credentials/selected_quotes) between metrics and contact, and the signoff is a separate full-bleed ink band. An agent would end the page too early.
- Prompt's hero description ('one CTA: Book Sienna →') implies a single CTA, but the page hero has TWO CTAs: the magenta-hover Book Sienna button AND a 'See selected work' ghost link. Minor, but the prompt's 'one CTA' under-counts.
- Prompt says the single magenta detonates on 'exactly one word, one rule, and the CTA — never more,' but the actual page uses magenta liberally as a system color (corner tabs, tile rules, metric ticks, belief numerals, attribution borders, pullquote mark, press eyebrow, signoff period). The 'never more' restraint instruction would cause an agent to strip out most of the page's signature magenta ornaments.

**建议修复:**
- Expand the Module plan to all 10 sections in the real order: hero, selected_work, logos_press, metrics, beliefs(4 numbered rules), services(4 list rows w/ price tags), testimonials(quote_led on ink), credentials(pills), selected_quotes(large_type pullquote on ink), contact, + signoff band. Include the concrete copy for each (the 4 belief titles, 4 service names+labels, the Giulia Ferri quote, the 6 credential pills, the studio-motto pullquote, signoff footer).
- Fix the magenta directive: replace 'detonates on exactly one word, one rule, and the CTA — never more' with 'magenta is the sole accent color used as a system — corner/featured tabs, tile hover rules, metric ticks, belief numerals, pullquote mark, attribution borders, signoff period — but never as a background fill or second hue.'
- Document the ink-black inverted bands: state that press, testimonials, selected_quotes, and the signoff invert to background:#0d0d0f with cream text and magenta accent, alternating with cream sections to create the cover rhythm.
- Add the photo techniques: hero/featured images use filter:grayscale(100%) contrast(~1.06); featured spread blooms to grayscale(0%)+scale(1.03) on hover; hero ::after has a top-and-bottom dark linear-gradient scrim; hero carries a magenta corner tab cover-line and a white text-shadowed caption.
- Specify the exact hero reveal: img starts clip-path:inset(0 0 100% 0) scale(1.08), animates to inset(0) scale(1.02) over 1.5s cubic-bezier(.16,.84,.44,1); content uses .fade->in IntersectionObserver (translateY(22px), .7s). Both disabled under prefers-reduced-motion.
- Document the bordered-grid construction (display:grid; gap:1px; background:hairline; border:1px hairline; cream cells) used for tiles, metrics, and beliefs, plus the tile hover (top rule width 0->100% + sliding magenta arrow) and the per-number magenta tick.
- Note the featured spread reuses portrait.webp with its own u-photo/u-fallback pair (not only the hero), and add body.no-photos .cover-fallback{display:flex !important} to the fallback CSS block.
- Correct masthead letter-spacing to match the page (-1px on the live hero masthead) or update the page to -2px to match DESIGN.md.


## mono-zine  — fid 58 / qual 68 / high

**Module diff:** The prompt's Module plan lists 5 sections (hero/bold_statement, selected_work/list, currently_building/now_block, story/short, subscribe/inline_form). index.html ships 10 tagged data-module sections PLUS a top nav bar and a footer. The page order is: hero → selected_work → metrics(stat_row) → currently_building(now_block) → beliefs(numbered) → writing(list) → tools(stack_list) → selected_quotes(large_type) → story(short) → subscribe(inline_form). So the prompt under-documents the page by 5 whole content modules + a topbar nav + footer. An agent given only the prompt would build a much shorter page (~half the sections) and in a different order (the prompt puts story before subscribe with nothing between; the real page interleaves metrics/beliefs/writing/tools/quote).

**Prompt 缺失的模块:**
- metrics / stat_row — 4-cell bordered stat grid (6 products, 8k readers, 210+ logs, $11k MRR), section label '[ by the numbers ]'
- beliefs / numbered — 'how i work' numbered 01-04 list with red big numbers, bold title + muted description per row
- writing / list — 'from the log' list of 4 dated posts (red date + min-read meta, description spanning row)
- tools / stack_list — 'the stack' grouped chips: [build]/[ship]/[write] with bordered monospace chips
- selected_quotes / large_type — bordered pull-quote with [ “ ] red quote-mark, oversized type, red pull-word, em-dash cite
- top nav bar (header.topbar) — name '/ indie maker & writer' + uppercase section nav with red underline-on-hover
- footer — bordered footer with '© 2026 Sam Rourke — printed in monospace.' + '[ built & broken in public ]'

**Photo 契约 OK:** True — Accurate; page uses portrait.webp with u-photo/u-fallback and the exact toggle contract the prompt specifies.

**Token:** Colors match exactly between prompt, DESIGN.md and :root (paper #f4f3ee, paper-sunk #ecebe4, ink #1a1a1a, ink-muted #56544e, ink-faint #8b887f, accent #d83a2a, accent-ink #a82a1d, rule #1a1a1a, rule-soft #d6d4ca). Fonts and type scale match (JetBrains Mono 400-800; display-xl 56/1.06/-1.5 w800, display-md 26 w700, lede 18, body 15/1.7, label 12 +1px upper). Spacing tokens match (64/28/12, rounded 0). Drift/omissions: prompt never states the --maxw:880px container width; never mentions the 1.5px (not 1px) rule weight used everywhere; never mentions the responsive section padding ramp (24px → 48px at 920px) or the 720/560/920 breakpoints.

**缺失的 Signature 技术:**
- The faint ruled-paper background lining the whole body: background-image:linear-gradient(var(--rule-soft) 1px, transparent 1px); background-size:100% 2.04em; background-position:0 -1px; background-attachment:local — this horizontal-rule paper grid is a core part of the 'printed booklet' identity and is NOT in the prompt at all.
- The vertical 'sheet' frame: .frame with border-left/right 1.5px ink rules creating a bound-page gutter on both sides of the whole document — not described.
- Hairline weight is 1.5px solid ink for section dividers and 1.5px rule-soft for in-list row separators (two-tier rule system) — prompt just says 'solid black hairlines', missing the rule/rule-soft distinction.
- The [now] block treatment: red border + a solid red header bar (now-top) with white/paper text and a red 8px square dot — prompt says '[now] block in red accent' but not the filled red header bar or square bullet.
- The fallback plate texture: repeating-linear-gradient 45deg stripes (paper-sunk/paper) behind a bordered initials mark — prompt says 'typographic/ASCII framed block' but not the diagonal riso-stripe fill.
- Blinking cursor is a red box (.55ch × .92em) via steps(1) blink keyframe appended to the H1 — prompt mentions 'optional blinking cursor' but not that it's a red block glyph on the headline.
- Bracketed labels are styled with a RED bracket span ([ in accent, text in ink) — prompt says use bracketed labels but not that the brackets themselves are colored red (.bracket{color:accent}).
- Tag/chip pattern: 1.5px ink-bordered uppercase pills, with a .fail variant turning red border+text for 'post-mortem' — under-specified.
- Stat figures use red-only suffix accents (8k, 210+, $11k) where just the k/+/k is red — a recurring 'red on the unit' motif not called out.
- No scroll-reveal/IntersectionObserver motion at all — page is static except cursor blink; prompt correctly implies near-zero motion, so this is consistent (noting for completeness).

**矛盾:**
- Prompt 'Module plan' is presented as the section list ('in this order') yet the page has 5 more content sections + nav + footer, so an agent following it faithfully produces the WRONG, shorter page — this is a structural contradiction between prompt and source of truth.
- Prompt selected_work step says rows show 'name (red), description, meta tag (stars/users/post-mortem)' and lists product order Tally/Readwise/Deploybot/Coldbrew, but the page orders them Tally/Deploybot/Coldbrew/Readwise (post-mortem last) — minor ordering contradiction.
- Prompt says order ends hero→work→now→story→subscribe; page actually places story SECOND-TO-LAST after quote and metrics/now appear much earlier — the narrative ordering differs.

**建议修复:**
- Expand the Module plan to all 10 sections in the real page order and add the topbar nav + footer: add metrics/stat_row, beliefs/numbered, writing/list, tools/stack_list, selected_quotes/large_type — with their concrete copy (the 4 stats, 4 beliefs, 4 log posts, 3 stack groups, the pull-quote).
- Add the signature ruled-paper background technique verbatim: body{background-image:linear-gradient(var(--rule-soft) 1px,transparent 1px);background-size:100% 2.04em;background-position:0 -1px;background-attachment:local} and the side .frame{border-left/right:1.5px solid ink} bound-sheet gutter.
- Specify the two-tier hairline system: 1.5px solid --rule (ink) for section dividers and topbar/footer; 1.5px --rule-soft for in-list row separators; --maxw:880px content column.
- Document the [now] block fully: red 1.5px border + filled red header bar (now-top) with paper-colored uppercase text and a solid red 8px square dot bullet.
- Add the red-bracket detail (.bracket{color:accent}) so [labels] render with red brackets + ink text, and note red-suffix stat figures (8k/210+/$11k) and the .fail red tag variant for 'post-mortem'.
- Add the fallback plate texture (repeating-linear-gradient(45deg) paper-sunk/paper stripes behind a bordered initials mark) and note the H1 cursor is a red block glyph (.55ch × .92em, steps(1) blink).


## organic-natural  — fid 58 / qual 66 / high

**Module diff:** Prompt lists 5 modules: hero/split_portrait, story/magazine_longform, currently_building, testimonials/cards, subscribe. The actual page ships 11 data-module sections in a different order: hero/split_portrait, story/magazine_longform, metrics/stat_row, beliefs/principles_list, currently_building/now_block, experience/timeline, writing/list, testimonials/cards, selected_quotes/large_type, subscribe/cta_band (+ a topbar nav with 6 anchor links that the prompt never mentions). So the page has 6 substantial modules (metrics, beliefs, experience, writing, selected_quotes, plus the topbar nav) that the prompt omits entirely, and the prompt's order (testimonials before subscribe, currently_building right after story) does not match the page's order (currently_building is 5th, testimonials 8th). An agent fed only the prompt would build a much shorter page (~5 sections) and miss roughly half the actual content.

**Prompt 缺失的模块:**
- metrics / stat_row — 4 big serif stats (9,200 readers / 11 yrs / 26 retreats / 1 book) on a clay-tinted band with circular pseudo-element ornaments
- beliefs / principles_list — 2-col grid of 4 belief cards, each with an inline leaf SVG (Depth over speed / Seasons not sprints / Quiet is a resource / Write it in the open)
- experience / timeline — vertical timeline with blob-shaped clay nodes and 4 dated entries (2020-now, 2023, 2014-2020, 2011)
- writing / list — 4-row dispatch list with hover padding-shift, title + date meta + dek
- selected_quotes / large_type — oversized italic Fraunces blockquote with a giant opening quote-mark pseudo-element, sourced from The Long Season
- topbar nav — sticky-ish header with serif wordmark (Elena Vasquez, clay surname span) + 6 anchor links

**Photo 契约 OK:** True — Prompt describes the photo + toggle contract accurately and in detail: u-photo img with alt, u-fallback typographic initials/leaf treatment on a blob, default photos ON, the three core CSS rules verbatim, the scoped body.no-photos .u-fallback{display:grid} note, and the fixed bottom-right toggle widget + inline script before </body>. index.html implements exactly this (portrait.webp via src, EV initials fallback with leaf SVG, .atlas-photo-toggle pill). No contradiction. Minor: prompt says portrait.webp; page references portrait.webp — consistent. Good.

**Token:** Color tokens, font families, blob radius, spacing and the Google Fonts link all match exactly between prompt, DESIGN.md and index.html :root. Type scale in the prompt matches the documented modules (display-xl 68/1.06/-1.5, display-md 38, lede 23 italic, body 18/1.7, eyebrow 13/+2px). However the prompt's type scale does NOT cover several distinct sizes the page actually uses and that carry the look: the big-quote (clamp 28-46px italic), the stat number (clamp 40-52px serif with italic em units), the pullquote (clamp 26-33px italic), and the longform drop-cap (62px serif float). Tokens that exist but are under-specified for use: --maxw:1180px (wrap is 1180, not stated), wrap padding 0 28px, and the second clay blob (b2) + blobdrift keyframe animation are not in the token list at all.

**缺失的 Signature 技术:**
- Animated drifting blobs: TWO absolutely-positioned blob spans behind the portrait (sage gradient main + smaller clay b2, reverse direction) with a @keyframes blobdrift that morphs border-radius over 16s/13s — the prompt only says 'organic blob shape', never the second blob or the morph animation
- Drop cap: .longform p:first-of-type::first-letter is a 62px floated serif sage initial — a signature editorial touch entirely absent from the prompt
- Pull-quote with clay vertical bar: ::before 4px rounded clay rule on the italic pullquote — prompt says 'italic pull-quote' but not the clay bar treatment
- Giant decorative quote mark: .big-quote::before uses content '\201C' at 1.5em translucent clay, offset negative — defines the large_type module, not in prompt
- Circular blob ornaments on cards: now-card::after / stat::after place translucent sage/clay circles bleeding off card corners — a recurring motif, unspecified
- eyebrow ::before 26px clay dash — every section label has a short clay rule before it; prompt never describes the eyebrow ornament
- Botanical sprig SVGs: 3 inline hand-drawn fern/branch SVGs (hero corner, story margin rotated 8deg, quote margin rotated -10deg) at opacity .5 sage — prompt says 'botanical line accent in the margin' but gives no SVG path guidance, count, rotation, or opacity
- Section background tints: story/metrics/testimonials/writing each get a different faint linear-gradient wash (surface, clay 10%, sage 12%, sage 9%) to separate bands — prompt doesn't mention banded backgrounds at all
- Subscribe card on sage-deep with two blob pseudo-elements bleeding clay + white — the dark inverted CTA band treatment is not described (prompt just says 'warm one-liner + subscribe field')
- Timeline blob nodes: tl-item::before are blob-radius (50% 42% 55% 45%) clay dots with a canvas ring, on a faded sage spine — organic, not round; unspecified
- reveal motion specifics: translateY(18px) scale(.985) -> none over .7s cubic-bezier(.2,.7,.2,1), IO threshold .14 rootMargin -8% — prompt only says 'subtle soft-grow', no values
- t-dot avatar: 40px sage->clay gradient blob with serif initial — the testimonial author chip styling is unspecified
- photo filter saturate(.94) contrast(1.02) for the muted editorial portrait look

**矛盾:**
- Prompt 'Module plan' implies a 5-section page ending testimonials->subscribe; the real page is an 11-section long-form page with metrics/beliefs/experience/writing/selected_quotes between them — an agent following the prompt builds a structurally different (much shorter) site
- Reader count: prompt brief says newsletter 'read by 9,000 people' but the page's metrics stat says 9,200 — minor internal inconsistency the spec should resolve
- Prompt lists currently_building as item 3 (right after story); the page places it 5th (after metrics + beliefs)

**建议修复:**
- Rewrite the Module plan to list all 11 sections in page order with their data-module/data-variant: topbar nav, hero/split_portrait, story/magazine_longform, metrics/stat_row, beliefs/principles_list, currently_building/now_block, experience/timeline, writing/list, testimonials/cards, selected_quotes/large_type, subscribe/cta_band
- Supply the concrete copy the page uses: the 4 metrics (9,200 readers / 11 yrs / 26 retreats / 1 book — and fix the 9,000 vs 9,200 mismatch), the 4 beliefs, the 4 timeline entries, the 4 dispatch titles+dates, the 3 named testimonials with cohort years, the big pull-quote, and the 3 story paragraphs
- Document the blob technique precisely: TWO blob spans (sage gradient main + smaller reverse-drifting clay b2) plus a @keyframes blobdrift that morphs border-radius ~16s, paused under reduced-motion
- Add the recurring ornament vocabulary: eyebrow ::before clay dash, now-card/stat ::after translucent corner circles, pullquote clay vertical bar, .big-quote::before giant translucent clay quote mark, drop-cap (62px floated serif sage ::first-letter on the story's first paragraph)
- Specify the botanical sprigs concretely: 3 inline hand-drawn fern SVGs (thin 2px sage strokes, opacity .5) placed in hero corner / story margin (rotate 8deg) / quote margin (rotate -10deg), hidden on small screens
- Pin the motion + banding: reveal = translateY(18px) scale(.985)->none over .7s cubic-bezier(.2,.7,.2,1) via IntersectionObserver; and give each band its faint section-background tint (story=surface wash, metrics=clay 10%, testimonials=sage 12%, writing=sage 9%); describe the inverted sage-deep subscribe card with clay/white blob pseudo-elements


## risograph  — fid 58 / qual 68 / high

**Module diff:** Prompt lists 4 modules: hero, selected_work, story, contact. The page actually ships 9 tagged sections plus a top nav bar. Matches: hero (page variant=bold_statement, prompt implies a custom "riso headline + print"), selected_work (grid — match), story (variant=quote_led — match), contact (variant=cta_band, "colophon" — match). MISSING from prompt entirely: metrics/big_numerals ("By The Numbers" 240/31/4/~5k), services/list ("What I Print" S-01..04 with prices), beliefs/numbered ("House Rules" 01-04), testimonials/quote_led ("Kind Words"), logos_press/mentioned_in ("Seen In" press chips), credentials/pills ("Background" school/residency pills), and the persistent top header bar with regmark + nav. So the prompt covers roughly 4 of 9 content sections — under half the page. An agent following the prompt would produce a much shorter page than index.html.

**Prompt 缺失的模块:**
- metrics / big_numerals (By The Numbers — 240 editions, 31 stockists, 4 drums, ~5k sheets; first numeral uses .miss misregister, each cell a different spot color, 2px ink grid border)
- services / list (What I Print — 4 rows S-01..S-04 with titles, descriptions, and yellow price chips with pink offset shadow)
- beliefs / numbered (House Rules — 4 numbered creed items with colored big numerals)
- testimonials / quote_led (Kind Words — single blockquote with giant pink multiply quote glyph, mono citation)
- logos_press / mentioned_in (Seen In — press chips with offset multiply color shadow behind each, cycling pink/blue/yellow)
- credentials / pills (Background — pill list with rounded-999px borders, school/residency credits)
- top header bar (Space Mono brand + regmark crosshair logo + nav: Work/Studio/Services/Press/Commission)

**Photo 契约 OK:** True — Prompt describes the photo/toggle contract accurately and in detail: u-photo wrapper, u-fallback typographic composition, default-on, the exact display !important rules, and the toggle markup/script. The page implements exactly this (portrait.webp grayscale+contrast+multiply inside a print-panel with offset blue/yellow frames + pink screen wash + FIG.01 panel tag; fallback is a 2-COLOUR/RISO/PRESS misregistered type panel with a registration mark). One small gap: the prompt says to wrap the portrait and "apply a spot-color tint via blend mode" but does not name the specific recipe the page uses (grayscale(1) contrast(1.15) brightness(1.05) + mix-blend-mode:multiply on the img, plus a separate pink-wash layer at mix-blend-mode:screen opacity .34, plus offset blue+yellow frame divs). An agent would get the idea but not the exact look.

**Token:** Color tokens match exactly (paper #f6f1e3, paper-deep #efe7d2, ink #1b1a17, ink-soft #4a463c, pink #ff48b0, blue #0078bf, yellow #ffd400, overprint #7a2a8c, hairline #d8cfb6). Fonts and type scale match DESIGN.md and :root. Minor drifts: prompt's display-md is "38px ... -1px" but the page's section h2 actually renders clamp(30px,6vw,48px)/-1.4px and the hero head is clamp(54px,11vw,92px) — the prompt gives only fixed px values, not the clamp() responsive ranges the page relies on, so a literal agent would build non-fluid type. Prompt omits --tight:14px and --maxw:1180px tokens (present in :root). Prompt says "rounded 0-2px (essentially square)" but the credentials pills are border-radius:999px — a deliberate exception the prompt never states.

**缺失的 Signature 技术:**
- The .miss misregister helper is under-specified: page uses ::before/::after with content:attr(data-t), z-index:-1, pink translate(-4px,3px)+multiply / blue translate(4px,-3px)+multiply. Prompt says 'duplicate text and offset 2-5px or use text-shadow/pseudo-elements' but never gives the exact dual-pseudo + data-t attribute pattern, which is the page's core headline identity.
- ink-settle motion is named but not specified: ghosts start at translate(±9px,±7px) and transition to ±4px,±3px over .7s cubic-bezier(.2,.8,.2,1) when .settle.in is added. Prompt just says 'blocks settle into register on scroll' — no offsets, no easing, no .settle/.in class mechanism.
- The .reveal scroll mechanism (opacity 0 + translateY(16px) -> .in via IntersectionObserver threshold 0.15, rootMargin -8%) is not described as the reveal engine.
- Halftone overlay exact recipe: radial-gradient(var(--ink) 0.7px, transparent 0.8px) background-size 4px 4px opacity .10 multiply. Prompt says 'tiling radial-gradient dot pattern' without the sizes/opacity.
- Grain layer exact recipe: inline SVG feTurbulence fractalNoise baseFrequency 0.85 numOctaves 2 as a data-URI background, opacity .07 multiply. Prompt names feTurbulence but not the parameters.
- CTA offset-shadow technique: solid ink button with a pink ::after at translate(5px,5px) multiply that shifts to 7px,7px on hover — the no-drop-shadow 'depth via offset block' pattern. Not described.
- Highlight/marker on the thesis em: yellow background + box-shadow:3px 3px 0 rgba(255,72,176,.5) (pink offset). Reused on service price chips. This 'offset sticker' motif is a recurring identity element the prompt never names.
- Work card swatches: two overlaid dot layers (dot-a blue translate(-3px,0) 11px grid, dot-b yellow translate(4px,3px) 14px grid) with multiply over a solid spot-color swatch, plus a huge letter glyph at mix-blend-mode:screen — this is how the print cards get their riso look; prompt only says 'misregistered spot color + mono caption'.
- Registration-mark glyph (.regmark/.reg): crosshair built from two ink bars + a pink ringed circle, used in nav brand and fallback. Not mentioned.
- Section structure: each .sec has border-top:2px solid ink and a numbered .sec-head (mono pink '0N /' + uppercase h2). This 2px hard rules + numbered heads rhythm is a strong structural signature absent from the prompt.
- Contact band inverts to ink background with yellow colophon/mono and white .miss headline whose ghosts stay pink/blue — the dark colophon footer treatment isn't specified.

**矛盾:**
- Prompt: 'rounded 0-2px (essentially square)' contradicts the credentials pills which use border-radius:999px.
- Prompt's Module plan implies a 4-section page; the page is a 9-section long-scroll with a persistent nav bar — a structural mismatch that would make a prompt-only build look and feel substantially different (shorter, less editorial).
- Prompt type scale gives fixed pixel sizes (92px / 38px) while the page is built on clamp() fluid type — following the prompt literally yields non-responsive headlines that won't match the page at any width except the max.

**建议修复:**
- Expand the Module plan to all 9 sections in page order: top nav bar (mono brand + regmark + nav), hero (bold_statement), selected_work/grid, story/quote_led, metrics/big_numerals (give the figures 240/31/4/~5k), services/list (give the 4 priced services), beliefs/numbered (4 House Rules), testimonials/quote_led (the Marek Dolezal quote), logos_press/mentioned_in (6 press names), credentials/pills (6 pills), contact/cta_band colophon. Include the concrete content for each so the agent doesn't fall back to filler.
- Pin the misregister helper exactly: '.miss uses ::before and ::after with content:attr(data-t), z-index:-1; pink copy translate(-4px,3px) + mix-blend-mode:multiply, blue copy translate(4px,-3px) + multiply.'
- Specify the ink-settle motion: ghosts start at ±9px/±7px and transition to ±4px/±3px over .7s cubic-bezier(.2,.8,.2,1) when an IntersectionObserver adds .in; pair with a .reveal opacity/translateY(16px) fade. Disable under prefers-reduced-motion.
- Give exact texture recipes: halftone = radial-gradient(ink 0.7px, transparent 0.8px) / background-size 4px 4px / opacity .10 multiply, fixed full-page; grain = inline SVG feTurbulence fractalNoise baseFrequency 0.85 numOctaves 2 data-URI / opacity .07 multiply.
- Document the recurring 'offset block' depth pattern (no drop shadows): CTA = solid ink with pink ::after at translate(5px,5px) multiply shifting to 7px on hover; yellow markers/price chips use box-shadow:3px 3px 0 rgba(255,72,176,.5); press chips use a colored ::after offset 4px,4px multiply cycling pink/blue/yellow.
- Replace fixed px type with the page's clamp() ranges (hero head clamp(54px,11vw,92px); section h2 clamp(30px,6vw,48px)), add --maxw:1180px and --tight tokens, and note the pill border-radius:999px exception to the 'square corners' rule. Also specify the structural rhythm: each section border-top:2px solid ink with a numbered mono '0N /' + uppercase head, and describe the work-card swatch (solid spot color + two offset multiply dot layers + screen-blend letter glyph).


---

# 附录：组件 prompt


## motion-lab — fid 9 / qual 9 / update=True

**逐项:**
- 23 press (硬投影按压): the only brief of 23 missing the '尊重 prefers-reduced-motion' clause that every other brief includes — a consistency gap. Also omits the entrance animation (press-demo, ~1.1s shadow-collapse on load) that the impl actually plays before settling; brief only describes the hover/press interaction.
- 10 depth (景深错层): brief says the two layers move at '不同速度与方向' (different speed AND direction), but the impl runs both layers on the same 5s duration — they differ in direction and amplitude (back ±18px, front ±9px), not speed. Slightly misdescribes the mechanism.
- 15 underline (下划线展开): brief offers 'hover 或入场时触发' as if optional, but the impl is entrance-only (auto-plays 0.2s after load via forwards, no :hover rule). Minor — acceptable as reproduction guidance but doesn't match this lab's actual behavior.
- 19 scan (扫描线/VHS): brief omits that the effect uses a monospace font (card sets mono:true / is-mono). Cosmetic, low impact.
- 18 reveal (逐行浮现): brief prescribes IntersectionObserver to trigger, but this lab drives it via viewport-math + a CYCLE timer. The IO guidance is the canonical reproduction path so this is fine, just noting the impl differs.
**系统性:**
- One brief (press) drops the otherwise-universal prefers-reduced-motion clause, breaking the consistent template the other 22 follow (name in 「」 → mechanism → key numeric params → '纯 HTML/CSS/JS、零依赖、单文件' → reduced-motion → use case).
- A few continuous/looping effects' briefs describe the entrance/intro phase but not always the loop, or vice-versa (press describes interaction but not its auto-intro); generally minor.
**修复:**
- Add '尊重 prefers-reduced-motion。' to the press (23) brief so all 23 are consistent.
- Fix depth (10) brief: change '不同速度与方向' to reflect that the two layers share duration but differ in direction and amplitude (parallax), not speed.
- Tighten underline (15) brief to state it triggers on entrance (matching impl), or keep hover as an explicitly-optional variant.
- Optionally note the monospace treatment in the scan (19) brief for exact reproduction.

## gsap:core+stagger+timeline+easing — fid 4 / qual 4 / update=True

**逐项:**
- ease-built: prompt omits the per-track ease function-based value (ease:(i)=>eases[i]) — it says 'four blocks use four different eases' but an agent wouldn't know the mechanism is GSAP's index-function ease applied across a single tween; minor but the key technique (function-based per-target ease) is unnamed.
- ease-built: code shows x:220 but init uses x:210 — minor numeric mismatch between code snippet and actual init.
- ease-custom: prompt never states duration (1.6s) — describes overshoot/pullback/settle qualitatively but omits the explicit duration the code specifies; also doesn't mention the curve is defined via SVG path string, though that's arguably fine for a code-free brief.
- ease-bounce: code snippet uses y:130 but init uses y:86 — numeric mismatch (stage-fit adjustment, but the displayed 'real snippet' diverges from what runs); prompt omits strength/squash params (acceptable as code-free, but the squash amount is the visible detail).
- ease-wiggle: code uses gsap.to(.needle,{rotation:26...}) from rest, but init uses fromTo({rotation:0},{rotation:26}) — code shown is a to() while running code is fromTo(); prompt omits wiggles count (8) and duration (1.8s).
- ease-wiggle: prompt says 'amplitude gradually decays' which matches type:easeOut, but the decay TYPE is the defining CustomWiggle param and isn't surfaced even qualitatively beyond 'decays'.
- core-keyframes: prompt says 'each segment has a brief pause between them' but the code has no per-segment delay — the only pause is repeatDelay:0.4 at loop end; brief overstates inter-segment pauses, mild mismatch.
- tl-position: prompt is strong but does not state the 0.5s per-segment duration or power3.out ease (the timeline defaults); an agent gets the choreography (labels/'<'/'-=0.2') but not timing.
- core-to: code snippet is a bare gsap.to() with no loop, while init wraps it in a yoyo/repeat timeline; prompt does mention 'stop at end then return to start looping' so prompt actually describes the init not the code — prompt/code register mismatch (prompt richer than code).
**系统性:**
- Snippet-vs-init numeric drift: several cards show rounded 'pretty' numbers in the code field (x:220, y:130) that differ from the actual init values (x:210, y:86). The code field is contracted to be the real displayed snippet; readers copying it get slightly different motion than the live card.
- Loop-wrapper omission in code snippets: core/easing 'loop' cards show a single bare tween in code but actually run inside a repeat:-1/yoyo timeline. Prompts compensate by describing the loop, creating a consistent prompt(describes-loop) vs code(no-loop) split across the loop-kind cards.
- Duration/ease frequently present in code but absent from prompt: prompts reliably name x/stagger/from but inconsistently include duration and ease values (strong in core-* and stagger-*, weaker in easing-* and tl-position). An agent reproducing from brief alone would guess timing on the Easing/Timeline cards.
- Plugin registration is well surfaced (CustomEase/Bounce/Wiggle all show registerPlugin in code), and the prompts correctly stay code-free — good. But the prompts don't name the plugin even in plain language ('a custom-bounce ease'), so an agent might reach for built-in bounce.out instead of CustomBounce.
**修复:**
- Reconcile code-snippet numbers with init values (ease-built x, ease-bounce y) so the displayed 'real snippet' matches what runs; or annotate that stage values are scaled.
- For loop-kind cards (core-to, core-fromto, core-keyframes, ease-*, tl-control), either show the repeat/yoyo timeline wrapper in the code field or add a one-line comment that the live card loops — align code with the prompt which already describes looping.
- Add explicit duration + ease to the Easing and Timeline prompts (ease-custom 1.6s, ease-wiggle 1.8s + 8 wiggles, tl-position 0.5s/power3.out) so the brief alone is reproducible.
- Surface the plugin name in plain language in CustomEase/Bounce/Wiggle prompts (e.g. 'a custom bounce ease with a squash on impact') so an agent picks the right plugin rather than the built-in approximation.
- Fix core-keyframes prompt: drop 'brief pause between each segment' (no inter-segment delay exists) or add real per-keyframe delays to match.

## gsap:scrolltrigger+observer+split+scramble — fid 4 / qual 4 / update=False

**逐项:**
- split-wave: prompt says characters cycle through 'a set of gradient colors' (一组渐变色之间循环流动) but code only tweens to a single color #22d3ee with yoyo back to the base color — there is no multi-color cycle. Minor over-promise vs code.
- st-scrub / st-parallax / st-horizontal / st-progress / st-velocity (the 5 loop-kind cards): the prompt describes the self-contained yoyo-loop SIMULATION (无限循环 / 来回往返), while the `code` field shows the REAL ScrollTrigger setup (scrub/pin/onUpdate/scroller). An agent reproducing from the prompt alone would build a looping fake, not a scroll-driven effect. This is by design (per CONTRACT §5) but the prompt never names ScrollTrigger, so the brief alone won't yield scroll-linked behavior.
- scramble-decode: prompt omits chars='upperCase' (inferable from the all-caps target) and the speed/revealDelay params; reproducible-enough but less precise than the splittext briefs.
- text-type: card lives in group 'Text' and uses TextPlugin (not Scramble) — correct per contract, but title_en 'TextPlugin' + a Scramble-named family file could read as inconsistent; prompt's blinking cursor is CSS-only and not represented in the code snippet (only a comment).
- st-reveal / st-batch / split-* : briefs omit explicit ease/duration in places (e.g. st-reveal power2.out/0.6) — the named param that matters (stagger 0.08, stagger 0.04/0.12/0.15) is present where it defines the effect, so impact is low.
**系统性:**
- Loop-kind ScrollTrigger cards (5 of 9) intentionally describe the self-contained loop simulation rather than the real scrub/pin behavior shown in `code`. Prompt and code diverge by design: the prompt reproduces the demo-card loop, the code teaches the real API. An agent handed only the prompt cannot infer it needs ScrollTrigger. Consider having these prompts name the underlying ScrollTrigger action (scrub/pin/snap) so the brief maps to the code.
- Prompts rarely name the GSAP plugin explicitly (ScrollTrigger, SplitText, ScrambleText, Observer). They describe the visible behavior well, which is the code-free intent of `prompt`, but for the more plugin-specific effects (snap, batch, observer-unified) the plugin is the load-bearing detail and is left implicit.
- Exact ease/duration values are inconsistently included across cards — present when they define the effect (back.out for chars, elastic return for velocity) but dropped in simpler reveals. Not a fidelity blocker, just uneven precision.
**修复:**
- split-wave: align prompt and code — either make the code cycle through multiple colors (e.g. a color keyframe sequence) or change the prompt to say characters tint to a single accent color and back.
- For the 5 loop-kind ScrollTrigger cards, add one clause to each prompt naming the real action (e.g. 'driven by scroll position via a scrub-linked ScrollTrigger') so the brief still points at the right API even though the card itself loops.
- Optionally surface the defining ease/duration in the simpler briefs (st-reveal, splittext chars/words/lines) for consistency with the cards that already state them.

## gsap:flip+draggable+physics+motionpath — fid 4 / qual 4 / update=False

**逐项:**
- flip-state: code ease is back.inOut(1.4) (a visible overshoot/settle), but prompt says only '平滑飞到新位置' — omits the bouncy overshoot character an agent would otherwise miss.
- flip-filter: code's onEnter pops re-entering cells with scale 0->1 (fromTo opacity+scale), but prompt describes re-appearing blocks only as '淡入登场' (fade-in) — the scale pop is dropped.
- drag-inertia: prompt omits that the snap targets a 44px grid AND that edgeResistance:0.8 is set; the grid-snap is described well, edgeResistance is a minor omission.
- phys-confetti: solid; prompt faithfully conveys per-piece velocity/angle, shared gravity parabola, spin and fade, plus the pause-then-repeat (matches oneshot hub replay).
- mp-follow / mp-rotate / mp-orbit: prompts match code well (curve shape, autoRotate 'nose points forward', forever orbit with repeat:-1).
**系统性:**
- By design (per CONTRACT.md item 7), prompts are code-free and omit numeric params (duration, ease name, velocity/angle ranges, stagger value). This is consistent across all 12 cards and intentional — the plugin/ease detail is carried by the skill chip + hint + the separate code snippet, not the prompt. So 'omits ease/duration' is generally not a defect here; the only real gaps are when the prompt also drops a *perceptible* trait the code produces (overshoot, pop).
- No prompt names its GSAP plugin explicitly (Flip / Draggable / InertiaPlugin / Physics2DPlugin / MotionPathPlugin). Consistent across all four files. An agent reproducing from the brief alone would infer the effect but not necessarily reach for the same plugin — though hint + skill chip + code field cover this in the UI.
**修复:**
- flip-state prompt: add the overshoot/settle character (e.g. 'flies to the new slot and slightly overshoots before settling') to match ease: back.inOut(1.4).
- flip-filter prompt: change '淡入登场' to note re-entering blocks pop in from zero scale (fade + scale-up), matching the onEnter fromTo {opacity:0, scale:0}.
- Optional consistency pass: where a perceptible trait is param-driven (snap grid in drag-inertia), keep describing the *behavior* (already done for snap) and ensure each prompt names every behavior the code visibly produces, even while staying code-free.

## gsap:drawsvg+morphsvg+utils — fid 4 / qual 4 / update=False

**逐项:**
- draw-line: minor — prompt says 约1.6秒 / 先慢后快再收尾 (matches power2.inOut, dur 1.6) and the trailing tip dot is described; faithful. No mention of the plugin name DrawSVG in prose, but prompt deliberately stays code-free per contract — acceptable.
- draw-signature: minor — code field shows fromTo drawSVG '0% 0%'->'0% 100%' (dur 2, power1.inOut), prompt says 约2秒/略带快慢节奏 + 下方横线随后划出; faithful. The displayed `code` omits the rule-line tween shown in init, but that's an acceptable simplification.
- draw-check: faithful — prompt describes ring-then-check sequential draw + final scale bounce; code shows ring(0.7)->check(0.4, overlap -0.1)->scale 1.12 yoyo. Code field omits the ease:'sine.inOut' present in init's final .to, trivial.
- morph-shape: faithful — loop, yoyo, repeatDelay 0.5, power2.inOut all in both prompt (来回循环/停顿半秒/平滑无翻折) and code.
- morph-icon: minor — code field shows three independent gsap.to() calls with a comment '反向播放即可变回菜单', but init actually builds a single timeline with repeat:-1, yoyo:true, repeatDelay:0.6. Prompt says 来回循环 (correct for the real behavior). The displayed code does NOT show the loop/yoyo that produces the looping the prompt promises — a reader reproducing from code alone would get a one-shot, not the looping menu<->close. Mild prompt/code-vs-displayed-code mismatch.
- morph-blob: faithful — prompt 三四个不规则圆形/永不停歇循环/柔软, code shows timeline repeat:-1, sine.inOut, dur 1.6 across 4 blob targets.
- util-random: faithful — prompt describes snap-to-grid random x/y + rotation 0/90/180/270 + looping; code shows random(min,max,22,true), rotation random([0,90,180,270]), stagger 0.05, repeat:-1, repeatRefresh. Prompt omits the return-to-origin second tween but that's a demo-staging detail.
- util-maprange: faithful — one driver 0-100 -> knob x / bar width / color, synced, clamped; clamp+mapRange+interpolate+normalize all reflected in both. Strong card.
- util-matchmedia: minor — prompt describes breakpoint switch (narrow=small move, wide=large move+rotation) + reduced-motion static end-state + draggable width slider. Code field shows real gsap.matchMedia() with min/max-width + prefers-reduced-motion. init uses a SIMULATED width slider (kill/rebuild) rather than real matchMedia (documented in code comment because stage can't change real viewport). Prompt/displayed-code are consistent with each other; the live demo intentionally differs — acceptable and self-documented.
**系统性:**
- Prompts are deliberately code-free per the contract, so they never name the plugin (DrawSVG/MorphSVG) or exact API in prose. This is by-design, but means an agent reproducing from the prompt ALONE (without the visible code/skill chip) must infer that SVG path stroke-drawing or path-d morphing is the mechanism. For these SVG families that inference is fairly forced by the visual description, so fidelity stays high — but it is the weakest link versus core/tween cards.
- Several `code` display fields are simplified relative to the actual init() (draw-signature omits rule tween, draw-check omits final ease, morph-icon shows loose gsap.to() instead of the looping timeline). Contract permits this ('可适当精简'), but morph-icon's simplification drops the loop semantics the prompt promises.
**修复:**
- morph-icon: update the displayed `code` to show a timeline with repeat:-1, yoyo:true (matching init), or add a one-line comment that the loop is achieved via a yoyo timeline — currently the snippet alone reproduces a one-shot, not the looping menu<->close the prompt describes.
- Optional consistency: have key-param coverage in prompts state approximate duration in the two morph loop cards (morph-shape says 'half-second pause' but no per-morph duration; morph-blob gives none) to match the more specific draw-* prompts that do cite ~1.6s/~2s.