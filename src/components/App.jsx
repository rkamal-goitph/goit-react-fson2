import React, { Component } from 'react';
import { Inventory } from './Inventory/Inventory';

class App extends Component {
  state = { showInventory: true };

  toggleInventory = () => {
    this.setState(prevState => ({ showInventory: !prevState.showInventory }));
  };

  render() {
    return (
      <div style={{ backgroundColor: 'lightBlue' }}>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'crimson',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '16px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'block',
            margin: '0 auto',
            transition: 'transform 0.2s, background-color 0.3s',
          }}
          onClick={this.toggleInventory}
        >
          Toggle Inventory
        </button>
        {this.state.showInventory ? <Inventory /> : null}
      </div>
    );
  }
}

export default App;
