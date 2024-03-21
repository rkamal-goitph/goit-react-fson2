import React from 'react';
import { Inventory } from './Inventory/Inventory';
import { InventoryProvider } from 'context/InventoryContext';
const App = () => {
  return (
    <InventoryProvider>
      <Inventory />
    </InventoryProvider>
  );
};

export default App;
