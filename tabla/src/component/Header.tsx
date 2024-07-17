import React from 'react';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';

interface Column<T> {
  id: number | string;
  label: string;
  width: string;
  renderCell?: (value: T) => React.ReactNode;
}

interface HeaderProps<T> {
  columns: Column<T>[];
  onFilterChange: (columnId: number | string, value: string) => void;
  onSortChange: (columnId: number | string) => void;
  sortConfig: { columnId: number | string; direction: 'asc' | 'desc' } | null;
  columInMoment: Column<T> | null;
  setColumInMoment: (column: Column<T> | null) => void;
}

const Header = <T,>({ columns, onFilterChange, onSortChange, sortConfig, columInMoment, setColumInMoment }: HeaderProps<T>) => {
  const [modalFilter, setModalFilter] = React.useState(false);
  const [filterValues, setFilterValues] = React.useState<{ [key: number | string]: string }>({});

  const handleSort = (columnId: string | number) => {
    onSortChange(columnId);
  };

  const handleFilterChange = (columnId: number | string, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value)
    setFilterValues(prev => ({ ...prev, [columnId]: value }));
    onFilterChange(columnId, value);
  };

  const handleColumInMoment = (column: Column<T>) => {
    setColumInMoment(column);
  };

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
            cursor: 'pointer',
            position: 'relative',
            justifyContent: 'center',
          }}
          onClick={() => handleColumInMoment(column)}
        >
          <span style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
            {column.label}
            {columInMoment?.id === column.id ? (
              <span
                onClick={() => handleSort(column.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  padding: '5px',
                  transition: 'background-color 0.3s',
                }}
              >
                {sortConfig?.direction === 'asc' ? (
                  <NorthIcon
                    sx={{ fontSize: 20 }}
                    style={{
                      borderRadius: '50%',
                      padding: '5px',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  />
                ) : (
                  <SouthIcon
                    sx={{ fontSize: 20 }}
                    style={{
                      borderRadius: '50%',
                      padding: '5px',
                      transition: 'background-color 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  />
                )}
              </span>
            ) : null}
            {columInMoment?.id === column.id && (
              <FilterAltIcon
                sx={{ fontSize: 20 }}
                style={{
                  borderRadius: '50%',
                  padding: '5px',
                  transition: 'background-color 0.3s',
                }}
                onClick={() => setModalFilter(!modalFilter)}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              />
            )}
          </span>
          {modalFilter && columInMoment?.id === column.id && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 1,
                width: '100%',
                background: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                justifyContent: 'space-between',
              }}
            >
              <CloseIcon
                onClick={() => setModalFilter(!modalFilter)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '50%',
                  padding: '5px',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ddd')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              />
              <input
                type="text"
                value={filterValues[column.id] || ''}
                onChange={(event) => handleFilterChange(column.id, event)}
                placeholder={`Filtrar por ${column.label}`}
                style={{
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  width: '80%',
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
