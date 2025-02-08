import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="header bg-light p-3">
        <h2>Let's test the grid!</h2>
      </div>
      
      <div className="container">
      <div className="row">
        <div className="col-md-6 bg-secondary text-light p-3">First col</div>
        <div className="col-md-6 bg-secondary text-light p-3">Second col</div>
      </div>

      <div className="row mt-0">
        <div className="col-md-4 bg-secondary text-light p-3">col</div>
        <div className="col-md-4 bg-secondary text-light p-3">col</div>
        <div className="col-md-4 bg-secondary text-light p-3">col</div>
      </div>

      <div className="row mt-0">
        <div className="col-md-3 bg-secondary text-light p-3">col</div>
        <div className="col-md-3 bg-secondary text-light p-3">col</div>
        <div className="col-md-3 bg-secondary text-light p-3">col</div>
        <div className="col-md-3 bg-secondary text-light p-3">col</div>
      </div>
      </div>
      <div className="footer text-dark text-center p-3 mt-3">
        <h2>Created by ABC!</h2>
      </div>
    </div>
  );
};

export default App;