import React from 'react';
import { InventoryList } from 'components/InventoryList/InventoryList';
import { InventoryForm } from 'components/InventoryForm/InventoryForm';
import css from './Inventory.module.css';

export const Inventory = () => {
  return (
    <div className={css.app}>
      <h2>Inventory Manager</h2>
      <InventoryForm />
      <InventoryList />
    </div>
  );
};
