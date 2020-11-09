import React from 'react';

import { Container } from './styles';

export interface IProps {
  children?: React.ReactNode;
  Disable?: boolean;
  responsiveIcon?: boolean;
  [x: string]: any;
}



const ButtonFilled: React.FC<IProps> = ({ children, Disable, responsiveIcon, ...rest }) => {
  return (
    <Container disabled={Disable} responsiveIcon={responsiveIcon} {...rest}>
      {children}
    </Container>
  )
}

export default ButtonFilled;
