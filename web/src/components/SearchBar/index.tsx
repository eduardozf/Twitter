import React from 'react';

import { Container, InputContainer } from './styles';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <InputContainer>
        <FaSearch style={{ fontSize: "18px", margin: "10px", color: "var(--gray)" }} />
        <input type="text" placeholder="Buscar no Twitter" />
      </InputContainer>
    </Container>
  );
}

export default SearchBar;
