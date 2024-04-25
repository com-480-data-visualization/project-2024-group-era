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
    <div id="conservation">
      <div className="flex flex-col items-center py-20 rounded-3xl bg-neutral-800">
        <h1 className="text-4xl font-bold">Do you know the conservation status of species?</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <p className="mx-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-10">
              <ResponsiveContainer height={400}>
                <BarChart data={data}>
                  <CartesianGrid stroke="#333" strokeDasharray="5 5" />
                  <XAxis dataKey="category" stroke="#fff" tick={{ fontSize: 12 }}>
                    <Label value="Conservation Status" offset={-5} position="insideBottom" fill="#fff" />
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
    </div>
  );
}

export default ConservationSection
