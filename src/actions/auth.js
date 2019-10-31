export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (token, id) => ({
  type: LOGIN_SUCCESS,
  payload: { token, id }
})