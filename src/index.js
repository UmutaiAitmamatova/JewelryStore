import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import { BrowserRouter as Router } from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(store);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

