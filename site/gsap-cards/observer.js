/* GSAP 特效图鉴 — Observer family
 * group: "Observer"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * Observer 统一 wheel / touch / pointer-drag 输入；这里都是 interactive 卡——
 * init 建好交互后不返回动画，DOM 内放交互提示。所有 Observer 都 target 到 stage 内元素。
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

  /* ─────────────────────── obs-unified ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "obs-unified",
    group: "Observer",
    title_cn: "统一输入切换",
    title_en: "Observer unified input",
    skill: "gsap-plugins",
    hint: "一个 Observer 同时归一化 wheel / 触摸 / 拖拽：上下任一方向输入都切到下一张卡片。",
    prompt: "做一个内容切换器：用户在区域内向上滚轮、向上滑触、或向上拖拽，都切到下一张面板；向下则回到上一张。每个方向只触发一次（带去抖锁），切换时旧面板向上淡出、新面板从下方淡入。三张彩色面板循环。",
    code: `Observer.create({
  target: panel,            // 卡内元素，非全局
  type: "wheel,touch,pointer",
  tolerance: 12,
  preventDefault: true,
  onUp:   () => go(1),      // 向上滚/滑/拖 → 下一张
  onDown: () => go(-1),
});

function go(dir) {
  if (animating) return;    // 去抖锁
  animating = true;
  const next = gsap.utils.wrap(0, panels.length, i + dir);
  gsap.timeline({ onComplete: () => animating = false })
    .to(panels[i],    { yPercent: -dir * 60, autoAlpha: 0, duration: .4 })
    .fromTo(panels[next],
      { yPercent: dir * 60, autoAlpha: 0 },
      { yPercent: 0, autoAlpha: 1, duration: .45 }, "<");
  i = next;
}`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("obs-unified",
        ".card-obs-unified{position:absolute;inset:0;overflow:hidden;" +
        "font-family:system-ui,sans-serif;touch-action:none;cursor:grab}" +
        ".card-obs-unified:active{cursor:grabbing}" +
        ".card-obs-unified .panel{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "align-items:center;justify-content:center;gap:6px}" +
        ".card-obs-unified .panel .big{font-size:30px;font-weight:800;color:#fff;letter-spacing:.02em}" +
        ".card-obs-unified .panel .sub{font-size:13px;font-weight:600;color:rgba(255,255,255,.85)}" +
        ".card-obs-unified .p0{background:linear-gradient(135deg,#6366f1,#22d3ee)}" +
        ".card-obs-unified .p1{background:linear-gradient(135deg,#ec4899,#f97316)}" +
        ".card-obs-unified .p2{background:linear-gradient(135deg,#10b981,#84cc16)}" +
        ".card-obs-unified .hint{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);" +
        "z-index:3;font-size:11px;font-weight:600;color:rgba(255,255,255,.92);" +
        "background:rgba(0,0,0,.32);padding:3px 10px;border-radius:999px;pointer-events:none}" +
        ".card-obs-unified .dots{position:absolute;top:8px;left:50%;transform:translateX(-50%);" +
        "z-index:3;display:flex;gap:6px;pointer-events:none}" +
        ".card-obs-unified .dots i{width:7px;height:7px;border-radius:50%;" +
        "background:rgba(255,255,255,.45);transition:background .2s}" +
        ".card-obs-unified .dots i.on{background:#fff}");

      stage.innerHTML =
        '<div class="card-obs-unified">' +
        '<div class="panel p0"><div class="big">面板 1</div><div class="sub">设计</div></div>' +
        '<div class="panel p1"><div class="big">面板 2</div><div class="sub">原型</div></div>' +
        '<div class="panel p2"><div class="big">面板 3</div><div class="sub">上线</div></div>' +
        '<div class="dots"><i class="on"></i><i></i><i></i></div>' +
        '<div class="hint">↕ 滚轮 / 滑动 / 拖拽切换</div>' +
        '</div>';

      var root = ctx.q(".card-obs-unified");
      var panels = ctx.qa(".panel");
      var dots = ctx.qa(".dots i");
      var i = 0;
      var animating = false;

      // 初始堆叠：仅第 0 张可见，其余移出视野。
      gsap.set(panels, { autoAlpha: 0, yPercent: 60 });
      gsap.set(panels[0], { autoAlpha: 1, yPercent: 0 });

      function setDots(n) {
        dots.forEach(function (d, k) { d.classList.toggle("on", k === n); });
      }

      function go(dir) {
        if (animating || ctx.reduced) {
          // 静态偏好：直接跳转、不做动画。
          if (ctx.reduced) {
            gsap.set(panels[i], { autoAlpha: 0 });
            i = gsap.utils.wrap(0, panels.length, i + dir);
            gsap.set(panels[i], { autoAlpha: 1, yPercent: 0 });
            setDots(i);
          }
          return;
        }
        animating = true;
        var next = gsap.utils.wrap(0, panels.length, i + dir);
        gsap.timeline({ onComplete: function () { animating = false; } })
          .to(panels[i], { yPercent: -dir * 60, autoAlpha: 0, duration: 0.4, ease: "power2.in" })
          .fromTo(panels[next],
            { yPercent: dir * 60, autoAlpha: 0 },
            { yPercent: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" }, "<");
        i = next;
        setDots(i);
      }

      var obs = Observer.create({
        target: root,
        type: "wheel,touch,pointer",
        tolerance: 12,
        dragMinimum: 6,
        preventDefault: true,
        lockAxis: true,
        onUp: function () { go(1); },
        onDown: function () { go(-1); }
      });

      // 把 Observer 实例挂到 stage 上，便于（未来）清理；不污染全局。
      stage._obsUnified = obs;
      // interactive：不返回动画。
    }
  });

  /* ────────────────────── obs-velocity ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "obs-velocity",
    group: "Observer",
    title_cn: "速度映射反馈",
    title_en: "Observer velocity",
    skill: "gsap-plugins",
    hint: "读取 Observer 的输入速度，把它实时映射成倾斜、辉光和速度条——快滑强反馈，松手回正。",
    prompt: "做一个对输入速度敏感的卡片：用户滚轮或拖拽越快，中央的卡片倾斜越大、边缘辉光越亮、底部一根速度条越长，并显示当前速度数值。停止输入后卡片用弹性缓动回到水平、辉光与速度条衰减归零。",
    code: `Observer.create({
  target: pad,
  type: "wheel,touch,pointer",
  onChangeY: (self) => {
    const v = self.velocityY;              // px/s，带符号
    const tilt = gsap.utils.clamp(-22, 22, v * 0.02);
    const glow = gsap.utils.clamp(0, 1, Math.abs(v) / 1800);
    gsap.to(card, { rotate: tilt, duration: .25, ease: "power3.out" });
    gsap.to(card, { "--glow": glow, duration: .2 });
    bar.style.width = gsap.utils.clamp(0, 100, Math.abs(v) / 18) + "%";
  },
  onStop: () => gsap.to(card,             // 松手回正
    { rotate: 0, "--glow": 0, duration: .8, ease: "elastic.out(1,.5)" }),
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("obs-velocity",
        ".card-obs-velocity{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;overflow:hidden;font-family:system-ui,sans-serif;" +
        "touch-action:none;cursor:ns-resize;background:#0b1020}" +
        ".card-obs-velocity .card{--glow:0;position:relative;width:140px;height:92px;" +
        "border-radius:16px;display:flex;flex-direction:column;align-items:center;" +
        "justify-content:center;gap:4px;background:linear-gradient(135deg,#1e293b,#334155);" +
        "box-shadow:0 0 0 1px rgba(255,255,255,.06)," +
        "0 calc(10px + var(--glow)*26px) calc(20px + var(--glow)*40px) " +
        "rgba(56,189,248,calc(.15 + var(--glow)*.65))}" +
        ".card-obs-velocity .card .num{font-size:24px;font-weight:800;color:#e2e8f0;" +
        "font-variant-numeric:tabular-nums}" +
        ".card-obs-velocity .card .lbl{font-size:11px;font-weight:600;color:#7dd3fc;" +
        "letter-spacing:.06em;text-transform:uppercase}" +
        ".card-obs-velocity .bar{position:absolute;left:18px;right:18px;bottom:14px;height:5px;" +
        "border-radius:999px;background:rgba(255,255,255,.1);overflow:hidden}" +
        ".card-obs-velocity .bar i{display:block;height:100%;width:0%;border-radius:999px;" +
        "background:linear-gradient(90deg,#22d3ee,#a78bfa)}" +
        ".card-obs-velocity .hint{position:absolute;top:8px;left:50%;transform:translateX(-50%);" +
        "font-size:11px;font-weight:600;color:rgba(255,255,255,.7);pointer-events:none}");

      stage.innerHTML =
        '<div class="card-obs-velocity">' +
        '<div class="hint">↕ 越快滑/拖，反馈越强</div>' +
        '<div class="card">' +
        '<div class="num">0</div>' +
        '<div class="lbl">velocity</div>' +
        '</div>' +
        '<div class="bar"><i></i></div>' +
        '</div>';

      var root = ctx.q(".card-obs-velocity");
      var card = ctx.q(".card");
      var num = ctx.q(".num");
      var bar = ctx.q(".bar i");
      var clamp = gsap.utils.clamp;

      // 平滑数字显示用的代理对象。
      var disp = { v: 0 };

      function applyVelocity(v) {
        if (ctx.reduced) return;
        var tilt = clamp(-22, 22, v * 0.02);
        var glow = clamp(0, 1, Math.abs(v) / 1800);
        gsap.to(card, { rotate: tilt, duration: 0.25, ease: "power3.out", overwrite: "auto" });
        gsap.to(card, { "--glow": glow, duration: 0.2, overwrite: "auto" });
        gsap.to(disp, {
          v: Math.round(Math.abs(v)),
          duration: 0.2,
          overwrite: "auto",
          onUpdate: function () { num.textContent = Math.round(disp.v); }
        });
        bar.style.width = clamp(0, 100, Math.abs(v) / 18) + "%";
      }

      function rest() {
        gsap.to(card, { rotate: 0, "--glow": 0, duration: 0.8, ease: "elastic.out(1,0.5)", overwrite: "auto" });
        gsap.to(disp, {
          v: 0, duration: 0.6, ease: "power2.out", overwrite: "auto",
          onUpdate: function () { num.textContent = Math.round(disp.v); }
        });
        gsap.to(bar, { width: "0%", duration: 0.6, ease: "power2.out" });
      }

      var obs = Observer.create({
        target: root,
        type: "wheel,touch,pointer",
        tolerance: 0,
        dragMinimum: 0,
        preventDefault: true,
        onChangeY: function (self) { applyVelocity(self.velocityY); },
        onStop: rest
      });

      stage._obsVelocity = obs;
      // interactive：不返回动画。
    }
  });
})();
