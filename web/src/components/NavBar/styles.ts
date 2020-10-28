import styled from 'styled-components';

// Responsive Width && Height values in px
const rWidth = 1300;
const rHeight = 800;
const rHeight2 = 700;

// Container
export const OptionsContainer = styled.div`
  width: 255px;
  padding: 0 10px;

  position: relative;
  @media (max-width: ${rWidth}px){
    width: 65px;
    margin-right: 12px;
  }
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

  @media (max-width: ${rWidth}px){
    height: 45px;
    width: 45px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;

  button{
    margin: 8px 0;
    @media (max-height: ${rHeight}px){
      margin: 4px 0;
      svg{
        font-size: 26px!important;
      }
    }
    @media (max-height: ${rHeight2}px){
      margin: 2px 0;
      svg{
        font-size: 22px!important;
      }
    }
  }

`
