import React from 'react';

function MoviesDetail({ name, genre, bg_image }) {
  return (
    <div className="col-md-4 col-lg-3 item">
      <div className="box" style={{ backgroundImage: `url(${bg_image})`}}>
        <div className="cover">
          <h3 className="name">{ name }</h3>
          <p className="genre">
            {
              genre.map((genrex, key) => <span key={key}> { genrex }, </span>)
            }
          </p>
          <div className="movie-url">
            <button type="submit" className="btn btn-secondary" data-toggle="modal" name="select_movie" value="{{_id}}" data-target="#exampleModal">Filme git</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
