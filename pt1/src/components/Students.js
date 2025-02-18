import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentCard from "./StudentCard";
import './styles.css';

const students = [
  { id: "DE160192", name: "Nguyễn Hồ Quốc Khánh", status: "Đà Nẵng", image: "image/student1.JPG" },
  { id: "DE160377", name: "Choy Vĩnh Thiện", status: "Quảng Nam", image: "image/student2.JPG" },
  { id: "DE160547", name: "Đỗ Nguyên Phúc", status: "Đà Nẵng", image: "image/student3.JPG" },
  { id: "DE170089", name: "Lê Hoàng Minh", status: "Đà Nẵng", image: "image/student4.JPG" },
];

const Students = () => {
  return (
    <div>

      {/* Banner */}
      <div className="banner">
        <img src="image/banner.JPG" alt="Students" className="banner-image" />
      </div>

      {/* Breadcrumb */}
      <Container className="mt-4 breadcrumb-container">
        <p><a href="#">Home</a> / <span>Students</span></p>
      </Container>

      {/* Students Section */}
      <Container className="students-detail">
        <h2 className="text-center section-title">Students Detail</h2>
        <Row className="mt-4">
          {students.map((student, index) => (
            <Col md={6} className="mb-4" key={index}>
              <StudentCard student={student} index={index} />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
};

export default Students;
