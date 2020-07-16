import { SET_USER_LOGIN, SET_USER_PW } from './actions';

const initialUser = {
  login: 'user1',
  password: 'pw1'
};

const user = (state = initialUser, action) => {
  const { type, login, password } = action;
  switch (type) {
    case SET_USER_LOGIN:
      return {...state, login};
    case SET_USER_PW:
      return {...state, password};
    default:
      return state;
  }
};

export default user;
