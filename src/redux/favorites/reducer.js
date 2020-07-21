import { SET_QUERY_F, SET_MAX_RESULTS_F, 
  SET_QUERY_NAME_F, SET_SORT_BY_F, ADD_QUERY_TO_F } from './actions';

const initialFavorites = {
  queryF: '',
  maxResultsF: 25,
  nameF: '',
  sortByF: 'viewCount',
  dataF: []
};

const favorites = (state = initialFavorites, action) => {
  const { type, queryF, maxResultsF, nameF, sortByF, queryData } = action;
  switch(type) {
    case SET_QUERY_F: 
      return {...state, queryF};
    case SET_MAX_RESULTS_F:
      return {...state, maxResultsF};
    case SET_QUERY_NAME_F:
      return {...state, nameF};
    case SET_SORT_BY_F:
      return {...state, sortByF};
    case ADD_QUERY_TO_F:
      let dataF = state.dataF;
      dataF.push(queryData);
      return {...state, dataF};
    default:
      return state;
  }
};

export default favorites;
