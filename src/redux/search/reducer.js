import { SET_QUERY, SET_MAX_RESULTS, SET_QUERY_NAME, GET_VIDEOS_REQ, 
  GET_VIDEOS_RES, GET_VIDEOS_ERR } from './actions';

const initialSearch = {
  query: '',
  maxResults: 25,
  name: '',
  isFetching: false,
  status: 'success',
  data: {}
};

const search = (state = initialSearch, action) => {
  const {type, query, maxResults, name, 
    isFetching, status, data} = action;
  switch(type) {
    case SET_QUERY: 
      return {...state, query};
    case SET_MAX_RESULTS:
      return {...state, maxResults};
    case SET_QUERY_NAME:
      return {...state, name};
    case GET_VIDEOS_REQ:
      return {...state, isFetching};
    case GET_VIDEOS_RES:
      return {...state, isFetching, status, data};
    case GET_VIDEOS_ERR:
      return {...state, isFetching, status};
    default:
      return state;
  } 
}

export default search;