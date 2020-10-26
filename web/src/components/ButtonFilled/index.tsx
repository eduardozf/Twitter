import React from 'react';

import { Container } from './styles';

export interface IProps {
  children?: React.ReactNode;
  Disable?: boolean;
}

const ButtonFilled: React.FC<IProps> = ({ children, Disable }) => {
  return (
    <Container disabled={Disable}>
      {children}
    </Container>
  )
}

export default ButtonFilled;
