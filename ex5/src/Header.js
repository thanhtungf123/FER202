import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <div className="header bg-orange text-white">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <h3 className="mb-0">FPT UNIVERSITY</h3>
        <input type="text" className="form-control w-25" placeholder="Search" />
      </div>
      <div className="container text-center mt-3">
        <img src="banner.JPG" alt="Banner" className="img-fluid rounded banner-img" />
      </div>
      <nav className="container mt-3">
        <a href="#" className="text-white">Home</a> / <a href="#" className="text-white">Students</a>
      </nav>
    </div>
  );
};

export default Header;
