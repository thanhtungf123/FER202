import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './FirstBootstrap.css';

const FirstBootstrap = () => {
  return (
    <div className="text-center">
      <div className="bg-light p-4 mb-4">
        <h2>My First Bootstrap Page</h2>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-md-3">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
            alt="HTML5" 
            className="img-fluid" 
          />
        </div>
        <div className="col-md-3">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
            alt="CSS3" 
            className="img-fluid" 
          />
        </div>
        <div className="col-md-3">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" 
            alt="Bootstrap" 
            className="img-fluid" 
          />
        </div>
      </div>
    </div>
  );
};

export default FirstBootstrap;
