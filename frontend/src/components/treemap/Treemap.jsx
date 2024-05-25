import React, { useMemo, useRef, useEffect, useState } from 'react';
import { hierarchy, treemap, scaleOrdinal } from 'd3';
import './treemap.css';

const categories = [
  { name: "Wetlands", color: "#76c7c0" },
  { name: "Forest", color: "#a4c969" },
  { name: "Marine Deep Benthic", color: "#6689c6" },
  { name: "Grassland", color: "#e85252" },
  { name: "Savanna", color: "#e0ac2b" }
];

const Treemap = ({ data, height }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

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
    .range(categories.map(cat => cat.color)), [firstLevelGroups]);

  const root = useMemo(() => {
    const treeGenerator = treemap().size([width, height]).padding(5);
    return treeGenerator(hierarchyData);
  }, [hierarchyData, width, height]);

  const allShapes = root.leaves().map((leaf, i) => {
    const parentName = leaf.parent?.data.name;
    return (
      <g
        key={i}
        className={`rectangle ${hoveredItem?.name === leaf.data.name ? 'hovered' : ''}`}
        onMouseEnter={() => setHoveredItem({ name: leaf.data.name, value: leaf.data.value, category: parentName })}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <rect
          x={leaf.x0}
          y={leaf.y0}
          width={leaf.x1 - leaf.x0}
          height={leaf.y1 - leaf.y0}
          rx={15}
          ry={15}
          stroke="transparent"
          fill={colorScale(parentName)}
          className="opacity-80 hover:opacity-100"
        />
        {leaf.data.value >= 35 && (
          <text
            x={leaf.x0 + 10}
            y={leaf.y0 + 10}
            fontSize={14}
            fontFamily="Poppins"
            textAnchor="start"
            alignmentBaseline="hanging"
            fill="white"
            className="font-light"
          >
            {leaf.data.value}
          </text>
        )}
      </g>
    );
  });

  return (
    <div ref={containerRef} className="treemap-container w-full">
      <div className="legend">
        {categories.map(cat => (
          <div key={cat.name} className={`legend-item ${hoveredItem?.category === cat.name ? 'hovered' : ''}`}>
            <span className="color-circle" style={{ backgroundColor: cat.color }}></span>
            <span className="category-name">{cat.name}</span>
          </div>
        ))}
      </div>
      <div className="hover-info">
        <p>
          {hoveredItem ? (
            <>
              <span style={{ color: 'cyan' }}>Habitat</span>: {hoveredItem.name}{' '}-
              <span style={{ color: 'cyan' }}> Count of animals</span>: {hoveredItem.value}
            </>
          ) : (
            'Hover over a square to see details'
          )}
        </p>
      </div>
      <svg width={width} height={height} className="container">
        {allShapes}
      </svg>
    </div>
  );
};

export default Treemap;
