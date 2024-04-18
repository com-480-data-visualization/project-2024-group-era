import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mx-auto py-20 px-8 max-w-full'>
        <HeroSection />
      </div>
    </>
  )
}

export default App