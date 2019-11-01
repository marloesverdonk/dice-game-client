import request from 'superagent'
import { url } from '../contants'

export const sendAction = (action, roomId) => (dispatch, getState) => {
  const token = getState().auth.token
  request.patch(`${url}/room/${roomId}`)
    .set("Authorization", `Bearer ${token}`)
    .send({ action })
    // .then(response => {
    //   // console.log("sendRoll:", response.body)
    // })
    .catch(error => {
      console.log("sendRoll Error:", error)
    })
}


export const createRoom = (name, id) => async (dispatch, getState) => {
  // console.log('DATA', name, id)
  const token = getState().auth.token
  //console.log(token)
  return await request
    .post(`${url}/room`)
    .set("Authorization", `Bearer ${token}`)
    .send({
      room_name: name
      //player1_id: id 
    })
    .then(response => {
      dispatch(roomCreateSuccess(response.body.id))
      // console.log("ROOM id : ", response.body.id)
      return response.body.id
    })
    .catch(console.error)
}


export const ROOM_CREATE_SUCCESS = 'ROOM_CREATE_SUCCESS'
const roomCreateSuccess = id => ({
  type: 'ROOM_CREATE_SUCCESS',
  id
})


export const loadRooms = () => (dispatch) => {
  // console.log("Id loadevent", id)
  request
    .get(`${url}/room`)
    .then(response => {
      // console.log("BODY", response)
      dispatch(roomsFetched(response.body))
    })
    .catch(console.error)
}


export const ROOMS_FETCHED = 'ROOMS_FETCHED'
export const roomsFetched = rooms => ({
  type: 'ROOMS_FETCHED',
  rooms
})

export const loadRoom = (id) => (dispatch) => {
  // console.log("ROOM", id)
  request
    .get(`${url}/room/${id}`)
    .then(response => {
      // console.log("LOADROOM", response.body)
      dispatch(roomFetched(response.body))
    })
    .catch(console.error)
}


export const ROOM_FETCHED = 'ROOM_FETCHED'
export const roomFetched = room => ({
  type: 'ROOM_FETCHED',
  room
})






















// export const updateCurrentDice = (dice1, dice2, score) => (dispatch) => {
//   //console.log("updateCurrentDice", dice1, dice2, score)
//   const roomId = 2
//   request
//     .patch(`${url}/room/${roomId}`)
//     .send({ current_dice1: dice1, current_dice2: dice2 })
//     .then(response => {
//       // console.log("From action", response.body);
//       dispatch(diceUpdate(score))
//     })
// }

// export const UPDATE_CURRENT_DICE = 'UPDATE_CURRENT_DICE'
// export const diceUpdate = (score) => ({
//   type: 'UPDATE_CURRENT_DICE',
//   payload: score

// })

// export const updateCurrentPlayer = (currentPlayer) => (dispatch, getState) => {
//   console.log('updateCurrentPlayer', currentPlayer)
//   console.log('getstate: ', getState())
//   request
//     .patch(`${url}/room/2`)
//     .send({ turn_player: currentPlayer })
//     .then(response => {
//       console.log('updateCurrentPlayer current player:', response.body)
//       dispatch(playerUpdate(currentPlayer))
//     })
// }

// export const UPDATE_CURRENT_PLAYER = 'UPDATE_CURRENT_PLAYER'
// export const playerUpdate = (player) => ({
//   type: 'UPDATE_CURRENT_PLAYER',
//   payload: player
// })

// export const totalScore = (total, score) => (dispatch) => {
//   console.log("TOTAL SCORE", score);

//   request
//     .patch(`${url}/room/2`)
//     .send({ player2_totalscore: score })
//     .then(response => {
//       console.log('totalScore current player:', response.body)
//       dispatch(scoreTotal(total))
//     })
// }

// export const updateCurrentScore = (currentScore) => (dispatch) => {
//   console.log("currentScore", currentScore)
//   request
//     .patch(`${url}/room/2`)
//     .send({ currenthand_player2: currentScore })
//     .then(response => {
//       console.log('updateCurrentScore current player:', response.body)
//     })
// }

// export const TOTAL_SCORE = 'TOTAL_SCORE'
// export const scoreTotal = (score) => ({
//   type: 'TOTAL_SCORE',
//   payload: score

// })