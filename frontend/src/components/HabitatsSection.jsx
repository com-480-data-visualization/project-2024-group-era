import treemap from '../assets/treemap.png';
import React from 'react'

const HabitatsSection = () => {
  return (
    <div id="habitats" className="mx-14 mb-8">
      <div className="flex flex-col items-center py-20 rounded-3xl bg-neutral-800">
        <h1 className="text-4xl font-bold">Main habitats where endangered species live</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <p className="mx-20">
              This sections allows users to explore how species are distributed across different habitats. This section is a tree map (inspired by lecture 5) to visualize the proportions and that provides detailed information about the habitats, giving users a better understanding of the ecosystems and environments that support these animals. To improve visualization we plan that users can select categories such as "endangered" or "critically endangered" and visualize the habitat distribution of species within those categories. 
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-10">
            <img src={treemap} alt="Habitats" className="rounded-lg ml-10" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default HabitatsSection