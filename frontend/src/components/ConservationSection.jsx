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

  const getDescriptionOfCategory = (label) => {
    if (label === 'Near Threatened') {
      return 'Species that may be considered threatened with extinction in the near future.';
    }
    if (label === 'Vulnerable') {
      return 'Species facing a high risk of extinction in the wild.';
    }
    if (label === 'Endangered') {
      return 'Species at risk of extinction due to factors such as habitat loss, hunting, or disease.';
    }
    if (label === 'Critically Endangered') {
      return 'Species facing an extremely high risk of extinction in the immediate future.';
    }
    if (label === 'Extinct') {
      return 'Species that no longer exist in the wild or in captivity.';
    }
      return '';
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Status: ${label}`}</p>
          <p>Number of species: {payload[0].value}</p>
          <p>{getDescriptionOfCategory(label)}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div id="conservation" className="section-container">
      <h1 className="title">Do you know the conservation status of species?</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-20">
        <div className="w-full lg:w-1/2">
          <p className="mx-20 text-justify">
            Every year the number of species that are threatened with extinction increases. The International Union for Conservation of Nature (IUCN) has developed a system to classify the conservation status of species, where each category represents the risk of extinction. The categories are: Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered, Extinct in the Wild, and Extinct. The graph presented in this section shows the number of species in each of these categories.
          </p>
        </div>
        <div className="chart-container">
            <ResponsiveContainer height={400}>
              <BarChart data={data}>
                <CartesianGrid stroke="#333" strokeDasharray="5 5" />
                <XAxis dataKey="category" stroke="#fff" tick={{ fontSize: 12 }}>
                  <Label value="Conservation Status" offset={-5} position="insideBottom" fill="#fff" />
                </XAxis>
                <YAxis stroke="#fff" tick={{ fontSize: 12 }}>
                  <Label value="Number of Species" angle={-90} offset={10} position="insideLeft" fill="#fff" />
                </YAxis>
                <Tooltip content={<CustomTooltip />} />
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
