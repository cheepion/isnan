import { makeAutoObservable } from "mobx"

// configure({
//   enforceActions: "never",
// })

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
// decorate(CountModel, {
//   Count: observable,
//   Increment: action,
//   Decrement: action,
// })
export const counterStore = new CountModel()