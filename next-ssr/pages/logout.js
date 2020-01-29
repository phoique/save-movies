import { useEffect } from 'react';
import Router from 'next/router';
import { removeToken, getToken } from '../utils/token';

function Logout() {

  // Tokeni silme
  removeToken();

  // Yaşam methodu ile silindiğini kontrol edip yönlendirme.
  useEffect(() => {
    if(getToken() === undefined) {
      Router.push('/');
    }
  }, []);

  return null;

}

export default Logout;
