import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './stores/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);

reportWebVitals();
