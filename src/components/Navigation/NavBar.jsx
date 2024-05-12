import clsx from 'clsx';
import css from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const NavBar = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/MoviesPage" className={buildLinkClass}>
        Movie
      </NavLink>
    </nav>
  );
};
export default NavBar;