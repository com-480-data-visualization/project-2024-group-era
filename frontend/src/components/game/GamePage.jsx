import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import certificate from '../../assets/certificate.png';
import './styles.css';
import { BUTTON_PROPERTY } from '../../constants/button';
import explosion from '../../assets/explosion.gif';
import cursor from '../../assets/cursor.png';
import fail from '../../assets/fail.png';
import Navbar from '../Navbar';
import ScrollToTopButton from '../ScrollToTopButton';
import Footer from '../Footer';

const questions = [
    { 
        question: "A taxon which is facing an extremely high risk of extinction in the wild in immediate future is known as", 
        options: ["Critically Endangered", "Exotic", "Vulnerable", "Rare"], 
        answer: 0, 
        hint: "Conservation Status: \n (1) Critically Endangered \n • A species facing an extremely high risk of extinction in the wild is known as critically endangered. \n • Example: Black rhino, Red wolf, Northern white rhino, etc. \n (2) Endangered \n • Species face a very high risk of extinction in the wild known as endangered. \n • Example: Asian elephants, Blue whales, Green sea turtles, etc. \n (3) Vulnerable \n • Species that face a high risk of extinction in the wild are known as vulnerable. \n • Example: Blackbuck, Blue sheep, etc. \n (4) Rare \n • Species that are uncommon, scarce, or infrequently encountered are labelled as rare. \n • Example: Himalayan brown bear, etc. \n (5) Exotic \n • Species of plants and animals that are non-native i.e. an area where they do not occur naturally but are introduced into the system from outside are exotic. \n • Example: Nilgiri tahr etc."
    },
    { 
        question: "The term alpha diversity refers to", 
        options: ["Genetic diversity", "Community and ecosystem diversity", "Species diversity", "More than one of the above"], 
        answer: 2, 
        hint: "Biodiversity can be discussed at three levels: \n • Genetic diversity: refers to the variation of genes within species. \n • Species diversity: refers to the variety of species. It relates to the number of species in a defined area. \n • Ecosystem diversity: refers to differences between ecosystem types and the diversity of habitats and ecological processes occurring within each ecosystem. \n \n Alpha diversity (α-diversity) is defined as the mean diversity of species in different sites or habitats on a local scale."
    },
    { 
        question: "Red Data Book keeps a record of", 
        options: ["Red flowered plant", "All plant and animals present on the earth", "Endangered plants and animals", "More than one of the above"], 
        answer: 2, hint: "The Red Data Book, often referred to as the Red List, is the sourcebook which keeps a record of all the endangered animals and plants. This book is maintained by the International Union for Conservation of Nature (IUCN). This book aims to highlight species that are facing a high risk of global extinction, providing valuable data on the trends in species conservation status over time. This helps guide conservation efforts and policies globally to protect these species and their habitats."},
];

function GamePage() {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);
    const [hintsVisible, setHintsVisible] = useState(Array(questions.length).fill(false));

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
                <img src={fail} alt="Fail" />
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
                    <button className={BUTTON_PROPERTY} style={{padding: '5px 10px', fontSize: '12px'}} onClick={() => toggleHint(index)}>
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
