import React from 'react';


function MoviesDetail({ movies }) {
    return (
        <div className="row">
            {
                movies.map((movie, key) => 
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
                                    <button type="submit" className="btn btn-secondary" data-toggle="modal" name="select_movie" value="{{_id}}" data-target="#exampleModal">Filme git</button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
}

export default MoviesDetail;
