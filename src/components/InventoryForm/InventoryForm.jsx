import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './InventoryForm.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export const InventoryForm = ({ addItem, items }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isInStock, setIsInStock] = useState(true);
  const [condition, setCondition] = useState('new');
  const [category, setCategory] = useState('footwear');

  const handleChange = event => {
    const { name, value, checked } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'quantity':
        setQuantity(value);
        break;
      case 'isInStock':
        setIsInStock(checked);
        break;
      case 'condition':
        setCondition(value);
        break;
      case 'category':
        setCategory(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (items.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      toast.error('Item name must be unique');
      return;
    }

    const newItem = {
      id: nanoid(),
      name,
      quantity: parseInt(quantity, 10),
      isInStock,
      condition,
      category,
    };

    addItem(newItem);

    setName('');
    setQuantity('');
    setIsInStock(true);
    setCondition('new');
    setCategory('footwear');
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleFormSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={name}
          onChange={handleChange}
          required
          className={css.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Stock Quantity"
          value={quantity}
          onChange={handleChange}
          required
          className={css.input}
        />
        <label>
          <span style={{ marginRight: '10px' }}>In Stock:</span>
          <input
            type="checkbox"
            name="isInStock"
            checked={isInStock}
            onChange={handleChange}
          />
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Condition:
          <label>
            <input
              type="radio"
              name="condition"
              value="new"
              checked={condition === 'new'}
              onChange={handleChange}
            />
            <span style={{ marginLeft: '10px' }}>New</span>
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="used"
              checked={condition === 'used'}
              onChange={handleChange}
            />
            <span style={{ marginLeft: '10px' }}>Used</span>
          </label>
        </div>
        <select
          name="category"
          value={category}
          onChange={handleChange}
          className={css.input}
        >
          <option value="footwear">Footwear</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
        </select>

        <button type="submit" className={css.addButton}>
          Add Item to Inventory
        </button>
      </form>
    </>
  );
};

InventoryForm.propTypes = {
  addItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};
