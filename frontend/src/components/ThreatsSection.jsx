import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Label, ResponsiveContainer } from 'recharts';

const ThreatsSection = () => {
  const data = [
    { threat: 'Non-timber crops', counts: 819, color: '#ccd5ae' },
    { threat: 'Agricultural effluents', counts: 659, color: '#e9edc9' },
    { threat: 'Dams & water management', counts: 634, color: '#fefae0' },
    { threat: 'Mining & quarrying', counts: 562, color: '#faedcd' },
    { threat: 'Logging & wood harvesting', counts: 535, color: '#d4a373' }
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <p className="mt-10 text-lg text-center max-w-4xl">
          Threats: Learn about the dangers that threaten the survival of endangered species.
        </p>
        <div style={{ marginTop: '150px', width: '65%', height: '500px' }}>
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
