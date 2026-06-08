# 个人站风格图鉴 · Personal Site Style Atlas

一份策展的**个人网站风格图鉴**:每个「设计方向」都附一份可一键复制的**生成 Prompt**(`prompt.md`)、一套结构化 **design token**(`DESIGN.md`),以及由该 Prompt **实际生成**的单文件示例页(`index.html`)和截图(`sample.png`)。外加一套**模块图鉴**(结构层)、一个**组件实验室**(模块 × 方向换肤)、一个**文字动效实验室**(23 个纯 CSS/JS 文字动画),以及一个 **GSAP 动效实验室**(14 个整页 GSAP demo + 54 张特效卡,基于本地 vendor 的 GSAP 3.13)。

目标和 `art_style`(绘本插画风格图鉴)一样:**复制 Prompt → apply 到任意「能写前端的 agent」→ 得到基本一致的效果。** 后续只需把我们的后端生成 agent 优化到能复刻这些 Prompt 的产出即可。它同时是真实生成器的 **eval 集**。

🔗 **线上(内部)**: https://ancher-site-atlas.vercel.app · 仓库: `streamify-one/ancher-site-atlas`

> **新接手?先读 [`docs/`](docs/)**:[`CONTEXT.md`](docs/CONTEXT.md)(做了什么 + 相关 repo 地图)· [`DECISIONS.md`](docs/DECISIONS.md)(为什么这么做)· [`COVERAGE.md`](docs/COVERAGE.md)(vs design-md 覆盖/缺口)。
> 深度设计文档在 wiki(`~/wiki/ancher/engineering/`):`personal_site_atlas_collection_v1.md`(本图鉴执行文档)· `personal_site_generation_strategy_v1.md` · `html_js_generation_quality_v1.md`。

## 灵感来源 / Inspiration & credits

这些想法和设计不是凭空来的,主要站在三块肩膀上:

- **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** —— 我们 `DESIGN.md` 的**格式与方法论**来源(基于 Google Stitch 的 [DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) 概念):每个真实品牌一份 markdown 设计语言文档(YAML token frontmatter + 一段 evocative 描述)。它的 73 个品牌也是我们**设计方向词汇库**和 [`docs/COVERAGE.md`](docs/COVERAGE.md) 覆盖比对的来源。"token 多而精 = 质量地板,prose 少而 evocative = 创造力"这条核心原则(见 [`docs/DECISIONS.md`](docs/DECISIONS.md) D3)就是从它来的。
- **`art_style`**([streamify-one/ancher-art-style](https://github.com/streamify-one/ancher-art-style))—— 整个仓库的**范式来源**:策展图鉴 + 每条目"生成 Prompt + 自生成示例 + 结构化数据" + 静态画廊。同一套哲学,换到个人网站这个域。
- **`ancher-html-style`**([streamify-one/garden-of-particles](https://github.com/streamify-one/garden-of-particles))—— **画廊/registry 架构**的来源(registry 单一事实源 + 一条目一文件夹 + Vite/静态画廊)。

> 更完整的"为什么这么做 + 相关 repo 地图"见 [`docs/CONTEXT.md`](docs/CONTEXT.md) 与 [`docs/DECISIONS.md`](docs/DECISIONS.md)。

## 现状一览

| | 数量 |
|---|---|
| 设计方向 | **27**(核心 17 + 实验 10) |
| 模块 | **24**(~52 variant,5 类) |
| 素材图 | **84** webp(`assets/`,带 MANIFEST) |
| 皮肤(组件实验室) | 5(原型,可扩到 27) |
| 文字动效 | **23** 个文字动画 pattern(10 base + 13 从方向页提取) |
| GSAP 动效 | **14** 个整页 demo + **54** 张特效卡(GSAP 3.13 本地 vendor) |
| 已标注组件区块 | 124(全部方向页,供 inspector 拆解) |

## 结构

```
directions/<id>/
  DESIGN.md     # 结构化 token + 视觉 DNA(数据层,≈ Google Stitch DESIGN.md 格式)
  prompt.md     # ★ 可复制的生成 Prompt(自包含:人设 + 方向 + token + 契约)
  index.html    # 由 prompt.md 实际生成的单文件示例页(结果);section 带 data-module 标注
  sample.png    # index.html 的截图(证物 / 画廊缩略图)
  portrait.{jpg,webp}  # 该页用的人物照片(可选)
modules/<category>/<id>.html  # 模块 specimen sheet:一个模块的所有 variant 叠一页(中性皮肤)
modules/README.md             # 模块图鉴清单(5 类 → 模块 → variant)
site/
  index.html    js/atlas.js   # 浏览站:目录全览(6 个 tab:设计方向 / 模块图鉴 / 组件实验室 / 文字动效 / 图像处理 / GSAP 动效)
  view.html     js/view.js    # 查看器外壳:iframe 装示例页 + 工具栏(返回/上一个·下一个/复制 Prompt/组件 inspector/DESIGN/原始页)
  modules.html  js/modules.js # 模块图鉴:每模块一张实时 iframe 预览卡
  skins-lab.html              # 组件实验室:同一批模块,选「皮肤」(=方向 token)实时换色换字
  motion-lab.html             # 文字动效实验室:23 个纯 CSS/JS 文字动画 pattern
  image-lab.html  js/image-lab.js  # 图像处理:原图 → prompt → CSS → 效果
  gsap-lab.html   js/gsap-lab.js   # GSAP 动效实验室:14 个整页 demo 画廊 + 54 张特效卡
  gsap-cards/<family>.js      # GSAP 特效卡(每个插件 family 一个文件 → window.GSAP_CARDS;契约见 gsap-cards/CONTRACT.md)
  registry.json modules_registry.json skins.json gsap_registry.json  # 前者由 build 脚本生成;skins/modules 手维护
gsap-demos/<id>/  # 14 个整页 GSAP demo(index.html + meta.json + sample.png),原创风格,vendor GSAP
vendor/gsap/      # 本地 vendor 的 GSAP 3.13 核心 + 全部插件(无 CDN;根绝对路径 /vendor/gsap/*.min.js)
assets/         # AI 占位图(webp)+ MANIFEST.md + _manifest.json
scripts/build_registry.py     # 扫 directions/*/DESIGN.md frontmatter → registry.json(并校验 modules/skins 注册表 + 由 gsap-demos/*/meta.json 生成 gsap_registry.json)
vercel.json     # 静态托管:/ → /site/ 跳转 + 给 .md/.json 发 charset=utf-8
docs/           # CONTEXT / DECISIONS / COVERAGE / MODULE_DIRECTION_CROSS_ATLAS_PLAN
agents/         # 可复用 agent 协议;@research 把项目资料抽象成模型/系统
```

## 浏览面(6 个 tab)

1. **设计方向**(`site/`):27 张方向卡片,点进 **viewer 外壳**(`view.html`)逐个看,左右切换、复制 Prompt。
2. **组件 inspector**(viewer 内「组件」开关):**就地拆解当前这个页面** —— 给每个模块区块画框 + 标签(读 `data-module`),侧栏列出本页用到的模块与解释。
3. **模块图鉴 / 组件实验室**:模块清单(`modules.html`)+ 同一批模块在不同**皮肤**下实时换肤(`skins-lab.html`)= 模块 × 方向的活矩阵。
4. **文字动效 / 图像处理**:23 个文字动画 pattern(`motion-lab.html`,每个可复制 code-free Prompt)+ 图像处理实验(`image-lab.html`,原图 → prompt → CSS → 效果)。
5. **GSAP 动效**(`gsap-lab.html`):JS 驱动动效层,基于本地 vendor 的 GSAP 3.13。上半 **14 个整页 demo**(`gsap-demos/<id>/`,各一种原创风格 × 一组插件;截图缩略 → 点开看实时动效),下半 **54 张特效卡**(按插件分组,视口内自动播放,每张可复制 **Prompt** + **真实 GSAP 代码**)。定位为内部素材 / eval 集。

## 生成契约(所有 prompt.md 共享的硬约束)

1. **单文件自包含** `index.html`:CSS 全进 `<style>`,JS 全进内联 `<script>`,无构建、无 npm、无前端框架。
2. 外链仅允许 **Google Fonts `<link>`** + **一张本地图片**(`portrait.*`);**禁** Three.js / WebGL / 重 canvas、禁其它远程资源。
3. **响应式**(360–1440px,移动优先);**可访问**(语义、对比度、focus、`prefers-reduced-motion`)。
4. 用给定 token 定义为 CSS 变量,**严格遵守**配色/字体/间距。
5. 内容来自人设 brief,**真实具体、禁空话**。
6. 按给定顺序与 variant 实现模块;动效克制。**每个模块 section 加 `data-module="<id>" data-variant="<v>"`**(供 inspector 拆解)。
7. **照片 + toggle 契约**:照片元素 `class="u-photo"`,回退 `class="u-fallback"`,默认开;右下角「照片 Photos On/Off」切 `body.no-photos`。
8. 质量线:**看着像刻意设计过**,不是通用 AI / Bootstrap 味。

## 如何用

```bash
# 浏览(必须从仓库根目录起服务,画廊用 ../ 相对路径)
python3 -m http.server 8799     # 打开 http://localhost:8799/site/
# 或直接看线上:https://ancher-site-atlas.vercel.app

# 复刻一个方向
cat directions/editorial/prompt.md   # 复制,发给任意能写前端的 agent → 效果与 index.html 基本一致

# 研究/抽象这个系统
cat agents/research.md               # 或在对话里 @research
```

> 本地 `http.server` 不给 `.md` 发 charset,直接在浏览器看 `.md` 会花屏(mojibake);**线上 Vercel 已加 charset 头,正常显示**。

## 加新方向(可 subagent 批量)

1. `directions/<id>/` 写 `DESIGN.md`(token)+ `prompt.md`(生成 Prompt),从 `assets/` 拷一张图作 `portrait.webp`。
2. 把 `prompt.md` 发给生成 agent → 落 `index.html`(含 photo+toggle + `data-module` 标注)。
3. 滚动截图(photos ON)→ `sample.png`;`python3 scripts/build_registry.py` → 画廊自动出卡片。

> 主键用稳定 `id`,**不要用全局连续编号**(art_style 的教训)。详细的扩张/工作流套路见 `CLAUDE.md` 与 `docs/CONTEXT.md`。

## 部署

静态站,部署在 Vercel(`streamify-one` 账号,内部使用):`vercel deploy . --prod --yes`。`vercel.json` 负责 `/ → /site/` 跳转和 `.md/.json` 的 utf-8 charset。重新部署即更新线上。
