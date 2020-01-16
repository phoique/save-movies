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
				...state,
				fetching: true
			};
		case FETCH_LOGIN_FULFILLED:
			localStorage.setItem('token', payload);
			return {
				token: payload,
				fetching: false
			};
		case FETCH_LOGIN_REJECTED:
			return {
				...state,
				error: payload,
				fetching: false
			};
		default:
			return state;
	}
}
