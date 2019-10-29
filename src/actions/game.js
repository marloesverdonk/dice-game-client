import request from 'superagent'
import { url } from '../contants'

export const updateCurrentDice = (dice1, dice2) => (dispatch) => {
  console.log(dice1, dice2)
  request
    .patch(`${url}/room/2`)
    .send({ current_dice1: dice1, current_dice2: dice2 })
    .then(response => {
      console.log("From action", response.body);
      dispatch(diceUpdate())
    })
}

export const UPDATE_CURRENT_DICE = 'UPDATE_CURRENT_DICE'
export const diceUpdate = () => ({
  type: 'UPDATE_CURRENT_DICE'
})