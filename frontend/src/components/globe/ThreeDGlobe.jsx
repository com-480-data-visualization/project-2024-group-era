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
      pointAltitude={0.005}
      pointColor="color"
      pointRadius={0.6}
      pointLabel={point => `
        <div style="padding: 5px; font-size: 12px;">
          <div style="font-weight: bold;">${point.name}</div>
          <div style="color: grey; font-size: 10px;">${point.conservationStatus}</div>
        </div>
      `}
    />
  );
}

export default GlobeComponent;
