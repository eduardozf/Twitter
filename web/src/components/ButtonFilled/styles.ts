import styled, { css } from 'styled-components';
import { IProps } from '.';

export const Container = styled.button<IProps>`
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
  @media (max-width: 1000px){
    ${props => props.responsiveIcon && css`
      border-radius: 50%;
      padding: 10px;
      svg{
        display: block!important;
        }
      span{
        display: none;
      }
    `}
  }
`
