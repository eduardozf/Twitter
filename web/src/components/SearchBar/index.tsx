import React from 'react';

import { Container } from './styles';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <FaSearch style={{ fontSize: "18px", margin: "10px", color: "var(--gray)" }} />
      <input type="text" placeholder="Buscar no Twitter" />
    </Container>
  );
}

export default SearchBar;
