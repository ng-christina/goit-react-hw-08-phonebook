import Navigation from 'components/nav/navig';
import UserMenu from 'components/userMenu/userMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from '../hooks';
import style from './AB.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <header className={style.header}>
      <Navigation />
      {renderNavigation()}
    </header>
  );
};

export default AppBar;
