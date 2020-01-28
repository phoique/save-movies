import React, { useEffect } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import decode from 'jwt-decode';

function AdminRoute({ children }) {
  // Token
  const token = cookie.get('token');
  const user_info = token ? decode(token || null) : null;

  // Token yoksa 
  useEffect(() => {
    if(!token || user_info.user_role !== "admin") {
       Router.push('/');
    }
  }, [token]);
  // Token varsa.
  return(children); 
}

export default AdminRoute;