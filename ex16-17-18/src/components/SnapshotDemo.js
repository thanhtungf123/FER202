import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-3">State as a Snapshot Demo</h1>
      <p className="lead">Count: <strong>{count}</strong></p>
      
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button variant="primary" className="m-1" onClick={handleIncrement}>
            Increment
          </Button>
          <Button variant="warning" className="m-1" onClick={handleSnapshot}>
            Take Snapshot
          </Button>
          <Button variant="danger" className="m-1" onClick={handleRestore}>
            Restore Snapshot
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SnapshotDemo;
