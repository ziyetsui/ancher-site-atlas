// Image Lab — per direction: original photo → prompt → CSS changes → result.
// Joins registry.json (names/order/links) with image_lab.json (the treatments).
(async function () {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = (s) => (s == null ? "" : String(s));

  let reg, lab;
  try {
    [reg, lab] = await Promise.all([
      fetch("registry.json", { cache: "no-store" }).then((r) => r.json()),
      fetch("image_lab.json", { cache: "no-store" }).then((r) => r.json()),
    ]);
  } catch (e) {
    $("#grid").innerHTML =
      '<p class="empty">无法加载 image_lab.json —— 请从仓库根目录起服务（<code>python3 -m http.server</code>）后访问 /site/image-lab.html。</p>';
    return;
  }

  const dirs = reg.directions || [];
  const list = Array.isArray(lab) ? lab : (lab.images || []);
  const byId = Object.fromEntries(list.filter((x) => x && x.id).map((x) => [x.id, x]));
  // keep registry order; only directions that have an image treatment
  const entries = dirs.map((d) => ({ d, im: byId[d.id] })).filter((x) => x.im && !x.im.skip);

  $("#stats").innerHTML =
    `<div class="stat"><b>${entries.length}</b><span>图像处理示例</span></div>` +
    `<div class="stat"><b>纯 CSS</b><span>无改图 · 无外部工具</span></div>`;

  if (!entries.length) {
    $("#grid").innerHTML = '<p class="empty">image_lab.json 里还没有条目。</p>';
    return;
  }

  const grid = $("#grid");
  for (const { d, im } of entries) {
    const raw = `../directions/${d.id}/${im.portrait || "portrait.webp"}`;
    const fx = `../directions/${d.id}/image-fx.html`; // faithful framed reproduction
    const techHtml = (im.techniques || []).map((x) => `<span>${esc(x)}</span>`).join("");

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML =
      `<div class="chead"><span class="nm">${esc(d.name_cn || d.id)}</span>` +
      `<span class="lin">${esc(d.lineage || "")}</span>` +
      `<a class="go" href="view.html?id=${encodeURIComponent(d.id)}" target="_blank" rel="noopener">看方向页 ↗</a></div>` +
      `<div class="compare">` +
        `<figure><div class="rawthumb"><img loading="lazy" src="${raw}" alt="${esc(d.name_cn)} 原图"></div><figcaption>原图 ORIGINAL</figcaption></figure>` +
        `<div class="arrow">→</div>` +
        `<figure><div class="fxbox"><iframe class="fxframe" loading="lazy" src="${fx}" title="${esc(d.name_cn)} 效果（页面上的真实呈现）"></iframe></div><figcaption>效果 RESULT（页面上的样子）</figcaption></figure>` +
      `</div>` +
      `<div class="role"><span class="k">PROMPT · 这个风格怎么用这张图</span>${esc(im.image_role)}</div>` +
      (techHtml ? `<div class="tech">${techHtml}</div>` : "") +
      (im.overlay ? `<div class="overlay">+ 叠加:<b>${esc(im.overlay)}</b></div>` : "");
    grid.appendChild(card);
  }

  // ---- auto-fit: scale each effect iframe so the WHOLE framed photo shows (no inner scroll) ----
  function fitFrame(iframe) {
    let doc;
    try { doc = iframe.contentDocument; } catch (e) { return; }
    if (!doc || !doc.body) return;
    const vw = iframe.offsetWidth || 360, vh = iframe.offsetHeight || 620;
    let L = 1e9, T = 1e9, R = -1e9, B = -1e9, any = false;
    doc.body.querySelectorAll("*").forEach((el) => {
      const cs = doc.defaultView.getComputedStyle(el);
      if (cs.visibility === "hidden" || cs.display === "none" || +cs.opacity === 0) return;
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) return;
      if (r.width >= vw * 0.985 && r.height >= vh * 0.985) return; // skip the full-canvas wrapper / bg
      L = Math.min(L, r.left); T = Math.min(T, r.top); R = Math.max(R, r.right); B = Math.max(B, r.bottom); any = true;
    });
    if (!any) return;
    const pad = 8; L -= pad; T -= pad; R += pad; B += pad;
    const cw = R - L, ch = B - T;
    const box = iframe.parentElement.getBoundingClientRect();
    if (!box.width || !cw || !ch) return;
    const s = Math.min(box.width / cw, box.height / ch);
    const ox = (box.width - cw * s) / 2, oy = (box.height - ch * s) / 2;
    iframe.style.transform = `translate(${ox - L * s}px, ${oy - T * s}px) scale(${s})`;
  }

  const frames = [...document.querySelectorAll(".fxframe")];
  frames.forEach((f) => {
    f.addEventListener("load", () => { fitFrame(f); setTimeout(() => fitFrame(f), 400); }); // re-fit after fonts settle
    try { if (f.contentDocument && f.contentDocument.readyState === "complete") fitFrame(f); } catch (e) {}
  });
  let rt;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => frames.forEach(fitFrame), 150); });
})();
