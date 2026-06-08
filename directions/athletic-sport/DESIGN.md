---
id: athletic-sport
name_cn: 运动竞技 · Athletic
name_en: Athletic
lineage: expressive
best_for: [coach, athlete, trainer]
accent: "#c6ff00"
description: >
  Nike-grade kinetic energy. The page hits like a launch film: a full-bleed
  action photo behind a wall of huge uppercase condensed type, one electric
  volt accent slicing through black and white, and diagonal motion that makes
  the layout feel like it's mid-sprint. Numbers are stadium-scoreboard big.
  Edges are clipped on the diagonal. Everything shouts, nothing apologizes —
  hierarchy comes from sheer scale, contrast, and the volt streak, never from
  soft cards or gentle gradients. Built to make an athlete want to train.
colors:
  canvas: "#0a0a0a"
  surface: "#141416"
  ink: "#ffffff"
  ink-muted: "#a3a3a8"
  ink-subtle: "#6c6c72"
  accent: "#c6ff00"
  accent-hover: "#d6ff3d"
  accent-ink: "#0a0a0a"
  hairline: "#2a2a2e"
typography:
  display-xl: { fontFamily: "'Anton', Impact, sans-serif", fontSize: 132px, fontWeight: 400, lineHeight: 0.86, letterSpacing: -1px, textTransform: uppercase }
  display-md: { fontFamily: "'Anton', Impact, sans-serif", fontSize: 64px, fontWeight: 400, lineHeight: 0.92, letterSpacing: 0px, textTransform: uppercase }
  numeral:    { fontFamily: "'Anton', Impact, sans-serif", fontSize: 96px, fontWeight: 400, lineHeight: 0.85, letterSpacing: -1px }
  body:       { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.6 }
  eyebrow:    { fontFamily: "'Archivo', system-ui, sans-serif", fontSize: 12px, fontWeight: 700, lineHeight: 1.2, letterSpacing: 3px, textTransform: uppercase }
spacing: { section: 140px, block: 48px, tight: 16px }
rounded: { sm: 0px, md: 2px }
motion: diagonal-slide-and-scale-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&display=swap"
avoid: [soft_pastel_palettes, rounded_friendly_cards, centered_timid_type, thin_light_weights, gentle_gradients, generic_purple_gradient]
reference_vocabulary: [nike, "athlete campaign films", "stadium scoreboards", "Gatorade/Under Armour launch pages"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **巨号 Anton 大写体**：标题字号拉到极限（120px+），行高压到 0.86，像运动品牌海报。
- **黑白 + 一抹电光 volt（#c6ff00）**：强调色只用在关键词、数字、CTA、对角条纹，绝不铺满。
- **全幅动作摄影**：人物奔跑照做满屏 hero 背景，黑色渐变压底确保文字对比。
- **对角能量**：`clip-path` 斜切区块边缘 + skew 的 volt 条纹，整页有「冲刺中」的动势。
- **计分牌数字**：metrics 用超大 numeral，像体育场比分牌。
- 动效：进入时对角滑入 + 轻微 scale；`prefers-reduced-motion` 时全部关闭。
- 无照片回退：volt 对角条纹 + 巨型描边字 "TRAIN" 填满 hero，依然像一张运动海报。
