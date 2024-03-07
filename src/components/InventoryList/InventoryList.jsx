// InventoryList.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './InventoryList.module.css';

export class InventoryList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        isInStock: PropTypes.bool.isRequired, // Added propType for isInStock
        condition: PropTypes.string.isRequired, // Added propType for condition
        category: PropTypes.string.isRequired, // Added propType for category
      })
    ).isRequired,
    deleteItem: PropTypes.func.isRequired,
  };

  render() {
    const { items, deleteItem } = this.props;
    return (
      <ul className={css.list}>
        {items.map(item => (
          <li key={item.id} className={css.item}>
            <div>
              {item.name}: {item.quantity}
            </div>
            <div>In Stock: {item.isInStock ? 'Yes' : 'No'}</div>
            <div>
              Condition:{' '}
              {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
            </div>{' '}
            {/* Capitalize the first letter */}
            <div>
              Category:{' '}
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </div>{' '}
            {/* Capitalize the first letter */}
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
  }
}
