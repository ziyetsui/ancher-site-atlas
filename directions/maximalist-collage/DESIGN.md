---
id: maximalist-collage
name_cn: 极繁拼贴 · Maximalist Collage
name_en: Maximalist Collage
lineage: experimental
best_for: [artist, creator, musician]
accent: "#ff2e63"
description: >
  A loud, hand-built scrapbook that refuses white space. Torn-paper scraps
  in clashing brights overlap at crooked angles, fixed down with strips of
  masking tape and crusty stickers; headlines are pasted in two fighting
  display faces — a brutal grotesque next to a high-contrast serif — rotated,
  layered, sometimes half off the edge. The portrait is the collage centerpiece,
  ripped and taped over a busy patterned ground. Energy comes from density,
  collision, and intentional mess: more is more, nothing is centered, every
  layer casts a shadow on the one below.
colors:
  ground: "#f4ead5"
  ground-ink: "#16140f"
  scrap-cream: "#fff7e6"
  scrap-pink: "#ffd6e0"
  scrap-blue: "#1b3bff"
  scrap-yellow: "#ffe14d"
  scrap-lime: "#b6ff3c"
  scrap-orange: "#ff7a1a"
  ink: "#16140f"
  ink-inverse: "#fff7e6"
  accent: "#ff2e63"
  accent-2: "#1b3bff"
  tape: "rgba(214,196,140,0.72)"
  sticker-edge: "#ffffff"
typography:
  display-xl:  { fontFamily: "'Archivo Black', system-ui, sans-serif", fontSize: 86px, fontWeight: 400, lineHeight: 0.92, letterSpacing: -2px, textTransform: uppercase }
  display-serif: { fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 64px, fontWeight: 400, lineHeight: 0.96, letterSpacing: -1px, fontStyle: italic }
  scrap-head: { fontFamily: "'Archivo Black', system-ui, sans-serif", fontSize: 28px, fontWeight: 400, lineHeight: 1.0, letterSpacing: -0.5px, textTransform: uppercase }
  body:       { fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 18px, fontWeight: 400, lineHeight: 1.5 }
  label:      { fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 12px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 2px, textTransform: uppercase }
spacing: { section: 96px, block: 36px, tight: 14px }
rounded: { sm: 1px, md: 3px }
motion: tape-peel-and-jiggle-on-hover, scraps-settle-in-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@400;700&display=swap"
avoid: [clean_grid, lots_of_white_space, single_accent_restraint, centered_minimalism, soft_pastel_calm, card_with_even_padding]
reference_vocabulary: ["riot grrrl zines", "Sister Corita Kent", "punk flyer paste-up", "ransom-note collage", "Yowza scrapbook walls"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **拒绝留白**：底图是花纹/网点的"busy ground"，碎纸片层层叠压、互相遮挡，没有干净网格。
- **撕纸 + 胶带 + 贴纸**：每块内容是一张歪着贴上去的撕边纸片，用 masking tape 条压住四角，配脏脏的圆形贴纸。
- **两种打架的 display 字体**：Archivo Black（粗黑无衬线）撞 DM Serif Display（高对比衬线斜体），混排、旋转、半出血。
- **冲突的高饱和色**：蓝/粉/柠檬黄/荧光绿/橙 互相碰撞，热粉 `#ff2e63` 与电光蓝 `#1b3bff` 双强调。
- **肖像即中心**：人物图被"撕"成不规则边、贴胶带，是 hero 拼贴的视觉锚点。
- **层叠投影**：每一层都对下一层投下硬阴影，强调"手工贴上去"的实体感。
- **动效**：scroll 时碎片轻微"落位"，hover 时胶带轻翘、纸片微微抖一下；尊重 reduced-motion。
- **没有照片时**：肖像位降级为一块撕边的拼贴色块 + 大写排版名牌，依然像故意贴的一片。
