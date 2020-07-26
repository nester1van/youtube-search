// action types
export const SET_USER_LOGIN = 'SET_USER_LOGIN';
export const SET_USER_PW = 'SET_USER_PW';
export const SET_IS_DATAF_FROM_LS = 'SET_IS_DATAF_FROM_LS';

// action creators
export const setUserLogin = (login) => ({
  type: SET_USER_LOGIN,
  login
});

export const setUserPW = (password) => ({
  type: SET_USER_PW,
  password
});

export const setIsDataFFromLS = (isDataFFromLS) => ({
  type: SET_IS_DATAF_FROM_LS,
  isDataFFromLS 
})

