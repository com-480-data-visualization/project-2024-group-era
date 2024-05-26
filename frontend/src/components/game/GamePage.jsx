import React, { useState, useEffect } from 'react';
import { quizzes } from './quiz';
import './GameStyles.css';
import { BUTTON_PROPERTY } from '../../constants/button';
import explosion from '../../assets/explosion.gif';
import cursor from '../../assets/cursor.png';
import certificate from '../../assets/certificate.png';
import fail from '../../assets/fail.png';
import Navbar from '../Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import Footer from '../Footer';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// Function to shuffle quizzes and get three random ones
export function getRandomQuizzes(quizzes) {
    const shuffledQuizzes = quizzes.sort(() => 0.5 - Math.random());
    return shuffledQuizzes.slice(0, 3);
}

function GamePage() {
    const [questions, setQuestions] = useState(getRandomQuizzes(quizzes));
    // const questions = quizzes;
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [hintsVisible, setHintsVisible] = useState(Array(questions.length).fill(false));
    const [activeIndex, setActiveIndex] = useState(-1);

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

    const toggleHint = index => {
        const newHintsVisible = [...hintsVisible];
        newHintsVisible[index] = !newHintsVisible[index];
        setHintsVisible(newHintsVisible);
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

    const resetGame = () => {
        setQuestions(getRandomQuizzes(quizzes)); // Update the questions if you're reshuffling
        setAnswers(Array(questions.length).fill(null));
        setSubmitted(false);
        setTimeLeft(30);
        setHintsVisible(Array(questions.length).fill(false));
        navigate("/project-2024-group-era/game"); // Navigate back to the game
    };

    
    // Pie chart to display wrong answers
    const pieData = [
        { name: "Correct", value: calculateResults()[0], questions: questions.filter((q, index) => answers[index] === q.answer) },
        { name: "Wrong", value: calculateResults()[1], questions: questions.filter((q, index) => answers[index] !== q.answer) }
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #dcdcdc' }}>
                    <p className="label">{payload[0].name} Answers:</p>
                    <ul>
                        {payload[0].payload.questions.map((item, index) => (
                            <li key={index}>
                                Q: {item.question} <br />
                                A: {item.options[item.answer]}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        return null;
    };
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    // Display the certificate if all answers are correct, otherwise display the fail image
    if (submitted) {
        return (answers.every((answer, index) => answer === questions[index].answer)) ? (
            <div>
            <Navbar />

            <ScrollToTopButton />

            <div className="game-container">
                <img src={certificate} style={{width: '50%', height: '50%'}} alt="Certificate of Completion" />
            </div>
            
            <Footer />
            </div>
        ) : (
            <div>
            <Navbar />

            <ScrollToTopButton />
            
            <div className="game-container">
                <img src={fail} style={{width: '20%', height: '20%', marginBottom: '50px'}} alt="Fail" />
                <p style={{ width: '45%', textAlign: 'left', marginBottom: '-10px' }}>
                    <span style={{ fontWeight: 'bold' }}>Results report:</span> Don't be discouraged; you're doing a great job! Please hover over the pie chart to check the questions and their corresponding correct answers, then try again. We're confident you'll succeed in rescuing those animals!
                </p>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie dataKey="value" isAnimationActive={true} data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label={renderCustomizedLabel}>
                            {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={index === 0 ? '#82ca9d' : '#ff726f'} />)}
                        </Pie>
                        <Legend align="center" verticalAlign="bottom" layout="horizontal" />
                        <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                </ResponsiveContainer>
                <button className={BUTTON_PROPERTY} onClick={resetGame} style={{ marginTop: '50px' }}>
                    Try Again
                </button>
            </div> 

            <Footer />
            </div>
        );
    }

    const drainStyle = {
        width: `${(timeLeft / 30) * 100}%`,
    };

    // Replace newlines in hint with <br /> tags for HTML rendering
    function renderHint(hint) {
        const parts = hint.split('\n');
        return parts.map((part, index) => (
            <span key={index}>
                {part}
                {index !== parts.length - 1 && <br />}
            </span>
        ));
    }

    return (
        <div>
        <Navbar />

        <ScrollToTopButton />

        {/* Main content of the game page */}
        <div className="game-container">
            <div style={{ marginBottom: '30px' }}> Time left: {timeLeft}s</div>
            <div className="timer-container">
                <div className="timer-bar" style={drainStyle}></div>
                <img src={explosion} alt="Start" className="timer-image start"/>
                <img src={cursor} alt="End" className="timer-image end" style={{width: '20%', height: '400%', right: `calc(100% - ${drainStyle.width})`}}/>
            </div>
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
                    <button className={BUTTON_PROPERTY} style={{padding: '5px 10px', marginLeft: '0px', fontSize: '12px'}} onClick={() => toggleHint(index)}>
                        {hintsVisible[index] ? "Hide Hint" : "Show Hint"}
                    </button>
                    <div className="hint" style={{ fontSize: '12px' }}>
                        {hintsVisible[index] && <p>{renderHint(question.hint)}</p>}
                    </div>
                </div>
            ))}
            <button className={BUTTON_PROPERTY} onClick={handleSubmit}>Submit Answers</button>
            {submitted && <Pie data={data} />}
        </div>

        <Footer />
        </div>
    );
}

export default GamePage;
