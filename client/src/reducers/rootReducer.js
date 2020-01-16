import { combineReducers } from 'redux';

import tokenReducer from './authReducer';

export default combineReducers({
  token: tokenReducer
});