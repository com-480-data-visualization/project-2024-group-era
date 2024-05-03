import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import GlobeSection from './components/globe/GlobeSection'
import HabitatsSection from './components/HabitatsSection'
import ConservationSection from './components/ConservationSection'
import ThreatsSection from './components/ThreatsSection'
import ActionsSection from './components/actions/ActionsSection'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mx-auto py-20 px-8 max-w-full'>
        <HeroSection />
        <ConservationSection />
        <GlobeSection />
        <HabitatsSection />
        <ThreatsSection />
        <ActionsSection />
        <About />
      </div>
      <Footer />
    </>
  )
}

export default App