import React from 'react';

interface Column<T> {
  id: keyof T;
  label: string;
}

interface HeaderProps<T> {
  columns: Column<T>[];
  onFilterChange: (columnId: keyof T, value: string) => void;
  onSortChange: (columnId: keyof T) => void;
  sortConfig: { columnId: keyof T; direction: 'asc' | 'desc' } | null;
}

const Header = <T,>({
  columns,
  onFilterChange,
  onSortChange,
  sortConfig,
}: HeaderProps<T>) => {

  const handleSort = (columnId: keyof T) => {
    onSortChange(columnId);
  };

  const handleFilterChange = (columnId: keyof T, event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(columnId, event.target.value);
  };

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
          onClick={() => handleSort(column.id)}
        >
          <span style={{ marginRight: '10px' }}>
            {column.label}
            {sortConfig && sortConfig.columnId === column.id && (
              <span>{sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽'}</span>
            )}
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
