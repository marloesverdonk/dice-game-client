import { combineReducers } from 'redux'
import auth from './auth'
import dice from './dice'
import currentPlayer from './player'
import rooms from './rooms'

export default combineReducers({
  auth,
  currentPlayer,
  dice,
  rooms
})
