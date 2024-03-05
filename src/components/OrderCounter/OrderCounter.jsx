import React, { Component } from 'react';
import OrderOptions from 'components/OrderOptions/OrderOptions';
import OrderStatistics from 'components/OrderStatistics/OrderStatistics';
import styles from './OrderCounter.module.css';
import PropTypes from 'prop-types';

class OrderCounter extends Component {
  static propTypes = {
    salads: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        imageUrl: PropTypes.string,
        price: PropTypes.object,
        availability: PropTypes.string,
      })
    ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      orders: props.salads.reduce((acc, salad) => {
        acc[salad.name] = 0;
        return acc;
      }, {}),
    };
  }

  handleOrder = saladName => {
    this.setState(prevState => ({
      orders: {
        ...prevState.orders,
        [saladName]: prevState.orders[saladName] + 1,
      },
    }));
  };

  resetOrders = () => {
    this.setState({
      orders: Object.keys(this.state.orders).reduce((acc, saladName) => {
        acc[saladName] = 0;
        return acc;
      }, {}),
    });
  };

  render() {
    const { orders } = this.state;
    const totalOrders = Object.values(orders).reduce(
      (acc, curr) => acc + curr,
      0
    );

    return (
      <div className={styles.container}>
        <OrderOptions onOrder={this.handleOrder} salads={this.props.salads} />
        <OrderStatistics orders={orders} totalOrders={totalOrders} />
        <button onClick={this.resetOrders} className={styles.resetButton}>
          Reset Orders
        </button>
      </div>
    );
  }
}

export default OrderCounter;
