import React, { useEffect } from 'react';
import Router from 'next/router';
import decode from 'jwt-decode';
import cookie from 'js-cookie';



function AdminRoute({ children }) {
  
  const token = cookie.get('token');

  if(token) {
    return Router.push('/');
  }
  else {
    return(children);
  }
  
}

export default AdminRoute;