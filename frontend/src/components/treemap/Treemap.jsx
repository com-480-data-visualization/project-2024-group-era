import React, { useMemo, useRef, useEffect, useState } from 'react';
import { hierarchy, treemap, scaleOrdinal } from 'd3';
import './treemap.css';

const colors = [
  "#e0ac2b",
  "#6689c6",
  "#a4c969",
  "#e85252",
  "#9a6fb0",
  "#a53253",
  "#7f7f7f",
];

const Treemap = ({ data, height }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hierarchyData = useMemo(() => {
    return hierarchy(data).sum((d) => d.value);
  }, [data]);

  const firstLevelGroups = hierarchyData?.children?.map((child) => child.data.name);
  const colorScale = useMemo(() => scaleOrdinal()
    .domain(firstLevelGroups || [])
    .range(colors), [firstLevelGroups]);

  const root = useMemo(() => {
    const treeGenerator = treemap().size([width, height]).padding(5);
    return treeGenerator(hierarchyData);
  }, [hierarchyData, width, height]);

  const allShapes = root.leaves().map((leaf, i) => {
    const parentName = leaf.parent?.data.name;
    return (
      <g key={i} className="rectangle">
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          rx={10}
          ry={10}
          stroke="transparent"
          fill={colorScale(parentName)}
          className="opacity-80 hover:opacity-100"
        />
        <text
          x={leaf.x0 + 5}
          y={leaf.y0 + 5}
          fontSize={14}
          fontFamily="Poppins"
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-bold"
        >
          {leaf.data.name}
        </text>
        <text
          x={leaf.x0 + 5}
          y={leaf.y0 + 18}
          fontSize={14}
          fontFamily="Poppins"
          textAnchor="start"
          alignmentBaseline="hanging"
          fill="white"
          className="font-light"
        >
          {leaf.data.value}
        </text>
      </g>
    );
  });

  return (
    <div ref={containerRef} className="treemap-container w-full">
      <svg width={width} height={height} className="container">
        {allShapes}
      </svg>
    </div>
  );
};

export default Treemap;
