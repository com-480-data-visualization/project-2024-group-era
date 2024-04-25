import * as d3 from "d3";
import { Tree } from "./MeasuresData";
import React from "react";

type CircularPackingProps = {
  width: number;
  height: number;
  data: Tree;
};

const MARGIN = 3;

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
}: CircularPackingProps) => {
    const hierarchy = d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value! - a.value!);

    const packGenerator = d3.pack<Tree>().size([width, height]).padding(4);
    const root = packGenerator(hierarchy);

    // List of item of level 1 (just under root) & related color scale
    const firstLevelGroups = hierarchy?.children?.map((child) => child.data.name);
    var colorScale = d3
        .scaleOrdinal<string>()
        .domain(firstLevelGroups || [])
        .range(colors);

    // Mapping the smallest value to 0.2 opacity and the largest to 1
    const leaves = root.leaves();
    const valueExtent = d3.extent(leaves, leaf => leaf.value) as [number, number];
    const opacityScale = d3.scaleLinear()
                           .domain(valueExtent)
                           .range([0.2, 1]); 

    // Circles for level 1 of the hierarchy
    const allLevel1Circles = root
        .descendants()
        .filter((node) => node.depth === 1)
        .map((node) => {
        const parentName = node.data.name;

        return (
            <g key={node.data.name}>
            <circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                stroke={colorScale(parentName)}
                strokeWidth={1}
                strokeOpacity={0.3}
                fill={colorScale(parentName)}
                fillOpacity={0.1}
            />
            </g>
        );
        });

    // Circles for level 2 = leaves
    const allLeafCircles = root.leaves().map((leaf) => {
        const parentName = leaf.parent?.data.name;

        if (!parentName) {
        return null;
        }

        return (
        <g key={leaf.data.name}>
            <circle
                cx={leaf.x}
                cy={leaf.y}
                r={leaf.r}
                stroke={colorScale(parentName)}
                strokeWidth={2}
                fill={colorScale(parentName)}
                fillOpacity={opacityScale(leaf.value)}
            />

            <text
                key={leaf.data.name}
                x={leaf.x}
                y={leaf.y}
                fontSize={13}
                fontWeight={0.4}
                dominant-baseline="middle"
                text-anchor="middle"
            >
                {leaf.data.value}
            </text>
        </g>
        );
    });

    // Function to create legends based on nodes
    const createLegends = (nodes) => {
        return nodes.map((node, index) => {
            const parentName = node.parent?.data.name;
            const isLeaf = !node.children;
            return (
                <g key={node.data.name} transform={`translate(0, ${index * 20})`}>
                <rect width="18" height="18" fill={colorScale(isLeaf ? parentName : node.data.name)} fillOpacity={isLeaf ? opacityScale(node.value) : 0.1}/>
                <text x="24" y="9" dy="0.35em" fill="white">{node.data.name}</text>
                </g>
            );
        });
    };

    // Calculate the total width including legends
    const legendWidth = 200; // adjust as needed for text length
    const totalWidth = width + legendWidth;

    // Generate the legend data
    // Assuming the legends are for the first level nodes and leaves
    const firstLevelNodesAndLeaves = root.descendants().filter(d => d.depth === 1 || d.depth === root.height);

    const legends = createLegends(firstLevelNodesAndLeaves);

    return (
        <svg width={3 * width} height={height} style={{ display: "inline-block" }}>
            <g transform={`translate(${legendWidth}, 0)`}>
                {allLevel1Circles}
                {allLeafCircles}
            </g>
            <g transform={`translate(${width + 100}, ${height / 4})`}>
                {legends}
            </g>
        </svg>
    );
};
