/* GSAP 特效图鉴 — Draggable / Inertia family
 * group: "Draggable"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * Draggable / InertiaPlugin 已在 hub 页 registerPlugin，init 里直接用。
 * 这些卡均为 interactive：建好交互后不返回动画，由用户拖拽驱动。
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

  /* ──────────────────────── drag-basic ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "drag-basic",
    group: "Draggable",
    title_cn: "基础拖拽（含边界）",
    title_en: "Draggable bounds",
    skill: "gsap-plugins",
    hint: "Draggable.create 让元素跟随鼠标/触摸自由拖动，bounds 把它约束在容器内。",
    prompt: "一个方块可以用鼠标或手指自由拖动，只能在它所在的框内移动、拖到边缘会停住不出界，拖到边界外还有轻微的弹性阻力。",
    code: `Draggable.create(".box", {
  type: "x,y",
  bounds: "#pen",
  edgeResistance: 0.65,
  inertia: false
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("drag-basic",
        ".card-drag-basic{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;font-family:system-ui,sans-serif}" +
        ".card-drag-basic .pen{position:relative;width:280px;height:128px;border-radius:14px;" +
        "border:1.5px dashed #cbd5e1;background:#f8fafc;overflow:hidden}" +
        ".card-drag-basic .box{position:absolute;left:18px;top:42px;width:44px;height:44px;" +
        "border-radius:12px;background:linear-gradient(135deg,#6366f1,#22d3ee);" +
        "cursor:grab;touch-action:none;display:flex;align-items:center;justify-content:center;" +
        "color:#fff;font-size:12px;font-weight:700;user-select:none}" +
        ".card-drag-basic .box:active{cursor:grabbing}" +
        ".card-drag-basic .tip{position:absolute;right:12px;bottom:10px;font-size:12px;" +
        "color:#94a3b8;pointer-events:none}");
      stage.innerHTML =
        '<div class="card-drag-basic">' +
        '<div class="pen">' +
        '<div class="box">拖我</div>' +
        '<span class="tip">← 拖我 · 出不了框</span>' +
        '</div></div>';
      var box = ctx.q(".box");
      var pen = ctx.q(".pen");
      Draggable.create(box, {
        type: "x,y",
        bounds: pen,
        edgeResistance: 0.65,
        inertia: false
      });
      // interactive：不返回动画。
    }
  });

  /* ─────────────────────── drag-inertia ────────────────────── */
  window.GSAP_CARDS.push({
    id: "drag-inertia",
    group: "Draggable",
    title_cn: "惯性 + 吸附",
    title_en: "Inertia + snap",
    skill: "gsap-plugins",
    hint: "inertia:true（需 InertiaPlugin）让释放后带动量滑行，snap 把落点吸附到网格点。",
    prompt: "一个圆点可以拖动，松手后会顺着甩出的方向带着惯性继续滑行一段再停下，而且最终会自动吸附对齐到背景网格的某个交叉点上。",
    code: `Draggable.create(".dot", {
  type: "x,y",
  bounds: "#pen",
  inertia: true,
  snap: {
    x: v => Math.round(v / 44) * 44,
    y: v => Math.round(v / 44) * 44
  }
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("drag-inertia",
        ".card-drag-inertia{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;font-family:system-ui,sans-serif}" +
        ".card-drag-inertia .pen{position:relative;width:286px;height:132px;border-radius:14px;" +
        "border:1.5px solid #e2e8f0;overflow:hidden;" +
        "background-image:radial-gradient(#cbd5e1 1.5px,transparent 1.5px);" +
        "background-size:44px 44px;background-position:7px 7px}" +
        ".card-drag-inertia .dot{position:absolute;left:7px;top:7px;width:34px;height:34px;" +
        "border-radius:50%;background:radial-gradient(circle at 35% 30%,#fbbf24,#f97316);" +
        "cursor:grab;touch-action:none;user-select:none}" +
        ".card-drag-inertia .dot:active{cursor:grabbing}" +
        ".card-drag-inertia .tip{position:absolute;right:10px;bottom:8px;font-size:12px;" +
        "color:#94a3b8;pointer-events:none}");
      stage.innerHTML =
        '<div class="card-drag-inertia">' +
        '<div class="pen">' +
        '<div class="dot"></div>' +
        '<span class="tip">甩一下 → 滑行并吸附</span>' +
        '</div></div>';
      var dot = ctx.q(".dot");
      var pen = ctx.q(".pen");
      Draggable.create(dot, {
        type: "x,y",
        bounds: pen,
        inertia: true,
        edgeResistance: 0.8,
        snap: {
          x: function (v) { return Math.round(v / 44) * 44; },
          y: function (v) { return Math.round(v / 44) * 44; }
        }
      });
      // interactive：不返回动画。
    }
  });

  /* ──────────────────────── drag-spin ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "drag-spin",
    group: "Draggable",
    title_cn: "旋转拖拽（转盘）",
    title_en: "type: rotation",
    skill: "gsap-plugins",
    hint: "type:\"rotation\" 让拖拽变成绕中心转动，配 inertia 释放后像转盘一样继续旋转减速。",
    prompt: "一个圆形转盘，抓住它绕中心拖动就能旋转，转得越快松手后越能带惯性继续转好几圈再慢慢停下，像抽奖转盘。",
    code: `Draggable.create(".wheel", {
  type: "rotation",
  inertia: true
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("drag-spin",
        ".card-drag-spin{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;font-family:system-ui,sans-serif}" +
        ".card-drag-spin .wrap{position:relative;display:flex;align-items:center;gap:18px}" +
        ".card-drag-spin .wheel{position:relative;width:120px;height:120px;border-radius:50%;" +
        "cursor:grab;touch-action:none;user-select:none;" +
        "background:conic-gradient(#6366f1 0 60deg,#22d3ee 60deg 120deg,#34d399 120deg 180deg," +
        "#fbbf24 180deg 240deg,#f97316 240deg 300deg,#ec4899 300deg 360deg);" +
        "box-shadow:0 6px 20px rgba(15,23,42,.18)}" +
        ".card-drag-spin .wheel:active{cursor:grabbing}" +
        ".card-drag-spin .hub{position:absolute;left:50%;top:50%;width:26px;height:26px;" +
        "margin:-13px 0 0 -13px;border-radius:50%;background:#fff;" +
        "box-shadow:0 1px 4px rgba(0,0,0,.2)}" +
        ".card-drag-spin .pin{position:absolute;left:50%;top:-2px;width:0;height:0;" +
        "margin-left:-8px;border-left:8px solid transparent;border-right:8px solid transparent;" +
        "border-top:16px solid #0f172a}" +
        ".card-drag-spin .tip{font-size:12px;color:#94a3b8;max-width:96px;line-height:1.5}");
      stage.innerHTML =
        '<div class="card-drag-spin">' +
        '<div class="wrap">' +
        '<div style="position:relative">' +
        '<div class="wheel"><div class="hub"></div></div>' +
        '<div class="pin"></div>' +
        '</div>' +
        '<span class="tip">绕中心拖动 ↻<br>松手惯性旋转</span>' +
        '</div></div>';
      var wheel = ctx.q(".wheel");
      Draggable.create(wheel, {
        type: "rotation",
        inertia: true
      });
      // interactive：不返回动画。
    }
  });

  /* ──────────────────────── drag-throw ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "drag-throw",
    group: "Draggable",
    title_cn: "抛掷飞行",
    title_en: "Throw / flick",
    skill: "gsap-plugins",
    hint: "inertia:true 时，快速甩出再松手，元素带着抛掷速度飞出去，撞到边界回弹。",
    prompt: "一张卡片，用力把它甩出去再松手，它会顺着甩出的速度方向继续飞行一段距离，碰到容器四壁会反弹回来，最后停下。",
    code: `Draggable.create(".card", {
  type: "x,y",
  bounds: "#pen",
  inertia: true,
  edgeResistance: 0.4,
  onThrowComplete: () => {}
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("drag-throw",
        ".card-drag-throw{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;font-family:system-ui,sans-serif}" +
        ".card-drag-throw .pen{position:relative;width:290px;height:140px;border-radius:14px;" +
        "border:1.5px solid #e2e8f0;background:" +
        "repeating-linear-gradient(45deg,#f8fafc 0 10px,#f1f5f9 10px 20px);overflow:hidden}" +
        ".card-drag-throw .card{position:absolute;left:120px;top:48px;width:56px;height:40px;" +
        "border-radius:10px;background:linear-gradient(135deg,#ec4899,#8b5cf6);cursor:grab;" +
        "touch-action:none;user-select:none;display:flex;align-items:center;" +
        "justify-content:center;color:#fff;font-size:11px;font-weight:700;" +
        "box-shadow:0 4px 14px rgba(139,92,246,.4)}" +
        ".card-drag-throw .card:active{cursor:grabbing}" +
        ".card-drag-throw .tip{position:absolute;left:10px;top:8px;font-size:12px;" +
        "color:#94a3b8;pointer-events:none}");
      stage.innerHTML =
        '<div class="card-drag-throw">' +
        '<div class="pen">' +
        '<span class="tip">用力甩出 → 飞行回弹</span>' +
        '<div class="card">甩我</div>' +
        '</div></div>';
      var card = ctx.q(".card");
      var pen = ctx.q(".pen");
      Draggable.create(card, {
        type: "x,y",
        bounds: pen,
        inertia: true,
        edgeResistance: 0.4
      });
      // interactive：不返回动画。
    }
  });
})();
