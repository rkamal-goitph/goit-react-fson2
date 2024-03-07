import React from 'react';
import MenuItemList from './MenuItemList/MenuItemList';
import Menu from './Menu/Menu';
import shoes from '../data/shoes.json';
import OrderCounter from './OrderCounter/OrderCounter';
import { Inventory } from './Inventory/Inventory';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu title="Shoe Store">
          <MenuItemList shoes={shoes} />
        </Menu>
        <OrderCounter shoes={shoes} />
        <Inventory />
      </div>
    );
  }
}

export default App;
