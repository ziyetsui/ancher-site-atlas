---
id: art-deco
name_cn: 装饰艺术 · Art Deco
name_en: Art Deco
lineage: expressive
best_for: [speaker, author, consultant]
accent: "#c8a253"
description: >
  A theatrical 1920s stage rendered in deep emerald and gold. Strict bilateral
  symmetry, hairline gold linework, sunburst and stepped-fan motifs framing a
  portrait like a proscenium. Tall, airy Deco capitals announce; an elegant serif
  speaks in measured sentences. Ivory and brass on near-black emerald — luxe,
  ceremonial, confident. Everything is centered and framed; ornament is geometric,
  never floral; gold is line and inlay, never a flat fill. The page feels like the
  cover of a programme for an evening you don't want to miss.
colors:
  canvas: "#0c1c17"
  surface: "#102a22"
  surface-raised: "#15362b"
  ink: "#f4ecd8"
  ink-muted: "#c4bfa8"
  ink-subtle: "#8a967f"
  accent: "#c8a253"
  accent-bright: "#e6c878"
  accent-deep: "#8a6a2e"
  emerald-line: "#2a5142"
  hairline: "rgba(200,162,83,0.28)"
typography:
  display-xl: { fontFamily: "'Poiret One', 'Cinzel', serif", fontSize: 88px, fontWeight: 400, lineHeight: 0.96, letterSpacing: 14px, textTransform: uppercase }
  display-md: { fontFamily: "'Poiret One', serif", fontSize: 40px, fontWeight: 400, lineHeight: 1.1, letterSpacing: 8px, textTransform: uppercase }
  eyebrow:    { fontFamily: "'Poiret One', serif", fontSize: 13px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 6px, textTransform: uppercase }
  lede:       { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 27px, fontWeight: 500, lineHeight: 1.45, letterSpacing: 0.2px, fontStyle: italic }
  body:       { fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20px, fontWeight: 400, lineHeight: 1.62 }
  numeral:    { fontFamily: "'Poiret One', serif", fontSize: 56px, fontWeight: 400, lineHeight: 1, letterSpacing: 2px }
spacing: { section: 132px, block: 44px, tight: 18px }
rounded: { sm: 0px, md: 2px }
motion: sunburst-rise-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Poiret+One&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&display=swap"
avoid: [floral_ornament, flat_gold_fill, asymmetric_layout, card_grid, rounded_pill_buttons, drop_shadows_soft_blur, generic_purple_gradient, direct_screenshot_copy]
reference_vocabulary: ["Chrysler Building lobby", "1925 Exposition des Arts Décoratifs posters", "Great Gatsby title cards", "Cunard liner menus", "theatre programme covers"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **对称即结构**：一切居中、成框。布局沿中轴线镜像，像舞台拱门 (proscenium)。
- **金色只走线**：hairline 金描边、内嵌线、sunburst 放射线；绝不大面积平涂金色。
- **几何装饰**：旭日 (sunburst)、扇形 (fan)、阶梯 (stepped/ziggurat) 母题；拒绝花卉与曲线藤蔓。
- **深祖母绿 / 近黑 + 象牙白 + 黄铜金**：底色 `#0c1c17`，正文象牙 `#f4ecd8`，强调黄铜 `#c8a253`。
- **字体二元**：Poiret One 做高瘦、宽字距的 Deco 大写标题；Cormorant Garamond 做优雅 serif 正文与斜体引言。
- **肖像入框**：人像嵌在金色几何框 + 顶部旭日里，像剧院节目单封面。
- **动效**：scroll 进入时极轻的「升起 + 旭日展开」；尊重 prefers-reduced-motion。
- **零圆角**：方角、直线、对称；按钮是描金的矩形，不是 pill。
