import { LOGIN_SUCCESS } from "../actions/auth";

const token = localStorage.getItem("jwt");
const initialState = token ? token : null;

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // localStorage.setItem("jwt", action.payload.token);
      return action.payload;
    default:
      return state;
  }
};
