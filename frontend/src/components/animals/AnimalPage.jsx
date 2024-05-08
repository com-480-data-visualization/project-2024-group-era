import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';
import { BarChart3, Earth, Info, ShieldAlert, Sprout } from 'lucide-react';

const AnimalPage = () => {
  return (
    <div>
      <Navbar />

      <div className='container mx-auto px-4 py-8'>
        <h1 className='title pt-12'>Animal name</h1>
        <div className='flex flex-col md:flex-row pt-20 px-10'>
          <div class="w-full lg:w-2/3 md:pr-16 text-justify">
            <h1 class="text-xl font-bold flex">
              <Info className='mr-4' size={24} />
              <span>Conservation information</span>
            </h1>
            <p class="mt-4">Status: </p>

            <h1 class="mt-4 text-xl font-bold flex">
              <Earth className='mr-4' size={24} />
              <span>Geographic range</span>
            </h1>
            <p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>

            <h1 class="mt-4 text-xl font-bold flex">
              <Sprout className='mr-4' size={24} />
              <span>Habitad</span>
            </h1>
            <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>

            <h1 class="mt-4 text-xl font-bold flex">
              <ShieldAlert className='mr-4' size={24} />
              <span>Threads</span>
            </h1>
            <p class="mt-4 pb-10 md:pb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center">
            <img 
              src="https://ew.com/thmb/ulxnM8McQcjUew-_2BK1AC5dB90=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TikTok-Monkey-2340a4ca3baa45b9adc145d1e5db988b.jpg"
              alt="Animal photo"
              className='max-w-[400px] rounded-lg hover:shadow-lg hover:scale-105 transition transform duration-500 hover:shadow-slate-600' 
            />
          </div>
        </div>

        <div className='px-10 pt-10 md:pt-0'>
          <h1 class="mt-4 text-xl font-bold flex">
            <BarChart3 className='mr-4' size={24} />
            <span>Population</span>
          </h1>
          <p class="mt-4 mb-20">Trend: decreasing</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AnimalPage