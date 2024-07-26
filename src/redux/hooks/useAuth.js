import { useSelector } from 'react-redux';
// prettier-ignore
import { selectUser, selectIsLoggedIn, selectIsRefreshing } from '../auth/authSelector';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,

    user,
  };
};
