import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching data from the JSON Server
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error("There was an error fetching the data!", error));
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <Card>
              <Card.Img variant="top" src={`http://localhost:5000/${product.image}`} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
