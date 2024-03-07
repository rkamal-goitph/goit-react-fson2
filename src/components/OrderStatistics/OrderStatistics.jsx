import React, { Component } from 'react';
import styles from './OrderStatistics.module.css';
import PropTypes from 'prop-types';

class OrderStatistics extends Component {
  static propTypes = {
    orders: PropTypes.objectOf(PropTypes.number).isRequired,
    totalOrders: PropTypes.number.isRequired,
  };

  render() {
    const { orders, totalOrders } = this.props;

    return totalOrders > 0 ? (
      <div className={styles.statisticsContainer}>
        <h2>Order Statistics</h2>
        {Object.entries(orders).map(([shoeName, count]) => (
          // [[Antipasto shoe, 2], [Chef shoe, 3] ]
          <div key={shoeName} className={styles.statisticItem}>
            <p>
              {shoeName}: {count} orders (
              {totalOrders > 0 ? ((count / totalOrders) * 100).toFixed(2) : 0}%)
            </p>
          </div>
        ))}
      </div>
    ) : (
      <p>There are no orders</p>
    );
  }
}

export default OrderStatistics;
