import React from 'react';
import { InventoryForm } from 'components/InventoryForm/InventoryForm';
import { InventoryList } from 'components/InventoryList/InventoryList';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredItems } from '../../redux/selectors';
import { fetchItems, addItem, deleteItem } from '../../redux/operations';
import { setFilter } from '../../redux/filterSlice';
import css from './Inventory.module.css';

import { useEffect } from 'react';

export const Inventory = () => {
  // const [itemsData, setItemsData] = useState([
  //   {
  //     id: '1',
  //     name: 'Running Shoes',
  //     quantity: 5,
  //     isInStock: true,
  //     condition: 'new',
  //     category: 'footwear',
  //   },
  //   {
  //     id: '2',
  //     name: 'Hiking Backpack',
  //     quantity: 3,
  //     isInStock: true,
  //     condition: 'used',
  //     category: 'accessories',
  //   },
  //   {
  //     id: '3',
  //     name: 'Thermal Jacket',
  //     quantity: 8,
  //     isInStock: true,
  //     condition: 'new',
  //     category: 'clothing',
  //   },
  //   {
  //     id: '4',
  //     name: 'Waterproof Boots',
  //     quantity: 4,
  //     isInStock: false,
  //     condition: 'new',
  //     category: 'footwear',
  //   },
  //   {
  //     id: '5',
  //     name: 'Camping Tent',
  //     quantity: 2,
  //     isInStock: true,
  //     condition: 'used',
  //     category: 'accessories',
  //   },
  //   {
  //     id: '6',
  //     name: 'Beanie',
  //     quantity: 10,
  //     isInStock: true,
  //     condition: 'new',
  //     category: 'clothing',
  //   },
  //   {
  //     id: '7',
  //     name: 'Trail Running Socks',
  //     quantity: 15,
  //     isInStock: true,
  //     condition: 'new',
  //     category: 'footwear',
  //   },
  // ]);

  const dispatch = useDispatch();
  const items = useSelector(selectFilteredItems);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h2>Stocks Inventory Manager</h2>
      <InventoryForm items={items} addItem={item => dispatch(addItem(item))} />
      <input
        type="text"
        placeholder="Search Inventory"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
      <InventoryList
        items={items}
        deleteItem={id => dispatch(deleteItem(id))}
      />
    </div>
  );
};
