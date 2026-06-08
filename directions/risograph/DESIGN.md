---
id: risograph
name_cn: 油印拼色 · Risograph
name_en: Risograph
lineage: handcrafted
best_for: [illustrator, publisher, designer]
accent: "#ff48b0"
description: >
  A printed-page direction that behaves like a riso machine: two or three spot
  colors laid down one pass at a time, never quite landing on top of each other.
  Fluoro pink, process blue and a punch of yellow sit on warm off-white stock,
  each block nudged a few pixels out of register so edges show a coloured ghost.
  Halftone dots and paper grain wash over everything; overlapping inks multiply
  into muddy greens and purples the way real overprint does. Bold Archivo
  headlines, mono labels stamped like registration marks. The charm is the
  imperfection — it should feel hand-pulled, slightly crooked, and proud of it.
colors:
  paper: "#f6f1e3"
  paper-deep: "#efe7d2"
  ink: "#1b1a17"
  ink-soft: "#4a463c"
  pink: "#ff48b0"
  blue: "#0078bf"
  yellow: "#ffd400"
  overprint: "#7a2a8c"
  hairline: "#d8cfb6"
typography:
  display-xl: { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 92px, fontWeight: 800, lineHeight: 0.92, letterSpacing: -2.5px, textTransform: uppercase }
  display-md: { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 38px, fontWeight: 800, lineHeight: 1.0, letterSpacing: -1px, textTransform: uppercase }
  body:       { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 18px, fontWeight: 400, lineHeight: 1.6 }
  lede:       { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 22px, fontWeight: 500, lineHeight: 1.4 }
  label:      { fontFamily: "'Space Mono', ui-monospace, monospace", fontSize: 12px, fontWeight: 700, lineHeight: 1.3, letterSpacing: 2px, textTransform: uppercase }
spacing: { section: 104px, block: 36px, tight: 14px }
rounded: { sm: 0px, md: 2px }
motion: ink-settle-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;700;800;900&family=Space+Mono:wght@400;700&display=swap"
avoid: [clean_vector_flat, drop_shadows_for_depth, single_solid_brand_color, perfect_pixel_alignment, glossy_gradients]
reference_vocabulary: [risograph, "Risotto Studio", "Hato Press", "zine fairs", "spot-color print", overprint]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **套色不准是设计**：每个色块用 `transform` 错位几像素，留出彩色重影边。
- 三个 riso 专色：荧光粉 `#ff48b0`、印刷蓝 `#0078bf`、黄 `#ffd400`，铺在暖白纸上。
- **叠印**：重叠处用 `mix-blend-mode: multiply` 压出脏绿/紫，模拟真实 overprint。
- 半调网点 + 纸张颗粒：用 radial-gradient 网点层 + SVG 噪点铺满全页。
- 字体：Archivo 800 大写粗黑标题（紧字距）；Space Mono 当套准标记式标签。
- 直角、无圆角、无投影；纵深靠错位与叠色，不靠阴影。
- 动效：进入时色块从错位「归位」一点点（ink-settle），尊重 reduced-motion。
