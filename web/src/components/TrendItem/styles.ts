import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid var(--light-gray);
`

export const LeftContainer = styled.div`

`

export const Header = styled.header`
  font-size: 14px;
  color: var(--gray);
`

export const Title = styled.div`
  font-size: 15px;
`

export const Footer = styled.footer`
  font-size: 14px;
  color: var(--gray);

  a{
    text-transform: uppercase;
    text-decoration: none;
    color: var(--blue);
  }
`

export const RightContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
