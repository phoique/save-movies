import { TOKEN } from '../actions/token';

// Default state
const initialState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null
}

// Reducer
export default (state = initialState, { type, payload }) => {
  switch (type) {

  case TOKEN:
    return { ...state, ...payload }

  default:
    return state
  }
}

export { initialState };