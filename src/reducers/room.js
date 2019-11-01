const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case 'ROOM_FETCHED':
      return action.room
    case 'ROOM_CREATE_SUCCESS':
      return action.id
    case 'CLEAR_ROOM':
      return null
    default:
      return state;
  }
}

export default reducer