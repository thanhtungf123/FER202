import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const App = () => {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <h1>Let's test the grid!</h1>
      </div>

      {/* Grid Section */}
      <div className="container grid-section">
        {/* Row 1 */}
        <div className="row">
          <div className="col first-col">First col</div>
          <div className="col second-col">Second col</div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col large-col">col</div>
          <div className="col large-col">col</div>
          <div className="col large-col">col</div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col small-col">col</div>
          <div className="col small-col">col</div>
          <div className="col small-col">col</div>
          <div className="col small-col">col</div>
        </div>
      </div>

     {/* Footer cho phần 1 */}
      <footer className="text-center py-3" style={{ backgroundColor: "#d7c3c3" }}>
        <strong>Created by ABC!</strong>
      </footer>
      </div>

  );
};

export default App;

