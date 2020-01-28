import axios from 'axios';
import cookie from 'js-cookie';

const ADD_MOVIE_PENDING = 'ADD_MOVIE_PENDING'; 
const ADD_MOVIE_FULFILLED = 'ADD_MOVIE_FULFILLED';
const ADD_MOVIE_REJECTED = 'ADD_MOVIE_REJECTED'; 

function addMovie({username, name, genre, content, public_user}) {
  return dispatch =>{
    dispatch({
      type: 'ADD_MOVIE',
      payload: axios({
        url: 'http://localhost:3001/api/add',
        headers: {
          'x-access-token': cookie.get('token')
        },
        method: 'post',
        data: {
          username,
          name,
          genre: genre.map(x => x.value),
          content,
          public_user
        }
      }).then(newData => newData)
    });
  }; 
}

export {
  addMovie,
  ADD_MOVIE_PENDING,
  ADD_MOVIE_FULFILLED,
  ADD_MOVIE_REJECTED
};