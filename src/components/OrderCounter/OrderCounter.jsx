import React from 'react';
import styles from './OrderCounter.module.css';
import PropTypes from 'prop-types';
import OrderOptions from 'components/OrderOptions/OrderOptions';
import OrderStatistics from 'components/OrderStatistics/OrderStatistics';

class OrderCounter extends React.Component {
  static propTypes = {
    shoes: PropTypes.arrayOf(
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

    props.shoes.forEach(shoe => {
      orders[shoe.name] = 0;
    });

    this.state = {
      orders: orders,
      totalOrders: 0,
    };
  }

  createOrder = shoeName => {
    this.setState(prevState => ({
      orders: {
        ...prevState.orders,
        [shoeName]: prevState.orders[shoeName] + 1,
      },
      totalOrders: prevState.totalOrders + 1,
    }));
  };

  resetOrders = () => {
    const resetOrders = {};

    Object.keys(this.state.orders).forEach(shoeName => {
      resetOrders[shoeName] = 0;
    });

    this.setState({
      orders: resetOrders,
      totalOrders: 0,
    });
  };

  render() {
    const { orders, totalOrders } = this.state;

    return (
      <div className={styles.container}>
        <h2>Shoe Order Counter</h2>
        <OrderOptions onOrder={this.createOrder} shoes={this.props.shoes} />
        <OrderStatistics orders={orders} totalOrders={totalOrders} />
        <button onClick={this.resetOrders} className={styles.resetButton}>
          Reset Orders
        </button>
      </div>
    );
  }
}

export default OrderCounter;
