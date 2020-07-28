import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import debugStore from './debugStore';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

debugStore(store, false);

export default store;

