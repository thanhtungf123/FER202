import React, { useReducer, useState } from "react";
import { Button, Form, Container, Alert, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const initialState = { name: "", email: "", password: "", isSubmitted: false };

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    dispatch({ type: "SET_FIELD", field: e.target.name, value: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!state.name) newErrors.name = "Tên không được để trống!";
    if (!state.email) newErrors.email = "Email không được để trống!";
    if (!state.password) newErrors.password = "Mật khẩu không được để trống!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container>
      {state.isSubmitted && <Alert variant="success">Form đã gửi thành công!</Alert>}
      <Card className="p-4">
        <h3 className="mb-3">{title}</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Tên</Form.Label>
            <Form.Control type="text" name="name" value={state.name} onChange={handleChange} isInvalid={!!errors.name} />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={state.email} onChange={handleChange} isInvalid={!!errors.email} />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" name="password" value={state.password} onChange={handleChange} isInvalid={!!errors.password} />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Button className="mt-3" type="submit">Submit</Button>
        </Form>
      </Card>
    </Container>
  );
};

MyForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm;
