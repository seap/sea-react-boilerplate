import { sendMessage } from '../features/common/redux/actions'

export default function api({ dispatch, getState }) {
  return next => async action => {
    const {
      types,                       // mandatory, [requestType, successType, failureType]，type: string or (dispatch, getState, [json]) => {}
      messages = [],               // [errorMessage(errmsg as default), successMessage('' as default)]
      shouldCallAPI = () => true,  // getState => {}
      callAPI,                     // mandatory, getState => fetch()
      isSuccess = () => false,     // config success
      ...rest
    } = action

    if (!(types && callAPI)) {
      return next(action)
    }

    if (!Array.isArray(types) || types.length !== 3 ||
      !types.every(type => (typeof type === 'string' || typeof type === 'function'))) {
      throw new Error('Expected types to be an array of three string or function.')
    }
    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }

    if (!shouldCallAPI(getState)) {
      return
    }

    const [requestType, successType, failureType] = types
    const [errorMessage, successMessage] = messages

    if (typeof requestType === 'function') {
      requestType(dispatch, getState)
    } else {
      dispatch({ ...rest, type: requestType })
    }

    try {
      const response = await callAPI()
      const json = await response.json()
      if (isSuccess(json) || json.code === 0) {
        if (typeof successType === 'function') {
          return successType(dispatch, getState, json)
        } else {
          successMessage && dispatch(sendMessage(successMessage))
          dispatch({ ...rest, type: successType, data: json.data })
        }
      } else {
        if (typeof failureType === 'function') {
          failureType(dispatch, getState, json)
        } else {
          dispatch(sendMessage(errorMessage || json.errmsg, json.errno))
          dispatch({ ...rest, type: failureType })
        }
      }
    } catch (e) {
      console.log(e)
      dispatch({ ...rest, type: failureType })
      dispatch(sendMessage('服务异常, 请稍后再试!'))
    }
  }
}
