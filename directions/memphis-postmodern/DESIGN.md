---
id: memphis-postmodern
name_cn: 孟菲斯 · Memphis
name_en: Memphis Postmodern
lineage: experimental
best_for: [designer, educator, creator]
accent: "#ff4fa3"
description: >
  A page that refuses to be boring. Cream paper scattered with 80s-Memphis
  confetti — squiggles, dots, zigzags, and hard-edged geometric blocks in cyan,
  magenta, and yellow, all set against fat black outlines. Layout is gleefully
  asymmetric: blocks tilt, overlap, and break the grid on purpose, every panel
  framed like a sticker. Bold geometric sans does the talking, numerals run
  enormous, and a quirky framed illustration sits among the shapes like the
  punchline. Loud, playful, committed — postmodern joy with a teacher's clarity.
colors:
  canvas: "#fbf7ee"
  surface: "#ffffff"
  ink: "#15130f"
  ink-muted: "#4a463d"
  cyan: "#2ad4d4"
  magenta: "#ff4fa3"
  yellow: "#ffd23f"
  accent: "#ff4fa3"
  accent-hover: "#e03a8c"
  outline: "#15130f"
typography:
  display-xl: { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 84px, fontWeight: 900, lineHeight: 0.92, letterSpacing: -2px, textTransform: uppercase }
  display-md: { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 40px, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1px, textTransform: uppercase }
  numeral:    { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 92px, fontWeight: 900, lineHeight: 0.9, letterSpacing: -3px }
  body:       { fontFamily: "'Poppins', system-ui, sans-serif", fontSize: 18px, fontWeight: 400, lineHeight: 1.6 }
  eyebrow:    { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 13px, fontWeight: 800, lineHeight: 1.2, letterSpacing: 2px, textTransform: uppercase }
spacing: { section: 104px, block: 36px, tight: 14px }
rounded: { sm: 4px, md: 14px, pill: 999px }
motion: playful-pop-and-wiggle-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800;900&family=Poppins:wght@400;500;600;700&display=swap"
avoid: [muted_corporate_palette, soft_drop_shadow_realism, centered_symmetric_layout, thin_hairline_borders, generic_purple_gradient]
reference_vocabulary: [memphis_group, ettore_sottsass, "80s swatch watches", postmodern_swiss_punk, "saved by the bell title cards"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **80s 孟菲斯狂欢**：奶油底 + 原色三件套（青 #2ad4d4 / 品红 #ff4fa3 / 黄 #ffd23f）+ 纯黑。
- **粗黑描边 + 硬阴影**：所有块、按钮、卡片都有 3px 黑边和实心偏移阴影（box-shadow 无模糊），像贴纸。
- **故意打破网格**：块体倾斜、重叠、错位；hero 漂浮着波浪线、圆点、锯齿、三角等几何碎片。
- **字体即能量**：Archivo Black 全大写做标题，数字超大；Poppins 做正文。
- **数字模块巨号化**：metrics 用 92px 巨型数字，每个独立色块。
- **插画当笑点**：quirky 框装插画夹在几何形状中间，倾斜摆放。
- **动效**：scroll 进入时弹入 + 轻微摇摆（pop & wiggle），尊重 prefers-reduced-motion。
