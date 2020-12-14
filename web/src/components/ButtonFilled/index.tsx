import React, {ButtonHTMLAttributes} from 'react';

import { Button } from './styles';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  responsiveIcon?: boolean;
}

const ButtonFilled: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}

export default ButtonFilled;
