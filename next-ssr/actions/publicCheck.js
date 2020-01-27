import axios from 'axios';
import cookie from 'js-cookie';

// Filmleri getiren typelar
const FETCH_CHECK_PENDING = "FETCH_CHECK_PENDING"; 
const FETCH_CHECK_FULFILLED = "FETCH_CHECK_FULFILLED";
const FETCH_CHECK_REJECTED = "FETCH_CHECK_REJECTED"; 



// Güncellendiğinde olan typelar
const UPDATE_CHECK_PENDING = "UPDATE_CHECK_PENDING"; 
const UPDATE_CHECK_FULFILLED = "UPDATE_CHECK_FULFILLED";
const UPDATE_CHECK_REJECTED = "UPDATE_CHECK_REJECTED"; 

function getCheckMovie(page){
	return dispatch => {
		dispatch({
			type: "FETCH_CHECK",
			payload: axios({
        url: `http://localhost:3001/api/checks/${page}`,
        method: 'get',
        headers: {
          'x-access-token': cookie.get('token')
        },
      }).then(movie => movie)
		})
	}
}

function postCheckMovie(status, user_id){
	return dispatch => {
		dispatch({
			type: "UPDATE_CHECK",
			payload: axios({
        url: "http://localhost:3001/api/checks/",
        method: 'post',
        headers: {
          'x-access-token': cookie.get('token')
        },
        data: {
          [status]: user_id
        }
      }).then(check => check)
		})
	}
}

export {
  FETCH_CHECK_PENDING,
  FETCH_CHECK_FULFILLED,
  FETCH_CHECK_REJECTED,

  UPDATE_CHECK_PENDING,
  UPDATE_CHECK_FULFILLED,
  UPDATE_CHECK_REJECTED,

  getCheckMovie,
  postCheckMovie
};