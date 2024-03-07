// InventoryApp.js
import React, { Component } from 'react';
import { InventoryForm } from 'components/InventoryForm/InventoryForm';
import { InventoryList } from 'components/InventoryList/InventoryList';
import css from './Inventory.module.css';

export class Inventory extends Component {
  state = {
    items: [],
    searchTerm: '',
  };

  addItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item],
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
          value={this.searchTerm}
          onChange={e => this.updateSearchTerm(e.target.value)}
          className={css.searchInput}
        />
        <InventoryList items={filteredItems} deleteItem={this.deleteItem} />
      </div>
    );
  }
}
