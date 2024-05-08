import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GlobeSection from './components/globe/GlobeSection';
import HabitatsSection from './components/HabitatsSection';
import ConservationSection from './components/ConservationSection';
import ThreatsSection from './components/ThreatsSection';
import ActionsSection from './components/actions/ActionsSection';
import GameSection from './components/game/GameSection';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function Home() {
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <div>
        <HeroSection />
        <ConservationSection />
        <GlobeSection />
        <HabitatsSection />
        <ThreatsSection />
        <ActionsSection />
        <GameSection />
        <About />
      </div>
      <Footer />
    </>
  );
};

export default Home;