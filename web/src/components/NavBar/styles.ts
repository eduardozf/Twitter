import styled from 'styled-components';

export const OptionsContainer = styled.div`
  width: 255px;
  padding: 0 10px;

  position: relative;
`
export const LogoContainer = styled.div`
  display:flex;
  justify-content: start;
  align-items: center;
`

export const Logo = styled.a`
  display:flex;
  justify-content: center;
  align-items: center;

  height: 60px;
  width: 60px;

  border-radius: 50%;

  text-decoration: none;
  color: var(--blue);

  &:hover{
    background: rgba(var(--rgblue),0.1);
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  button{
    margin: 8px 0;
  }
`
