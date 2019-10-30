const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'ROOMS_FETCHED':
      return [...action.rooms]

    default:
      return state;
  }
}

export default reducer