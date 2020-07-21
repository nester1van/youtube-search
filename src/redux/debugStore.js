// import { setUserLogin, setUserPW } from './user/actions';
// import { setToken } from './token/actions';
// import getVideos, { setQuery, setMaxResults, setQueryName } from './search/actions';
// import { setLayoutVideos } from './appearance/actions';
// import { setQueryF, setMaxResultsF, 
//   setQueryNameF, setSortByF } from './favorites/actions';

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
    // store.dispatch(setLayoutVideos('gallery'));
    // store.dispatch(setQueryF('t'));
    // store.dispatch(setMaxResultsF(10));
    // store.dispatch(setQueryNameF('name'));
    // store.dispatch(setSortByF('date'));

  }
}

export default debugStore;