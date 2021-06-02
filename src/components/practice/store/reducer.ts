type oriState = {
  link: boolean
}
const defaultState: oriState = {
  link: false
}

export default (state=defaultState, action:any) =>{

  if(action.type === "search_foucus"){
    return {
        link: true
    }
  }
  if(action.type === "search_blur"){
      return {
          link: false
      }
  }
  return state
}

