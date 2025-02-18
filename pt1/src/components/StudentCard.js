import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import './StudentCard.css';

const StudentCard = ({ student, index }) => {
  return (
    <Card className="student-card">
      <Card.Img variant="top" src={student.image} className="student-image" />
      <Card.Body>
        <Card.Title className="student-id">{student.id}</Card.Title>
        <Card.Text className="student-name">{student.name}</Card.Text>
        <Card.Text className="student-status">{student.status}</Card.Text>
        <Form className="attendance-form">
          <Form.Check inline label="Absent" name={`attendance${index}`} type="radio" id={`absent${index}`} />
          <Form.Check inline label="Present" name={`attendance${index}`} type="radio" id={`present${index}`} />
        </Form>
        <Button variant="warning" className="submit-btn">Submit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;
