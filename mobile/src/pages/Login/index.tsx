import React, { useContext } from 'react';
import { Text, Button, StatusBar } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../context/AuthContext';

import { Logo, Container, Span, Header, Form, Input, Footer } from './styles';
import LogoImg from '../../assets/logo.png';

const credentials = {
  email: 'eduardo@gmail.com',
  password: '1234',
};

const LoginPage: React.FC = () => {
  const navigation = useNavigation();

  const { Login } = useContext(AuthContext);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1DA1F2" />

      <Logo source={LogoImg} />
      <Container>
        <Header>
          <Span>Log in on Twitter</Span>
        </Header>
        <Form>
          <Input placeholder="Email" />
          <Input secureTextEntry placeholder="Password" />
          <Link
            to="Main"
            style={{
              color: '#1DA1F2',
              alignSelf: 'flex-end',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <Text>Forgot password?</Text>
          </Link>
          <Button
            title="Log In"
            onPress={() => {
              Login(credentials);
              navigation.navigate('Main');
            }}
          />
        </Form>
        <Footer>
          <Span>Dont have an account?</Span>
          <Link to="Main" style={{ color: '#1DA1F2' }}>
            <Text>Sign up</Text>
          </Link>
        </Footer>
      </Container>
    </>
  );
};

export default LoginPage;
