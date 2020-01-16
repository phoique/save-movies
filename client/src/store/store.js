import React from 'react';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(reduxPromise, thunk, logger)
	)
);

const Store = ({ children }) => (
    <Provider store={store}>
      { children }
    </Provider>
  );


export default Store;