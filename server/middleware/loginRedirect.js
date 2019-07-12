function loginRedirect(request, response, next) {

  if(request.session.username && request.session.role) {
    response.redirect('/');
  }

  else {
    next();
  }

}

export default loginRedirect;