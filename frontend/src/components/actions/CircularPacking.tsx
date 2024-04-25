import * as d3 from "d3";
import { Tree } from "./ActionsData";
import React from "react";

type CircularPackingProps = {
  width: number;
  height: number;
  data: Tree;
  legendWidth: number;
};

const colors = [
  "#e0ac2b",
  "#6689c6",
  "#a4c969",
  "#e85252",
  "#9a6fb0",
  "#a53253",
  "#7f7f7f",
];

export const CircularPacking = ({
  width,
  height,
  data,
  legendWidth
}: CircularPackingProps) => {
    const hierarchy = d3.hierarchy(data)
                        .sum(d => d.value)
                        .sort((a, b) => b.value - a.value);

    const packGenerator = d3.pack<Tree>().size([width, height]).padding(4);
    const root = packGenerator(hierarchy);

    const colorScale = d3.scaleOrdinal()
                         .domain(hierarchy.children?.map(child => child.data.name) || [])
                         .range(colors);

    const valueExtent = d3.extent(root.leaves(), leaf => leaf.value) as [number, number];
    const opacityScale = d3.scaleLinear()
                           .domain(valueExtent)
                           .range([0.2, 1]);

    const createLegendItems = (nodes) => {
        return nodes.map((node, index) => (
            <g key={node.data.name} transform={`translate(0, ${index * 20})`}>
                <rect width="18" height="18" fill={node.children ? colorScale(node.data.name) : colorScale(node.parent?.data.name)} fillOpacity={node.children ? 0.1 : opacityScale(node.value)}/>
                <text x="24" y="9" dy="0.35em" fill="white">{node.data.name}</text>
            </g>
        ));
    };

    const legends = createLegendItems(hierarchy.descendants().filter(d => d.depth === 1 || d.depth === root.height));

    return (
        <svg width={width + legendWidth} height={height} style={{ display: "inline-block" }}>
            <g transform={`translate(0, 0)`}>
                {root.descendants().filter(node => node.depth > 0).map(node => (  // Filter out the root node
                    <g key={node.data.name} transform={`translate(${node.x}, ${node.y})`}>
                        <circle
                            r={node.r}
                            stroke={colorScale(node.parent?.data.name)}
                            strokeWidth={1}
                            strokeOpacity={0.3}
                            fill={node.children ? colorScale(node.data.name) : colorScale(node.parent?.data.name)}
                            fillOpacity={node.children ? 0.1 : opacityScale(node.value)}
                        />
                        {!node.children && ( // Display the value of the node if it is a leaf node
                            <text
                                fontSize="13"
                                fontWeight="400"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="white"
                            >
                                {node.value}
                            </text>
                        )}
                    </g>
                ))}
            </g>
            <g transform={`translate(${width - 50}, ${height / 4})`}>
                {legends}
            </g>
        </svg>
    );
};