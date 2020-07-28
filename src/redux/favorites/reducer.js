import { SET_QUERY_F, SET_MAX_RESULTS_F, 
  SET_QUERY_NAME_F, SET_SORT_BY_F, SET_SELECTED_ID_F,
  ADD_QUERY_TO_F, EDIT_QUERY_IN_F, DELETE_QUERY_IN_F,
  SET_ARRDATAF_IN_F } from './actions';

const initialFavorites = {
  queryF: '',
  maxResultsF: 25,
  nameF: '',
  sortByF: 'viewCount',
  dataF: [],
  selectedId: 0
};

const favorites = (state = initialFavorites, action) => {
  const { type, queryF, maxResultsF, nameF, 
    sortByF, id, data, arrDataF, selectedId } = action;

  let dataF, index;

  switch(type) {
    case SET_QUERY_F: 
      return {...state, queryF};
    case SET_MAX_RESULTS_F:
      return {...state, maxResultsF};
    case SET_QUERY_NAME_F:
      return {...state, nameF};
    case SET_SORT_BY_F:
      return {...state, sortByF};
    case SET_SELECTED_ID_F:
      return {...state, selectedId};
    case ADD_QUERY_TO_F:
      dataF = [...state.dataF, {id, data}];
      return {...state, dataF};
    case EDIT_QUERY_IN_F:
      dataF = [...state.dataF];
      index = dataF.findIndex(query => query.id === id);
      if (index === -1) {
        return state;
      } else {
        dataF[index] = {id, data};
        return {...state, dataF};
      }
    case DELETE_QUERY_IN_F:
      dataF = [...state.dataF];
      index = dataF.findIndex(query => query.id === id);
      if (index === -1) {
        return state;
      } else {
        dataF.splice(index, 1);
        return {...state, dataF};
      }
    case SET_ARRDATAF_IN_F:
      dataF = [...arrDataF];
      return {...state, dataF};
    default:
      return state;
  }
};

export default favorites;
