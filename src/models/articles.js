import { makeAutoObservable } from "mobx"
import { useStaticQuery, graphql } from "gatsby"
// import {getJsArticles} from '../api/request'

class ArticlesModel {
  constructor() {
    makeAutoObservable(this)
  }

  async getArticles() {
    // console.log('getJsArticles', graphql`${getJsArticles}`)
    // const ga = await getJsArticles()
    console.log('getJsArticles' )
    // console.log('getReactArticles', getReactArticles)
    // return graphql`${getJsArticles}`
    // return ga
  }
  showMsg() {
    console.log('IOC inject success!')
  }
}

export const articlesStore = new ArticlesModel()