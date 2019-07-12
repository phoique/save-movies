import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './assets/css/styles.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
    </div>

  );
}

export default App;
