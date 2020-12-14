import React, { useState, useCallback, createContext } from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface IContext {
  isAuthenticated: boolean;
  user: IUser;
  Login(credentials: ILoginCrendentials): Promise<any>;
  Logout(): Promise<any>;
}
interface ILoginCrendentials {
  email: string;
  password: string;
}
interface IAuthState {
  token: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: object;
  isAuthenticated: boolean;
}
interface IUser {
  id: string;
  screen_name: string;
  username: string;
  email: string;
  avatar: string;
  verified: boolean;
}

export const AuthContext = createContext({} as IContext);

const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const token = AsyncStorage.getItem('@Twitter:token');
    const user = AsyncStorage.getItem('@Twitter:user');

    if (token && user) {
      api.defaults.headers.common.Authorization = token;
      return { token, user, isAuthenticated: true };
    }
    return {} as IAuthState;
  });

  const Login = useCallback(async ({ email, password }) => {
    // Get session token
    const response = await await api.post('session', { email, password });
    // Check response status
    if (response.status !== 200) throw new Error(response.data);
    const { user, token } = response.data;
    // Set axios default header
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    // Save data on browser local storage
    AsyncStorage.setItem('@Twitter:token', `Bearer ${token}`);
    AsyncStorage.setItem('@Twitter:user', JSON.stringify(user));
    // Set States
    setAuthState({
      token,
      user,
      isAuthenticated: true,
    });
  }, []);

  const Logout = useCallback(async () => {
    AsyncStorage.removeItem('@Twitter:token');
    AsyncStorage.removeItem('@Twitter:user');
    setAuthState({} as IAuthState);
    api.defaults.headers.common.Authorization = '';
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
