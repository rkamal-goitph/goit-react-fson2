import React, { useState } from 'react';
import { useInventory } from 'context/InventoryContext';
import css from './InventoryForm.module.css'; // Ensure CSS module exists

export const InventoryForm = () => {
  const [name, setName] = useState('');
  const { addItem } = useInventory();

  const handleFormSubmit = event => {
    event.preventDefault();
    addItem({ name }); // No need to handle ID here, it's set in addItem
    setName('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className={css.input}
      />
      <button type="submit" className={css.addButton}>
        Add Item
      </button>
    </form>
  );
};
