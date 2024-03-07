import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './InventoryForm.module.css';

export class InventoryForm extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.nameInputRef = React.createRef();
    this.quantityInputRef = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: nanoid(),
      name: this.nameInputRef.current.value,
      quantity: parseInt(this.quantityInputRef.current.value, 10),
    };
    this.props.addItem(newItem);
    this.nameInputRef.current.value = '';
    this.quantityInputRef.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          ref={this.nameInputRef}
          required
          className={css.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Stock Quantity"
          ref={this.quantityInputRef}
          required
          className={css.input}
        />
        <button type="submit" className={css.addButton}>
          Add Item to Inventory
        </button>
      </form>
    );
  }
}
