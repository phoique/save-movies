import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function Dropdown({ username }) {
  return (
    <li className="nav-item dropdown" style={{listStyleType: 'none'}}>
      <Link href="/">
        <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          {
            username ? username : null
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
  );
}

Dropdown.propTypes = {
  username: PropTypes.string
};

export default Dropdown;
