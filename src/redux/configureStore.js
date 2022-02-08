import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cryptoDetailsReducer, cryptosReducer } from './crypto/crypto';

const reducer = combineReducers({
  cryptosReducer,
  cryptoDetailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
