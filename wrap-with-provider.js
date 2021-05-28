import React from "react"
import { Provider } from "react-redux"
// import createStore from "./src/store/createStore"
import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducer from './src/store/reducer'


// import rootReducer from '.';

const windowGlobal = typeof window !== 'undefined' && window;

const devtools =
  process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;

// const createStore = () => reduxCreateStore(reducer, applyMiddleware(thunk));
const createStore = () => reduxCreateStore(reducer, compose(applyMiddleware(thunk), devtools));

// export default ({ element }) => (
//   <Provider store={createStore()}>{element}</Provider>
// );


// eslint-disable-next-line react/display-name,react/prop-types
function wrapWithProvider({ element }) {
  const store = createStore()
  return <Provider store={store}>{element}</Provider>
}

export default wrapWithProvider