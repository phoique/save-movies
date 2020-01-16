import { combineReducers } from 'redux';

import auth from './authReducer';
import myMovies from './myMoviesReducer';

export default combineReducers({
  authToken: auth,
  myMovies: myMovies
});