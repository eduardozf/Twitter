import React from 'react';

import { Container } from './styles';
import { WiStars } from 'react-icons/wi';

import NewTweet from '../NewTweet';
import TopBar from '../TopBar';
import TweetsList from '../TweetsList';

const Content: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <h3>Tweets Mais Recentes</h3>
        <WiStars style={{ fontSize: '38px' }} />
      </TopBar>
      <NewTweet />
      <TweetsList />
    </Container>
  );
}

export default Content;
