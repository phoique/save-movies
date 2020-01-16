import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAuth } from '../actions/authAction';

function Login(props) {

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

  const handleLogin = (event) => {
    event.preventDefault();
    props.fetchAuth('login', userValues.username, userValues.password);
  }

  useEffect(() => {
    if(props.token.token != null) {
      localStorage.setItem('token', props.token.token);
      window.location.reload();
    }
  }, [props.token]);
  
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

const mapStateToProps = ({ token }) => ({
  token
})

const mapDispatchToProps = {
  fetchAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
