# COVERAGE — what design languages we cover, and what's next

Comparison of our **27 directions** against **awesome-design-md** (`~/github/awesome-design-md`,
73 real brand design languages), plus the broader style space. Use this to decide which
directions to add next.

> Note: design-md catalogues **brand/product** design languages (company sites); we make
> **personal-site** directions. Not 1:1 — the question is whether our directions span the
> same *design-language space*, plus personal-site-relevant styles beyond it.

## Our 27 directions

| lineage | directions |
|---|---|
| typographic | editorial · editorial-dark · newsprint |
| minimal | swiss-minimal · neo-saas · art-gallery |
| technical | technical-mono · mono-zine |
| warm | warm-personal · organic-natural · playful-rounded |
| expressive / image | vibrant-gradient · retro-print · fashion-luxe · dark-luxe · cinematic-dark · bold-brutalist |
| illustrated | illustration-brand |
| handcrafted | handcrafted-sketch · risograph |
| experimental | glassmorphism · memphis-postmodern · y2k-vapor · maximalist-collage · soft-3d-clay |
| expressive (more) | art-deco · athletic-sport |

## Coverage vs design-md (73 brands bucketed into language families)

| design-md family | representative brands | our direction(s) | status |
|---|---|---|---|
| Dark dev-tool / terminal | linear, vercel, framer, warp, raycast, clickhouse, sentry, x.ai, supabase | technical-mono · mono-zine | ✅ |
| Modern product / SaaS marketing | vercel, cursor, webflow, expo, posthog, together | neo-saas | ✅ |
| Clean white minimal / fintech | stripe, ibm, coinbase, cal, wise, airtable, uber | swiss-minimal | ✅ |
| Warm cream editorial | claude, cursor, intercom, elevenlabs, zapier, cohere | editorial · warm-personal · organic-natural | ✅ |
| Editorial magazine (B&W) | wired, theverge, figma, uber | editorial-dark · newsprint · fashion-luxe | ✅ |
| Atmospheric gradient | mistral, mintlify, slack | vibrant-gradient | ✅ |
| Cinematic / luxury / automotive | ferrari, bugatti, lamborghini, bmw-m, tesla, spacex, playstation, nike | cinematic-dark · dark-luxe · fashion-luxe | ✅ (close) |
| Premium dark AI (duality) | minimax, x.ai, meta, nvidia, binance | dark-luxe / neo-saas | ⚠️ partial |
| **Illustration-rich + single brand color** | **notion, clay, miro, airbnb, spotify, mongodb** | (playful-rounded leans candy) | ⚠️ **not really done** |
| Enterprise design-system (Carbon) | ibm, hashicorp, hp | — | ❌ (not personal-relevant) |
| 90s catalog / retro web | dell-1996 | — | ❌ gap |

**We're ahead of design-md on:** `bold-brutalist` — design-md has almost no true
neo-brutalism (figma is just B&W + pastel blocks).

## Gaps in design-md we haven't done — worth it?

1. **Illustration-rich brand** (notion / clay / miro: lots of illustration + one bright brand
   color + rounded) — ⭐ **worth doing**; great for creators / educators / community. Our
   playful-rounded is candy-colored, not an illustration *system*.
2. **Automotive / sport motorsport** (uppercase letterspaced + full-bleed photography) — weak
   for personal sites; could become an **athletic / sport** direction (coach, athlete).
3. **Enterprise Carbon / per-product color system** — not needed for personal sites; skip.
4. **90s catalog / Y2K web** (dell-1996) — experimental; see below.

## Beyond design-md — the real whitespace (neither side covers)

design-md is almost all "modern brand site", so these higher-inspiration styles are missing
from BOTH, and several fit personal sites better:

| style | fits | notes | suggested asset(s) |
|---|---|---|---|
| Glassmorphism / aurora-glass | product, AI founder | frosted blur, nobody does it | — (CSS) |
| Memphis / postmodern geometric | designer, educator | 80s shapes + squiggles | illustration-popart-girl |
| Y2K / millennium / vaporwave | creator, musician | chrome, blobs, grid, neon | poster-bowie-king |
| Handcrafted / sketch / notebook | writer, illustrator | hand-drawn frames, tape, sticky notes | illustration-couple-reading |
| Maximalist collage / scrapbook | multidisciplinary artist | layered, stickers, mixed media | poster-we-the-people, illustration-* |
| Claymation / soft 3D | creator, toy/streetwear | true 3D/clay (clay.com) | illustration-lady-3d |
| Art Deco / vintage luxury | consultant, speaker | geometric gold lines, symmetry, 20s | portrait-man-vintage |
| Risograph / print color | illustrator, indie publisher | misregistered spot color, grain | illustration-ninja-halftone |
| Pixel / retro-game | game dev, geek | 8-bit, pixel type | — (CSS) |
| Soviet / propaganda graphic | activist, writer | bold constructivist | poster-soviet |

`assets/` still has unused images well-suited to these experimental directions (soviet poster,
ninja halftone, couple-reading, bowie, travel-woman, fantasy-robed, etc. — see
`assets/MANIFEST.md`).

## One-line answer

> design-md's mainstream brand design languages are all covered by our 27; what design-md
> leaves uncovered is mostly enterprise/automotive marketing that personal sites don't need.
> The directions worth adding next are the **experimental styles neither side has**
> (glassmorphism, Memphis, Y2K, handcrafted, collage, soft-3D, Art Deco …) plus the one real
> design-md gap: an **illustration-rich brand** direction.

## Suggested next batch — ✅ BUILT (atlas is now 27 directions)

This batch is done: illustration-brand · glassmorphism · memphis-postmodern · y2k-vapor ·
handcrafted-sketch · maximalist-collage · soft-3d-clay · art-deco · risograph · athletic-sport.
The illustration-rich-brand gap is filled; the experimental styles neither side had are in.

**Still open for a future batch** (lower priority / niche): athletic→automotive-motorsport
split, pixel/retro-game, neumorphism (dated), 90s-catalog/dell-1996, soviet/constructivist
(asset `poster-soviet`, `poster-we-the-people` partially used), brutalist-variants. Unused
assets remain (see `assets/MANIFEST.md`): poster-bowie-king, illustration-goose-skateboard,
fantasy-robed-golden-orb, illustration-aviator-girl, portrait-* (several), poster-soviet, etc.
