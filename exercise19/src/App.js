import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimalCard from './components/AnimalCard';
import animals from './data/animals';
import './App.css';

function App() {
  return (
    <Container className="mt-4">
      <h1>Animals</h1>
      <Row className="justify-content-center">
        {animals.map((animal, index) => (
          <Col key={index} md={4} sm={6} xs={12} className="d-flex justify-content-center">
            <AnimalCard {...animal} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
