import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;

  font-size: 14px;
  font-weight: bold;
  padding: 6px 16px;

  color: var(--blue);
  background: transparent;
  border: 2px solid var(--blue);
  border-radius: 20px;

  :hover{
    background: rgba(var(--rgblue),0.1);
  }
`;
