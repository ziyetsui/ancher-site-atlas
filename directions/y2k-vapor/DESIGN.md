---
id: y2k-vapor
name_cn: 千禧赛博 · Y2K Vapor
name_en: Y2K Vapor
lineage: experimental
best_for: [musician, creator, artist]
accent: "#00e5ff"
description: >
  A dark, chrome-and-neon stage that feels like an early-2000s media player
  left running until 3am. Liquid-metal headlines bleed cyan and magenta;
  a receding perspective grid pulls the eye toward a glowing horizon; soft
  liquid blobs drift behind glass panels. Subtle glitch on the hero title,
  scanline shimmer, and chrome bevels do the heavy lifting — pure CSS, no
  WebGL. Vaporwave nostalgia weaponized for a DJ press kit: loud, lacquered,
  and unmistakably nocturnal. Hierarchy comes from glow, contrast and depth,
  not from boxes.
colors:
  base: "#06060c"
  base-2: "#0c0a18"
  panel: "rgba(18,16,34,0.55)"
  chrome-hi: "#f4f7ff"
  chrome-lo: "#7e87a8"
  ink: "#e8ecff"
  ink-muted: "#9aa0c7"
  ink-subtle: "#5b5f86"
  cyan: "#00e5ff"
  magenta: "#ff2bd6"
  grid: "rgba(0,229,255,0.22)"
  hairline: "rgba(120,130,200,0.18)"
typography:
  display-xl: { fontFamily: "'Orbitron', 'Space Grotesk', sans-serif", fontSize: 84px, fontWeight: 800, lineHeight: 0.92, letterSpacing: 2px, textTransform: uppercase }
  display-md: { fontFamily: "'Orbitron', sans-serif", fontSize: 30px, fontWeight: 700, lineHeight: 1.05, letterSpacing: 1px, textTransform: uppercase }
  eyebrow:    { fontFamily: "'Space Mono', monospace", fontSize: 12px, fontWeight: 700, lineHeight: 1.3, letterSpacing: 4px, textTransform: uppercase }
  lede:       { fontFamily: "'Space Grotesk', sans-serif", fontSize: 21px, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0.2px }
  body:       { fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.6 }
  mono:       { fontFamily: "'Space Mono', monospace", fontSize: 13px, fontWeight: 400, lineHeight: 1.4, letterSpacing: 0.5px }
spacing: { section: 128px, block: 44px, tight: 16px }
rounded: { sm: 6px, md: 16px, lg: 28px }
motion: glitch-title + drifting-blobs + scanline-shimmer (reduced-motion safe)
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800;900&family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
avoid: [light_mode, flat_corporate_saas, generic_centered_purple_hero, webgl_three_js, soft_pastel_only, rounded_friendly_blobs_without_grid]
reference_vocabulary: [vaporwave, "Windows Media Player skins", "Y2K chrome typography", "early-2000s club flyers", "Winamp", "synthwave"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **暗场 + 铬金属 + 霓虹**：纯黑蓝底，chrome 渐变标题溢出 cyan/magenta 辉光，靠发光与对比建立层级，不靠卡片堆叠。
- **透视网格**：地平线收束的赛博网格做空间纵深；液态 blob 在玻璃面板后缓慢漂移。
- **字体**：Orbitron（techno display，金属 chrome 文字）+ Space Grotesk（正文）+ Space Mono（标签/数据，全大写 +字距）。
- **Y2K 质感**：chrome 斜面高光、扫描线微闪、hero 标题轻微 glitch 抖动，营造千禧年媒体播放器的夜感。
- **模块**：hero（glitch 标题 + 马赛克肖像）→ selected_work（EP 发行网格）→ metrics（流量/驻场数据）→ contact（预订/试听）。
- **动效**：blob 漂移 + 标题 glitch + 扫描线，全部尊重 `prefers-reduced-motion`；不使用 WebGL，全 CSS。
