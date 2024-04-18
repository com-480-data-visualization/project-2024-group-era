import React from 'react'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
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

      <p className='mt-5 text-neutral-500'>Search for the situation of your favorite animal:</p>
      <div className="flex justify-center mt-5">
        <input
          type="text"
          className="rounded-md py-3 px-4 mx-3"
          placeholder="Eg: Tiger"
        />
        <a
          href="#"
          className="bg-gradient-to-r from-[#116211] to-[#61eb54]  py-3 px-4 mx-3 rounded-md"
        >
            Search
        </a>
      </div>
    </div>
  )
}

export default HeroSection