import React, { Component, PropTypes } from 'react'
import '../../styles/reset.css'
import '../../styles/main.css'

// Here you define the overall layout
// and the container of the react router
export default class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="wrapper">
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

App.defaultProps = {
  children: 'No content'
}
