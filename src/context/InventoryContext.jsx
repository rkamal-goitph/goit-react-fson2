import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const useInventory = () => useContext(InventoryContext);

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems(prevItems => [
      ...prevItems,
      { ...item, id: Date.now().toString() },
    ]);
  };

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <InventoryContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </InventoryContext.Provider>
  );
};
