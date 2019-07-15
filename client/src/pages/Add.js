import React, { useState } from 'react';

function Add() {

  const [fileName, setFileName] = useState(null);

  const changeFile = ({ target }) =>  {
    setFileName(target.files[0].name || null);
  }

  

  return (
    <div className="movie-add-clean">
      <form method="post" encType="multipart/form-data">
        <h2 className="text-center">Film Ekle</h2>
        <div className="form-group">
          <input className="form-control" type="text" name="name" placeholder="Film adı" required maxLength="20" />
        </div>
        <div className="mt-2 mb-2">
          <label>Film türü: </label>
          <select className="selectpicker" name="genre" multiple data-live-search="true">
            <option>Aksiyon</option>
            <option>Macera</option>
            <option>Bilim Kurgu</option>
            <option>Animasyon</option>
            <option>Komedi</option>
            <option>Suç</option>
            <option>Drama</option>
            <option>Gizem/Gerilim</option>
            <option>Aşk</option>
            <option>Korku</option>
          </select>
        </div>
        <div className="input-group">
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
        </div>
        <div className="form-group form-mt"><textarea className="form-control" rows="14" name="content"
            placeholder="Film hakkında kısa özet" required></textarea>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" name="public_user" type="checkbox" />
              Film herkes tarafından görülsün.
            </label>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-primary text-center" type="submit">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
