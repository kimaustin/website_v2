import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { Normalize } from 'styled-normalize';
import ReactDOM from 'react-dom';
import store from './store';
import { load_defaults } from './api';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Normalize />
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

load_defaults();  
reportWebVitals();
