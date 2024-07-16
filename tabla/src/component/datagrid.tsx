import React from 'react';
import Header from './Header';
import Cell from './Cell';
import getRenderCell from './getRenderCell';
import Pagination from './Pagination';

interface Column<T> {
  id: number | string; 
  label: string;
  renderCell?: (value: T) => React.ReactNode;
}

interface DataGridProps<T> {
  columns: Column<T>[];
  rows: T[];
}

const DataGrid = <T,>({ columns, rows }: DataGridProps<T>) => {
  const [columnOrder, setColumnOrder] = React.useState<(number | string)[]>(columns.map(col => col.id));
  const [filters, setFilters] = React.useState<{ [key: string]: string }>({});
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [sortConfig, setSortConfig] = React.useState<{ columnId: string | number; direction: 'asc' | 'desc' } | null>(null);
  const [columInMoment, setColumInMoment] = React.useState<Column<T> | null>(null)
  const itemsPerPage = 10;

  React.useEffect(() => {
    setColumnOrder(columns.map(col => col.id));
  }, [columns]);

  const handleSortChange = (columnId: string | number) => {
    setSortConfig(prevState => {
        return {
          columnId,
          direction: prevState?.direction === 'asc' ? 'desc' : 'asc',
        };
    });
  };

  const handleFilterChange = (columnId: number | string, value: string) => {
    setFilters({
      ...filters,
      [String(columnId)]: value.trim().toLowerCase(),
    });
  };

  const filteredData = rows.filter(row =>
    columnOrder.every(columnId => {
      const cellValue = row[columnId as keyof T];
      const filterValue = filters[String(columnId)];
      if (!filterValue) return true;

      if (cellValue instanceof Date) {
        return cellValue.toLocaleDateString().toLowerCase().includes(filterValue);
      }

      if (typeof cellValue === 'string' || typeof cellValue === 'number' || typeof cellValue === 'boolean') {
        return cellValue.toString().toLowerCase().includes(filterValue);
      }

      return false;
    })
  );

  const sortedData = sortConfig
    ? filteredData.sort((a, b) => {
        const aValue = a[sortConfig.columnId as keyof T];
        const bValue = b[sortConfig.columnId as keyof T];

        if (aValue instanceof Date && bValue instanceof Date) {
          return sortConfig.direction === 'asc' ? aValue.getTime() - bValue.getTime() : bValue.getTime() - aValue.getTime();
        }

        if (typeof aValue === 'string' || typeof aValue === 'number' || typeof aValue === 'boolean') {
          return sortConfig.direction === 'asc' ? (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) : (bValue < aValue ? -1 : bValue > aValue ? 1 : 0);
        }

        return 0;
      })
    : filteredData;

  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', marginTop: '20px' }}>
      <Header
        columns={columns}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        sortConfig={sortConfig}
        columInMoment={columInMoment}
        setColumInMoment={setColumInMoment}
      />

      {paginatedData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'flex',
            borderTop: '1px solid #ddd',
            backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : 'transparent'
          }}
        >
          {columnOrder.map((columnId) => {
            const column = columns.find(col => col.id === columnId);
            if (!column) return null;

            const renderCell = column.renderCell || getRenderCell<T>(column);

            return (
              <Cell
                key={String(columnId)}
                value={row[columnId as keyof T]}
                renderCell={renderCell}
              />
            );
          })}
        </div>
      ))}

      <Pagination currentPage={currentPage} totalPages={totalPages} onPreviousPage={handlePreviousPage} onNextPage={handleNextPage}  />

      <div style={{ marginTop: '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          onClick={handlePreviousPage}
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
          onClick={handleNextPage}
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
    </div>
  );
};

export default DataGrid;
