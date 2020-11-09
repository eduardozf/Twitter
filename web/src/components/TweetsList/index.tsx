import React, { createContext, useEffect, useState, useContext } from 'react';
import api from '../../services/api';

import { Container } from './styles';
import Tweet, { ITweetData } from '../Tweet';
import { AuthContext } from '../../context/AuthContext'

export const contentContext = createContext({} as any);


const TweetsList: React.FC = () => {
  const [tweets, setTweets] = useState<ITweetData[]>([]);
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/tweets').then(res => {
      setTweets(res.data);
    })
  }, [])

  function handleNewTweet(data: any) {
    const newTweet: ITweetData = data;
    setTweets(old => [newTweet, ...old])
    console.log(data);
  }

  async function handleDeleteTweet(id: string) {
    api.delete(`/tweets/delete/${id}`).then(response => {
      if (response.status === 204) {
        setTweets(tweets.filter(tweet => tweet.content.tweet.id !== id));
      }
    });
  }

  function checkIsMine(id: string) {
    if (user.id === id) {
      return true;
    }
    return false
  }

  return (
    <Container>
      <contentContext.Provider value={{ handleNewTweet, handleDeleteTweet }}>


        {tweets.map(tweetData => (
          <Tweet
            key={tweetData.content.tweet.id}
            TweetData={tweetData}
            isMine={checkIsMine(tweetData.content.tweet.user_id.id)}
          />
        ))}
      </contentContext.Provider>
    </Container>
  );
}

export default TweetsList;
