import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import routes from './routes'

// Math.random is a workaround for routing config hot reload.
// https://github.com/ReactTraining/react-router/issues/2704

export default class Root extends Component {

  render() {
    console.log('Root rendering..');
    const { store, history } = this.props; // eslint-disable-line
    if (!this.routeConfig) this.routeConfig = routes;
    return (
      <Provider store={store}>
        <Router history={history} routes={this.routeConfig} />
      </Provider>
    )
  }
}
