import request from 'superagent'
import { url } from '../contants'

export const updateCurrentDice = (dice1, dice2, score) => (dispatch) => {
  console.log("updateCurrentDice", dice1, dice2, score)
  request
    .patch(`${url}/room/2`)
    .send({ current_dice1: dice1, current_dice2: dice2 })
    .then(response => {
      console.log("From action", response.body);
      dispatch(diceUpdate(score))
    })
}

export const UPDATE_CURRENT_DICE = 'UPDATE_CURRENT_DICE'
export const diceUpdate = (score) => ({
  type: 'UPDATE_CURRENT_DICE',
  payload: score

})


export const totalScore = (total) => (dispatch) => {
  dispatch(scoreTotal(total))
}

export const TOTAL_SCORE = 'TOTAL_SCORE'
export const scoreTotal = (score) => ({
  type: 'TOTAL_SCORE',
  payload: score
})