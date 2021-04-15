import { observable, action, decorate } from "mobx"

class SecondModel {

  showSecondMsg() {
    console.log('IOC inject success!')
  }
  
}
decorate(SecondModel, {
  showSecondMsg: action,
})
export const scStore = new SecondModel()