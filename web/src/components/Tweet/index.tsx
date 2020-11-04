import React from 'react';

import { Container, ProfileIcon, Info, Header, Content, Options, TweetOptions } from './styles';
import { GoVerified, FiMoreHorizontal, BsChat, IoMdRepeat, FiHeart, AiOutlineToTop } from 'react-icons/all';
import ButtonTransparent from '../ButtonTransparent';

export interface ITweetData {
  content: ITweetContent;
}
interface ITweetContent {
  id: string,
  description: string | null;
  image: string | null;
  video: string | null;
  created_At: Date;
  tweet_id: ITweet;
}
interface ITweet {
  id: string;
  created_At: Date;
  user_id: ITweetUser;
}
interface ITweetUser {
  id: string,
  screen_name: string,
  username: string,
  avatar: string,
  verified: boolean,
}

interface Props {
  TweetData: ITweetData;
}

function calcDate(date: Date) {
  const now = new Date().getTime();
  const tweetDate = new Date(date).getTime()

  const seconds = Math.round(Math.abs((now - tweetDate) / 1000))
  const minutes = Math.round(Math.abs((now - tweetDate) / (60 * 1000)))
  const hours = Math.round(Math.abs((now - tweetDate) / (60 * 60 * 1000)))
  const days = Math.round(Math.abs((now - tweetDate) / (24 * 60 * 60 * 1000)))
  if (days > 0) {
    return (days.toString() + 'd');
  } else if (hours > 0) {
    return (hours.toString() + 'h');
  } else if (minutes > 0) {
    return (minutes.toString() + 'm');
  } else if (seconds > 0) {
    return (seconds.toString() + 's');
  }
}

const Tweet: React.FC<Props> = ({ TweetData }) => {
  const { content } = TweetData;
  const { tweet_id: tweet } = content;
  const { user_id: user } = tweet;
  return (
    <Container>
      <div>
        <ProfileIcon
          src={user.avatar}
          alt="Profile"
        />
      </div>
      <div style={{ width: '100%' }}>
        <Info>
          <Header>
            <span style={{ color: "var(--black)", fontWeight: "bold" }}>{user.screen_name}</span>
            {user.verified ?
              <GoVerified style={{
                marginRight: "8px",
                alignSelf: "center",
                color: "var(--blue)",
                fontSize: "18px"
              }} /> :
              ''
            }
            <span>@{user.username}</span>
            <span> - </span>
            <span>{calcDate(content.created_At)}</span>
          </Header>
          <ButtonTransparent>
            <FiMoreHorizontal />
          </ButtonTransparent>
        </Info>
        <Content>
          {(content.description !== null) && (
            <p>{content.description}</p>
          )}
          {(content.image !== null) && (
            <div>
              <a href="/#">
                <img src={content.image} alt="Tweet" />
              </a>
            </div>
          )}
        </Content>
        <Options>
          <TweetOptions hoverColor="var(--blue)" >
            <BsChat style={{ fontSize: "14px" }} />
            {/* <span>{TweetData.comments.length > 0 && TweetData.comments.length}</span> */}
          </TweetOptions>
          <TweetOptions hoverColor="var(--green)">
            <IoMdRepeat style={{ fontSize: "14px", transform: "rotate(90deg)" }} />
            {/* <span>{TweetData.retweets.length > 0 && TweetData.retweets.length}</span> */}
          </TweetOptions>
          <TweetOptions hoverColor="var(--pink)">
            <FiHeart style={{ fontSize: "14px" }} />
            {/* <span>{TweetData.liked_by.length > 0 && TweetData.liked_by.length}</span> */}
          </TweetOptions>
          <TweetOptions hoverColor="var(--blue)">
            <AiOutlineToTop style={{ fontSize: "18px" }} />
          </TweetOptions>
        </Options>
      </div>

    </Container>
  )
}

export default Tweet;
