import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Label, ResponsiveContainer } from 'recharts';

const ThreatsSection = () => {
  const data = [
    { threat: 'Non-timber crops', counts: 819, color: '#f9f7d2', description: 'Poses a significant risk due to the expansion of agriculture into natural habitats, threatening biodiversity and ecological balance.' },
    { threat: 'Agricultural effluents', counts: 659, color: '#f3f0b8', description: 'Arises from agricultural activities, such as runoff and pollution, adversely impacting water quality and aquatic ecosystems.' },
    { threat: 'Dams & water management', counts: 634, color: '#e6e390', description: 'Alters natural water flow, habitat availability, and disrupts aquatic ecosystems, affecting numerous species dependent on these habitats.' },
    { threat: 'Mining & quarrying', counts: 562, color: '#d9d06a', description: 'Leads to habitat destruction, soil erosion, and pollution, threatening the survival of various species and disrupting entire ecosystems.' },
    { threat: 'Logging & wood harvesting', counts: 535, color: '#ccc944', description: 'Results in deforestation, loss of habitat, and fragmentation, endangering countless species dependent on forest ecosystems for survival.' }
  ];


  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{label}</p>
          <p>Number of affected species: {payload[0].value}</p>
          <p className='description'>{payload[0].payload.description}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div id="threats">
      <div className="section-container">
        <h1 className="title">What is the top 5 threats to endangered Species?</h1>
        <p className='pt-10 text-justify px-20'>Today's wildlife is in peril, facing a variety of threats that challenge their survival. What is causing species endangerment? While some threats are natural, such as disease, the visualization below reveals that the primary culprits are human activities. You can hover over each bar in the chart to get a detailed explanation of each type of threat. Let's work together to help animals overcome these threats.</p>
          <div className='w-full px-20'>
              <ResponsiveContainer height={500}>
                <BarChart layout="vertical" data={data} margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
                  <CartesianGrid stroke="#333" strokeDasharray="5 5" />
                  <XAxis type="number" stroke="#fff" tick={{ fontSize: 12 }}>
                    <Label value="Number of species" angle={0} offset={-10} position="insideBottom" fill="#fff" />
                  </XAxis>
                  <YAxis type="category" dataKey="threat" stroke="#fff" tick={{ fontSize: 12 }} width={200}>
                    <Label value="Threats" offset={5} position="insideLeft" angle={-90} fill="#fff" />
                  </YAxis>
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="counts" fill="#8884d8" label={{ position: 'right' }}>
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
