import React from 'react';
import { Link } from 'react-router-dom';
import { BUTTON_PROPERTY } from '../../constants/button';

function GameSection() {
    return (
        <section id="game" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">EcoSurvival Game</h2>
                <p className="text-center mb-8">Play the game to test your knowledge on endangered species and conservation efforts.</p>
                <div className="flex justify-center">
                    <Link to="/project-2024-group-era/game" className={BUTTON_PROPERTY}>
                        Start Game
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default GameSection;
 