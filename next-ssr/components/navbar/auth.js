import React from 'react';
import Link from 'next/link';

function Auth() {
    return (
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
    );
}

export default Auth;
