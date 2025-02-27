import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [userId, setUserId] = useState(1);
  const validateInput = (input) => input.length > 3; // Giả lập validation: input phải trên 3 ký tự

  return (
    <Container>
      <h1 className="text-center my-4">React useEffect Exercises</h1>

      <Button onClick={() => setUserId(prev => prev === 10 ? 1 : prev + 1)}>Change User ID</Button>
      <UserPosts userId={userId} />

      <CountdownTimer initialValue={10} />
      <WindowSize />
      <ValidatedInput validationFunction={validateInput} errorMessage="Input must be at least 4 characters long" />
    </Container>
  );
};

export default App;
