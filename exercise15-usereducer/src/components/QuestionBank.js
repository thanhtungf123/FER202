import React, { useReducer, useState, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  timeLeft: 10, // Thời gian cho mỗi câu hỏi
  showResult: null, // Kết quả trả lời câu hỏi
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showResult: isCorrect
          ? "Correct!"
          : `Incorrect! The correct answer is: ${state.questions[state.currentQuestion].answer}`,
        showScore: state.currentQuestion + 1 === state.questions.length, // Hiển thị điểm khi hết câu hỏi
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
      };

    case "DECREASE_TIME":
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "RESET_TIME":
      return { ...state, timeLeft: 10 };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, timeLeft, showResult } = state;

  const [highScore, setHighScore] = useState(localStorage.getItem("highScore") || 0);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  // Đếm ngược thời gian cho mỗi câu hỏi
  useEffect(() => {
    if (state.timeLeft > 0 && !showScore) {
      const timer = setInterval(() => {
        dispatch({ type: "DECREASE_TIME" });
      }, 1000);

      return () => clearInterval(timer);
    }
    return;
  }, [state.timeLeft, showScore]);

  // Lưu điểm cao nhất vào localStorage khi kết thúc quiz
  useEffect(() => {
    if (showScore) {
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score); // Lưu điểm cao nhất vào localStorage
      }
    }
  }, [showScore, score, highScore]);

  return (
    <Container className="mt-4">
        <h1>Quizz</h1>
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>🎉High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h4>
              Question {currentQuestion + 1} / {questions.length}
            </h4>
            <h5>
              {questions[currentQuestion].question}
            </h5>
            <ProgressBar now={(currentQuestion + 1) * (100 / questions.length)} label={`${currentQuestion + 1} / ${questions.length}`} />
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>

            <div className="mt-3">
              {timeLeft <= 5 ? (
                <span style={{ color: "red" }}>Time left: {timeLeft}s</span>
              ) : (
                <span>Time left: {timeLeft}s</span>
              )}
            </div>

            <div className="mt-3">
              {showResult && (
                <div className="text-center">
                  {showResult === "Correct!" ? (
                    <FaCheckCircle color="green" />
                  ) : (
                    <FaTimesCircle color="red" />
                  )}
                  <p>{showResult}</p>
                </div>
              )}
            </div>

            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;
