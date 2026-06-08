---
id: editorial
name_cn: 编辑排版 · 杂志感
name_en: Editorial
lineage: typographic
best_for: [writer, founder, researcher]
accent: "#9a3412"
description: >
  A typography-led canvas that reads like a printed essay. Oversized serif
  headlines with tight negative tracking, a single asymmetric column that
  breathes, generous margins, and one restrained rust accent used only on
  links and the lede. Confident, literary, unhurried — the page feels edited,
  not assembled. Hierarchy comes from type scale and whitespace, never from
  boxes or cards.
colors:
  canvas: "#faf8f4"
  surface: "#f3efe7"
  ink: "#1a1815"
  ink-muted: "#5c574e"
  ink-subtle: "#8a8377"
  accent: "#9a3412"
  accent-hover: "#7c2d12"
  hairline: "#e3ddd0"
typography:
  display-xl: { fontFamily: "'Spectral', Georgia, serif", fontSize: 76px, fontWeight: 500, lineHeight: 1.04, letterSpacing: -2px }
  display-md: { fontFamily: "'Spectral', Georgia, serif", fontSize: 40px, fontWeight: 500, lineHeight: 1.12, letterSpacing: -0.8px }
  lede:       { fontFamily: "'Spectral', Georgia, serif", fontSize: 24px, fontWeight: 400, lineHeight: 1.45, letterSpacing: -0.2px, fontStyle: italic }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 18px, fontWeight: 400, lineHeight: 1.65 }
  eyebrow:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 1.5px, textTransform: uppercase }
spacing: { section: 120px, block: 40px, tight: 16px }
rounded: { sm: 2px, md: 4px }
motion: subtle-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;600&display=swap"
avoid: [direct_screenshot_copy, generic_purple_gradient, centered_everything, card_grid_for_prose]
reference_vocabulary: [wired, mintlify, "personal essay sites"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **排版即设计**：层级靠字号 + 留白，不靠卡片/盒子。
- 巨号 serif 标题 + 紧字距；正文 sans，行高松。
- 单栏非对称：标题/lede 偏左，正文一栏，右侧大量留白。
- 单一 rust 强调色，只用在链接与 lede，绝不装饰性铺色。
- 动效：scroll 进入时极轻 fade-up。
