import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  bottom: 15px;
  left: 0;
  right: 4px;

  padding: 5px 10px;
  cursor: pointer;

  border-radius: 50px;
  &:hover{
    background: rgba(var(--rgblue), 0.1);
  }
  @media (max-width: 1000px){
    justify-content:center;
    padding: 5px;
  }
  @media (max-height: 500px){
    display: none;
  }
`

export const UserAvatar = styled.img`
  border-radius: 50%;

  height: 40px;
  width: 40px;
`

export const UsernameContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  line-height: 18px;

  margin: 0 10px;
  @media (max-width: 1000px){
    display: none;
  }
`

export const Name = styled.h3`
  font-size: 14px;
  font-weight: bold;
`

export const Username = styled.span`
  color: var(--gray);
  font-size: 14px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 22px;
  @media (max-width: 1000px){
    display: none;
  }
`
