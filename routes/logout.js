import express from 'express';

const logoutRoute = express.Router();

// User login view
logoutRoute.get('/', (request, response) => {
  request.session.username = null;
  request.session.role = null;
  response.redirect('/');
});


export default logoutRoute;