import React, {ButtonHTMLAttributes} from 'react';

import { Button } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const ButtonBorder: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}

export default ButtonBorder;
