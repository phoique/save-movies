import cookie from 'js-cookie';
import decode from 'jwt-decode';

function getToken() {
  const token = cookie.get('token');
  if(token) {
    return token;
  }
  else {
    return undefined;
  }
}

function setToken(token) {
  if(token) {
    cookie.set('token', token);
    return true;
  }
  else {
    return false;
  }
}

function removeToken() {
  cookie.remove('token');
  if(getToken()) {
    return true;
  }
  else {
    return false;
  }
}

function getUserInfo(value) {
  if(getToken()) {

    const info = decode(getToken());

    if(value === 'all') {
      return info;
    }
    else if (value === 'username') {
      return info.username;
    }
    else if (value === 'role') {
      return info.user_role;
    }
    else {
      return null;
    }

  }
  else {
    return undefined;
  }
}

export { getToken, setToken, removeToken, getUserInfo };