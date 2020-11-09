import React from 'react';

import {
  Container, TopBarContent, ProfileContainer, CoverContainer, ProfilePicture,
  InfoContainer, ExtraInfoContainer, FollowInfo, NavContainer, NavButton
} from './styles';
import { FaArrowLeft, FaMapMarkerAlt, FaLink, FaCalendarAlt } from 'react-icons/fa';

import TopBar from '../../components/TopBar';
import TweetsList from '../../components/TweetsList';
import ButtonTransparent from '../../components/ButtonTransparent';
import ButtonFilled from '../../components/ButtonFilled';

const Profile: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <TopBarContent>
          <ButtonTransparent>
            <FaArrowLeft style={{ fontSize: '18px' }} />
          </ButtonTransparent>
          <div className="profileNameContainer">
            <h1>Profile Name</h1>
            <span>600 Tweets</span>
          </div>
          <div className="followButton">
            <ButtonFilled>
              <span>Seguir</span>
            </ButtonFilled>
          </div>
        </TopBarContent>
      </TopBar>

      <ProfileContainer>
        <CoverContainer>
          <img src="https://pbs.twimg.com/profile_banners/1042827750/1579882836/1500x500" alt="User Cover" />
        </CoverContainer>
        <ProfilePicture>
          <img src="https://pbs.twimg.com/profile_images/1271019357804642304/Ulfi4mQe_400x400.jpg" alt="User" />
        </ProfilePicture>
        <InfoContainer>
          <div>
            <h2>User name</h2>
            <span>@User_name</span>
          </div>
          <p>User profile description</p>
          <ExtraInfoContainer>
            <div className="location">
              <FaMapMarkerAlt />
              <span>Sei la onde, BH</span>
            </div>
            <div className="link">
              <FaLink />
              <a href="/">google.com</a>
            </div>
          </ExtraInfoContainer>
          <div className="joinedAtContainer">
            <FaCalendarAlt />
            <span>{new Date().toDateString()}</span>
          </div>
          <FollowInfo>
            <div className="following">
              123 <span>Seguindo</span>
            </div>
            <div className="followers">
              321 <span>Seguidores</span>
            </div>
          </FollowInfo>
        </InfoContainer>
      </ProfileContainer>

      <NavContainer>
        <NavButton Active>Tweets</NavButton>
        <NavButton>Tweets e respostas</NavButton>
        <NavButton>Mídia</NavButton>
        <NavButton>Curtidas</NavButton>
      </NavContainer>
      <TweetsList />
    </Container>
  );
}

export default Profile;
