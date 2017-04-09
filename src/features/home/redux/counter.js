import { push } from 'react-router-redux'
import {
  COUNT_PLUS,
  COUNT_MINUS
} from './actionTypes'

export function plus() {
  return push('/home/counter')
  // return {
  //   type: COUNT_PLUS
  // }
}

export function reducer(state, action) {
  switch (action.type) {
    case COUNT_PLUS:
      return {
        number: ++state.number
      }
    case COUNT_MINUS:
      return {
        number: --state.number
      }
    default:
      return state
  }
}
