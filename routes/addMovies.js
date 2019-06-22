import express from 'express';
import path from 'path';

const addMoviesRoute = express.Router();

addMoviesRoute.get('/', (request, response) => {
  response.render('add', {
    title: 'Film ekle',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

addMoviesRoute.post('/', (request, response) => {
  console.log(request.body);
  const file = request.files.movie_img;

  file.mv('./uploads/image/' + file.name);

});

export default addMoviesRoute;