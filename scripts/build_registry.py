#!/usr/bin/env python3
"""Build site/registry.json by scanning directions/*/DESIGN.md frontmatter.

No third-party deps (PyYAML not assumed). A small, format-specific parser that
understands exactly the frontmatter shape this repo uses:
  - top-level `key: value` scalars (optionally quoted)
  - inline lists: `key: [a, b, c]`
  - one-level nested maps (e.g. `colors:` then 2-space-indented `name: "#hex"`)
  - a folded scalar `description: >` spanning indented lines

Paths in the output are written relative to the `site/` folder. The gallery
still needs a local server because it fetches JSON files.
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIRECTIONS = os.path.join(ROOT, "directions")
OUT = os.path.join(ROOT, "site", "registry.json")
MODULES_REGISTRY = os.path.join(ROOT, "site", "modules_registry.json")
SKINS_REGISTRY = os.path.join(ROOT, "site", "skins.json")
GSAP_DEMOS = os.path.join(ROOT, "gsap-demos")
OUT_GSAP = os.path.join(ROOT, "site", "gsap_registry.json")

# curated order for the GSAP demo gallery (see docs/superpowers/specs/2026-06-03-gsap-lab-design.md §3)
GSAP_ORDER = [
    "kinetic-hero", "pinned-story", "parallax-landscape", "draggable-gallery",
    "flip-grid", "svg-journey", "morph-brand", "sticky-product",
    "marquee-poster", "scramble-terminal", "physics-playground",
    "smooth-editorial", "motionpath-orbit", "cursor-studio",
]
GSAP_REQUIRED_META = ["id", "name_cn", "name_en", "plugins", "focus"]

# fields surfaced to the gallery
SCALARS = ["id", "name_cn", "name_en", "lineage", "accent"]
SWATCH_KEYS = ["canvas", "surface", "ink", "ink-muted", "accent", "block-acid",
               "block-blue", "block-pink", "border", "hairline"]


def parse_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not m:
        return {}
    body = m.group(1)
    lines = body.split("\n")
    data, i = {}, 0
    while i < len(lines):
        line = lines[i]
        if not line.strip() or line.lstrip().startswith("#"):
            i += 1
            continue
        # top-level key (no indent)
        m2 = re.match(r"^(\w[\w-]*):\s*(.*)$", line)
        if not m2:
            i += 1
            continue
        key, val = m2.group(1), m2.group(2).strip()
        if val == ">":  # folded scalar — collect indented following lines
            chunk, i = [], i + 1
            while i < len(lines) and (lines[i].startswith("  ") or not lines[i].strip()):
                if lines[i].strip():
                    chunk.append(lines[i].strip())
                i += 1
            data[key] = " ".join(chunk)
            continue
        if val == "":  # nested map — collect 2-space-indented children
            child, i = {}, i + 1
            while i < len(lines) and (lines[i].startswith("  ") and not lines[i].startswith("    ")):
                mm = re.match(r"^\s+([\w-]+):\s*(.*)$", lines[i])
                if mm:
                    child[mm.group(1)] = _scalar(mm.group(2))
                i += 1
            data[key] = child
            continue
        if val.startswith("[") and val.endswith("]"):  # inline list
            inner = val[1:-1].strip()
            data[key] = [_scalar(x) for x in inner.split(",")] if inner else []
            i += 1
            continue
        data[key] = _scalar(val)
        i += 1
    return data


def _scalar(s):
    s = s.strip()
    if len(s) >= 2 and s[0] in "\"'" and s[-1] == s[0]:
        s = s[1:-1]
    return s


# every direction must ship these four artifacts or the build fails loudly
REQUIRED_ARTIFACTS = ["DESIGN.md", "index.html", "prompt.md", "sample.png"]
REQUIRED_FIELDS = ["id", "name_cn", "name_en", "lineage"]
SKIN_CONTRACT = [
    "--bg", "--surface", "--surface-2", "--ink", "--ink-muted", "--ink-subtle",
    "--accent", "--on-accent", "--hairline", "--border-strong", "--radius-sm",
    "--radius-md", "--radius-lg", "--font-display", "--font-body", "--shadow",
    "--shadow-hard",
]


def validate_auxiliary_site_data(errors):
    """Validate local demo registries that are hand-authored today."""
    if os.path.isfile(MODULES_REGISTRY):
        with open(MODULES_REGISTRY, encoding="utf-8") as f:
            modules_data = json.load(f)
        seen = set()
        for item in modules_data.get("modules", []):
            key = f"{item.get('cat')}/{item.get('id')}"
            if key in seen:
                errors.append(f"site/modules_registry.json duplicate module: {key}")
            seen.add(key)
            module_file = os.path.join(ROOT, "modules", item.get("cat", ""), f"{item.get('id', '')}.html")
            if not os.path.isfile(module_file):
                errors.append(f"site/modules_registry.json points to missing module: modules/{key}.html")
            if not item.get("variants"):
                errors.append(f"site/modules_registry.json module has no variants: {key}")
    else:
        errors.append("site/modules_registry.json missing")

    if os.path.isfile(SKINS_REGISTRY):
        with open(SKINS_REGISTRY, encoding="utf-8") as f:
            skins_data = json.load(f)
        seen = set()
        for skin in skins_data.get("skins", []):
            skin_id = skin.get("id")
            if skin_id in seen:
                errors.append(f"site/skins.json duplicate skin: {skin_id}")
            seen.add(skin_id)
            vars_ = skin.get("vars") or {}
            missing = [k for k in SKIN_CONTRACT if not vars_.get(k)]
            if missing:
                errors.append(f"site/skins.json skin {skin_id} missing vars: {missing}")
    else:
        errors.append("site/skins.json missing")


def build_gsap_registry(errors, warnings):
    """Scan gsap-demos/*/meta.json -> site/gsap_registry.json.

    Hard error: malformed meta.json, missing required fields, or missing index.html.
    Soft warning: missing sample.png (screenshots are produced in a later phase).
    The whole section is additive — absent gsap-demos/ just yields an empty registry.
    """
    demos = []
    if os.path.isdir(GSAP_DEMOS):
        for name in sorted(os.listdir(GSAP_DEMOS)):
            d = os.path.join(GSAP_DEMOS, name)
            meta_path = os.path.join(d, "meta.json")
            if not os.path.isfile(meta_path):
                continue  # not a demo folder (yet)
            try:
                with open(meta_path, encoding="utf-8") as f:
                    meta = json.load(f)
            except (json.JSONDecodeError, OSError) as e:
                errors.append(f"gsap-demos/{name}/meta.json invalid JSON: {e}")
                continue
            missing = [k for k in GSAP_REQUIRED_META if not meta.get(k)]
            if missing:
                errors.append(f"gsap-demos/{name}/meta.json missing fields: {missing}")
                continue
            if meta.get("id") != name:
                errors.append(f"gsap-demos/{name}/meta.json id '{meta.get('id')}' != folder name")
            if not os.path.isfile(os.path.join(d, "index.html")):
                errors.append(f"gsap-demos/{name}/ missing index.html")
                continue
            if not os.path.isfile(os.path.join(d, "sample.png")):
                warnings.append(f"gsap-demos/{name}/ has no sample.png yet (gallery shows a placeholder)")
            demos.append({
                "id": meta["id"],
                "name_cn": meta.get("name_cn", ""),
                "name_en": meta.get("name_en", ""),
                "style": meta.get("style", ""),
                "plugins": meta.get("plugins", []),
                "focus": meta.get("focus", ""),
                "prompt": meta.get("prompt", ""),
                "paths": {
                    "live": f"../gsap-demos/{name}/index.html",
                    "sample": f"../gsap-demos/{name}/sample.png",
                },
            })
    demos.sort(key=lambda e: GSAP_ORDER.index(e["id"]) if e["id"] in GSAP_ORDER else 999)
    os.makedirs(os.path.dirname(OUT_GSAP), exist_ok=True)
    with open(OUT_GSAP, "w", encoding="utf-8") as f:
        json.dump({"demos": demos, "count": len(demos)}, f, ensure_ascii=False, indent=2)
    print(f"wrote {OUT_GSAP} with {len(demos)} GSAP demos")


def main():
    entries, errors, warnings = [], [], []
    for name in sorted(os.listdir(DIRECTIONS)):
        d = os.path.join(DIRECTIONS, name)
        design = os.path.join(d, "DESIGN.md")
        if not os.path.isfile(design):
            continue  # not a direction folder
        with open(design, encoding="utf-8") as f:
            fm = parse_frontmatter(f.read())
        # validate required frontmatter fields
        missing_fields = [k for k in REQUIRED_FIELDS if not fm.get(k)]
        if missing_fields:
            errors.append(f"directions/{name}/DESIGN.md missing fields: {missing_fields}")
        if not (fm.get("colors") or {}):
            errors.append(f"directions/{name}/DESIGN.md has no `colors` block")
        # validate required artifact files exist
        for art in REQUIRED_ARTIFACTS:
            if not os.path.isfile(os.path.join(d, art)):
                errors.append(f"directions/{name}/ missing artifact: {art}")
        if missing_fields or not fm.get("id"):
            continue
        colors = fm.get("colors", {}) or {}
        swatches = {k: colors[k] for k in SWATCH_KEYS if k in colors}
        entries.append({
            **{k: fm.get(k) for k in SCALARS},
            "best_for": fm.get("best_for", []),
            "description": fm.get("description", ""),
            "swatches": swatches,
            "paths": {
                "live": f"../directions/{name}/index.html",
                "prompt": f"../directions/{name}/prompt.md",
                "design": f"../directions/{name}/DESIGN.md",
                "sample": f"../directions/{name}/sample.png",
            },
        })
    validate_auxiliary_site_data(errors)
    build_gsap_registry(errors, warnings)
    for w in warnings:
        print(f"  warning: {w}")
    if errors:
        raise SystemExit(
            "build_registry: validation failed — fix these before the gallery can ship:\n  - "
            + "\n  - ".join(errors)
        )
    # stable curated order (light editorial -> dark -> structured -> warm -> expressive)
    order = [
        "editorial", "editorial-dark", "newsprint",
        "swiss-minimal", "neo-saas", "mono-zine", "technical-mono",
        "warm-personal", "organic-natural", "playful-rounded",
        "vibrant-gradient", "retro-print", "fashion-luxe", "art-gallery",
        "dark-luxe", "cinematic-dark", "bold-brutalist",
        # experimental batch
        "illustration-brand", "soft-3d-clay", "memphis-postmodern", "y2k-vapor",
        "glassmorphism", "handcrafted-sketch", "risograph", "maximalist-collage",
        "art-deco", "athletic-sport",
    ]
    entries.sort(key=lambda e: order.index(e["id"]) if e["id"] in order else 999)
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"directions": entries, "count": len(entries)}, f,
                  ensure_ascii=False, indent=2)
    print(f"wrote {OUT} with {len(entries)} directions")


if __name__ == "__main__":
    main()
