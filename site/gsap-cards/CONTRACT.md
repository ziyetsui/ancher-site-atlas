# GSAP 特效图鉴 — 卡片文件契约 (Card Contract)

每个「插件 family」对应**一个 JS 文件** `site/gsap-cards/<family>.js`。该文件**只做一件事**:把若干「卡片对象」push 进全局数组 `window.GSAP_CARDS`。

`gsap` 与全部插件已在 hub 页 `gsap-lab.html` 的 `<head>` 里通过 `<script src="/vendor/gsap/*.min.js">` 同步加载,并已 `gsap.registerPlugin(...)`。**卡片文件加载时不要立即跑动画**——只注册元数据 + 提供 `init()` 函数,由 hub 在卡片进入视口时惰性调用。

## 卡片对象结构

```js
window.GSAP_CARDS = window.GSAP_CARDS || [];
window.GSAP_CARDS.push({
  id: "core-to",                 // 全局唯一 kebab-case
  group: "Core",                 // 见下方「分组键」，决定它落在哪个 section
  title_cn: "to() 补间",
  title_en: "gsap.to()",
  skill: "gsap-core",            // 对应的 gsap skill 名（展示用 chip）
  hint: "把元素从当前状态补间到目标值，最常用的入口。",   // 一句话说明
  prompt: "标题从左侧淡入并右移 200px，1 秒，缓动 power2.out。",  // code-free 自然语言 brief（复制给前端 AI 复现）
  code: `gsap.to(".box", { x: 200, rotation: 360, duration: 1, ease: "power2.out" });`,  // 真实可读片段（展示 + 复制）
  kind: "oneshot",               // "loop" | "oneshot" | "interactive"
  init(stage, ctx) {
    // stage: 一个空的 .fx-stage <div>（约 330×172，居中）。在里面建 DOM + 跑 GSAP。
    // 所有选择器必须 scope 到 stage（用 ctx.q / ctx.qa，禁止全局 document.querySelector）。
    // 返回一个 gsap timeline / tween（loop/oneshot 必须返回；interactive 可不返回）。
    stage.innerHTML = `<div class="box"></div>`;
    const box = ctx.q(".box");
    return gsap.from(box, { x: -120, opacity: 0, duration: 1, ease: "power2.out" });
  }
});
```

## kind 语义（hub 如何驱动）

- **`loop`** — 连续循环效果。`init` 返回的 timeline **自己带 `repeat:-1`**。hub 只在进出视口 `play()/pause()`。
- **`oneshot`** — 播一次的入场效果。`init` 返回**不重复**的 timeline。hub 负责:进入视口 `restart()`，播完停 ~1.1s 后(仍在视口则)自动重播。**不要自己加 repeat。**
- **`interactive`** — 用户驱动(拖 / 悬停 / 在卡内滚动)。`init` 建好交互后**可不返回**动画。hub 不做自动重播。请在 DOM 里放一个提示(如「← 拖我」)。

## ctx 提供的工具

```js
ctx.q(sel)    // = stage.querySelector(sel)
ctx.qa(sel)   // = [...stage.querySelectorAll(sel)]
ctx.reduced   // boolean: prefers-reduced-motion。为 true 时请直接渲染终态、避免持续动画。
              // （即使你忽略它，hub 也会兜底:把返回的动画 progress(1).pause() 且不重播。）
```

## 硬性要求

1. **完全 scope 到 stage**:不污染全局、不依赖外部 DOM、不互相干扰(48+ 卡同页)。
2. **自包含 DOM**:需要的 SVG path / 网格 / 文本都在 `init` 里用 `stage.innerHTML` 或 createElement 建。
3. **样式就近**:卡片需要的样式用内联 style 或在 `init` 里注入一个 `<style>`(选择器加唯一前缀 `.card-<id>`),不要写进全局 CSS。
4. **清理友好**:不要 `setInterval` 裸跑;用 gsap 的 timeline/delayedCall。hub 会在离屏 pause 你返回的动画。
5. **ScrollTrigger 类卡片**:卡片 stage 太小,无法用整页滚动。请用**自包含方式**演示该「动作词汇」——例如用一个会自动来回 scrub 的 timeline 代表「scrub 联动」,或在 stage 内放一个 `overflow:auto` 的局部 scroller 配 `scroller:` 选项。真正的 pin/scrub 整页体验在 demo 页里。若用了 ScrollTrigger,`init` 末尾不要 `ScrollTrigger.refresh()` 整页;只创建局部的。
6. **MorphSVG / DrawSVG**:在 `init` 里写出 `<svg>` + path。DrawSVG 用 `gsap.from(path,{drawSVG:"0%"})`;MorphSVG 用 `gsap.to(a,{morphSVG:b})`。
7. 每张卡的 `code` 字段是**展示给人看的真实片段**(可适当精简但要能体现该 API),`prompt` 是**不含代码**的自然语言描述。

## 分组键 (group) 与 section 顺序

hub 按以下顺序渲染 section,`group` 必须用左列的键:

| group 键 | section 标题 | family 文件 |
|---|---|---|
| Core | 核心补间 Core / Tween | core.js |
| Easing | 缓动 Easing | easing.js |
| Stagger | 交错 Stagger | stagger.js |
| Timeline | 时间轴 Timeline | timeline.js |
| ScrollTrigger | 滚动触发 ScrollTrigger | scrolltrigger.js |
| SplitText | 文字拆分 SplitText | splittext.js |
| Text | 文本动效 Scramble / Text | scrambletext.js |
| Flip | 布局过渡 Flip | flip.js |
| Draggable | 拖拽与惯性 Draggable / Inertia | draggable.js |
| Observer | 统一输入 Observer | observer.js |
| MotionPath | 路径运动 MotionPath | motionpath.js |
| DrawSVG | 描边 DrawSVG | drawsvg.js |
| MorphSVG | 形变 MorphSVG | morphsvg.js |
| Physics2D | 物理 Physics2D | physics.js |
| Utils | 工具与响应式 Utils / matchMedia | utils.js |

未知 group 的卡片会落到末尾「其它」section,但仍会显示。
