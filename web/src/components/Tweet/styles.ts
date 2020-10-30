import styled from 'styled-components';

interface IOptionsProps {
  hoverColor?: string;
}

export const Container = styled.div`
  display: flex;
  padding: 10px 15px;

  border-bottom: 1px solid var(--light-gray);

  cursor: pointer;
  &:hover{
    background: #F7F7F7;
  }
`
export const ProfileIcon = styled.img`

  height: 49px;
  width: 49px;

  border-radius: 50%;
  margin-right: 10px;
`

export const Info = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  justify-content: space-between;

  button{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    color: var(--gray);
  }
`

export const Header = styled.header`
  display: flex;
  color: var(--gray);

  span{
    font-size: 14px;
    margin-right: 4px;
  }
`

export const Content = styled.div`
  margin-top: 2px;
  margin-right: 4px;
  word-wrap: normal;
  width: 100%;
  p{
    font-size: 15px;
    text-align: justify;
  }
  div{
    display: flex;
    justify-content: center;

    height: 285px;
    max-height: 285px;

    margin-top: 6px;
    border-radius: 15px;
    overflow: hidden;

    border: 1px solid var(--light-gray);
    a{
      height: 100%;
      width: 100%;
      position: relative;
      img{
        width: 100%;
        object-fit: contain;

        position: absolute;
        left: 0;
        right: 0;
        top: 0;
      }
    }
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 6px;
  margin-right: 80px;

`
export const TweetOptions = styled.button<IOptionsProps>`
  display: flex;
  align-items: center;

  background: transparent;
  color: var(--gray);
  span{
    font-size: 14px;
    margin-left: 6px;
  }
  &:hover{
    color: ${IOptionsProps => IOptionsProps.hoverColor ? `${IOptionsProps.hoverColor}` : ''}
  }
`
