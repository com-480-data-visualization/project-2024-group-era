import React from 'react'
import Treemap from './treemap/Treemap'
import { data } from './treemap/data'

const HabitatsSection = () => {
  return (
    <div id="habitats">
      <div className="section-container">
        <h1 className="title">Main habitats where endangered species live</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <p className="px-20 text-justify">
              This sections allows users to explore how species are distributed across different habitats. This section is a tree map (inspired by lecture 5) to visualize the proportions and that provides detailed information about the habitats, giving users a better understanding of the ecosystems and environments that support these animals. To improve visualization we plan that users can select categories such as "endangered" or "critically endangered" and visualize the habitat distribution of species within those categories. 
            </p>
          </div>
          <div className="chart-container">
            <Treemap data={data} width={550} height={500} />
          </div>      
        </div>
        </div>
    </div>
  )
}

export default HabitatsSection