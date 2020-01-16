import { 
  FETCH_MOVIE_PENDING, 
  FETCH_MOVIE_FULFILLED,
  FETCH_MOVIE_REJECTED } from '../actions/myMovies';

// Default state
const initialState = {
  fetching: false,
  movies: [],
  page: null,
  error: {},
}

// Reducer
export default (state = initialState, { type, payload }) => {
	switch (type){
		case FETCH_MOVIE_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_MOVIE_FULFILLED:
			return {
				movies: payload.data,
				fetching: false
			};
		case FETCH_MOVIE_REJECTED:
			return {
				error: payload,
				fetching: false
			};
		default:
			return state;
	}
}
