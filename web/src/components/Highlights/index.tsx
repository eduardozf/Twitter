import React from 'react';

import { Container } from './styles';
import SearchBar from '../SearchBar';
import Trends from '../Trends';
import Suggestions from '../Suggestions';


const Highlights: React.FC = () => {
  return (
    <Container>
      <SearchBar />
      <Trends />
      <Suggestions />
    </Container>
  );
}

export default Highlights;
