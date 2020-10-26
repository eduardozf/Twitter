import React from 'react';

import { Container, UserAvatar, Name, Username, UsernameContainer, IconContainer } from './styles';
import { FiChevronDown } from 'react-icons/fi'

const UserOptions: React.FC = () => {
  return (
    <Container>
      <UserAvatar src="https://api.hello-avatar.com/adorables/140/11c445d5-bb49-43a9-96fc-8ffcbe448ca8" alt="" />
      <UsernameContainer>
        <Name>Eduardo ZF</Name>
        <Username>@Eduardo_ZF</Username>
      </UsernameContainer>
      <IconContainer>
        <FiChevronDown />
      </IconContainer>
    </Container>
  );
}

export default UserOptions;
