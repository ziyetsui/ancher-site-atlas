/* GSAP 特效图鉴 — Easing family
 * group: "Easing"  ·  skill: "gsap-core"（CustomEase / CustomBounce / CustomWiggle 见 gsap-plugins）
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式，不污染全局。
 * gsap 与全部插件已在 hub 页 registerPlugin，init 里直接用 gsap.*。
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

  /* ─────────────────────── ease-built ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "ease-built",
    group: "Easing",
    title_cn: "内置缓动对比",
    title_en: "built-in eases",
    skill: "gsap-core",
    hint: "并排四条轨道用同一时长跑不同内置缓动，直观对比 power / back / elastic / bounce 的手感。",
    prompt: "四个小方块在各自的水平轨道上同时从左跑到右，平移 210px、时长都是 1.4 秒，但分别使用四种不同的缓动：power3.out 强力收尾、back.out(1.7) 带回弹的过冲、elastic.out(1, 0.4) 橡皮筋弹性、以及 bounce.out 落地弹跳，让人一眼看出各曲线的差异；整组装进一条 repeat:-1 + yoyo 的时间轴循环往返。",
    code: `const eases = ["power3.out", "back.out(1.7)",
  "elastic.out(1, 0.4)", "bounce.out"];
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, yoyo: true });
tl.to(".dot", {
  x: 210,
  duration: 1.4,
  ease: (i) => eases[i]    // 每条轨道一种缓动
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("ease-built",
        ".card-ease-built{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "justify-content:center;gap:9px;padding:0 28px;font-family:system-ui,sans-serif}" +
        ".card-ease-built .row{position:relative;height:24px;display:flex;align-items:center}" +
        ".card-ease-built .track{position:absolute;left:62px;right:0;height:2px;" +
        "background:#e2e8f0;border-radius:2px}" +
        ".card-ease-built .lbl{width:58px;font-size:10px;font-weight:600;color:#64748b;" +
        "letter-spacing:.02em}" +
        ".card-ease-built .dot{position:absolute;left:62px;width:18px;height:18px;" +
        "border-radius:6px}" +
        ".card-ease-built .e0{background:#6366f1}" +
        ".card-ease-built .e1{background:#22d3ee}" +
        ".card-ease-built .e2{background:#f97316}" +
        ".card-ease-built .e3{background:#ec4899}");
      var eases = ["power3.out", "back.out(1.7)", "elastic.out(1, 0.4)", "bounce.out"];
      var labels = ["power3", "back", "elastic", "bounce"];
      var rows = "";
      for (var i = 0; i < 4; i++) {
        rows += '<div class="row"><span class="lbl">' + labels[i] + '</span>' +
          '<span class="track"></span><div class="dot e' + i + '"></div></div>';
      }
      stage.innerHTML = '<div class="card-ease-built">' + rows + '</div>';
      var dots = ctx.qa(".dot");
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, yoyo: true });
      tl.to(dots, {
        x: 210,
        duration: 1.4,
        ease: function (i) { return eases[i]; }
      });
      return tl;
    }
  });

  /* ────────────────────── ease-custom ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "ease-custom",
    group: "Easing",
    title_cn: "CustomEase 自定义曲线",
    title_en: "CustomEase",
    skill: "gsap-core",
    hint: "用 SVG path 画出任意缓动曲线——内置缓动不够时，CustomEase.create() 让你定义专属手感。",
    prompt: "把一段自定义缓动曲线本身画在卡片左侧（一条带控制点的曲线），右侧一个方块按这条曲线运动、平移 200px、时长 1.6 秒：先冲过头、回拉、再稳定到位——一种内置缓动给不出的独特节奏。需注册 CustomEase 插件、用 CustomEase.create() 从 SVG path 定义这条曲线，再用 ease 引用它；整段装进 repeat:-1 + yoyo 的时间轴循环演示。",
    code: `gsap.registerPlugin(CustomEase);
CustomEase.create("hop",
  "M0,0 C0.13,0.5 0.2,1.18 0.45,1.18 0.7,1.18 0.78,0.86 1,1");
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, yoyo: true });
tl.to(".box", {
  x: 200,
  duration: 1.6,
  ease: "hop"
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("ease-custom",
        ".card-ease-custom{position:absolute;inset:0;display:flex;align-items:center;" +
        "gap:18px;padding:0 26px}" +
        ".card-ease-custom .plot{width:96px;height:96px;flex:none}" +
        ".card-ease-custom .lane{position:relative;flex:1;height:46px;display:flex;" +
        "align-items:center}" +
        ".card-ease-custom .box{width:42px;height:42px;border-radius:11px;" +
        "background:linear-gradient(135deg,#0ea5e9,#6366f1)}");
      // 自包含 SVG：画出 hop 曲线（y 翻转，因为 SVG 原点在左上）
      var path = "M0,0 C0.13,0.5 0.2,1.18 0.45,1.18 0.7,1.18 0.78,0.86 1,1";
      stage.innerHTML =
        '<div class="card-ease-custom">' +
        '<svg class="plot" viewBox="-0.08 -0.28 1.16 1.46">' +
        '<rect x="0" y="0" width="1" height="1" fill="none" stroke="#e2e8f0" ' +
        'stroke-width="0.012"/>' +
        '<g transform="translate(0,1) scale(1,-1)">' +
        '<path d="' + path + '" fill="none" stroke="#6366f1" stroke-width="0.03" ' +
        'stroke-linecap="round"/>' +
        '</g></svg>' +
        '<div class="lane"><div class="box"></div></div>' +
        '</div>';
      var name = "ease-custom-hop-" + Math.random().toString(36).slice(2, 7);
      CustomEase.create(name, path);
      var box = ctx.q(".box");
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6, yoyo: true });
      tl.to(box, { x: 200, duration: 1.6, ease: name });
      return tl;
    }
  });

  /* ────────────────────── ease-bounce ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "ease-bounce",
    group: "Easing",
    title_cn: "CustomBounce 弹跳落地",
    title_en: "CustomBounce",
    skill: "gsap-core",
    hint: "CustomBounce 生成可调强度/挤压的落地弹跳缓动——比内置 bounce 更可控，还能配套形变。",
    prompt: "一颗球从顶部自由下落砸到地面（下落 86px、时长 1.6 秒），弹起几次、越弹越低，最后停住；落地瞬间球身略微被压扁（挤压形变）。需注册 CustomBounce 插件、用 CustomBounce.create({strength, squash, squashID}) 同时生成落地缓动与配套的挤压缓动，两条 to() 都在时间轴同一时刻（位置 0）起跑，整段用 repeat:-1 反复循环。",
    code: `gsap.registerPlugin(CustomBounce);
CustomBounce.create("myBounce", {
  strength: 0.6,
  squash: 2,
  squashID: "myBounce-squash"
});
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });
tl.to(".ball", { y: 86, duration: 1.6, ease: "myBounce" }, 0);
tl.to(".ball", { scaleX: 1.3, scaleY: 0.7, transformOrigin: "bottom",
  duration: 1.6, ease: "myBounce-squash" }, 0);`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("ease-bounce",
        ".card-ease-bounce{position:absolute;inset:0;overflow:hidden}" +
        ".card-ease-bounce .ground{position:absolute;left:0;right:0;bottom:30px;height:2px;" +
        "background:#e2e8f0}" +
        ".card-ease-bounce .ball{position:absolute;left:50%;margin-left:-21px;top:14px;" +
        "width:42px;height:42px;border-radius:50%;" +
        "background:radial-gradient(circle at 35% 30%,#fb7185,#e11d48)}");
      stage.innerHTML =
        '<div class="card-ease-bounce"><div class="ground"></div>' +
        '<div class="ball"></div></div>';
      var ball = ctx.q(".ball");
      var bName = "ease-bounce-" + Math.random().toString(36).slice(2, 7);
      var sName = bName + "-squash";
      CustomBounce.create(bName, { strength: 0.6, squash: 2, squashID: sName });
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.7 });
      tl.to(ball, { y: 86, duration: 1.6, ease: bName }, 0);
      tl.to(ball, {
        scaleX: 1.3, scaleY: 0.7, transformOrigin: "bottom center",
        duration: 1.6, ease: sName
      }, 0);
      return tl;
    }
  });

  /* ────────────────────── ease-wiggle ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "ease-wiggle",
    group: "Easing",
    title_cn: "CustomWiggle 摆动",
    title_en: "CustomWiggle",
    skill: "gsap-core",
    hint: "CustomWiggle 让单个 to() 在两端之间来回摆动多次——可调摆动次数与衰减类型，做抖动/晃动很顺手。",
    prompt: "一根从底部立起的指针（或一张卡片）被轻轻一拨，绕底部支点左右来回摆动（旋转幅度 26°、时长 1.8 秒），幅度逐渐衰减直到静止。需注册 CustomWiggle 插件、用 CustomWiggle.create({wiggles: 8, type: \"easeOut\"}) 定义“摆 8 次、逐渐衰减”的缓动，再把它用在一条 fromTo(rotation 0→26) 上，整段装进 repeat:-1 的时间轴反复循环。",
    code: `gsap.registerPlugin(CustomWiggle);
CustomWiggle.create("myWiggle", {
  wiggles: 8,
  type: "easeOut"
});
const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
tl.fromTo(".needle",
  { rotation: 0 },
  { rotation: 26, transformOrigin: "bottom center",
    duration: 1.8, ease: "myWiggle" }
);`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("ease-wiggle",
        ".card-ease-wiggle{position:absolute;inset:0;display:flex;align-items:flex-end;" +
        "justify-content:center;padding-bottom:30px}" +
        ".card-ease-wiggle .base{position:absolute;bottom:28px;left:50%;margin-left:-9px;" +
        "width:18px;height:18px;border-radius:50%;background:#cbd5e1}" +
        ".card-ease-wiggle .needle{width:8px;height:108px;border-radius:6px;" +
        "transform-origin:bottom center;" +
        "background:linear-gradient(180deg,#22d3ee,#6366f1)}");
      stage.innerHTML =
        '<div class="card-ease-wiggle"><div class="needle"></div>' +
        '<div class="base"></div></div>';
      var needle = ctx.q(".needle");
      var name = "ease-wiggle-" + Math.random().toString(36).slice(2, 7);
      CustomWiggle.create(name, { wiggles: 8, type: "easeOut" });
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
      tl.fromTo(needle,
        { rotation: 0 },
        { rotation: 26, transformOrigin: "bottom center", duration: 1.8, ease: name }
      );
      return tl;
    }
  });
})();
