import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { useAuth } from '../hooks';
import style from './user.module.css';
import { CiLogin } from 'react-icons/ci';
// import { ReactComponent as AddIcon } from '../icons/logout.svg';
const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={style.container}>
      <div>
        <h1>Welcome {user.name}</h1>
      </div>
      <button type="button" onClick={() => dispatch(logout())}>
        <CiLogin />
      </button>
    </div>
  );
};

export default UserMenu;
// IoLogOutOutline
