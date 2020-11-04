import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #ddd;

  font-size: 2em;
  height: 100%;
  .topBar{
    display: flex;
    align-items: center;
    color: var(--blue);

    height: 50px;
    padding-left: 20px;
  }

  .content{
    background: var(--blue);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
      color: #fff;
      font-weight: bold;
    }
  }
`;
