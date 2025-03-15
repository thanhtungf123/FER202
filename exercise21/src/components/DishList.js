import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DishData from '../data/DishData';

function DishList() {
  const dishes = DishData();  // Lấy dữ liệu từ DishData

  return (
    <Row>
      {dishes.map(dish => (
        <Col md={3} key={dish.id} className="mb-4">
          <Card>
            <Card.Img variant="top" src={dish.image} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Link to={`/dish/${dish.id}`} className="btn btn-primary">View Details</Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DishList;
