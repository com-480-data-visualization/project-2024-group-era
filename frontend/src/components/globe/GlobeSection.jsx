import React, { useState, useEffect } from 'react'
import animalsData from '../../../../data_viz_animals/animals.json';
import TwoDWorldMap from './TwoDWorldMap';
import ThreeDGlobe from './ThreeDGlobe';
import "./Toggle.css";

// Adjust the color based on conservation status. The higher the conservation status, the darker the red should be.
const CONSERVATION_STATUSES = {
  "NT": 0,
  "VU": 1,
  "EN": 2,
  "CR": 3,
  "EW": 4,
  "EX": 5
};
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
    <div id="endangered-species" className="py-24 px-16 md:px-24">
      <div className="title flex items-center justify-center">
        <div className='toggle-container mr-4' onClick={handleToggle}>
          <div className={`toggle-btn ${!isToggled ? "disable" : ""}`}>
            {isToggled ? '2D' : '3D'}
          </div>
        </div>
        <span>Navigation: Explore the distribution of endangered species</span>
      </div>

      <p className='py-10 text-justify'>
        Endangered species are distributed across the globe, not confined to any specific location. 
        Understanding the geographic distribution of endangered species helps us focus our conservation efforts more effectively. 
        The interactive map below illustrates the worldwide distribution of endangered species. 
        Each point on the map represents the location of a species, 
        with the color of the points reflecting their conservation status — the darker the red, 
        the more endangered the species. You can interact with the globe by rotating it, zooming in and out, 
        and hovering over individual dots to see detailed information about each species. Additionally, 
        you can switch to a 2D world map by clicking the toggle above.
      </p>
      
      {/* Conditionally render the map and text based on isToggled */}
      {isToggled ? (
        <div className="w-full flex justify-center">
          <TwoDWorldMap points={points} />
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <ThreeDGlobe points={points} width={550}/>
        </div>
      )}
    </div>
  );
}

export default GlobeSection