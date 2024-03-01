import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';
import './MenuItem.css'; // Import the CSS stylesheet

const getClassNameForAvailability = availability => {
  switch (availability) {
    case 'Available':
      return 'available';
    case 'Few Left':
      return 'fewLeft';
    case 'Not Available':
      return 'notAvailable';
    case 'Seasonal':
      return 'seasonal';
    default:
      return '';
  }
};

const MenuItem = ({ name, description, imageUrl, price, availability }) => {
  const availabilityClass = getClassNameForAvailability(availability);

  return (
    <div className={`menuItemContainer ${availabilityClass}`}>
      <img src={imageUrl} alt={name} className="menuItemImage" />
      <h2 className="menuItemName">
        <AiFillCheckCircle className={`menuItemIcon ${availabilityClass}`} />
        {name}
      </h2>
      <p className="menuItemDescription">{description}</p>
      <p className="menuItemPrice">Price: ${price.individual.toFixed(2)}</p>
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
