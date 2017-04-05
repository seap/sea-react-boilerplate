import {
  MESSAGE_SEND,
  MESSAGE_CONFIRMATION
} from './actionTypes'

export function sendMessage(message = '服务异常,请稍后再试!', code = 9999) {
  return {
    type: MESSAGE_SEND,
    payload: {
      code,
      message
    }
  }
}

export function confirmMessage() {
  return {
    type: MESSAGE_CONFIRMATION
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case MESSAGE_SEND:
      const { code, message } = action.payload
      return {
        ...state,
        code,
        message
      }

    case MESSAGE_CONFIRMATION:
      return {
        ...state,
        code: 0,
        message: ''
      }
    default:
      return state
  }
}
