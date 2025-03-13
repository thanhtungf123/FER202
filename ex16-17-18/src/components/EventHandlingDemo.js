import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-3">Event Handling Demo</h1>
      <p className="lead">Count: <strong>{count}</strong></p>
      <Button variant="primary" onClick={handleButtonClick}>
        Increase Count
      </Button>
    </Container>
  );
};

export default EventHandlingDemo;
