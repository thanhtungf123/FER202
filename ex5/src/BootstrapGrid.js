import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './BootstrapGrid.css';

const BootstrapGrid = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="p-5 bg-light text-center">
        <h1>Let's test the grid!</h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav justify-content-center py-3">
        <a className="nav-link active" href="#">
          Active
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
          Disabled
        </a>
      </nav>

      {/* Grid Section */}
      <div className="container my-4">
        <div className="row">
          <div className="col border">First col</div>
          <div className="col border">Second col</div>
        </div>
        <div className="row">
          <div className="col border">col</div>
          <div className="col border">col</div>
          <div className="col border">col</div>
        </div>
        <div className="row">
          <div className="col border">col</div>
          <div className="col border">col</div>
          <div className="col border">col</div>
          <div className="col border">col</div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center bg-secondary text-white py-3">
        <p>Created by ABC!</p>
      </footer>
    </div>
  );
};

export default BootstrapGrid;
