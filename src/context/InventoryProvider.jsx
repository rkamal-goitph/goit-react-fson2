// InventoryContext.js
import React, { createContext, useState } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addItem = item => {
    setItems(prevItems => [...prevItems, item]);
  };

  const deleteItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateSearchTerm = term => {
    setSearchTerm(term);
  };

  return (
    <InventoryContext.Provider
      value={{ items, addItem, deleteItem, searchTerm, updateSearchTerm }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext;
