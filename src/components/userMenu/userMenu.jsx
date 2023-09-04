import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { useAuth } from '../hooks';
import { CiLogin } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import style from './user.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={style.container}>
      <VscAccount className={style.icon} />
      <h1 className={style.title}>Welcome {user.name}</h1>
      <button
        className={style.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        <CiLogin className={style.icon} />
      </button>
    </div>
  );
};

export default UserMenu;
