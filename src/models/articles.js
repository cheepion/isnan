import { makeAutoObservable } from "mobx"

class ArticlesModel {
  constructor() {
    makeAutoObservable(this)
  }

  showMsg() {
    console.log('IOC inject success!')
  }
  
}
// decorate(ArticlesModel, {
//   showMsg: action,
// })
export const articlesStore = new ArticlesModel()