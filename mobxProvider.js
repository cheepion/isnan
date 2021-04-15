import React from "react"
import { Provider } from "mobx-react"
import store from "./src/models"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider {...store}>{element}</Provider>
  // <Provider store={...Store}>{element}</Provider>
)