import React from 'react'
import SearchBar from './SearchBar'

const HeroSection = () => {
  return (
    <div id="home" className="min-h-[600px] flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide font-medium">
        Empowering people to
        <span className="bg-gradient-to-r from-[#116211] to-[#61eb54] text-transparent bg-clip-text">
          {" "}
          conserve wildlife
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Join us in the fight against extinction! Explore our dynamic webpage 
        dedicated to raising awareness about endangered species and inspiring 
        action towards their conservation. 
      </p>

      <SearchBar />
    </div>
  )
}

export default HeroSection