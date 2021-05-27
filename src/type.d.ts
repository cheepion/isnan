interface Article {
  title: string
  subTitle: string
  date: string
  icon: string
  type:string
  headImg: string
}

type ArticleState = {
  article: Article[]
}

type ArticleAction = {
  type: string
  article: Article
}

type DispatchType = (args: ArticleAction) => ArticleAction


type QueryArticles = T[]

type QueryAtion = {
  type: string
  queryArticle: QueryArticles
}

type DispatchQueryType = (args: QueryAtion) => QueryAtion
