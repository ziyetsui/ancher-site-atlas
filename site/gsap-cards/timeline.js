/* GSAP 特效图鉴 — Timeline family
 * group: "Timeline"  ·  skill: "gsap-timeline"
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

  /* ─────────────────────── tl-sequence ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "tl-sequence",
    group: "Timeline",
    title_cn: "顺序时间轴",
    title_en: "timeline (sequence)",
    skill: "gsap-timeline",
    hint: "gsap.timeline() 把多个补间默认依次首尾相接，无需手算 delay。",
    prompt: "三个方块 A、B、C 依次入场：第一个从左滑入，结束后第二个从上落下，再结束后第三个旋转着放大出现，每段约半秒、power2.out 缓动，整段播完停顿后重播。",
    code: `const tl = gsap.timeline({
  defaults: { duration: 0.5, ease: "power2.out" }
});
tl.from(".a", { x: -90, autoAlpha: 0 })   // 先
  .from(".b", { y: -70, autoAlpha: 0 })   // A 完了再 B
  .from(".c", { rotation: 180, scale: 0.2, autoAlpha: 0 }); // 再 C`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("tl-sequence",
        ".card-tl-sequence{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;gap:18px}" +
        ".card-tl-sequence .blk{width:60px;height:60px;border-radius:12px;" +
        "display:flex;align-items:center;justify-content:center;color:#0b1020;" +
        "font:700 22px/1 system-ui,sans-serif}" +
        ".card-tl-sequence .a{background:#6366f1}" +
        ".card-tl-sequence .b{background:#22d3ee}" +
        ".card-tl-sequence .c{background:#f472b6}");
      stage.innerHTML =
        '<div class="card-tl-sequence">' +
        '<div class="blk a">A</div><div class="blk b">B</div><div class="blk c">C</div>' +
        '</div>';
      var tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });
      tl.from(ctx.q(".a"), { x: -90, autoAlpha: 0 })
        .from(ctx.q(".b"), { y: -70, autoAlpha: 0 })
        .from(ctx.q(".c"), { rotation: 180, scale: 0.2, autoAlpha: 0 });
      return tl;
    }
  });

  /* ─────────────────────── tl-position ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "tl-position",
    group: "Timeline",
    title_cn: "position 参数",
    title_en: "position parameter",
    skill: "gsap-timeline",
    hint: "第三参数控制每段落点：\"<\" 同起、\"-=\" 提前重叠、标签可命名时间点。",
    prompt: "用一个命名为 hit 的时间标签编排，时间轴默认每段 0.5 秒、power3.out 缓动：标题先从左滑入；一条下划线与标题同时起笔（位置参数 \"<\"，同一时间点）；最后一颗圆点用 back.out(3) 比前一段提前 0.2 秒（位置参数 \"-=0.2\"）弹出，造成重叠登场的节奏，整段播完停顿后重播。",
    code: `const tl = gsap.timeline({
  defaults: { duration: 0.5, ease: "power3.out" }
});
tl.addLabel("hit", 0)
  .from(".title", { x: -120, autoAlpha: 0 }, "hit")
  .from(".rule",  { scaleX: 0, transformOrigin: "left" }, "<")   // 与上一段同起
  .from(".dot",   { scale: 0, autoAlpha: 0,
                    ease: "back.out(3)" }, "-=0.2");              // 提前 0.2s 重叠`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("tl-position",
        ".card-tl-position{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "align-items:flex-start;justify-content:center;gap:10px;padding:0 40px}" +
        ".card-tl-position .head{display:flex;align-items:center;gap:10px}" +
        ".card-tl-position .title{font:800 30px/1 system-ui,sans-serif;color:#e6e9f5}" +
        ".card-tl-position .dot{width:14px;height:14px;border-radius:50%;background:#f472b6}" +
        ".card-tl-position .rule{width:200px;height:5px;border-radius:3px;" +
        "background:linear-gradient(90deg,#6366f1,#22d3ee)}");
      stage.innerHTML =
        '<div class="card-tl-position">' +
        '<div class="head"><span class="title">Hello</span><span class="dot"></span></div>' +
        '<div class="rule"></div>' +
        '</div>';
      var tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power3.out" } });
      tl.addLabel("hit", 0)
        .from(ctx.q(".title"), { x: -120, autoAlpha: 0 }, "hit")
        .from(ctx.q(".rule"), { scaleX: 0, transformOrigin: "left" }, "<")
        .from(ctx.q(".dot"), { scale: 0, autoAlpha: 0, ease: "back.out(3)" }, "-=0.2");
      return tl;
    }
  });

  /* ─────────────────────── tl-nested ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "tl-nested",
    group: "Timeline",
    title_cn: "嵌套时间轴",
    title_en: "nested timelines",
    skill: "gsap-timeline",
    hint: "把子时间轴用 master.add() 装进主时间轴，封装可复用的动画段。",
    prompt: "两组各三颗圆点构成两条独立的小动画（每组三颗用 back.out(2) 缓动、各 0.4 秒、错开 0.1 秒依次弹起）。把这两组分别做成子时间轴，再用 master.add() 装进一条主时间轴：第一组先播，第二组用位置参数 \"+=0.3\" 延后 0.3 秒接着播，整段播完停顿后重播。",
    code: `function popRow(sel) {                 // 可复用的子时间轴工厂
  return gsap.timeline()
    .from(sel + " .d", {
      scale: 0, autoAlpha: 0, ease: "back.out(2)",
      duration: 0.4, stagger: 0.1
    });
}
const master = gsap.timeline();
master.add(popRow(".row1"))                 // 装入第一组
      .add(popRow(".row2"), "+=0.3");       // 第一组后 0.3s 装入第二组`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("tl-nested",
        ".card-tl-nested{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "align-items:center;justify-content:center;gap:18px}" +
        ".card-tl-nested .row{display:flex;gap:16px}" +
        ".card-tl-nested .d{width:30px;height:30px;border-radius:50%}" +
        ".card-tl-nested .row1 .d{background:linear-gradient(135deg,#6366f1,#22d3ee)}" +
        ".card-tl-nested .row2 .d{background:linear-gradient(135deg,#f472b6,#8b5cf6)}");
      function dots() { return '<div class="d"></div><div class="d"></div><div class="d"></div>'; }
      stage.innerHTML =
        '<div class="card-tl-nested">' +
        '<div class="row row1">' + dots() + '</div>' +
        '<div class="row row2">' + dots() + '</div>' +
        '</div>';
      function popRow(sel) {
        return gsap.timeline().from(ctx.qa(sel + " .d"), {
          scale: 0, autoAlpha: 0, ease: "back.out(2)", duration: 0.4, stagger: 0.1
        });
      }
      var master = gsap.timeline();
      master.add(popRow(".row1"))
            .add(popRow(".row2"), "+=0.3");
      return master;
    }
  });

  /* ─────────────────────── tl-control ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "tl-control",
    group: "Timeline",
    title_cn: "repeat / yoyo 与控制",
    title_en: "repeat & yoyo",
    skill: "gsap-timeline",
    hint: "构造器上的 repeat:-1 + yoyo:true 让整条时间轴无限来回播放。",
    prompt: "一个滑块在轨道上先右移 160px、再放大到 1.6 倍并变色，整条时间轴每段 0.6 秒、sine.inOut 缓动；用构造器上的 repeat:-1 + yoyo:true 让它到头后整段倒着回放、如此无限往返，repeatDelay:0.3 让每次往返之间停 0.3 秒。",
    code: `const tl = gsap.timeline({
  repeat: -1,        // 整条时间轴无限重复
  yoyo: true,        // 到头后倒放回来
  repeatDelay: 0.3,  // 每轮之间停 0.3s
  defaults: { duration: 0.6, ease: "sine.inOut" }
});
tl.to(".pad", { x: 160 })
  .to(".pad", { scale: 1.6, backgroundColor: "#f472b6" });`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("tl-control",
        ".card-tl-control{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center}" +
        ".card-tl-control .track{position:relative;width:230px;height:10px;border-radius:6px;" +
        "background:rgba(255,255,255,.12)}" +
        ".card-tl-control .pad{position:absolute;left:0;top:50%;margin-top:-15px;" +
        "width:30px;height:30px;border-radius:9px;background:#22d3ee}");
      stage.innerHTML =
        '<div class="card-tl-control"><div class="track"><div class="pad"></div></div></div>';
      var tl = gsap.timeline({
        repeat: -1, yoyo: true, repeatDelay: 0.3,
        defaults: { duration: 0.6, ease: "sine.inOut" }
      });
      tl.to(ctx.q(".pad"), { x: 160 })
        .to(ctx.q(".pad"), { scale: 1.6, backgroundColor: "#f472b6" });
      return tl;
    }
  });
})();
