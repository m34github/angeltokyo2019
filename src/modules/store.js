import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import test from './test';

const rootReducer = combineReducers({
  test
});

export default createStore(rootReducer, applyMiddleware(thunk));
