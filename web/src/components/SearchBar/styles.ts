import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  z-index: 2;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  height: 53px;
  padding: 5px;

  background: var(--white);
`

export const InputContainer = styled.div`
  display: flex;
  flex: 1;

  background: var(--light-gray);

  margin-top: 5px;
  margin-bottom: 8px;

  border-radius: 25px;
  :not(:focus-within){
    padding: 3px 8px;
  }
  :focus-within{
    background: var(--white);
    border: 3px solid var(--blue);
    svg{
      color: var(--blue)!important;
    }
  }

  input{
    font-size: 16px;
    background: transparent;

    ::placeholder{
      color: var(--gray);
    }
  }
`;
