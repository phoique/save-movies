import axios from 'axios';
const FETCH_AUTH_PENDING = 'FETCH_AUTH_PENDING'; // Yükleniyor.
const FETCH_AUTH_FULFILLED = 'FETCH_AUTH_FULFILLED'; // Yüklendi.
const FETCH_AUTH_REJECTED = 'FETCH_AUTH_REJECTED'; // Sorun var.

function fetchAuth(endpoints, username, password){

  const endpoint = (endpoints === 'login') ? 'login' : 'register';

  return dispatch => {
    dispatch({
      type: 'FETCH_AUTH',
      payload: axios.post(`http://localhost:3001/api/${endpoint}`, {
        username,
        password
      }).then(response => response.data.token)
    });
  };
}

export {
  FETCH_AUTH_PENDING,
  FETCH_AUTH_FULFILLED,
  FETCH_AUTH_REJECTED,
  fetchAuth
};