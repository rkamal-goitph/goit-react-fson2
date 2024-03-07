import React, { Component } from 'react';
import styles from './OrderOptions.module.css';
import PropTypes from 'prop-types';

class OrderOptions extends Component {
  static propTypes = {
    onOrder: PropTypes.func.isRequired,
    shoes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { onOrder, shoes } = this.props;
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
  }
}

export default OrderOptions;
