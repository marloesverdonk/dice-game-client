import { combineReducers } from 'redux'
import auth from './auth'
import dice from './dice'
import roundScore from './dice'
import currentPlayer from './player'

export default combineReducers({
  auth,
  roundScore,
  currentPlayer,
  dice
})
