import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-3">Render and Commit Demo</h1>
      <p className="lead">Count: <strong>{count}</strong></p>
      <Button variant="success" onClick={handleClick}>
        Increment
      </Button>
    </Container>
  );
};

export default RenderAndCommitDemo;
