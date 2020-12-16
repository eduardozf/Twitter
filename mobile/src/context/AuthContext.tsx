import React, { createContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface IContext {
  isAuthenticated: boolean;
  user: IUser;
  // eslint-disable-next-line no-unused-vars
  Login(credentials: ILoginCrendentials): Promise<void>;
  Logout(): Promise<void>;
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
  const [authState, setAuthState] = useState<IAuthState>({} as IAuthState);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@Twitter:token',
        '@Twitter:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.common.Authorization = token;
        setAuthState({
          token: token[1],
          user: JSON.parse(user[1]),
          isAuthenticated: true,
        } as IAuthState);
      }
    }
    loadStorageData();
  }, []);

  // Handle LogIn
  const Login = useCallback(async ({ email, password }) => {
    // Get session token
    const response = await await api.post('session', { email, password });
    // Check response status
    if (response.status !== 200) throw new Error(response.data);
    // Get user, token of new session response
    const { user, token } = response.data as IAuthState;
    // Set axios Authorization default header
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    // Save data on mobile async storage
    await AsyncStorage.multiSet([
      ['@Twitter:token', `Bearer ${token}`],
      ['@Twitter:user', JSON.stringify(user)],
    ]);
    // Set Auth States
    setAuthState({
      token,
      user,
      isAuthenticated: true,
    });
  }, []);

  // Handle Logout
  const Logout = useCallback(async () => {
    // Remove user information from AsyncStorage
    await AsyncStorage.multiRemove(['@Twitter:token', '@Twitter:user']);
    // Clear the state
    setAuthState({} as IAuthState);
    // Clear Authorization header
    api.defaults.headers.common.Authorization = '';
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authState.isAuthenticated,
        user: authState.user as IUser,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
