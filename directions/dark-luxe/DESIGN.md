---
id: dark-luxe
name_cn: 暗夜质感 · Dark Luxe
name_en: Dark Luxe
lineage: expressive
best_for: [executive, advisor, consultant]
accent: "#c8a24a"
description: >
  A black-and-gold editorial stage built for someone who closes rooms. Deep
  ink ground, warm gold used like brass detailing — never fill — and ivory type
  for the body. An oversized high-contrast serif carries the voice; a split
  portrait hero gives presence without shouting. Hairline gold rules separate
  thought from thought. Spacing is unhurried and expensive; the page feels less
  like a résumé and more like the cover of a private memorandum. Authority comes
  from restraint, contrast, and air — not from gradients or ornament.
colors:
  canvas: "#0a0a0a"
  surface: "#121110"
  surface-raised: "#181613"
  ink: "#efe9dd"
  ink-muted: "#b6ae9e"
  ink-subtle: "#7e776a"
  accent: "#c8a24a"
  accent-hover: "#dcb863"
  hairline: "#2a2620"
  hairline-gold: "#5a4a24"
typography:
  display-xl: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 88px, fontWeight: 600, lineHeight: 1.02, letterSpacing: -1.5px }
  display-md: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 44px, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.5px }
  quote:      { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34px, fontWeight: 500, lineHeight: 1.3, letterSpacing: -0.3px, fontStyle: italic }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.7 }
  metric:     { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 64px, fontWeight: 600, lineHeight: 1, letterSpacing: -1px }
  eyebrow:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 3px, textTransform: uppercase }
spacing: { section: 132px, block: 44px, tight: 18px }
rounded: { sm: 2px, md: 4px }
motion: gold-hairline-draw + slow-fade-up
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap"
avoid: [direct_screenshot_copy, generic_purple_gradient, neon_gold_glow, card_grid_clutter, gold_fills_everywhere, drop_shadows_on_everything]
reference_vocabulary: ["private bank annual report", "luxury watch microsite", "Aesop", "black-tie editorial"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **黑金高对比**：纯黑底 `#0a0a0a` + 暖金 `#c8a24a` + 象牙白正文 `#efe9dd`。金只作点缀（细线、链接、数字），绝不大面积铺色。
- **细金线（hairline gold rules）**是核心结构语言：分隔区块、托住标题、画出表格行；进场时从左向右"画出"。
- 巨号高对比 serif（Cormorant Garamond 600）发声；Inter 承担正文与 eyebrow。
- **split portrait hero**：左侧文字主张，右侧黑白肖像，金色细框；spacing 极舍得留白，气质像私人备忘录封面。
- metrics 用大号 serif 数字 + 金色单位；testimonials 以斜体大引文领衔。
- 动效克制：hairline 画出 + 缓 fade-up；尊重 `prefers-reduced-motion`。
- avoid：紫色渐变、霓虹金发光、卡片堆砌、到处投影、金色当背景填充。
