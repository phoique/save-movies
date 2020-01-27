import React from 'react';
import Router from 'next/link';
import decode from 'jwt-decode';
import cookie from 'js-cookie';



function AdminRoute({ children }) {
  
  const token = cookie.get('token');
  const user_info = token ? decode(token || null) : null;

  return(children);
}

export default AdminRoute;