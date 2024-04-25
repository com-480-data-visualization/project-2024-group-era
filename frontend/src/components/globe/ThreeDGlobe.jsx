import React from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = ({ points }) => {
  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="rgba(0,0,0,0)"
      width={850}
      height={850}
      pointsData={points}
      pointAltitude={0.01}
      pointColor="color"
      pointRadius={0.5}
      pointLabel={point => `
        <div style="padding: 5px; font-size: 12px; background: white;">
          <div style="font-weight: bold; color: black;">${point.name}</div>
          <div style="color: grey; font-size: 10px;">Conservation status: ${point.conservationStatus}</div>
        </div>
      `}
    />
  );
}

export default GlobeComponent;
