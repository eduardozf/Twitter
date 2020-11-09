import styled from 'styled-components';

export const Container = styled.main`

  width: 597px;
  position: relative;

  border-left: 1px solid var(--light-gray);
  border-right: 1px solid var(--light-gray);

  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
`
