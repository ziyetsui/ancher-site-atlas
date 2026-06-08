---
id: playful-rounded
name_cn: 圆趣俏皮 · Playful Rounded
name_en: Playful Rounded
lineage: warm
best_for: [creator, educator, community]
accent: "#b8a6ff"
description: >
  A candy-bright, bouncy canvas built for people who make learning feel like
  hanging out. Chunky rounded cards float on warm white, edges softened to the
  point of being pillowy. Sticker-style badges peel off the page, metrics live
  in fat color pills, and a friendly 3D character anchors a split hero. Lavender,
  peach and mint do the talking; nothing is sharp, nothing is shouty — just
  warm, confident, and a little playful. Joy comes from rounded geometry,
  oversized soft type, and motion that gently springs rather than slides.
colors:
  canvas: "#fffaf5"
  surface: "#ffffff"
  surface-warm: "#fff2e9"
  ink: "#2b2440"
  ink-muted: "#6b6480"
  ink-subtle: "#9b94ad"
  lavender: "#b8a6ff"
  lavender-deep: "#8b73f0"
  peach: "#ffb38a"
  peach-deep: "#f58a52"
  mint: "#9fe6c4"
  mint-deep: "#4fc795"
  hairline: "#f0e7df"
typography:
  display-xl: { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 68px, fontWeight: 600, lineHeight: 1.02, letterSpacing: -1px }
  display-md: { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 36px, fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.4px }
  pill:       { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 15px, fontWeight: 600, lineHeight: 1, letterSpacing: 0.2px }
  lede:       { fontFamily: "'Nunito', system-ui, sans-serif", fontSize: 21px, fontWeight: 600, lineHeight: 1.5 }
  body:       { fontFamily: "'Nunito', system-ui, sans-serif", fontSize: 17px, fontWeight: 500, lineHeight: 1.65 }
  eyebrow:    { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 13px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 1.5px, textTransform: uppercase }
spacing: { section: 104px, block: 36px, tight: 14px }
rounded: { sm: 16px, md: 28px, lg: 40px, pill: 999px }
motion: spring-bounce-on-load + soft-hover-lift
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@500;600;700;800&display=swap"
avoid: [sharp_corners, corporate_blue, purple_gradient_on_white, thin_hairline_type, dense_data_tables, muted_desaturated_palette]
reference_vocabulary: [duolingo, "candy ui", "sticker packs", headspace, "rounded toy brands"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **圆即一切**：所有卡片/按钮/徽章大圆角（28–40px），没有任何尖角，整体像软糖。
- 糖果三色：薰衣草 `#b8a6ff` / 蜜桃 `#ffb38a` / 薄荷 `#9fe6c4`，铺在暖白底上；色块敢用、饱和。
- Fredoka 做圆润大标题，Nunito 做厚实正文；字重偏粗，气质友好不严肃。
- 指标用胖色 pill，作品用厚卡格栅，徽章像贴纸（旋转一点角度 + 软投影）。
- 动效：载入时轻微 spring 弹入；hover 卡片柔和上浮。绝不滑入式冷感动效。
