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

const Image = '';

const Tweet: React.FC /* <Props> */ = (/* { TweetData, isMine } */) => {
  /* const { content } = TweetData;
  const { tweet } = content;
  const { user_id: user } = tweet; */
  return (
    <Container>
      <View>
        <UserImage
          source={{
            uri: 'https://api.hello-avatar.com/adorables/140/12312311231',
          }}
        />
      </View>
      <Content>
        <NameContainer>
          <ScreenName>Eduardo ZF</ScreenName>
          <Span>@Eduard_ZF</Span>
          <Span>- 17min</Span>
        </NameContainer>
        <ContentText>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a
          editoração eletrônica, permanecendo essencialmente inalterado. Se
          popularizou na década de 60, quando a Letraset lançou decalques
          contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus
          PageMaker.
        </ContentText>
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
