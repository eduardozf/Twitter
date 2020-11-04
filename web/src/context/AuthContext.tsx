import React, { createContext, useState, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
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

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider: React.FC = ({ children }) => {
  const [authState, setAuthState] = useState(() => {
    const token = localStorage.getItem('@Twitter:token');
    const user = localStorage.getItem('@Twitter:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = token
      return { token, user: JSON.parse(user), isAuthenticated: true }
    }
    return {} as IAuthState;
  });

  const Login = useCallback(async ({ email, password }) => {
    // Get session token
    const response = await (await api.post('session', { email, password }));
    // Check response status
    if (response.status !== 200) {
      throw new Error(response.data);
    }
    const { user, token } = response.data;
    //Set axios default header
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    //Save data on browser local storage
    localStorage.setItem('@Twitter:token', `Bearer ${token}`);
    localStorage.setItem('@Twitter:user', JSON.stringify(user));
    //Set States
    setAuthState({
      token,
      user,
      isAuthenticated: true
    });
    window.location.href = '/';
  }, [])

  const Logout = useCallback(async () => {
    localStorage.removeItem('@Twitter:token');
    localStorage.removeItem('@Twitter:user');
    setAuthState({} as IAuthState);
    api.defaults.headers.common['Authorization'] = "";
    return (<Redirect to={'/login'} />)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuthenticated: authState.isAuthenticated,
      user: authState.user,
      Login,
      Logout,
    }}>
      {console.log(authState.token)}
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
