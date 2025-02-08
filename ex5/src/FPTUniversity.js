import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FPTUniversity.css";

const FPTUniversity = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <img
          src="fptulogo.jpg"
          alt="FPT University Logo"
          className="header-logo"
        />
          {/* Navbar */}
        <Navbar className="custom-navbar">
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
      </header>

      {/* About Section */}
      <Container className="content-section" id="about">
        <h2 className="section-title">About</h2>
        <p>This is the about section of the website.</p>
      </Container>

      {/* Contact Section */}
      <Container className="content-section" id="contact">
        <h2 className="section-title">Contact</h2>
        <p>
          For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.
        </p>
      </Container>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FPTUniversity;
