# Agents

这个目录放可复用的 agent 说明。每个文件都是一份可以被复制到其他项目、或在对话里用
`@name` 触发的工作协议。

## 可用 agents

| Agent | File | 用途 |
|---|---|---|
| `@research` | `research.md` | 只做调研：读资料、建来源地图、抽象系统模型、提取决策/缺口，并输出 `.md` 文档。 |
| `@webpage` | `webpage.md` | 只做实现：基于 research 文档和 ref repo 模型，创建网页代码、tokens、registry、repo 和部署配置。 |
| 方法卡片 | `research-method.md` | 给人看的压缩版：这套调研方法到底怎么想、怎么判断、怎么复用。 |
| Ref 实现模型 | `reference-repo-implementation-model.md` | 给 `@webpage` 用：把本 ref repo 的技术栈、实现原理、design token、远程仓库和部署抽象成可复制建站模型。 |

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
@webpage 基于 research 文档和 ref repo 模型，直接实现一个新的 atlas 网站。
```

## 产出约定

`@research` 默认产出四层 `.md` 结果：

1. **Context Map**：读了哪些来源、哪些缺失、项目真实结构是什么。
2. **System Model**：把项目抽象成可复制的模型，而不是只复述文档。
3. **Decision Constraints**：哪些规则不能轻易改，为什么。
4. **Implementation Brief**：下一步怎么落地，但只作为交给 `@webpage` 的文档。

`@webpage` 默认负责实现层：

1. **Tech Stack**：技术栈和运行方式。
2. **Implementation Principle**：实现原理和数据流。
3. **Design Model**：设计模型和三层 design token。
4. **Repo/Deploy**：远程仓库、自动命名、private push、Vercel 部署。
5. **Code**：文件骨架、页面、registry、脚本和验证。

如果资料缺失，agent 必须明确标注“未找到/未读取”，不能补故事。
