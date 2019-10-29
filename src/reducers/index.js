import { combineReducers } from 'redux'
import auth from './auth'
import dice from './dice'

export default combineReducers({
  auth,
  dice
})