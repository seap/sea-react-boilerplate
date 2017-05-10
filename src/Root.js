import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

// binding React with Redux and Router
export default class Root extends Component {
  render() {
    const { store, history } = this.props
    if (!this.routeConfig) {
      this.routeConfig = routes
    }
    return (
      <Provider store={store}>
        <Router history={history} routes={this.routeConfig} />
      </Provider>
    )
  }
}
