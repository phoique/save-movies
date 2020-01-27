import Router from 'next/router';
import cookie from 'js-cookie';

function IsLoginRoute({ children }) {
  
  // Token
  const token = cookie.get('token');

  // Token varsa giriş ve kayıt sayfaları görünmeyecek.
  if(token) {
    return Router.push('/');
  }
  // Token yoksa giriş ve kayıt sayfaları görünecek.
  else {
    return(children);
  }
}

export default IsLoginRoute;