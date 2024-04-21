import React, { useState, useEffect } from 'react'
import Globe from 'react-globe.gl'
import animalsData from '../../../data_viz_animals/animals.json';
import { CONSERVATION_STATUSES } from '../constants/conservationStatuses.jsx';  

// // Adjust the color based on conservation status. The higher the conservation status, the darker the red should be.
const colorScale = d => `rgba(255, ${100 + 155 * (1 - d / 5)}, ${100 + 155 * (1 - d / 5)}, 1)`;

// // Format data in a component
const formattedData = animalsData.map(animal => ({
  lat: animal.latitude,
  lng: animal.longitude,
  color: colorScale(CONSERVATION_STATUSES[animal.category]), // Use the mapping here
  name: animal.sci_name,
  conservationStatus: animal.category
}));

const GlobeSection = () => {
  const [points, setPoints] = useState([]);

  // Updates the points state variable with formattedData.
  useEffect(() => {
    setPoints(formattedData);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <p className="mt-10 text-lg text-center max-w-4xl">
          3D Globe Navigation: Explore the world and discover the distribution of endangered species.
        </p>
        {/* Globe Component Added Below */}
          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor="rgba(0,0,0,0)" // makes the canvas background transparent
            width={850}  // Width of the globe canvas
            height={850} // Height of the globe canvas
            pointsData={points}
            pointAltitude={0.005}  // Adjusts how far the points are from the surface of the globe.
            pointColor="color"  // Uses the color property from the point data.
            pointLabel={point => `
              <div style="padding: 5px; font-size: 12px;">
                <div style="font-weight: bold;">${point.name}</div>
                <div style="color: grey; font-size: 10px;">${point.conservationStatus}</div>
              </div>
            `}  // Provides HTML content for tooltips, which appear when the user hovers over a point.
          />
      </div>
    </div>
  )
}

export default GlobeSection