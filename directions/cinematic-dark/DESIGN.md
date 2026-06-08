---
id: cinematic-dark
name_cn: 电影感 · Cinematic
name_en: Cinematic Dark
lineage: expressive
best_for: [director, filmmaker, photographer]
accent: "#c4b59a"
description: >
  A theater goes dark and the screen takes over. Full-bleed film stills bleed
  edge to edge behind letterbox bars; type is thin, uppercase, and tracked wide
  like a title card holding for a beat. Everything is black and restrained, lit
  by a single warm sand accent that behaves like the one practical light left on
  set. No cards, no boxes, no chrome — the image is the interface, and the words
  arrive slow and deliberate, as if printed in the credits. Moody, expensive,
  held-breath quiet.
colors:
  canvas: "#0a0a0b"
  surface: "#111113"
  letterbox: "#000000"
  ink: "#f4f1ea"
  ink-muted: "#9a968d"
  ink-subtle: "#605d57"
  accent: "#c4b59a"
  accent-hover: "#d8cab1"
  hairline: "#26262a"
typography:
  display-xl: { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 64px, fontWeight: 200, lineHeight: 1.02, letterSpacing: 6px, textTransform: uppercase }
  display-md: { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 30px, fontWeight: 300, lineHeight: 1.1, letterSpacing: 3px, textTransform: uppercase }
  title-card: { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15px, fontWeight: 300, lineHeight: 1.6, letterSpacing: 4px, textTransform: uppercase }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16px, fontWeight: 400, lineHeight: 1.7, letterSpacing: 0.2px }
  eyebrow:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 4px, textTransform: uppercase }
spacing: { section: 140px, block: 44px, tight: 16px }
rounded: { sm: 0px, md: 0px }
motion: slow-fade-and-letterbox-reveal
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap"
avoid: [rounded_corners, card_grid, drop_shadows, bright_saturated_color, centered_body_text, generic_purple_gradient, busy_motion]
reference_vocabulary: [a24, "film title cards", criterion collection, "director reel sites", letterboxd]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **画面即界面**：全幅电影剧照铺满屏，上下加 letterbox 黑边（2.35:1 感），不用卡片/盒子/阴影。
- **字如片头字幕**：极细 uppercase sans（Inter 200/300），字距拉到 4–6px，慢、克制、像 title card。
- **纯黑底 + 单一沙色强调** `#c4b59a`，像片场唯一留着的暖光，只点在编号/连结/线条。
- **零圆角**：所有边都是直角，硬切，像胶片画格。
- **动效**：letterbox 黑边缓缓张开 + 内容慢 fade-up；尊重 prefers-reduced-motion。
- 与 editorial（暖纸 serif）、swiss-minimal、bold-brutalist 截然不同：这是黑、是图、是影院。
