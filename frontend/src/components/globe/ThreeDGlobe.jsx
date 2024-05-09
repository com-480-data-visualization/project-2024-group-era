import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = ({ points, width }) => {
  const globeEl = useRef(undefined);

  useEffect(() => {
      if (globeEl.current) {
          globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.5 });
      }
  }, [globeEl]);

  const getConservationStatus = (conservationStatus) => {
    if (conservationStatus === 'NT') {
      return 'Near Threatened';
    }
    if (conservationStatus === 'VU') {
      return 'Vulnerable';
    }
    if (conservationStatus === 'EN') {
      return 'Endangered';
    }
    if (conservationStatus === 'CR') {
      return 'Critically Endangered';
    }
    if (conservationStatus === 'EX') {
      return 'Extinct';
    }
    return 'Unknown';
  };

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="rgba(0,0,0,0)"
      width={width}
      height={width}
      pointsData={points}
      pointAltitude={0.01}
      pointColor="color"
      pointRadius={0.5}
      pointLabel={point => `
        <div style="padding: 10px; font-size: 14px; background: white; min-width: 250px; font-family: 'Poppins', sans-serif; border-radius: 10px;">
          <div style="font-weight: bold; color: black;">${point.name}</div>
          <div style="color: grey;">Conservation status: ${getConservationStatus(point.conservationStatus)}</div>
        </div>
      `}
    />
  );
}

export default GlobeComponent;
