import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  :hover{
    background: var(--light-gray);
  }
`
export const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
`

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
`

export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  font-size: 14px;
  span{
    color: var(--gray);
  }
`

export const ButtonContainer = styled.div`

`
