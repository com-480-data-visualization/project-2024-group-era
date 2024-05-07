import React from 'react';
import Home from './Home';
import GamePage from './components/game/GamePage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/project-2024-group-era/" element={<Home />} />
      <Route path="/project-2024-group-era/game" element={<GamePage />} />
    </Routes>
  );
};

export default App;
