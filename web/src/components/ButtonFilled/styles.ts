import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px 0;

  border-radius: 50px;

  color: var(--white);
  background: var(--blue);
  cursor: pointer;

  *{
  font-size: 16px;
  font-weight: 700;
  }

  :disabled{
    background: rgba(var(--rgblue), 0.6);
    cursor: default;
    :hover{
      background: rgba(var(--rgblue), 0.6);
    }
  }

  :hover{
    background: #078ee0;
  }
`;
