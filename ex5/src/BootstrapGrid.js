import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BootstrapGrid.css";

const BootstrapGrid = () => {
  return (
    <div>
      {/* Header */}
      <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container><Navbar.Brand href="#">Let's test the grid!</Navbar.Brand>
      </Container>
      </Navbar>
        <Container>
          <Nav className="ml-auto">
            <Nav.Link href="#" active>Active</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link disabled>Disabled</Nav.Link>
          </Nav>
        </Container>
  

      {/* Main Content */}
      <Container className="main-content mt-4">
        <Row className="row">
          <Col md={6} className="bg-secondary text-light p-3">First col</Col>
          <Col md={6} className="bg-secondary text-light p-3">Second col</Col>
        </Row>

        <Row className="row mt-0">
          <Col md={4} className="bg-secondary text-light p-3">col</Col>
          <Col md={4} className="bg-secondary text-light p-3">col</Col>
          <Col md={4} className="bg-secondary text-light p-3">col</Col>
        </Row>

        <Row className="row mt-0">
          <Col md={3} className="bg-secondary text-light p-3">col</Col>
          <Col md={3} className="bg-secondary text-light p-3">col</Col>
          <Col md={3} className="bg-secondary text-light p-3">col</Col>
          <Col md={3} className="bg-secondary text-light p-3">col</Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="custom-footer">
        <h3>Created by ABC!</h3>
      </footer>
    </div>
  );
};

export default BootstrapGrid;
