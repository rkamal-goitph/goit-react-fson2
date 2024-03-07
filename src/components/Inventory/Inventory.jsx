// InventoryApp.js
import React, { Component } from 'react';
import { InventoryForm } from 'components/InventoryForm/InventoryForm';
import { InventoryList } from 'components/InventoryList/InventoryList';
import css from './Inventory.module.css';

// Steps
// 1. Decide on the structure of the components
// 2. Decide on the states of the components
// 3. Decide what to render based from each state
// 4. Decide the actions that alter each state
// 5. Define the actions that alter each state

// We lifted the state up to the inventory component instead of the inventory list
// so that the inventory form can interact with the state in the inventory component

// we then pass down the state to the inventory list component as props
// so that we can render then in our inventory list component

// PROPS --> data flow direction is parent to child
// STATES --> data flow maybe lifted from child to parent so that all children have access to the data

export class Inventory extends Component {
  state = {
    items: [],
    searchTerm: '',
  };

  addItem = newItem => {
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
    }));
  };

  deleteItem = itemId => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== itemId),
    }));
  };

  updateSearchTerm = term => {
    this.setState({ searchTerm: term });
  };

  render() {
    const { items, searchTerm } = this.state;

    const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className={css.app}>
        <h2>Stocks Inventory Manager</h2>
        <InventoryForm addItem={this.addItem} />
        <input
          type="text"
          placeholder="Search Inventory"
          value={searchTerm}
          onChange={e => this.updateSearchTerm(e.target.value)}
          className={css.searchInput}
        />
        <InventoryList items={filteredItems} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
