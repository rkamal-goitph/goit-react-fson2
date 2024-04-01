import { NavLink } from 'react-router-dom';
import css from './Header.module.css'; // Import your CSS module here

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
          style={({ isActive }) =>
            isActive ? { textDecoration: 'underline' } : {}
          }
        >
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
