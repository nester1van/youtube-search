import { generatorId } from './generatorId';

// action types
export const SET_QUERY_F = 'SET_QUERY_F';
export const SET_MAX_RESULTS_F = 'SET_MAX_RESULTS_F';
export const SET_QUERY_NAME_F = 'SET_QUERY_NAME_F';
export const SET_SORT_BY_F = 'SET_SORT_BY_F';
export const SET_SELECTED_ID_F = 'SET_SELECTED_ID_F';

export const ADD_QUERY_TO_F = 'ADD_QUERY_TO_F';
export const EDIT_QUERY_IN_F = 'EDIT_QUERY_IN_F'; 
export const DELETE_QUERY_IN_F ='DELETE_QUERY_IN_F';

export const SET_ARRDATAF_IN_F = 'SET_ARRDATAF_IN_F';

// action creators
export const setQueryF = (queryF) => ({
  type: SET_QUERY_F,
  queryF
});
export const setMaxResultsF = (maxResultsF) => ({
  type: SET_MAX_RESULTS_F,
  maxResultsF
});

export const setQueryNameF = (nameF) => ({
  type: SET_QUERY_NAME_F,
  nameF
});

export const setSortByF = (sortByF) => ({
  type: SET_SORT_BY_F,
  sortByF
});

export const setSelectedIdF = (selectedId) => ({
  type: SET_SELECTED_ID_F,
  selectedId
});

export const addQueryToF = (data) => {
  const id = generatorId();
  return ({
    type: ADD_QUERY_TO_F,
    id,
    data
  })
};

export const editQueryInF = (id, data) => ({
  type: EDIT_QUERY_IN_F,
  id,
  data
});

export const deleteQueryInF = (id) => ({
  type: DELETE_QUERY_IN_F,
  id
});

export const setArrDataFInF = (arrDataF) => ({
  type: SET_ARRDATAF_IN_F,
  arrDataF
});
