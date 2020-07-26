import { SET_USER_LOGIN, SET_USER_PW, SET_IS_DATAF_FROM_LS } from './actions';

const initialUser = {
  login: '',
  password: '',
  isDataFFromLS: false
};

const user = (state = initialUser, action) => {
  const { type, login, password, isDataFFromLS } = action;
  switch (type) {
    case SET_USER_LOGIN:
      return {...state, login};
    case SET_USER_PW:
      return {...state, password};
    case SET_IS_DATAF_FROM_LS:
      return {...state, isDataFFromLS};
    default:
      return state;
  }
};

export default user;
