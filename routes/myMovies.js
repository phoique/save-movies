import express from 'express';

// Models
import movieModel from '../models/Movie';
import userModel from '../models/User';

const myMoviesRoute = express.Router();

myMoviesRoute.get('/', (request, response) => {

  const user = userModel.findOne({ username: request.session.username });

  user.then(user_id => {
    const movies = movieModel.paginate({ user_id }, { page: 1, limit: 12 });

    movies.then(movie => {
      response.render('movies', {
        title: 'Filmler',
        login: (request.session.username) ? true : false,
        username: request.session.username,
        user_role: request.session.role,
        movies: movie.docs,
        pages_number: Array(movie.pages).fill(0).map((e,i)=>i+1)
      });
    });
    movies.catch(error => console.log(error));

  });
  user.catch(error => console.log(error));

});

myMoviesRoute.get('/:page', (request, response) => {

  const user = userModel.findOne({ username: request.session.username });

  user.then(user_id => {
    const movies = movieModel.paginate({ user_id }, { page: request.params.page, limit: 12 });

    movies.then(movie => {
      console.log(movie.docs)
      response.render('movies', {
        title: 'Filmler',
        login: (request.session.username) ? true : false,
        username: request.session.username,
        user_role: request.session.role,
        movies: movie.docs,
        pages_number: Array(movie.pages).fill(0).map((e,i)=>i+1)
      });
    });
    movies.catch(error => console.log(error));

  });
  user.catch(error => console.log(error));

});

export default myMoviesRoute;