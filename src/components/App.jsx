import React from 'react';
import { Inventory } from './Inventory/Inventory';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Menu title="Shoe Store">
          <MenuItemList shoes={shoes} />
        </Menu>
        <OrderCounter shoes={shoes} /> */}
        <Inventory />
      </div>
    );
  }
}

export default App;
