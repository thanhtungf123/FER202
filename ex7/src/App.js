import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const CardDemo = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card border="primary" className="text-center">
            <Card.Img variant="top" src="Mercedes_GLC_200_4matic_mau_den_giaxemercedes_vn_1.jpg.jpg" />
            <Card.Body>
              <Card.Text className="text-primary">
                Some text inside the first card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card border="warning" className="text-center">
            <Card.Img variant="top" src="Mercedes_GLC_200_4matic_mau_den_giaxemercedes_vn_1.jpg.jpg" />
            <Card.Body>
              <Card.Text className="text-warning">
                Some text inside the first card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card border="danger" className="text-center">
            <Card.Img variant="top" src="Mercedes_GLC_200_4matic_mau_den_giaxemercedes_vn_1.jpg.jpg" />
            <Card.Body>
              <Card.Text className="text-danger">
                Some text inside the first card
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardDemo;
