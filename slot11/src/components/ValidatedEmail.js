import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};

function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (email === "") {
      setEmailValid(false);
      setEmailError("Email không được để trống!");
    } else {
      const isValidEmail = validateEmail(email);
      setEmailValid(isValidEmail);
      setEmailError(isValidEmail ? "" : "Email không hợp lệ. Vui lòng nhập lại!");
    }
  }, [email]);

  useEffect(() => {
    if (password === "") {
      setPasswordValid(false);
      setPasswordError("Mật khẩu không được để trống!");
    } else {
      const isValidPassword = validatePassword(password);
      setPasswordValid(isValidPassword);
      setPasswordError(isValidPassword ? "" : "Mật khẩu phải có ít nhất 8 ký tự!");
    }
  }, [password]);

  return (
    <Container>
    <Form>
      {/* Email Field */}
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isValid={emailValid}
          isInvalid={!emailValid}
        />
        <Form.Control.Feedback type="invalid">
          {emailError}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Password Field */}
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isValid={passwordValid}
          isInvalid={!passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          {passwordError}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Submit Button */}
      <Button variant="primary" type="submit" disabled={!emailValid || !passwordValid || email === "" || password === ""}>
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default ValidatedForm;
