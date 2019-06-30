import express from 'express';

// Models
import movieModel from '../models/Movie';
import userModel from '../models/User';

const myMoviesRoute = express.Router();

// filmleri listeleme sayfasının ilk sayfası(page)
myMoviesRoute.get('/', (request, response) => {

  // Kullanıcının filmlerini arıyor.
  const user = userModel.findOne({ username: request.session.username });

  // Filmleri listeliyor.
  user.then(user_id => {
    // Paginate işlemi yapılıyor limit 12 sayfa ise 1 
    const movies = movieModel.paginate({ user_id }, { page: 1, limit: 12 });

    movies.then(movie => {
      response.render('movies', {
        title: 'Filmler',
        login: (request.session.username) ? true : false,
        username: request.session.username,
        user_role: request.session.role,
        movies: movie.docs,
        // sayfa numarası 2 veya büyük ise 1,2,3.. numaralar çıkıyor.
        pages_number: (movie.pages > 1) ? Array(movie.pages).fill(0).map((e,i)=>i+1) : null
      });
    });
    movies.catch(error => console.log(error));

  });
  user.catch(error => console.log(error));

});

// Sayfalamada 2 ve üzeri bir sayfa var ise burası çalışıyor. 
myMoviesRoute.get('/:page', (request, response) => {

  const user = userModel.findOne({ username: request.session.username });

  user.then(user_id => {

    // Kullanıcının alk kısımda tıkladığı 1 2 3.. numaralar /1 /2 şeklinde o numara kaç ise o
    // sayfa açılıyor.
    const movies = movieModel.paginate({ user_id }, { page: request.params.page, limit: 12 });

    movies.then(movie => {
      console.log(movie.docs)
      response.render('movies', {
        title: 'Filmler',
        login: (request.session.username) ? true : false,
        username: request.session.username,
        user_role: request.session.role,
        movies: movie.docs,
        pages_number: (movie.pages > 1) ? Array(movie.pages).fill(0).map((e,i)=>i+1) : null
      });
    });
    movies.catch(error => console.log(error));

  });
  user.catch(error => console.log(error));

});

export default myMoviesRoute;