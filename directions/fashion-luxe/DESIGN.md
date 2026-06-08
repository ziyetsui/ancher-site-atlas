---
id: fashion-luxe
name_cn: 时尚大片 · Fashion Luxe
name_en: Fashion Luxe
lineage: editorial-image
best_for: [stylist, creative-director, model]
accent: "#e0218a"
description: >
  A glossy fashion-magazine cover brought to the screen. Full-bleed editorial
  photography carries the page; an oversized Playfair masthead sits on top of
  the image like a Vogue logotype, kerned wide and confident. The palette is
  cream and ink black with a single hot magenta that detonates on one word, one
  rule, one CTA — never more. Work reads as a featured spread plus a tight grid
  of editorials; press logos and counts whisper the credentials. Mostly B&W and
  monochrome restraint so the one color and the one photo do all the talking.
  It should feel looked-at — and remembered.
colors:
  canvas: "#f7f3ee"
  surface: "#efe9e1"
  ink: "#0d0d0f"
  ink-muted: "#4a4a52"
  ink-subtle: "#8c8a92"
  cream: "#fbf8f3"
  accent: "#e0218a"
  accent-hover: "#b71872"
  hairline: "#ddd5c9"
  overlay: "rgba(13,13,15,0.42)"
typography:
  masthead:   { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 116px, fontWeight: 900, lineHeight: 0.92, letterSpacing: -2px, textTransform: uppercase }
  display-md: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 44px, fontWeight: 700, lineHeight: 1.06, letterSpacing: -0.5px }
  lede:       { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 23px, fontWeight: 400, lineHeight: 1.5, fontStyle: italic }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.65 }
  eyebrow:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 3px, textTransform: uppercase }
  caption:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12px, fontWeight: 500, lineHeight: 1.4, letterSpacing: 0.5px }
spacing: { section: 132px, block: 44px, tight: 14px }
rounded: { sm: 0px, md: 2px }
motion: image-reveal-and-fade-up
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Inter:wght@400;500;600&display=swap"
avoid: [direct_screenshot_copy, generic_purple_gradient, card_grid_with_shadows, multiple_accent_colors, centered_everything, rounded_pill_buttons]
reference_vocabulary: [vogue, "magazine cover masthead", "fashion lookbook", "editorial spread"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **照片即版面**：全幅 editorial 大图撑起整页，文字压在图上像杂志封面。
- 巨号 Playfair masthead（900 weight，大写，微负字距）作 logotype；其余 serif 标题克制。
- 单一 hot magenta `#e0218a`：只点在一个词、一根分隔线、一个 CTA 上，绝不铺色。
- 黑白 / 单色为主，留给「那一张图 + 那一抹色」全部注意力。
- selected work = 1 个 featured spread + 紧凑 editorial 网格；press logos + 数字低声背书。
- 动效：hero 图片缓慢 reveal（clip / scale），内容 scroll 进入 fade-up；尊重 reduced-motion。
- 无 photo 时 fallback 是一个排版化的封面（巨号 masthead + magenta 规则线），照样像一本刊物。
