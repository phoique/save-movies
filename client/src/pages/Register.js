import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAuth } from '../actions/authAction';

function Register(props) {

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
      event.preventDefault();
      props.fetchAuth('register', userValues.username, userValues.password);
    }
    else {
      setUserValues({
        password_match_status: false
      });
    }
  }

  useEffect(() => {
    if(props.token.token != null) {
      localStorage.setItem('token', props.token.token);
      window.location.reload();
    }
  }, [props.token]);

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

const mapStateToProps = ({ token }) => ({
  token
})

const mapDispatchToProps = {
  fetchAuth
}

export default connect(mapStateToProps, mapDispatchToProps) (Register);