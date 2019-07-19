import Express from 'express';
import movieModel from '../models/Movie';

const checkRoute = Express.Router();

checkRoute.get('/', (request, response) => {

  // Kullanıcı tarafından yayınlanmak istenen ama admin tarafından onaylanmayan filmler.
  const check_movies = movieModel.paginate({ public_user: true, public_check_admin: null }, { page: 1, limit: 12 });

  check_movies.then(movies => {

    response.json({ 
      movies: movies.docs,
      pages_number: movies.pages
    });

  });

  check_movies.catch(error => response.json({error}));

});

checkRoute.get('/:page', (request, response) => {

  // Kullanıcı tarafından yayınlanmak istenen ama admin tarafından onaylanmayan filmler.
  const check_movies = movieModel.paginate({ public_user: true, public_check_admin: null }, { page: request.params.page, limit: 12 });

  check_movies.then(movies => {

    response.json({ 
      movies: movies.docs,
      pages_number: movies.pages
    });

  });

  check_movies.catch(error => response.json({error}));

});

checkRoute.post('/', (request, response) => {
  // true olanlar admin tarafından onaylanmış artık listelenen filmler.
  // id değeri geliyor.
  const { public_true, public_false } = request.body;

  if(public_true) {

    const public_movie_true = movieModel.findByIdAndUpdate(public_true, { public_check_admin: true }, { new: true } );

    public_movie_true.then(movie => {
      response.json({
        publicMovie: movie
      });
    });

    public_movie_true.catch(error => response.json({error}));

  }
  else if(public_false) {

    const public_movie_false = movieModel.findByIdAndUpdate(public_false, { public_check_admin: false }, { new: true } );

    public_movie_false.then(movie => {
      response.json({
        publicMovie: movie
      });
    });

    public_movie_false.catch(error => response.json({error}));

  }
  else {
    response.json({
      status: 404,
      error: 'Böyle bir istek yoktur.'
    });
  }

});

export default checkRoute;