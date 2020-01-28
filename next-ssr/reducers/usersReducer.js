import {
    FETCH_USER_PENDING,
    FETCH_USER_FULFILLED,
    FETCH_USER_REJECTED,

    DELETE_USER_PENDING,
    DELETE_USER_FULFILLED,
    DELETE_USER_REJECTED,

    PERM_USER_PENDING,
    PERM_USER_FULFILLED,
    PERM_USER_REJECTED
} from '../actions/users';

// Default state
const initialState = {
    fetching: false,
    users: [],
    permissionUser: [],
    deleteUser: [],
    page: null,
    error: {},
};

// Reducer
export default (state = initialState, { type, payload }) => {
    switch (type){
    // Kullanıcı getirme
    case FETCH_USER_PENDING:
        return {
            ...state,
            fetching: true
        };
    case FETCH_USER_FULFILLED:
        return {
            ...state,
            users: payload.data.users,
            page: payload.data.pages_number,
            fetching: false
        };
    case FETCH_USER_REJECTED:
        return {
            error: payload,
            fetching: false
        };
      
    // Kullanıcı silme
    case DELETE_USER_PENDING:
        return {
            ...state,
            fetching: true
        };
    case DELETE_USER_FULFILLED:
        return {
            ...state,
            deleteUser: payload.data.delete_user,
            fetching: false
        };
    case DELETE_USER_REJECTED:
        return {
            error: payload,
            fetching: false
        };
    
    // Kullanıcı yetkilendirme
    case PERM_USER_PENDING:
        return {
            ...state,
            fetching: true
        };
    case PERM_USER_FULFILLED:
        return {
            ...state,
            permissionUser: payload.data.update_user,
            fetching: false
        };
    case PERM_USER_REJECTED:
        return {
            error: payload,
            fetching: false
        };
    default:
        return state;
    }
};
