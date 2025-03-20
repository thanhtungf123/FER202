import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/UserAccounts');
      const user = response.data.find(
        (u) => u.username === username && u.password === password
      );

      if (user && user.status === 'active') {
        alert(`Welcome, ${username} login successful!`);

        // Redirect based on user type
        if (user.account_type === 'admin') {
          navigate('/products'); // Admin can access product management
        } else {
          navigate('/products'); // Regular users also view products
        }
      } else {
        setError('Invalid username or password!');
      }
    } catch (err) {
      setError('An error occurred during login!');
    }
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
