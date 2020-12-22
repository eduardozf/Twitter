import styled from 'styled-components/native';

export const Logo = styled.Image`
  width: 52px;
  height: 42px;

  align-self: center;
  margin-top: 20px;
`;

export const Container = styled.View`
  padding: 0 20px;

  justify-content: center;
  align-items: center;

  margin-top: 50%;
  margin-bottom: 50%;
  transform: translate(0, -80px);
`;

export const Span = styled.Text`
  font-size: 16px;
  color: #777;
`;

export const Header = styled.View`
  margin-bottom: 6px;
`;

export const FormContainer = styled.View`
  flex-direction: column;
  width: 60%;
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  margin-top: 6px;
`;
