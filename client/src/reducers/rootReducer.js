import { combineReducers } from 'redux';

import auth from './authReducer';
import myMovies from './myMoviesReducer';
import addMovie from './addMovieReducer';

export default combineReducers({
  authToken: auth,
  myMovies: myMovies,
  newMovie: addMovie
});