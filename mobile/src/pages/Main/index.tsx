import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import TweetBtn from '../../components/TweetBtn';
import NavBar from '../../components/NavBar';
import TweetsList from '../../components/TweetList';

const Main: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ebebeb" />

      <Container>
        <TweetsList />
      </Container>
      <TweetBtn
        onPress={() => {
          navigation.navigate('NewTweet');
        }}
      />

      <NavBar ActiveButton={{ home: true }} />
    </>
  );
};

export default Main;
