import React, { createContext, useState } from 'react';

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const quizData = [
    {
      question: 'What is ReactJS?',
      answers: [
        'A JavaScript library for building user interfaces',
        'A programming language',
        'A database management system'
      ],
      correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
      question: 'What is JSX?',
      answers: [
        'A programming language',
        'A file format',
        'A syntax extension for JavaScript'
      ],
      correctAnswer: 'A syntax extension for JavaScript'
    },
    {
      question: 'Which hook is used to manage state in a functional component?',
      answers: [
        'useEffect',
        'useContext',
        'useState'
      ],
      correctAnswer: 'useState'
    },
    {
      question: 'Which method is used to fetch API data in React?',
      answers: [
        'fetch()',
        'get()',
        'axios.post()'
      ],
      correctAnswer: 'fetch()'
    },
    {
      question: 'What is the correct way to update state in React?',
      answers: [
        'Directly modify the state variable',
        'Use the setState function',
        'Use localStorage'
      ],
      correctAnswer: 'Use the setState function'
    },
    {
      question: 'Which company developed ReactJS?',
      answers: [
        'Google',
        'Facebook (Meta)',
        'Microsoft'
      ],
      correctAnswer: 'Facebook (Meta)'
    },
    {
      question: 'What is the main purpose of React Router?',
      answers: [
        'To manage component styling',
        'To handle navigation in a React application',
        'To create animations'
      ],
      correctAnswer: 'To handle navigation in a React application'
    }
  ];

  const [questions, setQuestions] = useState(quizData);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [results, setResults] = useState([]);

  // Kiểm tra kết quả sau khi người dùng nhấn submit
  const checkAnswers = () => {
    const newResults = questions.map((question, index) => ({
      question: question.question,
      userAnswer: selectedAnswers[index],
      isCorrect: selectedAnswers[index] === question.correctAnswer
    }));
    setResults(newResults);
  };

  return (
    <QuizContext.Provider value={{ questions, setQuestions, selectedAnswers, setSelectedAnswers, results, setResults, checkAnswers }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
