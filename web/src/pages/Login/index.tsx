import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { Container, LoginContainer, Header, Form, Input, OptionsContainer, LoginButton, Footer } from './styles';
import { FaTwitter } from 'react-icons/fa';

const Login: React.FC = () => {
  const { Login } = useContext(AuthContext);

  const credentials = {
    email: 'eduardo@gmail.com',
    password: '1234'
  }

  function handleLogin(e: React.FormEvent, credentials: any) {
    e.preventDefault();
    Login(credentials);
  }

  return (
    <Container>
      <LoginContainer>
        <Header>Log in to Twitter</Header>
        <Form onSubmit={(e) => { handleLogin(e, credentials) }}>
          <FaTwitter style={{ color: 'var(--blue)', fontSize: '22px', marginBottom: '10px' }} />
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <OptionsContainer>
            <input type="checkbox" name="" id="" />
            <span>Remember me</span>
            <a href="/">Forgot password?</a>
          </OptionsContainer>
          <LoginButton type="submit">Log In</LoginButton>
        </Form>
        <Footer>Don't have an account? <a href="/">Sign up</a></Footer>
      </LoginContainer>
    </Container>
  )
}

export default Login;
