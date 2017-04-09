import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import commonReducer from './features/common/redux/reducer'
import homeReducer from './features/home/redux/reducer'

const reducerMap = {
  routing: routerReducer,
  common: commonReducer,
  home: homeReducer
}

export default combineReducers(reducerMap)
