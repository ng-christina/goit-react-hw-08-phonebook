import { NavLink } from 'react-router-dom';
import style from './AuthNav.module.css'

export default function AuthNav() {
  return (
    <div>
      <NavLink className={style.link} to="/registration">Registration</NavLink>
      <NavLink className={style.link} to="/login">Login</NavLink>
    </div>
  );
}
