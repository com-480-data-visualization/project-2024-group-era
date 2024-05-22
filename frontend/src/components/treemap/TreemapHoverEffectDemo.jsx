import React from 'react';
import { data } from './data';
import { Treemap } from './Treemap';

const TreemapHoverEffectDemo = ({ width = 700, height = 400 }) => (
  <Treemap data={data} width={width} height={height} />
);

export default TreemapHoverEffectDemo;
