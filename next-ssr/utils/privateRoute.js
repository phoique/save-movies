import { useEffect } from 'react';
import Router from 'next/router';
import { getToken } from './token';

function PrivateRoute({ children }) {
  // Token yoksa 
  useEffect(() => {
    if(!getToken()) {
      Router.push('/');
    }
  }, [getToken()]);
  // Token varsa.
  return(children); 
}

export default PrivateRoute;