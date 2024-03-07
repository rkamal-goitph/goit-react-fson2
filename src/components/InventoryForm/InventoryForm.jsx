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
    isInStock: true, // Checkbox state
    condition: 'new', // Radio buttons state
    category: 'footwear', // Select dropdown state
  };

  // this is a generic onChange event handler function
  // which handles the mutation of the state
  // by using dynamic object key

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  // static onChange input handlers

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleQuantityChange = event => {
    this.setState({
      quantity: event.target.value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const newItem = {
      id: nanoid(),
      name: this.state.name,
      quantity: parseInt(this.state.quantity),
      isInStock: this.state.isInStock,
      condition: this.state.condition,
      category: this.state.category,
    };

    this.props.addItem(newItem);
    this.setState({
      name: '',
      quantity: '',
      isInStock: true,
      condition: 'new',
      category: 'footwear',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          required
          className={css.input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Stock Quantity"
          value={this.state.quantity}
          onChange={this.handleQuantityChange}
          required
          className={css.input}
        />
        <label>
          <span style={{ marginRight: '10px' }}>In Stock:</span>
          <input
            type="checkbox"
            name="isInStock"
            checked={this.state.isInStock}
            onChange={this.handleChange}
          />
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          Condition:
          <label>
            <input
              type="radio"
              name="condition"
              value="new"
              checked={this.state.condition === 'new'}
              onChange={this.handleChange}
            />
            <span style={{ marginLeft: '10px' }}>New</span>
          </label>
          <label>
            <input
              type="radio"
              name="condition"
              value="used"
              checked={this.state.condition === 'used'}
              onChange={this.handleChange}
            />
            <span style={{ marginLeft: '10px' }}>Used</span>
          </label>
        </div>
        <select
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
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
    );
  }
}
