import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;

  height: 45px;
  background: var(--light-gray);

  margin-top: 5px;
  margin-bottom: 8px;
  padding: 5px;

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
