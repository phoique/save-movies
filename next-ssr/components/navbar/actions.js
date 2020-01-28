import React from 'react';
import Link from 'next/link';

function Actions({ role }) {
    return (
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
                (role !== 'admin') ? null :
                    <li className="nav-item">
                        <Link href="/users">
                            <a className="nav-link" >Kullanıcılar</a>
                        </Link>
                    </li>
            }

            {
                (role !== 'admin') ? null :
                    <li className="nav-item">
                        <Link href="/publiccheck" as="checks">
                            <a className="nav-link">Onaylanacak filmler</a>
                        </Link>
                    </li>
            }
        </ul>
    );
}

export default Actions;
