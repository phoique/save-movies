import axios from 'axios';
import cookie from 'js-cookie';

const FETCH_MOVIE_PENDING = 'FETCH_MOVIE_PENDING'; 
const FETCH_MOVIE_FULFILLED = 'FETCH_MOVIE_FULFILLED';
const FETCH_MOVIE_REJECTED = 'FETCH_MOVIE_REJECTED'; 

function getMovies(username, pageNumber){

    return dispatch => {
        dispatch({
            type: 'FETCH_MOVIE',
            payload: axios({
                url: `http://localhost:3001/api/movies/${pageNumber}`,
                headers: {
                    'x-access-token': cookie.get('token')
                },
                method: 'post',
                data: {
                    'username': username
                }
            }).then(movies => movies)
        });
    };
}

export {
    FETCH_MOVIE_PENDING,
    FETCH_MOVIE_FULFILLED,
    FETCH_MOVIE_REJECTED,
    getMovies
};