import { makeAutoObservable } from "mobx"
class CountModel {
  constructor() {
    makeAutoObservable(this)
  }
  Count = 0

  Increment() {
    this.Count += 1
  }

  Decrement() {
    this.Count -= 1
  }
}
export const counterStore = new CountModel()