import { makeAutoObservable } from "mobx"

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