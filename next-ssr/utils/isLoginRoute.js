import Router from 'next/router';
import { getToken } from './token';

function IsLoginRoute({ children }) {
  // Token varsa giriş ve kayıt sayfaları görünmeyecek.
  if(getToken()) {
    return Router.push('/');
  }
  // Token yoksa giriş ve kayıt sayfaları görünecek.
  else {
    return(children);
  }
}

export default IsLoginRoute;