import React from 'react';
import defaultIMG from '../assets/img/movies/default.jpg';

function PublicCheck() {
  return (
    <div className="movie-grid">
      <div className="intro">
        <h2 className="text-center">Herkese açık onaylanacak filmler</h2>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-3 item">
          <div className="box" style={{ backgroundImage: `url(${defaultIMG})`}}>
            <div className="cover">
              <h3 className="name">Bird Box</h3>
              <p className="genre">
                Aksiyon, Macera
              </p>
              <div className="movie-url">
                <button className="btn btn-danger" name="public_true" value="xxx" type="submit">Yayınla</button>
                <button className="btn btn-info" type="submit">Düzenle</button>
                <button className="btn btn-primary" name="public_false" type="submit" value="xxx">Kaldır</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <nav>
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="/">1</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PublicCheck;
