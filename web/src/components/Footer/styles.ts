import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  color: var(--gray);

  font-size: 14px;
  a{
    color: var(--gray);
    text-decoration: none;
    :hover{
      text-decoration: underline;
    }
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 8px;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 8px;
`
