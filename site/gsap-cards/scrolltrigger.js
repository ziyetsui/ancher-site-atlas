/* GSAP 特效图鉴 — ScrollTrigger family
 * group: "ScrollTrigger"  ·  skill: "gsap-scrolltrigger"
 * 卡片 stage 很小，无法用整页滚动：
 *   - interactive 卡在 stage 内放一个 overflow:auto 的「局部 scroller」，
 *     ScrollTrigger 用 { scroller: <局部元素> }，DOM 放「↕ 滚我」提示；
 *   - scrub / progress / velocity 等「动作词汇」用自动来回的 yoyo timeline 模拟（kind:"loop"），
 *     不创建 ScrollTrigger，避免污染整页。
 * 每张卡完全 scope 到 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式（.card-<id> 前缀）。
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

  // 局部 scroller 的通用底样式（提示条 + 滚动容器外观），按需用唯一前缀派生。
  var SCROLLER_BASE =
    "position:absolute;inset:0;overflow:auto;overscroll-behavior:contain;" +
    "scrollbar-width:thin;-webkit-overflow-scrolling:touch}";

  /* ─────────────────────── st-reveal ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-reveal",
    group: "ScrollTrigger",
    title_cn: "进入视口淡入",
    title_en: "ScrollTrigger reveal",
    skill: "gsap-scrolltrigger",
    hint: "元素滚进视口时触发一次入场动画——ScrollTrigger 最基础的用法。",
    prompt: "一个可上下滚动的小窗口里堆着几张卡片，初始在窗口下方看不见；当某张卡片滚进窗口、它的顶部抵达窗口 80% 高度处时，它从下方 24px、透明状态升起淡入，每张只触发一次。",
    code: `gsap.utils.toArray(".item").forEach((el) => {
  gsap.from(el, {
    y: 24, autoAlpha: 0, duration: 0.6, ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      scroller: ".scroller",   // 局部滚动容器（卡片太小，不用整页）
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("st-reveal",
        ".card-st-reveal" + SCROLLER_BASE +
        ".card-st-reveal .track{padding:120px 26px 120px;display:flex;flex-direction:column;gap:14px}" +
        ".card-st-reveal .item{height:34px;border-radius:8px;display:flex;align-items:center;" +
        "padding:0 14px;color:#fff;font-family:var(--mono),monospace;font-size:12px;" +
        "background:linear-gradient(90deg,#6366f1,#22d3ee)}");
      var items = "";
      for (var i = 0; i < 6; i++) items += '<div class="item">item ' + (i + 1) + "</div>";
      stage.innerHTML =
        '<div class="card-st-reveal"><div class="track">' + items + "</div></div>" +
        '<div class="hint" style="' + hintInline() + '">↕ 滚我</div>';
      var scroller = ctx.q(".card-st-reveal");
      ctx.qa(".item").forEach(function (el) {
        gsap.from(el, {
          y: 24, autoAlpha: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: el, scroller: scroller, start: "top 80%", toggleActions: "play none none none" }
        });
      });
      // 不返回动画：交互/自管理。
    }
  });

  /* ─────────────────────── st-scrub ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-scrub",
    group: "ScrollTrigger",
    title_cn: "scrub 联动",
    title_en: "scrub: true",
    skill: "gsap-scrolltrigger",
    hint: "scrub 把动画进度死死绑在滚动位置上——往回滚动画就往回放。这里用自动来回的进度模拟那种「被滚动牵着走」的感觉。",
    prompt: "一个方块随一条进度从 0 到 1 平滑地横向移动、同时旋转，进度来回往返时方块也跟着来回——表现动画被滚动位置牵着走、可逆的「scrub」手感，无限循环。",
    code: `gsap.to(".box", {
  x: 220, rotation: 180,
  scrollTrigger: {
    trigger: ".panel",
    scroller: ".scroller",
    start: "top top",
    end: "bottom bottom",
    scrub: true   // 进度 = 滚动位置，可逆
  }
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("st-scrub",
        ".card-st-scrub{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}" +
        ".card-st-scrub .lane{position:relative;width:264px;height:60px;border-radius:30px;" +
        "background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}" +
        ".card-st-scrub .box{position:absolute;top:8px;left:8px;width:44px;height:44px;border-radius:11px;" +
        "background:linear-gradient(135deg,#f59e0b,#ef4444)}");
      stage.innerHTML = '<div class="card-st-scrub"><div class="lane"><div class="box"></div></div></div>';
      var box = ctx.q(".box");
      // 模拟 scrub：来回 yoyo，表现「进度被滚动牵着走、可逆」。
      return gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "none" } })
        .to(box, { x: 212, rotation: 180, duration: 2 });
    }
  });

  /* ─────────────────────── st-pin ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-pin",
    group: "ScrollTrigger",
    title_cn: "pin 钉住",
    title_en: "pin: true",
    skill: "gsap-scrolltrigger",
    hint: "pin 让一个区块在滚过它的范围时「钉」在原地，背景继续滚——这里在局部滚动窗口里钉住中间那块。",
    prompt: "一个可上下滚动的小窗口，里面上下各有一段普通内容，中间夹着一块醒目面板；当滚动到这块面板时它被钉住停在窗口中央，上下的内容继续滚过它，滚出范围后它再松开随页面走。",
    code: `ScrollTrigger.create({
  trigger: ".pinned",
  scroller: ".scroller",
  start: "center center",
  end: "+=200",
  pin: true,
  pinSpacing: true
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("st-pin",
        ".card-st-pin" + SCROLLER_BASE +
        ".card-st-pin .filler{padding:14px 24px;color:var(--subtle,#8aa);font-family:var(--mono),monospace;" +
        "font-size:11px;line-height:1.7;height:150px;box-sizing:border-box}" +
        ".card-st-pin .pinned{margin:0 24px;height:56px;border-radius:12px;display:flex;align-items:center;" +
        "justify-content:center;color:#fff;font-family:var(--mono),monospace;font-size:13px;font-weight:600;" +
        "background:linear-gradient(135deg,#8b5cf6,#22d3ee)}");
      stage.innerHTML =
        '<div class="card-st-pin">' +
        '<div class="filler">↓ 向下滚动<br>看中间面板被钉住</div>' +
        '<div class="pinned">PINNED 钉住</div>' +
        '<div class="filler">背景继续滚过它<br>滚出范围后松开</div>' +
        "</div>" +
        '<div class="hint" style="' + hintInline() + '">↕ 滚我</div>';
      var scroller = ctx.q(".card-st-pin");
      ScrollTrigger.create({
        trigger: ctx.q(".pinned"),
        scroller: scroller,
        start: "center center",
        end: "+=160",
        pin: true,
        pinSpacing: true
      });
    }
  });

  /* ─────────────────────── st-parallax ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-parallax",
    group: "ScrollTrigger",
    title_cn: "多层视差",
    title_en: "parallax layers",
    skill: "gsap-scrolltrigger",
    hint: "几层背景用不同速度随滚动移动（scrub），形成纵深视差。这里用自动往返的进度驱动三层不同速度。",
    prompt: "三层叠在一起的背景元素——远景星点、中景山形、近景前景——随同一条进度移动，但越靠前的层移动得越多、越远的层移动得越少，制造纵深视差，进度来回往返无限循环。",
    code: `const tl = gsap.timeline({
  scrollTrigger: { trigger: ".scene", scroller: ".scroller",
                   start: "top top", end: "bottom top", scrub: true }
});
tl.to(".far",  { yPercent: -10 }, 0)
  .to(".mid",  { yPercent: -30 }, 0)
  .to(".near", { yPercent: -60 }, 0);`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("st-parallax",
        ".card-st-parallax{position:absolute;inset:0;overflow:hidden;" +
        "background:linear-gradient(180deg,#1e1b4b,#0e1320)}" +
        ".card-st-parallax .layer{position:absolute;left:0;right:0}" +
        ".card-st-parallax .far{top:14px;height:40px}" +
        ".card-st-parallax .far span{position:absolute;width:3px;height:3px;border-radius:50%;background:#cbd5e1;opacity:.8}" +
        ".card-st-parallax .mid{bottom:40px;height:64px;background:" +
        "radial-gradient(60px 64px at 30% 100%,#3730a3 0 99%,transparent),"+
        "radial-gradient(80px 80px at 72% 100%,#4338ca 0 99%,transparent)}" +
        ".card-st-parallax .near{bottom:0;height:46px;border-radius:40px 40px 0 0;" +
        "background:linear-gradient(180deg,#0ea5e9,#0369a1)}");
      var stars = "";
      for (var i = 0; i < 9; i++) stars += '<span style="left:' + (6 + i * 11) + '%;top:' + ((i * 13) % 34) + 'px"></span>';
      stage.innerHTML =
        '<div class="card-st-parallax">' +
        '<div class="layer far">' + stars + "</div>" +
        '<div class="layer mid"></div>' +
        '<div class="layer near"></div>' +
        "</div>";
      var tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "none", duration: 2.4 } });
      tl.to(ctx.q(".far"), { yPercent: 18 }, 0)
        .to(ctx.q(".mid"), { yPercent: 40 }, 0)
        .to(ctx.q(".near"), { yPercent: 80 }, 0);
      return tl;
    }
  });

  /* ─────────────────────── st-progress ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-progress",
    group: "ScrollTrigger",
    title_cn: "滚动进度条",
    title_en: "scroll progress",
    skill: "gsap-scrolltrigger",
    hint: "用 ScrollTrigger 的 onUpdate / self.progress 把整页滚动进度画成一条进度条。这里用来回的进度模拟。",
    prompt: "页面顶部一条细进度条，宽度等于当前页面滚动进度——从顶滚到底它从空填满到满，往回滚又缩回去；旁边显示百分比数字。无限来回循环演示这种「滚动进度」反馈。",
    code: `ScrollTrigger.create({
  trigger: ".page",
  scroller: ".scroller",
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    gsap.set(".bar", { scaleX: self.progress });
    label.textContent = Math.round(self.progress * 100) + "%";
  }
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("st-progress",
        ".card-st-progress{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "align-items:center;justify-content:center;gap:18px}" +
        ".card-st-progress .track{width:240px;height:10px;border-radius:6px;overflow:hidden;" +
        "background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1)}" +
        ".card-st-progress .bar{height:100%;width:100%;transform-origin:left center;" +
        "background:linear-gradient(90deg,#22d3ee,#6366f1)}" +
        ".card-st-progress .pct{font-family:var(--mono),monospace;font-size:22px;font-weight:600;" +
        "color:#e2e8f0;font-variant-numeric:tabular-nums}");
      stage.innerHTML =
        '<div class="card-st-progress">' +
        '<div class="pct">0%</div>' +
        '<div class="track"><div class="bar"></div></div>' +
        "</div>";
      var bar = ctx.q(".bar"), pct = ctx.q(".pct");
      var state = { p: 0 };
      return gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "none", duration: 2.6 } })
        .fromTo(state, { p: 0 }, {
          p: 1,
          onUpdate: function () {
            gsap.set(bar, { scaleX: state.p });
            pct.textContent = Math.round(state.p * 100) + "%";
          }
        });
    }
  });

  /* ─────────────────────── st-batch ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-batch",
    group: "ScrollTrigger",
    title_cn: "batch 批量入场",
    title_en: "ScrollTrigger.batch()",
    skill: "gsap-scrolltrigger",
    hint: "ScrollTrigger.batch() 把同一时刻进入视口的一批元素收集起来，用一次带 stagger 的动画统一入场。",
    prompt: "一个可上下滚动的小窗口里有一个卡片网格，初始都藏在下方透明；当一批卡片同时滚进视口时，它们作为一组一起淡入升起、彼此错开 0.08 秒，而不是各自零散触发。",
    code: `ScrollTrigger.batch(".cell", {
  scroller: ".scroller",
  start: "top 90%",
  onEnter: (batch) => gsap.to(batch, {
    autoAlpha: 1, y: 0, stagger: 0.08, overwrite: true
  })
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("st-batch",
        ".card-st-batch" + SCROLLER_BASE +
        ".card-st-batch .grid{padding:130px 24px 130px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}" +
        ".card-st-batch .cell{height:40px;border-radius:9px;" +
        "background:linear-gradient(135deg,#f472b6,#8b5cf6)}");
      var cells = "";
      for (var i = 0; i < 12; i++) cells += '<div class="cell"></div>';
      stage.innerHTML =
        '<div class="card-st-batch"><div class="grid">' + cells + "</div></div>" +
        '<div class="hint" style="' + hintInline() + '">↕ 滚我</div>';
      var scroller = ctx.q(".card-st-batch");
      gsap.set(ctx.qa(".cell"), { autoAlpha: 0, y: 26 });
      ScrollTrigger.batch(ctx.qa(".cell"), {
        scroller: scroller,
        start: "top 90%",
        onEnter: function (batch) { gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08, overwrite: true }); },
        onLeaveBack: function (batch) { gsap.set(batch, { autoAlpha: 0, y: 26, overwrite: true }); }
      });
    }
  });

  /* ─────────────────────── st-snap ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-snap",
    group: "ScrollTrigger",
    title_cn: "snap 吸附",
    title_en: "snap",
    skill: "gsap-scrolltrigger",
    hint: "snap 让滚动停下时自动吸附到最近的「档位」（如每张全屏面板），松手就平滑对齐。",
    prompt: "一个可上下滚动的小窗口，里面是若干等高的全幅面板一张接一张；滚动停下时画面自动平滑吸附、对齐到最近一张面板的边界，不会停在两张之间。",
    code: `ScrollTrigger.create({
  trigger: ".panels",
  scroller: ".scroller",
  start: "top top",
  end: "bottom bottom",
  snap: { snapTo: 1 / (n - 1), duration: 0.3, ease: "power1.inOut" }
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      var N = 4;
      injectStyle("st-snap",
        ".card-st-snap" + SCROLLER_BASE +
        ".card-st-snap .panel{height:172px;display:flex;align-items:center;justify-content:center;" +
        "color:#fff;font-family:var(--display),sans-serif;font-size:34px;font-weight:700}" +
        ".card-st-snap .p0{background:linear-gradient(135deg,#ef4444,#f59e0b)}" +
        ".card-st-snap .p1{background:linear-gradient(135deg,#22d3ee,#3b82f6)}" +
        ".card-st-snap .p2{background:linear-gradient(135deg,#8b5cf6,#ec4899)}" +
        ".card-st-snap .p3{background:linear-gradient(135deg,#10b981,#14b8a6)}");
      var panels = "";
      for (var i = 0; i < N; i++) panels += '<div class="panel p' + i + '">0' + (i + 1) + "</div>";
      stage.innerHTML =
        '<div class="card-st-snap">' + panels + "</div>" +
        '<div class="hint" style="' + hintInline() + '">↕ 滚我（松手吸附）</div>';
      var scroller = ctx.q(".card-st-snap");
      // trigger = 滚动内容本身：start/end 跨越整个可滚动范围。
      ScrollTrigger.create({
        trigger: scroller.firstChild,
        scroller: scroller,
        start: "top top",
        end: "max",
        snap: { snapTo: 1 / (N - 1), duration: 0.3, ease: "power1.inOut" }
      });
    }
  });

  /* ─────────────────────── st-horizontal ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-horizontal",
    group: "ScrollTrigger",
    title_cn: "横向滚动",
    title_en: "horizontal scroll",
    skill: "gsap-scrolltrigger",
    hint: "经典「钉住区块 + 纵向滚动 → 内容横向移动」的 fake 横滚（containerAnimation）。这里用自动往返的横移模拟那种走廊感。",
    prompt: "一排彩色面板水平排成一长条，超出窗口宽度；随一条进度内容整体向左平移、把后面的面板依次推进视野，进度往返时又推回来——表现「纵向滚动驱动横向推进」的横滚走廊，无限循环。横移用线性匀速。",
    code: `const wrap = document.querySelector(".track");
gsap.to(wrap, {
  x: () => -(wrap.scrollWidth - stage.offsetWidth),
  ease: "none",                 // 横滚必须 ease:"none"，否则错位
  scrollTrigger: {
    trigger: ".panel", scroller: ".scroller",
    pin: true, scrub: true, end: "+=1200"
  }
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("st-horizontal",
        ".card-st-horizontal{position:absolute;inset:0;overflow:hidden;display:flex;align-items:center}" +
        ".card-st-horizontal .track{display:flex;gap:14px;padding:0 16px;will-change:transform}" +
        ".card-st-horizontal .panel{flex:0 0 auto;width:150px;height:108px;border-radius:14px;" +
        "display:flex;align-items:center;justify-content:center;color:#fff;" +
        "font-family:var(--display),sans-serif;font-size:30px;font-weight:700}" +
        ".card-st-horizontal .h0{background:linear-gradient(135deg,#6366f1,#22d3ee)}" +
        ".card-st-horizontal .h1{background:linear-gradient(135deg,#f59e0b,#ef4444)}" +
        ".card-st-horizontal .h2{background:linear-gradient(135deg,#8b5cf6,#ec4899)}" +
        ".card-st-horizontal .h3{background:linear-gradient(135deg,#10b981,#14b8a6)}" +
        ".card-st-horizontal .h4{background:linear-gradient(135deg,#0ea5e9,#3730a3)}");
      var panels = "";
      for (var i = 0; i < 5; i++) panels += '<div class="panel h' + i + '">0' + (i + 1) + "</div>";
      stage.innerHTML = '<div class="card-st-horizontal"><div class="track">' + panels + "</div></div>";
      var track = ctx.q(".track");
      // track 总宽 = 5*150 + 4*14 + 32 padding ≈ 838；stage 宽 ~330 → 横移 ~ -(838-330)。
      var dist = Math.max(0, track.scrollWidth - stage.clientWidth);
      return gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "none" } })
        .to(track, { x: -dist, duration: 3 });
    }
  });

  /* ─────────────────────── st-velocity ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "st-velocity",
    group: "ScrollTrigger",
    title_cn: "速度感应 skew",
    title_en: "scroll velocity skew",
    skill: "gsap-scrolltrigger",
    hint: "读 ScrollTrigger 的 getVelocity()，按滚动速度给元素加倾斜/拉伸——滚得越快倾斜越大，停下回正。",
    prompt: "几张卡片，滚动越快它们沿垂直方向被倾斜拉扯得越厉害（像被速度甩起来），滚动一停就弹性地恢复竖直。这里用一条来回加减速的进度模拟「速度」，让卡片随速度起伏倾斜，无限循环。",
    code: `let proxy = { skew: 0 }, setSkew = gsap.quickSetter(".cards", "skewY", "deg");
ScrollTrigger.create({
  scroller: ".scroller",
  onUpdate: (self) => {
    let v = gsap.utils.clamp(-18, 18, self.getVelocity() / -60);
    if (Math.abs(v) > Math.abs(proxy.skew)) {
      proxy.skew = v;
      gsap.to(proxy, { skew: 0, duration: 0.6, ease: "power3",
        overwrite: true, onUpdate: () => setSkew(proxy.skew) });
    }
  }
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("st-velocity",
        ".card-st-velocity{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}" +
        ".card-st-velocity .cards{display:flex;flex-direction:column;gap:10px;transform-origin:center}" +
        ".card-st-velocity .row{width:200px;height:30px;border-radius:8px;" +
        "background:linear-gradient(90deg,#22d3ee,#6366f1)}" +
        ".card-st-velocity .row:nth-child(2){background:linear-gradient(90deg,#f472b6,#8b5cf6)}" +
        ".card-st-velocity .row:nth-child(3){background:linear-gradient(90deg,#f59e0b,#ef4444)}");
      stage.innerHTML =
        '<div class="card-st-velocity"><div class="cards">' +
        '<div class="row"></div><div class="row"></div><div class="row"></div>' +
        "</div></div>";
      var cards = ctx.q(".cards");
      // 模拟「速度」：进度来回加减速，速度峰值时倾斜最大，匀速段回正。
      return gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } })
        .fromTo(cards, { skewY: 0 }, { skewY: 14, duration: 0.5, ease: "power3.in" })
        .to(cards, { skewY: 0, duration: 0.7, ease: "elastic.out(1,0.5)" })
        .to(cards, { skewY: -14, duration: 0.5, ease: "power3.in" }, "+=0.4")
        .to(cards, { skewY: 0, duration: 0.7, ease: "elastic.out(1,0.5)" })
        .to({}, { duration: 0.4 });
    }
  });

  // 提示条的内联兜底样式（即便 CSS 注入失败也能看见提示）。
  function hintInline() {
    return "position:absolute;left:50%;top:8px;transform:translateX(-50%);z-index:5;" +
      "font-family:var(--mono,monospace);font-size:10px;color:var(--subtle,#8aa);" +
      "background:rgba(8,10,9,.62);border:1px solid rgba(255,255,255,.12);" +
      "border-radius:999px;padding:2px 9px;pointer-events:none;white-space:nowrap;";
  }
})();
