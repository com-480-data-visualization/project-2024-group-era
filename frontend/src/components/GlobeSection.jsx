import React from 'react'
import Globe from 'react-globe.gl'

const GlobeSection = () => {
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
            width={900}  // Width of the globe canvas
            height={900} // Height of the globe canvas
          />
      </div>
    </div>
  )
}

export default GlobeSection