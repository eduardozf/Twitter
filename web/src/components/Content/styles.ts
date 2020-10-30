import styled from 'styled-components';

export const Container = styled.main`

  width: 597px;
  position: relative;

  overflow-y: scroll;

  border-left: 1px solid var(--light-gray);
  border-right: 1px solid var(--light-gray);

  ::-webkit-scrollbar{
    display: none;
  }
`
