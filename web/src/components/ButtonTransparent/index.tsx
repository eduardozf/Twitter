import React from 'react';

import { Container } from './styles';

export interface Props {
  children: React.ReactNode;
  Active?: boolean;
}

const ButtonTransparent: React.FC<Props> = ({ children, Active }) => {
  return (
    <Container Active={Active}>
      {children}
    </Container>
  );
}

export default ButtonTransparent;
