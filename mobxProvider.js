import React from "react"
import { Provider } from "mobx-react"
import store from "./src/models"

// eslint-disable-next-line react/display-name,react/prop-types
const mobxProvider = ({ element }) => (
  <Provider {...store}>{element}</Provider>
)

export default mobxProvider