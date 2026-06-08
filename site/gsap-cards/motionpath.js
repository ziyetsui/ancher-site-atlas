/* GSAP 特效图鉴 — MotionPath family
 * group: "MotionPath"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 SVG path + DOM + 就近样式。
 * MotionPathPlugin 已在 hub 页 registerPlugin，init 里直接用 motionPath:{...}。
 * 关键：motionPath.path / align 一律传 stage 内的真实节点（不传选择器字符串），避免跨卡污染。
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

  /* ─────────────────────── mp-follow ───────────────────────
   * 沿一条手写 SVG 曲线运动（path 是自己写的 d）。 */
  window.GSAP_CARDS.push({
    id: "mp-follow",
    group: "MotionPath",
    title_cn: "沿路径运动",
    title_en: "MotionPath (follow)",
    skill: "gsap-plugins",
    hint: "motionPath.path 指向一条 SVG 曲线，元素被对齐到路径并沿它从头走到尾。",
    prompt: "一个小圆点沿着一条画在背景上的手写曲线（先下后上的波浪线）平滑地从起点滑到终点，圆点中心始终贴在曲线上；走完停顿一下后从头重播。",
    code: `gsap.to(dot, {
  duration: 2.4,
  ease: "power1.inOut",
  motionPath: {
    path: pathEl,          // 一条 <path>
    align: pathEl,         // 对齐到同一条路径
    alignOrigin: [0.5, 0.5]
  }
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("mp-follow",
        ".card-mp-follow{position:absolute;inset:0;background:" +
        "radial-gradient(120% 120% at 50% 30%,#1e293b,#020617)}" +
        ".card-mp-follow svg{position:absolute;inset:0;width:100%;height:100%}" +
        ".card-mp-follow .track{fill:none;stroke:#334155;stroke-width:2;" +
        "stroke-dasharray:5 7;stroke-linecap:round}" +
        ".card-mp-follow .dot{fill:#38bdf8;" +
        "filter:drop-shadow(0 0 6px rgba(56,189,248,.8))}");
      stage.innerHTML =
        '<div class="card-mp-follow">' +
        '<svg viewBox="0 0 330 172" preserveAspectRatio="none">' +
        '<path class="track" d="M30,60 C80,150 130,150 165,86 C200,22 250,22 300,112"/>' +
        '<circle class="dot" r="7" cx="0" cy="0"/>' +
        '</svg></div>';
      var dot = ctx.q(".dot");
      var pathEl = ctx.q(".track");
      return gsap.to(dot, {
        duration: 2.4,
        ease: "power1.inOut",
        motionPath: {
          path: pathEl,
          align: pathEl,
          alignOrigin: [0.5, 0.5]
        }
      });
    }
  });

  /* ─────────────────────── mp-rotate ───────────────────────
   * autoRotate：元素旋转对齐路径切线（像一辆车贴着赛道转向）。 */
  window.GSAP_CARDS.push({
    id: "mp-rotate",
    group: "MotionPath",
    title_cn: "切线自动转向",
    title_en: "MotionPath (autoRotate)",
    skill: "gsap-plugins",
    hint: "autoRotate:true 让元素持续旋转对齐路径切线方向——箭头/车头会随弯道自然转向。",
    prompt: "一个朝右的纸飞机沿着一条 S 形曲线飞行，机头始终指向前进方向，转弯时整个机身随曲线切线平滑转向，像贴着赛道行驶；飞完停顿后重播。",
    code: `gsap.to(plane, {
  duration: 2.6,
  ease: "none",
  motionPath: {
    path: pathEl,
    align: pathEl,
    alignOrigin: [0.5, 0.5],
    autoRotate: true       // 旋转对齐切线
  }
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("mp-rotate",
        ".card-mp-rotate{position:absolute;inset:0;background:" +
        "linear-gradient(135deg,#0b1120,#172554)}" +
        ".card-mp-rotate svg{position:absolute;inset:0;width:100%;height:100%}" +
        ".card-mp-rotate .track{fill:none;stroke:#1e3a8a;stroke-width:3;" +
        "stroke-linecap:round;opacity:.7}" +
        ".card-mp-rotate .plane{fill:#fbbf24;" +
        "filter:drop-shadow(0 1px 3px rgba(0,0,0,.5))}");
      stage.innerHTML =
        '<div class="card-mp-rotate">' +
        '<svg viewBox="0 0 330 172" preserveAspectRatio="none">' +
        '<path class="track" d="M25,130 C70,20 130,20 165,90 C200,160 260,160 305,45"/>' +
        // 朝右的纸飞机三角，几何中心在原点附近
        '<path class="plane" d="M-9,-7 L11,0 L-9,7 L-4,0 Z"/>' +
        '</svg></div>';
      var plane = ctx.q(".plane");
      var pathEl = ctx.q(".track");
      return gsap.to(plane, {
        duration: 2.6,
        ease: "none",
        motionPath: {
          path: pathEl,
          align: pathEl,
          alignOrigin: [0.5, 0.5],
          autoRotate: true
        }
      });
    }
  });

  /* ─────────────────────── mp-orbit ───────────────────────
   * 椭圆轨道：path 写成闭合椭圆，repeat:-1 循环绕行。 */
  window.GSAP_CARDS.push({
    id: "mp-orbit",
    group: "MotionPath",
    title_cn: "椭圆轨道环绕",
    title_en: "MotionPath (orbit loop)",
    skill: "gsap-plugins",
    hint: "把 path 写成闭合椭圆 + repeat:-1：卫星沿轨道匀速永久环绕中心。",
    prompt: "画面中心是一颗发光的星，一颗较小的卫星沿一条倾斜的椭圆轨道匀速绕中心永不停歇地环绕运行，轨道线本身淡淡可见。",
    code: `gsap.to(moon, {
  duration: 4,
  ease: "none",
  repeat: -1,              // 永久环绕
  motionPath: {
    path: orbitEl,         // 闭合椭圆 <path>
    align: orbitEl,
    alignOrigin: [0.5, 0.5]
  }
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("mp-orbit",
        ".card-mp-orbit{position:absolute;inset:0;background:" +
        "radial-gradient(80% 80% at 50% 50%,#1e1b4b,#020617)}" +
        ".card-mp-orbit svg{position:absolute;inset:0;width:100%;height:100%}" +
        ".card-mp-orbit .orbit{fill:none;stroke:#475569;stroke-width:1.5;" +
        "stroke-dasharray:3 5;opacity:.6}" +
        ".card-mp-orbit .sun{fill:#fde047;" +
        "filter:drop-shadow(0 0 12px rgba(253,224,71,.9))}" +
        ".card-mp-orbit .moon{fill:#a5b4fc;" +
        "filter:drop-shadow(0 0 6px rgba(165,180,252,.9))}");
      stage.innerHTML =
        '<div class="card-mp-orbit">' +
        '<svg viewBox="0 0 330 172" preserveAspectRatio="none">' +
        // 倾斜闭合椭圆轨道（围绕中心 165,86）
        '<path class="orbit" d="M165,36 C245,36 295,66 295,86 ' +
        'C295,106 245,136 165,136 C85,136 35,106 35,86 ' +
        'C35,66 85,36 165,36 Z"/>' +
        '<circle class="sun" cx="165" cy="86" r="13"/>' +
        '<circle class="moon" r="6" cx="0" cy="0"/>' +
        '</svg></div>';
      var moon = ctx.q(".moon");
      var orbitEl = ctx.q(".orbit");
      return gsap.to(moon, {
        duration: 4,
        ease: "none",
        repeat: -1,
        motionPath: {
          path: orbitEl,
          align: orbitEl,
          alignOrigin: [0.5, 0.5]
        }
      });
    }
  });
})();
