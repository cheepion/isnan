## 开发架手脚

https://github.com/gatsbyjs/gatsby.git
安装报错的就翻墙或是自己找本地库, 一般是缺库

## 使用
      1. 安装完成后, 按source内的md文档格式书写内容即可,
      2. 左边的目录连接就是该系列下的文档, 点击后可跳转
      3. md文档 第一部份是可配置的数据, 正文部分就是页面展示的内容, 已转译好, 放上去就能直接预览
      4. 使用yarn/npm run build打包后会自己推到自己的静态服器上, 不过cicd文档需要自己配置. cicd文档在.github内. 用的是github actions

### 本框架主要插件
    1.GatsbyJS: 静态网站生成器
    2. react: 基础框架
    3. GraphQL: 数据管理
    4. ES6+: 可用async 和 扩展运算符(对象)
    5. eslint 会代码规则约束工具
    6. immer + mobx 状态管理
    7. style-component css in js 样式管理
    8. cnpm包管理工具, 解决插件骑墙的问题 

### 安装与调试
  1. 最好使用cnpm install
  2. jest不完全覆盖

### 常用命令
  > 可使用yarn或npm, 如果安装不了, 就用cnpm来装, 有些插件可能要翻墙. cnpm比较稳一点
  > 清理编译环境


  ### GatsbyJS 大礼包(插件表)
  ----
    * Typography.js: 全局排版主题定义()
    * mobx  // 全局状态管理
    * redux-devtools  // 页面调试插件
    * highlight-code // 代码高亮
    * markdown // 当数据作为文章内容

  ### 项目结构说明
    > 采用mobx管理的类MVC架构.

  ### 调试
  gatsby build --verbose