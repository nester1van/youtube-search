import { combineReducers } from 'redux';
import user from './user/reducer';
import token from './token/reducer';
import search from './search/reducer';

const reducers = combineReducers({
  user,
  token,
  search
});

export default reducers;
