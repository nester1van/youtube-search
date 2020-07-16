import { combineReducers } from 'redux';
import user from './user/reducer';
import token from './token/reducer';

const reducers = combineReducers({
  user,
  token
});

export default reducers;
