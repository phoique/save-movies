import React, { useState } from 'react';
import decode from 'jwt-decode';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

const animatedComponents = makeAnimated();

function Add() {

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

  const user_info_decode = localStorage.getItem('token') ?
  decode(localStorage.getItem('token') || null) 
  : 
  null;

  // Eklediği filmin değerlerini tutacak state
  const [movieInfo, setMovieInfo] = useState({
    username: user_info_decode.username, 
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
  }

  const AddMovie = () => {
    axios({
      url: "http://localhost:3001/api/add",
      headers: {
        'x-access-token': localStorage.getItem('token')
      },
      method: 'post',
      data: {
        ...movieInfo,
        genre: movieInfo.genre.map(x => x.value)
      }
    }).then(x => console.log(x));
  }

  return (
    <div className="movie-add-clean">
      <form>
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
          <button className="btn btn-primary text-center" onClick={AddMovie} type="submit">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
