import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

function DishDetail({ dishes }) {
  const { dishId } = useParams();
  const dish = dishes.find(dish => dish.id === parseInt(dishId));

  if (!dish) {
    return <h2>Dish not found</h2>;
  }

  return (
    <div className="my-5">
      <Card className="d-flex flex-row" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Hình ảnh nằm bên trái */}
        <Col xs={4} className="p-0">
          <Card.Img 
            variant="top" 
            src={dish.image} 
            className="img-fluid" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </Col>

        {/* Nội dung card ở bên phải */}
        <Col xs={8}>
          <Card.Body>
            <Card.Title>{dish.name}</Card.Title>
            <Card.Text>{dish.description}</Card.Text>
            <Card.Text><strong>Price:</strong> ${dish.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Col>
      </Card>
    </div>
  );
}

export default DishDetail;
