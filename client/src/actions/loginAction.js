import axios from 'axios';
const FETCH_LOGIN_PENDING = "FETCH_LOGIN_PENDING"; // Yükleniyor.
const FETCH_LOGIN_FULFILLED = "FETCH_LOGIN_FULFILLED"; // Yüklendi.
const FETCH_LOGIN_REJECTED = "FETCH_LOGIN_REJECTED"; // Sorun var.

function fetchLogin(username, password){
	return dispatch => {
		dispatch({
			type: "FETCH_LOGIN",
			payload: axios.post('http://localhost:3001/api/login', {
				username,
				password
			}).then(response => response.data.token)
		})
	}
}

export {
  FETCH_LOGIN_PENDING,
  FETCH_LOGIN_FULFILLED,
  FETCH_LOGIN_REJECTED,
  fetchLogin
};