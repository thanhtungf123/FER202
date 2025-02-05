
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './FirstBootstrap.css';

const FirstBootstrap = () => {
  return (
    <div>
      {/* Header cho phần 2 */}
      <div className="bg-light py-5 text-center">
        <h1>My First Bootstrap Page</h1>
      </div>

      {/* Icon Section */}
      <div className="container text-center my-4">
        <div className="row justify-content-center">
          {/* Icon HTML */}
          <div className="col-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML Logo"
              className="img-fluid icon-image"
            />
          </div>
          {/* Icon CSS */}
          <div className="col-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS Logo"
              className="img-fluid icon-image"
            />
          </div>
          {/* Icon Bootstrap */}
          <div className="col-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="Bootstrap Logo"
              className="img-fluid icon-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBootstrap;
