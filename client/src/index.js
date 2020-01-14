import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from './store/store';

ReactDOM.render(
  <Store>
    <App />
  </Store>, document.getElementById('root'));