import { useAuth } from '../hooks';
import { NavLink } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import style from './nav.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={style.nuv}>
      <NavLink to="/" end className={style.link}>
        Home{' '}
        <span className={style.icon}>
          <FcLike />
        </span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
