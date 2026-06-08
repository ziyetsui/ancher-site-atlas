// Atlas viewer shell — frames a pristine direction page and adds atlas chrome
// (back to gallery, prev/next between directions, copy prompt). Keeps the
// generated index.html files free of any atlas-specific links.
(async function () {
  const $ = (s) => document.querySelector(s);
  const params = new URLSearchParams(location.search);

  let dirs;
  try {
    dirs = (await (await fetch("registry.json", { cache: "no-store" })).json()).directions || [];
  } catch (e) {
    document.body.innerHTML =
      '<p style="color:#fff;padding:20px;font-family:sans-serif">无法加载 registry.json —— ' +
      '请从仓库根目录起服务（<code>python3 -m http.server</code>）后访问 /site/view.html。</p>';
    return;
  }
  if (!dirs.length) return;

  // embed mode: this shell is framed inside the gallery's in-page overlay.
  const embed = params.get("embed");
  const sfx = embed ? "&embed=1" : "";
  if (embed) {
    const home = $(".home");
    if (home) {
      home.textContent = "✕ 关闭";
      home.setAttribute("title", "关闭查看器");
      home.addEventListener("click", (e) => {
        e.preventDefault();
        try { window.parent.postMessage({ type: "atlas-close" }, "*"); } catch (_) {}
      });
    }
  }

  let idx = Math.max(0, dirs.findIndex((d) => d.id === params.get("id")));
  if (idx < 0) idx = 0;

  function render() {
    const d = dirs[idx];
    const prev = dirs[(idx - 1 + dirs.length) % dirs.length];
    const next = dirs[(idx + 1) % dirs.length];

    $("#t-cn").textContent = d.name_cn || d.id;
    $("#t-en").textContent = d.name_en || "";
    $("#frame").src = d.paths.live;
    $("#b-design").href = d.paths.design;
    $("#b-raw").href = d.paths.live;
    document.title = `${d.name_cn} · Atlas`;

    const prevA = $(".prev"), nextA = $(".next");
    prevA.href = `view.html?id=${prev.id}${sfx}`;
    nextA.href = `view.html?id=${next.id}${sfx}`;
    prevA.title = `上一个：${prev.name_cn}`;
    nextA.title = `下一个：${next.name_cn}`;

    // keep the URL in sync without reloading (so back/refresh behaves)
    history.replaceState(null, "", `view.html?id=${d.id}${sfx}`);
    // when embedded, tell the gallery so its address bar tracks the current direction
    if (embed) { try { window.parent.postMessage({ type: "atlas-nav", id: d.id }, "*"); } catch (_) {} }
  }

  function go(delta) {
    idx = (idx + delta + dirs.length) % dirs.length;
    render();
  }

  $(".prev").addEventListener("click", (e) => { e.preventDefault(); go(-1); });
  $(".next").addEventListener("click", (e) => { e.preventDefault(); go(1); });

  // keyboard ←/→ to move between directions (ignore when the prompt modal is open)
  document.addEventListener("keydown", (e) => {
    if (!$("#prompt-modal").hidden) return;
    if (e.key === "ArrowLeft") go(-1);
    else if (e.key === "ArrowRight") go(1);
  });

  const copyBtn = $("#b-copy");
  copyBtn.addEventListener("click", async () => {
    const d = dirs[idx];
    try {
      const txt = await (await fetch(d.paths.prompt, { cache: "no-store" })).text();
      await navigator.clipboard.writeText(txt);
      copyBtn.textContent = "已复制 ✓"; copyBtn.classList.add("copied");
      setTimeout(() => { copyBtn.textContent = "复制 Prompt"; copyBtn.classList.remove("copied"); }, 1800);
    } catch (e) {
      copyBtn.textContent = "已在新标签打开 →";
      window.open(d.paths.prompt, "_blank");
      setTimeout(() => { copyBtn.textContent = "复制 Prompt"; }, 2400);
    }
  });

  // ---- in-context component inspector ---------------------------------------
  // Annotates THE CURRENT page (the framed direction page) by reading its
  // [data-module] sections — outlines + labels each on the page + a side panel.
  const MODULE_WHY = {
    nav: "顶栏导航:让访客一眼看到全站结构与入口",
    hero: "首屏:5 秒说清「谁、能帮谁、为什么可信」",
    one_liner: "一句话定位", avatar: "头像 / 个人标识", social_links: "社交链接",
    speaking: "演讲 / 播客:第三方场合背书,扩大可信",
    writing: "文章索引:用持续输出证明思考深度",
    services: "服务 / 报价:说清能提供什么、怎么合作",
    faq: "常见问题:提前消解顾虑,降低转化阻力",
    footer: "页脚:收口 + 最后一次 CTA 与联系入口",
    selected_work: "作品 / 项目:用具体案例证明能力", experience: "工作经历",
    logos_press: "客户 / 媒体露出", testimonials: "客户证言", metrics: "数据成就:用硬指标建立可信",
    credentials: "资历 / 认证 / 获奖", story: "个人故事:加深度与记忆点",
    why_i_do_this: "为什么做这个", beliefs: "信条 / 原则", currently_building: "现在在做什么(Now)",
    book_a_call: "预约通话", hire_me: "雇我", subscribe: "订阅", contact: "转化:把访客变成对话",
    contact_form: "联系表单", download_resume: "下载简历", now_page: "Now 页", reading_list: "在读",
    tools: "工具 / 技术栈", photo_wall: "照片墙", selected_quotes: "金句",
  };

  let inspectOn = false;
  const inspector = $("#inspector"), insBtn = $("#b-components");

  function frameDoc() { try { return $("#frame").contentDocument; } catch (e) { return null; } }

  function injectLabels(doc) {
    removeLabels(doc);
    const els = [...doc.querySelectorAll("[data-module]")];
    els.forEach((el, i) => { el.dataset.atlasIdx = String(i + 1).padStart(2, "0"); });
    const st = doc.createElement("style");
    st.id = "atlas-inspect";
    st.textContent =
      '[data-module]{outline:2px dashed rgba(255,90,90,.85)!important;outline-offset:-2px!important;position:relative!important}' +
      '[data-module]::before{content:attr(data-atlas-idx) "  " attr(data-module) " · " attr(data-variant);' +
      'position:absolute!important;top:0;left:0;z-index:99998;margin:0;' +
      'background:#16161a;color:#fff;font:700 11px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;' +
      'letter-spacing:.2px;padding:3px 8px;border-radius:0 0 8px 0;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.35)}';
    doc.head.appendChild(st);
    return els;
  }
  function removeLabels(doc) {
    if (!doc) return;
    const s = doc.getElementById("atlas-inspect");
    if (s) s.remove();
    doc.querySelectorAll("[data-atlas-idx]").forEach((e) => e.removeAttribute("data-atlas-idx"));
  }

  function buildPanel(doc, els) {
    const d = dirs[idx];
    if (!els.length) {
      inspector.innerHTML =
        '<h3>本页组件</h3><p class="sub">这个方向页还没标注 <code>data-module</code>。标注后这里会列出它实际用到的模块、变体与解释。</p>';
      return;
    }
    let html = `<h3>本页组件 · ${els.length}</h3>` +
      '<p class="sub">这是<b>当前这个页面</b>用到的模块。点任一项滚动到对应区块;也可在别的风格里对照看。</p>';
    els.forEach((el, i) => {
      const m = el.dataset.module, v = el.dataset.variant || "—";
      const why = MODULE_WHY[m] || "";
      html += `<button class="insp-item" data-i="${i}"><span class="n">${String(i + 1).padStart(2, "0")}</span>` +
        `<div class="mod">${m} <span class="var">· ${v}</span></div>` +
        (why ? `<div class="why">${why}</div>` : "") +
        `<a class="more" href="skins-lab.html?skin=${d.id}" target="_blank" rel="noopener">在各风格里看 ↗</a></button>`;
    });
    inspector.innerHTML = html;
    inspector.querySelectorAll(".insp-item").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (e.target.closest(".more")) return;
        const el = els[+btn.dataset.i];
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        if (el.animate) el.animate(
          [{ outlineColor: "rgba(255,90,90,1)" }, { outlineColor: "rgba(255,90,90,.2)" }, { outlineColor: "rgba(255,90,90,1)" }],
          { duration: 1000 });
      });
    });
  }

  function applyInspect() {
    const doc = frameDoc();
    if (inspectOn && doc) {
      const els = injectLabels(doc);
      buildPanel(doc, els);
      inspector.hidden = false;
    } else {
      removeLabels(doc);
      inspector.hidden = true;
    }
  }

  insBtn.addEventListener("click", () => {
    inspectOn = !inspectOn;
    insBtn.setAttribute("aria-pressed", inspectOn ? "true" : "false");
    insBtn.textContent = inspectOn ? "组件 ✓" : "组件";
    applyInspect();
  });
  // re-annotate after the iframe loads a new direction
  $("#frame").addEventListener("load", () => { if (inspectOn) applyInspect(); });

  // ---- prompt viewer modal (read prompt.md inline, no need to copy first) ----
  const modal = $("#prompt-modal"), pmBody = $("#pm-body"), pmTitle = $("#pm-title"),
        pmOpen = $("#pm-open"), pmCopy = $("#pm-copy");
  function openPrompt() {
    const d = dirs[idx];
    pmTitle.textContent = `directions/${d.id}/prompt.md`;
    pmOpen.href = d.paths.prompt;
    pmBody.textContent = "加载中…";
    modal.hidden = false;
    fetch(d.paths.prompt, { cache: "no-store" })
      .then((r) => r.text())
      .then((t) => { pmBody.textContent = t; pmBody.scrollTop = 0; pmBody.focus(); })
      .catch(() => { pmBody.textContent = "无法加载 prompt.md —— 请从仓库根目录起服务后再看。"; });
  }
  function closePrompt() { modal.hidden = true; }
  $("#b-viewprompt").addEventListener("click", openPrompt);
  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closePrompt));
  pmCopy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(pmBody.textContent);
      pmCopy.textContent = "已复制 ✓"; pmCopy.classList.add("copied");
      setTimeout(() => { pmCopy.textContent = "复制"; pmCopy.classList.remove("copied"); }, 1600);
    } catch (_) {}
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closePrompt(); });

  render();
})();
