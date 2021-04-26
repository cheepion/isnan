import { makeAutoObservable } from "mobx"
import { useStaticQuery, graphql } from "gatsby"
// import {getJsArticles} from '../api/request'

class ArticlesModel {
  constructor() {
    makeAutoObservable(this)
  }
  getAllArticles() {
    console.log('全文章')
  }
  showMsg() {
    console.log('IOC inject success!')
  }
}

export const articlesStore = new ArticlesModel()