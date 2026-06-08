/* GSAP 特效图鉴 — Text family (Scramble / Text)
 * group: "Text"  ·  skill: "gsap-plugins"
 * 每张卡完全 scope 到传入的 stage（ctx.q / ctx.qa），自包含 DOM + 就近样式。
 * 依赖 ScrambleTextPlugin / TextPlugin（hub 已 registerPlugin）。
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

  /* ──────────────────────── scramble-decode ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "scramble-decode",
    group: "Text",
    title_cn: "乱码解码",
    title_en: "ScrambleText",
    skill: "gsap-plugins",
    hint: "文字像被解密一样，从一串随机乱码逐字收敛到目标文案。",
    prompt: "一行文字以随机乱码开始，在约 2 秒内像被解密一样逐字稳定为目标句子「DECODING SIGNAL…」，字符从左到右先后落定，整体科技终端感，结束后稍停再重新解码。",
    code: `gsap.to(".line", {
  duration: 2,
  scrambleText: {
    text: "DECODING SIGNAL…",
    chars: "upperCase",
    revealDelay: 0.4,
    speed: 0.6
  },
  ease: "none"
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("scramble-decode",
        ".card-scramble-decode{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;padding:0 24px;background:#0b1220}" +
        ".card-scramble-decode .line{font-family:'SFMono-Regular',ui-monospace,Menlo,Consolas,monospace;" +
        "font-size:22px;font-weight:700;letter-spacing:.04em;color:#34d399;" +
        "text-shadow:0 0 14px rgba(52,211,153,.45)}");
      stage.innerHTML =
        '<div class="card-scramble-decode"><div class="line">DECODING SIGNAL…</div></div>';
      var line = ctx.q(".line");
      if (ctx.reduced) {
        line.textContent = "DECODING SIGNAL…";
        return;
      }
      return gsap.to(line, {
        duration: 2,
        scrambleText: { text: "DECODING SIGNAL…", chars: "upperCase", revealDelay: 0.4, speed: 0.6 },
        ease: "none"
      });
    }
  });

  /* ──────────────────────── scramble-charset ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "scramble-charset",
    group: "Text",
    title_cn: "自定义字符集",
    title_en: "scramble chars",
    skill: "gsap-plugins",
    hint: "用 chars 指定乱码时翻滚的字符池（如 01 数字雨 / 符号），改变质感。",
    prompt: "一段数字编号在乱码翻滚时只使用 0 和 1 两个字符，营造二进制数据流的质感，约 1.6 秒收敛为「01100110 ONLINE」，随后停顿并循环重播。",
    code: `gsap.to(".line", {
  duration: 1.6,
  scrambleText: {
    text: "01100110 ONLINE",
    chars: "01",       // 只用 0 和 1 翻滚
    revealDelay: 0.2,
    tweenLength: false
  }
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("scramble-charset",
        ".card-scramble-charset{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;padding:0 24px;background:#020617}" +
        ".card-scramble-charset .line{font-family:'SFMono-Regular',ui-monospace,Menlo,Consolas,monospace;" +
        "font-size:21px;font-weight:700;letter-spacing:.08em;color:#38bdf8;" +
        "text-shadow:0 0 12px rgba(56,189,248,.5)}");
      stage.innerHTML =
        '<div class="card-scramble-charset"><div class="line">01100110 ONLINE</div></div>';
      var line = ctx.q(".line");
      if (ctx.reduced) {
        line.textContent = "01100110 ONLINE";
        return;
      }
      return gsap.to(line, {
        duration: 1.6,
        scrambleText: { text: "01100110 ONLINE", chars: "01", revealDelay: 0.2, tweenLength: false },
        ease: "none"
      });
    }
  });

  /* ──────────────────────── text-type ──────────────────────── */
  window.GSAP_CARDS.push({
    id: "text-type",
    group: "Text",
    title_cn: "打字替换",
    title_en: "TextPlugin",
    skill: "gsap-plugins",
    hint: "TextPlugin 逐字符替换内容，像有人在实时打字（可指定光标）。",
    prompt: "一段文案像被实时敲出来：先清空，再逐字符打出「我们正在构建你的个人网站」，速度均匀，末尾带一个闪烁的方块光标，打完停顿后清空重新打字循环。",
    code: `// TextPlugin 逐字符替换，cursor 作为光标字符
gsap.to(".line", {
  duration: 1.8,
  text: { value: "我们正在构建你的个人网站", delimiter: "" },
  ease: "none"
});`,
    kind: "oneshot",
    init: function (stage, ctx) {
      injectStyle("text-type",
        ".card-text-type{position:absolute;inset:0;display:flex;align-items:center;" +
        "justify-content:center;padding:0 26px;background:#fafaf9}" +
        ".card-text-type .line{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;" +
        "font-size:19px;font-weight:600;color:#1c1917;letter-spacing:.01em}" +
        ".card-text-type .cur{display:inline-block;width:.55em;height:1.05em;margin-left:2px;" +
        "vertical-align:-.15em;background:#f97316;animation:cardtextcur .9s steps(1) infinite}" +
        "@keyframes cardtextcur{50%{opacity:0}}");
      var target = "我们正在构建你的个人网站";
      stage.innerHTML =
        '<div class="card-text-type"><div><span class="line"></span><span class="cur"></span></div></div>';
      var line = ctx.q(".line");
      if (ctx.reduced) {
        line.textContent = target;
        return;
      }
      line.textContent = "";
      return gsap.to(line, {
        duration: 1.8,
        text: { value: target, delimiter: "" },
        ease: "none"
      });
    }
  });
})();
