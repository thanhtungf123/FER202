import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { QuizContext } from './QuizProvider';
import QuizForm from './QuizForm';

const Quiz = () => {
  const { checkAnswers, results, questions } = useContext(QuizContext);

  // Tính tổng số câu trả lời đúng
  const correctAnswersCount = results.filter((r) => r.isCorrect).length;
  const totalQuestions = questions.length;
  const hasSubmitted = results.length > 0; // Kiểm tra xem đã submit chưa

  return (
    <div>
      <QuizForm />
      <div className="text-center my-4">
        <Button onClick={checkAnswers} variant="primary">Submit</Button>
      </div>

      {/* Hiển thị điểm số nếu đã nộp bài */}
      {hasSubmitted && (
        <div className="text-center mt-3">
          <h4>🎯 Your Score: {correctAnswersCount} / {totalQuestions}</h4>
        </div>
      )}
    </div>
  );
};

export default Quiz;
