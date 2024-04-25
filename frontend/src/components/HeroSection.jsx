import { Search } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div id="home" className="min-h-[600px] flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide font-medium">
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
          className="
          rounded-md py-3 px-4 mx-3 text-neutral-500
          w-60 border border-neutral-300
          focus:bg-white focus:border-neutral-500 duration-400 focus:text-black
          hover:bg-white hover:border-neutral-500 ease-out duration-400 hover:text-black
          "
          placeholder="Eg: Tiger"
        />
        <a
          href="#"
          className="
          bg-gradient-to-r from-[#116211] to-[#61eb54] 
          py-3 px-4 mx-3 rounded-md
          hover:from-[#74ce6c] hover:to-[#36de27] ease-in-out duration-500
          "
        >
          <Search size={22} />
        </a>
      </div>
    </div>
  )
}

export default HeroSection