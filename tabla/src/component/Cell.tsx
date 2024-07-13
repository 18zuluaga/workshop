// src/components/Cell.tsx

import React from 'react';

const Cell: React.FC<{ value: any }> = ({ value }) => {
  return <div style={{ flex: 1, padding: '10px' }}>{value}</div>;
};

export default Cell;

