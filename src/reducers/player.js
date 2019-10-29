const initialstate = {
  currentPlayer: 1,
  player1_id: 1,
  player2_id: 2
}

const reducer = (state = initialstate, action = {}) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_PLAYER':
      return {...state,
      currentPlayer: action.payload}

    default:
      return state;
  }
}

export default reducer