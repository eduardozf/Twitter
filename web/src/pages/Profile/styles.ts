import styled from 'styled-components';

interface INavProps {
  Active?: boolean;
}

export const Container = styled.div`
  width: 597px;
  position: relative;

  border-left: 1px solid var(--light-gray);
  border-right: 1px solid var(--light-gray);

  overflow-y: scroll;
  ::-webkit-scrollbar{
    display: none;
  }
`

export const TopBarContent = styled.div`
  display: flex;
  flex: 1;

  .profileNameContainer{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    margin-left: 30px;

    h1{
      line-height: 20px;
    }
    span{
      font-size: 12px;
      color: var(--gray);
      font-family: Arial, Helvetica, sans-serif;
      font-weight: normal;
    }
  }
  .followButton{
    display: flex;
    height: 40px;
    span{
      font-size: 14px;
      margin: 0 50px;
    }
  }

`

export const ProfileContainer = styled.div`
  position: relative;
`
export const CoverContainer = styled.div`
  background: #aaa;
  height: 200px;
  img{
    height: 100%;
  }
`
export const ProfilePicture = styled.div`
  width: 140px;
  height: 140px;

  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #fff;

  position: absolute;
  top: 130px;
  left: 15px;

  img{
    height: 100%;
    width: 100%;
  }
`

export const InfoContainer = styled.div`
  margin-top: 70px;
  margin-left: 15px;
  margin-right: 15px;

  div{
    margin: 3px 0;
  }

  h2{
    line-height: 20px;
  }
  span{
    font-size: 14px;
    color: var(--gray);
  }
  svg{
    color: var(--gray);
    margin-right: 4px;
  }
  a{
    font-size: 14px;
    text-decoration: none;
    color: var(--blue)
  }
`
export const ExtraInfoContainer = styled.div`
  display: flex;
  div{
    display: flex;
    align-items: center;
  }
  .link{
    margin-left: 6px;
  }
`
export const FollowInfo = styled.div`
  display: flex;
  div{
    margin-right: 6px;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  flex: 1;

  height: 50px;
  margin-top: 12px;
`

export const NavButton = styled.button<INavProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  background: #fff;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  color: ${props => props.Active ? 'var(--blue)' : 'var(--gray)'};
  border-bottom: ${props => props.Active ? '2px solid var(--blue)' : '2px solid var(--light-gray)'};
  :hover{
    background: rgba(var(--rgblue), 0.1);
  }
`
