import React, { useEffect, useState } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import MoviesDetail from '../components/MoviesDetail';
import Pagination from '../components/Pagination';
import defaultIMG from '../assets/img/movies/default.jpg';

function MyMovies() {

  // Kullanıcı tokenini decode ediyoruz.
  const user_info = localStorage.getItem('token') ?
    decode(localStorage.getItem('token') || null) 
    : 
    null;

  const [movies, setMovies] = useState({ movies: [], pages: null });

  useEffect(() => {

    const moviesData = axios({
      url: 'http://localhost:3001/api/movies/',
      headers: {
        'x-access-token': localStorage.getItem('token')
      },
      method: 'post',
      data: {
        'username': user_info.username
      }
    });

    moviesData.then(movies => 
      setMovies({ 
        movies: movies.data.movies, 
        pages: movies.data.pages_number 
      }));

    moviesData.catch(error => console.log(error));
  }, []);
  
  console.log(movies);

  return (
    <div className="movie-grid mt-4">
      <div className="row"> 
        {
          movies.movies.map((movie, key) => 
          <MoviesDetail 
            key = {key}
            name = { movie.name } 
            genre = { movie.genre } 
            bg_image = { defaultIMG }
          />)
        }
      </div>
      {
        (movies.pages > 1) ? 
          <Pagination pages= {movies.pages} url={'mymovies'} /> 
        : 
          null
      }
      
    </div>
  );
}

export default MyMovies;