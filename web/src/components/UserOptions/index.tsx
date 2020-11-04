import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'

import { Container, UserAvatar, Name, Username, UsernameContainer, IconContainer } from './styles';
import { FiChevronDown } from 'react-icons/fi'

const UserOptions: React.FC = () => {
  const { user, Logout } = useContext(AuthContext);
  return (
    <Container onClick={() => { Logout() }}>
      <UserAvatar src={user.avatar} alt="Profile" />
      <UsernameContainer>
        <Name>{user.screen_name}</Name>
        <Username>@{user.username}</Username>
      </UsernameContainer>
      <IconContainer>
        <FiChevronDown />
      </IconContainer>
    </Container>
  );
}

export default UserOptions;
