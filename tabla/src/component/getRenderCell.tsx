import React from 'react';

interface Column<T> {
  id: keyof T | string; // Permitir 'string' como opción adicional
  label: string;
  renderCell?: (value: T[keyof T]) => React.ReactNode;
}

const defaultRenderCell = (value: any) => {
  return String(value);
};

const booleanRenderCell = (value: boolean) => {
  return value ? 'Yes' : 'No';
};

const dateRenderCell = (value: Date) => {
  return value.toLocaleDateString();
};

const numberRenderCell = (value: number) => {
  return value.toFixed(2);
};

const getRenderCell = <T,>(column: Column<T>): ((value: T[keyof T]) => React.ReactNode) => {
  const renderCell = column.renderCell;
  
  if (renderCell) {
    return renderCell;
  }

  const columnType = typeof column.id;

  switch (columnType) {
    case 'boolean':
      return booleanRenderCell as (value: T[keyof T]) => React.ReactNode;
    case 'number':
      return numberRenderCell as (value: T[keyof T]) => React.ReactNode;
    case 'object':
      if (column.id instanceof Date) {
        return dateRenderCell as (value: T[keyof T]) => React.ReactNode;
      }
      break;
    default:
      return defaultRenderCell;
  }

  // Si no se maneja el tipo de objeto específico, se utiliza la función de renderizado predeterminada
  return defaultRenderCell;
};

export default getRenderCell;
