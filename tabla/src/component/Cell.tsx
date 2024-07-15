import React from 'react';

interface CellProps {
  value: any;
  renderCell: (value: any) => React.ReactNode;
}

const Cell: React.FC<CellProps> = ({ value, renderCell }) => {
  return (
    <div style={{ flex: 1, padding: '10px', borderRight: '1px solid #ddd' }}>
      {renderCell(value)}
    </div>
  );
};

export default Cell;
