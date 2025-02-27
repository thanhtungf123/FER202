import React, { useState, useEffect } from 'react';
import { Form, Container, Alert } from 'react-bootstrap';

const ValidatedInput = ({ validationFunction, errorMessage }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <Container className="mt-3">
      <Form>
        <Form.Group controlId="validatedInput">
          <Form.Label>Enter text:</Form.Label>
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            isInvalid={!isValid}
          />
          <Form.Control.Feedback type="invalid">
            {errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      {!isValid && <Alert variant="danger" className="mt-2">{errorMessage}</Alert>}
    </Container>
  );
};

export default ValidatedInput;
