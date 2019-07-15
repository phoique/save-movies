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

// CSS
import './assets/css/styles.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path ="/register" exact component={Register} />
          <Route path ="/mymovies" exact component={MyMovies} />
          <Route path ="/add" exact component={Add} />
          <Route path ="/users" exact component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
