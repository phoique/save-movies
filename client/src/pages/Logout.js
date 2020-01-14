import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { getToken } from '../actions/token';
import { Context } from '../store/store';

function Logout() {
  const { dispatch } = useContext(Context);
  // Kullanıcı çıkış yaptıktan sonra token siliniyor.
  dispatch(getToken(null));
  localStorage.clear();

  return (
    <Redirect to="/" />
  );
}

export default Logout;
