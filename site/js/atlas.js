// Personal Site Style Atlas — gallery renderer. Vanilla JS, no deps.
(async function () {
  const $ = (s, r = document) => r.querySelector(s);

  let data;
  try {
    const res = await fetch("registry.json", { cache: "no-store" });
    data = await res.json();
  } catch (e) {
    $("#view-directions").innerHTML =
      '<p style="color:#b4451f">无法加载 registry.json —— 请通过本地服务器打开' +
      '（<code>python3 -m http.server</code> 在仓库根目录，然后访问 /site/）。</p>';
    return;
  }

  const dirs = data.directions || [];
  $("#stats").innerHTML =
    `<div class="stat"><b>${dirs.length}</b><span>设计方向</span></div>` +
    `<div class="stat"><b>5</b><span>模块类目</span></div>`;
  $("#dir-count").textContent = dirs.length;

  const tpl = $("#card-tpl");
  const grid = $("#view-directions");

  for (const d of dirs) {
    const node = tpl.content.cloneNode(true);
    const view = `view.html?id=${d.id}`;
    const thumb = $(".thumb", node);
    thumb.href = view;
    $("img", thumb).src = d.paths.sample;
    $("img", thumb).alt = `${d.name_cn} 示例页截图`;
    $(".lineage", node).textContent = d.lineage || "";
    $(".name-cn", node).textContent = d.name_cn || d.id;
    $(".name-en", node).textContent = d.name_en || "";
    $(".desc", node).textContent = d.description || "";

    const sw = $(".swatches", node);
    for (const key of ["canvas", "surface", "ink", "accent", "block-acid", "block-blue", "block-pink"]) {
      if (d.swatches && d.swatches[key]) {
        const i = document.createElement("i");
        i.style.background = d.swatches[key];
        i.title = `${key}: ${d.swatches[key]}`;
        sw.appendChild(i);
      }
    }

    const tags = $(".tags", node);
    for (const t of d.best_for || []) {
      const s = document.createElement("span");
      s.textContent = t;
      tags.appendChild(s);
    }

    $(".live", node).href = view;
    $(".design", node).href = d.paths.design;

    // open the direction inside the in-page overlay instead of navigating away
    const openInline = (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // let power-users open a tab
      e.preventDefault();
      openViewer(d.id);
    };
    thumb.addEventListener("click", openInline);
    $(".live", node).addEventListener("click", openInline);

    const copyBtn = $(".copy", node);
    copyBtn.addEventListener("click", async () => {
      try {
        const txt = await (await fetch(d.paths.prompt, { cache: "no-store" })).text();
        await navigator.clipboard.writeText(txt);
        copyBtn.textContent = "已复制 ✓";
        copyBtn.classList.add("copied");
        setTimeout(() => { copyBtn.textContent = "复制 Prompt"; copyBtn.classList.remove("copied"); }, 1800);
      } catch (e) {
        copyBtn.textContent = "已在新标签打开 →";
        window.open(d.paths.prompt, "_blank");
        setTimeout(() => { copyBtn.textContent = "复制 Prompt"; }, 2400);
      }
    });

    grid.appendChild(node);
  }

  // ---- in-page viewer overlay --------------------------------------------
  // Frames view.html (with its prev/next + 组件 inspector) so opening a
  // direction never spawns a new page — you stay on the gallery the whole time.
  const overlay = $("#viewer");
  const vframe = $("#viewer-frame");

  function openViewer(id, push) {
    if (!id) return;
    vframe.src = `view.html?id=${encodeURIComponent(id)}&embed=1`;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    if (push !== false) history.pushState({ viewer: id }, "", `?id=${encodeURIComponent(id)}`);
  }
  function closeViewer(push) {
    if (overlay.hidden) return;
    overlay.hidden = true;
    vframe.src = "about:blank";
    document.body.style.overflow = "";
    if (push !== false) history.pushState({}, "", location.pathname);
  }

  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeViewer(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !overlay.hidden) closeViewer(); });
  // the framed shell talks back: ✕ closes, prev/next keeps the gallery URL in sync
  window.addEventListener("message", (e) => {
    const m = e.data;
    if (!m || typeof m !== "object") return;
    if (m.type === "atlas-close") closeViewer();
    else if (m.type === "atlas-nav" && m.id) history.replaceState({ viewer: m.id }, "", `?id=${encodeURIComponent(m.id)}`);
  });
  // browser back/forward toggles the overlay; deep links (?id=…) open it on load
  window.addEventListener("popstate", () => {
    const id = new URLSearchParams(location.search).get("id");
    if (id) openViewer(id, false); else closeViewer(false);
  });
  const initId = new URLSearchParams(location.search).get("id");
  if (initId && dirs.some((d) => d.id === initId)) openViewer(initId, false);

  // tab switching (accessible: aria-selected, roving tabindex, arrow keys)
  const tabs = Array.from(document.querySelectorAll(".tab"));
  function selectTab(tab) {
    // the modules tab is a full page of its own — navigate there
    if (tab.dataset.view === "modules") { window.location.href = "modules.html"; return; }
    if (tab.dataset.view === "skins") { window.location.href = "skins-lab.html"; return; }
    if (tab.dataset.view === "motion") { window.location.href = "motion-lab.html"; return; }
    if (tab.dataset.view === "image") { window.location.href = "image-lab.html"; return; }
    if (tab.dataset.view === "gsap") { window.location.href = "gsap-lab.html"; return; }
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    const view = tab.dataset.view;
    $("#view-directions").hidden = view !== "directions";
    $("#view-modules").hidden = view !== "modules";
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });
})();
