import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../redux/actions'
import styles from './main.scss'

class Hello extends Component {
  handleMessage = () => {
    const { sendMessage } = this.props.actions
    sendMessage('Message')
  }

  render() {
    const { number } = this.props.home
    return (
      <div>
        <Link to='/home/counter'>
          <div className={styles.linkBtn}>number</div>
        </Link>
        <p>number: {number}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({ common:state.common, home: state.home })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
