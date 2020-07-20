import { combineReducers } from 'redux';
import user from './user/reducer';
import token from './token/reducer';
import search from './search/reducer';
import appearance from './appearance/reducer';

const reducers = combineReducers({
  user,
  token,
  search,
  appearance
});

export default reducers;
