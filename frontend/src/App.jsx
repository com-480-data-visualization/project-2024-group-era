import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GlobeSection from './components/globe/GlobeSection'
import HabitatsSection from './components/HabitatsSection'
import ConservationSection from './components/ConservationSection'
import ThreatsSection from './components/ThreatsSection'
import MeasuresSection from './components/measures/MeasuresSection'
import About from './components/About'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTopButton />
      <div className='py-20 px-8'>
        <HeroSection />
        <ConservationSection />
        <GlobeSection />
        <HabitatsSection />
        <ThreatsSection />
        <MeasuresSection />
        <About />
      </div>
      <Footer />
    </>
  )
}

export default App