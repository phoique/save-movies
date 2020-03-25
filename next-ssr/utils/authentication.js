import Router from 'next/router';
import cookies from 'next-cookies';
import decode from 'jwt-decode';

function RedirectOnError(context) {
  if(typeof window !== 'undefined') {
    return Router.push('/login');
  }
  else {
    context.res.writeHead(302, { Location: '/login' }).end();
  }
}

function Auth(context) {
  const { token } = cookies(context);
    
  if(!token) {
    RedirectOnError(context);
  }
}

function AuthRole(context) {
  const { token } = cookies(context);
  if(!token) {
    RedirectOnError(context);
  }
  else {
    const info = decode(token);
    if(info.user_role === "user") {
      context.res.writeHead(302, { Location: '/' }).end();
    }
  }
}

function IsLogin(context) {
  const { token } = cookies(context);
  if(token) {
    context.res.writeHead(302, { Location: '/' }).end();
  }
}


export { Auth, AuthRole, IsLogin };