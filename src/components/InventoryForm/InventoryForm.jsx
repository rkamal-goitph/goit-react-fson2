// InventoryForm.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './InventoryForm.module.css';

// Steps
// 1. Decide on the structure of the components
// 2. Decide on the states of the components
// 3. Decide what to render based from each state
// 4. Decide the actions that alter each state
// 5. Define the actions that alter each state

// Two Approaches to Dealing with React Forms
// 1. Uncontrolled components pattern
// 2. Controlled components pattern

export class InventoryForm extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    quantity: '',
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
