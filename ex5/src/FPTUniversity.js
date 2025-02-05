import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './FPTUniversity.css';

const FPTUniversity = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="text-center p-3" style={{ backgroundColor: "#f39c12", color: "white" }}>
        <img
          src="https://www.senviet.art/wp-content/uploads/2021/12/fptulogo.jpg"
          alt="FPT Logo"
          style={{ width: "150px" }}
        />
        <nav className="nav justify-content-center">
          <a className="nav-link text-white fw-bold" href="#home">
            Home
          </a>
          <a className="nav-link text-white fw-bold" href="#about">
            About
          </a>
          <a className="nav-link text-white fw-bold" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="text-center py-5">
        <h2>About</h2>
        <p>This is the about section of the website.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center py-5">
        <h2>Contact</h2>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-3" style={{ backgroundColor: "#f39c12", color: "white" }}>
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FPTUniversity;
