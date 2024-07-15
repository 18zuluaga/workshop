import React from 'react';

interface Column<T> {
  id: keyof T | string; // Permitir 'string' como opción adicional
  label: string;
}

interface HeaderProps<T> {
  columns: Column<T>[];
  onFilterChange: (columnId: keyof T | string, value: string) => void; // Ajustar aquí también si es necesario
  onSortChange: (columnId: keyof T) => void;
  sortConfig: { columnId: keyof T; direction: 'asc' | 'desc' } | null;
  columInMoment: Column<T> | null;
  setColumInMoment: (column: Column<T> | null) => void;
}

const Header = <T,>({ columns, onFilterChange, onSortChange, sortConfig, columInMoment, setColumInMoment }: HeaderProps<T>) => {
  const handleSort = (columnId: keyof T) => {
    onSortChange(columnId);
  };

  const handleFilterChange = (columnId: keyof T | string, event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(columnId, event.target.value);
  };

  const handleColumInMoment = (column: Column<T>)=>{
    setColumInMoment(column);
  }

  return (
    <div style={{ display: 'flex', borderBottom: '1px solid #ddd', backgroundColor: '#f1f1f1' }}>
      {columns.map(column => (
        <div
          key={String(column.id)}
          style={{
            flex: 1,
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={() => handleColumInMoment(column)}
        >
          <span style={{ marginRight: '10px' }}>
            {column.label}
            {columInMoment!.id === column.id ?(
              <span onClick={() => handleSort(column.id as keyof T)}>{sortConfig?.direction === 'asc' ? ' 🔼' : ' 🔽'}</span>
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
