import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MeasuresSection = () => {
    // Sample data
    const data = [
        { measure: 'Protected Area Management', counts: 992 },
        { measure: 'Research and Monitoring', counts: 1317 },
        { measure: 'Legislation and Regulatory', counts: 580 },
        { measure: 'Species-Specific Actions', counts: 619 },
        { measure: 'Public Awareness', counts: 381 },
        { measure: 'Threat Management', counts: 432 },
        { measure: 'Ex-Situ Conservation', counts: 66 },
        { measure: 'Unknown and No Measures', counts: 280 }
    ];

    // Sort data in descending order based on the counts
    data.sort((a, b) => b.counts - a.counts);

    return (
        <div className="min-h-screen">
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <p className="mt-10 text-lg text-center max-w-4xl">
            Conservation Measures: Discover the conservation measures taken to protect endangered species.
            </p>
            <div style={{ marginTop: '150px', width: '1024px', height: '400px' }}>
                <ResponsiveContainer width={1024} height={400} >
                    <BarChart
                        layout="vertical" // Sets the bar chart to be horizontal
                        data={data}
                        margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" /> 
                        <YAxis dataKey="measure" type="category" width={150} /> 
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="counts" fill="#8884d8" barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        </div>
    );
};

export default MeasuresSection;
