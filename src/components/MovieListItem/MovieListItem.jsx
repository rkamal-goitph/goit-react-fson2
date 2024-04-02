// MovieListItem/MovieListItem.js
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieListItem.module.css';

export const MovieListItem = ({ id, title }) => {
  return (
    <li className={css.movieItem}>
      <Link to={`/movies/${id}`} className={css.movieLink}>
        <h3>{title}</h3>
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
