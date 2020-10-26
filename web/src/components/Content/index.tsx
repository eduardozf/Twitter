import React from 'react';

import { Container, ContentContainer } from './styles';
import NewTweet from '../NewTweet';
import Tweet from '../Tweet';
import TopBar from '../TopBar';


const Content: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <ContentContainer>
        <NewTweet />
        <Tweet />
        <Tweet />
        <Tweet Verified />
        <Tweet Verified />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </ContentContainer>

    </Container>
  );
}

export default Content;
