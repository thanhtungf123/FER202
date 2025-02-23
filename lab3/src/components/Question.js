import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const Question = ({ data, selectedAnswer, onSelectAnswer, onSubmit }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h4>{data.question}</h4>
        <Row className="mt-3">
          {data.options.map((option, index) => (
            <Col key={index} xs={6} md={3} className="mb-2">
              <Button
                variant={selectedAnswer === option ? "primary" : "outline-primary"}
                className="w-100"
                onClick={() => onSelectAnswer(option)}
              >
                {option}
              </Button>
            </Col>
          ))}
        </Row>
        <Button
          className="mt-3"
          variant="success"
          onClick={onSubmit}
          disabled={!selectedAnswer}
        >
          Submit Answer
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Question;
