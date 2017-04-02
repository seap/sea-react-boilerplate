import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
// import api from '../middlewares/api'

const middlewares = [
  thunk
]
let devToolsExtension = f => f

if (__DEV__) {
  const createLogger = require('redux-logger')
  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)

  if (window.devToolsExtension) {
    devToolsExtension = window.devToolsExtension()
  }
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    devToolsExtension
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
