import { observable, action, decorate } from "mobx"

class ArticlesModel {

  showMsg() {
    console.log('IOC inject success!')
  }
  
}
decorate(ArticlesModel, {
  showMsg: action,
})
export const articlesStore = new ArticlesModel()