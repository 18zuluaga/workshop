import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
  return (
    <div style={{ textAlign: 'center', display: 'flex',justifyContent:'end', alignItems:'center', width: '100%', height: '5vh' }}>
      <button
        onClick={onPreviousPage}
        style={{
          padding: '6px 12px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
        }}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span style={{ fontSize: '14px', margin: '0 10px', fontWeight: 'bold', }}>{currentPage}</span>
      <button
        onClick={onNextPage}
        style={{
          padding: '6px 12px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '4px',
          border: 'none',
          marginRight: '15px'
        }}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
