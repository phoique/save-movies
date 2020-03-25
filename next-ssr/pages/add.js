import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMovie } from '../actions/addMovie';
import Layout from '../components/layout';
import { getUserInfo } from '../utils/token';
import { Auth } from '../utils/authentication';

const animatedComponents = makeAnimated();

function Add(props) {

  const genreOptionValue = [
    { value: 'Aksiyon', label: 'Aksiyon' },
    { value: 'Macera', label: 'Macera' },
    { value: 'Bilim Kurgu', label: 'Bilim Kurgu' },
    { value: 'Animasyon', label: 'Animasyon' },
    { value: 'Komedi', label: 'Komedi' },
    { value: 'Komedi', label: 'Komedi' },
    { value: 'Suç', label: 'Suç' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Gizem/Gerilim', label: 'Gizem/Gerilim' },
    { value: 'Aşk', label: 'Aşk' },
    { value: 'Korku', label: 'Korku' },
  ];

  // Eklediği filmin değerlerini tutacak state
  const [movieInfo, setMovieInfo] = useState({
    name: '',
    genre: [],
    content: '',
    public_user: null
  });

  // const [fileName, setFileName] = useState(null);

  // const changeFile = ({ target }) =>  {
  //   setFileName(target.files[0].name || null);
  // }

  const changeValue = ({ target }) => {
    setMovieInfo({
      ...movieInfo,
      [target.name]: target.value,
    });
  };

  const AddMovie = () => {
    props.addMovie({
      username: getUserInfo('username'),
      ...movieInfo
    });
  };

  return (
    <Layout>
      <div className="movie-add-clean">
        <form onSubmit={AddMovie}>
          <h2 className="text-center">Film Ekle</h2>
          <div className="form-group">
            <input className="form-control" type="text" name="name" onChange={changeValue} placeholder="Film adı" required maxLength="20" />
          </div>
          <div className="mt-2 mb-2">
            <label>Film türü:</label>
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={genreOptionValue}
              onChange={
                (genre) =>
                  setMovieInfo({
                    ...movieInfo,
                    genre
                  })
              }
            />
          </div>
          {/* <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">Film kapağı</span>
              </div>
              <div className="custom-file">
                <input type="file" accept=".jpg, .jpeg, .png" name="movie_img" className="custom-file-input" id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01" onChange={(event) => changeFile(event)}/>
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {
                    (fileName !== null) ? fileName : "Dosya seç..."
                  }
                </label>
              </div>
            </div> */}
          <div className="form-group form-mt"><textarea className="form-control" rows="14" name="content"
            placeholder="Film hakkında kısa özet" onChange={changeValue} required></textarea>
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  name="public_user"
                  onChange={
                    ({ target }) =>
                      setMovieInfo({
                        ...movieInfo, public_user: (target.checked) ? 'on' : null
                      })}
                  type="checkbox" />
                  Film herkes tarafından görülsün.
                </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary text-center" type="submit">Kaydet</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

Add.getInitialProps = async(context) => {
  Auth(context);
  return {};
}

const mapStateToProps = ({ newMovie }) => ({
  newMovie
});

const mapDispatchToProps = {
  addMovie
};

Add.propTypes = {
  addMovie: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
