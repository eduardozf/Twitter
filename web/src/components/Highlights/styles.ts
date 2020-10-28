import styled from 'styled-components';
// Responsive Width value in px
const rWidth = 1000;

// Container
export const Container = styled.div`

  margin-left: 25px;

  width: 350px;
  flex-direction: column;

  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
  @media(max-width: ${rWidth}px){
    display: none;
  }
`;
