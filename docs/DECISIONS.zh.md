# DECISIONS - 为什么这样构建

简短的 decision records。每条都说明：决策是什么、为什么、排除了什么。
如果你准备改其中一条，先读对应的“为什么” - 大多数都是有意为之。

## D1 - Layered hybrid，而不是一个模板

**Decision:** 多样性来自 `visual direction × module/structure × content angle`。
每一层都经过策展，但可以组合；不是一个大模板，也不是“让 AI 自由发挥”。

**Why:** 单一模板 -> 所有东西都长一样；纯自由发挥 -> 模型会退回默认审美
（“AI 紫色渐变”），最后还是收敛。结构是有质量地板的*多样性来源*，不是多样性的敌人。

**Rules out:** 一个 master template；只靠 prompt 做自由生成。

## D2 - 单文件自包含 HTML（不是 React component tree）

**Decision:** 每个生成页都是一个自包含的 `index.html`（inline CSS/JS），外部资源只允许
Google Fonts + 一张本地图片。

**Why:** 真实产品会把 artifact 作为**单文件 HTML 托管在 `<slug>.ancher.app`**
（见 `ancher/api` 的 `public_share.py`）。早期某个方案假设用 React/Tailwind component
tree，但那需要 build step，也不能按这种方式直接服务。Atlas 必须匹配真实 hosting model，
否则就不是忠实 eval。

**Rules out:** frameworks、build steps、多文件页面、远程图片（除了我们为照片 demo 明确允许的那一张本地照片）。

## D3 - DESIGN.md 格式借自 awesome-design-md（两种字段层次）

**Decision:** direction tokens 放在 `DESIGN.md` 里（YAML frontmatter，近似 Google Stitch
`DESIGN.md`）- 许多精确 token fields **加上**一段 evocative prose `description`。

**Why:** 对“字段太多会扼杀创造力”的担心，答案是把字段拆成两种层次：
**constraint** fields（color/type/spacing）多而精确，它们设定质量地板，并且大多会作为
CSS vars 注入，所以不会消耗模型的创作预算；**latitude** fields（prose DNA、module
`layout_hint`）少而 evocative，创造力主要在这里发生。要避开中间那种糊糊的东西
（又长又*规定性*的 prose）。

**Rules out:** 为了“解放”模型而剥掉 tokens；以及过度规定 layout/copy。

## D4 - 自生成截图（不是真实网站截图）

**Decision:** 一个 direction 的 `sample.png` 是它自己的 `index.html` 生成后的截图。

**Why:** 这样可以自校验（截图丑 -> spec 错 -> 修 spec），也能作为真实生成器的回归
**eval set**，而且 IP-clean（我们拥有它）。真实网站截图会变成 clone targets
（vision-to-code 不稳定且会收敛），也会有授权问题。

**Rules out:** 把“复制这个网站”作为生成模式。参考站点只用于提炼 DNA，不用于克隆。

## D5 - Photo + toggle，默认 ON

**Decision:** 带照片的页面把照片接成 `.u-photo`，fallback 接成 `.u-fallback`，并带一个固定的
`"照片 Photos On/Off"` toggle（默认 On），切换 `body.no-photos`。

**Why:** 这样可以逐个 direction 评估一个真实产品问题：这个设计是否*需要*照片，还是作为纯排版页面也成立
（用户可能不上传照片）。默认 On，因为这是更丰富的默认状态。

**Note:** 前 5 个种子 directions 用 `thispersondoesnotexist` 人脸；新 directions 用
`assets/` 里的艺术图片（更多样，也符合用户偏好）。真实产品里的 slot 会是用户上传的图片 URL。

## D6 - Modules 是结构（中性），directions 承载风格

**Decision:** module specimen sheets 使用中性共享 tokens + system fonts；视觉身份由 directions 承载。

**Why:** Modules 回答的是“有哪些 sections、什么顺序、哪个 variant” - 这和视觉风格正交。
用中性 skin 展示 module，可以把注意力留在结构上。Module schema 要保持**轻薄**
（purpose + 少量 evocative variant `layout_hint`），而不是 pixel specs。

**Rules out:** 把视觉品牌烤进 modules；一个巨细无遗的重 module schema。

## D7 - 目前用 subagents/workflows 充当生成器

**Decision:** 我们用 fan-out subagents/workflows 生成页面，把“能写前端的 agent”当作真实后端
`html_generator` 的替身。

**Why:** 这样构建素材/eval 和完成后端可以解耦（互不阻塞）。Agents 遇到的问题
（比如漏掉 reduced-motion case）正好是 eval feedback，后续可以折进真实生成器 contract。

**Rules out:** 等后端完成后再开始策展 atlas。

## D8 - 复用 ancher-html-style 的 gallery 架构；从 frontmatter 构建

**Decision:** 复用 `ancher-html-style` 的 registry-as-single-source-of-truth +
per-item folder + static gallery；`registry.json` 从 `DESIGN.md` frontmatter 自动生成
（带 artifact validation），不是手工维护。

**Why:** 这是已经验证过的 pattern；自动生成可以防止 broken cards（如果 direction 缺少
4 个 artifacts 中任意一个，validation 会让 build fail）。单开新 repo（不塞进
ancher-html-style）是为了让这个轻量 catalogue 和那个重 WebGL effects repo 分开。

**Rules out:** 手工维护 registries；把 concerns 混进 effects repo。

## D9 - 稳定 kebab `id` 作为主键；永远不用运行编号

**Decision:** 文件夹名 = 稳定 `id`；排序是另一个单独策展的 list。

**Why:** art_style 的教训：如果用全局连续编号，插入一个新条目会让所有下游引用整体位移。
（见 `scripts/build_registry.py` 里的 `order`。）

## D10 - module×direction matrix 是 LIVE（skin switcher），不是 648 个静态页

**Decision:** 要展示一个 module 在多个 directions 下的样子时，modules 使用共享的 CSS-variable
**token contract**，Skin Lab 运行时换入某个 direction 的 tokens（`skins.json`）；
不为每个 `direction × module` cell 生成静态页。

**Why:** 27×24 = 648（或 ×52 = 1404）个静态页，不仅生成量大，也很脆弱
（改一个 token 就要重生成很多页）。Token swap 可以从一个页面免费得到整个 matrix，
并且保持同步。很多 cell 本来也不合逻辑，所以做完整静态 grid 是浪费。

**Caveat / rules out:** token swap 能捕捉 palette/type/spacing/radius，但捕捉不到一个
direction 的*signature structure*（brutalist hard shadow、glass blur、memphis squiggles）。
完全 in-character 的版本存在于真实 direction 页面里，reverse links 指向的也是那里。
后续可以通过 per-direction "signature" CSS hooks 加深 skin。

## D11 - Atlas chrome 放在 viewer shell；inspector 拆解真实页面

**Decision:** 「组件」功能是 viewer shell 里的 in-context **inspector**：它读取 iframe 中页面的
`[data-module]` sections，并就地标注*那个页面*（outline + label + side panel），而不是链接到
一个通用 demo。Direction pages 保持 pristine；shell 向 iframe 注入 overlay。

**Why:** 用户正在看一个具体页面 - “给我看这个页面的组件”才是有用的问题；跳到无关 demo 是错误理解。
把 chrome 留在 shell，可以保留 pristine-artifact 规则（邻近 D2）。这要求每个 section 都有
`data-module`/`data-variant` 标签（底层 substrate；27 页共 124 个 sections）。

**Rules out:** 把 inspector UI 烤进 `directions/*/index.html`；只靠 heading text 检测
（不如 canonical module tags 精确）。

## D12 - 作为独立静态站部署（这个 repo 可托管；wiki 不可托管）

**Decision:** 把整个 repo 部署到 Vercel（`vercel.json`：`/` -> `/site/` redirect +
`.md`/`.json` charset headers），地址是 `ancher-site-atlas.vercel.app`。

**Why:** 和私有 `wiki` KB 不同（绝不能整站部署），这个 repo 本身就是一个独立、可浏览的静态站；
confidential banners 是故意移除的。Charset header 修复了浏览器直接看 raw `.md` 时的 mojibake
（文件本身是有效 UTF-8；只是 http.server 不发送 charset）。

**Rules out:** GitHub 自动部署耦合（像其他 repos 一样，使用手动 `vercel deploy` snapshots）。

## D13 - GSAP Motion Lab：vendor GSAP、data-driven cards、body-end load

**Decision:** GSAP lab（`site/gsap-lab.html` + `gsap-demos/` + `vendor/gsap/`）
把 GSAP 3.13 **vendored** 到 repo 里（`vendor/gsap/`，root-absolute
`/vendor/gsap/*.min.js`），不用 CDN；54 张 effect cards 是 **data-driven**
（每个 plugin family 一个 JS 文件，push 到 `window.GSAP_CARDS`，contract 在
`site/gsap-cards/CONTRACT.md`），不是 54 个静态 HTML 页；hub 和每个 demo 都在
**`<body>` 末尾**加载 GSAP `<script>`，不是放在 `<head>`。

**Why:**

- *Vendored, not CDN* - GSAP 3.13 是 100% free（Webflow）；vendoring 让 lab 自包含、
  可离线、版本固定，并且符合 repo 的 no-build / single-host model。（Labs 可以使用外部脚本；
  *direction* pages 仍然不行，见 generated-page contract。）
- *Data-driven cards* - 和 D10 一样是反爆炸逻辑：每张 card 一个 `init(stage,ctx)`，
  lazy run + IO-gated，比维护 54 个静态页更好，也能让 hub 自动编号/分组。
- *Load at end of `<body>`* - **Flip 的 `_initCore` 依赖 body**：如果
  `document.body` 还是 null 时（也就是在 `<head>` 中）调用 `gsap.registerPlugin(Flip)`，
  Flip 会处于半初始化状态，之后每个 `Flip.getState` 都会抛 `"I is not a function"`。
  等 `<body>` 存在后再注册可以修复，而且对其他 plugins 无害。这个坑踩过一次，所以 demos
  都把 GSAP 放在 body-end。

**Also:** demo pages 保持 **pristine**（无 atlas chrome；in-page iframe viewer 提供外壳），
呼应 D11；screenshot thumbnail -> live iframe（静态 PNG 对 motion 来说证明力弱，所以只作为
gallery cover）。这个 lab 定位为**内部素材 / eval set**。

**Rules out:** CDN-loaded GSAP；648-style 静态 card pages；在 `<head>` 注册依赖 body 的 plugins。
