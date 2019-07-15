import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const IsLoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    props => (
      (localStorage.getItem("token") !== null) ? 
      <Redirect to="/" />
      : 
      <Component {...props} />
  )} />
)

export default IsLoginRoute;
