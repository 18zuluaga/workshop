import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
  return (
    <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        onClick={onPreviousPage}
        style={{
          padding: '6px 12px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
          marginRight: '5px'
        }}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span style={{ fontSize: '14px', margin: '0 10px' }}>{currentPage}</span>
      <button
        onClick={onNextPage}
        style={{
          padding: '6px 12px',
          fontSize: '14px',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
          marginLeft: '5px'
        }}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
