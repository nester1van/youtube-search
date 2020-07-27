import { combineReducers } from 'redux';
import user from './user/reducer';
import token from './token/reducer';
import search from './search/reducer';
import appearance from './appearance/reducer';
import favorites from './favorites/reducer';
import viewCountArr from './viewCountArr/reducer';

const reducers = combineReducers({
  user,
  token,
  search,
  appearance,
  favorites,
  viewCountArr
});

export default reducers;
