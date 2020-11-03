import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Container } from './styles';
import NewTweet from '../NewTweet';
import Tweet, { ITweetData } from '../Tweet';
import TopBar from '../TopBar';


const Content: React.FC = () => {
  const [tweets, setTweets] = useState<ITweetData[]>([]);

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
        {tweets.map(tweetData => {
          return <Tweet key={tweetData.content.tweet_id.id} TweetData={tweetData} />
        })}
      </div>
    </Container>
  );
}

export default Content;
