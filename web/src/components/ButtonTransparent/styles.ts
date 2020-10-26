import styled from 'styled-components';
import { Props } from '.'

export const Container = styled.button<Props>`
  display: flex;
  align-items: center;

  background: none;
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

`
