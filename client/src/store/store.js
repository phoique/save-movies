import React, { createContext, useReducer } from 'react';
import tokenReducer, { initialState } from '../reducers/tokenReducer';

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

export { Context };
export default Store;