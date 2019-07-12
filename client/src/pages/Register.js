import React from 'react';

function Register() {
  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder col-sm-12"></div>
        <form className="col-sm-12">
          <h2 className="text-center">
            <strong>Hesap oluştur</strong>
          </h2>
          <div className="form-group">
            <input className="form-control" type="text" name="username" placeholder="Kullanıcı adı" required minLength="4" maxLength="10" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" placeholder="Şifre" required minLength="5" />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password_repeat" placeholder="Tekrar şifre" required minLength="5" />
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label"><input class="form-check-input" type="checkbox" required />Sözleşmeyi okudum, kabul ediyorum.</label>
            </div>
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