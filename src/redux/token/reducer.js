import { SET_TOKEN } from './actions';

const initialToken = {
  token: '',
  expirationTime: 0
};

const token = (state = initialToken, action) => {
  const { type, token, expirationTime } = action;
  switch (type) {
    case SET_TOKEN:
      return {token, expirationTime};
    default:
      return state;
  }
};

export default token;