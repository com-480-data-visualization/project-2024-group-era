import React from 'react';
import { Link } from 'react-router-dom';
import { BUTTON_PROPERTY } from '../../constants/button';
import tryme from '../../assets/tryme.gif';

function GameSection() {
    return (
        <section id="game" className="py-20">
            <div className="py-24 px-16 md:px-24">
                <h2 className="text-4xl font-bold text-center mb-8">EcoSurvival Game</h2>
                <p className="text-left mb-8">Congratulations! We believe you have gained an overview of the current state of the world's endangered species through our visualizations. Now, let's play a game to test your knowledge of endangered species and conservation efforts. In this game, cute animals are being pushed into an explosion by demons, and you have three minutes to save them! Don't be discouraged if you don't succeed; we'll provide you with a data visualization report to help you prepare for your next attempt. If you succeed, you will receive a certificate from us. Come on, challenge yourself!</p>
                <div className="flex justify-center items-center">
                    <Link to="/project-2024-group-era/game" className={BUTTON_PROPERTY}>
                        Start Game
                    </Link>
                    <img 
                        src={tryme}
                        alt="Try Me" 
                        style={{ marginLeft: '20px', width: '100px', height: 'auto' }} 
                    />
                </div>
            </div>
        </section>
    );
}

export default GameSection;
 