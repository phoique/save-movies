import React, { useEffect, useState } from 'react';
import CheckDetail from '../components/checkDetail';
import Pagination from '../components/pagination';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCheckMovie, postCheckMovie } from '../actions/publicCheck';
import { AuthRole } from '../utils/authentication';
import Layout from '../components/layout';

function PublicCheck(props) {
  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState();

  // Tüm değerleri saniye başı çeken yaşam methodu
  useEffect(() => {
    // eslint-disable-next-line
    props.getCheckMovie(showPage);
    // eslint-disable-next-line
  }, []);

  const ShowPage = (showPage) => {
    setShowPage(showPage);
    props.getCheckMovie(showPage);
  };

  // Filmi onaylama.
  const checkPublic = (status, user_id) => {
    props.postCheckMovie(status, user_id);
    props.getCheckMovie(showPage);
  };

  return (
    <Layout>
      <div className="movie-grid">
        <div className="intro">
          <h2 className="text-center">Herkese açık onaylanacak filmler</h2>
        </div>
        {
          <CheckDetail checkMovies={props.checkMovies.checkMovies} checkPublic={checkPublic} />
        }
        {
          (props.checkMovies.page > 1) ?
            <Pagination pages={props.checkMovies.page} ShowPage={ShowPage} /> : null
        }
      </div>
    </Layout>
  );
}

PublicCheck.getInitialProps = async(context) => {
  AuthRole(context);
  return {};
}

const mapStateToProps = ({ checkMovies }) => ({
  checkMovies
});

const mapDispatchToProps = {
  getCheckMovie,
  postCheckMovie
};

PublicCheck.propTypes = {
  getCheckMovie: PropTypes.func,
  postCheckMovie: PropTypes.func,
  checkMovies: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicCheck);
