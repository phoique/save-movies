import React, { useState } from 'react';
import axios from 'axios';

function Register() {

  const [passwordx, setPassword] = useState({
    username: null,
    password: null,
    password_repeat: null,
    password_match_status: true
  });

  const changePassword = ({ target }) => {
    setPassword({
      ...passwordx,
      [target.name]: target.value
    });
  }

  const passwordsMatch = () => {
    if(passwordx.password === passwordx.password_repeat) {
      axios({
        method: 'post',
        url: 'http://localhost:3001/api/register',
        data: {
          username: passwordx.username,
          password: passwordx.password
        }
      }).then(data => console.log(data))
    }
    else {
      console.log('Yanlış.');
      setPassword({
        password_match_status: false
      });
    }
  }

  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder col-sm-12"></div>
        <form className="col-sm-12">
          <h2 className="text-center">
            <strong>Hesap oluştur</strong>
          </h2>
          {
            (passwordx.password_match_status) ? 
            null 
            : 
            <div className="alert alert-danger" role="alert">
              Şifreler uyuşmuyor.
            </div>
          }
          <div className="form-group">
            <input className="form-control" type="text" name="username" onChange={event => changePassword(event)} placeholder="Kullanıcı adı" required minLength="4" maxLength="10" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" onChange={event => changePassword(event)} placeholder="Şifre" required minLength="5" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password_repeat" onChange={event => changePassword(event)} placeholder="Tekrar şifre" required minLength="5" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" onClick={() => passwordsMatch()} type="button">Kayıt Ol</button>
          </div>
          <p className="already">Hesabın var mı o zaman <a href="/login">giriş yap</a>.</p>
        </form>
      </div>
    </div>
  );
}

export default Register;