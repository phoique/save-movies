import { 
    FETCH_CHECK_PENDING,
    FETCH_CHECK_FULFILLED,
    FETCH_CHECK_REJECTED,

    UPDATE_CHECK_PENDING,
    UPDATE_CHECK_FULFILLED,
    UPDATE_CHECK_REJECTED } from '../actions/publicCheck';

// Default state
const initialState = {
    fetching: false,
    checkMovie: [],
    checkMovies: [],
    page: null,
    error: {},
};

// Reducer
export default (state = initialState, { type, payload }) => {
    switch (type){
    // Yüklendiğinde.
    case FETCH_CHECK_PENDING:
        return {
            ...state,
            fetching: true
        };
    case FETCH_CHECK_FULFILLED:
        return {
            ...state,
            checkMovies: payload.data.movies,
            page: payload.data.pages_number,
            fetching: false
        };
    case FETCH_CHECK_REJECTED:
        return {
            error: payload,
            fetching: false
        };

    // Güncellendiğinde.
    case UPDATE_CHECK_PENDING:
        return {
            ...state,
            fetching: true
        };
    case UPDATE_CHECK_FULFILLED:
        return {
            ...state,
            checkMovie: payload.data.publicMovie,
            page: payload.data.pages_number,
            fetching: false
        };
    case UPDATE_CHECK_REJECTED:
        return {
            error: payload,
            fetching: false
        };
    default:
        return state;
    }
};
