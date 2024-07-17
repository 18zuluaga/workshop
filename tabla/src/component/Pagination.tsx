import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPreviousPage, onNextPage }) => {
  return (
    <div style={{ textAlign: 'center', display: 'flex',justifyContent:'end', alignItems:'center', height: '5vh' }}>
      <KeyboardArrowLeftIcon onClick={onPreviousPage}/>
      <span style={{ fontSize: '16px', margin: '0 10px', fontWeight: 'bold', display: 'flex', alignItems: "center" }}>{currentPage}<span style={{fontSize: "25px", fontWeight: '100'}}>/</span>{totalPages}</span>
      <KeyboardArrowRightIcon onClick={onNextPage}/>
    </div>
  );
};

export default Pagination;
