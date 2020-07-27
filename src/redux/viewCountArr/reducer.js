import { GET_VIEW_COUNT_ARR_REQ,
   GET_VIEW_COUNT_ARR_RES, GET_VIEW_COUNT_ARR_ERR } from './actions';

const initialViewCount = {
  isFetching: false,
  status: 'success',
  viewCountArr: []
};

const viewCountArr = (state = initialViewCount, action) => {
  const { type, isFetching, status, viewCountArr } = action;
  switch (type) {
    case GET_VIEW_COUNT_ARR_REQ:
      return {...state, isFetching};
    case GET_VIEW_COUNT_ARR_RES:
      return {isFetching, status, viewCountArr};
    case GET_VIEW_COUNT_ARR_ERR:
      return {...state, isFetching, status};
    default:
      return state;
  }
};

export default viewCountArr;
