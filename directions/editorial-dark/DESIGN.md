---
id: editorial-dark
name_cn: 暗色编辑 · Editorial Dark
name_en: Editorial Dark
lineage: typographic
best_for: [writer, critic, founder]
accent: "#e0a64d"
description: >
  A near-black magazine spread that reads like a midnight essay. Light serif
  display set large with tight tracking carries the whole page; a single warm
  amber accent flickers on links, the lede, and rule-marks — nowhere else.
  Restrained to the point of austerity: no cards, no boxes, no gradients. Ink on
  charcoal, a hairline grid implied by margins, and one portrait that sits in the
  dark like a frontispiece. Hierarchy is type scale and silence, not surface.
colors:
  canvas: "#0c0c0e"
  surface: "#141417"
  ink: "#ededec"
  ink-muted: "#a3a29c"
  ink-subtle: "#6c6b66"
  accent: "#e0a64d"
  accent-hover: "#f0bd6a"
  hairline: "#26262b"
typography:
  display-xl: { fontFamily: "'Newsreader', Georgia, serif", fontSize: 80px, fontWeight: 500, lineHeight: 1.02, letterSpacing: -1.8px }
  display-md: { fontFamily: "'Newsreader', Georgia, serif", fontSize: 38px, fontWeight: 500, lineHeight: 1.14, letterSpacing: -0.6px }
  lede:       { fontFamily: "'Newsreader', Georgia, serif", fontSize: 23px, fontWeight: 400, lineHeight: 1.5, letterSpacing: -0.1px, fontStyle: italic }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.7 }
  eyebrow:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 2px, textTransform: uppercase }
spacing: { section: 128px, block: 40px, tight: 16px }
rounded: { sm: 2px, md: 3px }
motion: subtle-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;600&display=swap"
avoid: [direct_screenshot_copy, generic_purple_gradient, centered_everything, card_grid_for_prose, glowing_neon_dark_mode, gray_on_gray_low_contrast]
reference_vocabulary: ["The Criterion Collection", "n+1 magazine", "dark long-form essay sites", "film title cards"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **暗色杂志，排版扛全场**：near-black 画布 + 浅墨 serif 标题，层级靠字号与留白，绝不用卡片/盒子。
- 巨号 serif display（Newsreader 500，紧字距）做标题与 lede；正文 Inter，行高松（1.7）。
- 单一暖琥珀色 `#e0a64d`：只点在链接、lede、rule-mark 上，不做装饰性铺色、不发光霓虹。
- 单栏非对称：标题/lede 偏左，肖像如卷首插图沉在暗处。
- 对比要够：浅墨 `#ededec` on `#0c0c0e`，避免灰打灰的低对比暗黑通病。
- 动效：scroll 进入时极轻 fade-up；尊重 `prefers-reduced-motion`。
