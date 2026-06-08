/* GSAP 特效图鉴 — Physics2D family
 * group: "Physics2D"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * Physics2DPlugin 已在 hub 页 registerPlugin，init 里直接用 physics2D:{ velocity, angle, gravity }。
 * physics2D 用「极坐标速度」描述抛体：velocity=初速、angle=发射角(度,0=右/90=下)、gravity=重力加速度。
 * 关键：所有粒子都建在 stage 内、用 ctx.q/qa 选取，不写全局选择器，互不干扰（同页 50+ 卡）。
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

  /* ─────────────────────── phys-confetti ───────────────────────
   * 重力彩屑：一束粒子从底部炸开，每片有各自的 velocity/angle，
   * 共享 gravity 把它们拉回——抛物线上升再下落，边飞边自旋淡出。 */
  window.GSAP_CARDS.push({
    id: "phys-confetti",
    group: "Physics2D",
    title_cn: "重力彩屑",
    title_en: "Physics2D (confetti burst)",
    skill: "gsap-plugins",
    hint: "每片彩屑给各自的 velocity+angle，共享 gravity——上抛后被重力拉回成抛物线，边飞边自旋淡出。",
    prompt: "屏幕底部中央炸开一束彩色纸屑，几十片小方块以不同初速和发射角向上四散飞出，随即被重力拉回、划出各自的抛物线下落，飞行途中不断翻转旋转并逐渐变淡消失；散完短暂停顿后再炸一次。",
    code: `// 每片彩屑：自己的初速/发射角，共享重力 → 抛物线
pieces.forEach(function (p) {
  tl.to(p, {
    duration: 1.6,
    physics2D: {
      velocity: gsap.utils.random(180, 320),
      angle: gsap.utils.random(250, 290),   // 朝上一带散开
      gravity: 520
    },
    rotation: gsap.utils.random(-540, 540),
    opacity: 0,
    ease: "none"
  }, 0);                                     // 全部同时起飞
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("phys-confetti",
        ".card-phys-confetti{position:absolute;inset:0;overflow:hidden;" +
        "background:radial-gradient(120% 100% at 50% 110%,#1e293b,#020617)}" +
        ".card-phys-confetti .src{position:absolute;left:50%;bottom:8px;" +
        "transform:translateX(-50%);font:600 11px/1 ui-sans-serif,system-ui;" +
        "letter-spacing:.04em;color:#64748b}" +
        ".card-phys-confetti .bit{position:absolute;left:50%;bottom:14px;" +
        "width:9px;height:9px;border-radius:2px;will-change:transform,opacity}");

      var colors = ["#f43f5e", "#fb923c", "#fbbf24", "#34d399",
        "#38bdf8", "#a78bfa", "#f472b6"];
      var N = 36;
      var html = '<div class="card-phys-confetti"><span class="src">BURST</span>';
      for (var i = 0; i < N; i++) {
        html += '<i class="bit" style="background:' +
          colors[i % colors.length] + '"></i>';
      }
      html += "</div>";
      stage.innerHTML = html;

      var pieces = ctx.qa(".bit");
      // 起点统一在底部中央：起步时收拢成一个点
      gsap.set(pieces, { x: 0, y: 0, opacity: 1, scale: 1 });

      var tl = gsap.timeline();
      pieces.forEach(function (p) {
        tl.to(p, {
          duration: 1.6,
          physics2D: {
            velocity: gsap.utils.random(180, 320),
            angle: gsap.utils.random(250, 290),   // 270=正上；±20 度散开
            gravity: 520
          },
          rotation: gsap.utils.random(-540, 540),
          opacity: 0,
          ease: "none"
        }, 0);
      });
      return tl;
    }
  });

  /* ─────────────────────── phys-fountain ───────────────────────
   * 持续喷泉：从底部喷口不断喷出水滴，每滴有轻微随机的发射角/初速，
   * 被同一重力拉回——错峰发射 + repeat:-1 形成不断的喷涌水柱。 */
  window.GSAP_CARDS.push({
    id: "phys-fountain",
    group: "Physics2D",
    title_cn: "持续喷泉",
    title_en: "Physics2D (fountain loop)",
    skill: "gsap-plugins",
    hint: "一池水滴错峰发射、共享 gravity 各走抛物线，落地即回收复用；整条 timeline repeat:-1 形成不断的喷涌。",
    prompt: "屏幕底部中央有一个喷口，源源不断地向上喷出小水珠，每颗以略有差异的初速和接近竖直的角度射出，到达顶点后被重力拉回下落，整体形成一束持续起伏的喷泉水柱；水珠落下后淡出并从喷口重新喷出，循环不停。",
    code: `// 一池可复用的水滴，错峰发射，整条 timeline repeat:-1
const tl = gsap.timeline({ repeat: -1 });
drops.forEach(function (d, i) {
  tl.fromTo(d,
    { x: 0, y: 0, opacity: 1, scale: 1 },
    {
      duration: 1.5,
      physics2D: {
        velocity: gsap.utils.random(150, 210),
        angle: gsap.utils.random(264, 276),  // 接近正上方
        gravity: 480
      },
      opacity: 0,
      ease: "none"
    },
    i * 0.08);                                // 错峰，形成连续水柱
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("phys-fountain",
        ".card-phys-fountain{position:absolute;inset:0;overflow:hidden;" +
        "background:linear-gradient(180deg,#0b1120,#082f49)}" +
        ".card-phys-fountain .nozzle{position:absolute;left:50%;bottom:0;" +
        "transform:translateX(-50%);width:26px;height:9px;border-radius:6px 6px 0 0;" +
        "background:linear-gradient(180deg,#334155,#1e293b)}" +
        ".card-phys-fountain .drop{position:absolute;left:50%;bottom:10px;" +
        "width:7px;height:7px;border-radius:50%;will-change:transform,opacity;" +
        "background:radial-gradient(circle at 35% 30%,#bae6fd,#38bdf8);" +
        "box-shadow:0 0 5px rgba(56,189,248,.7)}");

      var N = 22;
      var html = '<div class="card-phys-fountain"><span class="nozzle"></span>';
      for (var i = 0; i < N; i++) html += '<i class="drop"></i>';
      html += "</div>";
      stage.innerHTML = html;

      var drops = ctx.qa(".drop");
      var tl = gsap.timeline({ repeat: -1 });
      drops.forEach(function (d, i) {
        tl.fromTo(d,
          { x: 0, y: 0, opacity: 1, scale: 1 },
          {
            duration: 1.5,
            physics2D: {
              velocity: gsap.utils.random(150, 210),
              angle: gsap.utils.random(264, 276),  // 270=正上，±6 度轻微散开
              gravity: 480
            },
            opacity: 0,
            ease: "none"
          },
          i * 0.08);   // 错峰发射 → 连续不断的水柱
      });
      return tl;
    }
  });
})();
