# 模块图鉴 · Module catalogue

> 结构层。与「设计方向」正交：方向管视觉(token)，模块管**结构**(放什么 section、什么顺序、哪个 variant)。
> 一个个人站 = 选 1 个方向 × 选+排序若干模块。

模块**刻意精简**：只写**用途 + variant 方向 hint + 内容规则**，不写颜色/字号（那是方向的事）。

**已落地**(本表 = 清单的事实来源):
- **30 个模块 specimen sheet**:`modules/<category>/<id>.html`,每个把该模块的所有 variant 叠一页(中性皮肤)。浏览:`site/modules.html`(每模块一张实时 iframe 预览卡)。有真实照片槽的模块(hero / avatar / selected_work / testimonials / story / photo_wall / reading_list / writing / speaking / book_a_call / nav)直接引用 `../../assets/*.webp`,不再用灰块占位。
- **跨方向看**有两条路:① **组件实验室** `site/skins-lab.html` —— 同一批模块选不同「皮肤」(方向 token)实时换肤;② **组件 inspector**(viewer 里)—— 在真实方向页上就地标注它用到的模块(读 `data-module`)。
- 注册表:`site/modules_registry.json`(category / module / variants),由 `scripts/build_registry.py` 校验。

## 5 大类

### identity（我是谁）
| module | variants | 用途 |
|---|---|---|
| `nav` | `centered` · `split` · `minimal` | 顶栏导航 / 站点入口 |
| `hero` | `bold_statement` · `split_portrait` · `minimal_centered` | 5 秒内说清"谁、能帮谁、为什么可信" |
| `avatar` | `round` · `square` · `initials_block` | 头像/标识 |
| `one_liner` | `inline` · `eyebrow` | 一句话定位 |
| `social_links` | `text_row` · `icon_row` | 社交入口 |

### trust（凭什么信你）
| module | variants | 用途 |
|---|---|---|
| `experience` | `timeline` · `compact_list` | 经历 |
| `selected_work` | `grid` · `carousel` · `featured_case` · `list` | 作品/项目 |
| `logos_press` | `logo_row` · `mentioned_in` | 客户/媒体露出 |
| `testimonials` | `cards` · `quote_led` | 客户评价 |
| `metrics` | `stat_row` · `big_numerals` | 数据成就 |
| `credentials` | `pills` · `list` | 认证/教育/获奖 |
| `speaking` | `list` · `cards` | 演讲 / 播客 / 工作坊 |

### narrative（你的故事）
| module | variants | 用途 |
|---|---|---|
| `story` | `magazine_longform` · `timeline_cards` · `split_image_text` · `quote_led` · `scroll_chapter` | My Story / Why |
| `why_i_do_this` | `short` · `manifesto` | 动机 |
| `beliefs` | `principles_list` · `numbered` | 原则/信条 |
| `currently_building` | `now_block` · `inline` | Now / 在做什么 |
| `writing` | `list` · `cards` · `featured_plus_list` | 文章 / 博客索引 |

### conversion（下一步）
| module | variants | 用途 |
|---|---|---|
| `book_a_call` | `inline` · `card` | 预约 |
| `hire_me` | `cta_band` · `inline` | 雇我 |
| `subscribe` | `inline_form` · `card` | 订阅 |
| `contact_form` | `minimal` · `full` | 联系表单 |
| `download_resume` | `button` | 下载简历 |
| `services` | `cards` · `pricing_tiers` · `list` | 服务 / 报价 / 套餐 |
| `faq` | `accordion` · `two_column` | 常见问题 |
| `footer` | `minimal` · `columns` · `cta_band` | 页脚 / 收口 CTA |

### personality（个性）
| module | variants | 用途 |
|---|---|---|
| `now_page` | `list` | Now 页 |
| `reading_list` | `list` · `covers` | 在读 |
| `tools` | `stack_list` · `grid` | 工具/技术栈 |
| `photo_wall` | `masonry` · `strip` | 照片墙 |
| `selected_quotes` | `large_type` | 金句 |

## 首版 5 个方向已示范的模块组合（可作 variant 截图来源）

- editorial → hero.bold_statement · selected_work.featured_case+list · story.quote_led · currently_building · contact
- swiss-minimal → hero.minimal_centered · metrics.stat_row · services(currently_building) · selected_work.list · contact
- warm-personal → hero.split_portrait · story.split_image_text · testimonials.cards · credentials.pills+metrics · book_a_call
- technical-mono → hero.bold_statement · selected_work.list(README) · metrics.stat_row · tools.stack_list · contact
- bold-brutalist → hero.bold_statement · selected_work.grid · metrics.big_numerals · story.quote_led · contact(cta_band)

> 下一批工作：从这 5 个示例页里截 section → 填每个 variant 的截图与 layout_hint（见 atlas 执行文档 §7 Phase 3）。
