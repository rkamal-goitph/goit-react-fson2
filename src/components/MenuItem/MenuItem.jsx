import PropTypes from 'prop-types';

const MenuItem = ({ name, description, imageUrl, price }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <img src={imageUrl} alt={name} style={{ height: '400px' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price.toFixed(2)}</p>
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
};

export default MenuItem;
