// import { setUserLogin, setUserPW, setIsDataFFromLS } from './user/actions';
// import { setToken } from './token/actions';
// import getVideos, { setQuery, setMaxResults, setQueryName, setData } from './search/actions';
// import { setLayoutVideos } from './appearance/actions';
// import { setQueryF, setMaxResultsF, 
//   setQueryNameF, setSortByF, setSelectedIdF,
//   addQueryToF, editQueryInF, deleteQueryInF, 
//   setArrDataFInF } from './favorites/actions';

const debugStore = (store, isDebugging) => {
  if(isDebugging) {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(setUserLogin('login'));
    // store.dispatch(setUserPW('pw'));
    // store.dispatch(setIsDataFFromLS(true));
    // store.dispatch(setToken('token', 10));
    // store.dispatch(setQuery('react'));
    // store.dispatch(setMaxResults(3));
    // store.dispatch(setQueryName('react search'));
    // store.dispatch(getVideos('react', 3, 'date'));
    // store.dispatch(setLayoutVideos('gallery'));
    // store.dispatch(setQueryF('t'));
    // store.dispatch(setMaxResultsF(10));
    // store.dispatch(setQueryNameF('name'));
    // store.dispatch(setSortByF('date'));
    // store.dispatch(setSelectedIdF(1));
    // store.dispatch(addQueryToF({
    // queryF: 'first',
    // maxResultsF: 5,
    // nameF: 'firstQuery',
    // sortByF: 'date'}))

    // correct index

    // store.dispatch(editQueryInF(13, {queryF: 'second',
    // maxResultsF: 6,
    // nameF: 'secondQuery',
    // sortByF: 'name'}));

    //incorrect index

    // store.dispatch(editQueryInF(11, {queryF: 'second',
    // maxResultsF: 6,
    // nameF: 'secondQuery',
    // sortByF: 'name'}));

    // correct index

    // store.dispatch(deleteQueryInF(13));

    // incorrect index

    // store.dispatch(deleteQueryInF(11));

    // let arrdataF = [{"id":1595616641633.7625,"data":{"queryF":"a","maxResultsF":12,"nameF":"a","sortByF":"viewCount"}}];
    // store.dispatch(setArrDataFInF(arrdataF));

    //let data = {items:[]};
    //store.dispatch(setData(data));
  }
}

export default debugStore;