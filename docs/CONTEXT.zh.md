# CONTEXT - 这个仓库是什么、为什么存在、东西都在哪里

> 给未来冷启动接手的 agent 或人看。先读这份和 `../CLAUDE.md`。
> `CLAUDE.md` 讲怎么在仓库里工作；这份讲来龙去脉和地图。

## 大图景

Ancher 正在做一个 **AI 个人网站生成器**：用户提供一点关于自己的信息
（一句话、一些链接、一张照片），agent 就生成一个漂亮、有辨识度的个人站。
真正困难的不是“做一个页面”，而是在保持**质量地板**的同时，让页面**不通用**
（足够多样，有自己的观点）。

策略（见下面的 wiki 文档）是一个**分层混合系统**：

```
多样性 = 视觉方向 × 模块/结构 × 内容角度
```

每一层都经过*策展*（所以有质量地板），但又可以*组合*（所以有多样性）。
这个仓库，也就是 **Style Atlas**，提供其中两层的策展素材：视觉
**directions** 和结构 **modules**，以及可以直接复制使用、用来生成它们的
**prompts**。它同时也是真实生成器的 **eval set**：每个 direction 的
`sample.png` 都是它自己的 `index.html` 生成后的截图，所以如果截图不对，
就说明 spec 不对。

这个 atlas 是**原型 / 参考实现**。真实生成会放在后端（`ancher/api`）里；
目前我们用 subagents/workflows 来充当后端生成器（能写前端的 agent ==
生成器）。后续计划是把真实后端 agent 调到能够复现这些 prompts 的产出质量。

## 已经做了什么（build log）

首轮在一次推进里完成（2026-06-03）。仓库：`streamify-one/ancher-site-atlas`。

1. **5 个种子 directions** - editorial, swiss-minimal, warm-personal,
   technical-mono, bold-brutalist。每个都包含 `prompt.md`（可复制应用的产物）+
   `DESIGN.md`（tokens）+ 自生成的 `index.html` + `sample.png`。由 fan-out
   subagents 充当生成器产出。
2. **浏览站**（`site/`）- catalogue gallery（`index.html`）+ 一个
   **viewer shell**（`view.html`），用 iframe 装载 direction 页面，并加上返回 /
   上一个 / 下一个，让页面彼此互通（没有孤儿页）。`build_registry.py` 扫描
   `DESIGN.md` frontmatter -> 带 artifact 校验的 `registry.json`。
3. **Codex review pass** - 对种子版本跑了 `codex`；应用了 5 个修复
   （本地服务路径、reduced-motion 下的 smooth-scroll、registry 校验、tab
   a11y、copy fallback），另有 3 个带原因 defer。
4. **照片 + toggle** - 每个页面加了用户照片槽位 + 右下角 `"照片 Photos On/Off"`
   toggle（默认 On），用来评估“这个设计是否*需要*照片”。前 5 个种子方向使用
   `thispersondoesnotexist` 人脸（保持原样）。
5. **Module atlas** - 5 个类别（identity、trust、narrative、conversion、
   personality）下 24 个 modules / 约 52 个 variants。每个都是自包含 specimen
   sheet（所有 variants 放在一个文件里，中性共享 tokens）。浏览入口是
   `site/modules.html`。由 24-agent workflow 构建。
6. **Directions 从 5 扩到 17** - 新增 12 个：fashion-luxe, editorial-dark,
   vibrant-gradient, retro-print, neo-saas, dark-luxe, playful-rounded, mono-zine,
   art-gallery, organic-natural, cinematic-dark, newsprint。由 12-agent workflow
   生成，使用 `assets/` 中的艺术图片。
7. **Asset library** - 34 张 AI 占位图压缩成 webp（117MB -> 11MB），改成描述性
   slug 命名，并带 `assets/MANIFEST.md` + `_manifest.json`。
8. **和 awesome-design-md 做覆盖分析** - 见 `COVERAGE.md`。
9. **实验批次（17 -> 27 directions）** - 补上 illustration-rich-brand 这个缺口，
   以及 9 个 design-md 和我们都没有的 styles：glassmorphism,
   memphis-postmodern, y2k-vapor, handcrafted-sketch, maximalist-collage,
   soft-3d-clay, art-deco, risograph, athletic-sport。Glass/3D/Y2K 都是纯 CSS
   （无 WebGL）。使用了此前未使用的 `assets/` 图片。
10. **docs/** - 这个文件夹（CONTEXT / DECISIONS / COVERAGE），让未来 agent 有
    “为什么”和 repo 地图。
11. **Skin Lab**（`site/skins-lab.html` + `skins.json`）- 回答“module atlas
    太 bland / 单一配色”的问题：用一个 token contract + 每个 direction 的 skin，
    让同一组 modules 可以实时换肤（module × direction matrix，不生成 648 个静态页）。
    原型：5 个 skins × 5 个 modules。也是 cross-atlas plan 的第一版。
12. **In-context component inspector** - viewer 里的「组件」toggle 现在会拆解你
    当前正在看的页面：就地 outline + 标注每个 `[data-module]` section，并在侧栏
    给出解释。全部 27 个 direction 页面都通过两个 workflow 加了
    `data-module`/`data-variant`（共 124 个 sections）。
13. **Vercel hosting** - 作为独立静态站部署到
    **https://ancher-site-atlas.vercel.app**（`vercel.json`：`/` -> `/site/`，
    `.md`/`.json` 使用 utf-8 charset）。重新部署命令：
    `vercel deploy . --prod --yes`。
14. **Text Motion Lab**（`site/motion-lab.html`）- 第 4 个浏览面（gallery tab
    「文字动效」），展示 23 个文字动画 patterns，分两组：**01-10** 基础效果
    （typewriter, blur-in, glitch, scramble, flip, slice, stroke-draw,
    highlight-sweep, elastic, depth-shift）和 **11-23 从 27 个 direction 页自身
    motion 中提取的效果**（jitter, riso-misregister, sticker-pop, neon-glow,
    underline-draw, marquee, tilt-in, reveal-stack, scanlines, blob-morph,
    clay-float, pulse-dot, button-press，每个都标注并链接到来源 direction）。
    每个都是纯 HTML/CSS/JS，无依赖。单文件自包含；「复制整页源码」会复制全部
    23 个效果，方便复用。这是生成器的 motion layer（prompts 可以按名字调用这些效果）。
15. **Image Lab**（`site/image-lab.html`，tab「图像处理」）- 原图 -> prompt ->
    CSS -> 效果：真实 framed photos 自动适配 + 每个 module 的 image slots，是
    image-treatment layer。
16. **GSAP Motion Lab**（`site/gsap-lab.html`，tab「GSAP 动效」）- 基于
    **vendored GSAP 3.13**（`vendor/gsap/`，所有 bonus plugins，无 CDN）的
    **JS-driven motion** layer；通过
    `docs/superpowers/specs/2026-06-03-gsap-lab-design.md` + 一轮 codex review
    设计。一个 hub page 里有两个面：1. **14 个完整页面 demos**
    （`gsap-demos/<id>/`），每个都是一个原创 style × 一个 plugin cluster
    （SplitText / ScrollTrigger pin·scrub·parallax / ScrollSmoother / Flip /
    Draggable+Inertia / DrawSVG / MorphSVG / MotionPath / ScrambleText /
    Physics2D / Observer），registry-driven（`gsap_registry.json` 来自每个 demo 的
    `meta.json`），截图 -> live iframe viewer；2. **54 张 effect cards**
    （`site/gsap-cards/<family>.js` -> `window.GSAP_CARDS`，contract 在
    `CONTRACT.md`），按 plugin 分组，进入视口自动播放，每张都有 复制 Prompt +
    复制代码。由 29-agent fan-out workflow 构建；定位为内部素材 / eval set。
    （学到的 gotcha：GSAP 要在 `<body>` 末尾加载 - Flip 的 `_initCore` 依赖
    body，在 `<head>` 里注册会卡住。见 DECISIONS D13。）

> 现在：**27 directions**，24 modules / 约 52 variants，84 个 webp assets，
> 5 个 prototype skins，23 个 text-motion patterns，**14 个 GSAP demos +
> 54 张 GSAP effect cards**。
> 实际构建跨度已经超过一天；把上面的日期说明理解成“first push”，不是完整历史
> （完整历史见 `git log`）。

设计 rationale 和更难的“为什么”决策：见 `DECISIONS.md`。

## Repo 和文件夹地图（本文引用到的一切）

所有路径都是本机路径；相关 GitHub org 在表里注明。

| What | Path | Role |
|---|---|---|
| **This repo** | `~/streamify/ancher/ancher-site-atlas` (gh: `streamify-one/ancher-site-atlas`) | Style Atlas（directions + modules + gallery + assets） |
| **art_style** | `~/streamify/ancher/art_style` (gh: `streamify-one/ancher-art-style`) | 我们参考的成熟 analog：一个策展的*插画风格*图鉴，每个条目都有 prompt + example image + 结构化 `site/data/styles.json` + 静态 gallery。同一套哲学，不同领域。 |
| **awesome-design-md** | `~/github/awesome-design-md` | 我们采用的 `DESIGN.md` 格式来源（Google Stitch concept）：73 个真实品牌，每个品牌一份 markdown design-language doc（YAML token frontmatter + prose）。也是 direction 词汇和覆盖对比的来源。 |
| **ancher-html-style** | `~/streamify/ancher/ancher-html-style` (gh: `streamify-one/garden-of-particles`) | 我们复用的 gallery/registry pattern（registry 单一事实源 + 每条目一个文件夹 + landing page）。它的*内容*是重 WebGL effects（这里 out of scope）；我们只复制了*架构*。 |
| **ancher/api** | `~/streamify/ancher/api` | 真实后端生成器（FastAPI + pydantic-ai）。Producer pattern（`app/agents/` compose/image/ppt）；HTML artifact hosting 在 `app/services/public_share.py`，服务地址为 `<slug>.ancher.app`。这个 atlas 是未来 `html_generator` 的上游素材/eval。 |
| **design system** | `~/streamify/ancher/streamify-one-design-system` | React 19 + Tailwind v4 token source（`/src/styles/tokens/`）。Direction token values 可以从这里取，以保持产品一致的 palette。 |
| **wiki (this KB)** | `~/wiki` (gh: `steveli2026/wiki`) | 设计文档（见下） |

### Wiki design docs（深入解释“为什么”）

在 `~/wiki/ancher/engineering/` 下：

- **`personal_site_generation_strategy_v1.md`** - layered-hybrid 策略；把每个想法
  （screenshot templates / module library / free-form）映射到现有 api patterns
  （image taxonomy、output_tpl blueprints、compose drafter->reviser）。修正了
  “React component tree” 这个错位假设（真实 hosting = single-file HTML）。
- **`personal_site_atlas_collection_v1.md`** - 这个 atlas 的执行文档：双 catalogue
  schema（directions + modules）、self-generated-screenshot loop、browse-site spec、
  workflow-ready phases。**这个仓库实现的就是这份文档。**
- **`html_js_generation_quality_v1.md`** - 下游 `html_generator` + render-check 的
  质量循环（M0-M3），真实后端后续会构建。Atlas 页面就是它应该产出的样子。
- **`web_agent_platform_strategy_v1.md`** - link-enrichment（LinkedIn/Twitter）
  crawl stack，用于未来“粘贴你的链接”这个 intake step。

## 如何继续（可重复的动作）

新增 directions/modules 是一个 fan-out 流程：每个 item 一个 subagent，先读
`directions/editorial/{DESIGN.md,prompt.md}` 了解格式，再从 `assets/` 复制一张图，
然后写 `DESIGN.md` + `prompt.md` + `index.html`（带 photo+toggle contract）。
之后给每个页面截图（photos ON，先滚动以触发 reveal）-> `sample.png`，运行
`python3 scripts/build_registry.py`，验证 gallery。见 `CLAUDE.md` + wiki 执行文档
§7 里的 phased plan；下一批该加哪些 directions 看 `COVERAGE.md`。
