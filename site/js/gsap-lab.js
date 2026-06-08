// GSAP Motion Lab — hub runtime. Vanilla JS. Drives the demo gallery + the effect catalog.
// Catalog cards come from site/gsap-cards/<family>.js files that push into window.GSAP_CARDS
// (see site/gsap-cards/CONTRACT.md). gsap + all plugins are already loaded & registered in the page head.
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // section order for the catalog (group key -> heading). Must match CONTRACT.md.
  const GROUPS = [
    ["Core", "核心补间 · Core / Tween"],
    ["Easing", "缓动 · Easing"],
    ["Stagger", "交错 · Stagger"],
    ["Timeline", "时间轴 · Timeline"],
    ["ScrollTrigger", "滚动触发 · ScrollTrigger"],
    ["SplitText", "文字拆分 · SplitText"],
    ["Text", "文本动效 · Scramble / Text"],
    ["Flip", "布局过渡 · Flip"],
    ["Draggable", "拖拽与惯性 · Draggable / Inertia"],
    ["Observer", "统一输入 · Observer"],
    ["MotionPath", "路径运动 · MotionPath"],
    ["DrawSVG", "描边 · DrawSVG"],
    ["MorphSVG", "形变 · MorphSVG"],
    ["Physics2D", "物理 · Physics2D"],
    ["Utils", "工具与响应式 · Utils / matchMedia"],
  ];
  const FAMILIES = ["core","easing","stagger","timeline","scrolltrigger","splittext",
    "scrambletext","flip","draggable","observer","motionpath","drawsvg","morphsvg","physics","utils"];

  // ───────────────────────── Section A: demo gallery ─────────────────────────
  let DEMOS = [];
  async function renderDemos() {
    const wrap = $("#demos");
    try {
      const res = await fetch("gsap_registry.json", { cache: "no-store" });
      const data = await res.json();
      DEMOS = data.demos || [];
    } catch (e) { DEMOS = []; }

    $("#demo-cnt").textContent = DEMOS.length ? `${DEMOS.length} 页` : "";
    if (!DEMOS.length) {
      wrap.innerHTML = '<div class="empty">演示页清单 <code>gsap_registry.json</code> 尚未生成,或未从仓库根目录 serve。运行 <code>python3 scripts/build_registry.py</code> 后刷新。</div>';
      return;
    }
    const tpl = $("#demo-tpl");
    DEMOS.forEach((d, i) => {
      const n = tpl.content.cloneNode(true);
      const img = $("img", n), ph = $(".ph", n);
      if (d.paths && d.paths.sample) {
        img.src = d.paths.sample; img.alt = `${d.name_cn || d.id} 截图`;
        img.addEventListener("error", () => { img.remove(); ph.style.display = "grid"; });
        ph.style.display = "none";
      } else { img.remove(); }
      $(".name-cn", n).textContent = d.name_cn || d.id;
      $(".en", n).textContent = d.name_en || "";
      $(".style", n).textContent = d.style || "";
      $(".focus", n).textContent = d.focus || "";
      const chips = $(".chips", n);
      (d.plugins || []).forEach((p) => { const s = document.createElement("span"); s.textContent = p; chips.appendChild(s); });
      const open = (e) => { if (e && (e.metaKey || e.ctrlKey)) return; if (e) e.preventDefault(); openViewer(i); };
      $(".demo", n).addEventListener("click", (e) => { if (e.target.closest(".acts")) return; open(e); });
      $(".live", n).addEventListener("click", open);
      $(".raw", n).href = d.paths ? d.paths.live : "#";
      const cp = $(".copyp", n);
      cp.addEventListener("click", (e) => { e.stopPropagation(); copy(cp, d.prompt || ""); });
      wrap.appendChild(n);
    });
  }

  // ───────────────────────── live demo viewer ─────────────────────────
  let vIdx = -1;
  const overlay = $("#viewer"), vframe = $("#v-frame");
  function openViewer(i) {
    if (i < 0 || i >= DEMOS.length) return;
    vIdx = i; const d = DEMOS[i];
    vframe.src = d.paths.live;
    $("#v-title").innerHTML = `${d.name_cn || d.id} <small>${d.name_en || ""}</small>`;
    $("#v-raw").href = d.paths.live;
    overlay.hidden = false; document.body.style.overflow = "hidden";
  }
  function closeViewer() { overlay.hidden = true; vframe.src = "about:blank"; document.body.style.overflow = ""; }
  $("#v-close").addEventListener("click", closeViewer);
  $("#v-prev").addEventListener("click", () => openViewer((vIdx - 1 + DEMOS.length) % DEMOS.length));
  $("#v-next").addEventListener("click", () => openViewer((vIdx + 1) % DEMOS.length));
  $("#v-prompt").addEventListener("click", (e) => copy(e.currentTarget, (DEMOS[vIdx] || {}).prompt || ""));
  $("#v-source").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    try { const t = await (await fetch(DEMOS[vIdx].paths.live, { cache: "no-store" })).text(); copy(btn, t); }
    catch (_) { window.open(DEMOS[vIdx].paths.live, "_blank"); }
  });
  document.addEventListener("keydown", (e) => { if (!overlay.hidden && e.key === "Escape") closeViewer(); });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeViewer(); });

  // ───────────────────────── Section B: effect catalog ─────────────────────────
  function loadFamilies() {
    return Promise.all(FAMILIES.map((f) => new Promise((resolve) => {
      const s = document.createElement("script");
      s.src = `gsap-cards/${f}.js`;
      s.onload = resolve; s.onerror = resolve; // missing family = fewer cards, not a crash
      document.head.appendChild(s);
    })));
  }

  function renderCatalog() {
    const cards = (window.GSAP_CARDS || []).slice();
    const body = $("#catalog-body");
    $("#card-cnt").textContent = cards.length ? `${cards.length} 个特效` : "";
    if (!cards.length) {
      body.innerHTML = '<div class="empty">特效卡尚未生成(<code>site/gsap-cards/*.js</code> 为空)。</div>';
      return;
    }
    const byGroup = new Map();
    for (const c of cards) { const k = byGroup.has(c.group) ? c.group : (GROUPS.some(g => g[0] === c.group) ? c.group : "其它"); if (!byGroup.has(k)) byGroup.set(k, []); byGroup.get(k).push(c); }
    const order = GROUPS.map(g => g[0]).concat(["其它"]);
    const titleOf = (k) => { const g = GROUPS.find(x => x[0] === k); return g ? g[1] : "其它 · Misc"; };

    const tpl = $("#card-tpl");
    const toObserve = [];
    for (const key of order) {
      const list = byGroup.get(key); if (!list || !list.length) continue;
      const head = document.createElement("div");
      head.className = "grouphead";
      head.innerHTML = `<h3>${titleOf(key)}</h3><span class="gc">${list.length}</span><span class="line"></span>`;
      body.appendChild(head);
      const grid = document.createElement("div"); grid.className = "cards"; body.appendChild(grid);

      list.forEach((c, i) => {
        const n = tpl.content.cloneNode(true);
        const stage = $(".fx-stage", n);
        $(".num", n).textContent = String(i + 1).padStart(2, "0");
        $("h4", n).textContent = c.title_cn || c.id;
        $(".en", n).textContent = c.title_en || "";
        $(".skill", n).textContent = c.skill || "";
        $(".hint", n).textContent = c.hint || "";
        $("pre", n).textContent = (c.code || "").trim();
        if (c.kind === "interactive") { const b = document.createElement("span"); b.className = "badge-int"; b.textContent = "互动"; stage.appendChild(b); }
        const cp = $(".copyp", n), cc = $(".copyc", n), rp = $(".replay", n);
        cp.addEventListener("click", () => copy(cp, c.prompt || ""));
        cc.addEventListener("click", () => copy(cc, c.code || ""));
        const st = { card: c, stage, anim: null, inited: false, inView: false };
        rp.addEventListener("click", () => { if (!st.inited) initCard(st); else if (st.anim) { try { st.anim.restart(); } catch (_) {} } });
        stage.__st = st;
        grid.appendChild(n);
        toObserve.push(stage);
      });
    }

    const io = new IntersectionObserver((entries) => {
      for (const ent of entries) {
        const st = ent.target.__st; if (!st) continue;
        st.inView = ent.isIntersecting;
        if (ent.isIntersecting) {
          if (!st.inited) initCard(st);
          else if (st.anim && st.card.kind !== "interactive" && !reduced) { try { st.card.kind === "oneshot" ? st.anim.restart() : st.anim.play(); } catch (_) {} }
        } else if (st.anim && !reduced) { try { st.anim.pause(); } catch (_) {} }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.18 });
    toObserve.forEach((s) => io.observe(s));
  }

  function initCard(st) {
    st.inited = true;
    const c = st.card, stage = st.stage;
    const ctx = { q: (s) => stage.querySelector(s), qa: (s) => [...stage.querySelectorAll(s)], reduced };
    try {
      const anim = c.init(stage, ctx);
      st.anim = anim || null;
      if (!anim) return; // interactive / self-managed
      if (reduced) { try { anim.progress(c.kind === "loop" ? 0 : 1).pause(); } catch (_) {} return; }
      if (c.kind === "oneshot") {
        anim.eventCallback("onComplete", () => { if (st.inView) gsap.delayedCall(1.1, () => { if (st.inView) try { anim.restart(); } catch (_) {} }); });
        anim.restart();
      } else { anim.play(); } // loop (author set repeat:-1) plays continuously
    } catch (e) {
      stage.innerHTML = '<div style="font-family:var(--mono);font-size:11px;color:var(--subtle)">init 失败</div>';
      console.warn("card init failed:", c.id, e);
    }
  }

  // ───────────────────────── shared helpers ─────────────────────────
  async function copy(btn, text) {
    const old = btn.textContent;
    try { await navigator.clipboard.writeText(text); btn.textContent = "已复制 ✓"; btn.classList.add("copied"); }
    catch (_) { btn.textContent = "复制失败"; }
    setTimeout(() => { btn.textContent = old; btn.classList.remove("copied"); }, 1600);
  }

  // seg jump
  document.querySelectorAll("#seg button").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll("#seg button").forEach((x) => x.classList.toggle("on", x === b));
    const el = document.getElementById(b.dataset.jump); if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }));

  // ───────────────────────── boot ─────────────────────────
  renderDemos();
  loadFamilies().then(renderCatalog);
})();
