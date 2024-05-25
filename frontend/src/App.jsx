import React from 'react';
import VideoSection from './components/video/VideoSection';
import Home from './Home';
import GamePage from './components/game/GamePage';
import AnimalPage from './components/animals/AnimalPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/project-2024-group-era/" element={<VideoSection />} />
      <Route path="/project-2024-group-era/home" element={<Home />} />
      <Route path="/project-2024-group-era/game" element={<GamePage />} />
      <Route path="/project-2024-group-era/animal/:id" element={<AnimalPage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;