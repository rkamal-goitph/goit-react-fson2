// InventoryListItem.js
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import InventoryContext from 'context/InventoryProvider';
import css from './InventoryListItem.module.css';

const InventoryListItem = ({ item }) => {
  const { deleteItem } = useContext(InventoryContext); // Consume the context

  return (
    <li key={item.id} className={css.item}>
      <div>
        {item.name}: {item.quantity}
      </div>
      <button onClick={() => deleteItem(item.id)} className={css.deleteButton}>
        Delete
      </button>
    </li>
  );
};

InventoryListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default InventoryListItem;
