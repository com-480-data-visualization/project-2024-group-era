import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Label, ResponsiveContainer } from 'recharts';

const ThreatsSection = () => {
  const data = [
    { threat: 'Non-timber crops', counts: 819, color: '#f9f7d2' },
    { threat: 'Agricultural effluents', counts: 659, color: '#f3f0b8' },
    { threat: 'Dams & water management', counts: 634, color: '#e6e390' },
    { threat: 'Mining & quarrying', counts: 562, color: '#d9d06a' },
    { threat: 'Logging & wood harvesting', counts: 535, color: '#ccc944' }
  ];

  return (
    <div id="threats" className="pt-28">
      <h2 className="text-3xl font-semibold text-center mt-10">Threats to Endangered Species</h2>
      <div className="flex flex-col items-center">
        <p className="my-10 text-lg text-center max-w-4xl">
          Learn about the top five threats to endangered species and their counts. The data is based on the IUCN Red List of Threatened Species.
        </p>
        <div>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart layout="vertical" data={data} margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
              <CartesianGrid stroke="#333" strokeDasharray="5 5" />
              <XAxis type="number" stroke="#fff" tick={{ fontSize: 12 }}>
                <Label value="Count" angle={0} offset={-20} position="insideBottom" fill="#fff" />
              </XAxis>
              <YAxis type="category" dataKey="threat" stroke="#fff" tick={{ fontSize: 12 }} width={200}>
                <Label value="Threats" offset={15} position="insideLeft" angle={-90} fill="#fff" />
              </YAxis>
              <Tooltip wrapperStyle={{ backgroundColor: '#333', color: '#fff' }} />
              <Bar dataKey="counts" fill="#8884d8" label={{ position: 'insideRight' }}>
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
};

export default ThreatsSection;
