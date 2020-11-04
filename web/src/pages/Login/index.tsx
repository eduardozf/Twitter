import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { Container } from './styles';

const Login: React.FC = () => {
  const { Login } = useContext(AuthContext);

  const credentials = {
    email: 'eduardo@gmail.com',
    password: '1234'
  }

  return (
    <Container>
      <h1>Login</h1>
      <button onClick={() => { Login(credentials) }}>LOGIN</button>
    </Container>
  )
}

export default Login;
