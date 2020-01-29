import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import Router from 'next/router';
import Link from 'next/link';
import { fetchAuth } from '../actions/auth';
import IsLoginRoute from '../utils/isLoginRoute';
import PropTypes from 'prop-types';
import { setToken } from '../utils/token';

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
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if(userValues.password === userValues.password_repeat) {
      props.fetchAuth('register', userValues.username, userValues.password);
    }
    else {
      setUserValues({
        password_match_status: false
      });
    }
  };

  useEffect(() => {
    if(props.authToken.token != null) {
      setToken(props.authToken.token);
      Router.push('/');
    }
  }, [props.authToken]);

  return (
    <IsLoginRoute>
      <Layout title="Kayıt Ol">
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
                <input className="form-control" type="text" autoComplete="xusername" name="username" onChange={event => changeValues(event)} placeholder="Kullanıcı adı" required minLength="4" maxLength="10" />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" autoComplete="xpassword" name="password" onChange={event => changeValues(event)} placeholder="Şifre" required minLength="5" />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" autoComplete="xpassword_repeat" name="password_repeat" onChange={event => changeValues(event)} placeholder="Tekrar şifre" required minLength="5" />
              </div>
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">Kayıt Ol</button>
              </div>
              <div className="already">
                Hesabın var mı o zaman
                <Link href="/login">
                  <a> giriş yap.</a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </IsLoginRoute>
  );
}

const mapStateToProps = ({ authToken }) => ({
  authToken
});

const mapDispatchToProps = {
  fetchAuth
};

Register.propTypes = {
  fetchAuth: PropTypes.func,
  authToken: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps) (Register);