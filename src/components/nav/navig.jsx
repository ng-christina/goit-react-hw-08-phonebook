import { useAuth } from '../hooks';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" end className={style.link}>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
    </nav>
  );
};

export default Navigation;
