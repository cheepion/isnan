import { makeAutoObservable } from "mobx"
import { useStaticQuery, graphql } from "gatsby"
// import {getJsArticles} from '../api/request'

class ArticlesModel {
  constructor() {
    makeAutoObservable(this)
  }

  async getArticles() {
    console.log('getJsArticles' )
  }
  showMsg() {
    console.log('IOC inject success!')
  }
}

export const articlesStore = new ArticlesModel()