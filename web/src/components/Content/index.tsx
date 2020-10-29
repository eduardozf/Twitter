import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container } from './styles';
import NewTweet from '../NewTweet';
import Tweet, { ITweet } from '../Tweet';
import TopBar from '../TopBar';


const Content: React.FC = () => {
  const [tweets, setTweets] = useState<ITweet[]>([]);

  useEffect(() => {
    api.get('/tweets').then(res => {
      setTweets(res.data);
    })
  }, [])

  return (
    <Container>
      <TopBar />
      <div>
        <NewTweet />
        {tweets.map(tweet => {
          return <Tweet key={tweet.id} TweetData={tweet} />
        })}
      </div>
    </Container>
  );
}

export default Content;
