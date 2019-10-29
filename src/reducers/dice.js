const reducer = (state = 0, action = {}) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_DICE':
      return action.payload
    default:
      return state;
  }
}

export default reducer