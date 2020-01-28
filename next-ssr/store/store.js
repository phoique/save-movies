import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

const initStore = () => createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxPromise, thunk, logger)
  )
);


export { initStore };