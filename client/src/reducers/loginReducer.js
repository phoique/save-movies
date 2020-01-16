import { 
  FETCH_LOGIN_PENDING, 
  FETCH_LOGIN_FULFILLED,
  FETCH_LOGIN_REJECTED } from '../actions/loginAction';

// Default state
const initialState = {
  fetching: false,
  token: null,
  error: {},
}

// Reducer
export default (state = initialState, { type, payload }) => {
	switch (type){
		case FETCH_LOGIN_PENDING:
			return {
				fetching: true
			};
		case FETCH_LOGIN_FULFILLED:
			return {
				token: payload,
				fetching: false
			};
		case FETCH_LOGIN_REJECTED:
			return {
				error: payload,
				fetching: false
			};
		default:
			return state;
	}
}
