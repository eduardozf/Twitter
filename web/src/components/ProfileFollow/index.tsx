import React from 'react';

import { Container, UserContainer, Avatar, UsernameContainer, ButtonContainer } from './styles';
import ButtonBorder from '../ButtonBorder';
import { GoVerified } from 'react-icons/go';

interface IProps {
  Verified?: boolean;
  styles?: React.CSSProperties;
}

const ProfileFollow: React.FC<IProps> = ({ styles, Verified }) => {
  return (
    <Container style={styles}>
      <UserContainer>
        <Avatar src="https://api.hello-avatar.com/adorables/60/12312311231" alt="Profile Picture" />
        <UsernameContainer>
          <h4>
            Random User
            {Verified ? <GoVerified style={{ color: 'var(--blue)', marginLeft: '4px' }} /> : ''}
          </h4>
          <span>@Random_User23</span>
        </UsernameContainer>
      </UserContainer>
      <ButtonContainer>
        <ButtonBorder>Seguir</ButtonBorder>
      </ButtonContainer>
    </Container>
  )
}

export default ProfileFollow;
