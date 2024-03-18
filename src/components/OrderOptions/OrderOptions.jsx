import React, { Component } from 'react';
import styles from './OrderOptions.module.css';
import PropTypes from 'prop-types';

const OrderOptions = ({ onOrder, shoes }) => {
  return (
    <div className={styles.optionsContainer}>
      {shoes.map(shoe => (
        <button
          key={shoe.name}
          onClick={() => onOrder(shoe.name)}
          className={styles.orderButton}
        >
          Order {shoe.name}
        </button>
      ))}
    </div>
  );
};

OrderOptions.propTypes = {
  onOrder: PropTypes.func.isRequired,
  shoes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OrderOptions;
