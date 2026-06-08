---
id: illustration-brand
name_cn: 插画品牌 · Illustration Brand
name_en: Illustration Brand
lineage: illustrated
best_for: [creator, educator, founder]
accent: "#ff5a5f"
description: >
  An illustration-rich brand-marketing canvas in the lineage of Notion, Miro,
  and Clay. Warm off-white ground, one confident coral brand color, and soft
  pastel illustration fills everywhere — spot illustrations sprinkled through
  every section, rounded friendly cards, pill-shaped metrics, and chunky
  rounded buttons. The page feels like a beloved product's marketing site:
  approachable, optimistic, hand-crafted but systematic. Hierarchy comes from
  big friendly geometric-sans headlines, generous rounding, and pools of pastel
  color — not from hard edges or austerity.
colors:
  canvas: "#fffdf9"
  surface: "#ffffff"
  surface-warm: "#fff4ec"
  surface-mint: "#ecfbf3"
  surface-lilac: "#f2effd"
  ink: "#1f1b24"
  ink-muted: "#5b5660"
  ink-subtle: "#928d98"
  accent: "#ff5a5f"
  accent-hover: "#e8474c"
  accent-soft: "#ffe3e0"
  hairline: "#efe9e2"
typography:
  display-xl: { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 64px, fontWeight: 800, lineHeight: 1.05, letterSpacing: -1.6px }
  display-md: { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 36px, fontWeight: 800, lineHeight: 1.12, letterSpacing: -1px }
  card-title: { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 20px, fontWeight: 700, lineHeight: 1.25, letterSpacing: -0.4px }
  lede:       { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 21px, fontWeight: 500, lineHeight: 1.5, letterSpacing: -0.2px }
  body:       { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.6 }
  eyebrow:    { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13px, fontWeight: 700, lineHeight: 1.3, letterSpacing: 0.4px }
spacing: { section: 104px, block: 36px, tight: 14px }
rounded: { sm: 12px, md: 20px, lg: 32px, pill: 999px }
motion: friendly-pop-and-float
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
avoid: [direct_screenshot_copy, generic_purple_gradient, hard_edged_corporate_cards, dark_austere_backgrounds, more_than_one_brand_color]
reference_vocabulary: [notion, miro, clay, "duolingo marketing", "spot-illustration brand sites"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **暖白 + 单一品牌色**：暖白底 `#fffdf9`，一种珊瑚红 `#ff5a5f` 贯穿全站；柔和 pastel 填色块（warm/mint/lilac）做插画底。
- **圆角即性格**：卡片 20–32px 圆角，按钮/指标全是 pill；没有任何尖角、没有暗底。
- **插画无处不在**：hero 用大幅 spot 插画（portrait.webp），各 section 撒小幅 spot 插画 / 手绘 SVG 装饰（星星、波浪、便签贴纸）。
- **友好几何 sans**：Plus Jakarta Sans，标题 800 重 + 负字距，亲切而有力。
- **模块**：hero(split 标题+大插画) · selected_work(模板网格，插画缩略) · metrics(pill 胶囊) · testimonials(卡片) · subscribe。
- **动效**：进入时轻 pop（scale+fade），插画轻微 float 漂浮；尊重 prefers-reduced-motion。
- 一种品牌色铺到底，绝不第二种主色；色彩活力来自 pastel 填块而非多彩 gradient。
