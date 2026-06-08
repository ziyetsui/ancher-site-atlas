---
id: newsprint
name_cn: 报纸版式 · Newsprint
name_en: Newsprint
lineage: typographic
best_for: [journalist, writer, researcher]
accent: "#c0241f"
description: >
  A broadsheet newspaper rendered for the screen. Newsprint off-white stock,
  jet-black ink, and a single arterial red used only for kickers and the
  masthead rule. Old-style serif headlines sit above a true multi-column grid
  divided by hairline rules; the lead story opens with a drop cap and runs in
  justified columns like a printed front page. Hierarchy comes from rules,
  column width, and type scale — never boxes, cards, or shadows. The page
  reads like Saturday's paper: dense, authoritative, built to be skimmed
  then read.
colors:
  canvas: "#f5f2ea"
  surface: "#efe9dd"
  ink: "#1a1714"
  ink-muted: "#4d4740"
  ink-subtle: "#857d70"
  accent: "#c0241f"
  accent-hover: "#97160f"
  hairline: "#cdc4b3"
  rule: "#1a1714"
typography:
  masthead:   { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 64px, fontWeight: 900, lineHeight: 0.94, letterSpacing: -1px }
  headline-xl:{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 58px, fontWeight: 800, lineHeight: 1.02, letterSpacing: -0.5px }
  headline-md:{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 30px, fontWeight: 700, lineHeight: 1.08, letterSpacing: -0.2px }
  deck:       { fontFamily: "'Spectral', Georgia, serif", fontSize: 21px, fontWeight: 400, lineHeight: 1.5, fontStyle: italic }
  body:       { fontFamily: "'Spectral', Georgia, serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.6 }
  kicker:     { fontFamily: "'Spectral', Georgia, serif", fontSize: 12px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 2px, textTransform: uppercase }
  byline:     { fontFamily: "'Spectral', Georgia, serif", fontSize: 13px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.3px, fontStyle: italic }
spacing: { section: 72px, block: 32px, tight: 14px }
rounded: { sm: 0px, md: 0px }
motion: subtle-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400&display=swap"
avoid: [direct_screenshot_copy, generic_purple_gradient, rounded_cards, drop_shadows, sans_serif_body, centered_hero]
reference_vocabulary: ["broadsheet front page", "The New York Times", "Le Monde", "letterpress"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **大报版式**：真·多栏网格 + 发丝细分栏线，靠栏宽与规则线分隔，不用卡片/盒子/阴影。
- 报纸底纹米白 `#f5f2ea` + 纯墨黑 + 单一动脉红 `#c0241f`，红色只给 kicker 与刊头规则线。
- Old-style serif 刊头（Playfair Display 900）压在黑色规则线上；正文 Spectral serif，两端对齐分栏。
- 头条带首字下沉（drop cap），像头版导语。
- 层级靠字号、栏宽、规则线 — 不靠颜色铺底。
- 纪实照片配栏内图注（cutline），黑白质感。
- 动效：scroll 进入极轻 fade-up；尊重 prefers-reduced-motion。
