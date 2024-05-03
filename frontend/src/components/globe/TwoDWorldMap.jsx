import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent({ points }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: [0, 0],  // Center the map at the intersection of the equator and the prime meridian
      crs: L.CRS.EPSG4326,
      minZoom: 1,
      maxZoom: 5,
      maxBounds: [[-90, -180], [90, 180]],
      worldCopyJump: false,
    });

    // Load the blue marble image as an image overlay
    const imageUrl = "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg";
    const imageBounds = [[-90, -180], [90, 180]];
    L.imageOverlay(imageUrl, imageBounds, { opacity: 1, noWrap: true }).addTo(map);

    points.forEach(point => {
        L.circleMarker([point.lat, point.lng], {
        color: point.color,     // The stroke color of the circle marker
        fillColor: point.color, // The fill color of the circle marker
        fillOpacity: 1,         // The fill opacity of the circle marker
        radius: 2               // The radius of the circle marker
        }).addTo(map).bindTooltip(`
        <div style="padding: 5px; font-size: 12px;">
            <div style="font-weight: bold;">${point.name}</div>
            <div style="color: grey; font-size: 10px;">${point.conservationStatus}</div>
        </div>
        `);
    });

    map.setView([0, 0], 0);

    return () => map.remove();  // Clean up the map when the component is unmounted
  }, [points]);

  return <div ref={mapRef} style={{ width: '1024px', height: '512px', marginTop: '10px' }} />;
}

export default MapComponent;
