import React from 'react';

function CheckDetail({ checkMovies, checkPublic }) {
    return (
        <div className="row">
            {
                checkMovies.map((movie, key) => 
                    <div className="col-md-4 col-lg-3 item" key={key}>
                        <div className="box" style={{ backgroundImage: 'url(\'/img/movies/default.jpg\')'}}>
                            <div className="cover">
                                <h3 className="name">{ movie.name }</h3>
                                <p className="genre">
                                    {
                                        movie.genre.map((genrex, key) => <span key={key}> { genrex }, </span>)
                                    }
                                </p>
                                <div className="movie-url">
                                    <button 
                                        className="btn btn-danger" 
                                        name="public_true" 
                                        type="submit"
                                        onClick={() => checkPublic('public_true', movie._id)}>
                      Yayınla
                                    </button>
                                    <button 
                                        className="btn btn-primary" 
                                        name="public_false" 
                                        type="submit"
                                        onClick={() => checkPublic('public_false', movie._id)}>
                    Kaldır
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default CheckDetail;
