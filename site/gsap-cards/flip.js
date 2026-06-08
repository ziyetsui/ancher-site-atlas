/* GSAP 特效图鉴 — Flip family
 * group: "Flip"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * Flip 工作流：Flip.getState(els) 捕获当前几何 → 改 DOM（类/布局/顺序） → Flip.from(state, {...}) 从旧态过渡到新态。
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

  /* ─────────────────────── flip-toggle ─────────────────────── */
  // 两状态布局切换：同一张卡片在「小」与「大」两个布局间自动来回。
  window.GSAP_CARDS.push({
    id: "flip-toggle",
    group: "Flip",
    title_cn: "两态布局切换",
    title_en: "Flip toggle",
    skill: "gsap-plugins",
    hint: "捕获状态 → 切一个 class 改变布局 → Flip.from 让元素从旧几何平滑滑到新几何。",
    prompt: "一张卡片在「小尺寸靠左上角」和「大尺寸铺满」两种布局之间自动来回切换；每次切换时卡片的位置和大小都从上一个状态平滑过渡到下一个状态，过渡用平滑的进出缓动，循环往复。",
    code: `// 捕获当前几何
const state = Flip.getState(card);
// 切换布局（这里只是加/去一个 class）
card.classList.toggle("is-big");
// 从旧态过渡到新态
Flip.from(state, {
  duration: 0.7,
  ease: "power2.inOut",
  absolute: true
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("flip-toggle",
        ".card-flip-toggle{position:absolute;inset:0;padding:18px}" +
        ".card-flip-toggle .frame{position:relative;width:100%;height:100%;" +
        "border:1px dashed rgba(148,163,184,.4);border-radius:10px}" +
        ".card-flip-toggle .card{position:absolute;top:14px;left:14px;width:84px;height:64px;" +
        "border-radius:10px;background:linear-gradient(135deg,#6366f1,#22d3ee);" +
        "display:flex;align-items:center;justify-content:center;color:#fff;" +
        "font:600 12px/1 system-ui,sans-serif}" +
        ".card-flip-toggle .card.is-big{top:14px;left:14px;right:14px;bottom:14px;width:auto;height:auto}");
      stage.innerHTML =
        '<div class="card-flip-toggle"><div class="frame">' +
        '<div class="card">Flip</div></div></div>';
      var card = ctx.q(".card");
      var Flip = window.Flip;

      // reduced-motion：直接渲染一个终态，不来回。
      if (ctx.reduced) {
        card.classList.add("is-big");
        return null;
      }

      // 自调度循环（GSAP 官方推荐的 Flip 循环写法）：每次 Flip.from 完成后用
      // delayedCall 排下一拍。绝不把 Flip 子 tween add 进正在 render 的父 timeline——
      // 那种重入会破坏 Flip 的内部状态，导致全页后续 Flip.getState 全部抛错。
      // 返回一个受控对象，hub 进出视口统一 play/pause。
      var running = false, wait = null, cur = null;
      function step() {
        if (!running) return;
        var state = Flip.getState(card);
        card.classList.toggle("is-big");
        cur = Flip.from(state, {
          duration: 0.7, ease: "power2.inOut", absolute: true,
          onComplete: function () { if (running) wait = gsap.delayedCall(0.45, step); }
        });
      }
      return {
        play: function () { if (!running) { running = true; step(); } return this; },
        pause: function () { running = false; if (wait) wait.kill(); if (cur) cur.pause(); return this; },
        restart: function () { running = true; step(); return this; }
      };
    }
  });

  /* ─────────────────────── flip-filter ─────────────────────── */
  // 网格筛选重排：点击标签筛选，匹配项留下并重新排布，落位用 Flip 平滑过渡。
  window.GSAP_CARDS.push({
    id: "flip-filter",
    group: "Flip",
    title_cn: "网格筛选重排",
    title_en: "Flip filter",
    skill: "gsap-plugins",
    hint: "筛选后捕获状态、隐藏不匹配项，剩下的项用 Flip.from 滑到新网格位置（含进出淡入淡出）。",
    prompt: "一个彩色小方块网格上方有「全部 / 蓝 / 粉」三个筛选标签；点某个标签时，不匹配的方块淡出消失，剩下的方块重新紧凑排布，每个方块都从原来的位置平滑滑动到新位置，重新出现的方块淡入登场。",
    code: `tags.addEventListener("click", () => {
  const state = Flip.getState(items);   // 先捕获全部项的几何
  items.forEach(el =>
    el.classList.toggle("hidden", !match(el))  // 改 DOM：隐藏不匹配项
  );
  Flip.from(state, {
    duration: 0.5,
    ease: "power2.inOut",
    absolute: true,
    onEnter: el => gsap.fromTo(el, {opacity:0, scale:0}, {opacity:1, scale:1}),
    onLeave: el => gsap.to(el, {opacity:0, scale:0})
  });
});`,
    kind: "interactive",
    init: function (stage, ctx) {
      injectStyle("flip-filter",
        ".card-flip-filter{position:absolute;inset:0;display:flex;flex-direction:column;" +
        "align-items:center;justify-content:center;gap:12px;padding:10px}" +
        ".card-flip-filter .tags{display:flex;gap:6px}" +
        ".card-flip-filter .tag{font:600 11px/1 system-ui,sans-serif;color:#cbd5e1;" +
        "padding:5px 11px;border-radius:999px;border:1px solid rgba(148,163,184,.35);" +
        "background:transparent;cursor:pointer;transition:all .15s}" +
        ".card-flip-filter .tag.on{color:#fff;background:rgba(99,102,241,.85);" +
        "border-color:transparent}" +
        ".card-flip-filter .grid{display:flex;flex-wrap:wrap;gap:8px;width:228px;" +
        "justify-content:center}" +
        ".card-flip-filter .cell{width:30px;height:30px;border-radius:8px}" +
        ".card-flip-filter .cell.blue{background:linear-gradient(135deg,#38bdf8,#6366f1)}" +
        ".card-flip-filter .cell.pink{background:linear-gradient(135deg,#f472b6,#fb7185)}" +
        ".card-flip-filter .cell.hidden{display:none}");
      // 交替蓝/粉，共 12 个
      var cells = "";
      for (var i = 0; i < 12; i++) {
        var c = i % 2 === 0 ? "blue" : "pink";
        cells += '<div class="cell ' + c + '" data-c="' + c + '"></div>';
      }
      stage.innerHTML =
        '<div class="card-flip-filter">' +
        '<div class="tags">' +
        '<button class="tag on" data-f="all">全部</button>' +
        '<button class="tag" data-f="blue">蓝</button>' +
        '<button class="tag" data-f="pink">粉</button>' +
        '</div>' +
        '<div class="grid">' + cells + '</div>' +
        '</div>';

      var Flip = window.Flip;
      var items = ctx.qa(".cell");
      var tags = ctx.qa(".tag");

      function applyFilter(f) {
        var state = Flip.getState(items);
        items.forEach(function (el) {
          var show = f === "all" || el.getAttribute("data-c") === f;
          el.classList.toggle("hidden", !show);
        });
        if (ctx.reduced) return; // reduced：直接切显隐，不做动画
        Flip.from(state, {
          duration: 0.5,
          ease: "power2.inOut",
          absolute: true,
          onEnter: function (el) {
            return gsap.fromTo(el, { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, duration: 0.4 });
          },
          onLeave: function (el) {
            return gsap.to(el, { opacity: 0, scale: 0, duration: 0.3 });
          }
        });
      }

      tags.forEach(function (t) {
        t.addEventListener("click", function () {
          tags.forEach(function (x) { x.classList.remove("on"); });
          t.classList.add("on");
          applyFilter(t.getAttribute("data-f"));
        });
      });
      // interactive：不返回动画，用户点击驱动。
    }
  });

  /* ─────────────────────── flip-state ─────────────────────── */
  // Flip.getState 捕获 → 改 DOM（把元素移到另一个容器）→ Flip.from 播放。
  window.GSAP_CARDS.push({
    id: "flip-state",
    group: "Flip",
    title_cn: "捕获状态再播放",
    title_en: "Flip.getState → from",
    skill: "gsap-plugins",
    hint: "Flip 三步：getState 记下旧几何 → 用 appendChild 真把元素搬到新父容器 → from 让它从旧位置滑过去。",
    prompt: "一个小方块在左右两个停靠区之间自动往返；每次它被真正地移动到另一个停靠格里（DOM 父容器改变），并从原来的屏幕位置平滑飞到新位置，循环演示。",
    code: `// 1. 捕获元素当前几何
const state = Flip.getState(chip);
// 2. 改 DOM：把它真的搬到另一个容器
(chip.parentNode === slotA ? slotB : slotA).appendChild(chip);
// 3. 从旧态过渡到新态
Flip.from(state, {
  duration: 0.6,
  ease: "back.inOut(1.4)"
});`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("flip-state",
        ".card-flip-state{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;gap:40px}" +
        ".card-flip-state .slot{width:74px;height:74px;border-radius:14px;" +
        "border:1px dashed rgba(148,163,184,.45);display:flex;align-items:center;" +
        "justify-content:center}" +
        ".card-flip-state .chip{width:54px;height:54px;border-radius:12px;" +
        "background:linear-gradient(135deg,#f59e0b,#ef4444);box-shadow:0 6px 16px rgba(239,68,68,.35)}");
      stage.innerHTML =
        '<div class="card-flip-state">' +
        '<div class="slot" data-slot="a"><div class="chip"></div></div>' +
        '<div class="slot" data-slot="b"></div>' +
        '</div>';

      var Flip = window.Flip;
      var chip = ctx.q(".chip");
      var slotA = ctx.q('[data-slot="a"]');
      var slotB = ctx.q('[data-slot="b"]');

      if (ctx.reduced) {
        // reduced：把它搬到 B 停下，不来回。
        slotB.appendChild(chip);
        return null;
      }

      // 自调度循环，避免把子 tween add 进正在 render 的父 timeline（重入会破坏 Flip）。
      var running = false, wait = null, cur = null;
      function step() {
        if (!running) return;
        var state = Flip.getState(chip);
        (chip.parentNode === slotA ? slotB : slotA).appendChild(chip);
        cur = Flip.from(state, {
          duration: 0.6, ease: "back.inOut(1.4)",
          onComplete: function () { if (running) wait = gsap.delayedCall(0.5, step); }
        });
      }
      return {
        play: function () { if (!running) { running = true; step(); } return this; },
        pause: function () { running = false; if (wait) wait.kill(); if (cur) cur.pause(); return this; },
        restart: function () { running = true; step(); return this; }
      };
    }
  });
})();
