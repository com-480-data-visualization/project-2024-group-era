import React from 'react';
import SearchBar from './SearchBar';
import backgroundImage from '../assets/background.jpg';

const HeroSection = () => {
  return (
    <header id='home' className='h-screen relative -mt-16'>
      <div className="absolute inset-0 z-0 bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})`}}></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-70">
          <div className="px-4 mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide font-medium">
                Empowering people to
                <span className="bg-gradient-to-r from-[#116211] to-[#61eb54] text-transparent bg-clip-text">
                  {" "}
                  conserve wildlife
                </span>
              </h1>
              <p className="mt-10 text-lg text-center text-gray-200 max-w-4xl">
                Join us in the fight against extinction! Explore our dynamic webpage 
                dedicated to raising awareness about endangered species and inspiring 
                action towards their conservation. 
              </p>

              <SearchBar />
            </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
