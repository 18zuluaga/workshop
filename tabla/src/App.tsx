// App.tsx

import React from 'react';
import DataGrid from './component/datagrid';

interface RowData {
  id: number ;
  name: string;
  age: number;
  date: Date;
  mujer: boolean;
}

// Ajustamos la definición de las columnas para permitir renderCell opcionalmente
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'date', label: 'Date', renderCell: (value : RowData) => {
      if (value instanceof Date) {
        return value.toLocaleDateString();
      }
      return String(value);
    }
  },
  { id:'mujer', label: 'Es mujer' },
];

const rows: RowData[] = [
  { id: 1, name: 'John Doe', age: 25, date: new Date('2023-07-15'), mujer: true },
  { id: 2, name: 'Jane Smith', age: 30, date: new Date('2023-10-10'), mujer: true },
  { id: 3, name: 'Alice Johnson', age: 35, date: new Date('2023-05-20'), mujer: true },
  { id: 4, name: 'Michael Brown', age: 28, date: new Date('2023-09-01'), mujer: true },
  { id: 5, name: 'Emma Wilson', age: 32, date: new Date('2023-11-12'), mujer: true },
  { id: 6, name: 'Daniel Lee', age: 29, date: new Date('2023-03-25'), mujer: true },
  { id: 7, name: 'Olivia Martinez', age: 31, date: new Date('2023-08-04'), mujer: true },
  { id: 8, name: 'William Garcia', age: 26, date: new Date('2023-06-18'), mujer: true },
  { id: 9, name: 'Sophia Miller', age: 33, date: new Date('2023-04-29'), mujer: true },
  { id: 10, name: 'James Davis', age: 27, date: new Date('2023-12-07'), mujer: true },
  { id: 11, name: 'Ella Rodriguez', age: 34, date: new Date('2023-02-14'), mujer: true },
  { id: 12, name: 'Alexander Hernandez', age: 29, date: new Date('2023-10-25'), mujer: true },
  { id: 13, name: 'Ava Lopez', age: 31, date: new Date('2023-07-08'), mujer: true },
  { id: 14, name: 'Matthew Moore', age: 30, date: new Date('2023-05-16'), mujer: true },
  { id: 15, name: 'Isabella Clark', age: 28, date: new Date('2023-11-19'), mujer: true },
  { id: 16, name: 'Noah Perez', age: 32, date: new Date('2023-09-02'), mujer: true },
  { id: 17, name: 'Amelia Robinson', age: 27, date: new Date('2023-04-10'), mujer: true },
  { id: 18, name: 'Liam Hill', age: 35, date: new Date('2023-08-21'), mujer: true },
  { id: 19, name: 'Mia Walker', age: 26, date: new Date('2023-06-03'), mujer: true },
  { id: 20, name: 'Benjamin Young', age: 33, date: new Date('2023-12-14'), mujer: true },
  { id: 21, name: 'Charlotte King', age: 30, date: new Date('2023-02-27'), mujer: true },
  { id: 22, name: 'Lucas Scott', age: 31, date: new Date('2023-10-09'), mujer: true },
  { id: 23, name: 'Emily Green', age: 29, date: new Date('2023-07-22'), mujer: true },
  { id: 24, name: 'Ethan Hall', age: 34, date: new Date('2023-05-05'), mujer: true },
  { id: 25, name: 'Madison Baker', age: 28, date: new Date('2023-11-28'), mujer: true },
  { id: 26, name: 'Jacob Adams', age: 32, date: new Date('2023-09-10'), mujer: true },
  { id: 27, name: 'Abigail Campbell', age: 27, date: new Date('2023-04-17'), mujer: true },
  { id: 28, name: 'Logan Martinez', age: 35, date: new Date('2023-08-30'), mujer: true },
  { id: 29, name: 'Avery Carter', age: 25, date: new Date('2023-06-11'), mujer: true },
  { id: 30, name: 'Jackson Torres', age: 33, date: new Date('2023-12-22'), mujer: true },
  { id: 31, name: 'Sofia Murphy', age: 30, date: new Date('2023-03-04'), mujer: true },
  { id: 32, name: 'Lucas Diaz', age: 31, date: new Date('2023-10-17'), mujer: true },
  { id: 33, name: 'Victoria Rivera', age: 28, date: new Date('2023-07-01'), mujer: true },
  { id: 34, name: 'Gabriel Gray', age: 29, date: new Date('2023-05-14'), mujer: true },
  { id: 35, name: 'Zoe Price', age: 26, date: new Date('2023-11-25'), mujer: true },
];

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '80vw', margin: 'auto' }}>
      <DataGrid<RowData> columns={columns} rows={rows} />
    </div>
  );
};

export default App;
