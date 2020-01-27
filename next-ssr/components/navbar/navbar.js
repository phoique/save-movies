import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import cookie from 'js-cookie';
import decode from 'jwt-decode';
import Actions from './actions';
import Auth from './auth';
import Dropdown from './dropdown';

function Navbar() {

  const [info, setInfo] = useState({});

  // Her bir aksiyonda token olup olmadığını kontrol ediyor. Bu da çıkış yapıldığında navbarın eski halini alması
  // için sayfa yenilenmesi sorununu çözüyor.
  useEffect(() => {
    // Eğer localstorage token boş ise değer null oluyor dolu ise kullanıcı bilgilerini
    // bir object içinde dönüyor. Kullanıcı adı ve rolü şeklinde.
    const user_info = cookie.get('token') ?
    decode(cookie.get('token') || null) 
    : 
    null;

    setInfo({...user_info});
  }, []);

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
                  <Actions role={info.user_role}/>
              }
            </ul>
            <ul className="navbar-nav ml-auto">
              {(
                cookie.get('token') === undefined ?
                  <Auth />
                :
                  <Dropdown username={info.username}/>
              )}  
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;