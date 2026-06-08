/* GSAP 特效图鉴 — Stagger family
 * group: "Stagger"  ·  skill: "gsap-core"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 */
(function () {
  window.GSAP_CARDS = window.GSAP_CARDS || [];

  // 共享的就近样式注入：每张卡用唯一前缀 .card-<id>，幂等（只注入一次）。
  function injectStyle(id, css) {
    var sid = "fxstyle-" + id;
    if (document.getElementById(sid)) return;
    var el = document.createElement("style");
    el.id = sid;
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ─────────────────────── stagger-list ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "stagger-list",
    group: "Stagger",
    title_cn: "列表逐项交错",
    title_en: "stagger (list)",
    skill: "gsap-core",
    hint: "给一组元素一个 stagger 值，每一项的动画依次错开固定时间登场。",
    prompt: "一列五条横条从下方 24px、透明状态升起淡入，从上到下依次错开 0.12 秒登场，使用 power2.out 缓动，整组播完停顿后重播。",
    code: `gsap.from(".row", {
  y: 24,
  autoAlpha: 0,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.12   // 每项错开 0.12s
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("stagger-list",
        ".card-stagger-list{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "justify-content:center;gap:9px;padding:0 40px}" +
        ".card-stagger-list .row{height:18px;border-radius:6px;" +
        "background:linear-gradient(90deg,#6366f1,#22d3ee)}" +
        ".card-stagger-list .row:nth-child(2){width:86%}" +
        ".card-stagger-list .row:nth-child(3){width:72%}" +
        ".card-stagger-list .row:nth-child(4){width:90%}" +
        ".card-stagger-list .row:nth-child(5){width:64%}");
      var rows = "";
      for (var i = 0; i < 5; i++) rows += '<div class="row"></div>';
      stage.innerHTML = '<div class="card-stagger-list">' + rows + '</div>';
      var items = ctx.qa(".row");
      return gsap.from(items, {
        y: 24, autoAlpha: 0, duration: 0.5, ease: "power2.out", stagger: 0.12
      });
    }
  });

  /* ─────────────────────── stagger-grid ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "stagger-grid",
    group: "Stagger",
    title_cn: "网格波纹",
    title_en: "stagger {grid}",
    skill: "gsap-core",
    hint: "stagger:{grid:[行,列], from} 让交错按二维网格扩散，形成波纹。",
    prompt: "一个 5×7 的小方块网格，整体像波纹一样从左上角扩散点亮：每个方块从缩小、透明放大淡入，错开时间按它在网格中的行列距离计算，弹性缓动，播完重播。",
    code: `gsap.from(".cell", {
  scale: 0.2,
  autoAlpha: 0,
  ease: "back.out(1.7)",
  duration: 0.5,
  stagger: {
    grid: [5, 7],   // 5 行 7 列
    from: "start",  // 从左上角扩散
    amount: 0.8
  }
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      var COLS = 7, ROWS = 5;
      injectStyle("stagger-grid",
        ".card-stagger-grid{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center}" +
        ".card-stagger-grid .grid{display:grid;grid-template-columns:repeat(" + COLS +
        ",18px);grid-auto-rows:18px;gap:7px}" +
        ".card-stagger-grid .cell{width:18px;height:18px;border-radius:5px;" +
        "background:linear-gradient(135deg,#f472b6,#8b5cf6)}");
      var cells = "";
      for (var i = 0; i < COLS * ROWS; i++) cells += '<div class="cell"></div>';
      stage.innerHTML = '<div class="card-stagger-grid"><div class="grid">' + cells + '</div></div>';
      var items = ctx.qa(".cell");
      return gsap.from(items, {
        scale: 0.2, autoAlpha: 0, duration: 0.5, ease: "back.out(1.7)",
        stagger: { grid: [ROWS, COLS], from: "start", amount: 0.8 }
      });
    }
  });

  /* ────────────────────── stagger-center ───────────────────── */
  window.GSAP_CARDS.push({
    id: "stagger-center",
    group: "Stagger",
    title_cn: "由中心扩散",
    title_en: "stagger from:center",
    skill: "gsap-core",
    hint: "stagger:{from:\"center\"} 让最靠近中心的元素先动，向两端依次扩散。",
    prompt: "一排十一根竖条，从中间那根开始向左右两侧依次弹起放大点亮，越靠两端越晚，使用回弹缓动，整组播完停顿后重播。",
    code: `gsap.from(".bar", {
  scaleY: 0.2,
  autoAlpha: 0,
  transformOrigin: "center",
  ease: "back.out(2)",
  duration: 0.5,
  stagger: {
    from: "center",  // 由中心向两端扩散
    each: 0.07
  }
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("stagger-center",
        ".card-stagger-center{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;gap:7px}" +
        ".card-stagger-center .bar{width:14px;height:84px;border-radius:7px;" +
        "background:linear-gradient(180deg,#22d3ee,#6366f1)}");
      var bars = "";
      for (var i = 0; i < 11; i++) bars += '<div class="bar"></div>';
      stage.innerHTML = '<div class="card-stagger-center">' + bars + '</div>';
      var items = ctx.qa(".bar");
      return gsap.from(items, {
        scaleY: 0.2, autoAlpha: 0, transformOrigin: "center",
        duration: 0.5, ease: "back.out(2)",
        stagger: { from: "center", each: 0.07 }
      });
    }
  });
})();
