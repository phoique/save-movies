import express from 'express';

// Models
import movieModel from '../models/Movie';
import userModel from '../models/User';

const myMoviesRoute = express.Router();

myMoviesRoute.get('/', (request, response) => {
  response.json({
    status: 200
  });
});

myMoviesRoute.post('/', (request, response) => {

  const { username } = request.body;

  // Kullanıcının filmlerini arıyor.
  const user = userModel.findOne({ username });

  // Filmleri listeliyor.
  user.then(user_id => {
    // Paginate işlemi yapılıyor limit 12 sayfa ise 1 
    const movies = movieModel.paginate({ user_id }, { page: 1, limit: 12 });

    movies.then(movie => {
      response.json({
        movies: movie.docs,
        pages_number: movie.pages
      });
    });
    movies.catch(error => response.json({ error }));

  });
  user.catch(error => response.json({ error }));

});

// Sayfalamada 2 ve üzeri bir sayfa var ise burası çalışıyor. 
myMoviesRoute.post('/:page', (request, response) => {

  const{ username } = request.body;

  const user = userModel.findOne({ username });

  user.then(user_id => {

    // Kullanıcının alk kısımda tıkladığı 1 2 3.. numaralar /1 /2 şeklinde o numara kaç ise o
    // sayfa açılıyor.
    const movies = movieModel.paginate({ user_id }, { page: request.params.page, limit: 12 });

    movies.then(movie => {
      response.json({
        movies: movie.docs,
        pages_number: movie.pages
      });
    });
    movies.catch(error => response.json({ error }));

  });
  user.catch(error => response.json({ error }));

});

export default myMoviesRoute;