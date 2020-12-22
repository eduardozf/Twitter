import styled from 'styled-components/native';

interface Porps {
  isFocused: boolean;
}

export const TextInput = styled.TextInput<Porps>`
  border: 1px solid ${props => (props.isFocused ? '#1DA1F2' : '#aaa')};
  margin: 4px 0;
  border-radius: 4px;

  padding: 5px 4px;
`;
