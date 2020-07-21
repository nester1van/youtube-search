// action types
export const SET_QUERY_F = 'SET_QUERY_F';
export const SET_MAX_RESULTS_F = 'SET_MAX_RESULTS_F';
export const SET_QUERY_NAME_F = 'SET_QUERY_NAME_F';
export const SET_SORT_BY_F = 'SET_SORT_BY_F';

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
})