import React from 'react';

import { Container } from './styles';
import NewTweet from '../NewTweet';
import Tweet from '../Tweet';
import TopBar from '../TopBar';


const Content: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <div>
        <NewTweet />
        <Tweet />
        <Tweet />
        <Tweet Verified />
        <Tweet Verified />
        <Tweet Verified />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet Verified />
        <Tweet Verified />
        <Tweet Verified />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>

    </Container>
  );
}

export default Content;
