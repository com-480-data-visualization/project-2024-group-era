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
    <div id="endangered-species" className="mx-14 mb-8">
      <div className="flex flex-col items-center py-20 rounded-3xl bg-neutral-800">
        <div className="flex items-center justify-center mb-10">
          <div className='toggle-container' onClick={handleToggle} style={{ marginRight: '1rem' }}>
            <div className={`toggle-btn ${!isToggled ? "disable" : ""}`}>
              {isToggled ? '2D' : '3D'}
            </div>
          </div>
          <span className="text-4xl font-bold whitespace-nowrap">Navigation: Explore the distribution of endangered species.</span>
      </div>
      
      {/* Conditionally render the map and text based on isToggled */}
      {isToggled ? (
        <div className="w-full flex justify-center">
          <TwoDWorldMap points={points} />
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center">
           <div className="w-full lg:w-1/2" style={{ display: 'flex', justifyContent: 'center' }}>
              <ThreeDGlobe points={points} width={550}/>
          </div>
          <div className="w-full lg:w-1/2 px-10">
            <p className='mx-20'>
              This section displays the distribution of endangered species around the world. Each point represents an animal, and the darker the red point, the more severe the conservation status of the animal. When a visitor hovers over a point, the information about the animal, such as its name and conservation status, will show up. We provide both 3D and 2D views and also create a toggle that allows a visitor to switch between them. We used the react-globe.gl for the 3D globe and leaflet for the 2D world map with the Mercator projection. We learned the ways to create maps from lecture 8.
            </p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default GlobeSection