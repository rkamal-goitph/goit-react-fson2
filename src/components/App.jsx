import React from 'react';
import MenuItemList from './MenuItemList/MenuItemList';
import Menu from './Menu/Menu';
import salads from '../data/salads.json';
import OrderCounter from './OrderCounter/OrderCounter';

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
