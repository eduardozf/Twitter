import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  background: #efefef;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 40px 8px #acc7d8;

  a{
    text-decoration: none;
    color: var(--blue);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 100px;
`

export const Input = styled.input`
  display: flex;
  width: 100%;

  margin: 4px 0;
  padding: 8px 8px;
  border: 1px solid #aaa;
  border-radius: 4px;

  &:focus{
    border: 1px solid var(--blue);
  }
`

export const OptionsContainer = styled.div`

  span{
    color: var(--gray);
    font-size: 14px;
    margin-left: 4px;
    margin-right: 8px;
  }
`

export const LoginButton = styled.button`
  background: var(--blue);
  color: #fff;

  margin: 4px 0;
  padding: 8px;

  font-weight: 700;
  font-size: 16px;

  border-radius: 20px;
  width: 100%;
`

export const Header = styled.header`
  padding: 10px 0;
  margin-bottom: 18px;

  width: 100%;
  text-align: center;

  color: var(--gray);
  border-bottom: 1px solid var(--gray);
`

export const Footer = styled.footer`
  padding: 10px 0;
  margin-top: 18px;

  width: 100%;
  text-align: center;

  color: var(--gray);
  border-top: 1px solid var(--gray);
`
