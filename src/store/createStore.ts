import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"
import reducer from './reducer'


// const windowGlobal = typeof window !== 'undefined' && window;

// const devtools =
//   process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f;

const store = () => createStore(reducer, applyMiddleware(thunk))
// const store = () => createStore(reducer, compose(applyMiddleware(thunk), devtools));

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return store();
  // return createStore(reducer, preloadedState);
};

