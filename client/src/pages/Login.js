import React from 'react';

function Login() {
  return (
    <div className="login-photo">
      <div className="form-container">
        <div className="image-holder"></div>
        <form>
          <h2 className="text-center">
            <strong>Giriş Yap</strong>
            </h2>
          <div className="form-group">
            <input className="form-control" type="text" name="username" placeholder="Kullanıcı adı" required minLength="4" maxLength="10" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" placeholder="Şifre" required />
          </div>
          <div className="form-group">
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Kayıt Ol</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
