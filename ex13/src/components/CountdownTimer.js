import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';

const CountdownTimer = ({ initialValue }) => {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) return;

    const timerId = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]);

  return (
    <Container className="mt-3">
      <Alert variant={timeRemaining > 0 ? 'primary' : 'danger'}>
        {timeRemaining > 0 ? `Time Remaining: ${timeRemaining}` : 'Time is up!'}
      </Alert>
    </Container>
  );
};

export default CountdownTimer;
