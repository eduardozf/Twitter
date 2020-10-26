import React from 'react';

import { Container, LeftContainer, RightContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <a href="/">Termos de serviço</a>
        <a href="/">Política de anúncios</a>
        <span>© 2020 Twitter, Inc.</span>
      </LeftContainer>
      <RightContainer>
        <a href="/">Informações de anúncios</a>
        <a href="/">Política de cookies</a>
        <a href="/">Mais ... </a>
      </RightContainer>
    </Container>
  )
}

export default Footer;
