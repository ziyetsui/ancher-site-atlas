/* GSAP 特效图鉴 — Utils / matchMedia family
 * group: "Utils"  ·  skill: "gsap-utils"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * gsap 与全部插件已在 hub 页加载并 registerPlugin，init 里直接用 gsap.*。
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

  /* ─────────────────────── util-random ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "util-random",
    group: "Utils",
    title_cn: "random + snap 散落",
    title_en: "gsap.utils.random / snap",
    skill: "gsap-utils",
    hint: "random([min,max,snap]) 取范围内随机值（snap 吸附到步进倍数），每轮把方块散落到随机网格点。",
    prompt: "一排小方块，每隔一会儿就各自跳到一个随机位置：水平和垂直方向都是随机的，但落点都会对齐到一个不可见的网格上（不会落在网格之间），旋转角度也随机取 0/90/180/270 度之一，循环不停。",
    code: `// 取范围内随机值；第三参 snap 把结果吸附到步进倍数
const rx = gsap.utils.random(-110, 110, 22, true); // 可复用函数
const ry = gsap.utils.random(-44, 44, 22, true);

gsap.to(".chip", {
  x: rx, y: ry,
  rotation: () => gsap.utils.random([0, 90, 180, 270]),
  duration: 0.6, ease: "power2.out",
  stagger: 0.05,
  repeat: -1, repeatRefresh: true, repeatDelay: 0.5
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("util-random",
        ".card-util-random{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center}" +
        ".card-util-random .field{position:relative;width:260px;height:128px}" +
        ".card-util-random .chip{position:absolute;left:118px;top:52px;width:24px;height:24px;" +
        "border-radius:7px;background:linear-gradient(135deg,#6366f1,#22d3ee)}");
      stage.innerHTML =
        '<div class="card-util-random"><div class="field">' +
        '<div class="chip"></div><div class="chip"></div><div class="chip"></div>' +
        '<div class="chip"></div><div class="chip"></div><div class="chip"></div>' +
        '</div></div>';
      var chips = ctx.qa(".chip");
      // random 的函数形式：第四参 true 返回可复用函数（不是省略 value）。
      var rx = gsap.utils.random(-110, 110, 22, true);
      var ry = gsap.utils.random(-44, 44, 22, true);
      var tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5, repeatRefresh: true });
      tl.to(chips, {
        x: rx, y: ry,
        rotation: function () { return gsap.utils.random([0, 90, 180, 270]); },
        duration: 0.6, ease: "power2.out", stagger: 0.05
      }).to(chips, {
        x: 0, y: 0, rotation: 0,
        duration: 0.6, ease: "power2.inOut", stagger: 0.05
      }, ">+0.4");
      return tl;
    }
  });

  /* ────────────────────── util-maprange ────────────────────── */
  window.GSAP_CARDS.push({
    id: "util-maprange",
    group: "Utils",
    title_cn: "mapRange + clamp 映射",
    title_en: "gsap.utils.mapRange / clamp",
    skill: "gsap-utils",
    hint: "mapRange 把一个范围的值线性映射到另一个范围，clamp 把入参夹在边界内——一个驱动量同时驱动位移、宽度与颜色。",
    prompt: "一个驱动数值在 0 到 100 之间来回变化，用它同时控制三样东西：一个滑块从左滑到右、一根进度条从空填满、还有一块颜色从蓝渐变到橙——三者完全同步，并且驱动值超出范围时会被夹住不越界。",
    code: `// 同一个驱动值 v(0–100) 映射到三个不同输出范围
const v = gsap.utils.clamp(0, 100, raw);     // 先夹住
const x = gsap.utils.mapRange(0, 100, 0, 220, v);  // → 位移 px
const w = gsap.utils.mapRange(0, 100, 0, 100, v);  // → 宽度 %
const c = gsap.utils.interpolate("#3b82f6", "#f97316",
            gsap.utils.normalize(0, 100, v));      // → 颜色

gsap.set(knob, { x });
bar.style.width = w + "%";
fill.style.background = c;`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("util-maprange",
        ".card-util-maprange{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "justify-content:center;gap:14px;padding:0 32px;font-family:system-ui,sans-serif}" +
        ".card-util-maprange .track{position:relative;height:10px;border-radius:6px;" +
        "background:#e2e8f0}" +
        ".card-util-maprange .knob{position:absolute;top:-7px;left:0;width:24px;height:24px;" +
        "border-radius:50%;background:#0f172a;box-shadow:0 2px 6px rgba(15,23,42,.3)}" +
        ".card-util-maprange .bar{height:10px;border-radius:6px;background:#e2e8f0;overflow:hidden}" +
        ".card-util-maprange .bar > i{display:block;height:100%;width:0;border-radius:6px;" +
        "background:linear-gradient(90deg,#6366f1,#22d3ee)}" +
        ".card-util-maprange .swatch{height:26px;border-radius:8px;background:#3b82f6}" +
        ".card-util-maprange .lbl{font-size:11px;color:#94a3b8;letter-spacing:.04em}");
      stage.innerHTML =
        '<div class="card-util-maprange">' +
        '<div class="lbl">v → x · width · color（同一驱动量）</div>' +
        '<div class="track"><div class="knob"></div></div>' +
        '<div class="bar"><i></i></div>' +
        '<div class="swatch"></div>' +
        '</div>';
      var knob = ctx.q(".knob");
      var fill = ctx.q(".bar > i");
      var swatch = ctx.q(".swatch");
      // 三个映射函数：省略 value 得到可复用函数。
      var mapX = gsap.utils.mapRange(0, 100, 0, 222);
      var clampV = gsap.utils.clamp(0, 100);
      var norm = gsap.utils.normalize(0, 100);
      var lerpColor = gsap.utils.interpolate("#3b82f6", "#f97316");
      // 用一个 onUpdate 把驱动量喂给所有映射；driver 自动 yoyo 来回。
      var driver = { v: 0 };
      var tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.3 });
      tl.to(driver, {
        v: 100, duration: 1.6, ease: "power1.inOut",
        onUpdate: function () {
          var v = clampV(driver.v);
          gsap.set(knob, { x: mapX(v) });
          fill.style.width = v + "%";
          swatch.style.background = lerpColor(norm(v));
        }
      });
      return tl;
    }
  });

  /* ───────────────────── util-matchmedia ───────────────────── */
  window.GSAP_CARDS.push({
    id: "util-matchmedia",
    group: "Utils",
    title_cn: "matchMedia 响应式 + 减弱动效",
    title_en: "gsap.matchMedia()",
    skill: "gsap-utils",
    hint: "gsap.matchMedia() 按媒体查询注册不同动画，断点变化时自动 revert/重建；用 (prefers-reduced-motion) 区分提供降级版。",
    prompt: "同一组动画根据屏幕宽度自动切换：窄屏时元素小幅左右轻移，宽屏时大幅横移并旋转；另外当系统开启了「减弱动效」时，完全不播动画、直接显示静止终态。拖动卡片内的宽度滑块即可看到断点切换，无需刷新。",
    code: `const mm = gsap.matchMedia();

// 宽屏：大幅动画
mm.add("(min-width: 800px)", () => {
  gsap.to(".box", { x: 180, rotation: 360, repeat: -1, yoyo: true });
});
// 窄屏：小幅动画
mm.add("(max-width: 799px)", () => {
  gsap.to(".box", { x: 40, repeat: -1, yoyo: true });
});
// 尊重「减弱动效」：直接落到终态，不动
mm.add("(prefers-reduced-motion: reduce)", () => {
  gsap.set(".box", { x: 40 });
});
// 断点变化时 GSAP 自动 revert 旧 context 再跑新的`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("util-matchmedia",
        ".card-util-matchmedia{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "justify-content:center;gap:12px;padding:0 30px;font-family:system-ui,sans-serif}" +
        ".card-util-matchmedia .viewport{position:relative;height:64px;border-radius:12px;" +
        "border:1.5px dashed #cbd5e1;background:#f8fafc;overflow:hidden;display:flex;" +
        "align-items:center}" +
        ".card-util-matchmedia .box{margin-left:14px;width:40px;height:40px;border-radius:11px;" +
        "background:linear-gradient(135deg,#10b981,#22d3ee)}" +
        ".card-util-matchmedia .row{display:flex;align-items:center;gap:10px}" +
        ".card-util-matchmedia input[type=range]{flex:1;accent-color:#10b981}" +
        ".card-util-matchmedia .badge{min-width:118px;text-align:right;font-size:12px;" +
        "font-weight:700;color:#0f172a;letter-spacing:.02em}" +
        ".card-util-matchmedia .tip{font-size:11px;color:#94a3b8;letter-spacing:.03em}");
      stage.innerHTML =
        '<div class="card-util-matchmedia">' +
        '<div class="viewport"><div class="box"></div></div>' +
        '<div class="row">' +
        '<input type="range" min="360" max="1200" value="520" aria-label="模拟视口宽度"/>' +
        '<span class="badge"></span>' +
        '</div>' +
        '<div class="tip">← 拖动模拟视口宽度，跨过 800px 断点看动画切换</div>' +
        '</div>';
      var box = ctx.q(".box");
      var slider = ctx.q("input");
      var badge = ctx.q(".badge");

      // 真正的 gsap.matchMedia 监听的是真实视口 / prefers-reduced-motion；
      // 卡内 stage 太小无法改真实视口，所以这里用一个「模拟宽度」滑块来演示
      // 同样的「按断点切换动画 + revert 重建 + 尊重减弱动效」逻辑词汇。
      var current = null;        // 当前 context 的 tween，切断点时 kill 掉（= matchMedia 的 revert）
      var WIDE = 800;

      function applyFor(w) {
        if (current) { current.kill(); current = null; }
        gsap.set(box, { clearProps: "x,rotation" });

        if (ctx.reduced) {
          // (prefers-reduced-motion: reduce) 分支：直接落终态、不动。
          gsap.set(box, { x: 40 });
          badge.textContent = "减弱动效 · 静态";
          return;
        }
        if (w >= WIDE) {
          badge.textContent = "≥800px · 宽屏";
          current = gsap.to(box, {
            x: 180, rotation: 360, duration: 1.4, ease: "power1.inOut",
            repeat: -1, yoyo: true
          });
        } else {
          badge.textContent = "<800px · 窄屏";
          current = gsap.to(box, {
            x: 40, duration: 0.9, ease: "sine.inOut",
            repeat: -1, yoyo: true
          });
        }
      }

      slider.addEventListener("input", function () {
        applyFor(parseInt(slider.value, 10));
      });
      applyFor(parseInt(slider.value, 10));
      // interactive：不返回动画（由用户拖滑块驱动断点切换）。
    }
  });
})();
