import React from 'react';

import { Container } from './styles';
import SearchBar from '../SearchBar';
import Trends from '../Trends';
import Suggestions from '../Suggestions';
import Footer from '../Footer';


const Highlights: React.FC = () => {
  return (
    <Container>
      <SearchBar />
      <Trends />
      <Suggestions />
      <Footer />
    </Container>
  );
}

export default Highlights;
