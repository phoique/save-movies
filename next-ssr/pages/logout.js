import React, { useEffect } from 'react';
import cookie from 'js-cookie';
import Router from 'next/router';

function Logout() {

  // Tokeni silme
  cookie.remove('token');

  // Yaşam methodu ile silindiğini kontrol edip yönlendirme.
  useEffect(() => {
    if(cookie.get('token') === undefined) {
      Router.push('/');
    }
  }, []);

  return null;

}

export default Logout;
