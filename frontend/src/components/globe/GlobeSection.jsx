import React, { useState, useEffect } from 'react'
import animalsData from '../../../../data_viz_animals/animals.json';
import { CONSERVATION_STATUSES } from '../../constants/conservationStatuses.jsx';  
import TwoDWorldMap from './TwoDWorldMap';
import ThreeDGlobe from './ThreeDGlobe';
import "../toggle/Toggle.css";


// Adjust the color based on conservation status. The higher the conservation status, the darker the red should be.
const colorScale = d => `rgba(255, ${100 + 155 * (1 - d / 5)}, ${100 + 155 * (1 - d / 5)}, 1)`;

// Format data in a component
const formattedData = animalsData.map(animal => ({
  lat: animal.latitude,
  lng: animal.longitude,
  color: colorScale(CONSERVATION_STATUSES[animal.category]), // Use the mapping here      
  name: animal.sci_name,
  conservationStatus: animal.category
}));

const GlobeSection = () => {
  const [points, setPoints] = useState([]);
  const [isToggled, setToggle] = useState(false);

  // Updates the points state variable with formattedData.
  useEffect(() => {
    setPoints(formattedData);
  }, []);

  const handleToggle = () => {
    setToggle(!isToggled); // Function to change the state
  };

  return (
    <div id="endangered-species" className="min-h-screen">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <p className="flex items-center justify-center mt-10 max-w-4xl">
          <div className='toggle-container' onClick={handleToggle} >
            <div className={`toggle-btn ${!isToggled ? "disable" : ""}`}>
              {isToggled ? '2D' : '3D'}
            </div>
          </div> 
          <span className="text-lg text-center ml-2"> Navigation: Explore the world and discover the distribution of endangered species.</span>
        </p>
        {isToggled ? <TwoDWorldMap points={points} /> : <ThreeDGlobe points={points} />}
      </div>
    </div>
  )
}

export default GlobeSection