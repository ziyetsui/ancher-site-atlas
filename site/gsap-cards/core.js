/* GSAP 特效图鉴 — Core / Tween family
 * group: "Core"  ·  skill: "gsap-core"
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

  /* ───────────────────────── core-to ───────────────────────── */
  window.GSAP_CARDS.push({
    id: "core-to",
    group: "Core",
    title_cn: "to() 补间",
    title_en: "gsap.to()",
    skill: "gsap-core",
    hint: "把元素从当前状态补间到目标值，最常用的入口。",
    prompt: "一个方块从原位平移到右侧 200px、同时旋转一整圈，时长 1 秒，使用 power2.out 缓动，先停在终点再回到起点循环。",
    code: `const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
tl.to(".box", {
  x: 200,
  rotation: 360,
  duration: 1,
  ease: "power2.out"
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("core-to",
        ".card-core-to{position:absolute;inset:0;display:flex;align-items:center}" +
        ".card-core-to .box{margin-left:48px;width:48px;height:48px;border-radius:12px;" +
        "background:linear-gradient(135deg,#6366f1,#22d3ee)}");
      stage.innerHTML = '<div class="card-core-to"><div class="box"></div></div>';
      var box = ctx.q(".box");
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
      tl.to(box, { x: 200, rotation: 360, duration: 1, ease: "power2.out" });
      return tl;
    }
  });

  /* ──────────────────────── core-from ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "core-from",
    group: "Core",
    title_cn: "from() 入场",
    title_en: "gsap.from()",
    skill: "gsap-core",
    hint: "声明起始值，元素从该值动画回到当前（终）状态——天然的入场写法。",
    prompt: "三行文字从下方 40px、透明度 0 处升起淡入到位，依次错开 0.15 秒登场，使用 back.out 轻微回弹的缓动。",
    code: `gsap.from(".line", {
  y: 40,
  autoAlpha: 0,
  duration: 0.8,
  ease: "back.out(1.6)",
  stagger: 0.15
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("core-from",
        ".card-core-from{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "justify-content:center;gap:10px;padding:0 36px;font-family:system-ui,sans-serif}" +
        ".card-core-from .line{font-size:20px;font-weight:700;color:#0f172a;letter-spacing:.01em}" +
        ".card-core-from .line.sub{font-size:14px;font-weight:500;color:#64748b}");
      stage.innerHTML =
        '<div class="card-core-from">' +
        '<div class="line">从下方升起</div>' +
        '<div class="line">逐行淡入</div>' +
        '<div class="line sub">gsap.from() 入场动画</div>' +
        '</div>';
      var lines = ctx.qa(".line");
      return gsap.from(lines, {
        y: 40, autoAlpha: 0, duration: 0.8, ease: "back.out(1.6)", stagger: 0.15
      });
    }
  });

  /* ─────────────────────── core-fromto ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "core-fromto",
    group: "Core",
    title_cn: "fromTo() 指定起止",
    title_en: "gsap.fromTo()",
    skill: "gsap-core",
    hint: "同时写死起点和终点，不读取元素当前值——需要精确控制两端时用它。",
    prompt: "一个圆点从左侧、缩到很小、半透明的状态，明确补间到右侧、放大到正常、完全不透明的状态，时长 1.2 秒，弹性缓动。",
    code: `const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
tl.fromTo(".dot",
  { x: -110, scale: 0.2, autoAlpha: 0.2 },
  { x: 110, scale: 1, autoAlpha: 1,
    duration: 1.2, ease: "elastic.out(1, 0.5)" }
);`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("core-fromto",
        ".card-core-fromto{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center}" +
        ".card-core-fromto .dot{width:56px;height:56px;border-radius:50%;" +
        "background:radial-gradient(circle at 35% 30%,#fbbf24,#f97316)}");
      stage.innerHTML = '<div class="card-core-fromto"><div class="dot"></div></div>';
      var dot = ctx.q(".dot");
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, yoyo: true });
      tl.fromTo(dot,
        { x: -110, scale: 0.2, autoAlpha: 0.2 },
        { x: 110, scale: 1, autoAlpha: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
      );
      return tl;
    }
  });

  /* ────────────────────── core-keyframes ───────────────────── */
  window.GSAP_CARDS.push({
    id: "core-keyframes",
    group: "Core",
    title_cn: "keyframes 关键帧",
    title_en: "keyframes",
    skill: "gsap-core",
    hint: "在一个 to() 里用 keyframes 串起多段状态，像 CSS 关键帧但带 GSAP 缓动。",
    prompt: "一个方块走一个连贯的路线：先向右移、再下移并旋转、接着上移并放大、最后回到原点，每一段之间有短暂停顿，整体循环。",
    code: `gsap.to(".box", {
  repeat: -1,          // 整段无限循环
  repeatDelay: 0.4,    // 每轮之间停 0.4s
  ease: "power1.inOut",
  keyframes: [
    { x: 120, duration: 0.5 },
    { y: 60, rotation: 90, duration: 0.5 },
    { x: 0, scale: 1.3, duration: 0.5 },
    { y: 0, rotation: 0, scale: 1, duration: 0.5 }
  ]
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("core-keyframes",
        ".card-core-keyframes{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center}" +
        ".card-core-keyframes .box{width:46px;height:46px;border-radius:10px;" +
        "background:linear-gradient(135deg,#ec4899,#8b5cf6)}");
      stage.innerHTML = '<div class="card-core-keyframes"><div class="box"></div></div>';
      var box = ctx.q(".box");
      return gsap.to(box, {
        repeat: -1,
        repeatDelay: 0.4,
        ease: "power1.inOut",
        keyframes: [
          { x: 120, duration: 0.5 },
          { y: 60, rotation: 90, duration: 0.5 },
          { x: 0, scale: 1.3, duration: 0.5 },
          { y: 0, rotation: 0, scale: 1, duration: 0.5 }
        ]
      });
    }
  });
})();
