import { SET_TOKEN } from './actions';

const initialToken = {
  token: 'ya29.a0AfH6SMAOfM85qFhyWZiwIbEqHH5zxctqoHIB_4bqXKEjXQEGN7lcxHP2BaJNYTahStQINtchRGH8_pGCfYHrYtkeMIipN0fW3yXM52v7bGsOxbTDC0aa74xAs7FFiQqS3KRr-DLqF0KYh0XrqNB-W-3tJoi0eD5FWkAp',
  expirationTime: 10000000
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