import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const reducerMap = {
  routing: routerReducer
}

export default combineReducers(reducerMap)
