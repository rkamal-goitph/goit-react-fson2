// InventoryList.js
import React from 'react';
import InventoryListItem from 'components/InventoryListItem/InventoryListItem';
import PropTypes from 'prop-types';
import css from './InventoryList.module.css';

const InventoryList = ({ filteredItems }) => {
  return (
    <ul className={css.list}>
      {filteredItems.map(item => (
        <InventoryListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

InventoryList.propTypes = {
  filteredItems: PropTypes.array.isRequired,
};

export default InventoryList;
