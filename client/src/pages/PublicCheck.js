import React from 'react';
import defaultIMG from '../assets/img/movies/default.jpg';

function PublicCheck() {
  return (
    <div class="movie-grid">
      <div class="intro">
        <h2 class="text-center">Herkese açık onaylanacak filmler</h2>
      </div>
      <div class="row">
        <div class="col-md-4 col-lg-3 item">
          <div class="box" style={{ backgroundImage: `url(${defaultIMG})`}}>
            <div class="cover">
              <h3 class="name">Bird Box</h3>
              <p class="genre">
                Aksiyon, Macera
              </p>
              <div class="movie-url">
                <button class="btn btn-danger" name="public_true" value="xxx" type="submit">Yayınla</button>
                <button class="btn btn-info" type="submit">Düzenle</button>
                <button class="btn btn-primary" name="public_false" type="submit" value="xxx">Kaldır</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <nav>
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="/">1</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PublicCheck;
