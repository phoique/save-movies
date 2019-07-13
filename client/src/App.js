import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
