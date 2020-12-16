import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Tweet, { ITweetData } from '../../components/Tweet';
import { AuthContext } from '../../context/AuthContext';

import { Container } from './styles';
import TweetBtn from '../../components/TweetBtn';
import NavBar from '../../components/NavBar';

const Main: React.FC = () => {
  const navigation = useNavigation();
  const [tweets, setTweets] = useState<ITweetData[]>([]);
  const { user, isAuthenticated, Logout } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) return;
    api.get('/tweets').then(res => {
      if (res.status === 401) return navigation.navigate('Login');
      setTweets(res.data);
    });
  }, [isAuthenticated]);

  function checkIsMine(id: string) {
    if (user.id === id) {
      return true;
    }
    return false;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ebebeb" />
      {console.log({ isAuthenticated })}
      {isAuthenticated && (
        <>
          <Container>
            {tweets &&
              tweets.map(tweetData => (
                <Tweet
                  key={tweetData.content.tweet.id}
                  TweetData={tweetData}
                  isMine={checkIsMine(tweetData.content.tweet.user_id.id)}
                >
                  {tweetData.content.description}
                </Tweet>
              ))}
          </Container>
          <TweetBtn
            onPress={() => {
              console.log('Pressed New Tweet Button');
              Logout();
              navigation.navigate('Login');
            }}
          />
        </>
      )}
      <NavBar ActiveButton={{ home: true }} />
    </>
  );
};

export default Main;
