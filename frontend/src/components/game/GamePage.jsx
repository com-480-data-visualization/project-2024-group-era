import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';

const questions = [
  { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], answer: 2 },
  { question: "Capital of France?", options: ["Paris", "Rome", "Berlin", "Madrid"], answer: 0 },
  // Add more questions as needed
];

function GamePage() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

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

  if (submitted && answers.every((answer, index) => answer === questions[index].answer)) {
    return <img src="../../assets/certificate.jpeg" alt="Certificate of Completion" />;
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
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
      <button onClick={handleSubmit}>Submit Answers</button>
      {submitted && <Pie data={data} />}
    </div>
  );
}

export default GamePage;