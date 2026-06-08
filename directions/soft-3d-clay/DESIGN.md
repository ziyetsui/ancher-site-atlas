---
id: soft-3d-clay
name_cn: 软陶 3D · Soft 3D Clay
name_en: Soft 3D Clay
lineage: experimental
best_for: [creator, toy, streetwear]
accent: "#ff7eb3"
description: >
  A claymation playground rendered entirely in CSS. Everything looks pressed
  from soft pastel clay — fat rounded corners, doughy extruded shapes, and
  layered soft-light/soft-shadow that fakes real depth without a single line
  of WebGL. Inset highlights make surfaces look squeezable; outset drop
  shadows lift cards off a milky pastel floor. Chunky rounded type sits like
  molded plastic. The whole page reads like a vinyl-toy shelf you want to
  poke: tactile, friendly, a little bouncy. Color does the heavy lifting —
  bubblegum pink, sky, butter, mint — never flat, always a gentle gradient so
  each surface catches a soft top-light. Motion is squish-and-settle, never
  slick.
colors:
  canvas: "#f4ecff"
  canvas-2: "#ffe9f3"
  surface: "#fef6ff"
  surface-sky: "#dcefff"
  surface-mint: "#dcfbef"
  surface-butter: "#fff4d6"
  ink: "#4a3b63"
  ink-muted: "#8a7aa8"
  ink-subtle: "#b3a6cc"
  accent: "#ff7eb3"
  accent-2: "#7cc7ff"
  accent-3: "#ffd166"
  highlight: "#ffffff"
  shadow-soft: "#cdb8ea"
  shadow-deep: "#a98fd6"
typography:
  display-xl: { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 72px, fontWeight: 700, lineHeight: 0.98, letterSpacing: -1.5px }
  display-md: { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 34px, fontWeight: 600, lineHeight: 1.08, letterSpacing: -0.6px }
  lede:       { fontFamily: "'Baloo 2', system-ui, sans-serif", fontSize: 21px, fontWeight: 500, lineHeight: 1.5 }
  body:       { fontFamily: "'Baloo 2', system-ui, sans-serif", fontSize: 17px, fontWeight: 400, lineHeight: 1.6 }
  pill:       { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 15px, fontWeight: 600, lineHeight: 1, letterSpacing: 0.2px }
  eyebrow:    { fontFamily: "'Fredoka', system-ui, sans-serif", fontSize: 13px, fontWeight: 600, lineHeight: 1.2, letterSpacing: 1.5px, textTransform: uppercase }
spacing: { section: 96px, block: 32px, tight: 14px }
rounded: { sm: 16px, md: 28px, lg: 40px, pill: 999px }
motion: squish-settle-on-hover + gentle-float
fonts_cdn:
  - "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Baloo+2:wght@400;500;600;700&display=swap"
avoid: [flat_material_shadows, sharp_corners, webgl_three_js, neon_dark_mode, hard_drop_shadows, photoreal_gloss_glass]
reference_vocabulary: [claymorphism, "vinyl toy / blind box shelves", "Pop Mart", "soft 3D icon sets", "playful fintech illustration"]
sample_persona: ./prompt.md
sample_screenshot: ./sample.png
---

## 视觉 DNA 速记

- **黏土质感 = 纯 CSS 双层阴影**：每个面同时有「外凸投影」（outset，柔和深紫）+「内嵌高光」（inset 白），让表面看起来被捏出来、可以按下去。
- **圆，再圆一点**：圆角从 16px 起步，卡片 28–40px，按钮/标签全 pill。绝不出现直角。
- **粉彩渐变面**：每个色块都是轻微的从上到下渐变（顶部更亮），模拟柔和顶光；纯平色被禁止。
- **多色不撞**：bubblegum 粉为主强调，配天空蓝 / 黄油黄 / 薄荷绿；底色是奶紫到粉的大渐变。
- **字像注塑塑料**：Fredoka 做粗圆标题，Baloo 2 做正文；字重高、字距紧，整体胖乎乎。
- **角色卡**：分配的小猫插画放进一个软 3D 场景卡里 —— 圆角窗口 + 内嵌阴影做出「橱窗 / 盲盒」的凹陷感。
- **动效 = 捏一下回弹**：hover 时 translateY + scale 微缩 + 阴影收紧（像被按下），松开回弹；外加极慢的整体漂浮。尊重 prefers-reduced-motion。
