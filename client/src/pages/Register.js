import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  const [userValues, setUserValues] = useState({
    username: null,
    password: null,
    password_repeat: null,
    password_match_status: true
  });

  const changeValues = ({ target }) => {
    setUserValues({
      ...userValues,
      [target.name]: target.value
    });
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    if(userValues.password === userValues.password_repeat) {
      const response = await axios.post('http://localhost:3001/api/register',{
        username: userValues.username,
        password: userValues.password
      });
      localStorage.setItem('token', response.data.token);
      
      // Sayfa prevent yüzünden yenilenmediği için manuel yenileniyor.
      window.location.reload();
    }
    else {
      setUserValues({
        password_match_status: false
      });
    }
  }

  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder col-sm-12"></div>
        <form className="col-sm-12" onSubmit={handleRegister}>
          <h2 className="text-center">
            <strong>Hesap oluştur</strong>
          </h2>
          {
            (userValues.password_match_status) ? 
            null 
            : 
            <div className="alert alert-danger" role="alert">
              Şifreler uyuşmuyor.
            </div>
          }
          <div className="form-group">
            <input className="form-control" type="text" name="username" onChange={event => changeValues(event)} placeholder="Kullanıcı adı" required minLength="4" maxLength="10" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" onChange={event => changeValues(event)} placeholder="Şifre" required minLength="5" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password_repeat" onChange={event => changeValues(event)} placeholder="Tekrar şifre" required minLength="5" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Kayıt Ol</button>
          </div>
          <p className="already">Hesabın var mı o zaman <a href="/login">giriş yap</a>.</p>
        </form>
      </div>
    </div>
  );
}

export default Register;