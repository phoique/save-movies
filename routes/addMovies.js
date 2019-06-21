import express from 'express';

const addMoviesRoute = express.Router();

addMoviesRoute.get('/', (request, response) => {
  response.render('add', {
    title: 'Film ekle',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

export default addMoviesRoute;