import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GlobeSection from './components/globe/GlobeSection'
import HabitatsSection from './components/HabitatsSection'
import ConservationSection from './components/ConservationSection'
import ThreatsSection from './components/ThreatsSection'
import MeasuresSection from './components/measures/MeasuresSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mx-auto py-20 px-8 max-w-full'>
        <HeroSection />
        <GlobeSection />
        <HabitatsSection />
        <ConservationSection />
        <ThreatsSection />
        <MeasuresSection />
      </div>
      <Footer />
    </>
  )
}

export default App