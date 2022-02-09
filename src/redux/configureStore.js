import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cryptosReducer, cryptoHistoryReducer } from './crypto/crypto';

const reducer = combineReducers({
  cryptosReducer,
  cryptoHistoryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
