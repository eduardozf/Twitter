import React, {ButtonHTMLAttributes} from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  Active?: boolean;
}


const ButtonTransparent: React.FC<ButtonProps> = ({ children, Active, ...rest }) => {
  return (
    <Container Active={Active} {...rest}>
      {children}
    </Container>
  );
}

export default ButtonTransparent;
