import React, { useEffect, useState } from 'react';
import decode from 'jwt-decode';
import MoviesDetail from '../components/MoviesDetail';
import Pagination from '../components/Pagination';

import { connect } from 'react-redux';
import { getMovies } from '../actions/myMovies';

function MyMovies(props) {
  // Kullanıcı tokenini decode ediyoruz.
  const user_info = localStorage.getItem('token') ?
    decode(localStorage.getItem('token') || null) 
    : 
    null;
  
  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState(1);

  // Tüm değerleri saniye başı çeken yaşam methodu
  
  useEffect(() => {
    props.getMovies(user_info.username, showPage);
  }, []);

  const ShowPage = (showPage) => {
    setShowPage(showPage);
    props.getMovies(user_info.username, showPage);
  };

  return (
    <div className="movie-grid mt-4">
      {
        <MoviesDetail movies = {props.myMovies.movies}/>
      }
      {
        (props.myMovies.page > 1) ? 
          <Pagination pages={props.myMovies.page} ShowPage={ShowPage}/> : null
      }
    </div>
  );
}

const mapStateToProps = ({ myMovies }) => ({
  myMovies
})

const mapDispatchToProps = {
  getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMovies);