import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movie</Link>
      </nav>
    </header>
  );
};
