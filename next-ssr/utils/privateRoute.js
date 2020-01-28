import { useEffect } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

function PrivateRoute({ children }) {
    // Token
    const token = cookie.get('token');

    // Token yoksa 
    useEffect(() => {
        if(!token) {
            Router.push('/');
        }
    }, [token]);
    // Token varsa.
    return(children); 
}

export default PrivateRoute;