import React from "react";
import { Card, Button } from "react-bootstrap";

const Score = ({ score, totalQuestions, onRestart }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <h3>Quiz Completed!</h3>
        <p>Your Score: {score} / {totalQuestions}</p>
        <Button variant="primary" onClick={onRestart}>
          Play Again
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Score;
