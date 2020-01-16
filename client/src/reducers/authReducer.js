import { 
  FETCH_AUTH_PENDING, 
  FETCH_AUTH_FULFILLED,
  FETCH_AUTH_REJECTED } from '../actions/authAction';

// Default state
const initialState = {
  fetching: false,
  token: null,
  error: {},
}

// Reducer
export default (state = initialState, { type, payload }) => {
	switch (type){
		case FETCH_AUTH_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_AUTH_FULFILLED:
			return {
				token: payload,
				fetching: false
			};
		case FETCH_AUTH_REJECTED:
			return {
				error: payload,
				fetching: false
			};
		default:
			return state;
	}
}
