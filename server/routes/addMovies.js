import express from 'express';

// models
import movieModel from '../models/Movie';
import userModel from '../models/User';

const addMoviesRoute = express.Router();

addMoviesRoute.get('/', (request, response) => {
  response.json({
    status: 200
  });
});

addMoviesRoute.post('/', async (request, response) => {

  const { username, name, genre, content, public_user } = request.body;

  // Kullanıcı bilgileri buradan id alacağız.
  const user = userModel.findOne({username});

  user.then(user_id => {

    // Filmi kaydetme
    // public_user checkbox'ından gelen değer eğer işaretli ise on geliyor
    // işaret yok ise değer gelmiyor haliyle false oluyor.
    const addMovie = new movieModel({
      user_id,
      name,
      genre,
      image_name: (request.files) ? request.files.movie_img.name : 'default.jpg',
      content,
      public_user: (public_user === 'on') ? true : false,
      public_check_admin: null
    });

    const moviePromise = addMovie.save();

    // Filmi kaydetme başarılı ise
    moviePromise.then(movie => {
      // Filmi veritabanına kayıt ettikten sonra yüklenen filmin resmini kaydediyor. 
      if(request.files) {
        request.files.movie_img.mv('./public/img/movies/', request.files.movie_img.name);
      }
      
      response.json({
        newMovie: movie
      });
    });

    // Hata oluşmuş ise
    moviePromise.catch(error => response.json({error}));

  });

  user.catch(error => response.json({error}));

});

export default addMoviesRoute;