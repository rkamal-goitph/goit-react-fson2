import React, { Component } from 'react';
import { InventoryForm } from 'components/InventoryForm/InventoryForm';
import { InventoryList } from 'components/InventoryList/InventoryList';
import css from './Inventory.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: '1',
          name: 'Running Shoes',
          quantity: 5,
          isInStock: true,
          condition: 'new',
          category: 'footwear',
        },
        {
          id: '2',
          name: 'Hiking Backpack',
          quantity: 3,
          isInStock: true,
          condition: 'used',
          category: 'accessories',
        },
        {
          id: '3',
          name: 'Thermal Jacket',
          quantity: 8,
          isInStock: true,
          condition: 'new',
          category: 'clothing',
        },
        {
          id: '4',
          name: 'Waterproof Boots',
          quantity: 4,
          isInStock: false,
          condition: 'new',
          category: 'footwear',
        },
        {
          id: '5',
          name: 'Camping Tent',
          quantity: 2,
          isInStock: true,
          condition: 'used',
          category: 'accessories',
        },
        {
          id: '6',
          name: 'Beanie',
          quantity: 10,
          isInStock: true,
          condition: 'new',
          category: 'clothing',
        },
        {
          id: '7',
          name: 'Trail Running Socks',
          quantity: 15,
          isInStock: true,
          condition: 'new',
          category: 'footwear',
        },
      ],
      searchTerm: '',
    };

    console.log('Constructor: State initialization and method binding');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Sync state to props if needed');
    // Return null if no state updates are required
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component is mounted');
    const savedItems = localStorage.getItem('inventoryItems');
    if (savedItems && JSON.parse(savedItems).length > 0) {
      this.setState({ items: JSON.parse(savedItems) });
    }

    // Set up a resize event listener
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(_prevProps, prevState) {
    console.log('componentDidUpdate: Component did update');
    // Save inventory items to local storage if items array changed

    if (prevState.items !== this.state.items) {
      localStorage.setItem('inventoryItems', JSON.stringify(this.state.items));
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before component is removed');

    // Remove the resize event listener
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    // For demonstration, log window size to the console
    console.log(
      'Window resized to: ',
      window.innerWidth,
      'x',
      window.innerHeight
    );
  };

  addItem = newItem => {
    // Check for item name uniqueness before adding
    const nameExists = this.state.items.some(
      item => item.name === newItem.name
    );
    if (nameExists) {
      toast.error('Item name must be unique');
      return;
    }

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
        <InventoryForm addItem={this.addItem} items={items} />
        <input
          type="text"
          placeholder="Search Inventory"
          value={searchTerm}
          onChange={e => this.updateSearchTerm(e.target.value)}
          className={css.searchInput}
        />
        <InventoryList items={filteredItems} deleteItem={this.deleteItem} />
        <ToastContainer />
      </div>
    );
  }
}
