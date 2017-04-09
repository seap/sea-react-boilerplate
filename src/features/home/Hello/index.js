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

  render() {
    const { number } = this.props.home
    return (
      <div>
        Hello Sea Yang!
        <Link to='/home/counter'>
          <div className={styles.linkBtn}>number</div>
        </Link>
        <a onClick={this.handlePlus}>plus</a>
        <p>number: {number}</p>
        {this.renderDateList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({ common:state.common, home: state.home })
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...actions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
