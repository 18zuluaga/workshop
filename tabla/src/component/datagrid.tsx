// src/components/DataGrid.tsx

import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cell from './Cell';

const DataGrid: React.FC<{ columns: any[], rows: any[] }> = ({ columns, rows }) => {
  const [columnOrder, setColumnOrder] = useState(columns.map(col => col.id));
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setColumnOrder(columns.map(col => col.id));
  }, [columns]);

  const handleColumnOrderChange = (newOrder: string[]) => {
    setColumnOrder(newOrder);
  };

  const handleFilterChange = (columnId: string, value: string) => {
    setFilters({
      ...filters,
      [columnId]: value.trim().toLowerCase(),
    });
  };

  const filteredData = rows.filter(row =>
    columnOrder.every(columnId =>
      filters[columnId]
        ? row[columnId].toString().toLowerCase().includes(filters[columnId])
        : true
    )
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', marginTop: '20px' }}>
      <Header
        columns={columns}
        columnOrder={columnOrder}
        onColumnOrderChange={handleColumnOrderChange}
        onFilterChange={handleFilterChange}
      />

      {paginatedData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', borderTop: '1px solid #ddd', backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : 'transparent' }}>
          {columnOrder.map((columnId) => (
            <Cell key={columnId} value={row[columnId]} />
          ))}
        </div>
      ))}

      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
          <button key={page} onClick={() => handleChangePage(page)} style={{ marginLeft: '5px', padding: '6px 12px', fontSize: '14px', cursor: 'pointer', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none' }}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataGrid;
