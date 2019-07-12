import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import './assets/css/styles.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Register />
    </div>

  );
}

export default App;
