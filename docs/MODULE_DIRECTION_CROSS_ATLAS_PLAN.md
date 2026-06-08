# Module × Direction Cross Atlas Plan

> Draft for review. Goal: make the Module Atlas useful as a generation and
> evaluation surface, without turning the repo into hundreds of hand-maintained
> static specimens.

## 实现进展 (status — updated 2026-06-03)

The recommended approach (**data-driven modules + dynamic theme adapter + curated
screenshots**, NOT hundreds of static cells) has been **started**:

- ✅ **Theme adapter / Skin Lab** — `site/skins-lab.html` + `site/skins.json` implement the
  §3 idea: a shared token contract, direction tokens swapped at runtime; one set of modules
  re-skins live across directions. **Prototype scope: 5 skins × 5 modules** (hand-authored).
- ✅ **In-context inspector** (a related but distinct surface) — the viewer's 组件 toggle
  decomposes a real direction page via `[data-module]` tags (all 27 pages tagged, 124 sections).
  This gives the "module → which directions use it, in-character" reverse view from REAL pages.
- ⏳ **Pending** to reach the full plan: extend the token contract to all **24 modules**;
  extract all **27 skins** from `directions/*/DESIGN.md` (a build step, §3); the richer module
  manifest with `slots`/`best_for`/fit tags (§4); persona content fixtures (§5); per-direction
  "signature" CSS hooks so skins capture structure, not just palette (see the "Risk" section);
  and either grow `skins-lab.html` or add the dedicated `site/cross.html` picker (§2) with
  `strong`/`ok`/`awkward` fit tags.

The plan below remains the target for the full build.

## 背景

当前 Module Atlas 的价值是清楚的：它把个人站 section 拆成了 `identity`、
`trust`、`narrative`、`conversion`、`personality` 五类，并列出每个 module 的
variants。但它作为视觉图鉴比较弱：

- 内容偏薄，很多 specimen 更像 wireframe，而不是可直接出现在个人站里的 section。
- 视觉层只有中性蓝白 token，容易显得像默认 AI SaaS UI。
- module 和 direction 是分开的，无法回答“这个模块放到某种设计方向里会不会好看”。
- 对真实生成器的评测帮助有限，因为生成器面对的是“结构 + 风格 + 内容”的组合。

因此，问题不只是配色不够多样，而是 Module Atlas 没有进入真实生成场景。

## 判断

应该做 Module Atlas 和 Design Direction 的交叉，但不应该一开始手工生成全量静态页面。

现有规模大致是：

- 约 27 个 design directions
- 24 个 modules
- 约 52 个 module variants

如果按 module 交叉，是 `27 × 24 = 648` 个组合；如果按 variant 交叉，是
`27 × 52 = 1404` 个组合。这个规模可以用 subagent 生产出来，但会带来明显的
维护成本：每次改一个 direction token、module 结构或内容 schema，都可能需要重跑大量
HTML 和截图。

更合理的方向是：保留模块作为结构数据，把设计方向作为 theme layer 动态套用，再为精选
组合生成截图和质量记录。

## 目标

新增一个更有表现力的交叉图鉴：

```
module variant × design direction × persona content
```

它要服务三个用途：

1. **浏览**：快速看一个 module 在不同方向下的表现。
2. **选型**：判断某个 module 和 direction 是否匹配。
3. **评测**：给未来真实个人站生成器提供组合级 eval 样本。

## 非目标

- 不把所有 `direction × variant` 手工落成独立 HTML 文件。
- 不在 module 层复制 direction 的完整视觉系统。
- 不把 modules 做成新的设计方向；modules 仍然只表达结构和内容槽位。
- 不引入前端框架或构建步骤。

## 建议方案

### 1. 保留现有中性 Module Atlas

当前 `site/modules.html` 仍然保留，定位改成“结构规范视图”：

- module category
- module id
- variants
- purpose
- content slots
- layout hints

它不需要承担最终视觉效果展示。

### 2. 新增 Cross Atlas 视图

新增一个页面，例如：

```
site/cross.html
site/js/cross.js
site/cross_registry.json
```

核心交互：

- 左侧或顶部选择 module / variant。
- 选择 design direction。
- 主区域渲染该组合的 live specimen。
- 支持快速切换方向，观察同一个 module 在不同视觉语言里的变化。
- 提供 fit 标注：`strong` / `ok` / `awkward`。

### 3. 把 direction token 抽成可复用 theme

从 `directions/*/DESIGN.md` frontmatter 读取：

- `colors`
- `typography`
- `spacing`
- `rounded`
- `motion`
- `description`
- `lineage`

生成一个轻量 theme model，供 cross specimen 使用。

注意：theme adapter 不应追求完全复刻每个 direction 的完整页面细节。它的职责是让同一个
module 以该 direction 的大体视觉语言呈现，包括：

- 背景 / 文字 / accent 色
- display / body / label 字体
- spacing scale
- border / hairline / shadow / radius 倾向
- image treatment hint

### 4. 把 module specimen 数据化

现有 `modules_registry.json` 只有 module id 和 variant 名称。建议升级或新增一份更丰富的
manifest：

```json
{
  "cat": "trust",
  "id": "selected_work",
  "name_cn": "Selected work · 作品",
  "purpose": "展示代表性项目，建立能力和品味信任",
  "variants": [
    {
      "id": "featured_case",
      "layout_hint": "one large case with supporting metadata and outcome",
      "slots": ["title", "kicker", "summary", "role", "year", "outcome", "links"],
      "best_for": ["editorial", "neo-saas", "technical-mono"]
    }
  ]
}
```

模块数据不写颜色和字号，只写：

- purpose
- variant layout hint
- slots
- content rules
- suggested / awkward directions

### 5. 使用 persona 内容包

为了避免 specimen 空洞，需要几组真实具体的 persona content fixtures，例如：

- independent writer
- product strategy consultant
- infrastructure engineer
- executive coach
- visual artist
- AI founder
- educator / community builder

内容包提供可复用素材：

- name / role / one-liner
- projects
- career events
- testimonials
- metrics
- beliefs
- quotes
- CTA copy

Cross Atlas 渲染时根据 module slots 抽取适合的内容，而不是写 lorem 或泛泛而谈的句子。

## MVP 范围

第一版不要做全量。建议先做 60 个高信号组合：

- 每个 module category 选 2 个关键 modules，共 10 个 modules。
- 每个 module 选 1 个主 variant。
- 每个 variant 展示 6 个代表 directions。

建议方向：

- `editorial`
- `swiss-minimal`
- `warm-personal`
- `technical-mono`
- `bold-brutalist`
- 1 个 experimental direction，例如 `glassmorphism` 或 `maximalist-collage`

建议模块：

- `identity/hero`
- `identity/social_links`
- `trust/selected_work`
- `trust/metrics`
- `narrative/story`
- `narrative/beliefs`
- `conversion/book_a_call`
- `conversion/contact_form`
- `personality/now_page`
- `personality/photo_wall`

MVP 成功标准：

- 同一 module 在 6 个 directions 下明显有不同气质。
- 内容看起来像真实个人站，不像 UI placeholder。
- 至少能识别出哪些组合天然强、哪些组合尴尬。
- 不需要维护 60 份独立 HTML。

## 全量扩展策略

MVP 通过后再扩：

1. 覆盖全部 24 个 modules。
2. 每个 module 覆盖所有 variants。
3. 每个 variant 支持所有 directions 动态预览。
4. 只为精选组合生成 `sample.png`，不为全量组合截图。

截图策略：

- 每个 module 至少 2-3 张 curated highlights。
- 每个 direction 至少覆盖几个不同 module category。
- 对 `awkward` 组合可以保留少量反例，用作生成器避坑 eval。

## Subagent 拆分

这项工作适合用 subagent，但要按边界拆分。

### Agent 1: Schema

任务：

- 设计 cross registry / module manifest schema。
- 确保能从现有 `modules_registry.json` 平滑迁移。
- 给出 validation rules。

产物：

- `docs/` schema 说明
- 示例 JSON
- 可选 build/validation script 草案

### Agent 2: Theme Adapter

任务：

- 读取 `directions/*/DESIGN.md`。
- 定义 direction token 到 CSS variables 的映射。
- 处理缺字段 fallback。

产物：

- theme extraction script 或 JS loader
- direction theme preview fixture

### Agent 3: Content Fixtures

任务：

- 写 5-7 组 persona fixtures。
- 覆盖所有 module slots。
- 避免空泛 AI 文案。

产物：

- `site/data/personas.json` 或类似数据文件

### Agent 4-8: Module Category Authors

每个 agent 负责一个 category：

- identity
- trust
- narrative
- conversion
- personality

任务：

- 给该 category 的 modules 补 purpose / slots / content rules / variant hints。
- 写主 variant 的 MVP rendering template。
- 标注强匹配和弱匹配 directions。

### Agent 9: Cross Atlas UI

任务：

- 实现 `site/cross.html` + `site/js/cross.js`。
- 支持 module / variant / direction picker。
- 支持 fit tag 和 quick direction switch。
- 保持 vanilla HTML/CSS/JS，无构建步骤。

### Agent 10: Visual QA

任务：

- 本地服务打开 cross atlas。
- 截图代表组合。
- 找出 token 映射、内容溢出、对比度、移动端问题。

产物：

- QA notes
- 修复建议
- curated highlight list

## 风险

### Theme adapter 过度简化

如果只把 colors 套进去，结果仍然像换皮 UI。必须至少覆盖 typography、spacing、
border/radius、image treatment 和 section rhythm。

### Module 模板反过来吞掉 direction

如果 module template 写得太固定，不同 directions 只会变颜色。模板需要给 direction 留足
表现空间，例如 typography-led、grid-led、image-led、brutalist 等几类布局分支。

### 内容 fixture 太泛

内容质量会直接决定 specimen 是否像真实个人站。需要具体项目、具体成果、具体语气。

### 全量截图不可维护

不要把全量组合都变成静态截图。截图应该是 curated proof，不是数据库 dump。

## 建议落地顺序

1. 写 cross atlas schema。
2. 做 6 个 direction theme extraction。
3. 写 3 组 persona fixtures。
4. 做 10 个 MVP modules 的 render templates。
5. 实现 `site/cross.html`。
6. 手动 QA 60 个组合。
7. 根据 QA 决定是否扩到全部 directions / modules。

## 一句话结论

Module Atlas 应该和 Design Directions 交叉，但交叉应该是“数据化模块 + 动态 theme
adapter + curated screenshots”，而不是手工生成上千个静态组合。这样既能显著提升视觉表现，
又能让它成为真实个人站生成器的组合级评测台。
