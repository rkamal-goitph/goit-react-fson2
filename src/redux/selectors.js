import { createSelector } from '@reduxjs/toolkit';
const selectedItems = state => state.inventory.items;
const selectedFilter = state => state.filter;

export const selectFilteredItems = createSelector(
  [selectedItems, selectedFilter],
  (items, filter) => {
    const lowerCaseFilter = filter.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(lowerCaseFilter)
    );
  }
);
