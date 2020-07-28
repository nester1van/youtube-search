import axios from 'axios';
import { gapiClient } from '../../config';

// action types
export const GET_VIEW_COUNT_ARR_REQ = 'GET_VIEW_COUNT_ARR_REQ';
export const GET_VIEW_COUNT_ARR_RES = 'GET_VIEW_COUNT_ARR_RES';
export const GET_VIEW_COUNT_ARR_ERR = 'GET_VIEW_COUNT_ARR_ERR';

// action creators
const getViewCountArrReq = () => ({
  type: GET_VIEW_COUNT_ARR_REQ,
  isFetching: true
});

const getViewCountArrRes = (viewCountArr) => ({
  type: GET_VIEW_COUNT_ARR_RES,
  isFetching: false,
  status: 'success',
  viewCountArr
});

const getViewCountArrErr = () => ({
  type: GET_VIEW_COUNT_ARR_ERR,
  isFetching: false,
  status: 'error'
});

const { apiKey: key } = gapiClient;

// URL creator
const url = (videoId) => {
  return `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${key}`;
}

const getViewCountArr = (videoIdArr) => async (dispatch) =>  {

  let urlArr = videoIdArr.map(videoId => {
    if (!videoId) return undefined;
    return url(videoId);
  });
  console.log('urlArr', urlArr);
  dispatch(getViewCountArrReq());
  let viewCountArr = [], viewCountPromise = [];
  urlArr.forEach((url, index) => {
    if (!url) {
      viewCountArr[index] = undefined
    } else {
    viewCountPromise[index] = axios.get(url)
      .then(json => viewCountArr[index] = json.data.items[0].statistics.viewCount)
    }})
    
  await Promise.all(viewCountPromise);
  if (Array.isArray(viewCountArr) && viewCountArr.length > 0) {
    dispatch(getViewCountArrRes(viewCountArr));
  } else {
    dispatch(getViewCountArrErr());
  }
} 

export default getViewCountArr;