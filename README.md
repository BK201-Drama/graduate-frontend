# 目录架构

- core: 核心，用于放置 routes，观测数据集合 store 以及封装的 axios
- domains: 领域，在这里放置请求与将请求数据持久化的 store
- features: 特征，在这里用于放置跟业务数据有关并且被复用的组件或者 hooks，比如选择用户的选择栏，业务 hooks 等
- pages: 页面
- public: 里面放置常量等
- shared: 分享物，在这里用于放置跟业务数据无关的组件
- styles: 样式，在这里用于放置样式

# 注意事项

1. pages 的文件之间的引用必须保持树形结构，父目录文件引用子目录文件
2. 有多个被使用的业务相关的组件，建议抽出来放到 features 中
3. features 组件的封装，应直接使用 antd 组件和 shared 组件来进行封装，数据采用 domains 的 stores，如果用 features 内部若干组件组合封装，就需要有树形结构
4. shared 的组件必须全部依赖 props 来传入数据，而且不要依赖 public 的常量
5. src 下的 utils 不允许依赖 public 的常量数据，只有 public 下的 utils 才能依赖常量数据
