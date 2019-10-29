const initialState = {
  roundScore: 0,
  totalScore: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_DICE':
      return action.payload === 0 ? { ...state, roundScore: 0 } : { ...state, roundScore: action.payload + state.roundScore }
    case 'TOTAL_SCORE':
      return { ...state, totalScore: action.payload + state.totalScore, roundScore: 0 }
    default:
      return state;
  }
}

export default reducer