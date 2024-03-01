import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './MenuItem.module.css'; // Ensure the stylesheet is imported

const getClassNameForAvailability = availability => {
  // Directly return the corresponding class name from the styles object
  switch (availability) {
    case 'Available':
      return styles.available;
    case 'Few Left':
      return styles.fewLeft;
    case 'Not Available':
      return styles.notAvailable;
    case 'Seasonal':
      return styles.seasonal;
    default:
      return '';
  }
};

const MenuItem = ({ name, description, imageUrl, price, availability }) => {
  // Generate the dynamic class name for the availability icon
  const availabilityClass = getClassNameForAvailability(availability);

  return (
    <div className={`${styles.menuItemContainer} ${availabilityClass}`}>
      <img src={imageUrl} alt={name} className={styles.menuItemImage} />
      <h2 className={styles.menuItemName}>
        <AiFillCheckCircle
          className={`${styles.menuItemIcon} ${availabilityClass}`}
        />
        {name}
      </h2>
      <p className={styles.menuItemDescription}>{description}</p>
      <p className={styles.menuItemPrice}>
        Price: ${price.individual.toFixed(2)}
      </p>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.shape({
    individual: PropTypes.number.isRequired,
  }).isRequired,
  availability: PropTypes.string.isRequired,
};

export default MenuItem;
