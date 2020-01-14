import React, { createContext, useReducer, useEffect } from 'react';

// Default state
const initialState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null
}

// Action
const TOKEN = 'TOKEN';

const getToken = (token) => ({
  type: TOKEN,
  payload: {
    token
  }
});

// Reducer
const tokenReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case TOKEN:
    return { ...state, ...payload }

  default:
    return state
  }
}

// Context
const Context = createContext();

const Store = ({ children }) => {

  const [state, dispatch] = useReducer(tokenReducer, initialState);
  const value = { state, dispatch };

  return(
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export { Context, getToken };
export default Store;