import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'components/MenuItem/MenuItem'; // Update the path as needed
import styles from './MenuItemList.module.css'; // Import as a module

class MenuItemList extends React.Component {
  render() {
    const { shoes } = this.props;

    return (
      <div className={styles.menuItemListContainer}>
        {shoes.map(({ name, description, imageUrl, price, availability }) => (
          <MenuItem
            key={name}
            name={name}
            description={description}
            imageUrl={imageUrl}
            price={price}
            availability={availability}
          />
        ))}
      </div>
    );
  }
}

MenuItemList.propTypes = {
  shoes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.shape({
        individual: PropTypes.number.isRequired,
      }).isRequired,
      availability: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuItemList;
