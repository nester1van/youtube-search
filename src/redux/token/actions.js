// action types
export const SET_TOKEN = 'SET_TOKEN';

// action creators
export const setToken = (token, expirationTime) => ({
  type: SET_TOKEN,
  token,
  expirationTime
});