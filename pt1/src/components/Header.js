import React from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import './Header.css';

const Header = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src="image/fptulogo.jpg" alt="FPT University" className="navbar-logo" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Trang chủ</Nav.Link>
          <Nav.Link href="#">Ngành học</Nav.Link>
          <Nav.Link href="#">Tuyển sinh</Nav.Link>
          <Nav.Link href="#">Sinh viên</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="ml-2 search-bar" />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
