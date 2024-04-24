import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Label, ResponsiveContainer } from 'recharts';

const ConservationSection = () => {
  const data = [
    { category: 'Near Threatened', counts: 410, color: '#FFBA08' },
    { category: 'Vulnerable', counts: 502, color: '#F48C06' },
    { category: 'Endangered', counts: 579, color: '#E85D04' },
    { category: 'Critically Endangered', counts: 298, color: '#DC2F02' },
    { category: 'Extinct', counts: 9, color: '#9D0208' },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <p className="mt-10 text-lg text-center max-w-4xl">
          Conservation Status.
        </p>
        <div style={{ marginTop: '150px', width: '1024px', height: '400px' }}>
          <ResponsiveContainer width={1024} height={400} >
            <BarChart width={700} height={500} data={data}>
              <CartesianGrid stroke="#333" strokeDasharray="5 5" />
              <XAxis dataKey="category" stroke="#fff" tick={{ fontSize: 12 }}>
                <Label value="Conservation Status" offset={-10} position="insideBottom" fill="#fff" />
              </XAxis>
              <YAxis stroke="#fff" tick={{ fontSize: 12 }}>
                <Label value="Number of Species" angle={-90} offset={10} position="insideLeft" fill="#fff" />
              </YAxis>
              <Tooltip wrapperStyle={{ backgroundColor: '#333', color: '#fff' }} />
              <Bar dataKey="counts" fill="#8884d8" label={{ position: 'top' }}>
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ConservationSection
