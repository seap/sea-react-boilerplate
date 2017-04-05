import {
  REQUEST_START,
  REQUEST_END
} from './actionTypes'

export function requestStart() {
  return {
    type: REQUEST_START
  }
}

export function requestEnd() {
  return {
    type: REQUEST_END
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case REQUEST_START:
    // console.log(1111);
      return {
        ...state,
        fetching: true
      }
    case REQUEST_END:
    // console.log(222);
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}
