---
id: technical-mono
name_cn: 技术等宽 · 终端
name_en: Technical Mono
lineage: technical
best_for: [engineer, researcher, founder]
accent: "#5eead4"
description: >
  A dark, engineered canvas with a terminal sensibility. Monospaced display
  type, hard edges, hairline borders on near-black surfaces, and a single
  teal accent that glows like a cursor. Content is laid out like a well-kept
  README: section markers, monospaced labels, aligned metadata. Restrained
  and exact, with a faint dotted grid or scanline texture. Reads as the site
  of someone who builds systems — precise, low-ornament, quietly confident.
colors:
  canvas: "#0b0d10"
  surface: "#14171c"
  surface-2: "#1b1f26"
  ink: "#e8eaed"
  ink-muted: "#9aa3ad"
  ink-subtle: "#5f6873"
  accent: "#5eead4"
  accent-hover: "#99f6e4"
  hairline: "#272d36"
typography:
  display-xl: { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 52px, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1px }
  display-md: { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 24px, fontWeight: 600, lineHeight: 1.2 }
  body:       { fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16px, fontWeight: 400, lineHeight: 1.6 }
  label:      { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 12px, fontWeight: 500, lineHeight: 1.4, letterSpacing: 0.5px }
spacing: { section: 96px, block: 32px, tight: 12px }
rounded: { sm: 4px, md: 6px }
motion: cursor-blink-and-fade
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500&display=swap"
avoid: [direct_screenshot_copy, light_mode, soft_shadows, rounded_pills, gradients_beyond_subtle_glow]
reference_vocabulary: [warp, raycast, linear, "engineer personal sites"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- 近黑暗色 + 单一 teal 强调色（像光标在发光）。
- 等宽标题 + sans 正文；硬边、发丝线、对齐的元数据。
- 版式像一份维护良好的 README：section 标记、mono 标签。
- 可选极淡点阵/扫描线纹理。动效：光标闪烁 + 轻 fade。
