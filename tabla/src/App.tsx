// App.tsx

import React from 'react';
import DataGrid from './component/datagrid';

interface RowData {
  id: number ;
  name: string;
  age: number;
  date: Date;
}

// Ajustamos la definición de las columnas para permitir renderCell opcionalmente
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'date', label: 'Date', renderCell: (value: string | number | Date) => {
      if (value instanceof Date) {
        return value.toLocaleDateString();
      }
      return String(value);
    }
  },
  { id: 'saludo', label: 'Saludo', renderCell: () => {
    return "Hola";
  }
},
];

const rows: RowData[] = [
  { id: 1, name: 'John Doe', age: 25, date: new Date('2023-07-15') },
  { id: 2, name: 'Jane Smith', age: 30, date: new Date('2023-10-10') },
  { id: 3, name: 'Alice Johnson', age: 35, date: new Date('2023-05-20') },
];

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '80vw', margin: 'auto' }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
};

export default App;
