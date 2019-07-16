import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

const user_info = localStorage.getItem('token') ?
    decode(localStorage.getItem('token') || null) 
    : 
    null;

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    props => (
      (localStorage.getItem("token") !== null && user_info.user_role === 'admin') ? 
      <Component {...props} />
      : 
      <Redirect to="/" /> 
  )} />
);

export default AdminRoute;