import axios from 'axios';
import { gapiClient } from '../../config';

// action types
export const SET_QUERY = 'SET_QUERY';
export const SET_MAX_RESULTS = 'SET_MAX_RESULTS';
export const SET_QUERY_NAME = 'SET_QUERY_NAME';
export const SET_SORT_BY = 'SET_SORT_BY';

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
})

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

// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&token=%22ya29.a0AfH6SMBKQU08zqR_IA_y9a53EKYHg6HVpwFP3pgPHyqQ309jfv4VZOSNl2jBEsg-bRVjap-v2qfXRl4ZMwzxZ8QO1-LCZdBjXPT-2vngA4NcCxpeabezGoXVk9mI-hewWpi2rDcBVZeY2aVIDbeDM3xFz3jJcn_gAwzJ%22
// 
// URL creator
const url = (query, maxResults, sortBy, key) => {
  // return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&access_token=${token}`;
  return `https://www.googleapis.com/youtube/v3/search?part=snippet&order=${sortBy}&maxResults=${maxResults}&q=${query}&key=${key}`;
}

// www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=react&access_token=ya29.a0AfH6SMA2d8U4x1H3cGNS5iQDM6ruVkCgvfW2Vky2rwWL7Je6LAybAcW5W88frWA05RfnXfJPqkECcbYY6cy14Y_8Fky31LemWbUmmE1wIr-bG54oYLT18lIo4beOs-jhZLijBKHLhRp0B_lvDyEe-jQb3XaWMVq6hHD2

const token = 'ya29.a0AfH6SMA2d8U4x1H3cGNS5iQDM6ruVkCgvfW2Vky2rwWL7Je6LAybAcW5W88frWA05RfnXfJPqkECcbYY6cy14Y_8Fky31LemWbUmmE1wIr-bG54oYLT18lIo4beOs-jhZLijBKHLhRp0B_lvDyEe-jQb3XaWMVq6hHD2';



// async action creator
const getVideos = () => (dispatch, getState) => {
  const { token, search } = getState();
  dispatch(getVideosReq());
  return axios.get(url(search.query, search.maxResults, search.sortBy, key))
    .then(json => {
      console.log(json);
      dispatch(getVideosRes(json.data))
    })
    .catch(() => dispatch(getVideosErr()))
}

export default getVideos;

