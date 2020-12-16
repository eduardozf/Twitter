import React, { useContext, useCallback, useRef } from 'react';
import { Text, Button, StatusBar, TextInput } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { AuthContext } from '../../context/AuthContext';

import { Logo, Container, Span, Header, FormContainer, Footer } from './styles';
import Input from '../../components/Input';
import LogoImg from '../../assets/logo.png';

interface Credentials {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigation = useNavigation();
  const fromRef = useRef<FormHandles>(null);
  const passInputRef = useRef<TextInput>(null);
  const { Login } = useContext(AuthContext);

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback((data: Credentials) => {
    const isAuth = Login(data);
    if (!isAuth) return;
    navigation.navigate('Main');
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1DA1F2" />

      <Logo source={LogoImg} />
      <Container>
        <Header>
          <Span>Log in on Twitter</Span>
        </Header>
        <FormContainer>
          <Form ref={fromRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
              returnKeyType="next"
              onSubmitEditing={() => {
                passInputRef.current?.focus();
              }}
            />
            <Input
              ref={passInputRef}
              name="password"
              secureTextEntry
              placeholder="Password"
              returnKeyType="send"
              onSubmitEditing={() => fromRef.current?.submitForm()}
            />
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
                fromRef.current?.submitForm();
              }}
            />
          </Form>
        </FormContainer>
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
