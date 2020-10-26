import React from 'react';

import { Container, LeftContainer, Header, Title, Footer, RightContainer } from './styles';

const TrendItem: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <Header>Lorem ipsum - há 50 minutos</Header>
        <Title>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
        </Title>
        <Footer>
          <span>Assuntos do Momento: </span>
          <a href="/">Lorem ipsum</a>
        </Footer>
      </LeftContainer>
      <RightContainer>
        <img src='https://api.hello-avatar.com/adorables/60/hjshjashgsgaghgh' alt="" style={{ borderRadius: '10px' }} />
      </RightContainer>
    </Container>
  )
}

export default TrendItem;
