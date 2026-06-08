---
id: glassmorphism
name_cn: 玻璃拟态 · Glassmorphism
name_en: Glassmorphism
lineage: experimental
best_for: [founder, designer, ai]
accent: "#a78bfa"
description: >
  Frosted translucent glass floating over a vivid, blurred photographic
  backdrop. Depth comes from layered backdrop-filter blur, hairline white
  borders, and soft inner glow — not from solid fills. Cards feel like sheets
  of foggy acrylic catching light: 1px translucent rims, a faint top highlight,
  diffuse drop shadow underneath. Light text on color, generous air, gentle
  float-on-hover. Modern, calm, slightly dreamlike — the opposite of flat SaaS.
colors:
  backdrop: "#1c1033"
  backdrop-2: "#3a1d6e"
  glass-fill: "rgba(255,255,255,0.10)"
  glass-fill-strong: "rgba(255,255,255,0.16)"
  glass-border: "rgba(255,255,255,0.28)"
  glass-highlight: "rgba(255,255,255,0.55)"
  ink: "#ffffff"
  ink-muted: "rgba(255,255,255,0.74)"
  ink-subtle: "rgba(255,255,255,0.52)"
  accent: "#a78bfa"
  accent-2: "#f0abfc"
  accent-glow: "rgba(167,139,250,0.45)"
typography:
  display-xl: { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 68px, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2.4px }
  display-md: { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 30px, fontWeight: 700, lineHeight: 1.14, letterSpacing: -0.8px }
  lede:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 21px, fontWeight: 400, lineHeight: 1.5, letterSpacing: -0.2px }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.62 }
  eyebrow:    { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 2.2px, textTransform: uppercase }
  metric:     { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 46px, fontWeight: 800, lineHeight: 1, letterSpacing: -1.6px }
spacing: { section: 104px, block: 32px, tight: 14px }
rounded: { sm: 14px, md: 22px, lg: 30px }
motion: float-on-hover + soft-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
avoid: [opaque_flat_cards, hard_drop_shadows, generic_saas_white_bg, neon_cyberpunk, heavy_borders, busy_backdrop_competing_with_text]
reference_vocabulary: [apple_visionos_ui, big_sur_control_center, frosted_acrylic, "dribbble glassmorphism"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **磨砂玻璃浮于彩色虚化背景**：所有面板靠 `backdrop-filter: blur()` + 半透明白填充 + 1px 半透明白边来建立质感，绝不用实色卡片。
- **深度靠模糊与光，不靠硬阴影**：顶部一道极细高光、底部弥散柔影；hover 时面板轻微上浮 + 阴影变深。
- **背景 = 指定照片大幅虚化**：`portrait.webp` 撑满视口、强 blur + 暗化叠层，色彩从中透出，文字始终在玻璃之上保证对比。
- **浅色文字**：纯白主文 + 多级透明白；紫/粉作为强调与光晕。
- **空气感**：圆角大（14–30px）、留白足、字距收紧的大号 Inter 800 标题。
- **无照片回退**：玻璃面板照常工作，背景退化为纯 CSS 双色径向渐变 + 光斑，依旧成立。
- 动效：进入时柔 fade-up；玻璃面板 hover 上浮；尊重 `prefers-reduced-motion`。
