import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button, Card, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#">Dropdown</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" />
            <Button variant="primary">Search</Button>
          </Form>
        </Container>
      </Navbar>

      {/* Carousel */}

        <Carousel>
          <Carousel.Item>
            <div className="carousel-placeholder">1920 x 530</div>
          </Carousel.Item>
        </Carousel>


      {/* New Product Section */}
      <Container className="mt-4">
        <h3>NEW PRODUCT</h3>
        <p>List product description</p>
        <Row>
          {[...Array(4)].map((_, idx) => (
            <Col key={idx} md={3} className="mb-3">
              <Card>
                <div className="product-placeholder">280 x 280</div>
                <Card.Body>
                  <Card.Title>Product</Card.Title>
                  <Card.Text>
                    <del>100,000 vnd</del> <span className="text-danger">80,000 vnd</span>
                  </Card.Text>
                  <Button variant="primary">Xem chi tiết</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
