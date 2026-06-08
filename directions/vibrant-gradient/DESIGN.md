---
id: vibrant-gradient
name_cn: 活力渐变 · Vibrant Gradient
name_en: Vibrant Gradient
lineage: expressive
best_for: [creator, marketer, founder]
accent: "#d633ff"
description: >
  An energetic, optimistic canvas built on a white field punctuated by soft
  aurora/mesh gradient blobs — indigo bleeding into magenta into coral. Bold
  rounded sans does the talking: big confident statements, oversized numerals,
  lots of air. Content sits inside glassy frosted cards that float over the
  gradient haze, with generous corner radii and gentle drop shadows. The mood
  is lively and human — a creator's page that feels like growth itself, never
  corporate, never flat. Color is the personality; restraint lives in the
  white space around it.
colors:
  canvas: "#ffffff"
  surface: "#fbfaff"
  glass: "rgba(255,255,255,0.62)"
  glass-border: "rgba(255,255,255,0.7)"
  ink: "#16121f"
  ink-muted: "#5a5470"
  ink-subtle: "#8e88a6"
  indigo: "#5b5bff"
  magenta: "#d633ff"
  coral: "#ff6b5b"
  accent: "#d633ff"
  accent-hover: "#b81fe0"
  hairline: "rgba(91,91,255,0.12)"
typography:
  display-xl: { fontFamily: "'Sora', system-ui, sans-serif", fontSize: 80px, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2.5px }
  display-md: { fontFamily: "'Sora', system-ui, sans-serif", fontSize: 40px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1px }
  numeral:    { fontFamily: "'Sora', system-ui, sans-serif", fontSize: 64px, fontWeight: 800, lineHeight: 1, letterSpacing: -2px }
  lede:       { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 22px, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.2px }
  body:       { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.65 }
  eyebrow:    { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13px, fontWeight: 700, lineHeight: 1.3, letterSpacing: 1.4px, textTransform: uppercase }
spacing: { section: 112px, block: 36px, tight: 14px }
rounded: { sm: 14px, md: 24px, lg: 36px, pill: 999px }
motion: float-blobs + gentle-rise-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap"
avoid: [flat_corporate_purple, hard_edged_cards, dark_background, muddy_gradients, generic_saas_hero, low_radius_boxes]
reference_vocabulary: [linear_aurora, "stripe gradient hero", framer_mesh, "creator landing pages"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **颜色即性格**：白底 + 极光/网格渐变色块（靛蓝 #5b5bff → 品红 #d633ff → 珊瑚 #ff6b5b），渐变只在背景与强调处铺，正文留白冷静。
- **圆体粗黑无衬线**：Sora 800 做巨号陈述句 + 超大数字；Plus Jakarta Sans 做正文，行高松、字重中。
- **玻璃卡片**：磨砂半透明卡（backdrop-blur）浮在渐变雾上，大圆角（24–36px）+ 柔和投影，边缘有一道高光描边。
- **大数字模块**：成长指标用 numeral 64px，渐变文字填充，气势优先。
- **动效**：极光色块缓慢漂浮 + scroll 进入时轻微上浮；`prefers-reduced-motion` 全部关停。
- **照片**：编辑感花卉图作 hero，置于大圆角玻璃框内；关闭照片时退化为渐变排版 hero，依旧成立。
