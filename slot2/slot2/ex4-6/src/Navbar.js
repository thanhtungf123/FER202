import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home" className="nav-link home-link">
        Home
      </a>
      <a href="#search" className="nav-link">
        Search
      </a>
      <a href="#contact" className="nav-link">
        Contact
      </a>
      <a href="#login" className="nav-link login-link">
        Login
      </a>
    </div>
  );
};

export default Navbar;
