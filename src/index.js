import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// REDUX
import { Provider } from 'react-redux';
import store from './redux/store.js';

import CssBaseline from '@material-ui/core/CssBaseline'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root'),

);