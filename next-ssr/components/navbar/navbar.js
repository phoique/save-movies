import React from 'react';
import Link from 'next/link';
import Actions from './actions';
import Auth from './auth';
import Dropdown from './dropdown';
import { getToken, getUserInfo } from '../../utils/token';

function Navbar() {
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
                (getToken() === undefined) ? 
                  null 
                  : 
                  <Actions role={getUserInfo('role')}/>
              }
            </ul>
            <ul className="navbar-nav ml-auto">
              {(
                getToken() === undefined ?
                  <Auth />
                  :
                  <Dropdown username={getUserInfo('username')}/>
              )}  
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;