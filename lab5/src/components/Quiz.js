import React, { useState } from "react";
import { Card, Button, Container, Form, Alert } from "react-bootstrap";

const questions = [
  { id: 1, question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
  { id: 2, question: "What is JSX?", options: ["HTML in JS", "CSS in JS", "XML in JS"], answer: "HTML in JS" },
  { id: 3, question: "Which hook is used for state management in React?", options: ["useState", "useEffect", "useContext"], answer: "useState" },
  { id: 4, question: "What is the correct way to import a component in React?", options: ["import MyComponent from './MyComponent'", "import { MyComponent } from './MyComponent'", "Both are correct"], answer: "Both are correct" },
  { id: 5, question: "Which keyword is used to define a constant variable in JavaScript?", options: ["var", "let", "const"], answer: "const" },
  { id: 6, question: "React components are written in which syntax?", options: ["JSX", "HTML", "XML"], answer: "JSX" },
  { id: 7, question: "What does 'useEffect' do in React?", options: ["Handles side effects", "Manages state", "Creates new components"], answer: "Handles side effects" },
  { id: 8, question: "Which method is used to update state in a class component?", options: ["setState", "updateState", "this.changeState"], answer: "setState" },
  { id: 9, question: "What is the default port for a React development server?", options: ["3000", "5000", "8080"], answer: "3000" },
  { id: 10, question: "Which package is used for routing in React?", options: ["react-router", "react-router-dom", "router-react"], answer: "react-router-dom" }
];

function Quiz() {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
  
    const handleSubmit = () => {
      let correctAnswers = 0;
      questions.forEach((q) => {
        if (selectedAnswers[q.id] === q.answer) {
          correctAnswers += 1;
        }
      });
      setScore(correctAnswers);
      setSubmitted(true);
    };
  
    return (
      <Container>
        <h2 className="text-center my-4">Let's Do It!</h2>
        
        {submitted && (
          <Alert variant="info" className="text-center">
            🎉 Bạn đã trả lời đúng {score} / {questions.length} câu!  
            <br /> Điểm số: <strong>{(score / questions.length) * 10}/10</strong>
          </Alert>
        )}
  
        {questions.map((q, index) => (
          <Card key={q.id} className="mb-3 shadow-sm">
            <Card.Body>
              <Card.Title>
                <span className="fw-bold">Câu {index + 1}: </span> {q.question}
              </Card.Title>
              {q.options.map((opt) => {
                const isCorrect = submitted && opt === q.answer;
                const isWrong = submitted && selectedAnswers[q.id] === opt && opt !== q.answer;
  
                return (
                  <Form.Check
                    key={opt}
                    type="radio"
                    label={opt}
                    name={`q${q.id}`}
                    value={opt}
                    onChange={() => setSelectedAnswers({ ...selectedAnswers, [q.id]: opt })}
                    disabled={submitted} 
                    className={isCorrect ? "text-success fw-bold" : isWrong ? "text-danger fw-bold" : ""}
                  />
                );
              })}
            </Card.Body>
          </Card>
        ))}
  
        {!submitted ? (
          <Button variant="success" className="mt-3" onClick={handleSubmit}>
            Submit Answers
          </Button>
        ) : (
          <Button variant="primary" className="mt-3" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        )}
      </Container>
    );
  }

export default Quiz;
