// src/components/Header.tsx

import React from 'react';

const Header: React.FC<{ columns: any[], columnOrder: string[], onColumnOrderChange: (newOrder: string[]) => void, onFilterChange: (columnId: string, value: string) => void }> = ({ columns, columnOrder, onColumnOrderChange, onFilterChange }) => {

  const handleChangeOrder = (newOrder: string[]) => {
    onColumnOrderChange(newOrder);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>, columnId: string) => {
    onFilterChange(columnId, event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
      {columnOrder.map((columnId, index) => {
        const column = columns.find(col => col.id === columnId);
        if (!column) return null;
        return (
          <div key={index} style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            {column.label}
            <input
              type="text"
              placeholder={`Filter ${column.label}`}
              onChange={(event) => handleFilterChange(event, columnId)}
              style={{ marginLeft: '10px', padding: '6px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
            />
            <button onClick={() => handleChangeOrder([...columnOrder.slice(0, index), ...columnOrder.slice(index + 1), columnId])} style={{ marginLeft: '10px', padding: '6px 10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', cursor: 'pointer', border: 'none', fontSize: '14px' }}>
              Move Left
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
