import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">About Us</h2>

      <Row className="mb-4">
        <Col md={6}>
          <h4>📍 Address</h4>
          <p><FaMapMarkerAlt /> 123 Main Street, Da Nang, Vietnam</p>
        </Col>
        <Col md={6}>
          <h4>📞 Contact Information</h4>
          <p><FaPhone /> +84 123 456 789</p>
          <p><FaEnvelope /> contact@yourcompany.com</p>
        </Col>
      </Row>

      <h4 className="text-center">Follow us on Social Media</h4>
      <Row className="justify-content-center">
        <Col xs="auto">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary fs-3 mx-3">
            <FaFacebook />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-danger fs-3 mx-3">
            <FaInstagram />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-info fs-3 mx-3">
            <FaTwitter />
          </a>
        </Col>
        <Col xs="auto">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary fs-3 mx-3">
            <FaLinkedin />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
