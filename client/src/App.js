import React, { useState, useEffect } from 'react';
import decode from 'jwt-decode';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import MyMovies from './pages/MyMovies';
import Add from './pages/Add';
import Users from './pages/Users';
import PublicCheck from './pages/PublicCheck';
import Logout from './pages/Logout';

// Utils
import PrivateRoute from './utils/PrivateRoute';
import IsLoginRoute from './utils/IsLoginRoute';
import AdminRoute from './utils/AdminRoute';

// CSS
import './assets/css/styles.css';

function App() {

  

  const [info, setInfo] = useState({});

  // Her bir aksiyonda token olup olmadığını kontrol ediyor. Bu da çıkış yapıldığında navbarın eski halini alması
  // için sayfa yenilenmesi sorununu çözüyor.
  useEffect(() => {
    // Eğer localstorage token boş ise değer null oluyor dolu ise kullanıcı bilgilerini
    // bir object içinde dönüyor. Kullanıcı adı ve rolü şeklinde.
    const user_info = localStorage.getItem('token') ?
    decode(localStorage.getItem('token') || null) 
    : 
    null;

    setInfo({...user_info});
  }, []);
  
  return (
    <div className="container">
      <Navbar user_info={info}/>
      <Router user_info={info}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/logout" exact component={Logout} />
          <IsLoginRoute path="/login" exact component={Login} />
          <IsLoginRoute path ="/register" exact component={Register} />
          <PrivateRoute path ="/mymovies" exact component={MyMovies} />
          <PrivateRoute path ="/add" exact component={Add} />
          <AdminRoute path ="/users" exact component={Users} />
          <AdminRoute path ="/checks" exact component={PublicCheck} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
