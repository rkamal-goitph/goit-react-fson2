import React from 'react';
import Menu from './Menu/Menu';
import MenuItemList from './MenuItemList/MenuItemList';
import OrderCounter from './OrderCounter/OrderCounter';
import salads from '../data/salads.json'; // Ensure the path is correct

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu title="Salads Menu">
          <MenuItemList salads={salads} />
        </Menu>
        <OrderCounter salads={salads} />
      </div>
    );
  }
}

export default App;
