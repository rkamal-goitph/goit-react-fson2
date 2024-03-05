import React from 'react';
import MenuItemList from './MenuItemList/MenuItemList';
import Menu from './Menu/Menu';
import OrderCounter from './OrderCounter/OrderCounter';
import salads from '../data/salads.json';

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
