import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../redux/actions'
import styles from './main.scss'
import reactLogo from './react.svg'

class Hello extends Component {

  handleMessage = () => {
    const { sendMessage } = this.props.actions
    sendMessage('Message')
  }

  handlePush = () => {
    
  }

  render() {

    return (
      <div>
        Hello Sea Yang!
        <Link to='/home/counter'>
          <div className={styles.linkBtn}>counter</div>
        </Link>
        <a onClick={this.handleMessage}>Message</a>
        <a onClick={this.handlePush}>push</a>

      </div>
    )
  }
}

const mapStateToProps = state => ({ common: state.common })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
