import { makeAutoObservable } from "mobx"
import { QueryAll } from '../api/request'

class ArticlesModel {
  constructor() {
    makeAutoObservable(this)
  }
  // queryArticle = QueryAll()

  // // 按类型查询文章
  // queryTypeAritcles = typer => this.queryArticle.edges.filter(({node}) => node.frontmatter.type === typer)
}

export const articlesStore = new ArticlesModel()