/* GSAP 特效图鉴 — MorphSVG family
 * group: "MorphSVG"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 SVG + 就近样式。
 * MorphSVGPlugin 已在 hub 页加载并 registerPlugin，这里直接用 morphSVG:。
 */
(function () {
  window.GSAP_CARDS = window.GSAP_CARDS || [];

  // 就近样式注入：每张卡唯一前缀 .card-<id>，幂等（只注入一次）。
  function injectStyle(id, css) {
    var sid = "fxstyle-" + id;
    if (document.getElementById(sid)) return;
    var el = document.createElement("style");
    el.id = sid;
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ──────────────────────── morph-shape ─────────────────────── */
  /* 一个填充图形在「方」与「星」之间来回变形（自动 yoyo 循环）。 */
  window.GSAP_CARDS.push({
    id: "morph-shape",
    group: "MorphSVG",
    title_cn: "形状互变",
    title_en: "morphSVG (shape)",
    skill: "gsap-plugins",
    hint: "用 morphSVG 把一个 path 的 d 平滑补间成另一个 path，起止点数可以不同，插件自动补点。",
    prompt: "一块圆角方形填充图案缓慢变形成一颗五角星，再变回方形，如此来回循环；变形过程平滑、没有突然翻折，每个来回之间停顿半秒。",
    code: `// 把源形状 morph 到目标形状的 d（起止点数可不同）
gsap.to("#shape", {
  morphSVG: "#star",          // 目标 path 的选择器
  duration: 1.1,
  ease: "power2.inOut",
  yoyo: true,
  repeat: -1,
  repeatDelay: 0.5
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("morph-shape",
        ".card-morph-shape{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}" +
        ".card-morph-shape svg{width:120px;height:120px;overflow:visible}" +
        ".card-morph-shape #shape{fill:url(#mshapeGrad)}" +
        ".card-morph-shape #star{display:none}");
      stage.innerHTML =
        '<div class="card-morph-shape">' +
        '<svg viewBox="0 0 100 100" aria-hidden="true">' +
        '<defs><linearGradient id="mshapeGrad" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#6366f1"/><stop offset="1" stop-color="#22d3ee"/>' +
        '</linearGradient></defs>' +
        // 起始：圆角方形
        '<path id="shape" d="M20,20 L80,20 L80,80 L20,80 Z"/>' +
        // 目标：五角星（隐藏，只取它的 d）
        '<path id="star" d="M50,6 L61,38 L95,38 L67,58 L78,92 L50,72 L22,92 L33,58 L5,38 L39,38 Z"/>' +
        '</svg></div>';
      var shape = ctx.q("#shape");
      var star = ctx.q("#star");
      return gsap.to(shape, {
        morphSVG: star,
        duration: 1.1,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.5
      });
    }
  });

  /* ───────────────────────── morph-icon ─────────────────────── */
  /* 图标互变：汉堡菜单 ↔ 关闭叉 —— 三条线 morph 成一个 X，再变回来。 */
  window.GSAP_CARDS.push({
    id: "morph-icon",
    group: "MorphSVG",
    title_cn: "图标互变 (menu ↔ close)",
    title_en: "morphSVG (icon)",
    skill: "gsap-plugins",
    hint: "把图标的每一笔分别 morph 到目标图标对应的一笔，实现 menu↔close 这类常见的图标切换。",
    prompt: "一个汉堡菜单图标（三条横线）逐笔变形成一个关闭用的叉号：上下两条横线旋转交叉成 X，中间那条横线收缩消失；随后再反向变回三条横线，来回循环。",
    code: `// 三条横线分别 morph 到 X 的对应笔画
gsap.to("#bar-top",  { morphSVG: "#x-a",  duration: 0.5, ease: "power2.inOut" });
gsap.to("#bar-mid",  { morphSVG: "#x-mid", duration: 0.5, ease: "power2.inOut" });
gsap.to("#bar-bot",  { morphSVG: "#x-b",  duration: 0.5, ease: "power2.inOut" });
// 反向播放即可变回菜单图标`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("morph-icon",
        ".card-morph-icon{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}" +
        ".card-morph-icon svg{width:96px;height:96px}" +
        ".card-morph-icon .bar{fill:#0f172a}" +
        ".card-morph-icon .tpl{display:none}");
      stage.innerHTML =
        '<div class="card-morph-icon">' +
        '<svg viewBox="0 0 100 100" aria-hidden="true">' +
        // 起始：三条横线（细圆角矩形 path，闭合）
        '<path id="bar-top" class="bar" d="M22,30 L78,30 L78,38 L22,38 Z"/>' +
        '<path id="bar-mid" class="bar" d="M22,46 L78,46 L78,54 L22,54 Z"/>' +
        '<path id="bar-bot" class="bar" d="M22,62 L78,62 L78,70 L22,70 Z"/>' +
        // 目标模板：X 的两笔斜杠 + 一条收缩到中心的短线
        '<path id="x-a"   class="bar tpl" d="M28,22 L34,22 L72,72 L66,78 Z"/>' +
        '<path id="x-mid" class="bar tpl" d="M49,49 L51,49 L51,51 L49,51 Z"/>' +
        '<path id="x-b"   class="bar tpl" d="M66,22 L72,28 L34,78 L28,72 Z"/>' +
        '</svg></div>';
      var top = ctx.q("#bar-top"), mid = ctx.q("#bar-mid"), bot = ctx.q("#bar-bot");
      var xa = ctx.q("#x-a"), xmid = ctx.q("#x-mid"), xb = ctx.q("#x-b");
      var tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.6, defaults: { duration: 0.5, ease: "power2.inOut" } });
      tl.to(top, { morphSVG: xa }, 0)
        .to(bot, { morphSVG: xb }, 0)
        .to(mid, { morphSVG: xmid }, 0);
      return tl;
    }
  });

  /* ───────────────────────── morph-blob ─────────────────────── */
  /* 有机 blob：在多个不规则圆形 d 之间连续流动（loop）。 */
  window.GSAP_CARDS.push({
    id: "morph-blob",
    group: "MorphSVG",
    title_cn: "blob 有机流动",
    title_en: "morphSVG (blob)",
    skill: "gsap-plugins",
    hint: "把多个等结构的不规则圆形 path 串成一条时间轴连续 morph，得到果冻般的有机流动。",
    prompt: "一团彩色果冻状的有机斑块在不停地缓慢蠕动变形：它在三四个不同的不规则圆形之间平滑流转，边缘鼓起又收回，永不停歇地循环，整体柔软放松。",
    code: `// 在多个等结构的 blob path 之间连续 morph
const blobs = ["#blobA", "#blobB", "#blobC", "#blobD"];
const tl = gsap.timeline({ repeat: -1, defaults: { duration: 1.6, ease: "sine.inOut" } });
blobs.slice(1).concat(blobs[0]).forEach(target => {
  tl.to("#blob", { morphSVG: target });
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("morph-blob",
        ".card-morph-blob{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}" +
        ".card-morph-blob svg{width:140px;height:140px}" +
        ".card-morph-blob #blob{fill:url(#mblobGrad)}" +
        ".card-morph-blob .tpl{display:none}");
      stage.innerHTML =
        '<div class="card-morph-blob">' +
        '<svg viewBox="0 0 200 200" aria-hidden="true">' +
        '<defs><linearGradient id="mblobGrad" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#f472b6"/><stop offset="0.55" stop-color="#a855f7"/>' +
        '<stop offset="1" stop-color="#6366f1"/>' +
        '</linearGradient></defs>' +
        // 起始 blob（4 段三次贝塞尔的不规则圆形），各模板等结构（同样 4 段）
        '<path id="blob" d="M100,30 C140,30 170,60 170,100 C170,140 140,170 100,170 C60,170 30,140 30,100 C30,60 60,30 100,30 Z"/>' +
        '<path id="blobA" class="tpl" d="M105,28 C150,34 168,68 162,108 C156,148 132,176 92,170 C52,164 28,132 36,92 C44,52 66,24 105,28 Z"/>' +
        '<path id="blobB" class="tpl" d="M98,34 C138,24 176,58 172,98 C168,138 148,168 104,174 C64,180 24,148 30,104 C36,64 62,42 98,34 Z"/>' +
        '<path id="blobC" class="tpl" d="M110,32 C146,42 170,72 164,114 C158,150 124,172 88,166 C48,160 26,124 34,88 C42,52 74,24 110,32 Z"/>' +
        '<path id="blobD" class="tpl" d="M100,30 C142,32 168,64 168,104 C168,142 138,170 96,168 C58,166 30,136 32,96 C34,58 62,28 100,30 Z"/>' +
        '</svg></div>';
      var blob = ctx.q("#blob");
      var targets = [ctx.q("#blobA"), ctx.q("#blobB"), ctx.q("#blobC"), ctx.q("#blobD")];
      var tl = gsap.timeline({ repeat: -1, defaults: { duration: 1.6, ease: "sine.inOut" } });
      targets.forEach(function (t) { tl.to(blob, { morphSVG: t }); });
      return tl;
    }
  });
})();
