import Navigation from 'components/nav/navig';
import UserMenu from 'components/userMenu/userMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from '../hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <header>
      <Navigation />
      {renderNavigation()}
    </header>
  );
};

export default AppBar;
