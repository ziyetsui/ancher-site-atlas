---
id: neo-saas
name_cn: 现代产品 · Modern SaaS
name_en: Neo SaaS
lineage: minimal
best_for: [founder, pm, engineer]
accent: "#5b5bd6"
description: >
  Modern product-marketing energy applied to a personal site. A clean grotesk
  on a white-and-soft-gray field, lifted by whisper-thin indigo gradients and
  bordered feature cards with gentle rounding. Confident but friendly — closer
  to a well-funded SaaS landing page than an austere Swiss grid. Hierarchy
  comes from badges, stat rows, and crisp card edges, not from oversized type;
  mono labels tag sections like a product changelog. Everything says "this
  ships."
colors:
  canvas: "#ffffff"
  surface: "#f5f6f8"
  surface-2: "#eceef2"
  ink: "#16161a"
  ink-muted: "#52525e"
  ink-subtle: "#8a8a98"
  accent: "#5b5bd6"
  accent-hover: "#4a4ac0"
  accent-soft: "#eef0fc"
  hairline: "#e3e5ea"
typography:
  display-xl: { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 60px, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.8px }
  display-md: { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 32px, fontWeight: 600, lineHeight: 1.15, letterSpacing: -0.8px }
  stat:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 38px, fontWeight: 700, lineHeight: 1.0, letterSpacing: -1px }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.6 }
  label:      { fontFamily: "'IBM Plex Mono', ui-monospace, monospace", fontSize: 12px, fontWeight: 500, lineHeight: 1.3, letterSpacing: 0.5px, textTransform: uppercase }
  badge:      { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13px, fontWeight: 600, lineHeight: 1.0, letterSpacing: -0.1px }
spacing: { section: 96px, block: 32px, tight: 14px }
rounded: { sm: 8px, md: 12px, pill: 999px }
motion: gentle-rise-and-fade-on-scroll
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
avoid: [austere_swiss_grid, oversized_serif, dark_brutalism, generic_purple_blob_gradient, centered_marketing_hero_only, lorem_filler]
reference_vocabulary: [linear.app, vercel, stripe-marketing, "modern YC startup landing pages"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **产品 landing 气质，不是瑞士极简**：层级来自 badge、bordered card、stat row，不靠超大字号或纯留白。
- 白底 + 柔灰 `#f5f6f8` 分区 + 极淡 indigo 渐变；feature card 有 1px 边框、`rounded-sm`(8px)、轻微阴影。
- 字体：Inter grotesk 全场；mono(IBM Plex Mono) 只做小写标签/section eyebrow，像 changelog 标记。
- 单一 indigo 强调色 `#5b5bd6`：CTA 按钮、badge、链接、card hover 高亮。
- 自信但友好：圆角、柔色 pill badge、press logo 行、"currently building" 模块带状态点。
- 头像：hero 里干净的方形/圆角头像，配 grotesk 大标题；no-photos 时退回 indigo 渐变 + 首字母印章，仍然成立。
- 动效：scroll 进入时轻微 rise + fade（≤14px），尊重 `prefers-reduced-motion`。
