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

export class Inventory extends Component {
  state = {
    items: [],
    searchTerm: '',
  };

  render() {
    const { items, searchTerm } = this.state;

    return (
      <div className={css.app}>
        <h2>Shoe Inventory Manager</h2>
        <InventoryForm addItem={this.addItem} />
        <input
          type="text"
          placeholder="Search Inventory"
          value={this.searchTerm}
          onChange={e => this.updateSearchTerm(e.target.value)}
          className={css.searchInput}
        />
        <InventoryList items={items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
