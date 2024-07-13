// src/App.tsx

import React from 'react';
import DataGrid from './component/datagrid';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  // Añade más columnas según tus necesidades
];

const rows = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
  { id: 3, name: 'Michael Johnson', age: 40 },
  { id: 4, name: 'Emily Davis', age: 28 },
  { id: 5, name: 'Daniel Brown', age: 35 },
  { id: 6, name: 'Sophia Miller', age: 22 },
  { id: 7, name: 'Matthew Wilson', age: 33 },
  { id: 8, name: 'Olivia Moore', age: 27 },
  { id: 9, name: 'William Taylor', age: 45 },
  { id: 11, name: 'Emma Anderson', age: 31 },
  { id: 12, name: 'Emma Anderson', age: 31 },
  { id: 13, name: 'Emma Anderson', age: 31 },
  { id: 14, name: 'Emma Anderson', age: 31 },
  { id: 15, name: 'Emma Anderson', age: 31 },
  { id: 16, name: 'Emma Anderson', age: 31 },
  { id: 17, name: 'Emma Anderson', age: 31 },
  { id: 18, name: 'Emma Anderson', age: 31 },
  { id: 19, name: 'Emma Anderson', age: 31 },
  { id: 20, name: 'Emma Anderson', age: 31 },
  { id: 21, name: 'Emma Anderson', age: 31 },
  { id: 22, name: 'Emma Anderson', age: 31 },
  { id: 23, name: 'Emma Anderson', age: 31 },
  { id: 24, name: 'Emma Anderson', age: 31 },
  { id: 25, name: 'Emma Anderson', age: 31 },
  { id: 26, name: 'Emma Anderson', age: 31 },
  { id: 27, name: 'Emma Anderson', age: 31 },
  { id: 28, name: 'Emma Anderson', age: 31 },
  { id: 29, name: 'Emma Anderson', age: 31 },
  { id: 30, name: 'Emma Anderson', age: 31 },
  { id: 31, name: 'Emma Anderson', age: 31 },
  { id: 32, name: 'Emma Anderson', age: 31 },
  // Añade más filas según tus datos
];

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h1>DataGrid Example</h1>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default App;

