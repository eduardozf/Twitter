import React from 'react';

import { Container } from './styles';

const ButtonBorder: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ButtonBorder;
