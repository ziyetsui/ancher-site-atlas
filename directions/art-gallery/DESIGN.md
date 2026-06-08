---
id: art-gallery
name_cn: 美术馆 · Art Gallery
name_en: Art Gallery
lineage: minimal
best_for: [photographer, artist, designer]
accent: "#1a1a18"
description: >
  A page that behaves like a gallery wall, not a website. Near-white room tone,
  ink type, and an almost reverent amount of whitespace let full-bleed images do
  all the talking. Work is hung — never boxed, never carded — and labelled with
  tiny serif captions set the way a museum prints a wall plate. No color, no
  decoration, no UI chrome: hierarchy comes from scale, silence, and the
  rhythm of image against void. The site should feel curated, quiet, and
  expensive — the kind of restraint that signals the work can hold a room.
colors:
  canvas: "#fbfbf9"
  surface: "#f4f3ef"
  ink: "#1a1a18"
  ink-muted: "#6b6a64"
  ink-subtle: "#9b998f"
  accent: "#1a1a18"
  accent-hover: "#000000"
  hairline: "#e6e4dd"
typography:
  display-xl: { fontFamily: "'Newsreader', Georgia, serif", fontSize: 64px, fontWeight: 400, lineHeight: 1.06, letterSpacing: -1.4px }
  display-md: { fontFamily: "'Newsreader', Georgia, serif", fontSize: 32px, fontWeight: 400, lineHeight: 1.18, letterSpacing: -0.6px }
  lede:       { fontFamily: "'Newsreader', Georgia, serif", fontSize: 21px, fontWeight: 400, lineHeight: 1.5, letterSpacing: -0.1px, fontStyle: italic }
  caption:    { fontFamily: "'Newsreader', Georgia, serif", fontSize: 13px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0.1px, fontStyle: italic }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16px, fontWeight: 400, lineHeight: 1.7 }
  eyebrow:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 2.4px, textTransform: uppercase }
spacing: { section: 160px, block: 56px, tight: 16px }
rounded: { sm: 0px, md: 0px }
motion: slow-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&family=Inter:wght@400;500&display=swap"
avoid: [direct_screenshot_copy, color_accents, drop_shadows, card_grid, rounded_corners, cropped_thumbnails_with_borders, busy_navigation]
reference_vocabulary: ["museum wall plates", "Aperture monograph", "white-cube gallery", "Hiroshi Sugimoto sites"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **画廊白墙**：`#fbfbf9` 室内光底色 + 纯 ink，无任何彩色强调。颜色克制到极致。
- **图像主导**：full-bleed 大图说话，文字退到边缘当展签。
- **巨量留白**：section 间距 160px，图与图之间留出「呼吸的墙面」。
- **微型 serif 展签**：Newsreader 斜体小字做图注／标题，像美术馆铭牌。
- **零装饰**：无圆角、无阴影、无卡片、无盒子。层级只来自比例与沉默。
- **动效**：scroll 进入时缓慢长 fade（慢于 editorial），尊重 prefers-reduced-motion。
