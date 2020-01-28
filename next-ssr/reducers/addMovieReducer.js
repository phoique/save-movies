import {
    ADD_MOVIE_PENDING,
    ADD_MOVIE_FULFILLED,
    ADD_MOVIE_REJECTED } from '../actions/addMovie';

// default state
const initialState = {
    fetching: false,
    newMovie: [],
    error: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_MOVIE_PENDING:
        return {
            ...state, 
            fetching: true
        };
    case ADD_MOVIE_FULFILLED:
        return { 
            ...state, 
            newMovie: payload.data.newMovie,
            fetching: false,
        };
    case ADD_MOVIE_REJECTED:
        return {
            ...state, 
            fetching: false,
            error: payload
        };
    default:
        return state;
    }
};

