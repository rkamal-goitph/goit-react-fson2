import React from 'react';
import { InventoryForm } from 'components/InventoryForm/InventoryForm';
import { InventoryList } from 'components/InventoryList/InventoryList';
import css from './Inventory.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

export const Inventory = () => {
  const [items, setItems] = useState([
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
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedItems = localStorage.getItem('inventoryItems');
    if (savedItems && JSON.parse(savedItems).length > 0) {
      setItems(JSON.parse(savedItems));
    }

    const handleResize = () => {
      console.log(
        'Window resized to: ',
        window.innerWidth,
        'x',
        window.innerHeight
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('inventoryItems', JSON.stringify(items));
  }, [items]);

  const addItem = newItem => {
    const nameExists = items.some(item => item.name === newItem.name);
    if (nameExists) {
      toast.error('Item name must be unique');
      return;
    }
    setItems(prevItems => [...prevItems, newItem]);
  };

  const deleteItem = itemId => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateSearchTerm = term => {
    setSearchTerm(term);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={css.app}>
      <h2>Stocks Inventory Manager</h2>
      <InventoryForm addItem={addItem} items={items} />
      <input
        type="text"
        placeholder="Search Inventory"
        value={searchTerm}
        onChange={e => updateSearchTerm(e.target.value)}
        className={css.searchInput}
      />
      <InventoryList items={filteredItems} deleteItem={deleteItem} />
      <ToastContainer />
    </div>
  );
};
