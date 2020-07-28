import axios from 'axios';
import { gapiClient } from '../../config';
import getViewCountArr from '../viewCountArr/actions';

// action types
export const SET_QUERY = 'SET_QUERY';
export const SET_MAX_RESULTS = 'SET_MAX_RESULTS';
export const SET_QUERY_NAME = 'SET_QUERY_NAME';
export const SET_SORT_BY = 'SET_SORT_BY';

export const SET_DATA = 'SET_DATA';

export const GET_VIDEOS_REQ = 'GET_VIDEOS_REQ';
export const GET_VIDEOS_RES = 'GET_VIDEOS_RES';
export const GET_VIDEOS_ERR = 'GET_VIDEOS_ERR';

// action creators 
export const setQuery = (query) => ({
  type: SET_QUERY,
  query
});
export const setMaxResults = (maxResults) => ({
  type: SET_MAX_RESULTS,
  maxResults
});

export const setQueryName = (name) => ({
  type: SET_QUERY_NAME,
  name
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  sortBy
});

// SET_DATA
export const setData = (data) => ({
  type: SET_DATA,
  data
});

const getVideosReq = () => ({
  type: GET_VIDEOS_REQ,
  isFetching: true
});
const getVideosRes = (data) => ({
  type: GET_VIDEOS_RES,
  isFetching: false,
  status: 'success',
  data
});
const getVideosErr = () => ({
  type: GET_VIDEOS_ERR,
  isFetching: false,
  status: 'error'
});

const { apiKey: key } = gapiClient;

// URL creator
const url = (query, maxResults, sortBy, key) => {
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&order=${sortBy}&maxResults=${maxResults}&q=${query}&key=${key}`;
}

const token = 'ya29.a0AfH6SMA2d8U4x1H3cGNS5iQDM6ruVkCgvfW2Vky2rwWL7Je6LAybAcW5W88frWA05RfnXfJPqkECcbYY6cy14Y_8Fky31LemWbUmmE1wIr-bG54oYLT18lIo4beOs-jhZLijBKHLhRp0B_lvDyEe-jQb3XaWMVq6hHD2';



// async action creator
const getVideos = (query, maxResults, sortBy) => (dispatch) => {

  dispatch(getVideosReq());
  return axios.get(url(query, maxResults, sortBy, key))
    .then(json => {
      console.log(json.data);
      let idArr = json.data.items.map(item => item.id.videoId);
      console.log(idArr);
      
      dispatch(getVideosRes(json.data))
      getViewCountArr(idArr)(dispatch);
    })
    .catch(() => dispatch(getVideosErr()))
}

export default getVideos;

