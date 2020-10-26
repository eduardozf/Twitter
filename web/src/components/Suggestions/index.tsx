import React from 'react';

import { Container, Title, MoreBtn } from './styles';
import ProfileFollow from '../ProfileFollow';

const Suggestions: React.FC = () => {
  return (
    <Container>
      <Title>
        <h3>Quem seguir</h3>
      </Title>

      <ProfileFollow Verified styles={{ borderBottom: '1px solid var(--light-gray)' }} />
      <ProfileFollow styles={{ borderBottom: '1px solid var(--light-gray)' }} />
      <ProfileFollow styles={{ borderBottom: '1px solid var(--light-gray)' }} />

      <MoreBtn>Mostrar mais</MoreBtn>
    </Container>
  )
}

export default Suggestions;
