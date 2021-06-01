interface Article {
  title: string
  subTitle: string
  date: string
  icon: string
  type:string
  headImg: string
}

// 正常文章
type ArticleState = {
  article: Article[]
}
type ArticleAction = {
  type: string
  article: Article
}
type DispatchType = (args: ArticleAction) => ArticleAction

// 分支测试文章
type SimpleAction = {
  type: string
  articleSimple: Article
}
type DispatchSimpleType = (args: SimpleAction) => SimpleAction

// 其它测试分支
type QueryArticles = T[]

type QueryAtion = {
  type: string
  queryArticle: QueryArticles
}

type DispatchQueryType = (args: QueryAtion) => QueryAtion

// markdown文档格式
interface IMarkdown {
  frontmatter: {
    title: string,
    subTitle: string,
    date: string,
    icon: string,
    type: string,
    headImg: string,
  }
  html: string
}