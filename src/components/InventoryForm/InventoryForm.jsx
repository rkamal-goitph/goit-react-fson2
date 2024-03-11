import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './InventoryForm.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class InventoryForm extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired, // Add items to prop types for checking uniqueness
  };

  state = {
    name: '',
    quantity: '',
    isInStock: true,
    condition: 'new',
    category: 'footwear',
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, quantity, isInStock, condition, category } = this.state;

    // Check if item name already exists
    if (
      this.props.items.some(
        item => item.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error('Item name must be unique', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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

    this.props.addItem(newItem);

    // Reset form state
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
      <>
        <ToastContainer />
        <form onSubmit={this.handleFormSubmit} className={css.form}>
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
      </>
    );
  }
}
