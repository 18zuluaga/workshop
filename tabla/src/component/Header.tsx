import React from 'react';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';

interface Column<T> {
  id: number | string; 
  label: string;
  width: string;
  renderCell?: (value: T) => React.ReactNode;
}

interface HeaderProps<T> {
  columns: Column<T>[];
  onFilterChange: (columnId: number | string, value: string) => void; // Ajustar aquí también si es necesario
  onSortChange: (columnId: number | string) => void;
  sortConfig: { columnId: number | string; direction: 'asc' | 'desc' } | null;
  columInMoment: Column<T> | null;
  setColumInMoment: (column: Column<T> | null) => void;
}

const Header = <T,>({ columns, onFilterChange, onSortChange, sortConfig, columInMoment, setColumInMoment }: HeaderProps<T>) => {
  const handleSort = (columnId: string | number) => {
    onSortChange(columnId);
  };

  const handleFilterChange = (columnId: number | string, event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(columnId, event.target.value);
  };

  const handleColumInMoment = (column: Column<T>)=>{
    setColumInMoment(column);
  }

  return (
    <div style={{ display: 'flex', borderBottom: '2px solid #ddd', backgroundColor: '#f1f1f1', height: '8vh' }}>
      {columns.map(column => (
        <div
          key={String(column.id)}
          style={{
            width: column.width,
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={() => handleColumInMoment(column)}
        >
          <span style={{ marginRight: '10px', display: 'flex', alignItems:'center' }}>
            {column.label}
            {columInMoment?.id === column.id ?(
              <span onClick={() => handleSort(column.id )}>{sortConfig?.direction === 'asc' ? <NorthIcon sx={{ fontSize: 20 }}/> : <SouthIcon  sx={{ fontSize: 20 }}/>}</span>
            ): null}
          </span>
          <input
            type="text"
            placeholder={`Filter ${column.label}`}
            onChange={(event) => handleFilterChange(column.id, event)}
            style={{ flex: 1 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Header;
