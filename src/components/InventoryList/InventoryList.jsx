import React from 'react';
import css from './InventoryList.module.css'; // Ensure CSS module exists
import { useInventory } from 'context/InventoryContext';

export const InventoryList = () => {
  const { items, deleteItem } = useInventory();

  return (
    <ul className={css.list}>
      {items.map(item => (
        <li key={item.id} className={css.item}>
          <div>{item.name}</div>
          <button
            onClick={() => deleteItem(item.id)}
            className={css.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
