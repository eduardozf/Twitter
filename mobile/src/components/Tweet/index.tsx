import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  UserImage,
  ScreenName,
  Span,
  Content,
  NameContainer,
  ContentText,
  ContentImage,
  InteractiveContainer,
  InteractItem,
} from './styles';

export interface ITweetData {
  content: ITweetContent;
}
interface ITweetContent {
  id: string;
  description: string | null;
  image: string | null;
  video: string | null;
  created_At: Date;
  tweet: ITweet;
}
interface ITweet {
  id: string;
  created_At: Date;
  user_id: ITweetUser;
}
interface ITweetUser {
  id: string;
  screen_name: string;
  username: string;
  avatar: string;
  verified: boolean;
}

interface Props {
  TweetData: ITweetData;
  isMine: boolean;
}

function calcDate(date: Date) {
  const now = new Date().getTime();
  const tweetDate = new Date(date).getTime();

  const seconds = Math.round(Math.abs((now - tweetDate) / 1000));
  const minutes = Math.round(Math.abs((now - tweetDate) / (60 * 1000)));
  const hours = Math.round(Math.abs((now - tweetDate) / (60 * 60 * 1000)));
  const days = Math.round(Math.abs((now - tweetDate) / (24 * 60 * 60 * 1000)));
  if (days > 0) {
    return new Date(tweetDate).toLocaleDateString();
  }
  if (hours > 0) {
    return `${hours.toString()} h`;
  }
  if (minutes > 0) {
    return `${minutes.toString()} min`;
  }
  if (seconds > 0) {
    return `${seconds.toString()}s`;
  }
}

const Tweet: React.FC<Props> = ({ TweetData, isMine }) => {
  const { content } = TweetData;
  const { tweet } = content;
  const { user_id: user } = tweet;
  return (
    <Container>
      <View>
        <UserImage
          source={{
            uri: user.avatar,
          }}
        />
      </View>
      <Content>
        <NameContainer>
          <ScreenName>{user.screen_name}</ScreenName>
          <Span>{`@${user.username}`}</Span>
          <Span>{`- ${calcDate(content.created_At)}`}</Span>
          {isMine && <Icon name="chevron-down" size={18} color="#627577" />}
        </NameContainer>

        {content.description !== null && (
          <ContentText>{content.description}</ContentText>
        )}
        {content.image !== null && (
          <ContentImage source={{ uri: content.image }} />
        )}

        <InteractiveContainer>
          <InteractItem>
            <Icon name="message-circle" size={18} color="#627577" />
            <Span>42</Span>
          </InteractItem>

          <InteractItem>
            <Icon name="repeat" size={18} color="#627577" />
            <Span>7</Span>
          </InteractItem>

          <InteractItem>
            <Icon name="heart" size={18} color="#627577" />
            <Span>817</Span>
          </InteractItem>
        </InteractiveContainer>
      </Content>
    </Container>
  );
};

export default Tweet;
