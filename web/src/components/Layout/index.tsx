import React from 'react';

import { Container } from './styles';
import NavBar from '../NavBar';
import Content from '../Content';
import Hightlights from '../Highlights';

const Layout: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content />
      <Hightlights />
    </Container>
  );
}

export default Layout;
