---
id: retro-print
name_cn: 复古印刷 · Retro Print
name_en: Retro Print
lineage: expressive
best_for: [illustrator, designer, writer]
accent: "#b5532a"
description: >
  A 1970s printed-poster canvas: warm cream stock with a faint paper grain,
  condensed display headlines stacked like a vintage book jacket, and a muted
  earth palette of mustard, rust, teal and brown. Thin ink rules divide the
  page like a letterpress layout; halftone dot textures and a framed retro
  illustration give it the warmth of something run on a real press. Confident
  and hand-made — the opposite of a clean SaaS template — yet quietly composed,
  with the illustration doing the talking and type holding the grid.
colors:
  canvas: "#f3e9d2"
  surface: "#ece0c2"
  ink: "#2a1f16"
  ink-muted: "#5c4a35"
  ink-subtle: "#8a7456"
  mustard: "#d99a2b"
  rust: "#b5532a"
  teal: "#2f7d77"
  brown: "#6b4226"
  accent: "#b5532a"
  accent-hover: "#8f3f1f"
  hairline: "#cbb88e"
typography:
  display-xl: { fontFamily: "'Anton', Impact, sans-serif", fontSize: 104px, fontWeight: 400, lineHeight: 0.92, letterSpacing: 0.5px, textTransform: uppercase }
  display-md: { fontFamily: "'Anton', Impact, sans-serif", fontSize: 44px, fontWeight: 400, lineHeight: 1.0, letterSpacing: 0.5px, textTransform: uppercase }
  lede:       { fontFamily: "'Spectral', Georgia, serif", fontSize: 22px, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0px, fontStyle: italic }
  body:       { fontFamily: "'Spectral', Georgia, serif", fontSize: 18px, fontWeight: 400, lineHeight: 1.7 }
  eyebrow:    { fontFamily: "'Anton', Impact, sans-serif", fontSize: 13px, fontWeight: 400, lineHeight: 1.3, letterSpacing: 3px, textTransform: uppercase }
spacing: { section: 112px, block: 40px, tight: 16px }
rounded: { sm: 0px, md: 2px }
motion: subtle-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Anton&family=Spectral:ital,wght@0,400;0,500;1,400&display=swap"
avoid: [direct_screenshot_copy, generic_purple_gradient, neon_saturation, glassmorphism, clean_saas_grid, drop_shadows_everywhere]
reference_vocabulary: ["1970s Penguin covers", "letterpress posters", "vintage record sleeves", "halftone print"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **印刷质感优先**：暖奶油纸底 + 细密 paper grain，halftone 网点点缀，不用阴影堆叠。
- 标题用 Anton 高对比 condensed 大写，像复古海报／书脊层层叠压；正文 Spectral serif，行高松、有书卷气。
- 70 年代土系配色：mustard / rust / teal / brown，全部去饱和、压低明度，绝不霓虹。
- ink rules（细墨线）切分版面，像 letterpress 排版网格，而非卡片盒子。
- 一张装裱感的复古插画是主角（hero 大图 + work 小框），照片关掉时退回到纯排版海报。
- 动效：scroll 进入极轻 fade-up，halftone 不动；尊重 prefers-reduced-motion。
