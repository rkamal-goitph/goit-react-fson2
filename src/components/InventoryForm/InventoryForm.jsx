import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import InventoryContext from 'context/InventoryProvider';
import css from './InventoryForm.module.css';

const InventoryForm = () => {
  const { addItem } = useContext(InventoryContext); // Consume the context

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeQuantity = e => {
    setQuantity(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: nanoid(),
      name,
      quantity: parseInt(quantity, 10),
    };
    addItem(newItem);
    setName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={name}
        onChange={handleChangeName}
        required
        className={css.input}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Stock Quantity"
        value={quantity}
        onChange={handleChangeQuantity}
        required
        className={css.input}
      />
      <button type="submit" className={css.addButton}>
        Add Item to Inventory
      </button>
    </form>
  );
};

InventoryForm.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default InventoryForm;
