import React from 'react';
import Link from 'next/link';
import cookie from 'js-cookie';

function Navbar({ user_info }) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light mt-2">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand font-weight-bold" ><h4>Film Kaydet</h4></a>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" href="/">Anasayfa</a>
                </Link>
              </li>
              {
                (cookie.get('token') === undefined) ? 
                null 
                : 
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/mymovies">
                      <a className="nav-link">Filmlerim</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/add">
                      <a className="nav-link" >Film Ekle</a>
                    </Link>
                  </li>

                  {
                    (user_info.user_role !== "admin") ? null :
                    <li className="nav-item">
                      <Link href="/users">
                        <a className="nav-link" >Kullanıcılar</a>
                      </Link>
                    </li>
                  }

                  {
                    (user_info.user_role !== "admin") ? null :
                    <li className="nav-item">
                      <Link href="/checks">
                        <a className="nav-link">Onaylanacak filmler</a>
                      </Link>
                    </li>
                  }
                  
                </ul>
              }
            </ul>
            <ul className="navbar-nav ml-auto">
              {(
                cookie.get('token') === undefined ?
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-2 mt-2">
                    <Link href="/register">
                      <a>
                        <button type="button" className="btn btn-success navbar-rad">Kayıt Ol</button>
                      </a>
                    </Link>
                    </li>
                    <li className="nav-item mt-2">
                      <Link href="/login">
                        <a>
                          <button type="button" className="btn btn-outline-primary navbar-rad">Giriş Yap</button>
                        </a>
                      </Link>
                    </li>
                  </ul>
                :
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown" style={{listStyleType: 'none'}}>
                      <Link href="/">
                        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                            {
                              user_info ? user_info.username : null
                            }
                        </a>
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link href="/add">
                          <a className="dropdown-item">Film Ekle</a>
                        </Link>
                        <Link href="/settings">
                          <a className="dropdown-item">Ayarlar</a>
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link href="/logout">
                          <a className="dropdown-item">Çıkış Yap</a>
                        </Link>
                      </div>
                    </li>
                  </ul>
              )}  
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;