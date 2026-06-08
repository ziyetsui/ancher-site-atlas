/* GSAP 特效图鉴 — DrawSVG family
 * group: "DrawSVG"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * DrawSVGPlugin 已在 hub 页 registerPlugin，init 里直接用 drawSVG:"0%" 等。
 * DrawSVG 通过动画 stroke-dasharray / stroke-dashoffset 来“描出/擦除”描边，
 * 因此每条 path 必须有可见的 stroke + stroke-width（否则什么都画不出来）。
 * 选择器一律传 stage 内的真实节点（ctx.q/ctx.qa），不传字符串，避免跨卡污染。
 */
(function () {
  window.GSAP_CARDS = window.GSAP_CARDS || [];

  // 就近样式注入：每张卡用唯一前缀 .card-<id>，幂等（只注入一次）。
  function injectStyle(id, css) {
    var sid = "fxstyle-" + id;
    if (document.getElementById(sid)) return;
    var el = document.createElement("style");
    el.id = sid;
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ─────────────────────── draw-line ───────────────────────
   * 最基础的描线：gsap.from(path, { drawSVG: "0%" }) 把一段折线/曲线
   * 从“无”一笔画到完整描边。 */
  window.GSAP_CARDS.push({
    id: "draw-line",
    group: "DrawSVG",
    title_cn: "一笔描线",
    title_en: "DrawSVG (from 0%)",
    skill: "gsap-plugins",
    hint: "gsap.from(path, { drawSVG: \"0%\" }) 让一条折线/曲线从无到有沿路径一笔描出。",
    prompt: "一条带圆角拐点的折线（像一段上升的走势线），从起点开始沿着路径一笔一笔地“画”出来，约 1.6 秒画到完整，使用先慢后快再收尾的平滑缓动；线条末端有一个小圆点跟着笔尖一起出现。画完停顿后重新再画一遍。",
    code: `// path 必须有可见 stroke + stroke-width，否则画不出来
gsap.from(path, {
  drawSVG: "0%",      // 从“可见段为 0”到当前完整描边
  duration: 1.6,
  ease: "power2.inOut"
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("draw-line",
        ".card-draw-line{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;background:radial-gradient(120% 120% at 50% 30%,#0b1220,#020617)}" +
        ".card-draw-line svg{width:240px;height:120px;overflow:visible}" +
        ".card-draw-line .ln{fill:none;stroke:#38bdf8;stroke-width:4;" +
        "stroke-linecap:round;stroke-linejoin:round}" +
        ".card-draw-line .tip{fill:#e0f2fe}");
      stage.innerHTML =
        '<div class="card-draw-line">' +
        '<svg viewBox="0 0 240 120" aria-hidden="true">' +
        '<path class="ln" d="M12 96 L66 70 L108 84 L150 38 L198 52 L228 18"/>' +
        '<circle class="tip" cx="228" cy="18" r="5"/>' +
        '</svg></div>';
      var line = ctx.q(".ln");
      var tip = ctx.q(".tip");
      var tl = gsap.timeline();
      tl.from(line, { drawSVG: "0%", duration: 1.6, ease: "power2.inOut" })
        .from(tip, { scale: 0, transformOrigin: "50% 50%", duration: 0.3, ease: "back.out(2)" }, "-=0.25");
      return tl;
    }
  });

  /* ─────────────────────── draw-signature ───────────────────────
   * 手写签名：一条连续的曲线 path，从 0 描到 100% 模拟“一笔成形”的签名。 */
  window.GSAP_CARDS.push({
    id: "draw-signature",
    group: "DrawSVG",
    title_cn: "手写签名",
    title_en: "DrawSVG (signature)",
    skill: "gsap-plugins",
    hint: "把签名做成一条连续曲线 path，用 fromTo 从 \"0% 0%\" 描到 \"0% 100%\"，模拟一笔成形的手写。",
    prompt: "一段手写体的连笔签名（像草书的英文名），从笔画起点开始沿着笔迹一笔连续地写出来，速度像真人签名一样略带快慢节奏，约 2 秒写完整；签名下方还有一道横线随后快速划出。写完停顿后重写一遍。",
    code: `// 签名是一条连续曲线 path；从“可见段 0”描到“满段”
gsap.fromTo(sign,
  { drawSVG: "0% 0%" },
  { drawSVG: "0% 100%", duration: 2, ease: "power1.inOut" }
);`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("draw-signature",
        ".card-draw-signature{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;background:#faf7f0}" +
        ".card-draw-signature svg{width:280px;height:130px;overflow:visible}" +
        ".card-draw-signature .sig{fill:none;stroke:#1e293b;stroke-width:3.5;" +
        "stroke-linecap:round;stroke-linejoin:round}" +
        ".card-draw-signature .rule{fill:none;stroke:#1e293b;stroke-width:2;stroke-linecap:round}");
      stage.innerHTML =
        '<div class="card-draw-signature">' +
        '<svg viewBox="0 0 280 130" aria-hidden="true">' +
        '<path class="sig" d="M22 86 C30 50 40 38 46 44 C52 50 40 92 36 100 ' +
        'C50 84 70 60 82 64 C90 67 74 92 80 96 C88 100 104 74 116 70 ' +
        'C124 67 116 92 124 92 C138 92 150 56 168 56 C180 56 168 90 178 90 ' +
        'C192 90 206 60 224 58 C240 56 232 84 250 76"/>' +
        '<path class="rule" d="M24 112 L256 112"/>' +
        '</svg></div>';
      var sig = ctx.q(".sig");
      var rule = ctx.q(".rule");
      var tl = gsap.timeline();
      tl.fromTo(sig, { drawSVG: "0% 0%" }, { drawSVG: "0% 100%", duration: 2, ease: "power1.inOut" })
        .from(rule, { drawSVG: "0%", duration: 0.4, ease: "power3.out" }, "-=0.15");
      return tl;
    }
  });

  /* ─────────────────────── draw-check ───────────────────────
   * 勾选/图标描边：圆圈先描出，对勾再描出，组成一个“成功”图标。 */
  window.GSAP_CARDS.push({
    id: "draw-check",
    group: "DrawSVG",
    title_cn: "勾选描边",
    title_en: "DrawSVG (check icon)",
    skill: "gsap-plugins",
    hint: "图标用多条 path 顺序描边：先画外圈，再画对勾，最后整体轻轻一弹，组成“成功”动效。",
    prompt: "一个成功提示图标：先有一圈绿色圆环沿圆周一笔描出，紧接着内部的对勾（两段折线）从短到长描出，对勾描完整个图标轻轻放大回弹一下表示完成。绿色，背景浅色。播完停顿后重播。",
    code: `const tl = gsap.timeline();
tl.from(ring,  { drawSVG: "0%", duration: 0.7, ease: "power2.inOut" })
  .from(check, { drawSVG: "0%", duration: 0.4, ease: "power2.out" }, "-=0.1")
  .to(icon,    { scale: 1.12, yoyo: true, repeat: 1,
                 transformOrigin: "50% 50%", duration: 0.18 });`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("draw-check",
        ".card-draw-check{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;background:#f0fdf4}" +
        ".card-draw-check svg{width:120px;height:120px;overflow:visible}" +
        ".card-draw-check .ring{fill:none;stroke:#16a34a;stroke-width:6;stroke-linecap:round}" +
        ".card-draw-check .check{fill:none;stroke:#16a34a;stroke-width:7;" +
        "stroke-linecap:round;stroke-linejoin:round}");
      stage.innerHTML =
        '<div class="card-draw-check">' +
        '<svg class="icon" viewBox="0 0 100 100" aria-hidden="true">' +
        '<circle class="ring" cx="50" cy="50" r="40"/>' +
        '<path class="check" d="M30 52 L45 67 L72 36"/>' +
        '</svg></div>';
      var icon = ctx.q(".icon");
      var ring = ctx.q(".ring");
      var check = ctx.q(".check");
      var tl = gsap.timeline();
      tl.from(ring, { drawSVG: "0%", duration: 0.7, ease: "power2.inOut" })
        .from(check, { drawSVG: "0%", duration: 0.4, ease: "power2.out" }, "-=0.1")
        .to(icon, { scale: 1.12, yoyo: true, repeat: 1, transformOrigin: "50% 50%", duration: 0.18, ease: "sine.inOut" });
      return tl;
    }
  });
})();
