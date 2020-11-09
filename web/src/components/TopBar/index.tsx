import React from 'react';

import { Container } from './styles';

const TopBar: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default TopBar;
