import { reducer as message } from './message'
import { reducer as fetching } from './fetching'

const initialState = {
  code: 0,
  message: '',
  fetching: false
}

const reducers = [
  message,
  fetching
]

export default function reducer(state = initialState, action) {
  let newState
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state
      break
  }
  return reducers.reduce((s, r) => r(s, action), newState)
}
