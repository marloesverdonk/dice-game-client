import { combineReducers } from 'redux'
import auth from './auth'
import roundScore from './dice'

export default combineReducers({
  auth,
  roundScore
})