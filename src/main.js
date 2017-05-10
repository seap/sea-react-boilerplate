import 'babel-polyfill'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configStore from './configStore'
import Root from './Root'

const store = configStore()
const history = syncHistoryWithStore(browserHistory, store)

function renderApp(app) {
  const mountNode = document.getElementById('root')
  ReactDOM.render(<AppContainer>{app}</AppContainer>, mountNode)
}

renderApp(<Root store={store} history={history} />)

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NextRoot = require('./Root').default
    renderApp(<NextRoot store={store} history={history} />)
  })
}
