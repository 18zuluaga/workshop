import React from 'react';

interface CellProps {
  value: any;
  renderCell: (value: any) => React.ReactNode;
  width: string;
}

const Cell: React.FC<CellProps> = ({ value, renderCell, width }) => {
  return (
    <div style={{ width: width,padding: '10px', textAlign: 'center'}}>
      {renderCell(value)}
    </div>
  );
};

export default Cell;
