import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import certificate from '../../assets/certificate.jpeg';
import './styles.css';
import { BUTTON_PROPERTY } from '../../constants/button';
// import fail from '../../assets/fail.jpeg'; 

const questions = [
  { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], answer: 2 },
  { question: "Capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: 0 },
];

function GamePage() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // Timer set to 30 seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else if (!submitted) {
      handleSubmit();
    }
  }, [timeLeft]);

  const handleOptionChange = (index, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[index] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateResults = () => {
    const correct = answers.filter((answer, index) => answer === questions[index].answer).length;
    const wrong = questions.length - correct;
    return [correct, wrong];
  };

  const data = {
    labels: ['Correct', 'Wrong'],
    datasets: [
      {
        data: submitted ? calculateResults() : [0, 0],
        backgroundColor: ['#36A2EB', '#FF6384'],
      }
    ]
  };

  // Add logic to display a certificate or a fail message
  if (submitted) {
    if (answers.every((answer, index) => answer === questions[index].answer)) {
        return (
            <div className="game-container">
                <img src={certificate} alt="Certificate of Completion" />
            </div>
        );
    } else {
        return (
            <div className="game-container">
                <p>FAIL</p>
            </div>
        );
    }
  }

  return (
    <div className="game-container">
      <div>Time left: {timeLeft}s</div>
      {questions.map((question, index) => (
         <div className="question-container" key={index}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                name={`question${index}`}
                checked={answers[index] === optionIndex}
                onChange={() => handleOptionChange(index, optionIndex)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button className={BUTTON_PROPERTY} onClick={handleSubmit}>Submit Answers</button>
      {submitted && <Pie data={data} />}
    </div>
  );
}

export default GamePage;
