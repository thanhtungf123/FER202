import React, { useContext } from 'react';
import { Form, Card } from 'react-bootstrap';
import { QuizContext } from './QuizProvider';

const QuizForm = () => {
  const { questions, selectedAnswers, setSelectedAnswers, results } = useContext(QuizContext);

  // Cập nhật câu trả lời khi người dùng chọn đáp án
  const handleAnswerSelection = (questionIndex, answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  return (
    <div>
      {questions.map((question, index) => {
        // Tìm kết quả của câu hỏi hiện tại
        const result = results.find((r) => r.question === question.question);

        return (
          <Card key={index} className="mb-4">
            <Card.Body>
              {/* Số thứ tự + câu hỏi */}
              <Card.Title>{index + 1}. {question.question}</Card.Title>
              <Form>
                {question.answers.map((answer, answerIndex) => (
                  <div key={answerIndex} className="form-check" onClick={() => handleAnswerSelection(index, answer)}>
                    <Form.Check
                      type="radio"
                      label={answer}
                      name={`q${index}`}
                      value={answer}
                      onChange={() => handleAnswerSelection(index, answer)}
                      checked={selectedAnswers[index] === answer}
                    />
                  </div>
                ))}
              </Form>

              {/* Hiển thị kết quả ngay dưới câu hỏi */}
              {result && (
                <p className={`mt-2 ${result.isCorrect ? 'text-success' : 'text-danger'}`}>
                  {result.isCorrect ? '✔ Correct' : `✘ Incorrect (Correct: ${question.correctAnswer})`}
                </p>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default QuizForm;
