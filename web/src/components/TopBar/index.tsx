import React from 'react';

import { Container } from './styles';
import { WiStars } from 'react-icons/wi';

const TopBar: React.FC = () => {
  return (
    <Container>
      <h3>Tweets Mais Recentes</h3>
      <WiStars style={{ fontSize: '38px' }} />
    </Container>
  );
}

export default TopBar;
