# COVERAGE - 我们覆盖了哪些设计语言，下一步是什么

这份文档把我们的 **27 个 directions** 和 **awesome-design-md**（`~/github/awesome-design-md`，
73 个真实品牌设计语言）做对比，并放进更大的 style space 里看。用它来决定下一批该加哪些 directions。

> 注意：design-md 收录的是**品牌/产品**设计语言（公司站）；我们做的是**个人站** directions。
> 两者不是 1:1。关键问题是：我们的 directions 是否覆盖了同样的*设计语言空间*，
> 以及个人站相关、但 design-md 没覆盖到的 styles。

## 我们的 27 个 directions

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

## 覆盖情况 vs design-md（73 个品牌按语言家族分桶）

| design-md family | representative brands | our direction(s) | status |
|---|---|---|---|
| Dark dev-tool / terminal | linear, vercel, framer, warp, raycast, clickhouse, sentry, x.ai, supabase | technical-mono · mono-zine | ✅ |
| Modern product / SaaS marketing | vercel, cursor, webflow, expo, posthog, together | neo-saas | ✅ |
| Clean white minimal / fintech | stripe, ibm, coinbase, cal, wise, airtable, uber | swiss-minimal | ✅ |
| Warm cream editorial | claude, cursor, intercom, elevenlabs, zapier, cohere | editorial · warm-personal · organic-natural | ✅ |
| Editorial magazine (B&W) | wired, theverge, figma, uber | editorial-dark · newsprint · fashion-luxe | ✅ |
| Atmospheric gradient | mistral, mintlify, slack | vibrant-gradient | ✅ |
| Cinematic / luxury / automotive | ferrari, bugatti, lamborghini, bmw-m, tesla, spacex, playstation, nike | cinematic-dark · dark-luxe · fashion-luxe | ✅（接近） |
| Premium dark AI (duality) | minimax, x.ai, meta, nvidia, binance | dark-luxe / neo-saas | ⚠️ 部分覆盖 |
| **Illustration-rich + single brand color** | **notion, clay, miro, airbnb, spotify, mongodb** | (playful-rounded leans candy) | ⚠️ **还不算真正完成** |
| Enterprise design-system (Carbon) | ibm, hashicorp, hp | - | ❌（和个人站关联不大） |
| 90s catalog / retro web | dell-1996 | - | ❌ 缺口 |

**我们领先 design-md 的地方：** `bold-brutalist` - design-md 几乎没有真正的 neo-brutalism
（figma 只是 B&W + pastel blocks）。

## design-md 里有、我们还没做的缺口 - 值得做吗？

1. **Illustration-rich brand**（notion / clay / miro：大量 illustration + 一个明亮品牌色 +
   rounded）- **值得做**；很适合创作者 / 教育者 / 社群。我们的 playful-rounded 偏 candy-colored，
   不是一个 illustration *system*。
2. **Automotive / sport motorsport**（大写、letterspaced、full-bleed photography）- 对个人站较弱；
   可以转化成 **athletic / sport** direction（coach、athlete）。
3. **Enterprise Carbon / per-product color system** - 个人站不需要；跳过。
4. **90s catalog / Y2K web**（dell-1996）- 实验性；见下。

## 超出 design-md 的真正空白（两边都没覆盖）

design-md 基本都是“modern brand site”，所以下面这些 higher-inspiration styles 在两边都缺失；
其中好几个反而更适合个人站：

| style | fits | notes | suggested asset(s) |
|---|---|---|---|
| Glassmorphism / aurora-glass | product, AI founder | frosted blur，几乎没人做 | -（CSS） |
| Memphis / postmodern geometric | designer, educator | 80s shapes + squiggles | illustration-popart-girl |
| Y2K / millennium / vaporwave | creator, musician | chrome, blobs, grid, neon | poster-bowie-king |
| Handcrafted / sketch / notebook | writer, illustrator | hand-drawn frames, tape, sticky notes | illustration-couple-reading |
| Maximalist collage / scrapbook | multidisciplinary artist | layered, stickers, mixed media | poster-we-the-people, illustration-* |
| Claymation / soft 3D | creator, toy/streetwear | true 3D/clay (clay.com) | illustration-lady-3d |
| Art Deco / vintage luxury | consultant, speaker | geometric gold lines, symmetry, 20s | portrait-man-vintage |
| Risograph / print color | illustrator, indie publisher | misregistered spot color, grain | illustration-ninja-halftone |
| Pixel / retro-game | game dev, geek | 8-bit, pixel type | -（CSS） |
| Soviet / propaganda graphic | activist, writer | bold constructivist | poster-soviet |

`assets/` 里仍有一些未使用图片非常适合这些 experimental directions（soviet poster、
ninja halftone、couple-reading、bowie、travel-woman、fantasy-robed 等 - 见
`assets/MANIFEST.md`）。

## 一句话答案

> design-md 的主流品牌设计语言，我们这 27 个 directions 基本都覆盖了；
> design-md 没覆盖的多半是个人站不需要的 enterprise/automotive marketing。
> 下一步真正值得加的是**双方都没有的 experimental styles**
> （glassmorphism、Memphis、Y2K、handcrafted、collage、soft-3D、Art Deco ...），
> 以及 design-md 里的一个真实缺口：**illustration-rich brand** direction。

## 建议下一批 - ✅ 已完成（atlas 现在是 27 个 directions）

这一批已经完成：illustration-brand · glassmorphism · memphis-postmodern · y2k-vapor ·
handcrafted-sketch · maximalist-collage · soft-3d-clay · art-deco · risograph · athletic-sport。
Illustration-rich-brand 缺口已经补上；双方都没有的 experimental styles 也已经加入。

**未来仍可开的一批**（低优先级 / 小众）：athletic -> automotive-motorsport 拆分、
pixel/retro-game、neumorphism（已过时）、90s-catalog/dell-1996、soviet/constructivist
（asset `poster-soviet`，`poster-we-the-people` 已部分使用）、brutalist-variants。
仍有未使用 assets（见 `assets/MANIFEST.md`）：poster-bowie-king、
illustration-goose-skateboard、fantasy-robed-golden-orb、illustration-aviator-girl、
portrait-*（若干）、poster-soviet 等。
