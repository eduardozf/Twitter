import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  padding: 10px 15px;
  border-bottom: 12px solid var(--light-gray);
`

export const AvatarContainer = styled.div`
  display: flex;
  margin-right: 8px;
`

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

export const DataContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  .TextArea{
    margin-top: 14px;
    margin-left: 8px;

    font-size: 18px;
    resize: none;
  }
`

export const Data = styled.textarea`
  flex: 1;
  font-size: 18px;

  overflow: hidden;
  resize: none;

  margin-top: 14px;
`

export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  button{
    height: 40px;
  }
  button span{
    margin: 0 30px;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  margin-top: 10px;


  button{
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--blue);
    background: transparent;
    border-radius: 50%;

    height: 40px;
    width: 40px;

    cursor: pointer;
    font-size: 22px;

    &:hover{
      background: rgba(var(--rgblue),0.1)
    }
  }
`
