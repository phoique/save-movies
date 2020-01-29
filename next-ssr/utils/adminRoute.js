import { useEffect } from 'react';
import Router from 'next/router';
import { getToken, getUserInfo } from './token';

function AdminRoute({ children }) {
  // Token yoksa 
  useEffect(() => {
    if(!getToken() || getUserInfo('role') !== 'admin') {
      Router.push('/');
    }
  }, [getToken()]);
  // Token varsa.
  return(children); 
}

export default AdminRoute;