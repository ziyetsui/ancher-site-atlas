# Agents

这个目录放可复用的 agent 说明。每个文件都是一份可以被复制到其他项目、或在对话里用
`@name` 触发的工作协议。

## 可用 agents

| Agent | File | 用途 |
|---|---|---|
| `@research` | `research.md` | 执行一套调研思考协议：读资料、建来源地图、抽象系统模型、提取决策、找缺口、给计划。 |
| 方法卡片 | `research-method.md` | 给人看的压缩版：这套调研方法到底怎么想、怎么判断、怎么复用。 |
| Ref 实现模型 | `reference-repo-implementation-model.md` | 把本 ref repo 的技术栈、实现原理、design token、远程仓库和部署抽象成可复制建站模型。 |

## 怎么用

在新对话或同一项目里说：

```text
@research 读这个项目，抽象成可复制的模型/系统，并给我下一步计划。
```

也可以给更具体的输入：

```text
@research 只看 docs/ 和 README，把方法论抽象成 agent prompt。
@research 对比 COVERAGE 和现有 directions，告诉我下一批该补什么。
@research 把这个 repo 的模式迁移成另一个产品的 style atlas 系统。
@research 基于这个 ref repo 的模型，直接实现一个新的 atlas 网站。
```

## 产出约定

`@research` 默认产出四层结果：

1. **Context Map**：读了哪些来源、哪些缺失、项目真实结构是什么。
2. **System Model**：把项目抽象成可复制的模型，而不是只复述文档。
3. **Decision Constraints**：哪些规则不能轻易改，为什么。
4. **Action Plan**：下一步可以怎么落地，包括文件、流程、质量检查。

当用户要求“直接实现代码/网页”时，`@research` 会切到 ref repo implementation mode：
先抽技术栈和 contracts，再创建文件结构、页面、registry、token、运行/部署说明。

如果资料缺失，agent 必须明确标注“未找到/未读取”，不能补故事。
