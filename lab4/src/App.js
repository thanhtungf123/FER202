import React from 'react';
import { Container } from 'react-bootstrap';
import QuizProvider from './components/QuizProvider';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <QuizProvider>
      <Container>
        <h1 className="my-4 text-center">❓Quiz</h1>
        <Quiz />
      </Container>
    </QuizProvider>
  );
};

export default App;
