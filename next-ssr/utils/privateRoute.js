import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({token, component: Component, ...rest }) => (
  <Route {...rest} render={
    props => (
      (token !== null) ? 
      <Component {...props} /> 
      : 
      <Redirect to="/login" />
  )} />
)

export default PrivateRoute;