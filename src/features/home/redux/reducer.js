import { reducer as counter } from './counter'

const initialState = {
  number: 1
}

const reducers = [
  counter
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
