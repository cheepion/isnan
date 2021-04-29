import { makeAutoObservable } from "mobx"
class DetailModel {
  constructor() {
    makeAutoObservable(this)
  }
  Count = 0

  singleArticle() {
    this.Count += 1
  }

  showIcon() {
    this.Count -= 1
  }
}
export const detailStore = new DetailModel()