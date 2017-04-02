import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

export default class Root extends Component {

  render() {
    console.log('Root rendering..')
    const { store, history } = this.props
    if (!this.routeConfig) this.routeConfig = routes
    return (
      <Provider store={store}>
        <Router history={history} routes={this.routeConfig} />
      </Provider>
    )
  }
}
