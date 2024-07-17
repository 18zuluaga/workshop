import React from 'react';
import SelectAutoWidth from './Select';

interface itemsPerPageProps {
    itemsPerPage: number;
    setItemsPerPage: (itemsPerPage: number) => void 
}

const ItemsPerPage: React.FC<itemsPerPageProps> = ({  itemsPerPage, setItemsPerPage }) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', height: "100%", gap: '5px'}}>   
            Filas por página:
            <SelectAutoWidth itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage}/>
    </div>
  );
};

export default ItemsPerPage;
