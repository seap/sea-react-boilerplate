import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './main.scss'

class Hello extends Component {

  render() {
    return (
      <div>
        Hello Sea Yang!
        <Link to='/home/counter'>
        <div className={styles.linkBtn}>counter</div>
        </Link>
      </div>
    )
  }
}

export default Hello
