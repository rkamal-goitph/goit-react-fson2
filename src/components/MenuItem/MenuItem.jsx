import PropTypes from 'prop-types';

const MenuItem = ({ name, description, imageUrl, price }) => {
  // Inline styles for each element
  const styles = {
    container: {
      marginBottom: '20px',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    image: { height: '400px', width: '100%', objectFit: 'cover' },
    name: { fontSize: '24px', fontWeight: 'bold' },
    description: { fontSize: '16px', color: '#666' },
    price: { fontSize: '18px', color: '#333' },
  };

  return (
    <div style={styles.container}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.description}>{description}</p>
      <p style={styles.price}>Price: ${price.individual.toFixed(2)}</p>
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
