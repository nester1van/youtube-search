// import { setUserLogin, setUserPW } from './user/actions';
// import { setToken } from './token/actions';
// import getVideos, { setQuery, setMaxResults, setQueryName } from './search/actions';

const debugStore = (store, isDebugging) => {
  if(isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(setUserLogin('login'));
    // store.dispatch(setUserPW('pw'));
    // store.dispatch(setToken('token', 10));
    // store.dispatch(setQuery('react'));
    // store.dispatch(setMaxResults(3));
    // store.dispatch(setQueryName('react search'));
    // store.dispatch(getVideos());
  }
}

export default debugStore;