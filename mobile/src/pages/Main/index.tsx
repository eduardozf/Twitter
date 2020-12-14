import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'react-native';

import api from '../../services/api';
import Tweet, { ITweetData } from '../../components/Tweet';
import { AuthContext } from '../../context/AuthContext';

import { Container } from './styles';

const Main: React.FC = () => {
  const [tweets, setTweets] = useState<ITweetData[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/tweets').then(res => {
      setTweets(res.data);
    });
  }, []);

  function checkIsMine(id: string) {
    if (user.id === id) {
      return true;
    }
    return false;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ebebeb" />
      <Container>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        {/*  {tweets &&
          tweets.map(tweetData => (
            <Tweet
              key={tweetData.content.tweet.id}
              TweetData={tweetData}
              isMine={checkIsMine(tweetData.content.tweet.user_id.id)}
            >
              {tweetData.content.description}
            </Tweet>
          ))} */}
      </Container>
    </>
  );
};

export default Main;
