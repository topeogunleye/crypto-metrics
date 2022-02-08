import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cryptosReducer from './crypto/crypto';

const reducer = combineReducers({
  cryptosReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
