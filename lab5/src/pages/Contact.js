import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function Contact() {
    const [validated, setValidated] = useState(false);
    const [submitted, setSubmitted] = useState(false); // Trạng thái xác nhận gửi form thành công
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault(); // Ngăn chặn reload trang
        setSubmitted(true); // Đánh dấu là đã gửi form thành công
      }
      setValidated(true);
    };

  return (
    <Container>
      <h2 className="text-center my-4">Contact Us</h2>
            {/* Hiển thị thông báo cảm ơn nếu đã submit thành công */}
            {submitted ? (
        <Alert variant="success" className="text-center">
          🎉 Cảm ơn bạn! Chúng tôi đã nhận được thông tin của bạn.
        </Alert>
            ) :(
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* First Name */}
          <Col md="4">
            <Form.Group controlId="validationFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a First Name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Last Name */}
          <Col md="4">
            <Form.Group controlId="validationLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a Last Name.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Username */}
          <Col md="4">
            <Form.Group controlId="validationUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" required />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* City */}
          <Col md="4">
            <Form.Group controlId="validationCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* State */}
          <Col md="4">
            <Form.Group controlId="validationState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* Zip */}
          <Col md="4">
            <Form.Group controlId="validationZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>

        {/* Checkbox */}
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" variant="primary">Submit form</Button>
      </Form>
            )}
    </Container>
  );
}

export default Contact;
