import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MoviesDetail from '../components/moviesDetail';
import Pagination from '../components/pagination';
import Layout from '../components/layout';
import { connect } from 'react-redux';
import { getMovies } from '../actions/myMovies';
import PrivateRoute from '../utils/privateRoute';
import { getUserInfo } from '../utils/token';


function Movies(props) {
  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState(1);

  // Tüm değerleri saniye başı çeken yaşam methodu
  useEffect(() => {
    // eslint-disable-next-line
    if(getUserInfo('all')){
      props.getMovies(getUserInfo('username'), showPage);
    }
    // eslint-disable-next-line
  }, []);

  const ShowPage = (showPage) => {
    setShowPage(showPage);
    props.getMovies(getUserInfo('username'), showPage);
  };
  
  return (
    <PrivateRoute>
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
    </PrivateRoute>
  );
}

const mapStateToProps = ({ myMovies }) => ({
  myMovies
});

const mapDispatchToProps = {
  getMovies
};

Movies.propTypes = {
  getMovies: PropTypes.func,
  myMovies: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);