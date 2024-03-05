import React from 'react';
import styles from './OrderCounter.module.css';
import PropTypes from 'prop-types';
import OrderOptions from 'components/OrderOptions/OrderOptions';
import OrderStatistics from 'components/OrderStatistics/OrderStatistics';

class OrderCounter extends React.Component {
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

    const orders = {};

    props.salads.forEach(salad => {
      orders[salad.name] = 0;
    });

    this.state = {
      orders: orders,
      totalOrders: 0,
    };
  }

  createOrder = saladName => {
    this.setState(prevState => ({
      orders: {
        ...prevState.orders,
        [saladName]: prevState.orders[saladName] + 1,
      },
      totalOrders: prevState.totalOrders + 1,
    }));
  };

  resetOrders = () => {
    // Create a new orders object with all salad names set to 0
    const resetOrders = {};
    Object.keys(this.state.orders).forEach(saladName => {
      resetOrders[saladName] = 0;
    });

    // Set the state with the reset orders and reset totalOrders to 0
    this.setState({
      orders: resetOrders,
      totalOrders: 0,
    });
  };

  render() {
    const { orders, totalOrders } = this.state;
    console.log(orders);

    return (
      <div className={styles.container}>
        <OrderOptions onOrder={this.createOrder} salads={this.props.salads} />
        <OrderStatistics orders={orders} totalOrders={totalOrders} />
        <button onClick={this.resetOrders} className={styles.resetButton}>
          Reset Orders
        </button>
      </div>
    );
  }
}

export default OrderCounter;
