# 目录架构

- core: 核心，用于放置 routes，观测数据集合 store 以及封装的 axios
- domains: 领域，在这里放置请求与将请求数据持久化的 store
- features: 特征，在这里用于放置跟业务数据有关并且被复用的组件或者 hooks，比如选择用户的选择栏，业务 hooks 等
- pages: 页面
- public: 里面放置常量等
- shared: 分享物，在这里用于放置跟业务数据无关的公共组件
- styles: 样式，在这里用于放置样式

# 目录注意事项

1. pages 的文件之间的引用必须保持树形结构，父目录文件引用子目录文件
2. 有多个被使用的业务相关的组件，建议抽出来放到 features 中
3. features 组件的封装，应直接使用 antd 组件和 shared 组件来进行封装，数据采用 domains 的 stores，如果用 features 内部若干组件组合封装，就需要有树形结构
4. shared 的组件必须全部依赖 props 来传入数据，而且不要依赖 public 的常量
5. src 下的 utils 不允许依赖 public 的常量数据，只有 public 下的 utils 才能依赖常量数据
6. 在 page 里面，书写规定不允许小写开头的目录是组件，大写开头才允许是组件

# 提交代码流程

1. 在多人协作模式里，如果要开发自己的功能，需要从 master 里面 checkout 一个自己的开发功能的分支：（本项目随便在 dev 里面 checkout 也行）

```git
git checkout -b feature/lkd-branch
```

2. 添加代码到暂存区

```git
git add .
```

3. 提交代码（不建议使用 git commit -m, 已经配好了提交指令，会在提交之前进行一次静态检查）

```git
yarn commit
```

4. 在`yarn commit`指令里面，选择你所提交代码的类型，比如是 feat\fix\chore 等，并且书写提交的概要和详细内容

下面是几个常见的指令:

- feat: 添加功能
- fix: 修复 bug
- chore: 添加依赖项
- refactor: 重构代码，但是不添加功能
- wip: 添加功能，但未完成(work in progress)
- style: 添加样式
- doc: 改变文档内容

# 一些写代码的注意事项

1. 推荐使用 vscode，这里配置了 vscode 相关的 eol，不然很容易产生 CRLF 文件导致 yarn commit 过不了 lint
2. 本项目适配了自动导入部分依赖，因此不需要自己自己引入 antd，包装好的 axios，stores 的内容，以及 react-hooks 的所有内容
3. 对于 css，建议使用 tailwind 来写，建议下载辅助插件：Tailwind CSS IntelliSense
4. 关于路径，我们统一使用@/...进行编写，其中，具体可以参考项目内的引入，并且如果想要自动提示，建议下载辅助插件: Path Intellisense

# 关于代码逻辑

1. 用户管理的 RBAC

- 统一全在 permissionStore 进行控制，其中有部分是按钮级别控制，请使用 permissionWrapper 组件统一处理
