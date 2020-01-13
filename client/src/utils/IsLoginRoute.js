import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const IsLoginRoute = ({token, component: Component, ...rest }) => (
  <Route {...rest} render={
    props => (
      (token !== null) ? 
      <Redirect to="/" />
      : 
      <Component {...props} />
  )} />
)

export default IsLoginRoute;
