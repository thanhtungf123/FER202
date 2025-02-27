import React, { useState, useEffect } from 'react';
import { Container, Badge } from 'react-bootstrap';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container className="mt-3">
      <h3>Window Size</h3>
      <p>
        Width: <Badge bg="success">{windowSize.width}px</Badge> | Height: <Badge bg="info">{windowSize.height}px</Badge>
      </p>
    </Container>
  );
};

export default WindowSize;
