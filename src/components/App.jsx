import React, { useState } from 'react';
import { Inventory } from './Inventory/Inventory';

const App = () => {
  const [showInventory, setShowInventory] = useState(true);

  const toggleInventory = () => setShowInventory(!showInventory);

  return (
    <div style={{ backgroundColor: 'lightBlue' }}>
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: 'crimson',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'block',
          margin: '0 auto',
          transition: 'transform 0.2s, background-color 0.3s',
        }}
        onClick={toggleInventory}
      >
        Toggle Inventory
      </button>
      {showInventory ? <Inventory /> : null}
    </div>
  );
};

export default App;
