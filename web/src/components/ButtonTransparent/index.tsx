import React from 'react';

import { Container } from './styles';

export interface Props {
  children: React.ReactNode;
  Active?: boolean;
  [x: string]: any;
}

const ButtonTransparent: React.FC<Props> = ({ children, Active, ...rest }) => {
  return (
    <Container Active={Active} {...rest}>
      {children}
    </Container>
  );
}

export default ButtonTransparent;
