function isLogin(request, response, next) {

  if(request.session.username && request.session.role) {
    next();
  }
  else {
    response.redirect('/login');
  }
  
}

export default isLogin;