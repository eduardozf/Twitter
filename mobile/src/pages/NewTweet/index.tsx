/* eslint-disable prettier/prettier */
import React, { useContext, useCallback, useState } from 'react';
import { View, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';

import {
  Container,
  HeaderContainer,
  BackButton,
  TweetButton,
  TweetButtonText,
  TweetContainer,
  UserImage,
  TweetInput,
  PrivacyContainer,
  PrivacyText,
  OptionsContainer,
  LeftOptions,
  RightOptions,
  InteractItem,
} from './styles';

interface Content {
  description: string | null;
  image: string | null;
  video: string | null;
}

const NewTweet: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [inputContent, setInputContent] = useState(String);

  const handlePostTweet = useCallback(async (content: Content) => {
    await api.post('/tweets/new', { content }).then(response => {
      console.log(response);
      /* handleNewTweet(response.data); */
    })
  }, []);
  return (
    <Container>
      <HeaderContainer>
        {navigation.canGoBack() ? (
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon name="x" size={24} color="#1da1f2" />
          </BackButton>
        ) : <View />}
        <TweetButton
          onPress={() => {
            handlePostTweet({ description: inputContent, image: null, video: null });
            navigation.goBack()
          }}
        >
          <TweetButtonText>Tweetar</TweetButtonText>
        </TweetButton>
      </HeaderContainer>
      <TweetContainer>
        <UserImage
          source={{
            uri: user.avatar,
          }}
        />
        <ScrollView>
          <TweetInput
            placeholder="O que está acontecendo?"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            onChangeText={value => setInputContent(value)}
          />
        </ScrollView>
      </TweetContainer>
      <PrivacyContainer>
        <Icon name="globe" size={18} color="#1da1f2" />
        <PrivacyText>Qualquer pessoa pode responder</PrivacyText>
      </PrivacyContainer>
      <OptionsContainer>
        <LeftOptions>
          <InteractItem>
            <Icon name="image" size={28} color="#1da1f2" />
          </InteractItem>
          <InteractItem>
            <Icon
              name="square"
              size={28}
              color="#1da1f2"
              style={{ position: 'absolute' }}
            />
            <MIcon name="gif" size={28} color="#1da1f2" />
          </InteractItem>
          <InteractItem>
            <Icon
              name="square"
              size={28}
              color="#1da1f2"
              style={{ position: 'absolute' }}
            />
            <MIcon name="bar-chart" size={28} color="#1da1f2" />
          </InteractItem>
          <InteractItem>
            <Icon name="map-pin" size={24} color="#1da1f2" />
          </InteractItem>
        </LeftOptions>

        <RightOptions>
          <Icon name="circle" size={28} color="#c3d9e4" />

          <InteractItem style={{ backgroundColor: '#1da1f2', padding: 4 }}>
            <Icon name="plus" size={19} color="#fff" />
          </InteractItem>
        </RightOptions>
      </OptionsContainer>
    </Container>
  );
};

export default NewTweet;
