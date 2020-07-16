import { setUserLogin, setUserPW } from './user/actions';
import { setToken } from './token/actions';

const debugStore = (store, isDebugging) => {
  if(isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(setUserLogin('login'));
    // store.dispatch(setUserPW('pw'));
    // store.dispatch(setToken('token', 10));
  }
}

export default debugStore;