import { combineReducers } from 'redux';

import auth from './authReducer';
import myMovies from './myMoviesReducer';
import addMovie from './addMovieReducer';
import users from './usersReducer';
import check from './publicCheckReducer';

export default combineReducers({
  authToken: auth,
  myMovies: myMovies,
  newMovie: addMovie,
  users: users,
  checkMovie: check
});