import React from 'react';
import defaultIMG from '../assets/img/movies/default.jpg';

function MyMovies() {
  return (
    <div class="movie-grid mt-4">
      <div class="row">
        <div class="col-md-4 col-lg-3 item">
          <div class="box" style={{ backgroundImage: `url(${defaultIMG})`}}>
            <div class="cover">
              <h3 class="name">Bird Box</h3>
              <p class="genre">
                Aksiyon, Macera, Bilm Kurgu
              </p>
              <div class="movie-url">
                <button type="submit" class="btn btn-secondary" data-toggle="modal" name="select_movie" value="{{_id}}" data-target="#exampleModal">Filme git</button>
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

export default MyMovies;
