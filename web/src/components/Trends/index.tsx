import React from 'react';

import { Container, Title, MoreBtn } from './styles';
import TrendItem from '../TrendItem';

const Trends: React.FC = () => {
  return (
    <Container>
      <Title>
        <h3>Oque está acontecendo</h3>
      </Title>

      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />

      <MoreBtn>Mostrar mais</MoreBtn>

    </Container>
  )
}

export default Trends;
