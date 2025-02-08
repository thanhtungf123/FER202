import React from "react";
import { Container, Navbar, Nav, Form, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Student.css";

const students = [
  {
    id: "DE160192",
    name: "Nguyễn Hồ Quốc Khánh",
    status: "Đà Nẵng",
    image: "student1.JPG",
  },
  {
    id: "DE160377",
    name: "Choy Vĩnh Thiện",
    status: "Quảng Nam",
    image: "student2.JPG",
  },
  {
    id: "DE160547",
    name: "Đỗ Nguyên Phúc",
    status: "Đà Nẵng",
    image: "student3.JPG",
  },
  {
    id: "DE170089",
    name: "Lê Hoàng Minh",
    status: "Đà Nẵng",
    image: "student4.JPG",
  },
];

const Students = () => {
  return (
    <div>
      {/* Header */}
      <Navbar className="custom-navbar" expand="lg">
          <Navbar.Brand href="#">
            <img src="fptulogo.jpg" alt="FPT University" className="navbar-logo" />
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
      </Navbar>

      {/* Banner */}
      <div className="banner">
        <img src="banner.JPG" alt="Students" className="banner-image" />
      </div>

      {/* Breadcrumb */}
      <Container className="mt-4 breadcrumb-container">
        <p>
          <a href="#">Home</a> / <span>Students</span>
        </p>
      </Container>

      {/* Students Section */}
      <Container className="students-detail">
        <h2 className="text-center section-title">Students Detail</h2>
        <Row className="mt-4">
          {students.map((student, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="student-card">
                <Card.Img variant="top" src={student.image} className="student-image" />
                <Card.Body>
                  <Card.Title className="student-id">{student.id}</Card.Title>
                  <Card.Text className="student-name">{student.name}</Card.Text>
                  <Card.Text className="student-status">{student.status}</Card.Text>
                  <Form className="attendance-form">
                    <Form.Check inline label="Absent" name={`attendance${index}`} type="radio" id={`absent${index}`} />
                    <Form.Check inline label="Present" name={`attendance${index}`} type="radio" id={`present${index}`} />
                  </Form>
                  <Button variant="warning" className="submit-btn">
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
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

    </div>
  );
};

export default Students;
