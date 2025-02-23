import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Question from "./Question";
import Score from "./Score";

const questions = [
  {
    question: "1. What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "2. Which language is used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "3. What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "4. What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: "Jupiter",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Quiz App</h2>
      {isFinished ? (
        <Score score={score} totalQuestions={questions.length} onRestart={handleRestartQuiz} />
      ) : (
        <Question
          data={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          onSubmit={handleSubmitAnswer}
        />
      )}
    </Container>
  );
};

export default QuizApp;
