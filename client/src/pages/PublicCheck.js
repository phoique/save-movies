import React, {useEffect, useState} from 'react';
import defaultIMG from '../assets/img/movies/default.jpg';
import CheckDetail from '../components/CheckDetail';
import axios from 'axios';
import Pagination from '../components/Pagination';

function PublicCheck() {

  // Tüm kullanıcıların tutulacağı state
  const [checks, setChecks] = useState({ movies: [], pages: null });

  // Şu anda gösterilen sayfanın numarası sayfa yenilendiğinde 0 olmaktadır.
  const [showPage, setShowPage] = useState();

  // Tüm değerleri saniye başı çeken yaşam methodu
  useEffect(() => {

    const checkData = axios({
      url: `http://localhost:3001/api/checks/${showPage}`,
      headers: {
        'x-access-token': localStorage.getItem('token')
      },
      method: 'get',
    });

    checkData.then(moviesx => 
      setChecks({ 
        ...checks,
        movies: moviesx.data.movies, 
        pages: moviesx.data.pages_number
      }));

    checkData.catch(error => console.log(error));
  });

  const ShowPage = (showPage) => setShowPage(showPage);

   // Kullanıcı işlemleri silme ve güncelleme.
   const userOperations = (name, user_id) => {
    const userOp = axios({
      url: "http://localhost:3001/api/checks/",
      headers: {
        'x-access-token': localStorage.getItem('token')
      },
      method: 'post',
      data: {
        [name]: user_id
      }
    });

    userOp.then(x => console.log(x));

    userOp.catch(error => console.log(error));
  }

  return (
    <div className="movie-grid">
      <div className="intro">
        <h2 className="text-center">Herkese açık onaylanacak filmler</h2>
      </div>
      <div className="row">
      {
        checks.movies.map((movie, key) => 
          <CheckDetail 
            key = {key}
            name = { movie.name } 
            genre = { movie.genre } 
            id = { movie._id }
            bg_image = { defaultIMG }
            userOperations = { userOperations }
          />)
      }
      </div>
      {
        (checks.pages > 1) ? 
          <Pagination pages={checks.pages} url={'mymovies'} ShowPage={ShowPage}/> 
        : 
          null
      }
    </div>
  );
}

export default PublicCheck;
