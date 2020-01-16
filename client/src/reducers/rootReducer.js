import { combineReducers } from 'redux';

import tokenReducer from './loginReducer';

export default combineReducers({
  token: tokenReducer
});