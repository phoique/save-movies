import axios from 'axios';
import cookie from 'js-cookie';

// Kullanıcı yükleme typeları
const FETCH_USER_PENDING = 'FETCH_USER_PENDING'; 
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED'; 

// Kullanıcı silme typeları
const DELETE_USER_PENDING = 'DELETE_USER_PENDING'; 
const DELETE_USER_FULFILLED = 'DELETE_USER_FULFILLED';
const DELETE_USER_REJECTED = 'DELETE_USER_REJECTED'; 


// Kullanıcı yetkilendirme typeları
const PERM_USER_PENDING = 'PERM_USER_PENDING'; 
const PERM_USER_FULFILLED = 'PERM_USER_FULFILLED';
const PERM_USER_REJECTED = 'PERM_USER_REJECTED'; 

function getUser(pageNumber){
  return dispatch => {
    dispatch({
      type: 'FETCH_USER',
      payload: axios({
        url: `http://localhost:3001/api/users/${pageNumber}`,
        method: 'get',
        headers: {
          'x-access-token': cookie.get('token')
        }
      }).then(userList => userList)
    });
  };
}

function deleteUser(user_id){
  return dispatch => {
    dispatch({
      type: 'DELETE_USER',
      payload: axios({
        url: 'http://localhost:3001/api/users/',
        method: 'delete',
        headers: {
          'x-access-token': cookie.get('token')
        },
        data: {
          user_id
        }
      }).then(deleteUser => deleteUser)
    });
  };
}

function permUser(user_id){
  return dispatch => {
    dispatch({
      type: 'PERM_USER',
      payload: axios({
        url: 'http://localhost:3001/api/users/',
        method: 'put',
        headers: {
          'x-access-token': cookie.get('token')
        },
        data: {
          user_id
        }
      }).then(permUser => permUser)
    });
  };
}

export {
  FETCH_USER_PENDING, 
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED,
  
  DELETE_USER_PENDING,
  DELETE_USER_FULFILLED,
  DELETE_USER_REJECTED,

  PERM_USER_PENDING,
  PERM_USER_FULFILLED,
  PERM_USER_REJECTED,
  
  getUser,
  deleteUser,
  permUser
};