---
id: handcrafted-sketch
name_cn: 手作速写 · Handcrafted Sketch
name_en: Handcrafted Sketch
lineage: handcrafted
best_for: [writer, illustrator, maker]
accent: "#d2542f"
description: >
  An open sketchbook left on a warm wooden table. Cream paper with a faint
  grain, hand-drawn ink borders that wobble like they were inked by a brush,
  washi-tape corners holding a taped-in illustration, sticky notes scrawled in
  the margins, and doodled arrows pointing the eye where to go. The handwriting
  display font carries the warmth; a readable serif does the reading. Nothing is
  perfectly straight — pieces sit at gentle 1–2° tilts so the page feels placed
  by hand, not laid out by a machine. Personal, tactile, unmistakably analog.
colors:
  paper: "#faf4e6"
  paper-shade: "#f1e7d0"
  ink: "#2b2620"
  ink-soft: "#5f574a"
  ink-faint: "#9a8f7c"
  accent: "#d2542f"
  accent-deep: "#b23c1c"
  washi-coral: "#f2a48b"
  washi-mint: "#a7c4a0"
  sticky-yellow: "#fbe89a"
  sticky-blue: "#bcd6e6"
  line: "#2b2620"
  hairline: "#e0d4ba"
typography:
  display-xl: { fontFamily: "'Caveat', 'Comic Sans MS', cursive", fontSize: 88px, fontWeight: 700, lineHeight: 0.96, letterSpacing: -0.5px }
  display-md: { fontFamily: "'Caveat', cursive", fontSize: 52px, fontWeight: 700, lineHeight: 1.0, letterSpacing: 0 }
  scrawl:     { fontFamily: "'Caveat', cursive", fontSize: 26px, fontWeight: 600, lineHeight: 1.2 }
  lede:       { fontFamily: "'Lora', Georgia, serif", fontSize: 22px, fontWeight: 400, lineHeight: 1.6, fontStyle: italic }
  body:       { fontFamily: "'Lora', Georgia, serif", fontSize: 18px, fontWeight: 400, lineHeight: 1.7 }
  eyebrow:    { fontFamily: "'Caveat', cursive", fontSize: 22px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 0.5px }
spacing: { section: 104px, block: 36px, tight: 14px }
rounded: { sm: 4px, md: 10px, lg: 18px }
motion: gentle-tilt-and-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
avoid: [straight_perfect_grids, flat_corporate_cards, neon_gradients, glassmorphism, centered_minimalism, sterile_whitespace]
reference_vocabulary: ["picture-book endpapers", "Moleskine sketchbook", "washi-tape scrapbook", "illustrator process notes", "a teacher's marked-up margins"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **整页是一本翻开的速写本**：奶油纸 + 细微纸纹，手绘墨水边框（略带抖动），不是规整的网格。
- **手写 + 衬线双声部**：Caveat 手写体做大标题/便签/箭头批注，Lora 衬线做正文阅读。
- **拼贴质感**：washi 胶带固定的"贴入式"插画、便利贴、涂鸦箭头、订书钉、咖啡渍。
- **一切微微倾斜**：模块、图片、便签都带 1–2° tilt，像手摆上去的。
- **暖色掌主**：珊瑚红强调色（手绘下划线 / 圈注 / 箭头），washi 撞色点缀，绝不用霓虹渐变或玻璃拟态。
- **动效**：进入视口时极轻的"放正 + 淡入"（尊重 prefers-reduced-motion）。
- **照片槽**：插画用 washi 胶带"贴"进页面；关闭照片时退化为手绘画框 + 便签占位，依然成立。
