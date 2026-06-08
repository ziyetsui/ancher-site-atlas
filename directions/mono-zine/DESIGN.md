---
id: mono-zine
name_cn: 单色杂志 · Mono Zine
name_en: Mono Zine
lineage: technical
best_for: [writer, indie-hacker, researcher]
accent: "#d83a2a"
description: >
  A light paper zine rendered entirely in monospace — the page reads like a
  printed README run off a risograph. Ruled hairlines divide every section the
  way a self-published booklet rules its pages; everything aligns to a fixed
  character grid. Ink-black mono type on warm paper, one hot red accent for the
  pull-words, the now-block, and the form. Numbered margins, bracketed labels,
  and a small framed graphic give it a raw, hand-assembled, indie feel — NOT a
  glowing dark terminal. Confident, plain, made-by-a-human.
colors:
  paper: "#f4f3ee"
  paper-sunk: "#ecebe4"
  ink: "#1a1a1a"
  ink-muted: "#56544e"
  ink-faint: "#8b887f"
  accent: "#d83a2a"
  accent-ink: "#a82a1d"
  rule: "#1a1a1a"
  rule-soft: "#d6d4ca"
typography:
  display-xl: { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 56px, fontWeight: 800, lineHeight: 1.06, letterSpacing: -1.5px }
  display-md: { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 26px, fontWeight: 700, lineHeight: 1.18, letterSpacing: -0.5px }
  lede:       { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 18px, fontWeight: 500, lineHeight: 1.55, letterSpacing: 0 }
  body:       { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 15px, fontWeight: 400, lineHeight: 1.7 }
  label:      { fontFamily: "'JetBrains Mono', ui-monospace, monospace", fontSize: 12px, fontWeight: 600, lineHeight: 1.3, letterSpacing: 1px, textTransform: uppercase }
spacing: { section: 64px, block: 28px, tight: 12px }
rounded: { sm: 0px, md: 0px }
motion: none-or-cursor-blink
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
avoid: [dark_terminal_aesthetic, neon_on_black, card_shadows, rounded_corners, sans_serif_anywhere, generic_purple_gradient, decorative_color_fills]
reference_vocabulary: ["printed README", "risograph zine", "self-published booklet", "monospace print", "indie maker changelog"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **像一本印出来的 README**：暖白纸 `#f4f3ee` + 墨黑 `#1a1a1a`，全等宽字体，没有 sans。
- **横线分栏（ruled）**：每个 section 用实心黑 hairline 分隔，像装订好的小册子。一切对齐到固定字符网格。
- **唯一红色 `#d83a2a`**：只用在 pull-words、`[now]` 区块、订阅表单按钮；绝不铺底色装饰。
- **杂志感细节**：方括号标签 `[selected work]`、行首编号 `01 / 02`、小幅装裱插图（portrait.webp）。
- **轻 & raw**：浅色纸面，不是发光暗终端；零圆角、零阴影、零渐变。动效仅光标闪烁，尊重 reduced-motion。
