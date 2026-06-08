/* GSAP 特效图鉴 — SplitText family
 * group: "SplitText"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * SplitText 已在 hub 页 registerPlugin，init 里直接用 SplitText.create(...)。
 * 注意：每张卡用自己 stage 内的元素调用 SplitText（不传选择器字符串，传真实节点），
 * 避免跨卡污染。
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

  /* ─────────────────────── split-chars ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "split-chars",
    group: "SplitText",
    title_cn: "逐字入场",
    title_en: "SplitText (chars)",
    skill: "gsap-plugins",
    hint: "SplitText 把标题拆成单个字符，每个字符错开时间从下方淡入弹起。",
    prompt: "一行标题文字被拆成一个个字符，每个字符从下方 40 像素、透明、略微旋转的状态依次弹起淡入，从左到右错开约 0.04 秒登场，使用回弹缓动；整句播完停顿后重播。",
    code: `const split = SplitText.create(el, { type: "chars", aria: "auto" });
gsap.from(split.chars, {
  y: 40,
  autoAlpha: 0,
  rotateZ: 8,
  ease: "back.out(1.7)",
  duration: 0.6,
  stagger: 0.04   // 逐字错开
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("split-chars",
        ".card-split-chars{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;padding:0 24px}" +
        ".card-split-chars .h{font:700 36px/1.1 system-ui,sans-serif;" +
        "color:#0f172a;letter-spacing:-0.01em;white-space:nowrap;" +
        "font-kerning:none;text-rendering:optimizeSpeed}");
      stage.innerHTML = '<div class="card-split-chars"><div class="h">Hello, world</div></div>';
      var el = ctx.q(".h");
      var split = SplitText.create(el, { type: "chars", aria: "auto" });
      return gsap.from(split.chars, {
        y: 40, autoAlpha: 0, rotateZ: 8,
        ease: "back.out(1.7)", duration: 0.6, stagger: 0.04
      });
    }
  });

  /* ─────────────────────── split-words ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "split-words",
    group: "SplitText",
    title_cn: "逐词入场",
    title_en: "SplitText (words)",
    skill: "gsap-plugins",
    hint: "type:\"words\" 按单词拆分，整词为单位错开放大淡入——比逐字更克制、更适合长句。",
    prompt: "一句话被按单词拆开，每个单词作为整体从透明、缩小到 0.8 倍、略微下沉的状态错开约 0.12 秒放大淡入归位，使用 power3.out 缓动；整句播完停顿后重播。",
    code: `const split = SplitText.create(el, { type: "words", aria: "auto" });
gsap.from(split.words, {
  autoAlpha: 0,
  y: 18,
  scale: 0.8,
  transformOrigin: "50% 100%",
  ease: "power3.out",
  duration: 0.5,
  stagger: 0.12   // 逐词错开
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("split-words",
        ".card-split-words{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;padding:0 28px}" +
        ".card-split-words .h{font:600 26px/1.3 system-ui,sans-serif;" +
        "color:#0f172a;text-align:center;max-width:280px}" +
        ".card-split-words .h .word{display:inline-block}");
      stage.innerHTML = '<div class="card-split-words"><div class="h">Design is how it works</div></div>';
      var el = ctx.q(".h");
      var split = SplitText.create(el, { type: "words", wordsClass: "word", aria: "auto" });
      return gsap.from(split.words, {
        autoAlpha: 0, y: 18, scale: 0.8, transformOrigin: "50% 100%",
        ease: "power3.out", duration: 0.5, stagger: 0.12
      });
    }
  });

  /* ─────────────────────── split-lines ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "split-lines",
    group: "SplitText",
    title_cn: "逐行遮罩揭示",
    title_en: "SplitText (lines + mask)",
    skill: "gsap-plugins",
    hint: "type:\"lines\" 配 mask:\"lines\"：每行包一层 overflow:clip 遮罩，行从遮罩底部滑入揭示。",
    prompt: "一段三行的文字，每一行都被包在一层裁切遮罩里；逐行从遮罩下边缘向上滑入显现，每行之间错开约 0.15 秒，使用 power4.out 缓动，整段播完停顿后重播。",
    code: `const split = SplitText.create(el, {
  type: "lines",
  mask: "lines"   // 每行额外包一层 overflow:clip 遮罩
});
gsap.from(split.lines, {
  yPercent: 110,   // 从遮罩底部滑入
  duration: 0.7,
  ease: "power4.out",
  stagger: 0.15
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("split-lines",
        ".card-split-lines{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;padding:0 32px}" +
        ".card-split-lines .h{font:600 22px/1.45 system-ui,sans-serif;" +
        "color:#0f172a;max-width:268px;text-align:left}");
      stage.innerHTML = '<div class="card-split-lines"><div class="h">' +
        'We build calm tools for restless makers, one honest pixel at a time.' +
        '</div></div>';
      var el = ctx.q(".h");
      var split = SplitText.create(el, { type: "lines", mask: "lines" });
      return gsap.from(split.lines, {
        yPercent: 110, duration: 0.7, ease: "power4.out", stagger: 0.15
      });
    }
  });

  /* ─────────────────────── split-wave ─────────────────────── */
  window.GSAP_CARDS.push({
    id: "split-wave",
    group: "SplitText",
    title_cn: "彩色波浪",
    title_en: "SplitText (chars wave)",
    skill: "gsap-plugins",
    hint: "拆成字符后用 yoyo+repeat:-1 的连续 timeline 让每个字符上下浮动并循环变色，形成滚动波浪。",
    prompt: "一行标题被拆成单个字符，所有字符持续上下起伏，相邻字符之间有相位差形成一道从左向右滚动的波浪；同时字符颜色在一组渐变色之间循环流动，永不停止地循环。",
    code: `const split = SplitText.create(el, { type: "chars" });
const tl = gsap.timeline({ repeat: -1 });
// 上下浮动的波浪（相邻字符相位差由 stagger 产生）
tl.to(split.chars, {
  yPercent: -45,
  color: "#22d3ee",
  duration: 0.6,
  ease: "sine.inOut",
  yoyo: true,
  repeat: 1,
  stagger: { each: 0.06, from: "start" }
}, 0);
return tl;`,
    kind: "loop",
    init: function (stage, ctx) {
      injectStyle("split-wave",
        ".card-split-wave{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;padding:0 24px;" +
        "background:radial-gradient(120% 120% at 50% 50%,#0f172a,#020617)}" +
        ".card-split-wave .h{font:800 38px/1 system-ui,sans-serif;" +
        "color:#e2e8f0;letter-spacing:0.04em;white-space:nowrap;" +
        "font-kerning:none;text-rendering:optimizeSpeed}" +
        ".card-split-wave .h .ch{display:inline-block}");
      stage.innerHTML = '<div class="card-split-wave"><div class="h">~ WAVES ~</div></div>';
      var el = ctx.q(".h");
      var split = SplitText.create(el, { type: "chars", charsClass: "ch" });
      var tl = gsap.timeline({ repeat: -1 });
      tl.to(split.chars, {
        yPercent: -45,
        color: "#22d3ee",
        duration: 0.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
        stagger: { each: 0.06, from: "start" }
      }, 0);
      return tl;
    }
  });
})();
