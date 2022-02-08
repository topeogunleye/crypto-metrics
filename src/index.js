import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import CryptoContext from './CryptoContext';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CryptoContext>
        <App />
      </CryptoContext>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
