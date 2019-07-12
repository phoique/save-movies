import React from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import './assets/css/styles.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Login />
    </div>

  );
}

export default App;
