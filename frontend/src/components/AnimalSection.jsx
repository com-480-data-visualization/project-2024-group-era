import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const AnimalSection = () => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, // more data
  {name: 'Page B', uv: 300, pv: 2400, amt: 2400}, // more data
  {name: 'Page C', uv: 200, pv: 2400, amt: 2400}, // more data
  {name: 'Page D', uv: 278, pv: 2400, amt: 2400}, // more data
  {name: 'Page E', uv: 189, pv: 2400, amt: 2400}] // more data

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <p className="mt-10 text-lg text-center max-w-4xl">Animal Charts</p>
      </div>
      <div className="flex justify-center">  {/* Wrap the LineChart in a div with flex and justify-center */}
        <LineChart width={600} height={300} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
}

export default AnimalSection
