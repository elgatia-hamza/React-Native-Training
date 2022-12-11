import jwtDecode from 'jwt-decode';
import {useContext} from 'react';
import AuthContext from './context';
import authStorage from './storage';

export default function useAuth() {
  const {user, setUser} = useContext(AuthContext);

  const login = authToken => {
    authStorage.storeToken(authToken);
    setUser(jwtDecode(authToken));
  };

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return {user, login, logout};
}
