import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Login() {

  const [userValues, setUserValues] = useState({
    username: null,
    password: null
  });

  const changeValues = ({ target }) => {
    setUserValues({
      ...userValues,
      [target.name]: target.value
    });
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:3001/api/login',{
      username: userValues.username,
      password: userValues.password
    });

    localStorage.setItem('token', response.data.token);

    // Sayfa prevent yüzünden yenilenmediği için manuel yenileniyor.
    window.location.reload();
  }

  return (
    <div className="login-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form onSubmit={handleLogin}>
          <h2 className="text-center">
            <strong>Giriş Yap</strong>
            </h2>
          <div className="form-group">
            <input className="form-control" type="text" name="username" onChange={event => changeValues(event)} placeholder="Kullanıcı adı" required minLength="4" maxLength="10" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" onChange={event => changeValues(event)} placeholder="Şifre" required />
          </div>
          <div className="form-group">
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Giriş Yap</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
