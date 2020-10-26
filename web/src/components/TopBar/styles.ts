import styled from 'styled-components';

export const Container = styled.div`

  height: 53px;

  z-index: 2;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  background: var(--white);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;
  border-bottom: 1px solid var(--light-gray);

  *{
    font-size: 20px;
    font-weight: 900;
  }
  svg{
    color: var(--blue);
  }
`;
