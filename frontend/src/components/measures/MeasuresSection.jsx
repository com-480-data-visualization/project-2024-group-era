import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MeasuresSection = () => {
    const data = [
        { 
            group: "Policy and Regulation",
            measures: [
            { measure: 'Legislation and Regulatory', counts: 580 },
            { measure: 'Protected Area Management', counts: 992 }
            ]
        },
        { 
            group: "Research and Active Management",
            measures: [
            { measure: 'Research and Monitoring', counts: 1317 },
            { measure: 'Species-Specific Actions', counts: 619 },
            { measure: 'Threat Management', counts: 432 }
            ]
        },
        { 
            group: "Community and Supportive Actions",
            measures: [
            { measure: 'Public Awareness', counts: 381 },
            { measure: 'Ex-Situ Conservation', counts: 66 }
            ]
        },
        { 
            group: "Others",
            measures: [
            { measure: 'Unknown and No Measures', counts: 280 }
            ]
        }
    ];

    const chartRef = useRef(null);

    useEffect(() => {
        console.log("Rendering MeasuresSection with data:", data);

        if (!data || data.length === 0) {
            console.error("No data available for MeasuresSection");
            return;
        }

        const svg = d3.select(chartRef.current);
        const width = 800;
        const height = 600;

        // Clear the SVG to avoid overlay issues
        svg.selectAll("*").remove();

        // Set up the color scale
        const color = d3.scaleLinear()
            .domain([0, 2])
            .range(["#006400", "#90ee90"]); // Dark green to light green

        // Prepare the data for hierarchy
        const hierarchyData = {
            name: "root",
            children: data.map(group => ({
                name: group.group,
                children: group.measures.map(measure => ({
                    name: measure.measure,
                    value: measure.counts
                }))
            }))
        };

        // Create hierarchy and pack layout
        const root = d3.hierarchy(hierarchyData)
            .sum(d => d.value)  // Make sure to use 'value' to compute the node size
            .sort((a, b) => b.value - a.value);

        const pack = d3.pack()
            .size([width, height])
            .padding(3);

        const nodes = pack(root).descendants();

        const node = svg.selectAll("g")
            .data(nodes)
            .enter().append("g")
            .attr("transform", d => `translate(${d.x}, ${d.y})`);

        node.append("circle")
            .attr("r", d => d.r)
            .attr("fill", d => d.depth === 0 ? "none" : color(d.depth));

        node.append("text")
            .attr("dy", "0.3em")
            .attr("text-anchor", "middle")
            .text(d => `${d.data.name} : ${d.data.value}`)
            .style("fill", "#fff")
            .style("font-size", d => `${10 - d.depth}px`);

    }, []);

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <p className="mt-10 text-lg text-center max-w-4xl">
                    Conservation Measures: Discover the conservation measures taken to protect endangered species.
                </p>
                <svg ref={chartRef} width={800} height={600}></svg>
            </div>
        </div>
    );
};

export default MeasuresSection;