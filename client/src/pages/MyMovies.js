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

  // Tüm filmlerin tutulacağı state
  const [movies, setMovies] = useState({ movies: [], pages: null });
  
  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState();

  // Tüm değerleri saniye başı çeken yaşam methodu
  useEffect(() => {

    const moviesData = axios({
      url: `http://localhost:3001/api/movies/${showPage}`,
      headers: {
        'x-access-token': localStorage.getItem('token')
      },
      method: 'post',
      data: {
        'username': user_info.username
      }
    });

    moviesData.then(moviesx => 
      setMovies({ 
        ...movies,
        movies: moviesx.data.movies, 
        pages: moviesx.data.pages_number
      }));

    moviesData.catch(error => console.log(error));
  });

  const ShowPage = (showPage) => setShowPage(showPage);

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
          <Pagination pages={movies.pages} url={'mymovies'}  ShowPage={ShowPage}/> 
        : 
          null
      }
      
    </div>
  );
}

export default MyMovies;