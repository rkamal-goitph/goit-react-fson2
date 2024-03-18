import React from 'react';
import styles from './OrderCounter.module.css';
import PropTypes from 'prop-types';
import OrderOptions from 'components/OrderOptions/OrderOptions';
import OrderStatistics from 'components/OrderStatistics/OrderStatistics';

const OrderCounter = ({ shoes }) => {
  const initialOrders = shoes.reduce((orders, shoe) => {
    orders[shoe.name] = 0;
    return orders;
  }, {});

  const [orders, setOrders] = useState(initialOrders);
  const [totalOrders, setTotalOrders] = useState(0);

  const createOrder = shoeName => {
    setOrders(prevOrders => ({
      ...prevOrders,
      [shoeName]: prevOrders[shoeName] + 1,
    }));
    setTotalOrders(prevTotal => prevTotal + 1);
  };

  const resetOrders = () => {
    setOrders(initialOrders);
    setTotalOrders(0);
  };

  return (
    <div className={styles.container}>
      <h2>Shoe Order Counter</h2>
      <OrderOptions onOrder={createOrder} shoes={props.shoes} />
      <OrderStatistics orders={orders} totalOrders={totalOrders} />
      <button onClick={resetOrders} className={styles.resetButton}>
        Reset Orders
      </button>
    </div>
  );
};

OrderCounter.propTypes = {
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

export default OrderCounter;
