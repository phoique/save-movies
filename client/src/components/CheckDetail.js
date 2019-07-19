import React from 'react';

function CheckDetail({ name, genre, bg_image, userOperations, id }) {
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
            <button 
              className="btn btn-danger" 
              name="public_true" 
              type="submit"
              onClick={() => userOperations('public_true', id)}>
                Yayınla
              </button>
            <button 
              className="btn btn-primary" 
              name="public_false" 
              type="submit"
              onClick={() => userOperations('public_false', id)}>
              Kaldır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckDetail;
