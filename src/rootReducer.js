import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import commonReducer from './features/common/redux/reducer'

const reducerMap = {
  routing: routerReducer,
  common: commonReducer
}

export default combineReducers(reducerMap)
