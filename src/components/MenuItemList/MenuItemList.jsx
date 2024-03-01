import PropTypes from 'prop-types';
import MenuItem from 'components/MenuItem/MenuItem';

const MenuItemList = ({ salads }) => {
  return (
    <div>
      {salads.map(salad => (
        <MenuItem
          key={salad.name}
          name={salad.name}
          description={salad.description}
          imageUrl={salad.imageUrl}
          price={salad.price.individual} // This line is correct as per your original code
        />
      ))}
    </div>
  );
};

MenuItemList.propTypes = {
  salads: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.shape({
        individual: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default MenuItemList;
