// InventoryForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './InventoryForm.module.css';

export class InventoryForm extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    quantity: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: nanoid(),
      name: this.state.name,
      quantity: parseInt(this.state.quantity, 10),
    };
    this.props.addItem(newItem);
    this.setState({ name: '', quantity: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          className={css.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Stock Quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
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
