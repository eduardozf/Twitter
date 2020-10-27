import React from 'react';

import { Container } from './styles';

export interface IProps {
  children?: React.ReactNode;
  Disable?: boolean;
  responsiveIcon?: boolean;
}

const ButtonFilled: React.FC<IProps> = ({ children, Disable, responsiveIcon }) => {
  return (
    <Container disabled={Disable} responsiveIcon={responsiveIcon}>
      {children}
    </Container>
  )
}

export default ButtonFilled;
