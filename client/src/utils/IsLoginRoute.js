import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const IsLoginRoute = ({token, component: Component, ...rest }) => (
  <Route {...rest} render={
    props => (
      // gelen token objesinde anahtar yok ise yani kullanıcı bilgilerine dair bir şey
      // yoksa giriş yapmamış demektir.
      (Object.keys(token).length !== 0) ? 
      <Redirect to="/" />
      : 
      <Component {...props} />
  )} />
)

export default IsLoginRoute;
