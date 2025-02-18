import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer mt-5 py-4">
    <Container>
      <Row>
        {/* Địa chỉ */}
        <Col md={6}>
          <h5>Our Address</h5>
          <p>Khu đô thị FPT Đà Nẵng</p>
          <p>
            <i className="fa fa-phone"></i> +84 0231 1111 <br />
            <i className="fa fa-fax"></i> +852 8765 4321 <br />
            <i className="fa fa-envelope"></i> fptudn@fpt.edu.vn
          </p>
        </Col>
  
        {/* Biểu tượng mạng xã hội */}
        <Col md={6} className="text-right">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
          <p className="copyright">© Copyright 2023</p>
        </Col>
      </Row>
    </Container>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  </footer>
  
  );
};

export default Footer;
