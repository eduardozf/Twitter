import styled from 'styled-components';
import { ButtonProps } from '.';

// Responsive Width value in px
const rWidth = 1300;

// Container
export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;

  background: transparent;
  color: ${props => props.Active ? 'var(--blue)' : 'var(--black)'};

  font-size: 18px;

  padding: 8px;
  border-radius: 50px;

  cursor: pointer;

  span{
    font-weight: 800;
    margin-left: 10px;
    line-height: 1.5;
  }

  &:hover{
    background: rgba(var(--rgblue), 0.1);
    color: var(--blue);
  }

  @media (max-width: ${rWidth}px){
    justify-content: center;
    border-radius: 50%;
    span{
      display: none;
    }
  }

`
