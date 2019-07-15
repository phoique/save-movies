import React from 'react';
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

// CSS
import './assets/css/styles.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/logout" exact component={Logout} />
          <IsLoginRoute path="/login" exact component={Login} />
          <IsLoginRoute path ="/register" exact component={Register} />
          <PrivateRoute path ="/mymovies" exact component={MyMovies} />
          <PrivateRoute path ="/add" exact component={Add} />
          <PrivateRoute path ="/users" exact component={Users} />
          <PrivateRoute path ="/checks" exact component={PublicCheck} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
