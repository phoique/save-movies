import React from 'react';
import { Redirect } from 'react-router-dom';

function Logout() {
  localStorage.clear();
  return (
    <Redirect to="/" />
  );
}

export default Logout;
