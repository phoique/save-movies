import express from 'express';

// Models
import movieModel from '../models/Movie';
import userModel from '../models/User';

const myMoviesRoute = express.Router();

myMoviesRoute.get('/', (request, response) => {
  const user = userModel.findOne({ username: request.session.username });

  user.then(user_id => {
    const movies = movieModel.find({ user_id });

    movies.then(movie => {
      response.render('movies', {
        title: 'Filmler',
        login: (request.session.username) ? true : false,
        username: request.session.username,
        user_role: request.session.role,
        movies: movie
      });
    });
    movies.catch(error => console.log(error));

  });
  user.catch(error => console.log(error));
});

export default myMoviesRoute;