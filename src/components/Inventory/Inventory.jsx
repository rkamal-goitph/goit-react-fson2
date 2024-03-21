// InventoryApp.js
import React, { useContext } from 'react';
import InventoryContext from 'context/InventoryProvider';
import InventoryForm from 'components/InventoryForm/InventoryForm';
import InventoryList from 'components/InventoryList/InventoryList';
import css from './Inventory.module.css';

const Inventory = () => {
  const { items, searchTerm, updateSearchTerm } = useContext(InventoryContext);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={css.app}>
      <h2>Stocks Inventory Manager</h2>
      <InventoryForm />
      <input
        type="text"
        placeholder="Search Inventory"
        value={searchTerm}
        onChange={e => updateSearchTerm(e.target.value)} // Use updateSearchTerm to update searchTerm
        className={css.searchInput}
      />
      <InventoryList filteredItems={filteredItems} />{' '}
      {/* Pass filteredItems to InventoryList */}
    </div>
  );
};

export default Inventory;
