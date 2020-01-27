import React, { useEffect, useState } from 'react';
import decode from 'jwt-decode';
import cookie from 'js-cookie';
import MoviesDetail from '../components/moviesDetail';
import Pagination from '../components/pagination';
import Layout from '../components/layout';
import { connect } from 'react-redux';
import { getMovies } from '../actions/myMovies';


function Movies(props) {
  // Kullanıcı tokenini decode ediyoruz.
  const user_info = cookie.get('token') ?
    decode(cookie.get('token') || null) 
    : 
    null;
  
  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState(1);

  // Tüm değerleri saniye başı çeken yaşam methodu
  useEffect(() => {
    // eslint-disable-next-line
    props.getMovies(user_info.username, showPage);
    // eslint-disable-next-line
  }, []);

  const ShowPage = (showPage) => {
    setShowPage(showPage);
    props.getMovies(user_info.username, showPage);
  };
  
  return (
    <Layout>
      <div className="movie-grid mt-4">
        {
          <MoviesDetail movies = {props.myMovies.movies}/>
        }
        {
          (props.myMovies.page > 1) ? 
            <Pagination pages={props.myMovies.page} ShowPage={ShowPage}/> : null
        }
      </div>
    </Layout>
  );
}

const mapStateToProps = ({ myMovies }) => ({
  myMovies
})

const mapDispatchToProps = {
  getMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);