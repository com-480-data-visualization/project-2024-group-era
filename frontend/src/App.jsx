import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GlobeSection from './components/globe/GlobeSection'
import HabitatsSection from './components/HabitatsSection'
import AnimalSection from './components/AnimalSection'
import Threats from './components/Threats'
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
        <AnimalSection />
        <Threats />
        <MeasuresSection />
      </div>
      <Footer />
    </>
  )
}

export default App