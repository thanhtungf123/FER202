import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="Logo">
      <img src={logo} alt="React Logo" className="logo" />
      <hr />
      <p className="title">
        This is the React logo! <br />
        <span className="subtitle">(I don't know why it is here either)</span>
      </p>
      <p className="description">
        The library for web and native user interfaces
      </p>
    </div>
  );
}

export default App;
