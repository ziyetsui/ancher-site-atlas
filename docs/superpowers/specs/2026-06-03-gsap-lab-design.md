# GSAP 动效实验室 — 设计文档 (Design Spec)

**Date:** 2026-06-03
**Repo:** ancher-site-atlas (Personal Site Style Atlas)
**Status:** Draft — under review (codex review requested before implementation)

---

## 1. 背景与目标

仓库 `ancher-site-atlas` 是 Ancher AI 个人站生成器的「素材库 / eval set」层:27 个**设计方向**(`directions/<id>/`)、30 个结构**模块**(`modules/`)、一个**组件实验室 (Skin Lab)** 和一个**文字动效实验室 (Motion Lab)**,每个都附可复制的生成 prompt + design token + 自生成示例页 + 截图。纯静态站(无框架、无构建步骤),从 repo 根目录用 `python3 -m http.server` 预览,Vercel 托管。

**本任务**:新增一个 **GSAP 动效实验室** tab,尽可能全面、多样地覆盖 GSAP 各类特效,既给「可查阅/可复制」的特效图鉴,也给多种原创风格的整页 demo,体现 GSAP 的能力面。它同时成为生成器「JS 驱动动效」这一维度的素材库与 eval 集。

### 已确认决策

| 维度 | 选择 |
|---|---|
| 形态 | **图鉴 + 演示页** 两者结合 |
| 规模 | **超大** · ~48 特效卡片 + ~14 整页 demo |
| 风格 | **全新原创风格**(不绑现有 27 方向) |
| GSAP 加载 | **本地 vendor** 到 repo(不依赖 CDN) |
| 演示页预览 | **截图缩略图 → 点开 live iframe**(与 directions 一致) |
| 素材 | **大量下载新素材 + 自写 SVG 补充**;效果优先。**GSAP lab 定位为内部 demo / eval 素材,不纳入公开 Vercel deploy**,故不受版权约束(见 §9 / §12) |

### 关键事实

- **GSAP 3.13(2025,Webflow 收购后)100% 免费**,含全部原 Club 专享插件:SplitText / MorphSVG / DrawSVG / ScrollSmoother / ScrambleText / MotionPath / Draggable / Inertia / Observer / Physics2D / CustomEase·Bounce·Wiggle / GSDevTools 等。全部可下载 vendor。
- 仓库 8 个 GSAP skill 已安装(`gsap-core / -timeline / -scrolltrigger / -plugins / -react / -frameworks / -performance / -utils`),实现时每个 demo/卡片 family 都对应一个 skill 作为权威参考。

---

## 2. 总体架构(镜像 repo 既有范式)

新增**第 6 个 tab「GSAP 动效」**,落到 hub 页 `site/gsap-lab.html`,内含两个分区。

```
site/gsap-lab.html              新 tab 落地页(hub),单文件、自包含(motion-lab 范式)
  ├─ 区 A:完整演示页画廊        14 张截图卡 → 点击在 overlay 内 iframe live demo
  └─ 区 B:特效图鉴              ~48 张自包含特效卡(网格,按插件分组,视口内自动循环)

gsap-demos/<id>/                14 个整页 demo(仿 directions/<id>/ 的目录结构)
  ├─ index.html                 自包含整页:除 Google Fonts + 本地素材 + vendored GSAP 外无外链
  ├─ sample.png                 自生成全页截图(画廊缩略图 + 证据)
  └─ (复用 /assets 或就近 assets)

vendor/gsap/                    本地 vendor 的 GSAP 3.13 全套(repo 根,根绝对路径引用)
  gsap.min.js, ScrollTrigger, ScrollSmoother, SplitText, ScrambleTextPlugin,
  Flip, Draggable, InertiaPlugin, Observer, MotionPathPlugin, DrawSVGPlugin,
  MorphSVGPlugin, Physics2DPlugin, CustomEase, CustomBounce, CustomWiggle,
  EasePack, TextPlugin

site/gsap_registry.json         14 demo 清单(id / name_cn / name_en / style / plugins[] / focus / paths)
scripts/build_registry.py       扩展:扫描+校验 gsap-demos/* 与 gsap_registry.json
```

**为什么这样切**:完全镜像现有结构 —— `gsap-lab.html` 对应 `motion-lab.html`(单文件内联卡片 + 自动循环 + 复制 prompt);`gsap-demos/<id>/` 对应 `directions/<id>/`(整页 + 自生成 sample.png + registry 驱动 + iframe 查看)。最大化复用既有心智模型,降低维护成本。

### Vendor 路径决策

GSAP 放 repo 根 `vendor/gsap/`,页面用**根绝对路径** `/vendor/gsap/gsap.min.js`:
- demo 在 `gsap-demos/<id>/index.html`(深 2 层)、catalog 在 `site/gsap-lab.html`(深 1 层),根绝对路径对两者都稳定。
- repo 约定从根目录 serve;Vercel 上 `/vendor/...` 同样可达。
- 备选(相对路径 `../../vendor/...`)更脆弱,放弃。

---

## 3. 14 个整页 demo

每个 = 一种**原创视觉风格** × 一组**核心 GSAP 插件**,合起来覆盖全部能力面。每页保持 pristine(不内嵌 atlas chrome,与 directions 一致),chrome 由画廊 overlay 工具栏提供;响应式 360–1440;`gsap.matchMedia()` 处理 `prefers-reduced-motion`;transform-only 优先。

| # | id | demo | 主打 GSAP 技术 | 原创视觉风格 |
|---|---|---|---|---|
| 1 | kinetic-hero | Kinetic Hero 动态标题 | SplitText 字/词/行 + stagger + CustomEase | 超大字体编辑风,高对比 |
| 2 | pinned-story | Pinned Scroll-Story | ScrollTrigger pin + scrub + 进度 | 极简瑞士,大留白 |
| 3 | parallax-landscape | Parallax Landscape | ScrollTrigger 多层视差 | 电影感摄影 |
| 4 | draggable-gallery | Draggable Gallery | Draggable + Inertia + snap + containerAnimation | 美术馆/画廊 |
| 5 | flip-grid | Flip Grid ↔ Detail | Flip 布局过渡 + 筛选 | 作品集卡片 |
| 6 | svg-journey | SVG Line Journey | DrawSVG 沿滚动描线 + MotionPath | 蓝图/技术线稿 |
| 7 | morph-brand | Morphing Brand | MorphSVG 形状变形 + CustomBounce | 几何玩味品牌 |
| 8 | sticky-product | Sticky Product | ScrollTrigger 钉住 + 图序旋转 + 规格标注 | 高端产品(Apple 风) |
| 9 | marquee-poster | Marquee Poster | 无缝跑马灯 + velocity-skew + Observer | 野兽派海报 |
| 10 | scramble-terminal | Scramble Terminal | ScrambleText + 打字 + glitch | 赛博终端 mono 暗色 |
| 11 | physics-playground | Physics Playground | Physics2D / Inertia 抛掷 + 重力彩屑 | 玩具/黏土亮色 |
| 12 | smooth-editorial | Smooth Editorial | ScrollSmoother + data-speed 视差 | 奢侈杂志 |
| 13 | motionpath-orbit | MotionPath Orbit | MotionPath 轨道运行 + timeline repeat | 宇宙/星空渐变 |
| 14 | cursor-studio | Cursor Studio | Observer 指针跟随 + 磁吸按钮 + 图像拖尾 | 创意工作室 agency |

**覆盖核对**:SplitText、ScrollTrigger(pin/scrub/横向/视差/velocity/containerAnimation)、ScrollSmoother、Draggable、Inertia、Flip、DrawSVG、MotionPath、MorphSVG、ScrambleText、Physics2D、Observer、CustomEase·Bounce、TextPlugin、无缝 marquee、磁吸/cursor —— 全覆盖。

---

## 4. ~48 特效图鉴卡片

每卡 = 一个聚焦技术、自包含、**视口内自动循环**(离屏暂停)、底部 **复制 Prompt**(自然语言 brief)+ **复制代码**(真实 GSAP 片段)。按插件分组,覆盖 8 个 gsap skill:

| 分组 | 数量 | 卡片 |
|---|---|---|
| Core / Tween | 4 | to / from / fromTo / keyframes·set |
| Easing | 4 | power·back·elastic·bounce / CustomEase / CustomBounce / CustomWiggle·rough |
| Stagger | 3 | 网格 stagger / from:center / amount·grid 高级 |
| Timeline | 4 | 序列 / position 参数 / 嵌套 / repeat·yoyo·控制 |
| ScrollTrigger | 9 | enter 淡入 / scrub / pin / 视差 / 横向滚动 / 进度条 / batch / snap / velocity-skew |
| ScrollSmoother | 1 | data-speed 视差 |
| SplitText | 4 | 字 / 词 / 行 mask / 渐变波浪 |
| ScrambleText + Text | 3 | 解码乱码 / 自定义字符集 / TextPlugin 替换打字 |
| Flip | 3 | 布局切换 / 网格筛选 / state 捕获 |
| Draggable + Inertia | 4 | 拖 / 惯性 snap / 旋转 / 抛掷 |
| Observer | 2 | wheel·drag 统一 / velocity |
| MotionPath | 3 | 跟随 / 对齐+autoRotate / 轨道 |
| DrawSVG | 3 | 描线 / 签名 / 勾选·图标 |
| MorphSVG | 3 | 形状 / 图标 / blob |
| Physics2D | 2 | 重力彩屑 / 喷泉 |
| Utils + matchMedia | 3 | random·snap / mapRange·clamp·interpolate / 响应式·reduced-motion |

合计 ~49,装配时去重微调到 ~48。

---

## 5. 复制按钮(repo 招牌特性)

- **特效卡**:`复制 Prompt`(code-free 自然语言 brief,套用 motion-lab 的 `PROMPTS` map 思路)+ `复制代码`(该卡真实 GSAP JS 片段)。
- **演示页 overlay 工具栏**:`复制整页源码` + `复制 Prompt`(整页体验的 page-level brief)。

brief 的价值:可直接交给任何前端 AI 复现该效果(与 motion-lab 一致的「named pattern」哲学——生成 prompt 可点名 "hero 用 *split-chars-rise* 效果")。

---

## 6. 集成触点

| 文件 | 改动 |
|---|---|
| `site/index.html` | 加第 6 个 tab 按钮「GSAP 动效」 |
| `site/js/atlas.js` | `selectTab` 增加 `gsap` 分支 → 跳 `gsap-lab.html` |
| `scripts/build_registry.py` | 扫描+校验 `gsap-demos/*`(index.html + sample.png) 与 `gsap_registry.json` |
| `site/gsap-lab.html` | 新建:hub 页 + 区 A 画廊 + 区 B 图鉴 + 内建 overlay viewer(仿 atlas.js `openViewer`,父层工具栏 + iframe demo,免注入) |
| `site/gsap_registry.json` | 新建:14 demo 清单 |
| `vendor/gsap/*` | 新建:vendored GSAP 全套 |
| `gsap-demos/<id>/*` | 新建:14 个整页 demo + 截图 |
| `CLAUDE.md` / `docs/CONTEXT.md` | 补一行 GSAP lab 说明(最小改动) |

`vercel.json` 已覆盖 `.json` charset,无需改。

---

## 7. 性能 & 无障碍

- vendored GSAP,插件一次性 `gsap.registerPlugin(...)`。
- **图鉴卡**:`IntersectionObserver` 门控(离屏 `timeline.pause()`,入屏 `play/restart`),`prefers-reduced-motion` → 渲染终态、不循环。48 卡同页务必严格离屏暂停,避免一屏几十个 timeline 同时跑。
- **demo 页**:全部 `gsap.matchMedia()`、transform-only(gsap-performance skill)、响应式 360–1440、语义化、可见 focus、alt、reduced-motion。
- 单页 GSAP 实例与 ScrollTrigger 在 demo 卸载(overlay 关闭=iframe 置空)时随页面销毁,无跨页泄漏。

---

## 8. 执行编排(spec 批准后启动,使用 Workflow 工具)

- **Phase 0(orchestrator,inline)**:vendor GSAP(下载全套 min.js 校验可加载);建目录骨架;写 `gsap-lab.html` shell + overlay viewer + registry 管线 + tab 接线;下载基础素材包到 `/assets`。
- **Phase 1(并行 subagent × 14)**:每 agent 一页 demo,读对应 `gsap-*` skill + 该 demo 的 brief,下载/自写素材,写 `gsap-demos/<id>/index.html`,自检 GSAP 加载、无 console error。
- **Phase 2(并行 subagent × ~8)**:按插件 family 产出 48 卡片片段(HTML + JS init + PROMPTS 条目 + 代码片段),orchestrator 装配进 `gsap-lab.html`。
- **Phase 3(orchestrator)**:逐页截图(根目录 serve → 滚动触发 reveal → 全页 png 存 `sample.png`);跑 `build_registry.py`;接线 tab;浏览器验收画廊 + 图鉴;修问题。
- **Phase 4**:code-reviewer subagent 复查(对照 gsap-performance / 无障碍 / 契约);commit。

**并行无冲突依据**:各 demo 在独立目录;registry 由脚本生成(非手改);卡片片段先各自产出再由 orchestrator 串行装配。

---

## 9. 风险与缓解

| 风险 | 缓解 |
|---|---|
| 48 卡同页性能(几十个 GSAP timeline) | 严格 IO 离屏暂停;入屏才创建/播放;reduced-motion 直接终态 |
| MorphSVG / DrawSVG 需要手写 SVG path | 每个相关 demo/卡由 agent 自写 path(skill 有示例);必要时下载 SVG 素材 |
| vendored GSAP 版本/插件缺漏 | Phase 0 统一下载 3.13 全套并写一个最小 smoke 页验证每个插件 `register` 成功 |
| 截图是动效弱证明 | 已选「截图缩略图 → live iframe」;截图仅作画廊封面,真证据是 live |
| 14 页风格雷同 / AI 通用感 | 每页指定**不同**视觉语言 + 不同主插件;brief 明确风格关键词;Phase 4 评审多样性 |
| 大量下载素材撑大 repo | 下载即转 webp 压缩;记入 `assets/MANIFEST.md`;只留实际用到的 |
| 根绝对路径 `/vendor/` 本地失效 | 始终从 repo 根 serve(repo 既有约定);文档注明 |
| 下载素材的版权(codex P2) | **决策:GSAP lab 为内部素材,不公开 deploy**(§12),故可自由下载;若日后需公开,再切换为 CC0/AI 生成/自写 SVG |

---

## 10. 待拍板项(进 writing-plans 前)

1. **tab 名称**:默认「GSAP 动效」(区别已有「文字动效」=motion-lab)。备选「交互动效 / GSAP 实验室」。
2. **14 demo 清单**:风格×技术配对默认采用 §3 表格。
3. **48 卡片粒度**:默认采用 §4 分组。

**评审记录**:2026-06-03 经 codex `/codex:review` 审过。两条 P2:① 下载素材版权 → 决策 B(GSAP lab 内部素材、不公开 deploy,见 §12),保留自由下载;② `.agents/skills/gsap-frameworks/SKILL.md:161` 上游 skill 的 TS 笔误 → 与本设计无关(本任务不写框架代码,§11),忽略。

---

## 11. 不做(YAGNI)

- 不做 React/Vue 版 demo(repo 是 vanilla 静态站;gsap-react/-frameworks skill 仅作图鉴卡的「框架用法」说明,不引入框架)。
- 不做 GSDevTools 作为独立卡(开发工具,非展示特效;可在文档提一句)。
- 不做服务端/构建步骤(保持无构建)。
- 不把 GSAP 动效塞进现有 27 个 directions 页(契约禁止 direction 页加 JS 框架/外部脚本;GSAP lab 是独立 lab 层)。

---

## 12. 部署范围(internal-only)

GSAP lab(`site/gsap-lab.html` + `gsap-demos/*` + `vendor/gsap/*`)定位为**内部素材 / eval 集**,**不纳入公开 Vercel deploy**。这是「素材可自由下载、不受版权约束」(§1 / §9)的前提。

实现层面的体现(writing-plans 阶段细化,二选一即可):
- **(轻)** 不在公开导航里链出,且 deploy 前用 `.vercelignore` 排除 `gsap-demos/`、`vendor/gsap/`、`site/gsap-lab.html`;或
- **(更轻)** 维持现状仅本地 `python3 -m http.server` 预览,不执行 `vercel deploy`。

若未来要公开此 lab,需先把素材切换为 CC0 / AI 生成 / 自写 SVG,再移除上述排除。
