import { makeAutoObservable } from "mobx"

class ArticlesModel {
  constructor() {
    makeAutoObservable(this)
  }
  getAllArticles() {
    console.log('test linux')
  }
  showMsg() {
    console.log('IOC inject success!')
  }
}

export const articlesStore = new ArticlesModel()