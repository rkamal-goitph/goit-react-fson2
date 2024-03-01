import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';
import clsx from 'clsx';
import './MenuItem.css'; // Ensure the stylesheet is imported

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
  // Generate the dynamic class name for the availability icon
  const menuItemIconClassName = clsx(
    'menuItemIcon',
    getClassNameForAvailability(availability)
  );

  return (
    <div
      className={`menuItemContainer ${getClassNameForAvailability(
        availability
      )}`}
    >
      <img src={imageUrl} alt={name} className="menuItemImage" />
      <h2 className="menuItemName">
        {/* Apply the dynamically generated class name */}
        <AiFillCheckCircle className={menuItemIconClassName} />
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
