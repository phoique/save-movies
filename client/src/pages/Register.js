import React from 'react';

function Register() {
  return (
    <div class="register-photo">
      <div class="form-container">
        <div class="image-holder col-sm-12"></div>
        <form className="col-sm-12">
          <h2 class="text-center">
            <strong>Hesap oluştur</strong>
          </h2>
          <div class="form-group">
            <input class="form-control" type="text" name="username" placeholder="Kullanıcı adı" required minlength="4" maxlength="10" />
          </div>
          <div class="form-group">
            <input class="form-control" type="password" name="password" placeholder="Şifre" required minlength="5" />
          </div>
          <div class="form-group">
            <input class="form-control" type="password" name="password_repeat" placeholder="Tekrar şifre" required minlength="5" />
          </div>
          <div class="form-group">
            <div class="form-check">
              <label class="form-check-label"><input class="form-check-input" type="checkbox" required />Sözleşmeyi okudum, kabul ediyorum.</label>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit">Kayıt Ol</button>
          </div>
          <p class="already">Hesabın var mı o zaman <a href="/login">giriş yap</a>.</p>
        </form>
      </div>
    </div>
  );
}

export default Register;