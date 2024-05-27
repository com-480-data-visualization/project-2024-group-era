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
            Welcome to the Habitat Distribution Treemap! Understanding the distribution of habitats of endangered species is crucial for targeted conservation efforts and efficient resource allocation. This interactive section allows you to explore how different species are distributed across various habitats.
            <br /> <br />
            Hover over any square in the treemap to see detailed information about that habitat. The top section will display the habitat name and count, giving you immediate insights into the specific habitat and the number of species it supports.
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