import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;

  margin: 12px 0;

  background: rgb(245,248,250);
  border-radius: 20px;
`

export const Title = styled.div`
  padding: 15px 10px;

  font-weight: 900;

  border-bottom: 1px solid var(--light-gray);
`

export const MoreBtn = styled.button`
  flex: 1;

  text-align: left;
  text-indent: 14px;

  color: var(--blue);
  background: rgb(245,248,250);

  border-radius: 0 0 20px 20px;
  min-height: 45px;
  cursor: pointer;

  :hover{
    background: var(--light-gray);
  }
`
