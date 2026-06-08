// Module Atlas — renders module specimen cards grouped by category. Vanilla JS.
(async function () {
  const $ = (s, r = document) => r.querySelector(s);
  const text = (value) => value == null ? "" : String(value);

  let data;
  try {
    data = await (await fetch("modules_registry.json", { cache: "no-store" })).json();
  } catch (e) {
    $("#main").innerHTML =
      '<p style="color:#b4451f;padding:24px 0">无法加载 modules_registry.json —— 请从仓库根目录起服务' +
      '（<code>python3 -m http.server</code>）后访问 /site/modules.html。</p>';
    return;
  }

  const cats = data.categories || [];
  const mods = data.modules || [];
  const variantTotal = mods.reduce((n, m) => n + m.variants.length, 0);

  const stats = $("#stats");
  stats.replaceChildren();
  for (const [value, label] of [[cats.length, "类目"], [mods.length, "模块"], [variantTotal, "variant"]]) {
    const item = document.createElement("div");
    item.className = "stat";
    const b = document.createElement("b");
    b.textContent = value;
    const span = document.createElement("span");
    span.textContent = label;
    item.append(b, span);
    stats.appendChild(item);
  }

  const catnav = $("#catnav");
  catnav.replaceChildren();
  for (const c of cats) {
    const a = document.createElement("a");
    a.href = `#cat-${encodeURIComponent(text(c.id))}`;
    a.textContent = `${text(c.name_cn)} · ${text(c.name_en)}`;
    catnav.appendChild(a);
  }

  const tpl = $("#card-tpl");
  const main = $("#main");

  for (const c of cats) {
    const section = document.createElement("section");
    section.className = "cat";
    section.id = `cat-${text(c.id)}`;
    const head = document.createElement("div");
    head.className = "cat-head";
    const h2 = document.createElement("h2");
    h2.textContent = text(c.name_cn);
    const en = document.createElement("span");
    en.className = "en";
    en.textContent = text(c.name_en);
    const blurb = document.createElement("span");
    blurb.className = "blurb";
    blurb.textContent = text(c.blurb);
    const grid = document.createElement("div");
    grid.className = "grid";
    head.append(h2, en, blurb);
    section.append(head, grid);

    for (const m of mods.filter((x) => x.cat === c.id)) {
      const node = tpl.content.cloneNode(true);
      const href = `../modules/${encodeURIComponent(text(m.cat))}/${encodeURIComponent(text(m.id))}.html`;
      $("iframe", node).src = href;
      $("iframe", node).title = `${m.name_cn} 预览`;
      const open = $("a.open", node);
      open.href = href;
      open.setAttribute("aria-label", `查看 ${m.name_cn} 的全部 variant`);
      const name = $(".name", node);
      name.textContent = text(m.name_cn);
      const path = document.createElement("span");
      path.className = "path";
      path.textContent = ` ${text(m.cat)}/${text(m.id)}`;
      name.appendChild(path);
      const chips = $(".chips", node);
      for (const v of m.variants) {
        const s = document.createElement("span");
        s.textContent = v;
        chips.appendChild(s);
      }
      grid.appendChild(node);
    }
    main.appendChild(section);
  }
})();
