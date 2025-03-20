import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";

const featuredImages = [
  { id: 1, src: "/images/menu-01.jpg", alt: "Food 1" },
  { id: 2, src: "/images/menu-02.jpg", alt: "Food 2" },
  { id: 3, src: "/images/menu-03.jpg", alt: "Food 3" },
  { id: 4, src: "/images/menu-04.jpg", alt: "Food 4" },
  { id: 5, src: "/images/menu-05.jpg", alt: "Food 5" },
  { id: 6, src: "/images/menu-06.jpg", alt: "Food 6" }
];

function Home() {
  return (
    <Container>
      {/* Banner */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide1.jpg" alt="Banner" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide2.jpg" alt="Banner" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/slide3.jpg" alt="Banner" />
        </Carousel.Item>
      </Carousel>

      {/* Danh sách hình ảnh nhỏ */}
      <Row className="justify-content-center">
        {featuredImages.map((item) => (
          <Col key={item.id} xs={6} sm={4} md={2} className="text-center">
            <Image src={item.src} alt={item.alt} roundedCircle fluid className="shadow-sm" />
          </Col>
        ))}
      </Row>

      {/* Tiêu đề trang */}
      <h2 className="text-danger text-left mt-3">This is Home Page</h2>
    </Container>
  );
}

export default Home;
