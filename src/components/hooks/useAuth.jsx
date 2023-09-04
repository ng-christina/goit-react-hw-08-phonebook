import { useSelector } from 'react-redux';
import {
  selectUser,
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    email,
  };
};
