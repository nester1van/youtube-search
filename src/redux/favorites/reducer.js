import { SET_QUERY_F, SET_MAX_RESULTS_F, 
  SET_QUERY_NAME_F, SET_SORT_BY_F } from './actions';

const initialFavorites = {
  queryF: '',
  maxResultsF: 25,
  nameF: '',
  sortByF: 'viewCount',
  dataF: []
};

const favorites = (state = initialFavorites, action) => {
  const { type, queryF, maxResultsF, nameF, sortByF, dataF} = action;
  switch(type) {
    case SET_QUERY_F: 
      return {...state, queryF};
    case SET_MAX_RESULTS_F:
      return {...state, maxResultsF};
    case SET_QUERY_NAME_F:
      return {...state, nameF};
    case SET_SORT_BY_F:
      return {...state, sortByF};
    default:
      return state;
  }
};

export default favorites;
